burger = document.querySelector('.burger')
nav = document.querySelector('nav')
e = document.querySelector('.e')

burger.addEventListener('click',() =>{
    nav.classList.toggle('active');
    e.classList.toggle('active');
    burger.classList.toggle('active');
})

if (matchMedia('(any-pointer:coarse), (any-hover:none)').matches) {
  // Code for devices with touch input
  gsap.fromTo('.about-ct', 1, { opacity: 0, y: 40}, { opacity: 1, y: 0, scrollTrigger: '.about-ct'})
  gsap.fromTo('.about img', 1, { opacity: 0, y: 40}, { opacity: 1, y: 0, scrollTrigger: '.about img'})
} else {
  // Code for devices with mouse or trackpad input
  gsap.to('.img-slider', { scrollTrigger: { trigger: ".images", scrub: 3, start: 'bottom bottom', pin: true }, xPercent: -150 });
  gsap.to('.img-slider img', { scrollTrigger: { trigger: ".images", scrub: 3, start: 'bottom bottom' }, objectPosition: 0 });

  const left = document.querySelector(".left");

  const handleMove = e => {
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
  }

  document.onmousemove = e => handleMove(e);

  document.ontouchmove = e => handleMove(e.touches[0]);

  gsap.to('.about img', { scrollTrigger: { trigger: '.about-p', scrub: 3, start: 'top bottom' }, yPercent: -100 })

}





const tl = gsap.timeline();
tl.to(".hide span", { y: "0", duration: .6, stagger: 0.3 });
tl.to('.intro img', { y: 0 , opacity: 1, duration: 1, stagger: 0.15 })
tl.to(".intro", { y: "-100%", duration: 1 },);


const cl = gsap.timeline({scrollTrigger:'.contact'});
cl.fromTo('.contact h2', .7, { opacity: 0, y: 40}, { opacity:1, y: 0 })
cl.fromTo('form', 1, { opacity: 0, y: 40}, { opacity:1, y: 0 })