<script setup>
  import { scrollingByHasTag } from "@/helpers/scrolles.js";
</script>

<template>
     <footer class="footer">
      <!-- Links -->
      <div class="section-seperator">
        <div class="content-md container">
          <div class="row">
            <div class="col-sm-2 sm-margin-b-30">
              <!-- List -->
              <ul class="list-unstyled footer-list">
                <li class="footer-list-item"><a href="#main" @click.prevent="scrollingByHasTag('#main')">Home</a></li>
                <li class="footer-list-item"><a href="#main" @click.prevent="scrollingByHasTag('#main')">About</a></li>
                <li class="footer-list-item"><a href="#work" @click.prevent="scrollingByHasTag('#work')">Work</a></li>
                <li class="footer-list-item"><a href="#contact" @click.prevent="scrollingByHasTag('#contact')">Contact</a></li>
              </ul>
              <!-- End List -->
            </div>
            <div class="col-sm-2 sm-margin-b-30">
              <!-- List -->
              <ul class="list-unstyled footer-list">
                <li class="footer-list-item"><a href="#">Twitter</a></li>
                <li class="footer-list-item"><a href="#">Facebook</a></li>
                <li class="footer-list-item"><a href="#">Instagram</a></li>
                <li class="footer-list-item"><a href="#">YouTube</a></li>
              </ul>
              <!-- End List -->
            </div>
            <div class="col-sm-3">
              <!-- List -->
              <ul class="list-unstyled footer-list">
                <li class="footer-list-item"><a href="#">Subscribe to Our Newsletter</a></li>
                <li class="footer-list-item"><a href="#">Privacy Policy</a></li>
                <li class="footer-list-item"><a href="#">Terms &amp; Conditions</a></li>
              </ul>
              <!-- End List -->
            </div>
          </div>
          <!--// end row -->
        </div>
      </div>
      <!-- End Links -->

      <!-- Copyright -->
      <div class="content container">
        <div class="row">
          <div class="col-xs-6">
            <img class="footer-logo" src="@/assets/img/logo-dark.png" alt="Aironepage Logo">
          </div>
          <div class="col-xs-6 text-right">
            <p class="margin-b-0"><a class="fweight-700" href="http://keenthemes.com/preview/aironepage/">Aironepage</a>
              Theme Powered by: <a class="fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a></p>
          </div>
        </div>
        <!--// end row -->
      </div>
      <!-- End Copyright -->
    </footer>
</template>