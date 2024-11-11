const User = require('../model/user.schema');
const { STATUS_AVALIBLE } = require('../utils/constants');

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
* @param { Request } req
* @param { Response } res
* @return { void }
*/
const createUser = async (req, res) => {
  console.log("🚀 ~ route.post ~ body:", req.body);
  const { username, email, password, name, lastName, age, role, status, group } = req.body;

  if (!username || !email || !password) {
    return res.json({
      ok: false,
      message: 'Datos invalidos'
    })
  }

  const user = new User({ username, email, password, name, lastName, age, role, status, group });
  await user.save();

  res.json({
    ok: true,
    message: 'Estudiante registrado.'
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Array<Object> }
*/
const getAllUser = async (req, res) => {

  const result = await User.find({});

  const listUser = result.filter(user => user.status === STATUS_AVALIBLE.active);

  res.json({
    ok: true,
    data: listUser
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Object }
*/
const getByIdUser = async (req, res) => {

  const { id } = req.params;

  const result = await User.findById(id).populate('group', 'code name');

  res.json({
    ok: true,
    data: result
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Object }
*/
const updateUser = async (req, res) => {

  const { id } = req.params;
  const { username, email, password, name, lastName, age, role, status, group } = req.body;

  const result = await User.findOneAndUpdate({_id: id}, {
    $set: { username, email, password, name, lastName, age, role, status, group }
  }, { new: true });

  res.json({
    ok: true,
    data: result
  })
}

/**
* @param { Request } req
* @param { Response } res
* @return { Object }
*/
const deleteUser = async (req, res) => {

  const { id } = req.params;
  const result = await User.findOneAndUpdate({_id: id}, {
    $set: { status: STATUS_AVALIBLE.inactive }
  });

  res.json({
    ok: true,
    data: result
  })
}

module.exports = {
  createUser,
  getAllUser,
  getByIdUser,
  updateUser,
  deleteUser
};