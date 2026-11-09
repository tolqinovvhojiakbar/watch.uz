var I={hero:"images/hero-watch.jpg",silver:"images/watch-silver.jpg",gold:"images/watch-gold.jpg",sk:"images/watch-skeleton.jpg",cer:"images/watch-ceramic.jpg",at:"images/atelier.jpg",fl:"images/foksy-blue-leather.jpg",fs:"images/foksy-blue-steel.jpg",tq:"images/tpofhs-quartz.jpg",cd:"images/casio-diver.jpg",rg:"images/rolex-sub-green.jpg",r41:"images/rolex-sub-41.jpg",gmt:"images/rolex-gmt.jpg"};
var P=[
{s:"meridian-noir",n:"Meridian Noir",r:"AE-01.T",c:"Meridian",m:"Titanium",mv:"Automatic",p:14800,d:40,rs:"72 h",w:"100 m",t:"Midnight, measured in gold.",x:"A sunburst onyx dial suspended in a grade 5 titanium case. Faceted champagne-gold indices catch the faintest light, so time reads even at the edge of darkness.",i:[I.hero,I.silver,I.cer]},
{s:"meridian-argent",n:"Meridian Argent",r:"AE-02.S",c:"Meridian",m:"Steel",mv:"Automatic",p:11200,d:39,rs:"72 h",w:"50 m",t:"Hand-turned silence.",x:"A hand-engraved guilloché dial in frosted silver, framed by a mirror-polished steel case barely 8.9 mm thin.",i:[I.silver,I.hero,I.gold]},
{s:"eclipse-chrono-or",n:"Eclipse Chrono Or",r:"EC-11.G",c:"Eclipse",m:"Champagne Gold",mv:"Chronograph",p:38500,d:41,rs:"60 h",w:"50 m",t:"Every second, gilded.",x:"An 18k champagne-gold column-wheel chronograph with tri-compax sub-dials and a hand-stitched alligator strap.",i:[I.gold,I.cer,I.hero]},
{s:"eclipse-ceramique",n:"Eclipse Céramique",r:"EC-12.C",c:"Eclipse",m:"Ceramic",mv:"Chronograph",p:21900,d:42,rs:"60 h",w:"200 m",t:"Darkness, engineered.",x:"Scratch-proof black ceramic shaped by laser, with champagne-gold pushers and a vulcanised rubber strap built for motion.",i:[I.cer,I.gold,I.sk]},
{s:"atelier-tourbillon",n:"Atelier Tourbillon",r:"AT-90.T",c:"Atelier",m:"Titanium",mv:"Tourbillon",p:148000,d:44,rs:"110 h",w:"30 m",t:"The movement, laid bare.",x:"A flying tourbillon revolving once per minute within an open-worked bridge architecture. Hand-finished over 400 hours.",i:[I.sk,I.hero,I.silver],l:"1 of 25"},
{s:"atelier-squelette-or",n:"Atelier Squelette Or",r:"AT-91.G",c:"Atelier",m:"Champagne Gold",mv:"Tourbillon",p:172000,d:42,rs:"110 h",w:"30 m",t:"Light through gold.",x:"Our skeleton calibre AE-T9 dressed in champagne gold, each bridge chamfered by hand at 45°.",i:[I.sk,I.gold,I.cer],l:"1 of 12"},
{s:"foksy-lazurit-leather",n:"FOKSY Lazurit Leather",r:"FK-01.L",c:"Selection",m:"Steel",mv:"Quartz",p:120,d:null,rs:null,w:"50 m",t:"Deep blue, hand-finished texture.",x:"A lapis-blue textured dial with applied indices and a date window, on a blue embossed leather strap.",i:[I.fl,I.fs]},
{s:"foksy-lazurit-steel",n:"FOKSY Lazurit Steel",r:"FK-02.S",c:"Selection",m:"Steel",mv:"Quartz",p:130,d:null,rs:null,w:"50 m",t:"The same blue, in steel.",x:"A lapis-blue textured dial with applied indices and a date window, on a brushed stainless steel bracelet.",i:[I.fs,I.fl]},
{s:"tpofhs-azure-quartz",n:"TPOFHS Azure Quartz",r:"TP-03.Q",c:"Selection",m:"Steel",mv:"Quartz",p:60,d:null,rs:null,w:null,t:"Sunray blue, quietly dressed.",x:"A deep blue sunray dial with faceted indices and a date window on a stainless steel bracelet.",i:[I.tq]},
{s:"casio-mdv-diver",n:"Casio Diver",r:"CS-04.D",c:"Selection",m:"Steel / Resin",mv:"Quartz",p:70,d:44,rs:null,w:"200 m",t:"Built for the water.",x:"A black dial diver with a rotating bezel, luminous markers, a red seconds hand and a resin strap.",i:[I.cd]},
{s:"rolex-submariner-date-green",n:"Rolex Submariner",r:"RX-05.S",c:"Selection",m:"Steel",mv:"Automatic",p:9500,d:41,rs:null,w:"300 m",t:"The reference diver.",x:"Black ceramic bezel, black dial with luminous markers and an Oyster steel bracelet.",i:[I.rg,I.r41]},
{s:"rolex-submariner-41",n:"Rolex Submariner 41",r:"RX-06.S",c:"Selection",m:"Steel",mv:"Automatic",p:9800,d:41,rs:null,w:"300 m",t:"Black, precise, waterproof.",x:"The 41 mm Submariner in Oystersteel with a black Cerachrom bezel.",i:[I.r41,I.rg]},
{s:"rolex-gmt-master-ii",n:"Rolex GMT-Master II",r:"RX-07.G",c:"Selection",m:"Steel",mv:"Automatic",p:11000,d:40,rs:null,w:"100 m",t:"Two time zones, one glance.",x:"A black dial with a green GMT hand and a grey and black ceramic bezel on an Oyster steel bracelet.",i:[I.gmt]}
];
var CL=[["Meridian","Everyday precision",I.hero],["Eclipse","Chronographs of the night",I.cer],["Atelier","Haute horlogerie",I.sk]];
var $=function(i){return document.getElementById(i)},$$=function(q){return [].slice.call(document.querySelectorAll(q))};
var HT='<svg viewBox="0 0 24 24"><path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.5A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/></svg>';
var fav={},cart={};
try{fav=JSON.parse(localStorage.getItem("ae_f")||"{}");cart=JSON.parse(localStorage.getItem("ae_c")||"{}")}catch(e){}
function save(){try{localStorage.setItem("ae_f",JSON.stringify(fav));localStorage.setItem("ae_c",JSON.stringify(cart))}catch(e){}}
function $p(n){return "$"+n.toLocaleString("en-US")}
function get(s){return P.filter(function(p){return p.s===s})[0]}
var tt;function toast(s){var t=$("t");t.textContent=tr(s);t.className="toast on";clearTimeout(tt);tt=setTimeout(function(){t.className="toast"},2400)}
function badges(){var f=Object.keys(fav).filter(function(k){return fav[k]}).length,c=Object.keys(cart).reduce(function(a,k){return a+cart[k]},0);
 var ub=$("ub");if(ub)ub.className="bd dot"+(user()?" on":"");
 [["wb",f],["cb",c]].forEach(function(x){var b=$(x[0]);b.textContent=x[1];b.className="bd"+(x[1]?" on":"")})}
