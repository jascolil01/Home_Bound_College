const router = require('express').Router()
const controller = require('../controllers/StudentController')
const middleware = require('../middleware')

router.post('/create',
//   middleware.stripToken,
//   middleware.verifyToken,
  controller.CreateStudent)
router.get('/', controller.GetStudent)
router.get('/search/:name', controller.getStudentByName)
router.get('/type/:Course', controller.getStudentByCourse)
router.get('/:id', controller.getStudentById)

router.delete('/:id',
//   middleware.stripToken,
//   middleware.verifyToken,
  controller.DeleteStudent)

router.put('/:id',
//   middleware.stripToken,
//   middleware.verifyToken,
  controller.EditStudent)

module.exports = router