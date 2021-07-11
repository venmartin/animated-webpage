gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let container = document.querySelector('.smooth-scroll');

// let height;
// function setHeight() {
//   height = container.clientHeight;
//   document.body.style.height = height + "px";
// }
// ScrollTrigger.addEventListener("refreshInit", setHeight);

// // smooth scrolling container
// gsap.to(container, {
//   y: () => -(height - document.documentElement.clientHeight),
//   ease: "none",
//   scrollTrigger: {
//     trigger: document.body,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 1,
//     invalidateOnRefresh: true
//   }
// });

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
  // scroller: ".smooth-scroll",
  stagger: 0.35
});


gsap.from('.hex__svg1', {
  x: 450,
  duration: 1,
  opacity: 0,
  ease: "back",
  delay: 0.5,
},
"-=1")


ScrollTrigger.create({
  // markers: true,
  animation: tl,
  trigger: ".landing",
  pin: true,
  start: "top top",
  end: "+=1000",
  scrub: 1,
  // scroller: ".smooth-scroll",
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
    start: "top top",
    end: "bottom -120%",
    scrub: 3,
    // duration: 3,
    // delay: 2,
    // scrub: 5,
    // pinSpacing: true,
    // scroller: ".smooth-scroll"
  
  },
    // defaults: 
    // {
    //   duration: 3,
    //   delay: 2
    // }
  }
);
aboutTl.from('.block__line', {
  x: -450,
  opacity: 0,
  ease: "back",
  pin: true,
  scrub: true,
  duration: 5
  // stagger: 3.5
},
"+=1")
  .from('.heading__text', {
    x: -250,
    opacity: 0,
    ease: 'back',
    stagger: 0.5,
    scrub: 5,
    duration: 5
  })


aboutTl.from('.about__para', {
  y: -250,
  opacity: 0,
  ease: "back",
  stagger: 0.5,
  scrub: 5,
  duration: 5
},"+=1")
  .to('.about__para', {
    y: "-=250",
    opacity: 0,
    ease: 'back',
    stagger: 1.5,
    scrub: 5,
    duration: 5
  },
  "+=1")

  aboutTl.to('.block__line', {
    x: -250,
    opacity: 0,
    scrub: 2,
    duration: 2
  })

  aboutTl.to('.heading__text', {
    x: -250,
    opacity: 0,
    scrub: 2,
    duration: 2
  },
  "-=3"
  )

const imgTl = gsap.timeline({});

ScrollTrigger.create({
  // markers: true,
  trigger: "#about",
  start: "top 4.5%",
  end: "+=6300",
  delay: 3.5,
  pin: true
})

ScrollTrigger.create({
    defaults: {
      duration: 3,
      delay: 1.5
    },
    animation: imgTl,
    trigger: ".block__line",
    start: "top -=2000",
    end: "+=3000",
    // scroller: ".smooth-scroll",
    scrub: 4,
    pin: false,
    // markers: true
})
imgTl.from('.item__cen-right', {
  // scrollTrigger: {
  //   trigger: "#about",
  //   start: "top top",
  //   end: "bottom top",
    // scroller: ".smooth-scroll",
  //   scrub: 1,
  //   pin: false,
  //   markers: true
  // },
  duration: 3,
  delay: 5.5,
  opacity: 0,
  stagger: 3.5,
  scrub: true
})
  .from('.cen-right__text', {
    x: "+=100%",
    duration: 3,
    opacity: 1,
    scrub: 1,
  },
  "-=3")
  .from('.family', {
    x: "+=50%",
    duration: 8,
    opacity: 0,
    scrub: 1,
    ease: "back"
  },
  "+=1")  
  .to('.item__cen-right', {
    // y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .to('.cen-right__text', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  },
  "-=3") 
  
  
  .from('.item__right', {
    duration: 3,
    opacity: 0,
    stagger: 1.5,
    scrub: true
  })
  .from('.right__text', {
    x: "-=100%",
    duration: 3,
    opacity: 1,
    scrub: 1,
  },
  "-=3")
  .from('.learning', {
    x: "-=50%",
    duration: 8,
    opacity: 0,
    scrub: 1,
    ease: "back"
  },
  "+=1")  
  .to('.item__right', {
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .to('.right__text', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  },
  "-=3") 


  .from('.item__cen-left', {
    duration: 3,
    opacity: 0,
    stagger: 1.5,
    scrub: true
  })
  .from('.cen-left__text', {
    x: "+=100%",
    duration: 3,
    opacity: 1,
    scrub: 1,
  },
  "-=3")
  .from('.creative', {
    x: "+=50%",
    duration: 8,
    opacity: 0,
    scrub: 1,
    ease: "back"
  },
  "+=1")  
  .to('.item__cen-left', {
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .to('.cen-left__text', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  },
  "-=3")
  
  
  .from('.item__left', {
    duration: 3,
    opacity: 0,
    stagger: 1.5,
    scrub: true
  })
  .from('.left__text', {
    x: "-=100%",
    duration: 3,
    opacity: 1,
    scrub: 1,
  },
  "-=3")
  .from('.football', {
    x: "-=50%",
    duration: 8,
    opacity: 0,
    scrub: 1,
    ease: "back"
  },
  "+=1")  
  .to('.item__left', {
    duration: 3,
    opacity: 0,
    scrub: 1,
  })
  .to('.left__text', {
    y: "-=200",
    duration: 3,
    opacity: 0,
    scrub: 1,
  },
  "-=3")

// Gsap Project

const projTl = gsap.timeline();

ScrollTrigger.create({
  // markers: true,
  trigger: "#projects",
  start: "top 4.5%",
  end: "+=6300",
  pin: true
})

projTl.from(".projects__heading", {
  scrollTrigger: {
    markers: true,
    trigger: ".textbox__projects",
    start: "top 400",
    end: "bottom top",
    scrub: 1
  },
  y: 400,
  duration: 0.7,
  ease: "power4",
  
})



// Nav Intersecting Animation


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