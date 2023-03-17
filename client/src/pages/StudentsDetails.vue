<template>
  <div>
    {{ studentInfo.name }}
    {{ studentInfo.id }} {{ courseId }}
    <div v-for="x in courseInfo" :key="x.id">
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
  name: 'StudentsDetails',
  components: { DropDownMenu },
  data: () => ({
    studentInfo: {},
    courseId: [],
    courseInfo: []
  }),
  mounted() {
    this.getStudentById()
  },
  methods: {
    async getStudentById() {
      const route = useRoute()
      const id = route.params.student_id
      const res = await axios.get(`${BASE_URL}students/${id}`)
      const data = await axios.get(`${BASE_URL}joint/student/${id}`)
      this.studentInfo = res.data.student
      let info = data.data.map((x) => (
        x.id
      ))
      this.courseId = info
      await this.getCourseInfo()
    },
    async getCourseInfo() {
      const courseIds = this.courseId;
      const courseInfoList = [];
      for (const courseId of courseIds) {
        const res = await axios.get(`${BASE_URL}courses/${courseId}`);
        courseInfoList.push(res.data.course);
      }
      this.courseInfo = courseInfoList;
    }
  }
}
</script>

<style></style>
