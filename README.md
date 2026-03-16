# 🥐 Noam Pâtisserie - אתר מעוצב ברמה גבוהה

אתר פרימיום למאפייה ופטיסרי בוטיק "נעם פטיסרי" בנתניה.

---

## ✨ תכונות

### 🎨 **עיצוב פרימיום**
- עיצוב מודרני ואלגנטי עם פלטת צבעים חמה (חום, זהב, קרם)
- טיפוגרפיה מעוצבת (Heebo + Playfair Display)
- אנימציות חלקות ומתוחכמות
- אפקטי מעבר ו-hover מתקדמים

### 📱 **תגובתי 100%**
- מותאם מושלם לכל המסכים (נייד, טאבלט, דסקטופ)
- תפריט המבורגר אלגנטי בנייד
- גלריה דינמית שמתאימה לכל מסך

### 🍰 **תפריט אינטראקטיבי**
- סינון קטגוריות עם אנימציות
- כרטיסי מוצרים מעוצבים
- מחירים ותגיות קטגוריות
- אפקט hover עם הגדלה

### 🖼️ **גלריה מעוצבת**
- תמונות בגודל מלא
- אפקט זום בעת ריחוף
- פריסה רספונסיבית

### 📞 **צור קשר מתקדם**
- טופס יצירת קשר מעוצב
- שילוב WhatsApp ישיר
- כפתור צף WhatsApp עם אנימציה
- כרטיסי מידע (כתובת, שעות, טלפון, אימייל, אינסטגרם)

### ⚡ **ביצועים**
- קוד מבוסס על CSS טהור (ללא תלויות)
- אנימציות מואצות חומרה (GPU)
- Lazy loading לתמונות (מוכן)
- Debounce לאירועי גלילה

---

## 📂 מבנה הקבצים

```
noam-patisserie/
├── index.html       # HTML ראשי
├── styles.css       # עיצוב CSS מתקדם
├── script.js        # JavaScript לפונקציונליות
└── README.md        # מדריך זה
```

---

## 🚀 התקנה והפעלה

### אופציה 1: פתיחה ישירה
1. פתח את `index.html` בדפדפן
2. זהו! האתר פועל.

### אופציה 2: שרת מקומי (מומלץ)
```bash
cd noam-patisserie
python3 -m http.server 8000
```
פתח בדפדפן: `http://localhost:8000`

### אופציה 3: Live Server (VS Code)
1. התקן תוסף "Live Server" ב-VS Code
2. לחץ ימני על `index.html` → Open with Live Server

---

## ⚙️ התאמה אישית

### 🔢 מספר טלפון/WhatsApp
החלף את `972XXXXXXXXX` במספר הטלפון האמיתי ב:
- `index.html` (שורות 42, 47, 245, 247, 306)
- `script.js` (שורה 124)

### 🎨 צבעים
ערוך את המשתנים ב-`styles.css` (שורות 14-20):
```css
:root {
    --primary: #8B6F47;      /* חום חם */
    --accent: #D4AF37;       /* זהב */
    --secondary: #2C2416;    /* שוקולד כהה */
    /* ... */
}
```

### 📧 אימייל
החלף `info@noampatisserie.com` ב-`index.html` (שורה 301)

### 📍 כתובת
עדכן כתובת מלאה ב-`index.html` (שורה 277)

### 🕐 שעות פתיחה
ערוך ב-`index.html` (שורה 283)

### 📷 Instagram
עדכן את הקישור ב-`index.html` (שורות 308, 330)

---

## 🖼️ הוספת תמונות אמיתיות

### שלב 1: הכן תיקיית תמונות
```bash
mkdir images
```

### שלב 2: העלה תמונות
שים תמונות ב-`images/`:
- `hero-bg.jpg` (רקע hero)
- `menu-item-1.jpg`, `menu-item-2.jpg`, וכו'
- `gallery-1.jpg`, `gallery-2.jpg`, וכו'

### שלב 3: החלף placeholders
ב-`index.html`, החלף:
```html
<!-- מ: -->
<div class="image-placeholder">🥯</div>

<!-- ל: -->
<img src="images/menu-item-1.jpg" alt="בייגלה אישיים">
```

### שלב 4: הוסף lazy loading (אופציונלי)
```html
<img data-src="images/menu-item-1.jpg" 
     src="placeholder.jpg" 
     alt="בייגלה אישיים" 
     class="lazy">
```

הסר הערה מקוד ה-lazy loading ב-`script.js` (שורות 162-176).

---

## 📦 הפצה (Deployment)

### אופציה 1: Netlify (מומלץ - חינם)
1. גש ל-[netlify.com](https://netlify.com)
2. גרור את תיקיית `noam-patisserie`
3. האתר באוויר! ✅

### אופציה 2: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
הפעל GitHub Pages בהגדרות הריפו.

### אופציה 3: Vercel
```bash
npm i -g vercel
vercel --prod
```

---

## 🎯 רשימת משימות לפני השקה

- [ ] החלף מספר טלפון/WhatsApp
- [ ] עדכן כתובת אימייל
- [ ] עדכן כתובת פיזית
- [ ] הוסף תמונות אמיתיות
- [ ] בדוק שכל הקישורים עובדים
- [ ] בדוק רספונסיביות בכל הגדלי מסך
- [ ] בדוק בדפדפנים שונים (Chrome, Safari, Firefox)
- [ ] הוסף Google Analytics (אופציונלי)
- [ ] הוסף favicon
- [ ] בדוק SEO (title, meta descriptions)
- [ ] הוסף structured data (schema.org)

---

## 🔧 פיצ'רים מתקדמים (אופציונלי)

### Google Analytics
הוסף ב-`<head>` של `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Favicon
הוסף ב-`<head>`:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

### Facebook Pixel
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🐛 פתרון בעיות

### האתר לא נטען כראוי
- וודא שכל 3 הקבצים (HTML, CSS, JS) באותה תיקייה
- פתח את ה-Console (F12) לבדוק שגיאות

### אנימציות לא עובדות בנייד
- וודא שהדפדפן תומך ב-CSS animations
- בדוק ש-JavaScript לא חסום

### טופס לא שולח ל-WhatsApp
- וודא שהחלפת את מספר הטלפון
- בדוק ש-JavaScript פועל

---

## 📞 תמיכה

בנוי על ידי **Joni** 🐙

אם יש שאלות או בעיות, פנה אליי בצ'אט!

---

## 📄 רישיון

© 2026 Noam Pâtisserie. All rights reserved.

---

**תהנה מהאתר החדש שלך! 🎉**