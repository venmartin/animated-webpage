var tl = gsap.timeline({defaults:{duraction: 1}});


tl.from('.venmartin', {
  scrollTrigger: "#landing__main",
  x: -450,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: "back",
  stagger: 0.35
});

tl.from('.hex__svg1', {
  scrollTrigger: "#landing__main",
  x: 450,
  duration: 1,
  opacity: 0,
  ease: "back",
},
"-=1")

tl.from('.intro__text', {
  scrollTrigger: "#landing__main",
  x: -450,
  duration: 1.5,
  delay: 0.5,
  opacity: 0,
  ease: "power4",
  stagger: 1.5
})

