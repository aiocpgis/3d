# Effects Lab - Arabic Developer Prompt & UI Libraries Platform

منصة عربية مرجعية للمطورين تحتوي على برومبتات احترافية لتوليد تأثيرات الويب داخل أدوات الذكاء الاصطناعي، مع دليل شامل لمكتبات وإطارات عمل الويب.

## الفكرة الجديدة

بدل أن يكون الموقع مجرد معرض أكواد، أصبح منصة Prompt Library:

- كل تأثير يحتوي Prompt احترافي جاهز للنسخ.
- كل تأثير يحتوي 4 أنواع برومبت:
  - Build from scratch
  - Add to existing project
  - React / Tailwind version
  - Performance & accessibility
- البرومبتات مناسبة للاستخدام مع ChatGPT و Cursor و Claude و v0 و Bolt و Lovable.
- المعاينات البصرية بقيت موجودة حتى يفهم المستخدم شكل التأثير قبل نسخ البرومبت.

## Sprint 1

تم تنفيذ أول Sprint كمنصة Static بدون Backend:

- بحث داخل كل صفحة برومبتات.
- فلترة بالوسوم Tags داخل صفحات التأثيرات.
- حفظ البرومبتات في المفضلة باستخدام `localStorage`.
- صفحة `favorites.html` لعرض البرومبتات المحفوظة.
- تحسين SEO الأساسي عبر canonical و Open Graph للصفحات الأساسية.
- إضافة `robots.txt` و `sitemap.xml`.
- إضافة Skip Link ودعم أفضل لـ `prefers-reduced-motion`.

## الصفحات الموجودة

- `index.html` الصفحة الرئيسية.
- `favorites.html` صفحة المفضلة المحلية.
- `libraries.html` دليل مكتبات وإطارات عمل الويب.
- `library.html` صفحة تفاصيل ديناميكية لكل مكتبة عبر رابط مثل `library.html?name=Tailwind%20CSS`.
- `scroll.html` برومبتات Scroll Animations.
- `three-d.html` برومبتات 3D Animations.
- `hover.html` برومبتات Hover Effects.
- `buttons.html` برومبتات Button Effects.
- `cards.html` برومبتات Card Effects.
- `text.html` برومبتات Text Effects.
- `loaders.html` برومبتات Loading Effects.
- `backgrounds.html` برومبتات Background Effects.
- `images.html` برومبتات Image Effects.
- `navigation.html` برومبتات Navigation Effects.

## دليل المكتبات

تمت إضافة كل المكتبات التي أرسلها المستخدم داخل الموقع كبيانات قابلة للبحث والفلترة وصفحات تفاصيل. العدد الحالي: 226 مكتبة وإطار عمل موزعة على 11 تصنيفًا:

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

- `assets/styles.css` يحتوي التصميم العام وتخطيط الموقع.
- `assets/generated-effects.css` يحتوي طبقة المعاينات البصرية الحية.
- `assets/prompt-platform.css` يحتوي تصميم واجهة البرومبتات وأزرار النسخ وأنواع البرومبت.
- `assets/sprint1.css` يحتوي بحث البرومبتات، الوسوم، المفضلة، وتحسينات الوصولية.
- `assets/app.js` يحتوي بيانات صفحات البرومبتات، توليد البطاقات، توليد النصوص الاحترافية، النسخ، Scroll Reveal، Tilt، والجسيمات.
- `assets/sprint1.js` يحتوي منطق البحث، الفلترة، المفضلة المحلية، وتوليد صفحة favorites.
- `assets/library-data.js` يحتوي بيانات كل المكتبات التي أرسلها المستخدم.
- `assets/libraries.css` يحتوي تصميم دليل المكتبات.
- `assets/libraries.js` يحتوي البحث، الفلترة، توليد بطاقات المكتبات، وروابط صفحات التفاصيل.
- `assets/library-detail.css` يحتوي تصميم صفحة تفاصيل المكتبة.
- `assets/library-detail.js` يحتوي منطق صفحة تفاصيل المكتبة.
- `robots.txt` يحدد سياسة الفهرسة.
- `sitemap.xml` يحتوي روابط الصفحات الثابتة.
- `.nojekyll` لضمان نشر الملفات كما هي على GitHub Pages.

## المميزات

- تصميم عربي RTL.
- 10 صفحات برومبتات تأثيرات.
- 160 تأثير مع Prompt احترافي.
- 4 أنواع Prompt لكل تأثير.
- بحث وفلترة Tags داخل صفحات البرومبتات.
- صفحة مفضلة محلية بدون Backend.
- زر Copy Professional Prompt لكل تأثير.
- 226 مكتبة وإطار عمل مضافة داخل الموقع.
- بحث وفلاتر داخل دليل المكتبات.
- صفحة تفاصيل لكل مكتبة.
- SEO أساسي للصفحات الرئيسية.
- يعمل مباشرة على GitHub Pages.
- Responsive للجوال والكمبيوتر.
- لا يتم تحميل ملفات CDN لكل المكتبات دفعة واحدة حتى يبقى الموقع خفيفًا.

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
