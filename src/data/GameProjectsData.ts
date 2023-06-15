import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "VR Orbit Visualizer", "img/projects/vr-orbit-icon.png", 
    `
    <div class="paragraph">
     This <strong>VR Orbit Visualizer</strong> is an application I developed for my senior thesis at Pomona College. Below the video demo you will find a download link for the thesis itself.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/F3_xdZvmgXM" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a class="download-link" href="d/Dorn_Senior_Thesis_Final.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download Thesis as PDF</a>
        <div style="clear:both"></div>
      </div>
    

    <div class="paragraph">
        Main features :
        <ul>
        <li>Dynamic object instantiation</li>
        <li>Dataset file upload</li>
        <li>Object-specific information display</li>
        <li>Time manipulation controls</li>
        </ul>
    </div>
    
    `, "#23bd69", true),
    new ProjectData("project-2", "Dejarik", "img/projects/dejarik-icon.png", `
    <div class="paragraph">
        <strong>Dejarik</strong> is a 2D, sprite-based board game I developed in Unity. 
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Two-player</li>
        <li>Beautiful pixel art</li>
        <li>Based on the in-universe Star Wars game</li>
        <li>Lore-accurate rules</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://nilesdorn.itch.io/dejarik-2d" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/nilesdorn/dejarik-2d" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/dejarik-sc-1.png" alt="Empty game board" />
    <img class="pc-screenshot" src="img/projects/dejarik-sc-2.png" alt="Game piece example 1" />
    <img class="pc-screenshot" src="img/projects/dejarik-sc-3.png" alt="Game piece example 2" />
    <img class="pc-screenshot" src="img/projects/dejarik-sc-4.png" alt="Game piece example 3" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Post Reality", "img/projects/post-reality-icon.png", `
    <div class="paragraph">
        As an intern at <strong>Post Reality</strong>, I worked on the app's easel view and augmented reality capability.
        <br/>Image by <a target="_blank" href="https://www.postreality.io">Post Reality</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dusOd25-WxQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://apps.apple.com/us/app/post-reality/id1572303070" target="_blank"><img src="img/projects/apple-app-store-logo.png" alt="App Store badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Augmented reality capability</li>
        <li>Dynamic easel placement</li>
        <li>Interactive media</li>
        <li>Displays user-created experiences</li>
        </ul>
    </div>
    `, "#383838"),
];