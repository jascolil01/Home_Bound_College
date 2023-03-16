<template>
  <select>
    <option v-for="classe in classes" :key="classe.id">{{ classe.course_code }} || {{ classe.name }}</option>
  </select>
</template>

<script>
import { BASE_URL } from '@/globals';
import axios from 'axios';
export default {
  name: 'DropDownMenu',
  data: () => ({
    classes: {}
  }),
  mounted() {
    this.getCourse()
  },
  methods: {
    async getCourse() {
      const res = await axios.get(`${BASE_URL}courses/`)
      this.classes = res.data
    }
  }
}
</script>