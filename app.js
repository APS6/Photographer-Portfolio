const left = document.querySelector(".left");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);


if (matchMedia('(any-pointer:coarse), (any-hover:none)').matches) {
    // Code for devices with touch input
} else {
    // Code for devices with mouse or trackpad input
    gsap.to('.img-slider', { scrollTrigger:{trigger: ".images", scrub: 3, start: 'bottom bottom', pin: true}, xPercent: -100 });
    gsap.to('.img-slider img', { scrollTrigger:{trigger: ".images", scrub: 3, start: 'bottom bottom'}, objectPosition: 0 });
  }