function card(p,i){var im2=p.i[1]?'<img class="i2" src="'+p.i[1]+'" alt="" loading="lazy">':'';return '<a class="pc"><div class="pi"><img class="i1" src="'+p.i[0]+'" alt="'+p.n+'" loading="lazy">'+im2+'<span class="chip">'+p.r+'</span>'+(p.l?'<span class="chip lim">Limited '+p.l+'</span>':'')+'<button class="hb'+(fav[p.s]?" on":"")+'" data-f="'+p.s+'" aria-label="Wishlist">'+HT+'</button><div class="qa"><button class="qb" data-b="'+p.s+'">+ Add to bag</button><span class="dc">Discover →</span></div></div><div class="pm"><div class="pt"><span class="eb">'+p.c+' · '+p.m+'</span><span class="mvt">'+p.mv+'</span></div><h3>'+p.n+'</h3><div class="pf"><span class="pr">'+$p(p.p)+'</span><span class="sm">'+(p.w?p.w+' · ':'')+(p.d?p.d+' mm':'')+'</span></div></div></a>'}
function home(){
 var cl=CL.map(function(c){return '<a class="ct" href="#collection-'+c[0].toLowerCase()+'"><img src="'+c[2]+'" alt="'+c[0]+'" loading="lazy"><div><span class="eb eg">'+(CL.indexOf(c)+1<10?"0":"")+(CL.indexOf(c)+1)+'</span><h3>'+c[0]+'</h3><span class="eb">'+c[1]+'</span></div></a>'}).join("");
 var ticks="";for(var k=0;k<60;k++)ticks+='<i class="'+(k%5?"":"m")+'" style="transform:rotate('+k*6+'deg)"></i>';
 return '<section class="hero"><div class="ring" aria-hidden="true">'+ticks+'</div><div class="glow"></div><div class="big sg" aria-hidden="true">Æther</div>'+
 '<div class="wrap hg"><div><div class="eb">Calibre AE-01 · N° 001</div><h2>Time, <span class="gg">sculpted</span> from darkness.</h2><a class="circ" href="#watch-meridian-noir"><i>→</i><span class="eb" style="color:var(--fg)">Meridian Noir</span></a></div>'+
 '<div class="wimg" id="wi"><img id="hw" src="'+I.hero+'" alt="Meridian Noir"></div>'+
 '<div class="spec"><div><span class="eb">Case</span><b>Grade 5 titanium</b></div><div><span class="eb">Diameter</span><b>40 mm</b></div><div><span class="eb">Reserve</span><b>72 hours</b></div><div><span class="eb">From</span><b>$14,800</b></div></div></div><div class="scr eb">Scroll</div></section>'+
 '<section><div class="wrap"><div class="sh"><h2>Three <em class="it">worlds</em></h2><p>Meridian for the everyday, Eclipse for the night, Atelier for the connoisseur.</p></div><div class="cg">'+cl+'</div></div></section>'+
 '<section style="padding-top:0"><div class="wrap"><div class="sh"><h2>Featured <em class="it">pieces</em></h2><p>Each reference is produced in limited series and finished by a single watchmaker, start to end.</p></div></div><div class="hs" id="hs" tabindex="0" aria-label="Featured pieces, scroll sideways"><div class="ht">'+P.map(card).join("")+'</div></div><div class="wrap hc"><div class="hp"><i id="hpb"></i></div><button class="hn" id="hprev" aria-label="Previous">←</button><button class="hn" id="hnext" aria-label="Next">→</button></div></section>'+
 '<section class="split"><img src="'+I.sk+'" alt="Atelier Tourbillon" loading="lazy"><div class="sp"><div class="eb">Atelier · Limited 1 of 25</div><h2>The movement, <em class="it">laid bare.</em></h2><div class="st"><div><b>412</b><span class="eb">Components</span></div><div><b>110h</b><span class="eb">Reserve</span></div><div><b>60s</b><span class="eb">Revolution</span></div></div><a class="btn" href="#watch-atelier-tourbillon">Explore the tourbillon</a></div></section>'+
 '<section class="story"><img src="'+I.at+'" alt="Watchmaker at work" loading="lazy"><div class="wrap"><div class="eb">Since 1926</div><h2>A century in <span class="it">the hand.</span></h2><a class="eb eg" href="#story">Read the story →</a></div></section>'}
