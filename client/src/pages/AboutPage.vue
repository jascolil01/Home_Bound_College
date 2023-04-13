<template>
  <div class="about-page">
    <NavBar />
    <h1 class="heading">About Our App</h1>
    <p class="description">
      Our app is a powerful tool for managing student enrollment in courses.
      With our app, you can easily add students and enroll them in courses with
      just a few clicks. Our app is built with Vue, a modern and highly flexible
      JavaScript framework that allows us to create dynamic and responsive user
      interfaces.
    </p>
    <h2 class="subheading">Meet Our Founders</h2>
    <div class="founder-container">
      <div class="founder-card">
        <div class="founder-image">
          <img src="https://avatars.githubusercontent.com/u/120433758?v=4" alt="Founder 1" />
        </div>
        <h3 class="founder-name">Anthony Harpestad</h3>
        <p class="founder-description">I'm a front-end and back-end developer with a passion for building clean, responsive, and intuitive user interfaces.</p>
        <div class="founder-links">
          <a href="https://www.linkedin.com/in/anthonyharpestad/">LinkedIn</a>
          <a href="https://github.com/Anthony5321">GitHub</a>
        </div>
      </div>
      <div class="founder-card">
        <div class="founder-image">
          <img src="https://avatars.githubusercontent.com/u/121774406?v=4" alt="Founder 2" />
        </div>
        <h3 class="founder-name">Joshua Ascolillo</h3>
        <p class="founder-description">As a software engineer, I have a proven track record of developing high-quality
          software applications that meet business needs. Skilled in programming languages such as JavaScript, Python, and
          React, I am passionate about solving complex problems and delivering innovative solution</p>
        <div class="founder-links">
          <a href="https://www.linkedin.com/in/joshuaascolillo/">LinkedIn</a>
          <a href="https://github.com/jascolil01">GitHub</a>
        </div>
      </div>
      <div class="founder-card">
        <div class="founder-image">
          <img
            src="https://avatars.githubusercontent.com/u/122240360?v=4"
            alt="Founder 3" />
        </div>
        <h3 class="founder-name">Eduardo Puerta</h3>
        <p class="founder-description">
          Health sciences graduate turned full stack developer with a passion to
          attack challenges head on. Optimizing productivity and results with
          detailed planning, clear communication, collaboration, and
          organization. Fluent in both English and Spanish.

        </p>
        <div class="founder-links">
          <a href="https://www.linkedin.com/in/eduardo-puerta-0a7707265/">LinkedIn</a>
          <a href="https://github.com/eduardopuerta9">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.heading {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #0077b6;
  text-shadow: 2px 2px #f1f1f1;
}

.description {
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
}

.subheading {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0077b6;
  text-align: center;
  text-shadow: 2px 2px #f1f1f1;
}

.founder-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.founder-card {
  width: 300px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 10px #888888;
}

.founder-image {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 10px #888888;
}

.founder-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

.founder-description {
  font-size: 12px;
  margin-bottom: 20px;
  text-align: justify;
  text-justify: inter-word;
}

.founder-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.founder-links a {
  font-size: 18px;
  color: #0077b6;
  text-decoration: none;
  text-shadow: 2px 2px #f1f1f1;
}

.founder-links a:hover {
  color: #4d4d4d;
}
</style>
