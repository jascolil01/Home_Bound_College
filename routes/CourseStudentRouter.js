const router = require('express').Router();
const controller = require('../controllers/CourseStudentController');

router.get('/', controller.GetAll);
router.get('/:id', controller.GetAllCoursesByStudentId);
router.post('/enroll', controller.EnrollStudentToCourse);

module.exports = router;