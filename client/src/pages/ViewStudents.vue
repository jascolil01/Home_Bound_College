<template>
  <div classname="student-grid" @click="seeStudent(students.id)">
    <h3>{{ students.name }}</h3>
    <h3>{{ students.email }}</h3>
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
