<template>
  <div class="container">
    <div class="student-info">
      <div class="info-heading">Name: {{ studentInfo.name }}</div>
      <div class="info-heading">Student ID:{{ studentInfo.id }}</div>
      <div class="gpa">GPA: {{ gpa }}</div>
      <form @submit.prevent="selectCourse()">
        <h1>Add a course here!</h1>
        <input placeholder="courseId" type="number" :value="cId" @input="handleChangeCID">
        <select @change="handleChangeGrade" v-model="grade">
          <option :value="4">A</option>
          <option :value="3">B</option>
          <option :value="2">C</option>
          <option :value="1">D</option>
          <option :value="0">F</option>
        </select>

        <button type="submit">Enroll</button>
      </form>
      <div>
        <button class="back-button" @click="handleBack()">Go Back</button>
      </div>
    </div>
    <div>
      <h1 class="class-tag">Class</h1>
      <div class="column">
        <div class="course-info" v-for="course in courseInfo" :key="course.id" @click="handleCourseClick(course.id)">
          {{ course.name }}
        </div>
      </div>
    </div>
    <div>
      <h1>Grade</h1>
      <div class="column">
        <div class="course-grade" v-for="course in courseGrade" :key="course">
          {{ convertGrade(course) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'
import { useRoute } from 'vue-router';

export default {
  name: 'StudentsDetails',
  components: {},
  props: {
    // courseId: null
  },
  data: () => ({
    studentInfo: {},
    courseId: [],
    courseInfo: [],
    courseGrade: [],
    gpa: 0,
    cId: [],
    grade: []
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
      await this.getCourseInfo()
    },
    async calculateGpa() {
      const res = this.courseGrade?.reduce((acc, currentValue) => acc + currentValue, 0)
      this.gpa = this.courseGrade?.length > 0 ? res / this.courseGrade?.length : 0
    },
    async getCourseInfo() {
      const courseIds = this.courseId;
      const courseInfoList = [];
      for (const courseId of courseIds) {
        const res = await axios.get(`${BASE_URL}courses/${courseId}`);
        courseInfoList.push(res.data.course);
      }
      this.courseInfo = courseInfoList;
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
    },
    handleCourseClick(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
    handleChangeCID(event) {
      this.cId = event.target.value
    },
    handleChangeGrade(event) {
      this.grade = event.target.value
    },
    async selectCourse() {
      console.log(parseInt(this.studentInfo.id))
      const data = {
        course_id: this.cId,
        student_id: parseInt(this.studentInfo.id),
        grade: parseInt(this.grade)
      }
      await axios.post(`${BASE_URL}joint/enroll`, data)
      location.reload()
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
  align-self: center;
  margin-bottom: 20px;
  text-align: center;
}

.info-heading {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

h1 {
  display: flex;
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
  flex-wrap: wrap;
  width: 500px;
  /* justify-content: right; */

}

.course-info,
.course-grade {
  display: flex;
  border-bottom: 10px solid #009ace;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  background-image: linear-gradient(to right, #adf7f2, #15aaff);
  border-radius: 20px;
  color: #333;
  transition: all .5s ease-in-out;
}

.course-info:hover {
  transform: scale(1.1);
  cursor: pointer;
}

h1 {
  text-align: center;
}



.column>.course-grade {
  padding: 5px
}

.course-info {
  margin-bottom: 30px;
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