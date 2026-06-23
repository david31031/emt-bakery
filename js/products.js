'use strict';
class ProductCatalogue{
  constructor(){
    this.all=[...EMT_PRODUCTS];this.filtered=[...this.all];
    this.category='all';this.sort='featured';this.query='';this.timer=null;
    this.grid=document.getElementById('products-dynamic-grid');
    this.search=document.getElementById('product-search');
    this.clear=document.getElementById('clear-search');
    this.sortSel=document.getElementById('sort-select');
    this.count=document.getElementById('results-count');
    this.noRes=document.getElementById('no-results');
    this.catBtns=document.querySelectorAll('[data-category]');
    if(!this.grid)return;
    this.bind();this.render();
  }
  bind(){
    if(this.search){
      this.search.addEventListener('input',e=>{
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{this.query=e.target.value.trim().toLowerCase();this.applyFilters();},300);
        if(this.clear)this.clear.style.display=e.target.value?'flex':'none';
      });
    }
    if(this.clear)this.clear.addEventListener('click',()=>{this.search.value='';this.query='';this.clear.style.display='none';this.search.focus();this.applyFilters();});
    this.catBtns.forEach(b=>b.addEventListener('click',()=>{
      this.category=b.dataset.category;
      this.catBtns.forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false');});
      b.classList.add('active');b.setAttribute('aria-pressed','true');
      this.applyFilters();
    }));
    if(this.sortSel)this.sortSel.addEventListener('change',()=>{this.sort=this.sortSel.value;this.applyFilters();});
  }
  applyFilters(){
    let r=[...this.all];
    if(this.category!=='all')r=r.filter(p=>p.category===this.category);
    if(this.query){const q=this.query;r=r.filter(p=>p.name.toLowerCase().includes(q)||p.shortDescription.toLowerCase().includes(q)||p.tags.some(t=>t.includes(q))||p.dietary.some(d=>d.includes(q))||p.category.includes(q));}
    switch(this.sort){
      case'price-asc':r.sort((a,b)=>a.price-b.price);break;
      case'price-desc':r.sort((a,b)=>b.price-a.price);break;
      case'name-asc':r.sort((a,b)=>a.name.localeCompare(b.name));break;
      case'rating':r.sort((a,b)=>b.rating-a.rating);break;
      default:r.sort((a,b)=>b.featured-a.featured||(a.id-b.id));
    }
    this.filtered=r;this.render();
  }
  stars(n){let s='';for(let i=1;i<=5;i++)s+=i<=Math.round(n)?'&#9733;':'&#9734;';return s;}
  catLabel(c){return{breads:'Breads',pastries:'Pastries',cakes:'Custom Cakes',corporate:'Corporate'}[c]||c;}
  dietLabel(k){return{vegan:'Vegan',vegetarian:'Vegetarian','dairy-free':'Dairy-Free','high-fibre':'High Fibre','gf-option':'GF Option','vegan-option':'Vegan Option','halal-option':'Halal Option',custom:'Custom Diet'}[k]||k;}
  card(p){
    const badges=p.dietary.map(d=>`<span class="dietary-badge dietary-badge--${d.replace(/-/g,'')}">${this.dietLabel(d)}</span>`).join('');
    return`<article class="product-card" aria-labelledby="prod-${p.id}">
      <figure><img src="${p.image}" alt="${p.imageAlt}" width="400" height="300" loading="lazy">${p.featured?`<span class="featured-badge" aria-label="Featured">&#9733; Featured</span>`:''}</figure>
      <div class="card-content">
        <div class="card-meta"><span class="category-tag">${this.catLabel(p.category)}</span>
        <span class="rating" aria-label="Rated ${p.rating} out of 5"><span class="rating-stars" aria-hidden="true">${this.stars(p.rating)}</span><span class="rating-count">(${p.reviews})</span></span></div>
        <h3 id="prod-${p.id}">${p.name}</h3><p>${p.shortDescription}</p>
        <div class="dietary-badges">${badges}</div>
        <p class="lead-time"><strong>Lead time:</strong> ${p.leadTime}</p>
        <p class="price">From <strong>R&nbsp;${p.price.toLocaleString('en-ZA')}</strong> <small>${p.priceUnit}</small></p>
        <div class="card-actions">
          <a href="enquiry.html?product=${p.slug}" class="btn btn-primary">Enquire / Order</a>
          <a href="products.html#${p.slug}" class="btn btn-outline">Details</a>
        </div>
      </div></article>`;
  }
  render(){
    const n=this.filtered.length;
    if(this.count)this.count.textContent=`${n} product${n!==1?'s':''} found`;
    if(n===0){this.grid.innerHTML='';if(this.noRes)this.noRes.hidden=false;return;}
    if(this.noRes)this.noRes.hidden=true;
    this.grid.style.opacity='0';
    setTimeout(()=>{this.grid.innerHTML=this.filtered.map(p=>this.card(p)).join('');this.grid.style.transition='opacity 250ms ease';this.grid.style.opacity='1';},150);
  }
}
document.addEventListener('DOMContentLoaded',()=>new ProductCatalogue());
