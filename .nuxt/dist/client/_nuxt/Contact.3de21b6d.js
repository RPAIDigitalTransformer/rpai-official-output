import{n as m,f as c,q as u,o as p,c as f,a as e,j as i,v as n,h as o,d as l,s as b}from"./entry.88c23b46.js";const _=()=>m().$mail,v={class:"mb-4"},h={class:"container px-4 px-lg-5"},g={class:"row gx-4 gx-lg-5 justify-content-center"},y={class:"col-md-10 col-lg-8 col-xl-7"},x=e("h2",{class:"post-title"},"RPA 數位優化器",-1),q=e("p",null,[l("歡迎在下方留言說明你的需求，或是寄信至："),e("a",{href:"mailto:rpadigitaltransformer@gmail.com"},"rpadigitaltransformer@gmail.com"),l("，我們將盡快與你聯繫！ ")],-1),k=e("p",null,"也可以到 RPA 數位優化器的社群追蹤我們！",-1),E={class:"my-5"},A={class:"form-floating"},V=e("label",{for:"name"},"姓名",-1),$=e("div",{class:"invalid-feedback","data-sb-feedback":"name:required"},"A name is required.",-1),N={class:"form-floating"},T=e("label",{for:"company"},"單位或機構名稱",-1),U={class:"form-floating"},w=e("label",{for:"email"},"E-mail",-1),B=e("div",{class:"invalid-feedback","data-sb-feedback":"email:required"},"An email is required.",-1),M=e("div",{class:"invalid-feedback","data-sb-feedback":"email:email"},"Email is not valid.",-1),P={class:"form-floating"},S=e("label",{for:"phone"},"連絡電話",-1),j=e("div",{class:"invalid-feedback","data-sb-feedback":"phone:required"},"A phone number is required.",-1),R={class:"form-floating"},C=e("label",{for:"message"},"訊息內容",-1),D=e("div",{class:"invalid-feedback","data-sb-feedback":"message:required"},"A message is required.",-1),F=b('<br><div class="d-none" id="submitSuccessMessage"><div class="text-center mb-3"><div class="fw-bolder">Form submission successful!</div>To activate this form, sign up at<br><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></div></div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div><button class="btn btn-primary text-uppercase" id="submitButton" type="submit">Send</button>',4),O=c({__name:"Contact",setup(I){const s=u({name:"",company:"",phone:"",email:"",message:""});function d(){_().send({from:s.name,subject:"rpaitw.com form: ",text:`致 RPAI Digital Transformers:

${s.message}

----------------------------------------------------------------
姓名: ${s.name}
連絡電話: ${s.phone}
E-mail: ${s.email}
單位或機構名稱: ${s.company}`})}return(r,t)=>(p(),f("main",v,[e("div",h,[e("div",g,[e("div",y,[x,q,k,e("div",E,[e("form",{onSubmit:t[5]||(t[5]=a=>d()),id:"contactForm","data-sb-form-api-token":"API_TOKEN"},[e("div",A,[i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o(s).name=a),class:"form-control",id:"name",type:"text",placeholder:"Enter your name...","data-sb-validations":"required"},null,512),[[n,o(s).name]]),V,$]),e("div",N,[i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o(s).company=a),class:"form-control",id:"company",type:"text",placeholder:"Enter your company...","data-sb-validations":"required"},null,512),[[n,o(s).company]]),T]),e("div",U,[i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o(s).email=a),class:"form-control",id:"email",type:"email",placeholder:"Enter your email...","data-sb-validations":"required,email"},null,512),[[n,o(s).email]]),w,B,M]),e("div",P,[i(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o(s).phone=a),class:"form-control",id:"phone",type:"tel",placeholder:"Enter your phone number...","data-sb-validations":"required"},null,512),[[n,o(s).phone]]),S,j]),e("div",R,[i(e("textarea",{"onUpdate:modelValue":t[4]||(t[4]=a=>o(s).message=a),class:"form-control",id:"message",placeholder:"Enter your message here...",style:{height:"12rem"},"data-sb-validations":"required"},null,512),[[n,o(s).message]]),C,D]),F],32)])])])])]))}});export{O as default};