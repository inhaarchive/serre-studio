const menuButton=document.querySelector('.menu-button');
const siteNav=document.querySelector('.site-nav');
if(menuButton&&siteNav){menuButton.addEventListener('click',()=>{const open=siteNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}

const cards=[...document.querySelectorAll('[data-gallery] .art-card')];
const lightbox=document.getElementById('lightbox');
if(lightbox&&cards.length){
  const image=document.getElementById('lightbox-image');
  const caption=document.getElementById('lightbox-caption');
  const reading=document.getElementById('lightbox-reading');
  const count=document.getElementById('lightbox-count');
  const closeBtn=lightbox.querySelector('.lightbox-close');
  const prevBtn=lightbox.querySelector('.lightbox-prev');
  const nextBtn=lightbox.querySelector('.lightbox-next');
  let index=0,startX=0,lastFocus=null;
  const show=i=>{
    index=(i+cards.length)%cards.length;
    const c=cards[index];
    image.src=c.dataset.full; image.alt=c.querySelector('img')?.alt||c.dataset.title||'';
    const parts=[c.dataset.eyebrow,c.dataset.title,c.dataset.subtitle].filter(Boolean);
    caption.textContent=parts.join(' · ');
    reading.textContent=c.dataset.caption||'';
    reading.hidden=!c.dataset.caption;
    count.textContent=`${index+1} / ${cards.length}`;
  };
  const open=i=>{lastFocus=document.activeElement;show(i);lightbox.hidden=false;document.body.classList.add('lightbox-open');closeBtn.focus();};
  const close=()=>{lightbox.hidden=true;image.removeAttribute('src');document.body.classList.remove('lightbox-open');lastFocus?.focus();};
  cards.forEach((card,i)=>card.addEventListener('click',()=>open(i)));
  closeBtn.addEventListener('click',close); prevBtn.addEventListener('click',()=>show(index-1)); nextBtn.addEventListener('click',()=>show(index+1));
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
  document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1);});
  image.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});
  image.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)show(index+(dx<0?1:-1));},{passive:true});
}
