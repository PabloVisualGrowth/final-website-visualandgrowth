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
})();
