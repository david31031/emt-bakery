'use strict';
const EMTValidation={
  patterns:{email:/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,phone:/^(\+27|0)[6-8][0-9]{8}$|^(\+27|0)[1-9][0-9]{8}$/,name:/^[a-zA-Z\s'\-\.]{2,80}$/,noScript:/<script|SELECT\s|INSERT\s|DROP\s|DELETE\s|UPDATE\s/i},
  sanitize(s){if(typeof s!=='string')return'';return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');},
  isValidEmail(e){return this.patterns.email.test(e.trim());},
  isValidPhone(p){if(!p||!p.trim())return true;return this.patterns.phone.test(p.replace(/[\s\-()]/g,''));},
  isValidName(n){return this.patterns.name.test(n.trim());},
  isNotEmpty(v){return v!=null&&v.toString().trim().length>0;},
  isSafe(v){return!this.patterns.noScript.test(v);},
  showError(input,msg){
    const g=input.closest('.form-group');if(!g)return;
    this.clearError(input);g.classList.add('has-error');input.setAttribute('aria-invalid','true');
    const id=`err-${input.id||Math.random().toString(36).slice(2)}`;
    const el=document.createElement('p');el.id=id;el.className='field-error';el.setAttribute('role','alert');
    el.innerHTML=`<span aria-hidden="true">&#9888;</span> ${msg}`;
    const ex=input.getAttribute('aria-describedby')||'';input.setAttribute('aria-describedby',`${ex} ${id}`.trim());
    g.appendChild(el);input.classList.remove('shake');void input.offsetWidth;input.classList.add('shake');setTimeout(()=>input.classList.remove('shake'),500);
  },
  clearError(input){
    const g=input.closest('.form-group');if(!g)return;
    g.classList.remove('has-error','has-success');input.removeAttribute('aria-invalid');
    const e=g.querySelector('.field-error');if(e){const d=input.getAttribute('aria-describedby')||'';input.setAttribute('aria-describedby',d.replace(e.id,'').trim());e.remove();}
  },
  showSuccess(input){const g=input.closest('.form-group');if(!g)return;this.clearError(input);g.classList.add('has-success');},
  validateField(input){
    const val=input.value,type=input.dataset.validate||input.type,label=input.labels?.[0]?.textContent?.replace('*','').trim()||'This field';
    if(input.required&&!this.isNotEmpty(val)){this.showError(input,`${label} is required.`);return false;}
    if(!this.isNotEmpty(val)){this.clearError(input);return true;}
    if(!this.isSafe(val)){this.showError(input,'Please remove any special characters.');return false;}
    if((type==='email'||input.type==='email')&&!this.isValidEmail(val)){this.showError(input,'Please enter a valid email address.');return false;}
    if((type==='tel'||input.type==='tel')&&!this.isValidPhone(val)){this.showError(input,'Please enter a valid SA phone number (e.g. 082 000 0000).');return false;}
    if(type==='name'&&!this.isValidName(val)){this.showError(input,'Please enter a valid name (letters and spaces only).');return false;}
    const min=parseInt(input.dataset.minlength||0);if(min&&val.trim().length<min){this.showError(input,`Please enter at least ${min} characters.`);return false;}
    this.showSuccess(input);return true;
  },
  validateForm(form){
    const inputs=form.querySelectorAll('input,textarea,select');let ok=true,first=null;
    inputs.forEach(i=>{if(i.type==='hidden'||i.type==='submit')return;if(!this.validateField(i)){ok=false;if(!first)first=i;}});
    if(first){first.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>first.focus(),300);}
    return ok;
  },
  setLoading(btn,loading){
    btn.disabled=loading;
    if(loading){btn.dataset.orig=btn.textContent;btn.innerHTML='<span class="btn-spinner" aria-hidden="true"></span> Sending&hellip;';}
    else{btn.textContent=btn.dataset.orig||'Submit';}
  },
  showFormErrorBanner(form,msg){
    let b=form.querySelector('.form-error-banner');
    if(!b){b=document.createElement('div');b.className='form-error-banner';b.setAttribute('role','alert');form.prepend(b);}
    b.textContent=msg;b.scrollIntoView({behavior:'smooth',block:'nearest'});setTimeout(()=>b.remove(),7000);
  },
  showFormSuccess(container,title,body){
    const el=document.createElement('div');el.className='form-success-message';el.setAttribute('role','status');el.setAttribute('aria-live','polite');
    el.innerHTML=`<span class="success-icon" aria-hidden="true">&#10003;</span><h3>${title}</h3><p>${body}</p>`;
    container.replaceWith(el);el.scrollIntoView({behavior:'smooth',block:'start'});
  }
};
