<template>
  <nav :class="{ 'show-nav': showNav, 'hide-hamburger': !showHamburger }">
    <button v-if="showHamburger" @click="showNav = !showNav" class="menu-button" :class="{ 'close-menu': showNav }">
      <span v-for="index in 3" :key="index"></span>
    </button>
    <ul>
      <li v-for="(link, index) in links" :key="index" :class="{ 'active': link.path === $route.path }">
        <router-link :to="link.path">{{ link.text }}</router-link>
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
        { path: '/about', text: 'About' }
      ],
      showNav: false,
      showHamburger: true // default to true
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize() // initial call to set showHamburger
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      // update showHamburger based on screen width
      this.showHamburger = window.innerWidth <= 767
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0;
  color: #fff;
  margin-bottom: 3rem;
  background-image: linear-gradient(#00162c, #135cc5);
  border-radius: 10px;
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  opacity: 1;
}

nav li {
  margin: 0 10px;
  opacity: 1;
}

nav a {
  text-decoration: none;
  color: rgb(253, 253, 209);
  font-size: 20px;
}

nav a:hover {
  color: #f0f0f0;
}

.active {
  font-weight: bold;
}

.menu-button {
  display: block;
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
}

.menu-button span {
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: #fff;
  border-radius: 3px;
}

.menu-button span:last-child {
  margin-bottom: 0;
}

.menu-button.close-menu span:first-child {
  transform: rotate(45deg) translate(6px, 5px);
}

.menu-button.close-menu span:nth-child(2) {
  opacity: 0;
}

.menu-button.close-menu span:last-child {
  transform: rotate(-45deg) translate(6px, -5px);
}

nav.show-nav {
  max-height: 500px;
  transition: max-height 0.3s ease-in;
  overflow: visible;
}

nav.show-nav ul {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

nav.show-nav li {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

nav.show-nav li:nth-child(1),
nav.show-nav li:nth-child(2),
nav.show-nav li:nth-child(3),
nav.show-nav li:nth-child(4),
nav.show-nav li:nth-child(5),
nav.show-nav li:nth-child(6) {
  transition-delay: 0.1s;
}

@media (max-width: 767px) {
  nav {
    flex-direction: row;
  }

  nav ul {
    align-items: center;
    margin-bottom: 0;
    opacity: 0;
  }

  nav li {
    margin: 0 20px;
    opacity: 0;
  }

  .menu-button {
    display: block;
  }

  nav.show-nav ul {
    opacity: 1;
  }

  nav.show-nav li {
    opacity: 1;
  }
}</style>

