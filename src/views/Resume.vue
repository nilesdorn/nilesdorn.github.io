<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Niles Dorn</strong>, a versatile software developer with experience building games and XR applications. As a recent Pomona College graduate with a degree in physics, I possess strong critical thinking, problem solving, and analytical skills. 
      <br />
      <br />Working for Post Reality, an augmented reality company, I developed an in-depth knowledge of the software development process from conception to release.
      <br />
      <br /> For my senior thesis, I designed and built a VR data visualization tool to model the orbits of asteroids and planets in our solar system.
      <br />
      <br />Right now I'm continuing to hone my skills by working on independent projects. I'm looking for a job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides development, I'm passionate about music, gelato, problem solving, and making things.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Portfolio_Dorn_Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download Resume as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Niles" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Head Librarian - Pomona College</h3>
      <h4>July 2022 - December 2022</h4>

      <div>Maintained schedules and allocated tasks for a team of 12 student staff members, while adhering to deadlines and reporting to a direct supervisor.</div>

      <div class="tech-stack">Applicable skills: Microsoft Excel, team management, organization, communication, attention to detail.</div>

      <h3>Remote Observer - Pomona College</h3>
      <h4>February 2019 - August 2022</h4>

      <div>Worked with the Pomona College-NASA Jet Propulsion Laboratory observing team to collect and analyze observational data on near-Earth objects.</div>

      <div class="tech-stack">Applicable skills: Python, Microsoft Excel, data collection, image analysis, team communication.</div>

      <h3>AR Software Development Intern - Post Reality</h3>
      <h4>June 2021 - August 2021</h4>

      <div>Worked with a small team to build Post Reality’s flagship app in Unity from conception to release and provided in-depth quality assurance.</div>

      <div class="tech-stack">Applicable skills: Unity, Xcode, ARKit, C#, Agile.</div>

      <h3>Research Fellow - Pomona College</h3>
      <h4>May 2020 - August 2020</h4>

      <div>Compiled, organized, and summarized information on an astronomy-specific command line interface by writing a guide for future astronomy students.</div>
      <div class="tech-stack">Applicable skills: PyRAF, Python, Unix, writing ability, communication.</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Software Development</h3>
        <SkillRate name="Unity" />
        <SkillRate name="Unreal" />
        <SkillRate name="C#" />
        <SkillRate name="Python" />
        <SkillRate name="Jira/Agile" />
        <SkillRate name="Git" />
        <SkillRate name="Microsoft Office" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Critical Thinking" />
        <SkillRate name="Problem Solving" />
        <SkillRate name="Analytical Mindset" />
        <SkillRate name="Attention to Detail" />
        <SkillRate name="Communication" />
        <SkillRate name="Organization" />
        <SkillRate name="Creativity" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Pomona College - 2022</h3>
      <h4>B.A., Physics and Astronomy</h4>
      <div>GPA: 3.42</div>

      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>