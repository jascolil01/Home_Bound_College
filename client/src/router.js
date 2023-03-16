import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage.vue'
import ViewStudents from './pages/ViewStudents.vue'
import StudentsDetails from './components/StudentsDetails'
import ReportCard from './components/ReportCard'
import MakeCourse from './components/MakeCourse'
import AddStudents from './components/AddStudents'


const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/students', component: ViewStudents, name: 'ViewStudents' },
  { path: '/students/:student_id', component: StudentsDetails, name: 'StudentsDetails' },
  { path: '/students/report_card/:student_id', component: ReportCard, name: 'ReportCard' },
  { path: '/make_course', component: MakeCourse, name: 'MakeCourse' },
  { path: '/add_student', component: AddStudents, name: 'AddStudents' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router