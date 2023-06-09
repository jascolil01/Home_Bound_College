import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ViewStudents from './pages/ViewStudents.vue'
import ViewCourses from './pages/ViewCourses.vue'
import StudentsDetails from './pages/StudentsDetails'
import ReportCard from './components/ReportCard'
import AddCourses from './components/AddCourses'
import AddStudents from './components/AddStudents'
import CoursesDetails from './pages/CoursesDetails'
import AboutPage from './pages/AboutPage'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/students', component: ViewStudents, name: 'ViewStudents' },
  { path: '/courses', component: ViewCourses, name: 'ViewCourses' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  {
    path: '/students/:student_id',
    component: StudentsDetails,
    name: 'StudentsDetails'
  },
  {
    path: '/courses/:course_id',
    component: CoursesDetails,
    name: 'CoursesDetails'
  },
  {
    path: '/students/report_card/:student_id',
    component: ReportCard,
    name: 'ReportCard'
  },
  { path: '/make_course', component: AddCourses, name: 'AddCourses' },
  { path: '/add_student', component: AddStudents, name: 'AddStudents' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
