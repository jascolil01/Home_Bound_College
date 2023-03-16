const { Student_enroll } = require('../models');

const GetAll = async (req, res) => {
	try {
		const all = await Student_enroll.findAll();
		res.send(all);
	} catch (err) {
		throw err;
	}
};

const GetAllCoursesByStudentId = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
		const courses = await Student_enroll.findAll({
            where: { student_id: studentId }
		});
		res.send(courses);
	} catch (err) {
        throw err;
	}
};

const GetAllStudentsByCourseId = async (req, res) => {
    try {
        const courseId = parseInt(req.params.id);
		const students = await Student_enroll.findAll({
            where: { course_id: courseId }
		});
		res.send(students);
	} catch (err) {
        throw err;
	}
};

const EnrollStudentToCourse = async (req, res) => {
    try {
        const { student_id, course_id, grade } = req.body;
        let data = {
            grade: parseInt(grade),
            course_id: parseInt(course_id),
            student_id: parseInt(student_id)
        }
        const student_enroll = await Student_enroll.create(data);
        res.send(student_enroll);
    } catch (err) {
        throw err;
    }
};


module.exports = {
	GetAll,
	GetAllCoursesByStudentId,
	EnrollStudentToCourse,
    GetAllStudentsByCourseId
};