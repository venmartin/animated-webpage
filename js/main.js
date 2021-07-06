// import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

/*
   Locomotive Scroll
*/

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('.smooth-scroll'),
  smooth: true
});

ScrollTrigger.scrollerProxy('.smooth-scroll', {
  scrollTop(value) {
    return arguments.length ?
    locoScroll.scrollTo(value, 0, 0) :
    locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  }
);

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Gsap

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
  scroller: ".smooth-scroll",
  stagger: 0.35
});


tl.from('.hex__svg1', {
  x: 450,
  duration: 1,
  opacity: 0,
  ease: "back",
  delay: 0.5,
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
  scroller: ".smooth-scroll",
  pinSpacing: true
  
});

tl.from('.block4', {
  x: -450,
  duration: .5,
  // delay: 0.5,
  opacity: 0,
  ease: "power4",
  stagger: .5
})
tl.from('.block3', {
  x: -250,
  duration: 0.5,
  // delay: 0.5,
  opacity: 0,
  ease: "power4",
  stagger: .5
})
tl.from('.block2', {
  x: -450,
  duration: 0.5,
  // delay: 0.5,
  opacity: 0,
  ease: "power4",
  stagger: .5
})
tl.from('.block', {
  x: -450,
  duration: 0.5,
  // delay: 0.5,
  opacity: 0,
  ease: "power4",
  stagger: .5
})

tl.from('.intro__roll', {
  x: -850,
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
    scrub: 5,
    pinSpacing: true,
    scroller: ".smooth-scroll"
  
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
  duration: 3,
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
  y: -250,
  duration: 3.5,
  delay: 1.5,
  opacity: 0,
  ease: "back",
  stagger: 3.5
});

const imgTl = gsap.timeline({});

ScrollTrigger.create({
  // markers: true,
  trigger: "#about",
  start: "top top",
  end: "+=3000",
  scroller: ".smooth-scroll",
  pin: true
})

ScrollTrigger.create({
    defaults: {
      duration: 3,
      delay: 1.5
    },
    animation: imgTl,
    trigger: "#about",
    start: "top top",
    end: "+=3000",
    scroller: ".smooth-scroll",
    scrub: 1,
    pin: false,
    markers: true
})
imgTl.from('.item__cen-right', {
  // scrollTrigger: {
  //   trigger: "#about",
  //   start: "top top",
  //   end: "bottom top",
  //   scroller: ".smooth-scroll",
  //   scrub: 1,
  //   pin: false,
  //   markers: true
  // },
  y: "+=200",
  duration: 3,
  delay: 3.5,
  opacity: 0,
  stagger: 3.5,
  scrub: true
})
  .to('.item__cen-right', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .from('.item__right', {
    y: "+=200",
    duration: 3,
    opacity: 0,
    stagger: 1.5,
    scrub: true
  })
  .to('.item__right', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .from('.item__left', {
    y: "+=200",
    duration: 3,
    opacity: 0,
    stagger: 1.5,
    scrub: true
  })
  .to('.item__left', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .from('.item__cen-left', {
    y: "+=200",
    duration: 3,
    opacity: 0,
    stagger: 1.5,
    scrub: true
  })
  .to('.item__cen-left', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
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