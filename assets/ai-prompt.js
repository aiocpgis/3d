const AI_PROMPT_CACHE_KEY='effects-lab-ai-generated-prompts-v1';
const AI_TARGETS=[['ChatGPT','ChatGPT'],['Cursor','Cursor'],['Claude','Claude'],['v0','v0'],['Bolt','Bolt'],['Lovable','Lovable'],['GitHub Copilot','GitHub Copilot']];
const AI_STACKS=[['html','HTML/CSS/JavaScript'],['react','React Component'],['tailwind','Tailwind CSS'],['next','Next.js'],['css','CSS only']];
const AI_MODES=[['build','Build from scratch'],['integrate','Add to existing project'],['improve','Improve existing effect'],['optimize','Optimize performance & accessibility']];
function readAiCache(){try{return JSON.parse(localStorage.getItem(AI_PROMPT_CACHE_KEY)||'{}')}catch{return{}}}
function writeAiCache(cache){try{localStorage.setItem(AI_PROMPT_CACHE_KEY,JSON.stringify(cache))}catch{}}
function aiCacheKey(pageKey,index,type,target,stack,mode){return `${pageKey}:${index}:${type}:${target}:${stack}:${mode}`}
function getEffectForCard(card){const key=document.body.dataset.page;const index=Number(card.dataset.effectIndex);if(!key||typeof PAGES==='undefined'||!PAGES[key])return null;return{pageKey:key,index,page:PAGES[key],effect:PAGES[key].effects[index]}}
function fallbackPromptForCard(card){const data=getEffectForCard(card);if(!data||typeof promptText!=='function')return'';return promptText(data.effect,data.page,card.dataset.promptType||'build')}
function escapeForPrompt(value){return String(value||'').replace(/[<>]/g,'').trim()}
function buildLocalAiPrompt(data,options,type){const tags=(data.effect.tags||[]).join(', ')||'UI, Frontend';return `أنت Senior Frontend Developer.

المطلوب: اكتب برومبت احترافي جاهز للاستخدام داخل ${options.target} لتنفيذ أو تعديل تأثير واجهة.

بيانات التأثير:
- اسم التأثير: ${escapeForPrompt(data.effect.name)}
- التصنيف: ${escapeForPrompt(data.page.title)}
- الوصف: ${escapeForPrompt(data.effect.desc)}
- الوسوم: ${escapeForPrompt(tags)}
- نوع البرومبت: ${escapeForPrompt(type)}
- وضع العمل: ${escapeForPrompt(options.mode)}
- نوع الناتج المطلوب: ${escapeForPrompt(options.stack)}

يجب أن يطلب البرومبت من أداة الذكاء الاصطناعي:
1. فحص بنية المشروع أولًا إذا كان المشروع موجودًا.
2. تنفيذ التأثير بأقل ضرر ممكن وبدون كسر التصميم الحالي.
3. عدم كتابة كود ناقص أو TODO أو placeholders.
4. جعل النتيجة Responsive ومتوافقة مع الجوال.
5. احترام Accessibility وprefers-reduced-motion.
6. تحسين الأداء باستخدام transform وopacity للحركة قدر الإمكان.
7. فصل الملفات أو المكونات بوضوح حسب نوع الناتج.
8. تقديم تقرير نهائي: ماذا تغير، لماذا، الملفات المتأثرة، وما الخطوة التالية.

أعد البرومبت النهائي فقط، باللغة العربية، بدون شرح خارجي.`}
function buildAiSeed(data,options){const tags=(data.effect.tags||[]).join(', ')||'General UI';return `اكتب برومبت احترافي باللغة العربية لمطور واجهات أمامية لاستخدامه داخل ${options.target}.
المطلوب من البرومبت أن يطلب من أداة الذكاء الاصطناعي بناء أو تعديل تأثير واجهة.

بيانات التأثير:
- اسم التأثير: ${escapeForPrompt(data.effect.name)}
- التصنيف: ${escapeForPrompt(data.page.title)}
- الوصف: ${escapeForPrompt(data.effect.desc)}
- الوسوم: ${escapeForPrompt(tags)}
- نوع التنفيذ المطلوب: ${options.mode}
- المخرجات التقنية المطلوبة: ${options.stack}

اكتب برومبت واحدًا فقط، جاهزًا للنسخ، بأسلوب Senior Frontend Developer.
يجب أن يتضمن البرومبت هذه القيود:
- افحص البنية قبل التعديل إذا كان المشروع موجودًا.
- لا تكتب كود ناقص، ولا TODO، ولا placeholders.
- اجعل النتيجة Responsive ومتوافقة مع الجوال.
- احترم accessibility وprefers-reduced-motion.
- ركز على الأداء واستخدم transform وopacity للحركة عند الإمكان.
- افصل الملفات أو المكونات بوضوح حسب نوع المخرجات.
- اطلب شرحًا مختصرًا للتعديلات والملفات المتأثرة.

لا تعطِ شرحًا خارج البرومبت. أعد البرومبت النهائي فقط.`}
function compactPrompt(prompt,limit=1700){const text=String(prompt||'').replace(/\s+/g,' ').trim();return text.length>limit?`${text.slice(0,limit)}\nأعد البرومبت النهائي فقط.`:text}
async function pollinationsPost(prompt,signal){const response=await fetch('https://text.pollinations.ai/openai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'openai',messages:[{role:'system',content:'You generate concise professional prompts for software developers. Return only the final Arabic prompt.'},{role:'user',content:compactPrompt(prompt,2600)}],temperature:.72,max_tokens:850}),signal});if(!response.ok)throw new Error(`Pollinations POST failed: ${response.status}`);const contentType=response.headers.get('content-type')||'';if(contentType.includes('application/json')){const data=await response.json();return data?.choices?.[0]?.message?.content||data?.choices?.[0]?.text||data?.content||JSON.stringify(data)}return response.text()}
async function pollinationsGet(prompt,signal){const url=`https://text.pollinations.ai/${encodeURIComponent(compactPrompt(prompt,1300))}?model=openai`;const response=await fetch(url,{signal});if(!response.ok)throw new Error(`Pollinations GET failed: ${response.status}`);return response.text()}
async function generateWithPollinations(prompt){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),22000);try{try{return await pollinationsPost(prompt,controller.signal)}catch{return await pollinationsGet(prompt,controller.signal)}}finally{clearTimeout(timer)}}
function setPreview(card,text,source){const preview=card.querySelector('.prompt-preview');if(!preview)return;preview.textContent=text;preview.classList.remove('ai-placeholder');preview.classList.add('ai-compact');card.dataset.aiPrompt=text;card.dataset.aiSource=source||'ai';const copy=card.querySelector('.copy-prompt-btn');if(copy){copy.textContent=source==='local-generated'?'Copy Local Prompt':'Copy AI Prompt';copy.classList.add('ai-ready')}}
function setPlaceholder(card){if(card.dataset.aiPrompt)return;const preview=card.querySelector('.prompt-preview');if(!preview)return;preview.textContent='اضغط Generate with AI لتوليد برومبت مخصص. إذا تعذر الاتصال بـ Pollinations سيتم إنشاء برومبت محلي محسّن تلقائيًا.';preview.classList.add('ai-compact','ai-placeholder')}
function selectedOptions(card){return{target:card.querySelector('[data-ai-target]')?.value||'ChatGPT',stack:card.querySelector('[data-ai-stack]')?.value||'HTML/CSS/JavaScript',mode:card.querySelector('[data-ai-mode]')?.value||'Build from scratch'}}
function controlsMarkup(){return `<div class="ai-controls" data-ai-controls><div class="ai-controls-row"><div class="ai-field"><label>AI Tool</label><select data-ai-target>${AI_TARGETS.map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select></div><div class="ai-field"><label>Output</label><select data-ai-stack>${AI_STACKS.map(([v,l])=>`<option value="${l}">${l}</option>`).join('')}</select></div><div class="ai-field"><label>Mode</label><select data-ai-mode>${AI_MODES.map(([v,l])=>`<option value="${l}">${l}</option>`).join('')}</select></div></div><div class="ai-actions"><button type="button" class="ai-generate-btn" data-ai-generate>Generate with AI</button><span class="ai-status" aria-live="polite">Pollinations AI + Local generator</span></div></div>`}
function enhanceAiCards(){const cards=[...document.querySelectorAll('.prompt-card')];if(!cards.length)return;cards.forEach(card=>{if(card.querySelector('[data-ai-controls]'))return;setPlaceholder(card);const body=card.querySelector('.body');const tabs=card.querySelector('.prompt-tabs');if(body&&tabs)tabs.insertAdjacentHTML('afterend',controlsMarkup())})}
function updateAiPlaceholderAfterTab(event){const tab=event.target.closest('.prompt-tab');if(!tab)return;const card=tab.closest('.prompt-card');if(!card)return;delete card.dataset.aiPrompt;delete card.dataset.aiSource;setTimeout(()=>{const copy=card.querySelector('.copy-prompt-btn');if(copy){copy.textContent='Copy Professional Prompt';copy.classList.remove('ai-ready')}setPlaceholder(card)},0)}
async function handleAiGenerate(button){const card=button.closest('.prompt-card');const data=getEffectForCard(card);if(!data)return;const status=card.querySelector('.ai-status');const options=selectedOptions(card);const type=card.dataset.promptType||'build';const cacheKey=aiCacheKey(data.pageKey,data.index,type,options.target,options.stack,options.mode);const cache=readAiCache();if(cache[cacheKey]){setPreview(card,cache[cacheKey],'cache');if(status)status.textContent='تم تحميل نتيجة محفوظة محليًا.';return}const seed=buildAiSeed(data,options);button.disabled=true;button.classList.add('is-loading');const old=button.textContent;button.textContent='Generating...';if(status)status.textContent='جاري التوليد عبر Pollinations AI...';try{const result=(await generateWithPollinations(seed)).trim();if(!result||result.length<40)throw new Error('Empty AI result');cache[cacheKey]=result;writeAiCache(cache);setPreview(card,result,'pollinations');if(status)status.innerHTML='<span class="ai-badge">AI Generated</span> تم توليد البرومبت بنجاح.'}catch(error){const localPrompt=buildLocalAiPrompt(data,options,type);cache[cacheKey]=localPrompt;writeAiCache(cache);setPreview(card,localPrompt,'local-generated');if(status)status.innerHTML='<span class="ai-badge">Local Generated</span> تعذر الاتصال بـ Pollinations، لذلك تم إنشاء برومبت محلي محسّن بدل إظهار خطأ.'}finally{button.disabled=false;button.classList.remove('is-loading');button.textContent=old}}
async function copyAiIfAvailable(event){const button=event.target.closest('.copy-prompt-btn');if(!button)return;const card=button.closest('.prompt-card');if(!card||!card.dataset.aiPrompt)return;event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();try{await navigator.clipboard.writeText(card.dataset.aiPrompt);const old=button.textContent;button.textContent='تم نسخ البرومبت';button.classList.add('done');setTimeout(()=>{button.textContent=old;button.classList.remove('done')},1400)}catch{card.querySelector('.prompt-preview').textContent=card.dataset.aiPrompt}}
document.addEventListener('click',event=>{if(event.target.closest('[data-ai-generate]'))handleAiGenerate(event.target.closest('[data-ai-generate]'));},true);
document.addEventListener('click',copyAiIfAvailable,true);
document.addEventListener('click',updateAiPlaceholderAfterTab);
function bootAiPrompts(){enhanceAiCards();setTimeout(enhanceAiCards,120);setTimeout(enhanceAiCards,500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootAiPrompts);else bootAiPrompts();