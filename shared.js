// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
if (cursor && ring) {
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function frame() {
    cx += (mx - cx) * .15;
    cy += (my - cy) * .15;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    ring.style.left = mx + 'px';
    ring.style.top = my + 'px';
    requestAnimationFrame(frame);
  }
  frame();
  document.querySelectorAll('a, button, .card, .insight-card').forEach(el =>
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); })
  );
  document.querySelectorAll('a, button, .card, .insight-card').forEach(el =>
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); })
  );
}

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: .08, rootMargin: '0px 0px -48px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
