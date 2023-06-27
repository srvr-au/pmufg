function getid(e){return document.getElementById(e);}

function makeClick(){var audio = getid("audio");audio.play();}

function accordion(g,h){var z = getid('accdnBox-'+g);z.classList.toggle(h);var x = getid('accdnTxt-'+g);x.classList.toggle('show');var y = getid('accdnCtl-'+g);if(y.classList.contains('i-minus')){y.classList.toggle('i-plus');}if(y.classList.contains('i-arrow-dn')){y.classList.toggle('i-arrow-up');}}

function setCookie(cname,cvalue,exdays=365){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}

function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i+=1){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1)}if(c.indexOf(name)==0){return c.substring(name.length,c.length)}}return "";}

function includeHTML(){var z,i,elmnt,file,xhttp;z=document.getElementsByTagName("*");for(i=0;i<z.length;i+=1){elmnt=z[i];file=elmnt.getAttribute("include-html");if(file){xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){elmnt.innerHTML=this.responseText}if(this.status==404){elmnt.innerHTML="Content not found."}elmnt.removeAttribute("include-html");includeHTML()}};xhttp.open("GET",file,true);xhttp.send();return}}}

function openTab(evt, tabName) {
  var i, x, tabs;
  x = document.getElementsByClassName("tabContent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    tabs[i].className = tabs[i].className.replace(" tabActive", "");
  }
  if(tabName != 'none'){
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tabActive";
  }
}

function copyText(txt) {
var doc = document;
var textarea = doc.createElement('textarea');
textarea.style.position = 'fixed';
textarea.style.opacity  = '0';
textarea.textContent    = txt;
doc.body.appendChild(textarea);
textarea.focus();
textarea.setSelectionRange(0, textarea.value.length);
doc.execCommand("copy");
textarea.remove();
alert('Successfully copied to Clipboard!');
}

function passhide(g){
var z = getid('password'+g);
var x = getid('passhide'+g);
if(z.type === 'password'){
z.type = 'text';
x.innerHTML = 'hide';
}
else{
z.type = 'password';
x.innerHTML = 'show';
}
}

function refreshImg(imgElement, imgURL){
  imgURL.includes("?") ? getid(imgElement).src = imgURL + "&t=" + new Date().getTime() : getid(imgElement).src = imgURL + "?t=" + new Date().getTime();
}
