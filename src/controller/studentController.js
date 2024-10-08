const express = require('express');
const Student = require('../model/student.schema');
const { STATUS_AVALIBLE } = require('../utils/constants');
express.response

/**
* @param { express.request } req
* @param { express.response } res
* @return { void }
*/
const createStudent = async (req, res) => {
  console.log("🚀 ~ route.post ~ body:", req.body)
  const { code, name, age, special } = req.body;

  if (!code || !name || !age) {
    return res.json({
      ok: false,
      message: 'Datos invalidos'
    })
  }

  const student = new Student({ code, name, age, special });
  await student.save();

  res.json({
    ok: true,
    message: 'Estudiante registrado.'
  })
}

/**
* @param { express.request } req
* @param { express.response } res
* @return { Array<Object> }
*/
const getAllStudent = async (req, res) => {

  const result = await Student.find({});

  const listStudent = result.filter(student => student.status === STATUS_AVALIBLE.active);

  res.json({
    ok: true,
    data: listStudent
  })
}

/**
* @param { express.request } req
* @param { express.response } res
* @return { Object }
*/
const getByIdStudent = async (req, res) => {

  const { id } = req.params;

  const result = await Student.findById(id);

  res.json({
    ok: true,
    data: result
  })
}

/**
* @param { express.request } req
* @param { express.response } res
* @return { Object }
*/
const updateStudent = async (req, res) => {

  const { id } = req.params;
  const { code, name, age, special } = req.body;

  if (!code || !name || !age) {
    return res.json({
      ok: false,
      message: 'Datos invalidos'
    })
  }

  const result = await Student.findOneAndUpdate({_id: id}, {
    $set: { code, name, age, special }
  }, { new: true });

  res.json({
    ok: true,
    data: result
  })
}

/**
* @param { express.request } req
* @param { express.response } res
* @return { Object }
*/
const deleteStudent = async (req, res) => {

  const { id } = req.params;
  const result = await Student.findOneAndUpdate({_id: id}, {
    $set: { status: STATUS_AVALIBLE.deleted }
  });

  res.json({
    ok: true,
    data: result
  })
}

module.exports = {
  createStudent,
  getAllStudent,
  getByIdStudent,
  updateStudent,
  deleteStudent
};