function coll(f){
 var L=P.filter(function(p){return !f||p.c.toLowerCase()===f});
 return '<div class="wrap"><div class="ph"><div class="eb eg">The Collection</div><h1>'+(f?f.charAt(0).toUpperCase()+f.slice(1):'All <em class="it">references</em>')+'</h1><p>'+L.length+(f==="selection"?' pieces from other makers, curated by AETHERNE.':' pieces, each numbered and finished by hand in Geneva.')+'</p></div>'+
 '<div class="fl eb">'+["all","meridian","eclipse","atelier","selection"].map(function(c){return '<button data-c="'+c+'" class="'+((f||"all")===c?"on":"")+'">'+c+'</button>'}).join("")+'</div><div class="pg" style="padding-bottom:120px">'+L.map(card).join("")+'</div></div>'}
function watch(s,k){
 var p=get(s);if(!p)return nf();k=k||0;
 return '<div class="wrap"><div class="pd"><div><div class="gm"><img id="gi" src="'+p.i[k]+'" alt="'+p.n+'"></div><div class="th">'+p.i.map(function(u,j){return '<button data-t="'+j+'" class="'+(j===k?"on":"")+'" aria-label="View '+(j+1)+'"><img src="'+u+'" alt=""></button>'}).join("")+'</div></div>'+
 '<div class="pdi"><div class="eb eg">'+p.c+' · '+p.r+(p.l?' · Limited '+p.l:'')+'</div><h1>'+p.n+'</h1><p class="tg">'+p.t+'</p><p class="ds">'+p.x+'</p>'+
 '<div class="sg2"><div><span class="eb">Case</span><b>'+p.m+'</b></div><div><span class="eb">Diameter</span><b>'+(p.d?p.d+' mm':'—')+'</b></div><div><span class="eb">Movement</span><b>'+p.mv+'</b></div><div><span class="eb">Reserve</span><b>'+(p.rs||'—')+'</b></div><div><span class="eb">Water resistance</span><b>'+(p.w||'—')+'</b></div><div><span class="eb">Reference</span><b>'+p.r+'</b></div></div>'+
 '<div class="pp">'+$p(p.p)+'</div><div class="ar"><button class="btn f" data-b="'+p.s+'">Add to bag</button><button class="btn" data-f="'+p.s+'">'+(fav[p.s]?"Saved":"Wishlist")+'</button></div></div></div></div>'}
function rows(list,wish){
 if(!list.length)return '<div class="em">'+(wish?"Your wishlist is empty.":"Your bag is empty.")+' <a class="eg" href="#collection">Browse the collection →</a></div>';
 return list.map(function(p){return '<div class="row"><a href="#watch-'+p.s+'"><img src="'+p.i[0]+'" alt=""></a><div><h3>'+p.n+'</h3><span class="eb">'+p.r+' · '+p.m+'</span></div>'+
 (wish?'<span style="font-family:var(--serif);font-size:24px">'+$p(p.p)+'</span><div><button class="btn" data-b="'+p.s+'" style="padding:16px 24px">Add to bag</button> <button class="eb" data-f="'+p.s+'">Remove</button></div>':
 '<div class="qt"><button data-q="'+p.s+'|-1" aria-label="Less">−</button>'+cart[p.s]+'<button data-q="'+p.s+'|1" aria-label="More">+</button></div><span style="font-family:var(--serif);font-size:24px">'+$p(p.p*cart[p.s])+'</span>')+'</div>'}).join("")}
