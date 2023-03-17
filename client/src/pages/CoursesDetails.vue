<template>
  <div class="course-details">
    <NavBar />
    <h1>{{ courseInfo.name }}</h1>
    <p>Course ID: {{ courseInfo.id }}</p>
    <button @click="handleBack()">Go Back</button>
    <div class="student-list" v-if="studentInfo.length">
      <h2>Students Enrolled:</h2>
      <div v-for="student in studentInfo" :key="student.id" class="student-card">
        <h3>{{ student.name }}</h3>
        <p>Email: {{ student.email }}</p>
      </div>
    </div>
    <p v-else>No students are currently enrolled in this course.</p>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'CoursesDetails',
  components: {
    NavBar
  },
  data: () => ({
    courseInfo: {},
    studentId: [],
    studentInfo: []
  }),
  mounted() {
    this.getCourseById()
  },
  methods: {
    async getCourseById() {
      const route = useRoute()
      const id = route.params.course_id
      const res = await axios.get(`${BASE_URL}courses/${id}`)
      const data = await axios.get(`${BASE_URL}joint/course/${id}`)
      this.courseInfo = res.data.course
      let info = data.data.map((student) => (
        student.id
      ))
      this.studentId = info
      await this.getStudentInfo()
    },
    async getStudentInfo() {
      const studentIds = this.studentId;
      const studentInfoList = [];
      for (const studentId of studentIds) {
        const res = await axios.get(`${BASE_URL}students/${studentId}`);
        studentInfoList.push(res.data.student);
      }
      this.studentInfo = studentInfoList;
    },
    handleBack() {
      this.$router.push('/courses')
    }
  }
}
</script>
  
<style scoped>
.course-details {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
}

button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

button:hover {
  background-color: #005fa3;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #0077cc;
}

.student-list {
  margin-top: 30px;
}

.student-card {
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 0;
}
</style>