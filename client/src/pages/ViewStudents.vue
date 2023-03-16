<template>
  <div
    classname="student-grid"
    v-for="student in students"
    :key="student.id"
    @click="seeStudent(student.id)"
  >
    <h3>{{ student.name }}</h3>
    <h3>{{ student.email }}</h3>
    <button @click="seeStudent(student.id)">Student</button>
  </div>
</template>

<script>
import { BASE_URL } from '../globals'
import axios from 'axios'

export default {
  name: 'ViewStudents',
  components: {},

  data: () => ({
    students: []
  }),
  mounted() {
    this.getStudents()
  },
  methods: {
    async getStudents() {
      const res = await axios.get(`${BASE_URL}students`)
      this.students = res.data
    },
    seeStudent(studentId) {
      this.$router.push(`/students/${studentId}`)
    }
  }
}
</script>

<style></style>
