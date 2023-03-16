const {Student} = require('../models')
const {Op} = require(`sequelize`)

const CreateStudent = async (req,res) => {
  try{
    let studentBody = {
        ...req.body
    }
    console.log(studentBody);
    const student = await Student.create(studentBody)
    res.send(student)
  } catch (error) {
    throw error
  }
}

const getStudentByName = async (req, res) => {
  try {
    const studentName = req.params.name
    const student = await Student.findAll({
      where: {name: {[Op.iLike]: `%${studentName}%`}}
    })
    if (student) {
      return res.status(200).json({ student })
    }
    return res.status(404).send('Students with the specified Name does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getStudentByCourse = async (req, res) => {
  try {
    const course = req.params.course
    const student = await Student.findAll({
      where: {course: course}
    })
    if (student) {
      return res.status(200).json({ student })
    }
    return res.status(404).send('Students with the specified Course does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetStudent = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params
    const student = await Student.findByPk(id)
    if (student) {
      return res.status(200).json({ student })
    }
    return res.status(404).send('Students with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Student Removed', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const EditStudent = async (req, res) => {
  try {
    const student = await Student.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getStudentById,
  getStudentByName,
  getStudentByCourse,
  CreateStudent,
  GetStudent,
  DeleteStudent,
  EditStudent
}