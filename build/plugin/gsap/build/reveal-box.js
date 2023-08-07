/**
 * New plugin: imgBox Reveal Animation x Gsap
 * Core plugin: GreenSock core
 * With - SrollTrigger
 *
 * Docs: To use this animation
 * Add the class "reveal" to relevant division imgBox
 * */

gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector(Array("img"));
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out,
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out,
  });
});
