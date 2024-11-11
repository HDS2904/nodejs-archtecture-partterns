const Group = require('../model/group.schema');
const Tag = require('../model/tag.schema');
const { STATUS_AVALIBLE } = require('../utils/constants');

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const createGroup = async (req, res) => {
  const { code, name, description, maxMembers, tags } = req.body;

  if (!code || !name || !maxMembers) {
    return res.json({
      ok: false,
      message: 'Ingrese los datos obligatorios.'
    });
  }

  const valid = await Tag.find({_id: { $in: tags }});
  if (!valid || valid.length !== tags.length) {
    return res.json({
      ok: false,
      message: 'Hay etiquetas que no se encuentran activas.'
    });
  }
  const parseListTag = valid.map(tag => ({_id: tag._id, name: tag.name}));

  const group = new Group({ code, name, description, maxMembers, tags: parseListTag });
  await group.save();

  res.json({
    ok: true,
    message: 'Grupo registrado.'
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const getAllGroup = async (req, res) => {

  const result = await Group.find({});
  console.log("🚀 ~ getAllGroup ~ result:", result)

  const listGroup = result.filter(group => group.status === STATUS_AVALIBLE.active);

  res.json({
    ok: true,
    data: listGroup
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const getByIdGroup = async (req, res) => {

  const { id } = req.params;

  const result = await Group.findById(id);

  res.json({
    ok: true,
    data: result
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const updateGroup = async (req, res) => {

  const { id } = req.params;
  const { code, name, maxMembers, type, description } = req.body;

  const listTag = type ? await Group.find({type}) : [];

  const result = await Group.findOneAndUpdate({_id: id}, {
    $set: { code, name, description, maxMembers, tags: listTag }
  }, { new: true });

  res.json({
    ok: true,
    data: result
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const deleteGroup = async (req, res) => {

  const { id } = req.params;
  const result = await Group.findOneAndUpdate({_id: id}, {
    $set: { status: STATUS_AVALIBLE.inactive }
  });

  res.json({
    ok: true,
    data: result
  })
}

module.exports = {
  createGroup,
  getAllGroup,
  getByIdGroup,
  updateGroup,
  deleteGroup
};