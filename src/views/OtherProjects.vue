<template>
  <div>
    <h1>Music Production</h1>

    <div style="margin-bottom: 30px;">
      As a creative output, I produce electronic music under the name <strong>Library Shift</strong>. Below are examples of my most recent work.
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
