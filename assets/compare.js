const COMPARE_CACHE_KEY='effects-lab-compare-ai-v1';
function cache(){try{return JSON.parse(localStorage.getItem(COMPARE_CACHE_KEY)||'{}')}catch{return{}}}
function saveCache(c){try{localStorage.setItem(COMPARE_CACHE_KEY,JSON.stringify(c))}catch{}}
function h(text){let x=0;for(let i=0;i<text.length;i++){x=((x<<5)-x)+text.charCodeAt(i);x|=0}return Math.abs(x).toString(36)}
function fillOptions(){const names=(typeof ALL_LIBRARIES!=='undefined'?ALL_LIBRARIES.map(x=>x.name):['Tailwind CSS','Bootstrap','GSAP (GreenSock)','Anime.js']);const html=names.map(n=>`<option value="${n}">${n}</option>`).join('');document.getElementById('compareA').innerHTML=html;document.getElementById('compareB').innerHTML=html;document.getElementById('compareB').selectedIndex=Math.min(1,names.length-1)}
function val(id){return document.getElementById(id)?.value||''}
function seed(){return `قارن بين مكتبتين لمطور Frontend / Full Stack Senior.

المكتبة الأولى: ${val('compareA')}
المكتبة الثانية: ${val('compareB')}
نوع المشروع: ${val('compareProject')}
الأداة المستهدفة: ${val('compareTarget')}
سياق إضافي: ${val('compareContext')||'لا يوجد'}

المطلوب:
- مقارنة عملية وليست نظرية.
- قيّم السهولة، الأداء، حجم المشروع، المرونة، المجتمع، التعلم، والتوافق مع الإنتاج.
- قل متى أختار كل مكتبة ومتى أتجنبها.
- أعطِ قرارًا نهائيًا واضحًا حسب نوع المشروع.
- اقترح بدائل عند الحاجة.
- اختم ببرومبت جاهز لاستخدام المكتبة المختارة داخل مشروع حقيقي.
أعد النتيجة باللغة العربية وبشكل منظم.`}
function local(){return `مقارنة مكتبات:

${val('compareA')} vs ${val('compareB')}

نوع المشروع: ${val('compareProject')}

المطلوب من أداة AI:
1. قارن السهولة والأداء وحجم الحزمة والمرونة والدعم المجتمعي.
2. اشرح متى أستخدم ${val('compareA')} ومتى أستخدم ${val('compareB')}.
3. اذكر المخاطر والعيوب لكل اختيار.
4. أعط قرارًا نهائيًا لمشروع ${val('compareProject')}.
5. اختم ببرومبت تنفيذ Production-ready للمكتبة الأفضل.

السياق: ${val('compareContext')||'لا يوجد سياق إضافي.'}`}
async function callAi(prompt){const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),30000);try{try{const r=await fetch('https://text.pollinations.ai/openai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'openai',messages:[{role:'system',content:'You compare frontend libraries and return an Arabic practical decision.'},{role:'user',content:prompt}],temperature:.7,max_tokens:1200}),signal:controller.signal});if(!r.ok)throw new Error('POST failed');const ct=r.headers.get('content-type')||'';if(ct.includes('application/json')){const d=await r.json();return d?.choices?.[0]?.message?.content||d?.choices?.[0]?.text||d?.content||JSON.stringify(d)}return r.text()}catch{const r=await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai`,{signal:controller.signal});if(!r.ok)throw new Error('GET failed');return r.text()}}finally{clearTimeout(timer)}}
function setOutput(text){const out=document.getElementById('compareOutput');out.textContent=text;out.dataset.prompt=text}
function setStatus(text){document.getElementById('compareStatus').innerHTML=text}
async function generate(){const key=h(seed());const c=cache();if(c[key]){setOutput(c[key]);setStatus('<strong>Cached</strong> تم تحميل مقارنة محفوظة.');return}const btn=document.getElementById('generateComparison');const old=btn.textContent;btn.disabled=true;btn.textContent='Generating...';setStatus('جاري التوليد عبر Pollinations AI...');try{const result=(await callAi(seed())).trim();if(!result||result.length<60)throw new Error('Empty');c[key]=result;saveCache(c);setOutput(result);setStatus('<strong>AI Generated</strong> تم توليد المقارنة.')}catch{setOutput(local());setStatus('<span class="studio-error">فشل الاتصال.</span> تم استخدام Local fallback.')}finally{btn.disabled=false;btn.textContent=old}}
async function copy(){try{await navigator.clipboard.writeText(document.getElementById('compareOutput').dataset.prompt||document.getElementById('compareOutput').textContent);setStatus('<strong>Copied</strong> تم النسخ.')}catch{setStatus('انسخ يدويًا.')}}
document.addEventListener('click',e=>{if(e.target.id==='generateComparison')generate();if(e.target.id==='localComparison'){setOutput(local());setStatus('<strong>Local fallback</strong> جاهز.')}if(e.target.id==='copyComparison')copy()});
fillOptions();setOutput(local());