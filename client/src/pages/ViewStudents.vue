<template>
  <NavBar />
  <button className='back-button' @click="goHome">Back</button>
  <section class="student-card">
    <div class="student-grid" v-for="student in students" :key="student.id" :event="calculateGpa(student.id)"
      @click="seeStudent(student.id)">
      <h3>{{ student.name }}</h3>
      <h3>{{ student.email }}</h3>
    </div>
  </section>
</template>

<script>
import { BASE_URL } from '../globals'
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'ViewStudents',
  components: { NavBar },
  data: () => ({
    students: [],
    gpa: []
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
    },
    async calculateGpa(id) {
      const data = await axios.get(`${BASE_URL}joint/student/${id}`)
      // console.log(data.data)
      const res = data.data.grade?.reduce((acc, currentValue) => acc + currentValue, 0)
      this.gpa = data.data.grade?.length > 0 ? res / data.data.grade?.length : 0
      console.log(this.gpa)
    },
  }
}
</script>

<style scoped>

.back-button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.student-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.student-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

}

.student-grid:hover {
  transform: translateY(-10px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
}

.student-grid h3 {
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
}

.student-grid button {
  padding: 10px;
  border: none;
  background-color: #0077b6;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.student-grid button:hover {
  background-color: #023e8a;
}

.student-grid button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0077b6;
}

@media only screen and (max-width: 768px) {
  .student-grid {
    width: 100%;
  }
  .student-grid h3 {
  font-size: 30px;
}
}
</style>