<script setup>
import ItemWork from '@/components/ItemWork.vue';

const dataModal = {
  name: "Art Of Coding",
  dopInfo: "Clean &amp; Minimalistic Design",
  desc: `  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>`,
  tags: [
    {
      name: "Design,",
      href: "#",
    },
    {
      name: "Coding,",
      href: "#",
    },
    {
      name: "Portfolio",
      href: "#",
    }
  ],
  projects: [
    {
      name: "Project Leader:",
      namePiople: "John Doe",
    },
    {
      name: "Designer:",
      namePiople: "Alisa Keys",
    },
    {
      name: "Developer:",
      namePiople: "Mark Doe",
    },
    {
      name: "Customer:",
      namePiople: "Keenthemes",
    }
  ]
}
</script>

<template>
  <div id="work">
    <div class="content-md container">
      <div class="masonry-grid row row-space-2">
        <ItemWork dopClass="col-md-8" :scrImage="'/src/assets/img/800x400/01.jpg'" :dataModal="dataModal" />
        <ItemWork dopClass="col-md-4" :scrImage="'/src/assets/img/397x400/01.jpg'" :dataModal="dataModal" />
        <ItemWork dopClass="col-md-4" :scrImage="'/src/assets/img/397x300/01.jpg'" :dataModal="dataModal" />
        <ItemWork dopClass="col-md-4" :scrImage="'/src/assets/img/397x300/02.jpg'" :dataModal="dataModal" />
        <ItemWork dopClass="col-md-4" :scrImage="'/src/assets/img/397x300/03.jpg'" :dataModal="dataModal" />
      </div>
    </div>
  </div>
</template>