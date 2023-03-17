<template>
  <NavBar />
  <div class="container">
    <div class="student-info">
      <div class="info-heading">{{ studentInfo.name }}</div>
      <div class="info-id">{{ studentInfo.id }}</div>
      <button class="back-button" @click="handleBack()">Go Back</button>
    </div>
    <div class="column">
      <div class="course-info" v-for="course in courseInfo" :key="course.id">
        {{ course.name }}
      </div>
    </div>
    <div class="column">
      <div class="course-grade" v-for="course in courseGrade" :key="course">
        {{ convertGrade(course) }}
      </div>
      <div class="gpa">GPA: {{ gpa }}</div>
    </div>
    <DropDownMenu />
  </div>
</template>

<script>
import DropDownMenu from '@/components/DropDownMenu.vue';
import axios from 'axios';
import { BASE_URL } from '@/globals'
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'StudentsDetails',
  components: { DropDownMenu, NavBar },
  props: {
    // gpaTotal: this.gpa
  },
  data: () => ({
    studentInfo: {},
    courseId: [],
    courseInfo: [],
    courseGrade: [],
    gpa: 0
  }),
  mounted() {
    this.getStudentById()
  },
  methods: {
    async getStudentById() {
      const route = useRoute()
      const id = route.params.student_id
      const res = await axios.get(`${BASE_URL}students/${id}`)
      const data = await axios.get(`${BASE_URL}joint/student/${id}`)
      this.studentInfo = res.data.student
      let info = data.data.map((course) => (
        course.course_id
      ))
      let grade = data.data.map((course) => (
        course.grade
      ))
      this.courseId = info
      this.courseGrade = grade
      await this.calculateGpa()
    },
    async calculateGpa() {
      const res = this.courseGrade?.reduce((acc, currentValue) => acc + currentValue, 0)
      this.gpa = this.courseGrade?.length > 0 ? res / this.courseGrade?.length : 0
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
      this.$router.push('/students')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.student-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.info-heading {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.info-id {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #777;
}

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

.back-button:hover {
  background-color: #005fa3;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.course-info,
.course-grade {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  background-color: #f8f8f8;
  color: #333;
}

.course-grade.A {
  color: #00b300;
}

.course-grade.B {
  color: #0099cc;
}

.course-grade.C {
  color: #ffcc00;
}

.course-grade.D {
  color: #ff9900;
}

.course-grade.F {
  color: #ff3300;
}

.gpa {
  font-size: 36px;
  font-weight: bold;
  margin-top: 20px;
  color: #0077cc;
}
</style>