(function(){
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  const mega = document.getElementById('mega');
  const trigger = document.getElementById('mmServicios');
  let hideTimer;
  function show(){ clearTimeout(hideTimer); mega.classList.add('open'); }
  function hide(){ hideTimer = setTimeout(()=>mega.classList.remove('open'), 150); }
  trigger.addEventListener('mouseenter', show);
  trigger.addEventListener('click', function(e){ e.preventDefault(); mega.classList.toggle('open'); });
  mega.addEventListener('mouseenter', show);
  trigger.addEventListener('mouseleave', hide);
  mega.addEventListener('mouseleave', hide);
  document.addEventListener('click', function(e){
    if(!mega.contains(e.target) && e.target!==trigger) mega.classList.remove('open');
  });

  // ---- mobile menu (built dynamically from nav-links + mega) ----
  const burger = document.querySelector('.burger');
  if(burger){
    const panel = document.createElement('div');
    panel.className = 'mobile-panel';
    panel.innerHTML =
      '<button class="mobile-close" aria-label="Cerrar menú">&times;</button>' +
      '<div class="mp-group">Servicios</div><div class="mp-sub">' +
        [...mega.querySelectorAll('a')].map(a=>`<a href="${a.getAttribute('href')}">${a.textContent}</a>`).join('') +
      '</div>' +
      [...document.querySelectorAll('.nav-links a')].filter(a=>a.id!=='mmServicios').map(a=>`<a href="${a.getAttribute('href')}">${a.textContent}</a>`).join('');
    document.body.appendChild(panel);

    burger.addEventListener('click', ()=> panel.classList.add('open'));
    panel.querySelector('.mobile-close').addEventListener('click', ()=> panel.classList.remove('open'));
    panel.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=> panel.classList.remove('open')));
  }
})();
