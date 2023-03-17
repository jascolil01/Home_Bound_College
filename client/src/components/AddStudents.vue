<template>
  <form @submit="makeStudent" class="add-student-form">
    <div>
      <h2 class="form-heading">Enter student email</h2>
      <input :value="email" @input="handleChangeEmail" class="form-input" />
    </div>
    <div>
      <h2 class="form-heading">Enter student name</h2>
      <input :value="name" @input="handleChangeName" class="form-input" />
    </div>
    <div>
      <button type="submit" class="form-submit-button">Add student</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
export default {
  name: 'AddStudents',
  components: {},
  data: () => ({
    name: '',
    email: ''
  }),
  mounted() {},
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
      ;(this.name = ''), (this.email = '')
      this.$router.push(`/students`)
    }
  }
}
</script>

<style scoped>
.add-student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.form-heading {
  font-size: 24px;
  margin-bottom: 10px;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form-submit-button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.form-submit-button:hover {
  background-color: #005fa3;
}

@media only screen and (min-width: 768px) {
  .add-student-form {
    max-width: 600px;
  }
}

@media only screen and (min-width: 992px) {
  .add-student-form {
    max-width: 800px;
  }
}

@media only screen and (min-width: 1200px) {
  .add-student-form {
    max-width: 1000px;
  }
}
</style>