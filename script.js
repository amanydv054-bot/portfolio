const links=[...document.querySelectorAll('.nav nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let y=scrollY+100;
  let current=sections.reduce((a,s)=>s.offsetTop<=y?s:a,sections[0]);
  links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+current.id));
},{passive:true});
const ro=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');ro.unobserve(entry.target)}
}),{threshold:.08});
document.querySelectorAll('.reveal-on-scroll').forEach(el=>ro.observe(el));
