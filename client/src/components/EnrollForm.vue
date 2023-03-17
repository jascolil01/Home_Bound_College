<template>
  <div class="enroll-form">
    <h2>Enroll in {{ courseInfo.name }}</h2>
    <form @submit="handleSubmit">
      <label>
        Student ID:
        <input type="text" v-model="studentId" required />
      </label>
      <label>
        Grade:
        <select v-model="grade" required>
          <option value="" disabled>Select a grade</option>
          <option value="4">A</option>
          <option value="3">B</option>
          <option value="2">C</option>
          <option value="1">D</option>
          <option value="0">F</option>
        </select>
      </label>
      <button type="submit">Enroll</button>
    </form>
    <div v-if="enrollment">
      <p>Successfully enrolled student {{ enrollment.student_id }} in {{ courseInfo.name }} with a grade of {{ enrollment.grade }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'
import { useRoute } from 'vue-router';
export default {
  name: 'EnrollForm',
  components: {},
  data: () => ({
    courseInfo: {},
    studentId: '',
    grade: '',
    enrollment: null
  }),
  mounted() {
    this.getCourseById()
  },
  methods: {
    async getCourseById() {
      const route = useRoute()
      const id = route.params.course_id
      const res = await axios.get(`${BASE_URL}courses/${id}`)
      this.courseInfo = res.data.course
    },
    async handleSubmit() {
      try {
        const res = await axios.post(`${BASE_URL}joint/enroll`, {
          course_id: this.courseInfo.id,
          student_id: this.studentId,
          grade: this.grade
        });
        console.log(res);
        this.enrollment = res.data.enrollment
        this.studentId = ''
        this.grade = ''
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
}
</script>
  <style scoped>
  .enroll-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    border-radius: 5%;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  input[type="text"], select {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button[type="submit"] {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin-left: 42%;
  }

  button[type="submit"]:hover {
    background-color: #0069d9;
  }
</style>