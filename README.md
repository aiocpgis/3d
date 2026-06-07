# Effects Lab - Arabic Developer Prompt & UI Libraries Platform

منصة عربية مرجعية للمطورين تحتوي على AI Prompt Studio وبرومبتات احترافية لتوليد تأثيرات الويب داخل أدوات الذكاء الاصطناعي، مع دليل شامل لمكتبات وإطارات عمل الويب وتوصيات ومقارنات وحزم حسب نوع المشروع.

## الفكرة

بدل أن يكون الموقع مجرد معرض أكواد، أصبح منصة Static Prompt Platform:

- `studio.html` صفحة AI Prompt Studio لصناعة برومبت إنتاجي مخصص.
- Prompt Quality Scoring لتقييم جودة البرومبت.
- Improve Prompt لتحسين البرومبت عبر Pollinations AI.
- Prompt History محلي باستخدام `localStorage`.
- Export كـ TXT / MD / JSON.
- Compare Libraries with AI لاختيار المكتبة الأنسب.
- Prompt Packs جاهزة حسب نوع المشروع.
- كل تأثير يدعم Pollinations AI مع Local fallback.
- لا يوجد Backend أو Database أو Authentication.

## الصفحات الأساسية

- `index.html` الصفحة الرئيسية.
- `studio.html` AI Prompt Studio.
- `history.html` Prompt History محلي.
- `compare.html` مقارنة مكتبات عبر AI.
- `packs.html` حزم برومبتات جاهزة.
- `favorites.html` المفضلة المحلية.
- `recommendations.html` توصيات حسب نوع المشروع.
- `libraries.html` دليل مكتبات وإطارات عمل الويب.
- `library.html` صفحة تفاصيل ديناميكية لكل مكتبة.
- صفحات البرومبتات: `scroll.html`, `three-d.html`, `hover.html`, `buttons.html`, `cards.html`, `text.html`, `loaders.html`, `backgrounds.html`, `images.html`, `navigation.html`.

## ميزات AI Prompt Studio

- توليد برومبت عبر Pollinations AI.
- Local fallback عند فشل الاتصال.
- تقييم جودة البرومبت عبر مؤشرات:
  - Clarity
  - Specificity
  - Production-readiness
  - Security
  - Actionability
- تحسين البرومبت عبر زر Improve Prompt.
- حفظ التوليدات في Prompt History.
- تصدير البرومبت بصيغ TXT وMD وJSON.
- حفظ البرومبت في المفضلة المحلية.

## Compare Libraries with AI

صفحة `compare.html` تسمح باختيار مكتبتين من قاعدة بيانات المكتبات، ثم توليد مقارنة عملية حسب نوع المشروع. تشمل المقارنة:

- السهولة.
- الأداء.
- حجم المشروع.
- المرونة.
- المجتمع.
- متى تختار كل مكتبة.
- القرار النهائي.

## Prompt Packs

صفحة `packs.html` تحتوي حزم جاهزة مثل:

- Portfolio Pack
- SaaS Pack
- GIS Dashboard Pack
- Landing Page Pack
- Animation Pack
- 3D Website Pack
- Docs / Blog Pack

كل Pack يحتوي مكتبات مقترحة، صفحات تأثيرات مناسبة، وبرومبت إنتاجي جاهز.

## AI Prompt Generator

- يستخدم Pollinations AI عند ضغط المستخدم فقط.
- لا يوجد API key داخل الموقع.
- لا يوجد Backend أو Database أو Authentication.
- إذا فشل Pollinations AI، يستخدم الموقع النص المحلي الاحتياطي.
- يتم تخزين النتائج محليًا في `localStorage` لتقليل الطلبات المتكررة.
- يتم عرض ناتج الذكاء الاصطناعي كنص فقط، وليس HTML مباشرًا.

## دليل المكتبات

تمت إضافة 226 مكتبة وإطار عمل موزعة على 11 تصنيفًا:

- Core & Traditional CSS Frameworks
- Classless CSS Libraries
- React Component Libraries
- Vue Component Libraries
- Angular Component Libraries
- Svelte Component Libraries
- Web Components / Solid / Qwik / Lit
- CSS-in-JS and Utility Engines
- Animation Libraries
- 3D / Canvas / Interactive Graphics
- Niche / Retro / Specific Themes

## الملفات المشتركة

- `assets/styles.css` التصميم العام.
- `assets/generated-effects.css` المعاينات البصرية.
- `assets/prompt-platform.css` تصميم بطاقات البرومبت.
- `assets/ai-prompt.css` و `assets/ai-prompt.js` توليد AI داخل صفحات التأثيرات.
- `assets/studio.css` و `assets/studio.js` صفحة AI Prompt Studio.
- `assets/prompt-tools.css` و `assets/prompt-tools.js` التقييم، التحسين، التاريخ، والتصدير.
- `assets/history.js` منطق صفحة Prompt History.
- `assets/compare.js` منطق مقارنة المكتبات.
- `assets/packs.js` منطق Prompt Packs.
- `assets/context-ai.css` و `assets/context-ai.js` توليد AI داخل صفحات المكتبات والتوصيات.
- `assets/library-data.js` بيانات كل المكتبات.
- `assets/libraries.css` و `assets/libraries.js` دليل المكتبات.
- `assets/library-detail.css` و `assets/library-detail.js` صفحة تفاصيل المكتبة.
- `assets/recommendations.css` و `assets/recommendations.js` توصيات المشاريع.
- `assets/sprint1.css` و `assets/sprint1.js` البحث، الوسوم، المفضلة، وتحسينات الوصولية.
- `robots.txt` و `sitemap.xml` للـ SEO الأساسي.
- `.nojekyll` لضمان نشر الملفات كما هي على GitHub Pages.

## التشغيل محليًا

افتح `index.html` مباشرة في المتصفح، أو شغّل سيرفر محلي:

```bash
python -m http.server 8000
```

ثم افتح:

```txt
http://localhost:8000
```

## رابط GitHub Pages المتوقع

```txt
https://aiocpgis.github.io/3d/
```
