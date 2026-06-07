const CONTEXT_AI_CACHE_KEY='effects-lab-context-ai-v1';
const CONTEXT_AI_TARGETS=['ChatGPT','Cursor','Claude','v0','Bolt','Lovable','GitHub Copilot'];
const CONTEXT_AI_OUTPUTS=['Implementation prompt','React / Next.js plan','Tailwind UI prompt','Architecture decision','Production review'];
const CONTEXT_AI_MODES=['Build from scratch','Add to existing project','Compare and decide','Optimize for production'];
function contextAiCache(){try{return JSON.parse(localStorage.getItem(CONTEXT_AI_CACHE_KEY)||'{}')}catch{return{}}}
function saveContextAiCache(cache){try{localStorage.setItem(CONTEXT_AI_CACHE_KEY,JSON.stringify(cache))}catch{}}
function contextHash(text){let h=0;for(let i=0;i<text.length;i++){h=((h<<5)-h)+text.charCodeAt(i);h|=0}return Math.abs(h).toString(36)}
function cleanContextText(value){return String(value||'').replace(/[<>]/g,'').trim()}
function compactContextPrompt(prompt,limit=1600){const text=String(prompt||'').replace(/\s+/g,' ').trim();return text.length>limit?`${text.slice(0,limit)}\nأعد البرومبت النهائي فقط.`:text}
async function contextPollinationsPost(prompt,signal){const response=await fetch('https://text.pollinations.ai/openai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'openai',messages:[{role:'system',content:'You generate concise professional prompts for senior software developers. Return only the final Arabic prompt.'},{role:'user',content:compactContextPrompt(prompt,2600)}],temperature:.7,max_tokens:850}),signal});if(!response.ok)throw new Error(`Pollinations POST failed ${response.status}`);const ct=response.headers.get('content-type')||'';if(ct.includes('application/json')){const data=await response.json();return data?.choices?.[0]?.message?.content||data?.choices?.[0]?.text||data?.content||JSON.stringify(data)}return response.text()}
async function contextPollinationsGet(prompt,signal){const response=await fetch(`https://text.pollinations.ai/${encodeURIComponent(compactContextPrompt(prompt,1300))}?model=openai`,{signal});if(!response.ok)throw new Error(`Pollinations GET failed ${response.status}`);return response.text()}
async function contextGenerateAi(prompt){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),22000);try{try{return await contextPollinationsPost(prompt,controller.signal)}catch{return await contextPollinationsGet(prompt,controller.signal)}}finally{clearTimeout(timer)}}
function selectMarkup(kind,items){return `<select data-context-${kind}>${items.map(v=>`<option value="${v}">${v}</option>`).join('')}</select>`}
function panelMarkup(){return `<div class="context-ai-panel" data-context-ai-panel><div class="context-ai-grid"><div class="context-ai-field"><label>AI Tool</label>${selectMarkup('target',CONTEXT_AI_TARGETS)}</div><div class="context-ai-field"><label>Output</label>${selectMarkup('output',CONTEXT_AI_OUTPUTS)}</div><div class="context-ai-field"><label>Mode</label>${selectMarkup('mode',CONTEXT_AI_MODES)}</div></div><div class="context-ai-actions"><button class="context-ai-btn" type="button" data-context-ai-generate>Generate with AI</button><button class="context-ai-copy" type="button" data-context-ai-copy>Copy AI Prompt</button><span class="context-ai-status" data-context-ai-status>Pollinations AI + local generator</span></div><div class="context-ai-output context-ai-placeholder" data-context-ai-output>اضغط Generate with AI لتوليد برومبت مخصص. إذا تعذر الاتصال سيتم إنشاء برومبت محلي محسّن تلقائيًا.</div></div>`}
function prepareContextNode(node,type){if(node.dataset.contextAiReady)return;const source=node.querySelector('pre,.recommend-prompt');if(!source)return;node.dataset.contextAiReady='true';node.dataset.contextType=type;node.dataset.contextFallback=source.textContent.trim();source.classList.add('context-ai-collapsed');source.setAttribute('aria-label','Local fallback prompt');source.insertAdjacentHTML('afterend',panelMarkup())}
function enhanceContextAi(){document.querySelectorAll('.library-prompt-card').forEach(node=>prepareContextNode(node,'library'));document.querySelectorAll('.recommend-box').forEach(node=>{if(node.querySelector('.recommend-prompt'))prepareContextNode(node,'recommendation')})}
function contextOptions(panel){return{target:panel.querySelector('[data-context-target]')?.value||'ChatGPT',output:panel.querySelector('[data-context-output]')?.value||'Implementation prompt',mode:panel.querySelector('[data-context-mode]')?.value||'Build from scratch'}}
function contextTitle(node){if(node.dataset.contextType==='library'){const pageTitle=document.querySelector('.library-detail-hero h1')?.textContent||document.querySelector('h1')?.textContent||'Library';const promptKind=node.querySelector('h4')?.textContent||'Library prompt';return `${pageTitle} — ${promptKind}`}const projectTitle=document.querySelector('.recommend-result h2')?.textContent||'Project recommendation';return `${projectTitle} — Project Prompt`}
function contextSeed(node,options){const title=contextTitle(node);const fallback=cleanContextText(node.dataset.contextFallback);const pageKind=node.dataset.contextType==='library'?'صفحة تفاصيل مكتبة Frontend':'صفحة توصيات حسب نوع المشروع';return `اكتب برومبت احترافي باللغة العربية لمطور Full Stack / Frontend Senior.

السياق: ${pageKind}
العنوان: ${cleanContextText(title)}
الأداة المستهدفة: ${cleanContextText(options.target)}
نوع الناتج المطلوب: ${cleanContextText(options.output)}
وضع العمل: ${cleanContextText(options.mode)}

النص المحلي المختصر أو الاحتياطي:
${fallback}

المطلوب:
- أعد صياغة برومبت واحد احترافي وجاهز للنسخ.
- اجعله عمليًا لمشروع إنتاج حقيقي وليس تجربة.
- اطلب فحص البنية قبل التعديل إذا كان السياق مشروعًا موجودًا.
- امنع الكود الناقص و TODO و placeholders.
- اشمل اعتبارات Frontend وSecurity وPerformance وAccessibility وResponsive Design.
- اطلب تقريرًا بعد التنفيذ: ماذا تغير، لماذا، الملفات المتأثرة، والخطوة التالية.
- لا تشرح خارج البرومبت. أعد البرومبت النهائي فقط.`}
function localContextPrompt(node,options){const title=contextTitle(node);const fallback=cleanContextText(node.dataset.contextFallback);return `أنت Senior Full-Stack Developer & Software Architect.

المطلوب: اكتب برومبت احترافي جاهز للاستخدام داخل ${options.target}.

السياق:
- العنوان: ${cleanContextText(title)}
- نوع الناتج: ${cleanContextText(options.output)}
- وضع العمل: ${cleanContextText(options.mode)}

المعلومات المتاحة:
${fallback}

يجب أن يطلب البرومبت من أداة الذكاء الاصطناعي:
1. فحص بنية المشروع قبل التعديل إذا كان المشروع موجودًا.
2. تنفيذ المطلوب بأقل ضرر ممكن.
3. عدم كتابة كود ناقص أو TODO أو placeholders.
4. مراعاة Frontend وSecurity وPerformance وAccessibility وResponsive Design.
5. تحديد الملفات المتأثرة بوضوح.
6. تقديم تقرير نهائي: ماذا تغير، لماذا، الملفات المتأثرة، والخطوة التالية.

أعد البرومبت النهائي فقط، باللغة العربية، بدون شرح خارجي.`}
function setContextOutput(node,text,source){const output=node.querySelector('[data-context-ai-output]');if(!output)return;output.textContent=text;output.classList.remove('context-ai-placeholder');node.dataset.contextAiPrompt=text;node.dataset.contextAiSource=source||'ai'}
async function handleContextGenerate(button){const panel=button.closest('[data-context-ai-panel]');const node=panel?.closest('[data-context-ai-ready]');if(!panel||!node)return;const status=panel.querySelector('[data-context-ai-status]');const options=contextOptions(panel);const seed=contextSeed(node,options);const cacheKey=`${node.dataset.contextType}:${contextHash(seed)}`;const cache=contextAiCache();if(cache[cacheKey]){setContextOutput(node,cache[cacheKey],'cache');if(status)status.innerHTML='<strong>Cached</strong> تم تحميل نتيجة محفوظة.';return}const old=button.textContent;button.disabled=true;button.textContent='Generating...';if(status)status.textContent='جاري التوليد عبر Pollinations AI...';try{const result=(await contextGenerateAi(seed)).trim();if(!result||result.length<40)throw new Error('Empty AI result');cache[cacheKey]=result;saveContextAiCache(cache);setContextOutput(node,result,'pollinations');if(status)status.innerHTML='<strong>AI Generated</strong> تم التوليد بنجاح.'}catch(error){const local=localContextPrompt(node,options);cache[cacheKey]=local;saveContextAiCache(cache);setContextOutput(node,local,'local-generated');if(status)status.innerHTML='<strong>Local Generated</strong> تعذر الاتصال بـ Pollinations، لذلك تم إنشاء برومبت محلي محسّن بدل إظهار خطأ.'}finally{button.disabled=false;button.textContent=old}}
async function handleContextCopy(button){const panel=button.closest('[data-context-ai-panel]');const node=panel?.closest('[data-context-ai-ready]');if(!node)return;const text=node.dataset.contextAiPrompt||node.dataset.contextFallback||'';try{await navigator.clipboard.writeText(text);const old=button.textContent;button.textContent='تم النسخ';setTimeout(()=>button.textContent=old,1200)}catch{const output=node.querySelector('[data-context-ai-output]');if(output)output.textContent=text}}
document.addEventListener('click',event=>{const generate=event.target.closest('[data-context-ai-generate]');if(generate)handleContextGenerate(generate);const copy=event.target.closest('[data-context-ai-copy]');if(copy)handleContextCopy(copy)},true);
const observer=new MutationObserver(()=>enhanceContextAi());observer.observe(document.body,{childList:true,subtree:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',enhanceContextAi);else enhanceContextAi();