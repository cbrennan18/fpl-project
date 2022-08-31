<template>
<div id="nav" class="navbar navbar-expand-lg navbar-light bg-light px-2 py-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://cbrennan.ie/index.html">
      <img src="./assets/favicon.png" class="d-inline-block align-top image-favicon" alt="Ciaran Brennan">
      Ciarán Brennan
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navbar-nav">
        <router-link :to="{ name: 'Team' }" class="nav-item nav-link">Team</router-link>
        <router-link :to="{ name: 'League' }" class="nav-item nav-link">League</router-link>
      </div>
    </div>
  </div>
</div>
<router-view/>
</template>

<style>
html {
    /*scroll-behavior: smooth;*/
    font-family: Roboto, sans-serif !important;
}

#nav a.router-link-exact-active {
  color: #38003c;
  font-weight: bold;
}
.image-favicon {
  width: 30px;
  height: 30px;
  max-width: 100% !important;
}
</style>
