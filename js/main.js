// Navigation menu
(()=>{

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);
    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    // attach an event handler to document
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains('link-item')){
            /* make sure event.target.hash has a value before overriding default behaviour */
            if(event.target.hash!==""){
                // prevent default anchor click behaviour
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active section
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // activate new section
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow")
                navMenu.querySelector(".active").classList.remove("active","inner-shadow")
                // activate new navigation menu 'link-item'
                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");
                
                // hide navigation menu
                hideNavMenu();
            }

        }

    })
})();




// About Section tabs
(()=>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer=document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event)=>{
        // If even.target contains 'tab-item' class and not contains 'active' class then,
        if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            //deactive existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            //activate new 'tab-item'
            event.target.classList.add("outer-shadow","active");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

// Hide all sections except active
(()=>{

    const sections=document.querySelectorAll(".section");
    sections.forEach((section)=>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();