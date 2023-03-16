<template>
  <div classname="student-grid">
    <h3>{{ students.name }}</h3>
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
  mounted() {}
  // methods: {
  //   async getStudents() {
  //     const res = await axios.get(`${BASE_URL}students`)
  //     res.data
  //   }
}
</script>

<style></style>
