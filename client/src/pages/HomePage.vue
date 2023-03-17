<template>
  <div class="home-page">
    <div class="image-container">
      <img src="../assets/homepage-image.jpg" alt="College Campus" />
    </div>
    <h1 class="heading">Hello, Welcome to Home Bound College</h1>
    <h2 class="subheading">Here, you can see what classes our students are enrolled in and what grades they have!</h2>
    <div class="button-container">
      <button class="btn" @click="viewStudents()">View Students</button>
      <button class="btn" @click="addStudent()">Add Student</button>
      <button class="btn" @click="addCourse()">Add Course</button>
      <button class="btn" @click="viewCourse()">View Course</button>
    </div>
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
    viewCourse() {
      this.$router.push(`/courses`)
    },
  }
}
</script>

<style scoped>

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

.heading {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #0077b6;
  text-shadow: 2px 2px #f1f1f1;
}

.subheading {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #555;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #0077b6;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn:hover {
  background-color: #023e8a;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0077b6;
}

.image-container {
  margin-top: 50px;
  max-width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.image-container img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 768px) {
  .heading {
    font-size: 36px;
  }

  .subheading {
    font-size: 18px;
  }

  .btn {
    font-size: 16px;
    padding: 8px 16px;
  }
}

@media only screen and (max-width: 480px) {
  .heading {
    font-size: 24px;
  }

  .subheading {
    font-size: 16px;
  }

  .btn {
    font-size: 14px;
    padding: 6px 12px;
  }
}

.image-container {
  margin-top: 50px;
  max-width: 50%;
  height: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  top: 0;
  left: 0;
}
</style>