function bag(){
 var L=P.filter(function(p){return cart[p.s]>0}),t=L.reduce(function(a,p){return a+p.p*cart[p.s]},0),n=L.reduce(function(a,p){return a+cart[p.s]},0),u=user();
 var head='<div class="ph"><div class="eb eg">Your selection</div><h1>The <em class="it">bag</em></h1></div>';
 if(!L.length)return '<div class="wrap">'+head+rows(L)+'<div style="height:120px"></div></div>';
 var items=L.map(function(p){var q=cart[p.s];return '<article class="bi"><a class="bimg" href="#watch-'+p.s+'"><img src="'+p.i[0]+'" alt="'+p.n+'"></a><div class="bin"><span class="eb">'+p.c+' · '+p.m+'</span><h3><a href="#watch-'+p.s+'">'+p.n+'</a></h3><span class="bref">'+p.r+' · '+p.mv+'</span><div class="bctl"><div class="qt2"><button data-q="'+p.s+'|-1" aria-label="Less">−</button><b>'+q+'</b><button data-q="'+p.s+'|1" aria-label="More">+</button></div><button class="brm" data-q="'+p.s+'|-999">Remove</button></div></div><div class="bpr"><span>'+$p(p.p*q)+'</span>'+(q>1?'<small>'+$p(p.p)+' each</small>':'')+'</div></article>'}).join("");
 var sum='<aside class="sum"><span class="eb eg">Order summary</span><div class="sl"><span>Subtotal · '+n+' item'+(n>1?'s':'')+'</span><span>'+$p(t)+'</span></div><div class="sl"><span>Insured delivery</span><span class="eg">Complimentary</span></div><div class="sl tt"><span>Total</span><span>'+$p(t)+'</span></div><button class="btn f fsub" data-o="1"><span>'+(u?"Request purchase":"Sign in to order")+'</span><i>→</i></button>'+(u?'<p class="gn">Signed in as '+esc(u.name)+'.</p>':'<p class="gn">An account is required to place an order. <a class="eg" href="#account-register">Create one in a minute →</a></p>')+'<ul class="tr"><li>A concierge confirms your request within one working day</li><li>Each piece is numbered and finished by hand</li></ul></aside>';
 return '<div class="wrap">'+head+'<div class="cartx"><div class="bl">'+items+'<a class="back eb" href="#collection">← Continue browsing</a></div>'+sum+'</div><div style="height:120px"></div></div>'}
function wish(){var L=P.filter(function(p){return fav[p.s]});return '<div class="wrap"><div class="ph"><div class="eb eg">Saved</div><h1>Your <em class="it">wishlist</em></h1></div>'+rows(L,1)+'<div style="height:120px"></div></div>'}
function story(){return '<section class="story" style="min-height:min(48svh,420px)"><img src="'+I.at+'" alt="" ><div class="wrap"><div class="eb">Since 1926</div><h2>A century in <span class="it">the hand.</span></h2></div></section><section class="tx"><div class="wrap"><p>In 1926, a single bench on the Quai du Mont-Blanc. Today, still one watchmaker per watch, from first bridge to final polish.</p><p>We make fewer than four hundred timepieces a year. Each carries the signature of the hands that finished it.</p><div class="st" style="max-width:720px"><div><b>1926</b><span class="eb">Founded</span></div><div><b>412</b><span class="eb">Components</span></div><div><b>1:1</b><span class="eb">Watchmaker per watch</span></div></div><a class="btn" href="#collection">Discover the collection</a></div></section>'}
function contact(){return '<div class="wrap"><div class="ph"><div class="eb eg">Boutiques</div><h1>Visit the <em class="it">atelier</em></h1></div><div class="cgd"><div>'+
 [["Atelier","Quai du Mont-Blanc 7, 1201 Genève"],["Telephone","+41 22 000 18 94"],["Email","concierge@aetherne.ch"],["Hours","Mon–Sat · 10:00–19:00 CET"]].map(function(r){return '<div class="ci"><span class="eb eg">'+r[0]+'</span><p>'+r[1]+'</p></div>'}).join("")+'<div class="ci"><span class="eb eg">Instagram</span><p><a class="ig" href="https://www.instagram.com/xoji.dev/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg><span>@xoji.dev</span></a></p></div></div>'+
 '<form id="f" class="fc" novalidate><div class="fh"><span class="eb eg">Concierge</span><h2>Write to <em class="it">us</em></h2><p>We reply within one working day.</p></div><label class="fld"><span class="eb">Name</span><input id="n" autocomplete="name" placeholder="Your full name"><div class="er" id="en"></div></label><label class="fld"><span class="eb">Email</span><input id="e" type="email" autocomplete="email" placeholder="name@example.com"><div class="er" id="ee"></div></label><div class="fld"><span class="eb">Subject</span><div class="cs" id="cs"><select id="s" tabindex="-1" aria-hidden="true"><option value="Book a boutique appointment">Book a boutique appointment</option><option value="Enquire about a piece">Enquire about a piece</option><option value="Servicing and repairs">Servicing and repairs</option></select><button type="button" class="csb" aria-haspopup="listbox" aria-expanded="false"><span>Book a boutique appointment</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><ul class="cso" role="listbox"><li role="option" data-v="Book a boutique appointment" aria-selected="true" class="on">Book a boutique appointment</li><li role="option" data-v="Enquire about a piece">Enquire about a piece</li><li role="option" data-v="Servicing and repairs">Servicing and repairs</li></ul></div></div><label class="fld"><span class="eb">Message</span><textarea id="m" placeholder="Tell us which piece or service you have in mind…"></textarea></label><button class="btn f fsub" type="submit"><span>Send request</span><i>→</i></button><div class="ok" id="ok" role="status"></div></form></div></div>'}
