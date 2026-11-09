/* AETHERNE — entrance animation, word reveals, scroll reveals.
   Loaded after app.js. Everything here is optional: if this file fails, the site still works. */
(function(){
"use strict";
var root=document.documentElement,
    app=document.getElementById("app"),
    intro=document.getElementById("intro"),
    reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches,
    playing=root.classList.contains("intro-on")&&!!intro,
    ready=!playing,pending=false,last=null,pend=[],sw=false,big=null,tick=false,done=false;

function $$(q,r){return [].slice.call((r||document).querySelectorAll(q))}

/* ---------- intro ---------- */
function finishIntro(){
  if(!playing||done)return;done=true;
  intro.classList.add("out");
  setTimeout(function(){ready=true;if(pending)startHero();ask();setTimeout(ask,900)},600);
  setTimeout(function(){root.classList.remove("intro-on");if(intro.parentNode)intro.parentNode.removeChild(intro)},1700);
}
if(playing){
  setTimeout(finishIntro,3600);
  intro.addEventListener("click",finishIntro);
  document.addEventListener("keydown",function(e){if(e.key==="Escape"||e.key==="Enter"||e.key===" ")finishIntro()});
}

/* ---------- split headings into words ---------- */
function word(t,st){
  var w=document.createElement("span"),i=document.createElement("span");
  w.className="w";i.className="wi";i.style.setProperty("--i",st.n++);
  if(t)i.appendChild(t);w.appendChild(i);return w;
}
function split(node,st){
  [].slice.call(node.childNodes).forEach(function(n){
    if(n.nodeType===3){
      var f=document.createDocumentFragment();
      n.nodeValue.split(/(\s+)/).forEach(function(p){
        if(!p)return;
        if(/^\s+$/.test(p))f.appendChild(document.createTextNode(" "));
        else f.appendChild(word(document.createTextNode(p),st));
      });
      node.replaceChild(f,n);
    }else if(n.nodeType===1){
      if(n.classList.contains("gg")){            /* gradient text must stay in one piece */
        var w=word(null,st);node.replaceChild(w,n);w.firstChild.appendChild(n);
      }else split(n,st);
    }
  });
}

/* ---------- reveal on scroll ---------- */
function show(el,delay){
  el.style.setProperty("--d",delay+"s");
  el.classList.add("in");
  if(el.classList.contains("rv")){
    el.addEventListener("animationend",function f(e){
      if(e.target!==el)return;
      el.removeEventListener("animationend",f);
      el.classList.remove("rv","in");el.style.removeProperty("--d");
    });
  }
  if(el.classList.contains("st"))$$("b",el).forEach(count);
}
/* Elements are revealed by measuring their position on scroll (not IntersectionObserver:
   a fully clipped element is treated as "not visible" and would never open). */
function watch(el){pend.push(el)}
function sweep(){
  sw=false;
  if(!ready||!pend.length)return;
  var vh=window.innerHeight,vw=window.innerWidth,k=0,keep=[];
  pend.forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.bottom>0&&r.top<vh*.94&&r.right>0&&r.left<vw)show(el,Math.min(k++,9)*.14);
    else keep.push(el);
  });
  pend=keep;
}
function ask(){if(!sw){sw=true;requestAnimationFrame(sweep)}}
document.addEventListener("scroll",ask,{capture:true,passive:true});   /* also catches the sideways card row */
window.addEventListener("resize",ask);
function count(b){
  var m=/^(\d+)(.*)$/.exec(b.getAttribute("data-t")||""),t0=null;
  if(!m)return;
  var n=+m[1],suf=m[2];
  function step(ts){
    if(t0===null)t0=ts;
    var p=Math.min(1,(ts-t0)/1700),e=p===1?1:1-Math.pow(2,-10*p);
    b.textContent=Math.round(n*e)+suf;
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- hero ---------- */
function startHero(){
  var hero=app.querySelector(".hero.pre");
  if(!hero){pending=false;return}
  pending=false;
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    hero.classList.add("go");
    var h=hero.querySelector("h2");if(h)h.classList.add("in");
  })});
}

/* ---------- run once for every freshly rendered page ---------- */
function fx(){
  var h=location.hash||"#home";
  if(h===last)return;            /* same page re-rendered (bag, wishlist...): no replay */
  last=h;
  pend=[];
  big=null;
  if(reduce)return;

  /* hero */
  var hero=app.querySelector(".hero");
  if(hero){
    hero.classList.add("pre");
    var ht=hero.querySelector("h2");
    if(ht){split(ht,{n:0});ht.classList.add("rw")}
    big=hero.querySelector(".big");
    if(ready)startHero();else pending=true;
  }

  /* headings */
  $$(".sh h2,.ph h1,.split h2,.story h2,.pdi h1",app).forEach(function(el){
    split(el,{n:0});el.classList.add("rw");watch(el);
  });

  /* lazy images inside hidden blocks may never load: load them right away */
  $$(".ct img,.gm img,.split>img",app).forEach(function(i){i.loading="eager"});

  /* images wipe open */
  $$(".ct,.gm",app).forEach(function(el){el.classList.add("clip");watch(el)});
  $$(".split>img",app).forEach(function(el){el.classList.add("clip","h");watch(el)});

  /* fade + rise */
  $$(".sh p,.ph p,.ph .eb,.sp .eb,.sp .btn,.story .eb,.pc,.pdi>:not(h1),.th,.fl,.row,.bi,.sum,.em",app).forEach(function(el){
    el.classList.add("rv");watch(el);
  });

  /* numbers count up */
  $$(".st",app).forEach(function(el){
    el.classList.add("rv");
    $$("b",el).forEach(function(b){
      var t=b.textContent;b.setAttribute("data-t",t);
      var m=/^(\d+)(.*)$/.exec(t);if(m)b.textContent="0"+m[2];
    });
    watch(el);
  });

  ask();
  setTimeout(ask,700);
}

/* ---------- subtle parallax on the big "Æther" ---------- */
function par(){
  tick=false;
  if(!big)return;
  var y=window.pageYOffset;
  if(y<innerHeight*1.3)big.style.setProperty("--py",(y*.16)+"px");
}
if(!reduce)window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(par)}},{passive:true});

if(app&&"MutationObserver" in window)new MutationObserver(fx).observe(app,{childList:true});
fx();
})();
