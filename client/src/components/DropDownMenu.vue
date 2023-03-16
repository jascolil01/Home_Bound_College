<template></template>

<script>
import { BASE_URL } from '@/globals';
import axios from 'axios';
export default {
  name: 'DropDownMenu',
  data: () => ({
    classes: {}
  }),
  methods: {
    async getCourse() {
      const res = await axios.get(`${BASE_URL}courses/`)
      this.classes = res.data
    }
  }
}
</script>