<script setup>
// components
import HeaderNavbarCollapse from "@/components/HeaderNavbarCollapse.vue";

// constants navigations 
import links from "@/navigation/routers";
</script>


<template>
  <header class="header navbar-fixed-top">
    <!-- Navbar -->
    <nav class="navbar" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="menu-container js_nav-item">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="toggle-icon"></span>
          </button>

          <!-- Logo -->
          <div class="logo">
            <a class="logo-wrap" href="#body">
              <img class="logo-img logo-img-main" src="@/assets/img/logo.png" alt="Asentus Logo">
              <img class="logo-img logo-img-active" src="@/assets/img/logo-dark.png" alt="Asentus Logo">
            </a>
          </div>
          <!-- End Logo -->
        </div>

        <HeaderNavbarCollapse :links="links" />
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>