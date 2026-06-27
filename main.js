const dot = document.getElementById('dot');
let tx = 0, ty = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

(function move() {
  cx += (tx - cx) * 0.12;
  cy += (ty - cy) * 0.12;
  dot.style.left = cx + 'px';
  dot.style.top  = cy + 'px';
  requestAnimationFrame(move);
})();

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 50);
});

const bg = document.getElementById('bg');

document.addEventListener('mousemove', e => {
  const x = (e.clientX / innerWidth  - .5) * 14;
  const y = (e.clientY / innerHeight - .5) * 9;
  bg.style.transform = `scale(1.06) translate(${x}px,${y}px)`;
});

window.addEventListener('load', () => bg.classList.add('ready'));

document.querySelectorAll('.card').forEach(c => {
  const inn = c.querySelector('.card-in');
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - .5;
    const y = (e.clientY - r.top)  / r.height - .5;
    inn.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg) translateZ(6px)`;
  });
  c.addEventListener('mouseleave', () => inn.style.transform = '');
});
