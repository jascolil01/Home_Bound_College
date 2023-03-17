<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.path">
        <router-link :to="link.path" :active-class="activeClass" style="color: #00cccc; font-size: 20px;">{{ link.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      links: [
        { path: '/', text: 'Home' },
        { path: '/students', text: 'View Students' },
        { path: '/courses', text: 'View Courses' },
        { path: '/add_student', text: 'Add Students' },
        { path: '/make_course', text: 'Add Course' },
        { path: '/about', text: 'About' },
      ],
      activeClass: 'active',
    };
  },
};
</script>

<style>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  color: #fff;
  margin-bottom: 3rem;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

nav ul li a:hover {
  color: #f0f0f0;
}

.active {
  font-weight: bold;
}
</style>