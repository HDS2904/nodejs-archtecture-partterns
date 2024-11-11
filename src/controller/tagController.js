const Tag = require('../model/tag.schema');

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const createTag = async (req, res) => {
  const { name, description, color } = req.body;

  if (!name || !color) {
    return res.json({
      ok: false,
      message: 'Ingrese los datos obligatorios.'
    })
  }

  const tag = new Tag({ name, description, color, isActive: true });
  await tag.save();

  res.json({
    ok: true,
    message: 'Etiqueta registrada.'
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const getAllTag = async (req, res) => {

  const result = await Tag.find({});

  const listTag = result.filter(tag => tag.isActive);

  res.json({
    ok: true,
    data: listTag
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Promise<void> }
*/
const getByIdTag = async (req, res) => {

  const { id } = req.params;

  const result = await Tag.findById(id);

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
const updateTag = async (req, res) => {

  const { id } = req.params;
  const { name, description, color } = req.body;

  const result = await Tag.findOneAndUpdate({_id: id}, {
    $set: { name, description, color }
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
const deleteTag = async (req, res) => {

  const { id } = req.params;
  const result = await Tag.findOneAndUpdate({_id: id}, {
    $set: { isActive: false }
  });

  res.json({
    ok: true,
    data: result
  })
}

module.exports = {
  createTag,
  getAllTag,
  getByIdTag,
  updateTag,
  deleteTag
};