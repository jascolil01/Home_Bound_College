<template>
  <div v-if="addStudent">
    <AddStudents />
  </div>

  <div v-if="addCourse">
    <MakeCourse />
  </div>
</template>

<script>
import MakeCourse from '@/components/MakeCourse.vue';
import AddStudents from '../components/AddStudents.vue';

export default {
  name: 'CreationPage',
  components: {
    MakeCourse,
    AddStudents
  },
  data: () => ({
    addStudent: false,
    addCourse: false
  })
}
</script>