'use strict';
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle'),menu=document.querySelector('.nav-menu'),nav=document.querySelector('nav[aria-label="Primary Navigation"]');
  if(toggle&&menu){
    toggle.addEventListener('click',()=>{
      const open=menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',open);
      const bars=toggle.querySelectorAll('.nav-toggle-bar');
      if(open){bars[0].style.transform='translateY(7px) rotate(45deg)';bars[1].style.opacity='0';bars[2].style.transform='translateY(-7px) rotate(-45deg)';}
      else{bars[0].style.transform='';bars[1].style.opacity='';bars[2].style.transform='';}
      document.body.style.overflow=open?'hidden':'';
    });
    menu.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');document.body.style.overflow='';const bars=toggle.querySelectorAll('.nav-toggle-bar');bars[0].style.transform='';bars[1].style.opacity='';bars[2].style.transform='';}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('is-open')){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');document.body.style.overflow='';toggle.focus();}});
  }
  if(nav)window.addEventListener('scroll',()=>nav.classList.toggle('nav--elevated',window.scrollY>10),{passive:true});
  const yr=document.querySelector('.copyright-year');if(yr)yr.textContent=new Date().getFullYear();
});
