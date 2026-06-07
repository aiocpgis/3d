const navItems=[['index.html','الرئيسية'],['scroll.html','Scroll'],['three-d.html','3D'],['hover.html','Hover'],['buttons.html','Buttons'],['cards.html','Cards'],['text.html','Text'],['loaders.html','Loaders'],['backgrounds.html','Backgrounds'],['images.html','Images'],['navigation.html','Navigation']];
const pageFiles={scroll:'scroll.html',threeD:'three-d.html',hover:'hover.html',buttons:'buttons.html',cards:'cards.html',text:'text.html',loaders:'loaders.html',backgrounds:'backgrounds.html',images:'images.html',navigation:'navigation.html'};
function extraCss(){if(document.querySelector('[data-generated-effects]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href='assets/generated-effects.css';l.dataset.generatedEffects='true';document.head.appendChild(l)}
const cube=()=>'<div class="cube3d"><span></span><span></span><span></span><span></span><span></span><span></span></div>';
const card=(cls,t,s='Live demo')=>`<div class="fx-card ${cls}"><strong>${t}</strong><span>${s}</span></div>`;
const row=html=>`<div class="fx-row">${html}</div>`;
const panel=(cls,html='')=>`<div class="fx-panel ${cls}">${html}</div>`;
const btn=(cls,t)=>`<button class="fx-live-btn ${cls}">${t}</button>`;
const text=(cls,t)=>`<div class="text-live ${cls}">${t}</div>`;
const img=(cls,inner='')=>`<div class="img-live ${cls}">${inner}</div>`;
const E=(name,desc,html)=>({name,desc,html});
const PAGES={
 scroll:{icon:'🌀',title:'مكتبة Scroll Animations',desc:'تأثيرات ظهور وحركة مرتبطة بالتمرير، مناسبة لصفحات الهبوط، المقالات، الأقسام الطويلة، ومعارض الأعمال.',effects:[
  E('Reveal Up','ظهور ناعم من الأسفل مثل صفحات الهبوط الحديثة',card('s-up','Reveal Up','Section entrance')),
  E('Reveal Left','دخول من اليسار للعناصر النصية أو الصور',card('s-left','Reveal Left','Content block')),
  E('Reveal Right','دخول من اليمين لعناصر المقارنة والميزات',card('s-right','Reveal Right','Feature card')),
  E('Fade Sequence','تتابع ظهور متعدد للعناصر داخل القسم','<div class="stagger-live"><i></i><i></i><i></i><i></i></div>'),
  E('Zoom In','تكبير خفيف عند ظهور العنصر',card('s-zoom','Zoom In','Gallery item')),
  E('Rotate In','دخول مع دوران بسيط مناسب للبطاقات',card('s-rotate','Rotate In','Motion card')),
  E('Parallax Layers','طبقات تتحرك بسرعات مختلفة لتعطي عمقًا','<div class="parallax-live"><i></i><i></i><i></i></div>'),
  E('Reading Progress','شريط تقدم القراءة أعلى الصفحة','<div class="progress-live"><i></i></div>'),
  E('Sticky Story','قسم ثابت بصريًا أثناء سرد المحتوى',card('s-pin','Sticky','Story section')),
  E('Horizontal Scroll','محاكاة سكرول أفقي للمعارض','<div class="h-scroll-live"><i></i><i></i><i></i><i></i></div>'),
  E('Timeline Reveal','خط زمني يظهر نقطة بعد نقطة','<div class="timeline-live"><i></i><i></i><i></i><i></i></div>'),
  E('Pinned Card','بطاقة تبدو مثبتة داخل القسم',card('s-pin','Pinned Card','Scroll focus')),
  E('Scale on Scroll','عنصر يكبر تدريجيًا مع الحركة',card('s-scale','Scale','Scroll motion')),
  E('Split Text Reveal','كشف النص كسطور متتابعة','<div class="split-live"><i>Design better</i><i>Move smoother</i><i>Scroll smarter</i></div>'),
  E('Counter Reveal','أرقام تظهر كإحصائية بارزة',card('s-zoom','98%','Performance feel')),
  E('Section Snap Hint','تلميح انتقال بين أقسام كاملة','<div class="snap-live"><i></i><i></i><i></i></div>')
 ]},
 threeD:{icon:'🧊',title:'مكتبة 3D Animations',desc:'نماذج ثلاثية الأبعاد خفيفة مبنية بـ CSS Transform و Perspective، بدون مكتبات خارجية.',effects:[
  E('Rotating Cube','مكعب CSS ثلاثي الأبعاد يدور باستمرار',cube()),
  E('Flip Card 3D','بطاقة تنقلب حول محور Y عند المرور','<div class="flip-live"><b>Front</b><i>Back</i></div>'),
  E('3D Carousel','شرائح تدور حول مركز واحد','<div class="carousel-live"><i style="--i:0">1</i><i style="--i:1">2</i><i style="--i:2">3</i><i style="--i:3">4</i><i style="--i:4">5</i><i style="--i:5">6</i></div>'),
  E('Orbit System','مدارات ونقاط حول مركز مضيء','<div class="orbit-live"><i></i><b></b></div>'),
  E('Phone Mockup','مجسم هاتف مائل لعرض تطبيق أو واجهة','<div class="phone-live"></div>'),
  E('Laptop Mockup','مجسم لابتوب بسيط للـ SaaS والمنتجات','<div class="laptop-live"></div>'),
  E('Book Cover','غلاف كتاب/ملف بتأثير منظور','<div class="book-live">PDF</div>'),
  E('Layer Stack','طبقات مرفوعة بمحور Z','<div class="layers-live"><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i><i style="--i:4"></i></div>'),
  E('Dice Cube','نموذج مكعب مناسب للألعاب والتفاعل',cube()),
  E('Isometric Tiles','بلاطات Isometric متحركة','<div class="iso-live"><i></i><i></i><i></i><i></i></div>'),
  E('Hologram Card','بطاقة هولوجرامية بلمعان متحرك','<div class="holo-live">HOLO</div>'),
  E('Fold Panel','لوحة مطوية بمنظور ثلاثي','<div class="flip-live"><b>Fold</b><i>Panel</i></div>'),
  E('Floating Shapes','أشكال طافية في مساحة 3D',card('s-up','Floating','3D feel')),
  E('Depth Button','زر بعمق وضغط ثلاثي','<button class="depth-live">3D Press</button>'),
  E('Perspective Card','كرت يستجيب للماوس بمنظور حقيقي',card('fx-tilt','Tilt me','Move pointer')),
  E('3D Ring','حلقة تدور بمحور X/Y','<div class="ring-live"></div>')
 ]},
 hover:{icon:'✨',title:'مكتبة Hover Effects',desc:'Micro-interactions احترافية عند مرور الماوس على الكروت، الروابط، الصور، والعناصر التفاعلية.',effects:[
  E('Lift Hover','رفع الكرت مع ظل ناعم',card('hover-lift-live','Lift','Hover me')),
  E('Glow Hover','توهج خارجي مناسب للأزرار والكروت',card('hover-glow-live','Glow','Hover me')),
  E('Spotlight Hover','إضاءة داخلية تتبع الماوس',card('hover-spot-live fx-tilt','Spotlight','Move pointer')),
  E('Underline Link','خط سفلي متحرك للروابط','<div class="link-live">رابط متحرك</div>'),
  E('Border Draw','رسم الحدود عند المرور',card('hover-border-live','Border Draw','Hover me')),
  E('Shine Sweep','لمعة تمر فوق العنصر',card('hover-shine-live','Shine','Hover me')),
  E('Split Fill','امتلاء خلفية منقسمة',card('hover-split-live','Split Fill','Hover me')),
  E('Skew Hover','ميلان سريع يعطي إحساس ديناميكي',card('hover-skew-live','Skew','Hover me')),
  E('Icon Slide','أيقونة تدخل من الجانب','<div class="link-live">افتح المثال ←</div>'),
  E('Blur Reveal','توضيح عنصر كان مغبشًا',card('hover-blur-live','Blur Reveal','Hover me')),
  E('Magnetic Card','كرت يتفاعل مع حركة الماوس',card('fx-tilt','Magnetic','Move pointer')),
  E('Color Shadow','ظل ملون يظهر عند المرور',card('color-shadow-live','Color Shadow','Hover me')),
  E('Flip Hover','قلب عنصر بسيط عند المرور','<div class="flip-live"><b>Hover</b><i>Done</i></div>'),
  E('Ripple Hover','موجة دائرية داخل العنصر',card('ripple-live','Ripple','Hover me')),
  E('Arrow Link','سهم يتحرك مع الرابط','<div class="link-live">شاهد التفاصيل ←</div>'),
  E('Neon Outline','حد نيون قوي عند المرور',card('neon-live','Neon','Hover me'))
 ]},
 buttons:{icon:'🔘',title:'مكتبة Button Effects',desc:'أزرار CTA حديثة بتأثيرات لمعان، نبض، حدود متحركة، ضغط، وسوائل.',effects:[
  E('Gradient CTA','زر رئيسي بتدرج حديث',btn('b-gradient','ابدأ الآن')),
  E('Glow Button','زر متوهج للنداء إلى الإجراء',btn('b-glow','CTA Glow')),
  E('Shine Button','لمعة تمر فوق الزر',btn('b-shine','Shine')),
  E('Border Run','حد متحرك حول الزر',btn('b-border','Border Run')),
  E('Pulse Button','نبض مستمر لجذب الانتباه',btn('b-pulse','Pulse')),
  E('Liquid Button','سائل يتحرك داخل الزر',btn('b-liquid','Liquid')),
  E('3D Press','زر ينضغط بعمق واضح',btn('b-press','Press')),
  E('Ghost Button','زر شفاف للمواقع الداكنة',btn('b-ghost','Ghost')),
  E('Outline Fill','زر Outline يمتلئ عند المرور',btn('b-outline','Outline')),
  E('Arrow Slide','سهم يتحرك داخل الزر',btn('b-gradient','التالي ←')),
  E('Icon Reveal','إظهار أيقونة عند المرور',btn('b-shine','تحميل ↓')),
  E('Neumorphic Button','زر ناعم بأسلوب Soft UI',btn('b-ghost','Soft UI')),
  E('Glass Button','زر زجاجي بتغبيش',btn('b-ghost','Glass')),
  E('Loading Button','زر يحتوي مؤشر تحميل','<button class="fx-live-btn b-loading"><i></i> جاري الحفظ</button>'),
  E('Morph Button','زر يتغير شكله عند المرور',btn('b-morph','Morph')),
  E('Social Button Stack','مجموعة أزرار صغيرة عائمة','<div class="fx-row social-live"><button>f</button><button>x</button><button>in</button></div>')
 ]},
 cards:{icon:'🃏',title:'مكتبة Card Effects',desc:'كروت حديثة للخدمات، المنتجات، التسعير، الملفات الشخصية، ولوحات التحكم.',effects:[
  E('Glass Card','كرت زجاجي شائع في المواقع التقنية',card('glass-card','Glass','Backdrop blur')),
  E('Gradient Border Card','كرت بحد متدرج متحرك',card('hover-border-live','Gradient Border','Animated border')),
  E('Spotlight Card','إضاءة تتحرك داخل الكرت',card('hover-spot-live fx-tilt','Spotlight','Move pointer')),
  E('Flip Card','كرت أمام/خلف ثلاثي الأبعاد','<div class="flip-live"><b>Front</b><i>Back</i></div>'),
  E('Product Card','بطاقة منتج مع زر وسعر',card('hover-lift-live','Pro Widget','$29')),
  E('Pricing Card','كرت تسعير SaaS شائع',card('hover-glow-live','Pro Plan','$19/mo')),
  E('Profile Card','كرت ملف شخصي حديث',card('s-zoom','Designer','UI Motion')),
  E('Stacked Card','كرت بطبقات خلفية','<div class="parallax-live"><i></i><i></i><i></i></div>'),
  E('Testimonial Card','كرت رأي عميل',card('hover-lift-live','“تجربة أفضل”','Client quote')),
  E('News Card Hover','كرت مقال مع حركة صورة',img('img-zoom-live','')),
  E('Stats Card','بطاقة إحصائية للداشبورد',card('s-scale','+42%','Growth')),
  E('Ribbon Card','كرت بوسم Featured',card('hover-shine-live','NEW','Featured')),
  E('Dashboard Widget','ويدجت لوحة تحكم','<div class="stagger-live"><i></i><i></i><i></i><i></i></div>'),
  E('Timeline Card','كرت خطوة داخل Timeline','<div class="timeline-live"><i></i><i></i><i></i><i></i></div>'),
  E('Neumorphic Card','كرت Soft UI ناعم',card('color-shadow-live','Soft Card','Neumorphism')),
  E('Expandable Preview','كرت يتمدد بصريًا عند المرور',card('hover-lift-live','Preview','Hover to expand'))
 ]},
 text:{icon:'🔤',title:'مكتبة Text Effects',desc:'تأثيرات عناوين ونصوص تستخدم بكثرة في Hero Sections والصفحات الإبداعية.',effects:[
  E('Gradient Text','عنوان بتدرج لوني متحرك',text('t-gradient','Gradient')),
  E('Typewriter','كتابة تدريجية شائعة في Hero',text('t-type','Web Effects Lab')),
  E('Glitch Text','تأثير Glitch للواجهات التقنية',text('t-glitch','GLITCH')),
  E('Neon Text','نص نيون مضيء',text('t-neon','NEON')),
  E('Stroke Text','نص محدد بدون تعبئة',text('t-stroke','OUTLINE')),
  E('Shimmer Text','لمعة تمر على النص',text('t-shimmer','Shimmer')),
  E('Masked Text','نص بخلفية مقصوصة',text('t-gradient','MASK')),
  E('Wave Letters','حروف تتحرك كموجة','<div class="text-live t-wave"><span style="--i:1">W</span><span style="--i:2">A</span><span style="--i:3">V</span><span style="--i:4">E</span></div>'),
  E('Split Reveal Text','كشف سطور النص من الأسفل','<div class="split-live"><i>Build</i><i>Better</i><i>Motion</i></div>'),
  E('Kinetic Text','نص يتحرك كعنوان إعلاني',text('t-gradient','FAST')),
  E('3D Text','نص بظل عميق ثلاثي',text('t-3d','3D TEXT')),
  E('Spotlight Text','إضاءة تتحرك فوق النص',text('t-shimmer','Spotlight')),
  E('Underline Title','عنوان بخط سفلي متدرج','<div class="link-live">عنوان مهم</div>'),
  E('Arabic Callout','نص عربي بارز بطريقة احترافية',text('t-gradient','تجربة بصرية أقوى')),
  E('Counting Text','رقم إحصائي متحرك بصريًا',text('t-pop','+160')),
  E('Hover Fill Text','نص يمتلئ عند المرور',text('t-fill','HOVER'))
 ]},
 loaders:{icon:'⏳',title:'مكتبة Loading Effects',desc:'لودرات CSS عملية للصفحات، العمليات، الجداول، البطاقات، وتجارب الانتظار.',effects:[
  E('Classic Spinner','دائرة تحميل كلاسيكية','<div class="loader-spin-live"></div>'),
  E('Dual Ring','حلقتان تدوران بسرعات مختلفة','<div class="loader-ring-live"></div>'),
  E('Bouncing Dots','نقاط تقفز بتتابع','<div class="dots-live"><span></span><span></span><span></span></div>'),
  E('Equalizer Bars','أعمدة صوتية متحركة','<div class="bars-live"><span></span><span></span><span></span><span></span></div>'),
  E('Skeleton Card','تحميل هيكلي للمحتوى','<div class="skeleton-live"><i></i><i></i><i></i></div>'),
  E('Striped Progress','شريط تقدم بخطوط متحركة','<div class="stripe-live"><i></i></div>'),
  E('Cube Loader','مكعب تحميل ثلاثي',cube()),
  E('Orbit Loader','نقاط تدور حول مركز','<div class="orbit-live"><i></i><b></b></div>'),
  E('Ripple Loader','موجات دائرية متكررة','<div class="ripple-load-live"><i></i><i></i></div>'),
  E('Typing Loader','مؤشر كتابة للرسائل','<div class="dots-live"><span></span><span></span><span></span></div>'),
  E('Blob Morph','كتلة تتغير شكلها','<div class="blob-live"></div>'),
  E('Infinity Loader','شكل لا نهائي مبسط','<div class="loader-ring-live"></div>'),
  E('Radar Loader','رادار ماسح دائري','<div class="loader-spin-live"></div>'),
  E('Pulse Square','مربع نابض للبطاقات',card('b-pulse','Pulse','Loading')),
  E('Shimmer Lines','سطور تحميل بلمعة','<div class="skeleton-live"><i></i><i></i><i></i></div>'),
  E('Battery Loader','بطارية تمتلئ تدريجيًا','<div class="battery-live"><i></i></div>')
 ]},
 backgrounds:{icon:'🌌',title:'مكتبة Background Effects',desc:'خلفيات متحركة وشائعة في المواقع التقنية وصفحات SaaS والواجهات الحديثة.',effects:[
  E('Aurora Background','خلفية Aurora ناعمة للمواقع التقنية',panel('bg-aurora-live')),
  E('Mesh Gradient','تدرج Mesh متعدد البؤر',panel('bg-mesh-live')),
  E('Star Field','نجوم متحركة في الخلفية',panel('bg-stars-live')),
  E('Moving Grid','شبكة تتحرك مثل صفحات SaaS',panel('bg-grid-live')),
  E('Wave Background','موجات متحركة ناعمة',panel('bg-waves-live')),
  E('Floating Blobs','أشكال Blob طافية',panel('bg-mesh-live')),
  E('Radial Spotlight','إضاءة دائرية مركزة',panel('bg-aurora-live')),
  E('Noise Glass','سطح زجاجي مع Noise خفيف',card('glass-card','Noise Glass','Backdrop')),
  E('Diagonal Lines','خطوط قطرية تقنية',panel('bg-lines-live')),
  E('Conic Gradient','تدرج Conic يدور',panel('bg-conic-live')),
  E('Cyber Grid','شبكة Cyber مضيئة',panel('bg-grid-live')),
  E('Sunset Gradient','تدرج غروب دافئ',panel('', '<div style="width:100%;height:100%;background:linear-gradient(135deg,#f97316,#e879f9,#38bdf8)"></div>')),
  E('Dot Matrix','نقاط Matrix منظمة',panel('bg-dots-live')),
  E('Floating Bubbles','فقاعات صاعدة للخلفيات الخفيفة',panel('bg-stars-live')),
  E('Liquid Gradient','تدرج سائل متحرك',panel('bg-aurora-live')),
  E('Animated Border Panel','لوحة بحد متحرك للخلفيات',card('hover-border-live','Animated Panel','Border'))
 ]},
 images:{icon:'🖼️',title:'مكتبة Image Effects',desc:'تأثيرات صور ومعارض شائعة: Zoom، Reveal، Overlay، Masks، Reflections، وCaptions.',effects:[
  E('Image Zoom','تكبير الصورة عند المرور',img('img-zoom-live')),
  E('Overlay Reveal','كشف عنوان فوق الصورة',img('img-caption-live','<span>Overlay</span>')),
  E('Image Tilt','ميلان ثلاثي للصورة',img('fx-tilt')),
  E('Grayscale to Color','تحويل من أبيض وأسود إلى ألوان',img('img-gray-live')),
  E('Blur to Sharp','الصورة تتضح عند المرور',img('img-blur-live')),
  E('Gradient Frame','إطار متدرج حول الصورة',img('img-frame-live')),
  E('Circle Mask','قناع دائري للصورة',img('img-circle-live')),
  E('Split Reveal','كشف الصورة بانقسام بصري',img('hover-shine-live')),
  E('Spotlight Image','إضاءة فوق الصورة عند المرور',img('hover-spot-live fx-tilt')),
  E('Photo Stack','مجموعة صور متراكبة','<div class="photo-stack-live"><i></i><i></i><i></i></div>'),
  E('Polaroid','صورة بأسلوب بولارويد',img('hover-lift-live','<span style="position:relative;font-weight:900">Polaroid</span>')),
  E('Glass Caption','تعليق زجاجي فوق الصورة',img('img-caption-live','<span>Glass Caption</span>')),
  E('Diagonal Clip','قص قطري للصورة',img('', '<span style="position:relative;font-weight:900">Diagonal</span>')),
  E('Masonry Tile','بلاطة معرض حديثة','<div class="stagger-live"><i></i><i></i><i></i><i></i></div>'),
  E('Reflection','انعكاس بصري للصورة',img('hover-glow-live')),
  E('Caption Slide','تعليق ينزلق من الأسفل',img('img-caption-live','<span>View Project</span>'))
 ]},
 navigation:{icon:'🧭',title:'مكتبة Navigation Effects',desc:'نماذج تنقل وقوائم وتبويبات مناسبة للمواقع الاحترافية ولوحات التحكم.',effects:[
  E('Pill Nav','قائمة أزرار دائرية شائعة','<div class="nav-live pill-live"><span class="active">Home</span><span>Work</span><span>Contact</span></div>'),
  E('Underline Nav','روابط بخط سفلي متحرك','<div class="nav-live under-live"><span>Features</span><span>Pricing</span><span>Docs</span></div>'),
  E('Animated Tabs','تبويبات بحالة نشطة','<div class="nav-live tabs-live"><span class="active">الأول</span><span>الثاني</span><span>الثالث</span></div>'),
  E('Glass Navbar','شريط تنقل زجاجي','<div class="nav-live glass-live"><b>Brand</b><span>Home</span><span>Work</span></div>'),
  E('Side Menu','قائمة جانبية للداشبورد','<div class="side-live"><span class="active">Dashboard</span><span>Projects</span><span>Settings</span></div>'),
  E('Breadcrumb','مسار تنقل واضح','<div class="nav-live"><span>الرئيسية</span><span>/</span><b>3D</b></div>'),
  E('Floating Menu','قائمة عائمة مختصرة','<div class="nav-live float-live"><button>+</button><button>✦</button><button>↗</button></div>'),
  E('Mega Menu Preview','معاينة قائمة Mega Menu',card('hover-lift-live','Mega Menu','Products grid')),
  E('Hamburger Menu','أيقونة قائمة متحركة','<div class="hamb-live"><span></span><span></span><span></span></div>'),
  E('Dock Menu','Dock سفلي مثل التطبيقات','<div class="nav-live dock-live"><span>🏠</span><span>🔎</span><span>⚙️</span><span>👤</span></div>'),
  E('Stepper','مؤشر خطوات للعمليات','<div class="nav-live pill-live"><span class="active">1</span><span>2</span><span>3</span></div>'),
  E('Pagination','ترقيم صفحات متحرك','<div class="nav-live pagination-live"><span>‹</span><b>1</b><span>2</span><span>3</span><span>›</span></div>'),
  E('Command Palette','شريط أوامر سريع','<div class="search-live"><span>⌘</span><b>Search commands...</b></div>'),
  E('Search Bar','حقل بحث حديث','<div class="search-live"><span>🔍</span><input value="web effects" aria-label="search" /></div>'),
  E('Vertical Nav','تنقل رأسي للوحة التحكم','<div class="vertical-live"><span class="active">Overview</span><span>Reports</span><span>Team</span></div>'),
  E('Bottom Mobile Nav','تنقل سفلي للجوال','<div class="nav-live bottom-live"><span>⌂</span><span>◉</span><span>☰</span></div>')
 ]}
};
function totalEffects(){return Object.values(PAGES).reduce((n,p)=>n+p.effects.length,0)}
function nav(){const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('[data-nav]').forEach(el=>{el.innerHTML=navItems.map(([href,label])=>`<a href="${href}" class="${href===current?'active':''}">${label}</a>`).join('')})}
function particles(){const c=document.querySelector('[data-particles]');if(!c)return;const x=c.getContext('2d');let w,h,pts=[];function resize(){w=c.width=innerWidth;h=c.height=innerHeight;pts=Array.from({length:Math.min(95,Math.floor(w*h/17000))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.7+.4,v:Math.random()*.35+.1}))}function draw(){x.clearRect(0,0,w,h);x.fillStyle='rgba(148,225,255,.82)';pts.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=h;x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fill()});requestAnimationFrame(draw)}addEventListener('resize',resize,{passive:true});resize();draw()}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}
function tilt(){document.querySelectorAll('.fx-tilt,.library-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.setProperty('--x',x+'px');card.style.setProperty('--y',y+'px');if(card.classList.contains('fx-tilt'))card.style.transform=`perspective(850px) rotateX(${-(y-r.height/2)/18}deg) rotateY(${(x-r.width/2)/18}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>{card.style.transform='';card.style.removeProperty('--x');card.style.removeProperty('--y')})})}
function renderPage(){const key=document.body.dataset.page;if(!key)return;const page=PAGES[key],root=document.getElementById('effectPage');if(!page||!root)return;document.title=page.title+' | Effects Lab';root.innerHTML=`<section class="page-hero reveal"><div class="crumbs"><a href="index.html">الرئيسية</a> / ${page.title}</div><span class="eyebrow">${page.icon} ${page.effects.length} تأثير حي</span><h1>${page.title}</h1><p class="lead">${page.desc}</p></section><section class="toolbar reveal"><strong>نماذج حية مبنية بـ HTML / CSS / JavaScript فقط</strong><span>${page.effects.length} مثال احترافي</span></section><section class="effect-grid">${page.effects.map((e,i)=>`<article class="effect-card reveal"><div class="demo-stage">${e.html}</div><div class="body"><h3>${i+1}. ${e.name}</h3><p>${e.desc}</p><pre><code></code></pre><button class="copy-btn" type="button">نسخ HTML المثال</button></div></article>`).join('')}</section>`;root.querySelectorAll('.effect-card').forEach((card,i)=>{card.querySelector('code').textContent=page.effects[i].html})}
function renderHome(){document.querySelectorAll('[data-total-effects]').forEach(el=>el.textContent=totalEffects());document.querySelectorAll('[data-page-count]').forEach(el=>el.textContent=Object.keys(PAGES).length);document.querySelectorAll('[data-library-grid]').forEach(grid=>{grid.innerHTML=Object.entries(PAGES).map(([key,p])=>`<a class="library-card reveal" href="${pageFiles[key]}"><div class="icon">${p.icon}</div><h3>${p.title.replace('مكتبة ','')}</h3><p>${p.desc}</p><span class="badge">${p.effects.length} تأثير — افتح المكتبة ←</span></a>`).join('')})}
function copyButtons(){document.addEventListener('click',async e=>{const b=e.target.closest('.copy-btn');if(!b)return;const code=b.closest('.body').querySelector('code').textContent;try{await navigator.clipboard.writeText(code);b.textContent='تم النسخ';b.classList.add('done');setTimeout(()=>{b.textContent='نسخ HTML المثال';b.classList.remove('done')},1400)}catch{b.textContent='انسخ يدويًا من الصندوق'}})}
extraCss();nav();renderHome();renderPage();particles();reveal();tilt();copyButtons();