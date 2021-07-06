gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({defaults:{duration: 1}   
  } 
);

gsap.from('.venmartin', {
  x: -450,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: "back",
  // pinSpacing: false,
  stagger: 0.35
});


tl.from('.hex__svg1', {
  //   scrollTrigger: {
  //   trigger: ".sticky__bg",
  //   pin: true,
  //   start: "top top",
  //   end: "+=200%",
  //   scrub: 1,
  //   pinSpacing: "margin"
  // },
  x: 450,
  duration: 1,
  opacity: 0,
  ease: "back",
  delay: 0.5
},
"-=1.4")


ScrollTrigger.create({
  // markers: true,
  animation: tl,
  trigger: ".landing",
  pin: true,
  start: "top top",
  end: "+=1000",
  scrub: 1,
  pinSpacing: true
  
});

tl.from('.intro__text', {
  x: -450,
  duration: 1.5,
  delay: 0.5,
  opacity: 0,
  ease: "power4",
  stagger: 1.5
})


const aboutTl = gsap.timeline(
  {
  scrollTrigger: {
    // markers: true,
    trigger: "#about",
    pin: false,
    start: "top bottom",
    end: "top top",
    scrub: true,
    pinSpacing: true,
    
  
  },
    defaults: 
    {
      duration: 3,
      delay: 2
    }
  }
);
aboutTl.from('.block__line', {
  x: -450,
  delay: 5,
  opacity: 0,
  ease: "back",
  // stagger: 3.5
},
"+=1");


aboutTl.from('.about__para', {
  // scrollTrigger: {
  //   trigger: "#about",
  //   pin: '#about',
  //   start: "top 15%",
  //   end: "-=500",
  //   scrub: 3,
  //   pinSpacing: true
  // },
  y: -850,
  duration: 3.5,
  delay: 1.5,
  opacity: 0,
  ease: "back",
  stagger: 3.5
});

ScrollTrigger.create({
  markers: true,
  trigger: "#about",
  start: "top top",
  end: "bottom top",
  pin: true
})






const navHeader = document.getElementById('nav-bar');
const sectionMain = document.getElementById('landing__main');
const sectionMainOptions = {
  rootMargin: "-80% 0% 0% 0%"
 };

const sectionMainObserver = new IntersectionObserver(function(entries, sectionMainObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      navHeader.classList.add('nav__scroll');
    } else {
      navHeader.classList.remove('nav__scroll');
    }
  })
}, sectionMainOptions)

sectionMainObserver.observe(sectionMain);