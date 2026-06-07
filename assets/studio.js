const STUDIO_CACHE_KEY='effects-lab-studio-ai-v1';
const STUDIO_FAVORITES_KEY='effects-lab-favorite-prompts-v1';
const STUDIO_PROJECTS=[['portfolio','Portfolio / personal brand'],['landing','Landing Page / marketing'],['dashboard','Dashboard / admin panel'],['saas','SaaS product app'],['gis','GIS Dashboard / maps'],['animation','Animation storytelling site'],['3d','3D / WebGL experience'],['blog','Blog / documentation'],['ecommerce','E-commerce UI'],['retro','Retro / game UI']];
const STUDIO_TARGETS=['ChatGPT','Cursor','Claude','v0','Bolt','Lovable','GitHub Copilot'];
const STUDIO_OUTPUTS=['HTML/CSS/JavaScript','React Component','Next.js App Router','Tailwind CSS UI','CSS only','Architecture plan','Code review prompt'];
const STUDIO_MODES=['Build from scratch','Add to existing project','Improve existing UI','Convert existing code','Optimize performance & accessibility','Debug and refactor'];
const STUDIO_LEVELS=['Beginner friendly','Intermediate','Advanced','Production-grade'];
const studioRoot=document.getElementById('studioApp');
function studioCache(){try{return JSON.parse(localStorage.getItem(STUDIO_CACHE_KEY)||'{}')}catch{return{}}}
function saveStudioCache(cache){try{localStorage.setItem(STUDIO_CACHE_KEY,JSON.stringify(cache))}catch{}}
function studioFavorites(){try{return JSON.parse(localStorage.getItem(STUDIO_FAVORITES_KEY)||'[]')}catch{return[]}}
function saveStudioFavorites(items){try{localStorage.setItem(STUDIO_FAVORITES_KEY,JSON.stringify(items))}catch{}}
function hashText(text){let h=0;for(let i=0;i<text.length;i++){h=((h<<5)-h)+text.charCodeAt(i);h|=0}return Math.abs(h).toString(36)}
function optionList(items){return items.map(item=>Array.isArray(item)?`<option value="${item[0]}">${item[1]}</option>`:`<option value="${item}">${item}</option>`).join('')}
function effectPages(){if(typeof PAGES==='undefined')return[];return Object.entries(PAGES).map(([key,page])=>({key,title:page.title,items:page.effects||[]}))}
function libraryOptions(){if(typeof ALL_LIBRARIES==='undefined')return[];return ALL_LIBRARIES.map(item=>item.name)}
function firstEffectName(){const pages=effectPages();return pages[0]?.items?.[0]?.name||'Scroll Reveal'}
function renderStudio(){const pages=effectPages();const libs=libraryOptions();studioRoot.innerHTML=`<div class="studio-layout"><section class="studio-panel"><div class="studio-panel-head"><span class="eyebrow">🧪 AI Prompt Studio</span><h2>اصنع برومبت إنتاجي لأي مشروع</h2><p>اختر نوع المشروع، التأثير، المكتبة، والأداة المستهدفة. النظام يرسل Prompt Seed إلى Pollinations AI، ومعه Local fallback إذا فشل الاتصال.</p></div><form class="studio-form" id="studioForm"><div class="studio-grid"><div class="studio-field"><label for="studioProject">نوع المشروع</label><select id="studioProject">${optionList(STUDIO_PROJECTS)}</select><span>يساعد AI على اختيار مستوى التفاصيل والمكتبات المناسبة.</span></div><div class="studio-field"><label for="studioTarget">الأداة المستهدفة</label><select id="studioTarget">${optionList(STUDIO_TARGETS)}</select><span>غيّر الأسلوب حسب ChatGPT أو Cursor أو v0 أو غيرها.</span></div><div class="studio-field"><label for="studioOutput">نوع الناتج</label><select id="studioOutput">${optionList(STUDIO_OUTPUTS)}</select></div><div class="studio-field"><label for="studioMode">وضع العمل</label><select id="studioMode">${optionList(STUDIO_MODES)}</select></div><div class="studio-field"><label for="studioPage">تصنيف التأثير</label><select id="studioPage">${pages.map(page=>`<option value="${page.key}">${page.title}</option>`).join('')}</select></div><div class="studio-field"><label for="studioEffect">التأثير المطلوب</label><select id="studioEffect"></select></div><div class="studio-field"><label for="studioLibrary">المكتبة المقترحة</label><select id="studioLibrary"><option value="No specific library">بدون مكتبة محددة</option>${libs.map(name=>`<option value="${name}">${name}</option>`).join('')}</select></div><div class="studio-field"><label for="studioLevel">مستوى الصرامة</label><select id="studioLevel">${optionList(STUDIO_LEVELS)}</select></div></div><div class="studio-field"><label for="studioContext">سياق إضافي اختياري</label><textarea id="studioContext" placeholder="مثال: لدي مشروع React قائم، لا أريد كسر التصميم الحالي، أريد إضافة تأثير Scroll Reveal إلى قسم الخدمات فقط..."></textarea><span>لا تضع أسرار أو مفاتيح API هنا. النص يرسل إلى Pollinations عند التوليد.</span></div><div class="studio-note">لا يوجد Backend ولا API key. يتم توليد البرومبت عند الضغط فقط، ويتم حفظ النتيجة محليًا في المتصفح.</div><div class="studio-actions"><button class="studio-btn primary" type="button" id="studioGenerate">Generate Full Prompt</button><button class="studio-btn" type="button" id="studioLocal">Build Local Prompt</button><button class="studio-btn success" type="button" id="studioCopy">Copy Prompt</button><button class="studio-btn" type="button" id="studioFavorite">Save to Favorites</button></div><div class="studio-status" id="studioStatus" aria-live="polite">جاهز لتوليد برومبت مخصص.</div></form></section><aside class="studio-panel"><div class="studio-panel-head"><h2>الناتج</h2><p>سيظهر البرومبت هنا كنص فقط. استخدمه مباشرة داخل أداة AI التي اخترتها.</p></div><div class="studio-output-wrap"><div class="studio-output placeholder" id="studioOutputBox">اختر الإعدادات ثم اضغط Generate Full Prompt.</div></div><div class="studio-hints"><article class="studio-hint"><h3>أفضل استخدام</h3><p>استخدم Studio عندما تريد برومبت كامل لمشروع أو تعديل حقيقي، وليس مجرد تأثير صغير.</p><div class="studio-chip-row"><span class="studio-chip">Production</span><span class="studio-chip">AI Agents</span><span class="studio-chip">Prompt Engineering</span></div></article><article class="studio-hint"><h3>سياسة الأمان</h3><p>لا يتم تنفيذ أي HTML من رد AI. الناتج يعرض كنص فقط، ويمكن نسخه يدويًا أو حفظه في المفضلة.</p></article></div></aside></div>`;updateEffects();buildLocalPrompt()}
function currentPage(){const key=document.getElementById('studioPage')?.value;return effectPages().find(page=>page.key===key)||effectPages()[0]}
function updateEffects(){const page=currentPage();const select=document.getElementById('studioEffect');if(!select||!page)return;select.innerHTML=(page.items||[]).map((effect,index)=>`<option value="${index}">${effect.name}</option>`).join('')}
function selectedEffect(){const page=currentPage();const index=Number(document.getElementById('studioEffect')?.value||0);return{page,effect:page?.items?.[index]||{name:firstEffectName(),desc:'General UI effect',tags:['UI']}}}
function selectedLabel(id){const el=document.getElementById(id);return el?.selectedOptions?.[0]?.textContent||el?.value||''}
function studioData(){const {page,effect}=selectedEffect();return{project:selectedLabel('studioProject'),target:selectedLabel('studioTarget'),output:selectedLabel('studioOutput'),mode:selectedLabel('studioMode'),pageTitle:page?.title||'UI Effects',effectName:effect.name,effectDesc:effect.desc||'',tags:(effect.tags||[]).join(', ')||'UI, Frontend',library:document.getElementById('studioLibrary')?.value||'No specific library',level:selectedLabel('studioLevel'),context:document.getElementById('studioContext')?.value.trim()||'لا يوجد سياق إضافي.'}}
function localPrompt(){const d=studioData();return `أنت Senior Full-Stack Developer & Software Architect.

المطلوب: أنشئ برومبت احترافي جاهز للاستخدام داخل ${d.target}.

سياق المشروع:
- نوع المشروع: ${d.project}
- نوع الناتج المطلوب: ${d.output}
- وضع العمل: ${d.mode}
- تصنيف التأثير: ${d.pageTitle}
- التأثير المطلوب: ${d.effectName}
- وصف التأثير: ${d.effectDesc}
- الوسوم: ${d.tags}
- المكتبة المقترحة: ${d.library}
- مستوى الصرامة: ${d.level}
- سياق إضافي من المستخدم: ${d.context}

يجب أن يطلب البرومبت من أداة الذكاء الاصطناعي:
1. فحص بنية المشروع أولًا إذا كان المشروع موجودًا.
2. تنفيذ التغيير بأقل ضرر ممكن.
3. عدم كتابة كود ناقص أو TODO أو placeholders.
4. مراعاة Clean Code وResponsive Design وSEO وAccessibility وError Handling.
5. تحسين الأداء باستخدام transform وopacity للحركات عند الإمكان.
6. احترام prefers-reduced-motion وتجنب الحركات الثقيلة على الجوال.
7. فصل الملفات أو المكونات بوضوح حسب نوع الناتج المطلوب.
8. تقديم تقرير نهائي: ماذا تغير، لماذا، الملفات المتأثرة، وما الخطوة التالية.

أعد البرومبت النهائي فقط، باللغة العربية، بدون شرح خارجي.`}
function aiSeed(){const d=studioData();return `اكتب برومبت نهائي احترافي باللغة العربية لمطور يستخدم ${d.target}.

البيانات:
- نوع المشروع: ${d.project}
- نوع الناتج: ${d.output}
- وضع العمل: ${d.mode}
- التأثير: ${d.effectName}
- وصف التأثير: ${d.effectDesc}
- التصنيف: ${d.pageTitle}
- الوسوم: ${d.tags}
- المكتبة: ${d.library}
- مستوى الصرامة: ${d.level}
- سياق المستخدم: ${d.context}

المطلوب من البرومبت النهائي:
- أن يكون Production-ready وليس تجريبيًا.
- يوجه أداة AI لفحص المشروع قبل التعديل إذا كان موجودًا.
- يمنع TODO و placeholders والكود الناقص.
- يغطي Frontend وSecurity وPerformance وAccessibility وResponsive Design وSEO عند الحاجة.
- يطلب تقريرًا نهائيًا عن التعديلات والملفات المتأثرة.
- يكون واضحًا ومباشرًا وقابلًا للنسخ.

أعد البرومبت النهائي فقط.`}
async function pollinationsPost(prompt,signal){const response=await fetch('https://text.pollinations.ai/openai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'openai',messages:[{role:'system',content:'You write precise production-grade prompts for senior software developers. Return only the final Arabic prompt.'},{role:'user',content:prompt}],temperature:.72,max_tokens:1000}),signal});if(!response.ok)throw new Error(`Pollinations POST failed ${response.status}`);const ct=response.headers.get('content-type')||'';if(ct.includes('application/json')){const data=await response.json();return data?.choices?.[0]?.message?.content||data?.choices?.[0]?.text||data?.content||JSON.stringify(data)}return response.text()}
async function pollinationsGet(prompt,signal){const response=await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai`,{signal});if(!response.ok)throw new Error(`Pollinations GET failed ${response.status}`);return response.text()}
async function generateAi(prompt){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),30000);try{try{return await pollinationsPost(prompt,controller.signal)}catch{return await pollinationsGet(prompt,controller.signal)}}finally{clearTimeout(timer)}}
function setOutput(text,source='local'){const out=document.getElementById('studioOutputBox');if(!out)return;out.textContent=text;out.classList.remove('placeholder');out.dataset.source=source;out.dataset.prompt=text}
function setStatus(html){const status=document.getElementById('studioStatus');if(status)status.innerHTML=html}
function cacheKey(){return hashText(aiSeed())}
function buildLocalPrompt(){setOutput(localPrompt(),'local');setStatus('<strong>Local fallback</strong> جاهز. يمكنك نسخه أو توليد نسخة AI.')}
async function generatePrompt(){const button=document.getElementById('studioGenerate');const key=cacheKey();const cache=studioCache();if(cache[key]){setOutput(cache[key],'cache');setStatus('<strong>Cached</strong> تم تحميل نتيجة محفوظة محليًا.');return}const old=button.textContent;button.disabled=true;button.textContent='Generating...';setStatus('جاري التوليد عبر Pollinations AI...');try{const result=(await generateAi(aiSeed())).trim();if(!result||result.length<60)throw new Error('Empty AI response');cache[key]=result;saveStudioCache(cache);setOutput(result,'pollinations');setStatus('<strong>AI Generated</strong> تم توليد البرومبت بنجاح.')}catch(error){setOutput(localPrompt(),'fallback');setStatus('<span class="studio-error">فشل الاتصال بـ Pollinations.</span> تم استخدام Local fallback.')}finally{button.disabled=false;button.textContent=old}}
async function copyPrompt(){const out=document.getElementById('studioOutputBox');const text=out?.dataset.prompt||out?.textContent||'';try{await navigator.clipboard.writeText(text);setStatus('<strong>Copied</strong> تم نسخ البرومبت.')}catch{setStatus('<span class="studio-error">تعذر النسخ التلقائي.</span> انسخ النص يدويًا من صندوق الناتج.')}}
function saveFavorite(){const out=document.getElementById('studioOutputBox');const text=out?.dataset.prompt||out?.textContent||'';if(!text.trim())return;const items=studioFavorites();const d=studioData();const id=`studio-${Date.now()}`;items.unshift({id,title:`AI Studio — ${d.effectName}`,page:'studio.html',type:'studio',prompt:text,desc:`${d.project} / ${d.output} / ${d.library}`,savedAt:new Date().toISOString()});saveStudioFavorites(items.slice(0,80));setStatus('<strong>Saved</strong> تم حفظ البرومبت في المفضلة المحلية.')}
document.addEventListener('change',event=>{if(event.target?.id==='studioPage')updateEffects();if(event.target.closest('#studioForm'))buildLocalPrompt()});
document.addEventListener('input',event=>{if(event.target?.id==='studioContext')buildLocalPrompt()});
document.addEventListener('click',event=>{if(event.target?.id==='studioGenerate')generatePrompt();if(event.target?.id==='studioLocal')buildLocalPrompt();if(event.target?.id==='studioCopy')copyPrompt();if(event.target?.id==='studioFavorite')saveFavorite()});
if(studioRoot)renderStudio();