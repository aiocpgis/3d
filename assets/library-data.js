const RAW_LIBRARY_DATA=`core-css|إطارات عمل CSS الأساسية والتقليدية|Frameworks و Utility CSS لتصميم واجهات سريعة ومتجاوبة.|🎨
Tailwind CSS
Bootstrap
Bulma
Foundation
UIKit
Semantic UI
Fomantic UI
Materialize CSS
Pure.css
Pico.css
Skeleton
Milligram
Tachyons
Spectre.css
W3.CSS
Halfmoon
Chota
Mini.css
Picnic CSS
Kube
Mustard UI
Wing
Marx
Tacit
Baseguide
GroundworkCSS
Dead Simple CSS
Infix
Open Props
@@
classless|مكتبات CSS الخالية من الكلاسات|ستايلات تلقائية لعناصر HTML بدون كتابة Classes كثيرة.|📄
Water.css
Sakura.css
MVP.css
New.css
Holiday.css
Almond.css
Write.css
Attentional CSS
No-Class CSS
Bahunya
Yo.css
Awsm.css
@@
react|مكتبات مكونات React|Component libraries و Headless UI و Design Systems لمشاريع React و Next.js.|⚛️
Shadcn/ui
Material UI (MUI)
Chakra UI
Mantine
NextUI
Ant Design (AntD)
DaisyUI
Fluent UI (Microsoft)
Carbon Design System (IBM)
Blueprint UI
Grommet
Evergreen UI
Semantic UI React
React-Bootstrap
Reactstrap
PrimeReact
Elastic UI (EUI)
Ring UI (JetBrains)
Adobe Spectrum
Base Web (Uber)
Reakit
Ark UI
Kendo UI
Radix UI
Headless UI
Ariakit
React Spectrum
React Aria
Theme UI
Rebass
Gluestack-ui
Tamagui
NativeBase
Braid Design System
Polaris (Shopify)
Gestalt (Pinterest)
Sanity UI
Atlassian Design System
Primer (GitHub)
Paste (Twilio)
Backpack (Skyscanner)
Canvas (Workday)
Cedar (REI)
Mineral UI
Zendesk Garden
Bolt Design System
Duet Design System
Warp Design System
Flowbite React
Preline React
@@
vue|مكتبات مكونات Vue|UI kits ومكونات جاهزة لمشاريع Vue و Nuxt.|🟢
Vuetify
Quasar Framework
Element Plus
Element UI
BootstrapVue
PrimeVue
Ant Design Vue
Buefy
Vux
Mint UI
Keen UI
AT-UI
View UI / iView
Muse-UI
Fish-UI
Cube-UI
Vant
NutUI
Varlet
Oruga
Inkline
Wave UI
Equal UI
Flowbite Vue
Preline Vue
CoreUI Vue
@@
angular|مكتبات مكونات Angular|مكتبات واجهات وتصميم لمشاريع Angular الكبيرة والمؤسسية.|🅰️
Angular Material
PrimeNG
NG-Bootstrap
Ngx-Bootstrap
Clarity Design System (VMware)
Taiga UI
Nebular
NG-ZORRO
Fundamental NG (SAP)
Syncfusion Angular
Wijmo
Vaadin
CoreUI Angular
@@
svelte|مكتبات مكونات Svelte|مكونات و Headless UI لمشاريع Svelte و SvelteKit.|🔥
Melt UI
Bits UI
Skeleton (Svelte)
Svelte Material UI (SMUI)
Sveltestrap
Flowbite Svelte
LayerChart
STWUI
AgnosticUI
Svelte UX
Yesvelte
@@
web-components|Web Components و Solid و Qwik و Lit|مكتبات مكونات عامة أو مرتبطة بإطارات عمل حديثة وخفيفة.|🧩
Shoelace
Solid Bootstrap
Kobalte (SolidJS)
Suid (SolidJS)
Qwik UI
FAST (Microsoft)
Lion (ING)
Wired Elements
PatternFly (Red Hat)
USWDS (United States Web Design System)
Salesforce Lightning Design System (SLDS)
@@
css-in-js|CSS-in-JS و Utility Engines|حلول كتابة CSS داخل JavaScript أو توليد Utilities وأنماط Design Tokens.|🧬
Styled Components
Emotion
Vanilla Extract
Linaria
Stitches
Astroturf
JSS
Aphrodite
Radium
Fela
Styletron
CSS Modules
UnoCSS
Windi CSS
StyleX (Meta)
Panda CSS
Macaron
Master CSS
Tailwind-merge
CVA (Class Variance Authority)
@@
animation|مكتبات التحريك والأنيميشن|مكتبات Motion و Scroll و SVG و Micro-interactions للمواقع التفاعلية.|🎞️
Framer Motion
GSAP (GreenSock)
Anime.js
Lottie-Web / LottieFiles
Motion One
AOS (Animate On Scroll)
ScrollMagic
Popmotion
Velocity.js
Move.js
Kute.js
ScrollReveal
Typed.js
Vivus
Wow.js
Hover.css
Animate.css
Magic CSS
CSShake
Keyframes.app
Mo.js
Barba.js
Loco Scroll
Lax.js
Rellax
Sal
Splitting.js
Theatre.js
Origin UI (Animations)
@@
three-canvas|مكتبات 3D و Canvas والرسم التفاعلي|محركات WebGL و Canvas و Graphics لبناء مشاهد وتفاعلات بصرية.|🧊
Three.js
React Three Fiber (R3F)
Babylon.js
PixiJS
Fabric.js
Paper.js
Two.js
P5.js
PlayCanvas
Scene.js
ClayGL
Whitestorm.js (Whs)
Filament
OGL
Curtains.js
@@
niche|مكتبات تصميم خاصة أو Retro|ثيمات جاهزة بأسلوب أنظمة قديمة، ألعاب، Terminal، Hand-drawn، Claymorphism.|🕹️
NES.css (8-bit Games)
98.css (Windows 98)
XP.css (Windows XP)
7.css (Windows 7)
PaperCSS (Hand-drawn)
Clay.css (Claymorphism)
Terminal.css (Command Line)
Bootstrap.386 (Retro DOS)
RPGUI (RPG Games)
PSone.css (PlayStation 1)`;
const LIBRARY_GROUPS=RAW_LIBRARY_DATA.trim().split('\n@@\n').map(block=>{const lines=block.split('\n');const [id,title,desc,icon]=lines[0].split('|');return{id,title,desc,icon,items:lines.slice(1).filter(Boolean)}});
const ALL_LIBRARIES=LIBRARY_GROUPS.flatMap(g=>g.items.map(name=>({name,slug:encodeURIComponent(name),groupId:g.id,groupTitle:g.title,icon:g.icon,desc:g.desc})));
const normalizeLibraryText=v=>String(v||'').toLowerCase().replace(/[\u064B-\u065F]/g,'').trim();
const findLibraryByName=name=>ALL_LIBRARIES.find(i=>normalizeLibraryText(i.name)===normalizeLibraryText(name));
