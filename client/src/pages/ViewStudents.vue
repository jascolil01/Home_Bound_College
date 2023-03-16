<template>
  <div classname="student-grid">
    <h3>{{ students.name }}</h3>
    <h3>{{ students.id }}</h3>
    <button @click="seeStudent(students.id)">Student</button>
  </div>
</template>

<script>
// import { BASE_URL } from '../globals'
// import axios from 'axios'
export default {
  name: 'ViewStudents',
  components: {},
  props: {
    students: {}
  },
  // data: () => ({
  //   students: []
  // }),
  mounted() {},
  methods: {
    seeStudent(studentId) {
      this.$router.push(`/students/${studentId}`)
    }
  }
}
</script>

<style></style>
