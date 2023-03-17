<template>
  <div class="course-list-container">
    <NavBar />
    <div
      class="course-grid"
      v-for="course in courses"
      :key="course.id"
      @click="seeCourse(course.id)"
    >
      <h3>{{ course.name }}</h3>
      <h3>{{ course.course_code }}</h3>
      <!-- <button @click="seeCourse(course.id)">Course</button> -->
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
    }
  }
}
</script>
<style scoped>
.course-list-container {
  background-color: #f5f5f5;
  padding: 20px;
}

.course-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #005fa3;
}
</style> 