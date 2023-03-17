<template>
  <form @submit="makeStudent">
    <div>
      <h2>Enter course name</h2>
      <input :value="name" @input="handleChangeName">
    </div>
    <div>
      <h2>Enter course code</h2>
      <input :value="course_code" @input="handleChangeCode">
    </div>
    <div>
      <button type="submit">click me to add</button>
    </div>

  </form>
</template>


<script>

import axios from 'axios';
import { BASE_URL } from '../globals'


export default {
  name: 'AddCourses',
  components: {

  },
  data: () => ({
    name: '',
    course_code: ''
  }),
  mounted() {

  },
  methods: {
    handleChangeName(event) {
      console.log(event)
      this.name = event.target.value
    },
    handleChangeCode(event) {
      console.log(event)
      this.course_code = event.target.value
    },
    async makeStudent(e) {
      e.preventDefault()
      const data = { name: this.name, course_code: this.course_code }
      await axios.post(`${BASE_URL}courses/create`, data)
      this.name = '',
        this.course_code = ''
    }
  }
}

</script>


<style></style>