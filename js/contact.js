'use strict';
class ContactForm{
  constructor(){
    this.form=document.getElementById('contact-form');
    this.btn=document.getElementById('contact-submit');
    this.preview=document.getElementById('email-preview');
    if(!this.form)return;
    this.bind();this.updatePreview();
  }
  bind(){
    this.form.querySelectorAll('input,textarea,select').forEach(i=>{
      i.addEventListener('blur',()=>EMTValidation.validateField(i));
      i.addEventListener('input',()=>{if(i.closest('.form-group')?.classList.contains('has-error'))EMTValidation.validateField(i);this.updatePreview();});
    });
    this.form.querySelectorAll('select').forEach(s=>s.addEventListener('change',()=>this.updatePreview()));
    this.form.addEventListener('submit',e=>{e.preventDefault();this.submit();});
  }
  updatePreview(){
    if(!this.preview)return;
    const name=document.getElementById('contact-name')?.value?.trim()||'–';
    const email=document.getElementById('contact-email')?.value?.trim()||'–';
    const phone=document.getElementById('contact-phone')?.value?.trim()||'Not provided';
    const mt=document.getElementById('message-type');const mtl=mt?.options?.[mt.selectedIndex]?.text||'–';
    const msg=document.getElementById('contact-message')?.value?.trim()||'';
    const date=new Date().toLocaleString('en-ZA',{dateStyle:'long',timeStyle:'short'});
    const s=EMTValidation.sanitize.bind(EMTValidation);
    this.preview.innerHTML=`<div class="email-preview-header"><strong>Email Preview</strong><span class="preview-label">Updates as you type</span></div>
    <div class="email-preview-body">
      <table class="email-meta-table">
        <tr><th>From:</th><td>${s(name)} &lt;${s(email)}&gt;</td></tr>
        <tr><th>To:</th><td>hello@emtbakery.co.za</td></tr>
        <tr><th>Subject:</th><td>[${s(mtl)}] Enquiry from ${s(name)}</td></tr>
        <tr><th>Date:</th><td>${date}</td></tr>
        <tr><th>Phone:</th><td>${s(phone)}</td></tr>
      </table>
      <div class="email-message-body"><p>${s(msg).replace(/\n/g,'<br>')||'<em>Your message will appear here...</em>'}</p></div>
    </div>`;
  }
  async submit(){
    if(!EMTValidation.validateForm(this.form)){EMTValidation.showFormErrorBanner(this.form,'Please correct the highlighted errors.');return;}
    const data=Object.fromEntries(new FormData(this.form).entries());
    const s={};Object.keys(data).forEach(k=>s[k]=EMTValidation.sanitize(data[k]));
    EMTValidation.setLoading(this.btn,true);
    try{
      await new Promise(r=>setTimeout(r,1200));
      const w=this.form.closest('.contact-form')||this.form;
      EMTValidation.showFormSuccess(w,'Message Sent!',`Thank you, ${s.full_name||'there'}! We will reply to <strong>${s.email||''}</strong> within one business day.`);
    }catch(e){EMTValidation.showFormErrorBanner(this.form,'Something went wrong. Please try again or call +27 11 000 1234.');EMTValidation.setLoading(this.btn,false);}
  }
}
document.addEventListener('DOMContentLoaded',()=>new ContactForm());
