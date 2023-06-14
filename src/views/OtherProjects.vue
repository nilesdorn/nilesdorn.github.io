<template>
  <div>
    <h1>Music Production</h1>

    <div style="margin-bottom: 30px;">
      Electronic music production is my favorite hobby, and a great creative output. Here is some music I've produced under the name Library Shift.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
