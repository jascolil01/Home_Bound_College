<template>
  <form @submit="makeStudent">
    <div>
      <h2>Enter student email</h2>
      <input :value="email" @input="handleChangeEmail">
    </div>
    <div>
      <h2>Enter student name</h2>
      <input :value="name" @input="handleChangeName">
    </div>
    <button type="submit">click me to add</button>
  </form>
</template>


<script>

import axios from 'axios';
import { BASE_URL } from '../globals'

export default {
  name: 'AddStudents',
  components: {

  },
  data: () => ({
    name: '',
    email: ''
  }),
  mounted() {

  },
  methods: {
    handleChangeEmail(event) {
      console.log(event)
      this.email = event.target.value
    },
    handleChangeName(event) {
      console.log(event)
      this.name = event.target.value
    },
    async makeStudent(e) {
      e.preventDefault()
      const data = { name: this.name, email: this.email }
      await axios.post(`${BASE_URL}students/create`, data)
      this.name = '',
        this.email = ''
    }
  }
}

</script>


<style></style>