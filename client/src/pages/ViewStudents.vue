<template>
  <button @click="goHome">Back</button>
  <section class="student-card">
    <div class="student-grid" v-for="student in students" :key="student.id" @click="seeStudent(student.id)">
      <h3>{{ student.name }}</h3>
      <h3>{{ student.email }}</h3>
    </div>
  </section>
</template>

<script>
import { BASE_URL } from '../globals'
import axios from 'axios'

export default {
  name: 'ViewStudents',
  components: {
  },

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
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.student-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.student-grid {
  border: 1px solid black;
  width: 23%;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .student-grid {
    width: 45%;
  }
}
</style>