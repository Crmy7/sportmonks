<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useDark, useToggle } from "@vueuse/core";
import NavBar from './components/NavBar.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <NavBar/>
  <label class="switch" @click="toggleDark()">
      <input class="switch__input" type="checkbox" role="switch" />
      <span class="switch__icon">
        <span class="switch__icon-part switch__icon-part--1"></span>
        <span class="switch__icon-part switch__icon-part--2"></span>
        <span class="switch__icon-part switch__icon-part--3"></span>
        <span class="switch__icon-part switch__icon-part--4"></span>
        <span class="switch__icon-part switch__icon-part--5"></span>
        <span class="switch__icon-part switch__icon-part--6"></span>
        <span class="switch__icon-part switch__icon-part--7"></span>
        <span class="switch__icon-part switch__icon-part--8"></span>
        <span class="switch__icon-part switch__icon-part--9"></span>
        <span class="switch__icon-part switch__icon-part--10"></span>
        <span class="switch__icon-part switch__icon-part--11"></span>
      </span>
      <span class="switch__sr">Dark Mode</span>
    </label>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
