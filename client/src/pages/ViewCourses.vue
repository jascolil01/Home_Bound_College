<template>
    <div
      classname="course-grid"
      v-for="course in courses"
      :key="course.id"
      @click="seeCourse(course.id)"
    >
      <h3>{{ course.name }}</h3>
      <h3>{{ course.course_code }}</h3>
      <button @click="seeCourse(course.id)">Course</button>
    </div>
  </template>
  
  <script>
  import { BASE_URL } from '../globals'
  import axios from 'axios'
  
  export default {
    name: 'ViewCourse',
    components: {},
  
    data: () => ({
      courses: []
    }),
    mounted() {
      this.getCourse()
    },
    methods: {
      async getCourse() {
        const res = await axios.get(`${BASE_URL}courses`)
        this.courses = res.data
      },
      seeCourse(courseId) {
        this.$router.push(`/courses/${courseId}`)
      }
    }
  }
  </script>
  
  <style></style>