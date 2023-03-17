<template>
    <div>
      {{ courseInfo.name }}
      {{ courseInfo.id }} {{ studentId }}
      <div v-for="x in studentInfo" :key="x.id">
        {{ x.name }}
      </div>
      <DropDownMenu />
    </div>
  </template>
  
  <script>
  import DropDownMenu from '@/components/DropDownMenu.vue';
  import axios from 'axios';
  import { BASE_URL } from '@/globals'
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'CoursesDetails',
    components: { DropDownMenu },
    data: () => ({
      courseInfo: {},
      studentId: [],
      studentInfo: []
    }),
    mounted() {
      this.getCourseById()
    },
    methods: {
      async getCourseById() {
        const route = useRoute()
        const id = route.params.course_id
        const res = await axios.get(`${BASE_URL}courses/${id}`)
        const data = await axios.get(`${BASE_URL}joint/course/${id}`)
        this.courseInfo = res.data.course
        let info = data.data.map((x) => (
          x.id
        ))
        this.studentId = info
        await this.getStudentInfo()
      },
      async getStudentInfo() {
        const studentIds = this.studentId;
        const studentInfoList = [];
        for (const studentId of studentIds) {
          const res = await axios.get(`${BASE_URL}students/${studentId}`);
          studentInfoList.push(res.data.student);
        }
        this.studentInfo = studentInfoList;
      }
    }
  }
  </script>
  
  <style></style>