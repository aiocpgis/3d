const navItems=[
 ['index.html','الرئيسية'],['scroll.html','Scroll'],['three-d.html','3D'],['hover.html','Hover'],['buttons.html','Buttons'],['cards.html','Cards'],['text.html','Text'],['loaders.html','Loaders'],['backgrounds.html','Backgrounds'],['images.html','Images'],['navigation.html','Navigation']
];
const PAGES={
 scroll:{icon:'🌀',title:'مكتبة Scroll Animations',desc:'تأثيرات ظهور وحركة تعتمد على التمرير وتناسب صفحات الهبوط والمواقع التعريفية.',effects:[
  ['Reveal Up','ظهور ناعم من الأسفل عند دخول العنصر للشاشة','<div class="sample-card demo-reveal-up"><div class="mini-title">Reveal Up</div><div class="mini-muted">يدخل بنعومة من الأسفل</div></div>'],
  ['Reveal Side','ظهور من الجانب مع إحساس سرعة خفيف','<div class="sample-card" style="transform:translateX(-10px)"><div class="mini-title">Side Reveal</div><div class="mini-muted">مناسب للأقسام النصية</div></div>'],
  ['Parallax Card','كرت يتحرك وكأنه بطبقة مختلفة عن الخلفية','<div class="sample-card" style="transform:rotate(-2deg) translateY(-8px)"><div class="mini-title">Parallax</div><div class="mini-muted">عمق بصري أثناء التمرير</div></div>'],
  ['Stagger Items','عناصر تظهر واحدًا بعد الآخر','<div class="loader-dots"><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span></div>'],
  ['Progress Line','خط يوضح تقدم المستخدم في الصفحة','<div style="width:85%;height:12px;border-radius:999px;background:#0f172a;overflow:hidden"><span style="display:block;width:70%;height:100%;background:linear-gradient(90deg,#38bdf8,#8b5cf6)"></span></div>'],
  ['Sticky Section','قسم يبقى ظاهرًا أثناء استعراض المحتوى','<div class="sample-card"><div class="mini-title">Sticky</div><div class="mini-muted">ثابت داخل منطقة محددة</div></div>'],
  ['Zoom In','تكبير ناعم عند دخول العنصر','<div class="sample-card" style="transform:scale(1.04)"><div class="mini-title">Zoom In</div><div class="mini-muted">حركة بسيطة وواضحة</div></div>'],
  ['Fade Sequence','تتابع Fade للأقسام الطويلة','<div class="sample-card" style="opacity:.92"><div class="mini-title">Fade Sequence</div><div class="mini-muted">ممتاز للمقالات والمعارض</div></div>']
 ]},
 threeD:{icon:'🧊',title:'مكتبة 3D Animations',desc:'نماذج ثلاثية الأبعاد خفيفة مبنية بـ CSS فقط، بدون Three.js أو مكتبات خارجية.',effects:[
  ['Rotating Cube','مكعب 3D يدور باستمرار','<div class="cube3d"><span></span><span></span><span></span><span></span><span></span><span></span></div>'],
  ['3D Flip','قلب بطاقة ثلاثية الأبعاد عند المرور','<div class="flip3d"><div>Flip 3D</div></div>'],
  ['Orbit System','مدارات ونقاط متحركة حول مركز','<div class="orbit3d"></div>'],
  ['Phone Mockup','مجسم هاتف مائل لعرض تطبيق','<div class="phone3d"></div>'],
  ['Book Cover','غلاف كتاب أو ملف بتأثير منظور','<div class="book3d"></div>'],
  ['Layer Stack','طبقات مرفوعة بمحور Z','<div class="layer3d"><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span></div>'],
  ['Tilt Card','كرت يستجيب لحركة الماوس','<div class="sample-card tilt"><div class="mini-title">Tilt</div><div class="mini-muted">حرك الماوس فوقه</div></div>'],
  ['Perspective Panel','لوحة مائلة بعمق واضح','<div class="sample-card" style="transform:perspective(700px) rotateY(-18deg) rotateX(8deg)"><div class="mini-title">Perspective</div></div>']
 ]},
 hover:{icon:'✨',title:'مكتبة Hover Effects',desc:'تأثيرات المرور على العناصر والكروت والروابط لتحسين الإحساس التفاعلي.',effects:[
  ['Lift Hover','ارتفاع الكرت للأعلى مع ظل','<div class="sample-card hover-lift"><div class="mini-title">Hover Me</div></div>'],
  ['Glow Hover','إضاءة حول العنصر','<div class="sample-card hover-glow"><div class="mini-title">Glow</div></div>'],
  ['Underline Link','خط سفلي متحرك للروابط','<div class="sample-card hover-underline"><div class="mini-title">Animated Link</div></div>'],
  ['Border Aura','حد متوهج حول الكرت','<div class="sample-card hover-border"><div class="mini-title">Aura Border</div></div>'],
  ['Split Fill','امتلاء ثنائي اللون','<div class="sample-card hover-split"><div class="mini-title">Split Fill</div></div>'],
  ['Blur Glass','تغبيش زجاجي عند المرور','<div class="sample-card hover-blur"><div class="mini-title">Blur</div></div>'],
  ['Scale Hover','تكبير بسيط وواضح','<div class="sample-card" style="transition:.25s" onmouseover="this.style.transform=\'scale(1.08)\'" onmouseout="this.style.transform=\'scale(1)\'"><div class="mini-title">Scale</div></div>'],
  ['Rotate Hover','دوران خفيف عند المرور','<div class="sample-card" style="transform:rotate(-3deg)"><div class="mini-title">Rotate</div></div>']
 ]},
 buttons:{icon:'🔘',title:'مكتبة Button Effects',desc:'أزرار جاهزة بتأثيرات إضاءة ولمعان ونبض وضغط.',effects:[
  ['Glow Button','زر متوهج مناسب للـ CTA','<button class="fx-btn btn-glow">ابدأ الآن</button>'],
  ['Shine Button','لمعة تمر فوق الزر','<button class="fx-btn btn-shine">لمعة متحركة</button>'],
  ['Border Run','حد متحرك حول الزر','<button class="fx-btn btn-border-run">حد متحرك</button>'],
  ['Pulse Button','نبض مستمر لجذب الانتباه','<button class="fx-btn btn-pulse">تنبيه مهم</button>'],
  ['Liquid Button','تأثير سائل داخل الزر','<button class="fx-btn btn-liquid">Liquid</button>'],
  ['Press Button','انضغاط عند الضغط','<button class="fx-btn btn-press">اضغطني</button>'],
  ['Ghost Button','زر شفاف أنيق','<button class="btn ghost">زر شفاف</button>'],
  ['Gradient Button','زر تدرج لوني قوي','<button class="btn primary">زر رئيسي</button>']
 ]},
 cards:{icon:'🃏',title:'مكتبة Card Effects',desc:'كروت عرض منتجات وخدمات ومعارض بستايلات زجاجية وثلاثية الأبعاد.',effects:[
  ['Glass Card','كرت زجاجي مع blur','<div class="sample-card glass-card"><div class="mini-title">Glass</div><div class="mini-muted">Backdrop blur</div></div>'],
  ['Flip Card','كرت ينقلب في 3D','<div class="flip-card"><div>Flip Card</div></div>'],
  ['Spotlight Card','إضاءة داخلية مركزة','<div class="sample-card spot-card"><div class="mini-title">Spotlight</div></div>'],
  ['Stack Card','كرت بطبقات خلفية','<div class="sample-card stack-card"><div class="mini-title">Stack</div></div>'],
  ['Tilt Card','كرت يتحرك حسب الماوس','<div class="sample-card tilt"><div class="mini-title">Interactive Tilt</div></div>'],
  ['Pricing Card','كرت تسعير واضح','<div class="sample-card"><div class="mini-title">Pro</div><div class="text-gradient">$19</div></div>'],
  ['Profile Card','كرت ملف شخصي','<div class="sample-card"><div class="orb" style="margin:auto;width:62px;height:62px"></div><div class="mini-title">Profile</div></div>'],
  ['Border Card','كرت بحد متدرج','<div class="sample-card hover-border"><div class="mini-title">Gradient Border</div></div>']
 ]},
 text:{icon:'🔤',title:'مكتبة Text Effects',desc:'تأثيرات نصوص للعناوين الرئيسية: تدرج، نيون، Glitch، وكتابة متحركة.',effects:[
  ['Gradient Text','نص بتدرج لوني','<div class="text-gradient">Gradient</div>'],
  ['Glitch Text','اهتزاز Glitch للنص','<div class="text-glitch">GLITCH</div>'],
  ['Typewriter','كتابة تدريجية','<div class="typewriter">AI Effects</div>'],
  ['Neon Text','نص مضيء مثل النيون','<div class="neon-text">NEON</div>'],
  ['Wave Text','حروف تتحرك كموجة','<div class="wave-text"><span style="--i:1">W</span><span style="--i:2">A</span><span style="--i:3">V</span><span style="--i:4">E</span></div>'],
  ['Outline Text','نص محدد بدون تعبئة','<div style="font-size:38px;font-weight:1000;color:transparent;-webkit-text-stroke:1px #38bdf8">Outline</div>'],
  ['Shadow Text','ظل كبير للنص','<div style="font-size:34px;font-weight:1000;text-shadow:0 18px 35px rgba(56,189,248,.55)">Shadow</div>'],
  ['Masked Text','نص بخلفية مقصوصة','<div class="text-gradient" style="filter:hue-rotate(90deg)">Masked</div>']
 ]},
 loaders:{icon:'⏳',title:'مكتبة Loading Effects',desc:'لودرات CSS خفيفة تستخدم أثناء تحميل الصفحات أو العمليات.',effects:[
  ['Spinner','دائرة تحميل كلاسيكية','<div class="loader-spin"></div>'],
  ['Dots','نقاط تقفز بتتابع','<div class="loader-dots"><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span></div>'],
  ['Bars','أعمدة صوتية متحركة','<div class="loader-bars"><span style="--i:1"></span><span style="--i:2"></span><span style="--i:3"></span><span style="--i:4"></span></div>'],
  ['Double Ring','حلقتان تدوران','<div class="loader-ring"></div>'],
  ['Pulse Orb','كرة نابضة','<div class="orb" style="animation:pulse 1.5s infinite"></div>'],
  ['Skeleton','تحميل هيكلي للمحتوى','<div class="sample-card"><div style="height:14px;background:rgba(255,255,255,.14);border-radius:20px;margin:12px"></div><div style="height:14px;background:rgba(255,255,255,.08);border-radius:20px;margin:12px;width:70%"></div></div>'],
  ['Progress Bar','شريط تقدم متحرك','<div style="width:230px;height:12px;border-radius:999px;background:#020617;overflow:hidden"><span style="display:block;width:55%;height:100%;background:#38bdf8;animation:pulse 1s infinite"></span></div>'],
  ['Cube Loader','مكعب صغير يدور','<div class="cube3d" style="width:64px;height:64px"><span></span><span></span><span></span><span></span><span></span><span></span></div>']
 ]},
 backgrounds:{icon:'🌌',title:'مكتبة Background Effects',desc:'خلفيات متحركة يمكن استخدامها في الهيرو والصفحات التعريفية.',effects:[
  ['Star Field','خلفية نجوم متحركة','<div class="bg-stars"></div>'],
  ['Wave Background','موجة متحركة داخل الخلفية','<div class="bg-waves"></div>'],
  ['Moving Grid','شبكة تتحرك بهدوء','<div class="bg-grid"></div>'],
  ['Gradient Glow','توهج متدرج','<div style="width:100%;height:170px;border-radius:24px;background:radial-gradient(circle,#38bdf8,transparent 38%),radial-gradient(circle at 25% 70%,#8b5cf6,transparent 35%),#020617"></div>'],
  ['Aurora','خلفية Aurora ناعمة','<div style="width:100%;height:170px;border-radius:24px;background:linear-gradient(120deg,rgba(34,211,238,.45),rgba(139,92,246,.35),rgba(34,197,94,.3));filter:saturate(1.4)"></div>'],
  ['Noise Panel','خلفية زجاجية مع noise','<div class="sample-card glass-card"><div class="mini-title">Noise Glass</div></div>'],
  ['Mesh Gradient','Mesh بألوان متعددة','<div style="width:100%;height:170px;border-radius:24px;background:radial-gradient(circle at 20% 20%,#38bdf8,transparent 35%),radial-gradient(circle at 80% 30%,#8b5cf6,transparent 35%),radial-gradient(circle at 50% 85%,#22c55e,transparent 35%),#020617"></div>'],
  ['Dark Lines','خطوط تقنية داكنة','<div class="bg-grid" style="filter:hue-rotate(80deg)"></div>']
 ]},
 images:{icon:'🖼️',title:'مكتبة Image Effects',desc:'تأثيرات صور للمعارض والبطاقات: تكبير، كشف، Overlay، وميلان.',effects:[
  ['Image Zoom','تكبير الصورة عند المرور','<div class="image-box img-zoom"></div>'],
  ['Image Reveal','كشف نص فوق الصورة','<div class="image-box img-reveal"></div>'],
  ['Image Tilt','ميلان خفيف للصورة','<div class="image-box img-tilt"></div>'],
  ['Overlay Dark','طبقة داكنة فوق الصورة','<div class="image-box"><span style="position:absolute;inset:0;background:rgba(2,6,23,.45);display:grid;place-items:center;font-weight:900">Overlay</span></div>'],
  ['Rounded Mask','صورة بقناع دائري','<div class="image-box" style="border-radius:50%;width:170px;height:170px"></div>'],
  ['Frame Image','إطار متدرج حول الصورة','<div class="image-box hover-border"></div>'],
  ['Blur Reveal','صورة تتضح عند المرور','<div class="image-box" style="filter:blur(2px)"></div>'],
  ['Gallery Tile','مربع معرض حديث','<div class="image-box" style="box-shadow:0 22px 50px rgba(56,189,248,.25)"></div>']
 ]},
 navigation:{icon:'🧭',title:'مكتبة Navigation Effects',desc:'تأثيرات قوائم وتنقل وتبويبات تصلح للمواقع الحديثة.',effects:[
  ['Pill Nav','قائمة بشكل أزرار دائرية','<div class="nav-demo"><span class="nav-pill">Home</span><span class="nav-pill">Work</span><span class="nav-pill">Contact</span></div>'],
  ['Animated Tabs','تبويبات بحالة نشطة','<div class="tabs-demo"><span>الأول</span><span>الثاني</span><span>الثالث</span></div>'],
  ['Underline Nav','خط سفلي عند المرور','<div class="nav-demo"><span class="nav-pill">Features</span><span class="nav-pill">Pricing</span></div>'],
  ['Glass Navbar','قائمة زجاجية','<div class="sample-card glass-card"><div class="nav-demo"><span>الرئيسية</span><span>الأعمال</span></div></div>'],
  ['Side Menu','قائمة جانبية مختصرة','<div class="sample-card"><div style="display:grid;gap:10px"><span>لوحة التحكم</span><span>المشاريع</span><span>الإعدادات</span></div></div>'],
  ['Breadcrumb','مسار تنقل واضح','<div class="sample-card"><div class="mini-muted">الرئيسية / المكتبات / 3D</div></div>'],
  ['Floating Menu','قائمة عائمة','<div class="nav-demo" style="padding:12px;border-radius:999px;background:rgba(255,255,255,.08)"><span>+</span><span>✦</span><span>↗</span></div>'],
  ['Mega Link','رابط كبير بتأثير Hover','<div class="sample-card hover-lift"><div class="mini-title">Mega Menu</div></div>']
 ]}
};
function nav(){const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('[data-nav]').forEach(el=>{el.innerHTML=navItems.map(([href,label])=>`<a href="${href}" class="${href===current?'active':''}">${label}</a>`).join('')})}
function particles(){const c=document.querySelector('[data-particles]');if(!c)return;const x=c.getContext('2d');let w,h,pts=[];function resize(){w=c.width=innerWidth;h=c.height=innerHeight;pts=Array.from({length:Math.min(90,Math.floor(w*h/18000))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.7+.4,v:Math.random()*.35+.1}))}function draw(){x.clearRect(0,0,w,h);x.fillStyle='rgba(148,225,255,.85)';pts.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=h;x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fill()});requestAnimationFrame(draw)}addEventListener('resize',resize);resize();draw()}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}
function tilt(){document.querySelectorAll('.tilt,.library-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.setProperty('--x',x+'px');card.style.setProperty('--y',y+'px');if(card.classList.contains('tilt')){card.style.transform=`perspective(800px) rotateX(${-(y-r.height/2)/18}deg) rotateY(${(x-r.width/2)/18}deg)`}});card.addEventListener('pointerleave',()=>{if(card.classList.contains('tilt'))card.style.transform=''})})}
function renderPage(){const key=document.body.dataset.page;if(!key)return;const page=PAGES[key];const root=document.getElementById('effectPage');document.title=page.title+' | Effects Library';root.innerHTML=`<section class="page-hero reveal"><div class="crumbs"><a href="index.html">الرئيسية</a> / ${page.title}</div><span class="eyebrow">${page.icon} ${page.effects.length} تأثيرات جاهزة</span><h1>${page.title}</h1><p class="lead">${page.desc}</p></section><section class="toolbar reveal"><strong>كل التأثيرات في هذه الصفحة مبنية بـ HTML/CSS/JS فقط</strong><span>${page.effects.length} نماذج</span></section><section class="effect-grid">${page.effects.map((e,i)=>`<article class="effect-card reveal"><div class="demo-stage">${e[2]}</div><div class="body"><h3>${i+1}. ${e[0]}</h3><p>${e[1]}</p><pre><code></code></pre><button class="copy-btn">نسخ كود المثال</button></div></article>`).join('')}</section>`;root.querySelectorAll('.effect-card').forEach((card,i)=>{card.querySelector('code').textContent=page.effects[i][2]})}
function copyButtons(){document.addEventListener('click',async e=>{const b=e.target.closest('.copy-btn');if(!b)return;const code=b.closest('.body').querySelector('code').textContent;try{await navigator.clipboard.writeText(code);b.textContent='تم النسخ';b.classList.add('done');setTimeout(()=>{b.textContent='نسخ كود المثال';b.classList.remove('done')},1400)}catch{b.textContent='انسخ يدويًا من الصندوق'}})}
nav();renderPage();particles();reveal();tilt();copyButtons();
