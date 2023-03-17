<template>
  <NavBar />
  <form class="add-courses-form" @submit="makeStudent">
    <div>
      <h2 class="form-heading">Enter course name</h2>
      <input class="form-input" :value="name" @input="handleChangeName" />
    </div>
    <div>
      <h2 class="form-heading">Enter course code</h2>
      <input class="form-input" :value="course_code" @input="handleChangeCode" />
    </div>
    <div>
      <button class="form-submit-button" type="submit">Add Course</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import NavBar from './NavBar.vue'
export default {
  name: 'AddCourses',
  components: {
    NavBar
  },
  data: () => ({
    name: '',
    course_code: ''
  }),
  mounted() {},
  methods: {
    handleChangeName(event) {
      this.name = event.target.value
    },
    handleChangeCode(event) {
      this.course_code = event.target.value
    },
    async makeStudent(e) {
      e.preventDefault()
      const data = { name: this.name, course_code: this.course_code }
      await axios.post(`${BASE_URL}courses/create`, data)
      this.name = ''
      this.course_code = ''
      this.$router.push(`/courses`)
    }
  }
}
</script>

<style scoped>
.add-courses-form {
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
  .add-courses-form {
    max-width: 600px;
  }
}

@media only screen and (min-width: 992px) {
  .add-courses-form {
    max-width: 800px;
  }
}

@media only screen and (min-width: 1200px) {
  .add-courses-form {
    max-width: 1000px;
  }
}
</style>