const { StudentCourse } = require('../models');

const GetAll = async (req, res) => {
	try {
		const all = await StudentCourse.findAll();
		res.send(all);
	} catch (err) {
		throw err;
	}
};

const GetAllCoursesByStudentId = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);
		const courses = await StudentCourse.findAll({
            where: { student_id: studentId }
		});
		res.send(courses);
	} catch (err) {
        throw err;
	}
};

const EnrollStudentToCourse = async (req, res) => {
    try {
        const { studentId, courseId, grade } = req.body;
        const studentCourse = await StudentCourse.create({
            grade: parseInt(grade),
            course_id: parseInt(courseId),
            student_id: parseInt(studentId)
        });
        res.send(studentCourse);
    } catch (err) {
        throw err;
    }
};


module.exports = {
	GetAll,
	GetAllCoursesByStudentId,
	EnrollStudentToCourse,
};