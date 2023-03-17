<template>
  <section class="student-card">
    <div
      classname="student-grid"
      v-for="student in students"
      :key="student.id"
      @click="seeStudent(student.id)"
    >
      <h3>{{ student.name }}</h3>
      <h3>{{ student.email }}</h3>
      <button @click="seeStudent(student.id)">Student Information</button>
    </div>
  </section>
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

<style>
.student-card {
  border-color: #1b1b1b;
  max-width: 300px;
  max-height: 380px;
  border-radius: 4px;
  background-color: #1b1b1b;
  cursor: pointer;
  transition: all 0.2s;
  padding: 2em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 1em;
  justify-content: center;
}
</style>
