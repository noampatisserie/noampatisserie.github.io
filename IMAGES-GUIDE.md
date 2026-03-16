# 📸 מדריך תמונות לאתר

## תמונות נדרשות

### 🎯 גדלים מומלצים

#### Hero Section (רקע ראשי)
- **גודל:** 1920x1080px (Full HD)
- **פורמט:** JPG
- **גודל קובץ:** עד 300KB (לאחר דחיסה)
- **תוכן:** מאפייה/מוצרים מרשימים, רקע חם ומזמין

#### תמונות מוצרים (Menu Items)
- **גודל:** 800x600px
- **פורמט:** JPG
- **גודל קובץ:** עד 150KB לכל תמונה
- **תוכן:** תמונת מוצר איכותית, רקע נקי
- **כמות:** 11 תמונות

**רשימת מוצרים לצלם:**
1. בייגלה אישיים
2. מגש עוגיות
3. טארט תות (Tarte aux Fraise)
4. טארט לימון (Tarte aux Citron)
5. טארט שוקולד
6. עוגת מוס - ציצופ אישי
7. עוגות דוראן
8. שחליות מלוחים
9. פטיטים שמוקים
10. פשטידות שמרים
11. פיטריות במילואים

#### גלריה
- **גודל:** 600x600px (ריבוע)
- **פורמט:** JPG
- **גודל קובץ:** עד 100KB לכל תמונה
- **כמות:** 6-12 תמונות
- **תוכן:** מגוון - מוצרים, מאפייה, תהליך אפייה, אירועים

#### About Section
- **גודל:** 600x800px (פורטרט)
- **פורמט:** JPG
- **גודל קובץ:** עד 150KB
- **תוכן:** תמונה של הפטיסייר/צוות/מאפייה

#### Favicon
- **גודל:** 32x32px, 192x192px, 512x512px
- **פורמט:** PNG (רקע שקוף)
- **תוכן:** לוגו/סמל המאפייה

#### Open Graph (שיתוף ברשתות)
- **גודל:** 1200x630px
- **פורמט:** JPG
- **גודל קובץ:** עד 300KB
- **תוכן:** תמונה מרכזית + טקסט/לוגו

---

## 📂 מבנה תיקיות מומלץ

```
noam-patisserie/
├── images/
│   ├── hero/
│   │   └── hero-bg.jpg
│   ├── menu/
│   │   ├── bagels.jpg
│   │   ├── cookies-tray.jpg
│   │   ├── tart-strawberry.jpg
│   │   ├── tart-lemon.jpg
│   │   ├── tart-chocolate.jpg
│   │   ├── mousse-cake.jpg
│   │   ├── doran-cakes.jpg
│   │   ├── savory-pastries.jpg
│   │   ├── petits-fours.jpg
│   │   ├── puff-pastries.jpg
│   │   └── mushroom-pastries.jpg
│   ├── gallery/
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   └── gallery-6.jpg
│   ├── about/
│   │   └── patissier.jpg
│   ├── icons/
│   │   ├── favicon-32x32.png
│   │   ├── favicon-192x192.png
│   │   └── favicon-512x512.png
│   └── og/
│       └── og-image.jpg
```

---

## 🎨 טיפים לצילום

### כללי
- ✅ אור טבעי או תאורה רכה
- ✅ רקע נקי (עדיף לבן/קרם/עץ)
- ✅ צלם במרכז המסגרת
- ✅ השתמש בזווית קלה מלמעלה (45°)
- ❌ אל תצלם עם פלאש ישיר
- ❌ אל תצלם ברזולוציה נמוכה

### מוצרים
- צלם מספר זוויות של כל מוצר
- הוסף אלמנטים תומכים (פרחים, כלים, בד)
- שמור על סטייל אחיד לכל התמונות

### גלריה
- מגוון תוכן: מוצרים קרובים, מאפייה, אווירה
- צלם אירועים ולקוחות מרוצים (עם רשות)
- ספר סיפור דרך התמונות

---

## 🛠️ כלים לעריכה ודחיסה

### עריכה
- **Canva** (חינם, מתאים למתחילים)
- **Photoshop** (מקצועי)
- **GIMP** (חינם, קוד פתוח)

### דחיסה (חובה!)
- **TinyPNG** - https://tinypng.com (מומלץ מאוד)
- **Squoosh** - https://squoosh.app
- **ImageOptim** (Mac)

### גודל הקובץ הרצוי
- Hero: < 300KB
- Menu: < 150KB
- Gallery: < 100KB
- **חשוב:** שמור על איכות גבוהה גם לאחר דחיסה!

---

## 📝 שמות קבצים

### כללים
- השתמש באותיות אנגליות קטנות בלבד
- הפרד מילים עם מקף `-`
- ללא רווחים, תווים מיוחדים או עברית

### דוגמאות
✅ `tart-strawberry.jpg`
✅ `mousse-cake-chocolate.jpg`
✅ `gallery-bakery-interior.jpg`

❌ `טארט תות.jpg`
❌ `Tart Strawberry.JPG`
❌ `tart_strawberry (1).jpg`

---

## 🔄 החלפת Placeholders

### לפני (Placeholder)
```html
<div class="menu-item-image">
    <div class="image-placeholder">🥯</div>
</div>
```

### אחרי (תמונה אמיתית)
```html
<div class="menu-item-image">
    <img src="images/menu/bagels.jpg" alt="בייגלה אישיים טריים">
</div>
```

### עם Lazy Loading (מומלץ)
```html
<div class="menu-item-image">
    <img data-src="images/menu/bagels.jpg" 
         src="images/placeholder.jpg" 
         alt="בייגלה אישיים טריים"
         class="lazy">
</div>
```

---

## ✅ רשימת תמונות - Checklist

### Hero
- [ ] hero-bg.jpg (1920x1080px, <300KB)

### Menu Items (11 תמונות)
- [ ] bagels.jpg
- [ ] cookies-tray.jpg
- [ ] tart-strawberry.jpg
- [ ] tart-lemon.jpg
- [ ] tart-chocolate.jpg
- [ ] mousse-cake.jpg
- [ ] doran-cakes.jpg
- [ ] savory-pastries.jpg
- [ ] petits-fours.jpg
- [ ] puff-pastries.jpg
- [ ] mushroom-pastries.jpg

### Gallery (6-12 תמונות)
- [ ] gallery-1.jpg
- [ ] gallery-2.jpg
- [ ] gallery-3.jpg
- [ ] gallery-4.jpg
- [ ] gallery-5.jpg
- [ ] gallery-6.jpg

### About
- [ ] patissier.jpg (600x800px)

### Icons
- [ ] favicon-32x32.png
- [ ] favicon-192x192.png
- [ ] favicon-512x512.png

### Social
- [ ] og-image.jpg (1200x630px)

---

## 🎯 Alt Text (טקסט חלופי)

כל תמונה צריכה alt text תיאורי:

### טוב ✅
```html
<img src="tart-strawberry.jpg" alt="טארט תות שדה צרפתי עם קרם פטיסייר וניל">
```

### רע ❌
```html
<img src="tart-strawberry.jpg" alt="תמונה">
<img src="tart-strawberry.jpg" alt="">
```

---

## 📱 בדיקת תמונות

לאחר הוספת תמונות, בדוק:
- [ ] התמונות נטענות מהר (< 2 שניות)
- [ ] איכות גבוהה גם בנייד
- [ ] לא מעוותות ביחסי מסך שונים
- [ ] Alt text על כל תמונה
- [ ] כל התמונות דחוסות

---

**זקוק לעזרה בצילום או עריכה? שאל אותי! 📸🐙**