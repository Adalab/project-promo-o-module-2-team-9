"use strict";const designHeader=document.querySelector(".js_designHeader"),formHeader=document.querySelector(".js_formHeader"),shareHeader=document.querySelector(".js_shareHeader"),cardDecoration=document.querySelector(".card__decoration"),borderIcons=document.querySelectorAll(".js_icon_border"),imageIcons=document.querySelectorAll(".js_icon_image"),previeNameColor=document.querySelector(".js_previeNameColor"),shareCollapse=document.querySelector(".js_shareCollapse");function handleClickHeader(e){e.currentTarget.nextElementSibling.classList.toggle("js_collapsed"),e.currentTarget.lastElementChild.classList.toggle("js_arrowRotate")}designHeader.addEventListener("click",handleClickHeader),formHeader.addEventListener("click",handleClickHeader),shareHeader.addEventListener("click",handleClickHeader);const allInputs=document.querySelectorAll(".js_allInputs"),data={palette:1,name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:""};for(const e of allInputs)e.addEventListener("keyup",handleWriteInput);function handleWriteInput(e){const t=e.currentTarget.id,a=e.currentTarget.value;"name"===t?data.name=a:"job"===t?data.job=a:"email"===t?data.email=a:"phone"===t?data.phone=a:"linkedin"===t?data.linkedin=a:"github"===t?data.github=a:"photo"===t&&(data.photo=a),renderPreview(),setlocalStorage()}const previewName=document.querySelector(".js_previewName"),previewJob=document.querySelector(".js_previewJob"),previewEmail=document.querySelector(".js_previewEmail"),previewPhone=document.querySelector(".js_previewPhone"),previewLinkedin=document.querySelector(".js_previewLinkedin"),previewGithub=document.querySelector(".js_previewGithub");function renderPreview(){""===data.name?previewName.innerHTML="Nombre Apellido":previewName.innerHTML=data.name,""===data.job?previewJob.innerHTML="Front-end developer":previewJob.innerHTML=data.job,""===data.email?previewEmail.href="":previewEmail.href="mailto:"+data.email,""===data.phone?previewPhone.href="":previewPhone.href=data.phone,""===data.linkedin?previewLinkedin.href="":previewLinkedin.href=data.linkedin,""===data.github?previewGithub.href="":previewGithub.href=data.github}const allPalettes=document.querySelectorAll(".js_palette");for(const e of allPalettes)e.addEventListener("click",handleClickPalette);function handleClickPalette(e){const t=parseInt(e.currentTarget.value);limpiaClases(),data.palette=t,1===t?(cardDecoration.classList.add("card__decoration__palette1"),modificaNameAndLastName("namePreview__pallete1"),modificaSocialIcons("social__icon__palette1"),modificaIconsImages("icon_image__pallete1")):2===t?(cardDecoration.classList.add("card__decoration__palette2"),modificaNameAndLastName("namePreview__pallete2"),modificaSocialIcons("social__icon__palette2"),modificaIconsImages("icon_image__pallete2")):3===t&&(cardDecoration.classList.add("card__decoration__palette3"),modificaNameAndLastName("namePreview__pallete3"),modificaSocialIcons("social__icon__palette3"),modificaIconsImages("icon_image__pallete3")),setlocalStorage()}function limpiaClases(){cardDecoration.classList.remove("card__decoration__palette1"),cardDecoration.classList.remove("card__decoration__palette2"),cardDecoration.classList.remove("card__decoration__palette3"),previeNameColor.classList.remove("namePreview__pallete1"),previeNameColor.classList.remove("namePreview__pallete2"),previeNameColor.classList.remove("namePreview__pallete3");for(const e of borderIcons)e.classList.remove("social__icon__palette1"),e.classList.remove("social__icon__palette2"),e.classList.remove("social__icon__palette3");for(const e of imageIcons)e.classList.remove("icon_image__pallete1"),e.classList.remove("icon_image__pallete2"),e.classList.remove("icon_image__pallete3")}function modificaSocialIcons(e){for(const t of borderIcons)t.classList.add(e)}function modificaIconsImages(e){for(const t of imageIcons)t.classList.add(e)}const createBtn=document.querySelector(".js_create_button"),cardURL=document.querySelector(".js_cardURL");function modificaNameAndLastName(e){previeNameColor.classList.add(e)}const buttonReset=document.querySelector(".js_reset");function handleResetForm(){limpiaClases();const e=document.querySelector(".js_palette_1");!1===e.checked&&(e.checked=!0),data.palette=1,data.name="",data.job="",data.email="",data.phone="",data.linkedin="",data.github="",data.photo="",data.palette=1,previewName.innerHTML="Nombre Apellido",previewJob.innerHTML="Front-end developer",previewEmail.href="",previewPhone.href="",previewLinkedin.href="",previewGithub.href="",createBtn.style.backgroundColor="#e17334",profileImage.style.backgroundImage="url('./assets/images/jasonderulo_pic.png')",profilePreview.style.backgroundImage="";for(const e of allInputs)e.value=""}buttonReset.addEventListener("click",handleResetForm);const createButton=document.querySelector(".js_create_button"),btnTwitter=document.querySelector(".js_btnTwitter");let dataCard=[];const twitterFetch=document.querySelector(".js_twitterFetch");function handleCreateCard(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{dataCard=e,shareCollapse.classList.contains("js_collapsed")&&(shareCollapse.classList.remove("js_collapsed"),createButton.style.backgroundColor="gray"),void 0!==e.cardURL?(twitterFetch.innerHTML=e.cardURL,twitterFetch.href=e.cardURL,btnTwitter.classList.remove("js_collapsed"),btnTwitter.addEventListener("click",handleTweet),twitterFetch.previousElementSibling.innerHTML="La tarjeta ha sido creada:"):(twitterFetch.innerHTML="Por favor, complete todos los campos e inténtelo de nuevo",twitterFetch.href="",twitterFetch.previousElementSibling.innerHTML="No se ha podido crear la tarjeta")})}function handleTweet(){btnTwitter.href="https://twitter.com/intent/tweet?text="+dataCard.cardURL}createButton.addEventListener("click",handleCreateCard);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result,setlocalStorage()}function fakeFileClick(){fileField.click()}function setlocalStorage(){localStorage.setItem("dataLocal",JSON.stringify(data))}function getLocalStorage(){const e=localStorage.getItem("dataLocal");if(null!=e){const t=JSON.parse(e),a=document.querySelectorAll(".js_allInputs");for(const e in t)data[e]=t[e];for(const e of a)"name"===e.id?e.value=data.name:"job"===e.id?e.value=data.job:"email"===e.id?e.value=data.email:"phone"===e.id?e.value=data.phone:"linkedin"===e.id?e.value=data.linkedin:"github"===e.id?e.value=data.github:"photo"===e.id&&(e.value=data.photo);profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`,renderPreview()}}fileField.addEventListener("change",getImage),getLocalStorage();