const router = require('express').Router();
const controller = require('../controllers/CourseStudentController');

router.get('/', controller.GetAll);
router.get('/student/:id', controller.GetAllCoursesByStudentId);
router.get('/course/:id', controller.GetAllStudentsByCourseId);
router.post('/enroll', controller.EnrollStudentToCourse);

module.exports = router;