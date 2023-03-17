<template>
  <div class="course-details">
    <h1>{{ courseInfo.name }}</h1>
    <p>Course Code: {{ courseInfo.course_code }}</p>
    <button @click="handleBack()">Go Back</button>
    <div class="student-list" v-if="studentInfo.length">
      <h2>Students Enrolled:</h2>
      <div v-for="student in studentInfo" :key="student.id" class="student-card" @click="handleStudentClick(student.id)">
        <h3>{{ student.name }}</h3>
        <p>Email: {{ student.email }}</p>
        <p>Grade: {{ student.grade }}</p>
      </div>
    </div>
    <p v-else>No students are currently enrolled in this course.</p>
  </div>
</template>
<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'
import { useRoute } from 'vue-router';
export default {
  name: 'CoursesDetails',
  components: {
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
      console.log(data.data);
      let info = data.data.map((student) => ({
        id: student.student_id,
        name: student.name,
        email: student.email,
        grade: this.convertGrade(student.grade)
      }))
      this.studentId = info
      await this.getStudentInfo()
    },
    async getStudentInfo() {
      const studentIds = this.studentId.map((student) => student.id);
      const studentInfoList = [];
      for (const studentId of studentIds) {
        const res = await axios.get(`${BASE_URL}students/${studentId}`);
        studentInfoList.push(res.data.student);
      }
      // Merge student info with grade data
      this.studentInfo = this.studentId.map((student) => {
        const studentInfo = studentInfoList.find((info) => info.id === student.id);
        return { ...student, ...studentInfo };
      });
    },
    convertGrade(grade) {
      if (grade >= 4) {
        return 'A'
      } else if (grade >= 3) {
        return 'B'
      } else if (grade >= 2) {
        return 'C'
      } else if (grade >= 1) {
        return 'D'
      } else {
        return 'F'
      }
    },
    handleBack() {
      this.$router.push('/courses')
    },
    handleStudentClick(id) {
      this.$router.push(`/students/${id}`);
    }
  }
}
</script>
  
<style scoped>
.course-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 20px;
  margin-bottom: 30px;
  color: #666;
}

button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 30px;
}

button:hover {
  background-color: #005fa3;
}

h2 {
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #0077cc;
}

.student-list {
  margin-top: 50px;
}

.student-card {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.student-card:hover {
  background-color: #eee;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 20px;
  color: #666;
  margin-bottom: 0;
}
</style>