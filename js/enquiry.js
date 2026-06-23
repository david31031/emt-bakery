'use strict';
class EnquiryForm{
  constructor(){
    this.form=document.getElementById('enquiry-form');
    this.svc=document.getElementById('service-type');
    this.btn=document.getElementById('enquiry-submit');
    this.resp=document.getElementById('enquiry-response');
    this.groups={cake:document.getElementById('cake-fields'),wedding:document.getElementById('wedding-fields'),bread:document.getElementById('bread-fields'),corp:document.getElementById('corporate-fields')};
    if(!this.form)return;
    this.prefill();this.bind();this.toggleFields();
  }
  prefill(){
    const p=new URLSearchParams(window.location.search).get('product');if(!p||!this.svc)return;
    const map={sourdough:'breads',ciabatta:'breads','dark-rye':'breads',croissants:'pastries',muffins:'pastries','birthday-cake':'birthday-cake','wedding-cake':'wedding-cake','corporate-cake':'corporate-cake','event-platters':'corporate-catering','gift-boxes':'corporate-catering'};
    if(map[p])this.svc.value=map[p];
    const ref=document.getElementById('product-reference');if(ref)ref.value=p.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  }
  bind(){
    if(this.svc)this.svc.addEventListener('change',()=>this.toggleFields());
    this.form.querySelectorAll('input,textarea,select').forEach(i=>{
      i.addEventListener('blur',()=>EMTValidation.validateField(i));
      i.addEventListener('input',()=>{if(i.closest('.form-group')?.classList.contains('has-error'))EMTValidation.validateField(i);});
    });
    this.form.addEventListener('submit',e=>{e.preventDefault();this.submit();});
  }
  toggleFields(){
    const v=this.svc?.value||'';
    Object.values(this.groups).forEach(g=>{if(g){g.hidden=true;g.querySelectorAll('[data-conditional-required]').forEach(e=>{e.required=false;e.setAttribute('aria-required','false');});}});
    const map={'birthday-cake':this.groups.cake,'tier-cake':this.groups.cake,'wedding-cake':this.groups.wedding,breads:this.groups.bread,pastries:this.groups.bread,'corporate-catering':this.groups.corp,'corporate-cake':this.groups.corp};
    const g=map[v];if(g){g.hidden=false;g.querySelectorAll('[data-conditional-required]').forEach(e=>{e.required=true;e.setAttribute('aria-required','true');});}
  }
  async submit(){
    if(!EMTValidation.validateForm(this.form)){EMTValidation.showFormErrorBanner(this.form,'Please correct the highlighted errors before submitting.');return;}
    const data=Object.fromEntries(new FormData(this.form).entries());
    const s={};Object.keys(data).forEach(k=>s[k]=EMTValidation.sanitize(data[k]));
    EMTValidation.setLoading(this.btn,true);
    try{
      await new Promise(r=>setTimeout(r,1500));
      this.form.hidden=true;this.showResponse(s);
    }catch(e){EMTValidation.showFormErrorBanner(this.form,'Something went wrong. Please try again or call us on +27 11 000 1234.');EMTValidation.setLoading(this.btn,false);}
  }
  estimate(type,portions){
    const rates={breads:{min:65,max:150,unit:'per loaf/pack'},pastries:{min:95,max:180,unit:'per item'},birthday-cake:{min:450,max:1800,unit:'by size & design'},'tier-cake':{min:1200,max:4000,unit:'by tiers & design'},'wedding-cake':{min:2500,max:12000,unit:'by tiers & guests'},'corporate-cake':{min:650,max:2500,unit:'by size & branding'},'corporate-catering':{min:85,max:150,unit:'per person'},general:{min:0,max:0,unit:''}};
    const r=rates[type]||rates.general;if(r.min===0)return{display:'Quote on request',unit:''};
    return{display:`R ${r.min.toLocaleString('en-ZA')} – R ${r.max.toLocaleString('en-ZA')}`,unit:r.unit};
  }
  avail(dateStr){
    if(!dateStr)return{label:'Open for this date',cls:'available'};
    const diff=Math.ceil((new Date(dateStr)-new Date())/(86400000));
    if(diff<3)return{label:'Less than 3 days – please call us',cls:'urgent'};
    if(diff<14)return{label:'Limited slots – confirm quickly',cls:'limited'};
    return{label:'&#10003; Available for your date',cls:'available'};
  }
  ref(){return'EMT-ENQ-'+Date.now().toString(36).toUpperCase();}
  showResponse(d){
    if(!this.resp)return;
    const svc=d.service_type||'general',cost=this.estimate(svc,d.portions||d.guest_count),av=this.avail(d.event_date||''),ref=this.ref();
    const lbls={breads:'Artisan Breads',pastries:'Pastries','birthday-cake':'Birthday Cake','tier-cake':'Multi-Tier Cake','wedding-cake':'Wedding Cake','corporate-cake':'Corporate Cake','corporate-catering':'Corporate Catering',general:'General Enquiry'};
    this.resp.hidden=false;
    this.resp.innerHTML=`<div class="response-header"><span class="check" aria-hidden="true">&#10003;</span><div><h3>Enquiry Received – Thank You, ${d.full_name||'there'}!</h3><p>We will be in touch at <strong>${d.email||''}</strong> within one business day.</p></div></div>
    <div class="response-grid">
      <div class="response-item"><p class="label">Reference</p><p class="value">${ref}</p></div>
      <div class="response-item"><p class="label">Service</p><p class="value">${lbls[svc]||'General'}</p></div>
      <div class="response-item"><p class="label">Estimated Cost</p><p class="value price">${cost.display}</p>${cost.unit?`<p class="label">${cost.unit}</p>`:''}</div>
      <div class="response-item"><p class="label">Availability</p><p class="value avail avail--${av.cls}">${av.label}</p></div>
    </div>
    <div class="response-next-steps"><h4>What Happens Next?</h4><ol>
      <li>A baker will review your enquiry and contact you within <strong>1 business day</strong>.</li>
      <li>We confirm availability, finalise specs, and send a formal quote.</li>
      <li>A <strong>50% deposit</strong> confirms your booking. Balance due on delivery.</li>
      <li>For cakes over R 1 000, we schedule a <strong>free tasting session</strong>.</li>
    </ol></div>
    <div class="response-actions"><a href="index.html" class="btn btn-primary">Back to Home</a><a href="gallery.html" class="btn btn-secondary">View Our Gallery</a><a href="tel:+27110001234" class="btn btn-outline">Call Us Now</a></div>`;
    this.resp.scrollIntoView({behavior:'smooth',block:'start'});
  }
}
document.addEventListener('DOMContentLoaded',()=>new EnquiryForm());
