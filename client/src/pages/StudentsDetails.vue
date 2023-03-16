<template>
  <div>
    {{ studentInfo.name }}
    {{ studentInfo.id }}
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
    courseInfo: {}
  }),
  mounted() {
    this.getStudentById()
  },
  methods: {
    async getStudentById() {
      const route = useRoute()
      const id = route.params.student_id
      const res = await axios.get(`${BASE_URL}students/${id}`)
      const data = await axios.get(`${BASE_URL}joint/${id}`)
      this.studentInfo = res.data.student
      this.courseInfo = data.data
    }
  }
}
</script>

<style></style>