function nf(){return '<div class="wrap"><div class="em">This page could not be found. <a class="eg" href="#home">Return home →</a></div></div>'}

function initHS(){
 var s=$("hs");if(!s)return;
 var pb=$("hpb"),pv=$("hprev"),nx=$("hnext"),drag=0,sx=0,sl=0,moved=0;
 function upd(){var m=s.scrollWidth-s.clientWidth;pb.style.width=Math.max(8,Math.min(100,(s.scrollLeft+s.clientWidth)/s.scrollWidth*100))+"%";pv.disabled=s.scrollLeft<4;nx.disabled=s.scrollLeft>m-4}
 function step(d){var c=s.querySelector(".pc");s.scrollBy({left:d*(c.offsetWidth+(parseFloat(getComputedStyle(s.firstChild).columnGap)||22)),behavior:"smooth"})}
 pv.onclick=function(){step(-1)};nx.onclick=function(){step(1)};
 s.addEventListener("scroll",upd,{passive:true});window.addEventListener("resize",upd);
 s.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();step(1)}if(e.key==="ArrowLeft"){e.preventDefault();step(-1)}});
 s.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse"||e.button)return;drag=1;moved=0;sx=e.clientX;sl=s.scrollLeft});
 window.addEventListener("pointermove",function(e){if(!drag)return;var d=e.clientX-sx;if(Math.abs(d)>6){moved=1;s.classList.add("dg")}if(moved)s.scrollLeft=sl-d});
 window.addEventListener("pointerup",function(){if(!drag)return;drag=0;s.classList.remove("dg")});
 s.addEventListener("click",function(e){if(moved){e.preventDefault();e.stopPropagation();moved=0}},true);
 s.addEventListener("dragstart",function(e){e.preventDefault()});
 upd();
}
var tick;
function route(){
 var h=location.hash.slice(1)||"home",v;
 if(h==="home")v=home();else if(h==="collection")v=coll();else if(h.indexOf("collection-")===0)v=coll(h.slice(11));
 else if(h.indexOf("watch-")===0)v=watch(h.slice(6));else if(h==="story")v=story();else if(h==="contact")v=contact();else if(h==="cart")v=bag();else if(h==="wishlist")v=wish();else if(h==="account")v=account();else if(h==="account-register")v=account("register");else v=nf();
 setApp(v);window.scrollTo(0,0);initHS();document.title=(h.indexOf("watch-")===0&&get(h.slice(6))?get(h.slice(6)).n+" — ":"")+"AETHERNE Genève";
 $$("#nv a").forEach(function(a){a.className=a.getAttribute("href")==="#"+h.split("-")[0]?"on":""});
 badges();
}
document.addEventListener("click",function(e){
 var t=e.target,f=t.closest("[data-f]"),b=t.closest("[data-b]"),q=t.closest("[data-q]"),c=t.closest("[data-c]"),th=t.closest("[data-t]"),o=t.closest("[data-o]");
 if(f){e.preventDefault();var s=f.dataset.f;fav[s]=!fav[s];save();toast(fav[s]?"Saved to wishlist":"Removed from wishlist");rerender()}
 else if(b){e.preventDefault();cart[b.dataset.b]=(cart[b.dataset.b]||0)+1;save();toast(get(b.dataset.b).n+" added to bag");rerender()}
 else if(q){var a=q.dataset.q.split("|");cart[a[0]]=Math.max(0,(cart[a[0]]||0)+ +a[1]);save();rerender()}
 else if(c){location.hash=c.dataset.c==="all"?"collection":"collection-"+c.dataset.c}
 else if(th){var h=location.hash.slice(7),p=get(h);setApp(watch(h,+th.dataset.t))}
 else if(o){e.preventDefault();placeOrder()}
});
function rerender(){var y=window.scrollY;var h=location.hash.slice(1);if(h.indexOf("watch-")===0){var cur=$$(".th button.on")[0];var k=cur?+cur.dataset.t:0;setApp(watch(h.slice(6),k))}else{var hs=$("hs"),hl=hs?hs.scrollLeft:0;route();hs=$("hs");if(hs){hs.scrollLeft=hl}}window.scrollTo(0,y);badges()}
function ok(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
document.addEventListener("submit",function(e){
 if(e.target.id==="f"){e.preventDefault();var g=true;$("en").textContent=tr($("n").value.trim()?"":(g=false,"Enter your name."));$("ee").textContent=tr(ok($("e").value.trim())?"":(g=false,"Enter a valid email address."));
  if(g){var o=$("ok");o.style.display="block";o.textContent=tr("Thank you, "+$("n").value.trim()+". Our concierge will reply within one working day.");e.target.reset()}}
 if(e.target.id==="nl"){e.preventDefault();var i=$("ne");if(ok(i.value.trim())){toast("Welcome. Private previews will reach you soon.");i.value=""}else toast("Enter a valid email address.")}
});
var so=$("so"),si=$("si"),lastF=null;
function openS(){lastF=document.activeElement;so.hidden=false;document.body.style.overflow="hidden";requestAnimationFrame(function(){so.classList.add("on");si.focus()});srch()}
function closeS(){so.classList.remove("on");document.body.style.overflow="";setTimeout(function(){so.hidden=true},300);if(lastF&&lastF.focus)lastF.focus()}
function srch(){
 var q=si.value.trim().toLowerCase(),r=$("sres");$("sq").style.display=q?"none":"flex";
 if(!q){r.innerHTML="";return}
 var L=P.filter(function(p){var f=[p.n,p.r,p.c,p.m,p.mv,p.t,p.x];return f.concat(f.map(tr)).join(" ").toLowerCase().indexOf(q)>-1});
 r.innerHTML=L.length?L.map(function(p){return '<a class="sr-r" href="#watch-'+p.s+'"><img src="'+p.i[0]+'" alt=""><div><h3>'+p.n+'</h3><span class="eb">'+p.c+' · '+p.m+' · '+p.r+'</span></div><span class="p">'+$p(p.p)+'</span></a>'}).join(""):'<p class="sn">No pieces match “'+q.replace(/[<>&"]/g,"")+'”. Try “tourbillon”, “ceramic” or “gold”.</p>';walk(r)}
$("sr").onclick=openS;$("sx").onclick=closeS;si.addEventListener("input",srch);
$("sq").addEventListener("click",function(e){var b=e.target.closest("button");if(b){si.value=b.textContent;srch();si.focus()}});
so.addEventListener("click",function(e){if(e.target===so)closeS();if(e.target.closest(".sr-r"))closeS()});
si.addEventListener("keydown",function(e){if(e.key==="Enter"){var a=document.querySelector(".sr-r");if(a){location.hash=a.getAttribute("href").slice(1);closeS()}}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!so.hidden)closeS()});
document.addEventListener("mousemove",function(e){var w=$("hw");if(w&&!matchMedia("(prefers-reduced-motion:reduce)").matches)w.style.transform="rotateY("+((e.clientX/innerWidth-.5)*18)+"deg) rotateX("+(-(e.clientY/innerHeight-.5)*12)+"deg)"});

/* ===== Accounts (demo: stored in this browser's localStorage) ===== */
function lsGet(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v||d}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
var users=lsGet("ae_users",{}),me=lsGet("ae_me",null),orders=lsGet("ae_orders",[]),after=null;
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function user(){return me&&users[me]?users[me]:null}
function go(h){if(location.hash==="#"+h)route();else location.hash=h}
function hp(pw,salt){var s=salt+":"+pw;
 if(window.crypto&&crypto.subtle&&window.TextEncoder){return crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)).then(function(b){return [].map.call(new Uint8Array(b),function(x){return("0"+x.toString(16)).slice(-2)}).join("")})}
 var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return Promise.resolve("f"+h)}
var EYE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
function pwf(id,label,ac,ph){return '<label class="fld"><span class="eb">'+label+'</span><div class="pw"><input id="'+id+'" type="password" autocomplete="'+ac+'" placeholder="'+ph+'"><button type="button" class="pwb" data-pw="'+id+'" aria-label="Show password">'+EYE+'</button></div><div class="er" id="e-'+id+'"></div></label>'}
function fld(id,label,type,ac,ph){return '<label class="fld"><span class="eb">'+label+'</span><input id="'+id+'" type="'+type+'" autocomplete="'+ac+'" placeholder="'+ph+'"><div class="er" id="e-'+id+'"></div></label>'}
function account(mode){
 var u=user();
 if(u){
  var my=orders.filter(function(o){return o.u===u.email});
  var ol=my.length?my.map(function(o){return '<div class="ord"><div><b>'+esc(o.id)+'</b><span class="eb">'+new Date(o.d).toLocaleDateString(LOC(),{day:"numeric",month:"short",year:"numeric"})+' · '+o.items.reduce(function(a,x){return a+x.q},0)+' item(s)</span><p>'+o.items.map(function(x){return esc(x.n)+(x.q>1?' ×'+x.q:'')}).join(", ")+'</p></div><div class="ot"><span>'+$p(o.t)+'</span><span class="eb eg">Received</span></div></div>'}).join(""):'<div class="em" style="padding:36px 0">No purchase requests yet. <a class="eg" href="#collection">Browse the collection →</a></div>';
  return '<div class="wrap"><div class="ph"><div class="eb eg">Your account</div><h1>Welcome, <em class="it">'+esc(u.name.split(" ")[0])+'</em></h1></div><div class="cgd"><div class="fc acc"><span class="eb eg">Profile</span><div class="pr2"><div class="av">'+esc(u.name.charAt(0).toUpperCase())+'</div><div><h3>'+esc(u.name)+'</h3><p>'+esc(u.email)+'</p>'+(u.phone?'<p>'+esc(u.phone)+'</p>':'')+'</div></div><button class="btn so2" data-lo="1">Sign out</button></div><div class="fc"><div class="fh"><span class="eb eg">Purchase requests</span><h2>Your <em class="it">orders</em></h2></div><div class="ords">'+ol+'</div></div></div></div>'}
 var reg=mode==="register";
 var tabs='<div class="at"><a href="#account" class="'+(reg?"":"on")+'">Sign in</a><a href="#account-register" class="'+(reg?"on":"")+'">Create account</a></div>';
 var form=reg?
  '<form id="rf" class="fc" novalidate>'+tabs+'<div class="fh"><h2>Create your <em class="it">account</em></h2><p>Required to place a purchase request.</p></div>'+fld("rn","Full name","text","name","Your full name")+'<div class="f2">'+fld("re","Email","email","email","name@example.com")+fld("rp","Phone (optional)","tel","tel","+998 90 000 00 00")+'</div><div class="f2">'+pwf("rw","Password","new-password","Min. 6 characters")+pwf("rc","Confirm","new-password","Repeat password")+'</div>'+'<button class="btn f fsub" type="submit"><span>Create account</span><i>→</i></button><div class="er" id="e-rf" style="text-align:center"></div></form>':
  '<form id="lf" class="fc" novalidate>'+tabs+'<div class="fh"><h2>Welcome <em class="it">back</em></h2><p>Sign in to place and track your requests.</p></div>'+fld("le","Email","email","email","name@example.com")+pwf("lw","Password","current-password","Your password")+'<button class="btn f fsub" type="submit"><span>Sign in</span><i>→</i></button><div class="er" id="e-lf" style="text-align:center"></div></form>';
 return '<div class="wrap"><div class="ph"><div class="eb eg">Account</div><h1>'+(reg?'Join the <em class="it">Maison</em>':'Sign <em class="it">in</em>')+'</h1></div><div class="cgd auth"><div class="ab"><div class="ci"><span class="eb eg">01</span><p>Place purchase requests</p></div><div class="ci"><span class="eb eg">02</span><p>Follow every order in one place</p></div><div class="ci"><span class="eb eg">03</span><p>Priority access to our concierge</p></div></div>'+form+'</div></div>'}
function fe(id,msg){var e=$("e-"+id);if(e)e.textContent=tr(msg||"");return !msg}
function authDone(){var n=after;after=null;if(n==="cart")go("cart");else go("account")}
document.addEventListener("submit",function(e){
 var id=e.target.id;
 if(id==="rf"){e.preventDefault();
  var n=$("rn").value.trim(),m=$("re").value.trim().toLowerCase(),ph=$("rp").value.trim(),p=$("rw").value,c=$("rc").value,g=true;
  g=fe("rn",n?"":"Enter your name.")&&g;g=fe("re",ok(m)?"":"Enter a valid email address.")&&g;
  g=fe("rw",p.length>=6?"":"Password must be at least 6 characters.")&&g;g=fe("rc",p===c?"":"Passwords do not match.")&&g;
  if(g&&users[m]){g=fe("re","An account with this email already exists.")}
  if(!g)return;
  var salt=Math.random().toString(36).slice(2);
  hp(p,salt).then(function(h){users[m]={name:n,email:m,phone:ph,salt:salt,h:h};me=m;lsSet("ae_users",users);lsSet("ae_me",me);badges();toast("Welcome to AETHERNE, "+n.split(" ")[0]+".");authDone()})}
 if(id==="lf"){e.preventDefault();
  var m2=$("le").value.trim().toLowerCase(),p2=$("lw").value,g2=true;
  g2=fe("le",ok(m2)?"":"Enter a valid email address.")&&g2;g2=fe("lw",p2?"":"Enter your password.")&&g2;fe("lf","");
  if(!g2)return;var u=users[m2];
  if(!u){fe("lf","Incorrect email or password.");return}
  hp(p2,u.salt).then(function(h){if(h!==u.h){fe("lf","Incorrect email or password.");return}me=m2;lsSet("ae_me",me);badges();toast("Signed in. Welcome back, "+u.name.split(" ")[0]+".");authDone()})}
});
document.addEventListener("click",function(e){
 var pw=e.target.closest("[data-pw]"),lo=e.target.closest("[data-lo]");
 if(pw){var i=$(pw.dataset.pw);i.type=i.type==="password"?"text":"password";pw.classList.toggle("on",i.type==="text");pw.setAttribute("aria-label",tr(i.type==="text"?"Hide password":"Show password"))}
 if(lo){me=null;lsSet("ae_me",null);badges();toast("Signed out.");go("home")}
});
function placeOrder(){
 if(!user()){after="cart";toast("Please sign in or create an account to place your order.");go("account");return}
 var L=P.filter(function(p){return cart[p.s]>0});if(!L.length)return;
 var t=L.reduce(function(a,p){return a+p.p*cart[p.s]},0);
 orders.unshift({id:"AE-"+Date.now().toString().slice(-6),u:me,d:new Date().toISOString(),t:t,items:L.map(function(p){return{n:p.n,q:cart[p.s],p:p.p}})});
 lsSet("ae_orders",orders);cart={};save();badges();toast("Request received. A concierge will contact you within one working day.");go("account")}
window.addEventListener("hashchange",route);route();

/* custom select */
(function(){
 function sync(cs){var s=cs.querySelector("select"),b=cs.querySelector(".csb span");b.textContent=tr(s.value);cs.querySelectorAll("li").forEach(function(li){var on=li.dataset.v===s.value;li.className=on?"on":"";li.setAttribute("aria-selected",on)})}
 function shut(cs){cs.classList.remove("open");cs.querySelector(".csb").setAttribute("aria-expanded","false")}
 function open(cs){cs.classList.add("open");cs.querySelector(".csb").setAttribute("aria-expanded","true")}
 function pick(cs,v){cs.querySelector("select").value=v;sync(cs)}
 document.addEventListener("click",function(e){
  var b=e.target.closest(".csb"),li=e.target.closest(".cso li");
  document.querySelectorAll(".cs.open").forEach(function(c){if(!b||c!==b.parentNode)shut(c)});
  if(b){var cs=b.parentNode;cs.classList.contains("open")?shut(cs):open(cs)}
  else if(li){var c=li.closest(".cs");pick(c,li.dataset.v);shut(c);c.querySelector(".csb").focus()}
 });
 document.addEventListener("keydown",function(e){
  var cs=e.target.closest&&e.target.closest(".cs");if(!cs)return;
  var s=cs.querySelector("select"),i=s.selectedIndex;
  if(e.key==="Escape"){shut(cs)}
  else if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();open(cs);i=Math.max(0,Math.min(s.options.length-1,i+(e.key==="ArrowDown"?1:-1)));s.selectedIndex=i;sync(cs)}
 });
 document.addEventListener("reset",function(e){setTimeout(function(){e.target.querySelectorAll(".cs").forEach(sync)},0)});
})();
document.addEventListener("input",function(e){var t=e.target;if(t.closest&&t.closest("#rf,#lf")){var er=$("e-"+t.id);if(er)er.textContent="";var f=$("e-lf");if(f)f.textContent=""}});

/* ===== mobile menu ===== */
(function(){
 var b=$("mb"),m=$("mm");if(!b||!m)return;
 function mark(){var h=location.hash.slice(1).split("-")[0]||"home";$$("#mn a").forEach(function(a){a.className=a.getAttribute("href")==="#"+h?"on":""})}
 function set(o){
  b.classList.toggle("on",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",tr(o?"Close menu":"Menu"));
  if(o){m.hidden=false;document.body.style.overflow="hidden";mark();void m.offsetWidth;m.classList.add("on")}
  else{m.classList.remove("on");document.body.style.overflow="";setTimeout(function(){if(!m.classList.contains("on"))m.hidden=true},380)}
 }
 b.addEventListener("click",function(){set(!m.classList.contains("on"))});
 m.addEventListener("click",function(e){if(e.target.closest("a")||e.target===m)set(false)});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("on"))set(false)});
 window.addEventListener("hashchange",function(){if(m.classList.contains("on"))set(false)});
 window.addEventListener("resize",function(){if(innerWidth>1000&&m.classList.contains("on"))set(false)});
})();
