<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Niles Dorn</strong>, a versatile software developer and hobbyist musician.<br/>
        
        I have strong skils across many disciplines, including object-oriented programming, the Unity and Unreal game engines, XR development, and audio production.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">development projects</router-link>, released <router-link to="/other-projects">independent music</router-link>, and applied my abilities in <router-link to="/resume">other fields</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for full-time employment</strong>. You can reach me at <a href="mailto:nilesdorn@gmail.com">nilesdorn@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Niles" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>