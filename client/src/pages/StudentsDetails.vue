<template>
  <div>
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
    studentInfo: {}
  }),
  mounted() { },
  methods: {
    async getStudentById() {
      const route = useRoute()
      const id = route.params.student_id
      const res = await axios.get(`${BASE_URL}student/${id}`)
      console.log(res)
    }
  }
}
</script>

<style></style>
