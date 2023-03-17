<template>
  <NavBar />
  <button className='back-button' @click="goHome">Back</button>
  <div class="course-card">
    <div
      class="course-grid"
      v-for="course in courses"
      :key="course.id"
      @click="seeCourse(course.id)"
    >
      <h3>{{ course.name }}</h3>
      <h3>{{ course.course_code }}</h3>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from '../globals'
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'ViewCourse',
  components: {NavBar},

  data: () => ({
    courses: []
  }),
  mounted() {
    this.getCourse()
  },
  methods: {
    async getCourse() {
      const res = await axios.get(`${BASE_URL}courses`)
      this.courses = res.data
    },
    seeCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.back-button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.course-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.course-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.course-grid:hover {
  transform: translateY(-10px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
}

.course-grid h3 {
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
}

.course-grid button {
  padding: 10px;
  border: none;
  background-color: #0077b6;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.course-grid button:hover {
  background-color: #023e8a;
}

.course-grid button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0077b6;
}
@media only screen and (max-width: 768px) {
  .course-grid {
    width: 100%;
  }
  .course-grid h3 {
  font-size: 30px;
}
}
</style>
 