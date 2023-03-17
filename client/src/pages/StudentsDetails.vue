<template>
  <div class="container">
    {{ studentInfo.name }}
    {{ studentInfo.id }}
    <div class="column">
      <div class="course-info" v-for="course in courseInfo" :key="course.id">
        {{ course.name }}
      </div>
    </div>
    <div class="column">
      <div class="course-grade" v-for="course in courseGrade" :key="course">
        {{ course }}
      </div>
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
    courseInfo: [],
    courseGrade: []
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
      let info = data.data.map((course) => (
        course.course_id
      ))
      let grade = data.data.map((course) => (
        course.grade
      ))
      this.courseId = info
      this.courseGrade = grade
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

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.course-info,
.course-grade {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
}
</style>
