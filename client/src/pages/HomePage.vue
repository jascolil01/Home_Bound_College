<template>
  <div>
    <h1>Hello, Weclome to Home Bound College</h1>
    <h2>Here, you can see what class our students are enrolled in and what grades they have!</h2>
    <ViewStudents v-for="student in students" :key="student.id" :students="student" />
    <AddStudents />
    <MakeCourse />
  </div>
</template>


<script>

import axios from 'axios'
import { BASE_URL } from '../globals'
import ViewStudents from './ViewStudents.vue';
import AddStudents from '../components/AddStudents.vue';
import MakeCourse from '../components/MakeCourse.vue';

export default {
  name: 'HomePage',
  components: {
    ViewStudents,
    AddStudents,
    MakeCourse

  },
  data: () => ({
    students: {}
  }),
  mounted() {
    this.getStudents()
  },
  methods: {
    async getStudents() {
      const res = await axios.get(`${BASE_URL}students/`)
      console.log(res.data)
      this.students = res.data
    }
  }
}

</script>


<style></style>