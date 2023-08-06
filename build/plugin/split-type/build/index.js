gsap.registerPlugin(ScrollTrigger);

const textAnimate = new SplitType("#text-animate");

const tl = gsap.timeline();
gsap.to(".char", {
  y: 0,
  stagger: 0.02,
  duration: 0.8,
});
tl.to("#text-animate", {
  y: 115,
  duration: 1,
  clipPath: "polygon(0 0, 100% 0, 100% 84%, 0 31%)",
}).to("#text-animate", {
  y: 0,
  duration: 1.1,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
});
