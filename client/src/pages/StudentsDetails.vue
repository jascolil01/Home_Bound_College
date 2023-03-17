<template>
  <div class="container">
    {{ studentInfo.name }}
    {{ studentInfo.id }}
    <button @click="handleBack()">Go Back</button>
    <div class="column">
      <div class="course-info" v-for="course in courseInfo" :key="course.id">
        {{ course.name }}
      </div>
    </div>
    <div class="column">
      <div class="course-grade" v-for="course in courseGrade" :key="course">
        {{ convertGrade(course) }}
      </div>
      <div>GPA: {{ gpa }}</div>
    </div>
    <DropDownMenu />
  </div>
</template>

<script>
import DropDownMenu from '@/components/DropDownMenu.vue';
import axios from 'axios';
import { BASE_URL } from '@/globals'
import { useRoute } from 'vue-router';

export default {
  name: 'StudentsDetails',
  components: { DropDownMenu },
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

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.course-info,
.course-grade {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
}
</style>
