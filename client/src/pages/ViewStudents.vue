<template>
  <div
    classname="student-grid"
    v-for="student in students"
    :key="student.id"
  ></div>
</template>

<script>
export default {
  name: 'ViewStudents',
  components: {},
  data: () => ({
    students: []
  }),
  mounted() {
    this.getStudentsById()
  },
  methods: {
    async getStudentsById() {}
  }
}
</script>

<style></style>
