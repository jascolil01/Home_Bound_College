<template>
  <div>
    <h1>Hello, Weclome to Home Bound College</h1>
    <h2>Here, you can see what class our students are enrolled in and what grades they have!</h2>
    <button @click="viewStudents()">View Students</button>
    <button @click="addStudent()">Add Student</button>
    <button @click="addCourse()">Add Course</button>
    <button @click="viewStudents()">View Students</button>
    <CreationPage />
  </div>
</template>


<script>

export default {
  name: 'HomePage',
  components: {
  },
  data: () => ({
  }),
  mounted() {
  },
  methods: {
    viewStudents() {
      this.$router.push(`/students`)
    },
    addStudent() {
      this.$router.push(`/add_student`)
    },
    addCourse() {
      this.$router.push(`/make_course`)
    },
  }
}

</script>


<style></style>