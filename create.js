if(localStorage.history==null)localStorage.history="[]";else if("[]"!=localStorage.history){let a=JSON.parse(localStorage.history);const b=document.getElementsByTagName("aside")[0];for(;b.hasChildNodes();)b.removeChild(b.childNodes[0]);const c=document.createElement("strong");c.appendChild(document.createTextNode("Past Locations")),b.appendChild(c);for(let c=0;c<a.length;c++){const d=document.createElement("a");d.classList.add("history"),d.href=`/checkin.html#update${encodeURIComponent(a[c])}`;const e=document.createElement("span");e.appendChild(document.createTextNode(a[c])),d.appendChild(e);const f=document.createElement("img");f.src="/assets/delete.svg",f.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),b.removeChild(d),a.splice(c,1),localStorage.history=JSON.stringify(a)}),d.appendChild(f),b.appendChild(d)}}document.getElementById("text").addEventListener("submit",a=>{a.preventDefault(),window.location=`/checkin.html#update${encodeURIComponent(document.getElementsByTagName("textarea")[0].value)}`});