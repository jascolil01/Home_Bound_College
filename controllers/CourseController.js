const {Course} = require('../models')
const {Op} = require(`sequelize`)

const CreateCourse = async (req,res) => {
  try{
    let courseBody = {
        ...req.body
    }
    console.log(courseBody);
    const course = await Course.create(courseBody)
    res.send(course)
  } catch (error) {
    throw error
  }
}

const getCourseByName = async (req, res) => {
  try {
    const courseName = req.params.name
    const course = await Course.findAll({
      where: {name: {[Op.iLike]: `%${courseName}%`}}
    })
    if (course) {
      return res.status(200).json({ course })
    }
    return res.status(404).send('Courses with the specified Name does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCourseByStudent = async (req, res) => {
  try {
    const student = req.params.student
    const course = await Course.findAll({
      where: {student: student}
    })
    if (course) {
      return res.status(200).json({ course })
    }
    return res.status(404).send('Courses with the specified Student does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCourse = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params
    const course = await Course.findByPk(id)
    if (course) {
      return res.status(200).json({ course })
    }
    return res.status(404).send('Courses with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteCourse = async (req, res) => {
  try {
    await Course.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Course Removed', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const EditCourse = async (req, res) => {
  try {
    const course = await Course.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(course)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCourseById,
  getCourseByName,
  getCourseByStudent,
  CreateCourse,
  GetCourse,
  DeleteCourse,
  EditCourse
}