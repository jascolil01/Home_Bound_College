const router = require('express').Router()
const controller = require('../controllers/CourseController')
const middleware = require('../middleware')

router.post('/create',
//   middleware.stripToken,
//   middleware.verifyToken,
  controller.CreateCourse)
router.get('/', controller.GetCourse)
router.get('/search/:name', controller.getCourseByName)
// router.get('/type/:Student', controller.getCourseByStudent)
router.get('/:id', controller.getCourseById)

router.delete('/:id',
//   middleware.stripToken,
//   middleware.verifyToken,
  controller.DeleteCourse)

router.put('/:id',
//   middleware.stripToken,
//   middleware.verifyToken,
  controller.EditCourse)

module.exports = router