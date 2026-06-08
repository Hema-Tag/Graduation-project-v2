/* ============================================================
   ITEMS — عدّل هنا بياناتك وصورك
   كل عنصر فيه:
     img  — رابط الصورة
     name — الاسم
     role — المسمى الوظيفي
     bio  — السيرة الذاتية
============================================================ */
// start slider//
const ITEMS = [
  {
    img: 'Img/Team-Project/ibrahim-tag.webp',
    name: 'Ibrahim Tag',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لمحور الدولفين',
    instagram: 'https://www.instagram.com/ibrahim_tag_965?igsh=NmFweWwxYTMzeHRt',
    facebook: 'https://www.facebook.com/share/1FY7ZHQkbu/'
  },
  {
    img: 'Img/Team-Project/Abo-Bakr.webp',
    name: 'Abo Bakr Ibrahim Abo Bakr',
    role: 'Geomatics',
    bio: 'تصميم اول اقتراح لحل مشكلة محور الدولفين',
    instagram: 'https://www.instagram.com/abobakeribrahime?igsh=MWExNjNnb29rcDEwbg==',
    facebook: 'https://www.facebook.com/share/14fA32Rnyt7/'
  },
  {
    img: 'Img/Team-Project/Abo-Elhassan.jpeg',
    name: 'Aboelhassan Mohamed Abdelraheem',
    role: 'Geomatics',
    bio: 'تصميم اول اقتراح لحل مشكلة محور الدولفين',
    instagram: 'https://www.instagram.com/aboelhassanraheem?igsh=ZnJtaTJidW96NXQ1',
    facebook: 'https://www.facebook.com/share/1EeKSVfN1m/'
  },
  {
    img: 'Img/Team-Project/ahmed-abdou.webp',
    name: 'Ahmed Abdelgafar Damarany',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لمحور المحطة ',
    instagram: 'https://www.instagram.com/ahmed_a.d.1?igsh=MXNpeXg1OWphbzhyZA==',
    facebook: 'https://www.facebook.com/share/1D4rt9tJjx/'
  },
  {
    img: 'Img/Team-Project/Youssef-Ragab.jpeg',
    name: 'Youssif Mohamed Ragab',
    role: 'Geomatics',
    bio: 'تصميم تاني اقتراح لحل مشكلة محور الدولفين',
    instagram: 'https://www.instagram.com/yo_ussef5582?igsh=MTZwaHVoYm1tMTA1eg==',
    facebook: 'https://www.facebook.com/share/17XrBywEG1/'
  },
  {
    img: 'Img/Team-Project/Abdo-Abdelati.jpeg',
    name: 'Abdelati Adel Abdelati',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لمحور المحطة ',
    instagram: 'https://www.instagram.com/abdo_adell7?igsh=ejZqdDd1a3pzdXg4',
    facebook: 'https://www.facebook.com/share/1EU6LJfMof/'
  },
  {
    img: 'Img/Team-Project/Amar-Kamal.jpeg',
    name: 'Amar Kamal Omar',
    role: 'Geomatics',
    bio: 'تصميم تاني اقتراح لحل مشكلة محور الدولفين',
    instagram: 'https://www.instagram.com/amar_kamal_53?igsh=MTNveTh3dXY0NGVubw==',
    facebook: 'https://www.facebook.com/share/1DodBf9xkU/'
  },
  {
    img: 'Img/Team-Project/Tarek-Kamal.jpeg',
    name: 'Tarek Kamal Abaas',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لمحور بنزايون',
    instagram: 'https://www.instagram.com/tarek.1__?utm_source=qr',
    facebook: 'https://www.facebook.com/share/1DqeiJ8xcR/?mibextid=wwXIfr'
  },
  {
    img: 'Img/Team-Project/Ahmed-Adel.jpeg',
    name: 'Ahmed Adel Abdelaziz',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لمحور بنزايون',
    instagram: 'https://www.instagram.com/ahmedadel_47_?igsh=dDZzdjIzenBzZ2dj',
    facebook: 'https://www.facebook.com/share/1J5wRQ41wG/'
  },
  {
    img: 'Img/Team-Project/Omar-Ahmed.jpeg',
    name: 'Omar Ahmed Mohamaden',
    role: 'Geomatics',
    bio: 'عمل جداول الاكسل وتنظيمها',
    instagram: 'https://www.instagram.com/3ma_r_a7med?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebook: 'https://www.facebook.com/share/1CxffGUDV3/'
  },
  {
    img: 'Img/Team-Project/Ahmed-Mahmoud.jpeg',
    name: 'Ahmed Mahmoud Mohamed',
    role: 'Geomatics',
    bio: 'عمل جداول الاكسل وتنظيمها',
    instagram: 'https://www.instagram.com/__waleed__2_1_2?igsh=MXRzemQwM3F6MWI4Nw==',
    facebook: 'https://www.facebook.com/share/14cTzLFkDA4/'
  },
  {
    img: 'Img/Team-Project/ziad-zaza.webp',
    name: 'Ziad Hussni Saied',
    role: 'Geomatics',
    bio: 'تصميم حل مشكلة شارع الجميل ',
    instagram: 'https://www.instagram.com/ziadeltop_?igsh=emV1dnM0em15dXgy',
    facebook: 'https://www.facebook.com/share/1am3inwe33/'
  },
  {
    img: 'Img/Team-Project/moustafa-mahmoud.webp',
    name: 'Moustafa Mahmoud Mustafa',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لمحور الدولفين',
    instagram: 'https://www.instagram.com/mustafasdesigncorner?igsh=MWE3ZzBtem1qcDRzNQ==',
    facebook: 'https://www.facebook.com/profile.php?id=61578335990233'
  },
  {
    img: 'Img/Team-Project/Eslam-Barakat.jpeg',
    name: 'Eslam Barakat Abaas',
    role: 'Geomatics',
    bio: 'تصميم حل مشكلة شارع الجميل ',
    instagram: 'https://www.instagram.com/3slam_barakat?igsh=MmVjOHp1cGhkOWVk',
    facebook: 'https://www.facebook.com/share/p/1GouauMf5u/'
  },
  {
    img: 'Img/Team-Project/Ahmed-Mahana.jpeg',
    name: 'Ahmed Mahana Ahmed',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لشارع 23 يوليو',
    instagram: 'https://www.instagram.com/ahmed_mahna_?igsh=cG05Ynp2YmRvMDQ1&utm_source=qr',
    facebook: 'https://www.facebook.com/share/189pSNyKeu/?mibextid=wwXIfr'
  },
  {
    img: 'Img/Team-Project/Hamdan.jpeg',
    name: 'Hamdan Mohamed Hamdan',
    role: 'Geomatics',
    bio: 'ادخال الحصر المروري علي برنامج Infra Works',
    instagram: 'https://www.instagram.com/hamdanhamdan724?igsh=bTdvZzhkYmJqa3Rv&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1Ci21PQAiC/?mibextid=wwXIfr'
  },
  {
    img: 'Img/Team-Project/Basha-Refa3y.jpeg',
    name: 'Basha Refa3y Basha',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لشارع الجميل',
    instagram: 'https://www.instagram.com/basharefay1?igsh=dWUxdXk5encweWk0',
    facebook: 'https://www.facebook.com/basha.refay'
  },
  {
    img: 'Img/Team-Project/Beshoy.jpeg',
    name: 'Beshoy Aiad Ishaak',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لطريق الموقف',
    instagram: 'https://www.instagram.com/beshoy.hany.3192/?utm_source=ig_web_button_share_sheet',
    facebook: 'https://www.facebook.com/share/18by4L5whL/'
  },
  {
    img: 'Img/Team-Project/Mohamed-Sayed.jpeg',
    name: 'Mohamed Elsayed Abdelraheem',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لشارع 23 يوليو',
    instagram: 'https://www.instagram.com/_muhammed_elsayed_?igsh=MTloZWx1cmt4aDMxYw==',
    facebook: 'https://www.facebook.com/share/1BKHtKxLgL/'
  },
  {
    img: 'Img/Team-Project/Mohamed-Kasem.jpeg',
    name: 'Mohamed Kasem Mohamed',
    role: 'Geomatics',
    bio: 'ادخال الحصر المروري علي برنامج Infra Works',
    instagram: 'https://www.instagram.com/mo_kassem_1907?igsh=MWJua25tcTgzNHlybw%3D%3D&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1adjQbu2rA/?mibextid=wwXIfr'
  },
  {
    img: 'Img/Team-Project/Mostafa-Kasem.jpeg',
    name: 'Mostafa Kasem Mohamed',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لشارع مدينة العمال',
    instagram: 'https://www.instagram.com/mosta_fakaseem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebook: 'https://www.facebook.com/share/17ytaV1Mnx/'
  },
  {
    img: 'Img/Team-Project/Hamed-Mohamed.jpeg',
    name: 'Hamed Mohamed Hamed',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لشارع مدينة العمال',
    instagram: 'https://www.instagram.com/algeneralhamed?igsh=MjBneGJuNmM4ZnB2',
    facebook: 'https://www.facebook.com/share/1HMq4DkJGC/'
  },
  {
    img: 'Img/Team-Project/Abdllah-Mohamed.jpeg',
    name: 'Abdallah Mohamed Badwy',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لشارع الجميل',
    instagram: 'https://www.instagram.com/alomdah_204?igsh=dTd3dXowM2VnM3M4',
    facebook: 'https://www.facebook.com/share/1JZtFADW5D/'
  },
  {
    img: 'Img/Team-Project/Mosad.jpeg',
    name: 'Mosad Hessien Ibrahim',
    role: 'Geomatics',
    bio: 'تصميم الوضع الحالي لطريق الموقف',
    instagram: 'https://www.instagram.com/mosaad_hussien55?igsh=MWp6YmpqZ3BkOGN4Mg==',
    facebook: 'https://www.facebook.com/share/1JCxYSwuU1/'
  },

];

/* ============================================================
   CONFIG — التوقيتات بالميلي ثانية وإعدادات عامة
============================================================ */
const CFG = {
  introSpeed: 1.5,   // سرعة الشريط في الـ intro
  normalSpeed: 0.6,   // سرعة الشريط العادية
  selectHold: 500,   // انتظار بعد الـ highlight قبل الـ blur
  blurDelay: 300,   // انتظار بعد تطبيق الـ blur
  rotateDur: 1100,  // مدة الـ rotateY من الجنب
  scaleDur: 700,   // مدة الـ scale من 0 لـ 1
  zoomDur: 450,   // مدة الـ zoom بعد الـ scale
  zoomAmount: 1.22,  // مقدار التكبير النهائي
  readBioDur: 6000,  // مدة عرض البيانات (progress bar)
  hideDelay: 350,   // انتظار بعد إخفاء البيو
  afterHide: 500,   // انتظار بعد إخفاء الكارت
  betweenItems: 700,   // انتظار بين كل صورة والتالية
};

/* ============================================================
   DOM REFERENCES
============================================================ */
const track = document.getElementById('stripTrack');
const stripSection = document.getElementById('stripSection');
const featureWrap = document.getElementById('featureWrap');
const featImgBox = document.getElementById('featImgBox');
const featImg = document.getElementById('featImg');
const featName = document.getElementById('featName');
const featRole = document.getElementById('featRole');
const featText = document.getElementById('featText');
const featBio = document.getElementById('featBio');
const glow = document.getElementById('glow');
const progFill = document.getElementById('progFill');
const phaseLbl = document.getElementById('phaseLbl');

/* ============================================================
   MODAL
============================================================ */
function openModal(item) {
  document.getElementById('modalImg').src = item.img;
  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalRole').textContent = item.role;
  document.getElementById('modalBio').textContent = item.bio;
  document.getElementById('modalInsta').href = item.instagram;
  document.getElementById('modalFb').href = item.facebook;
  document.getElementById('memberModal').classList.add('open');
}

function closeModal() {
  document.getElementById('memberModal').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   BUILD TEAM PANEL
============================================================ */
function buildTeamPanel() {
  const panel = document.getElementById('teamPanel');
  if (!panel) return;
  panel.innerHTML = '';
  ITEMS.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="team-avatar" title="اضغط لعرض التفاصيل" />
      <div class="team-info">
        <span class="team-name">${item.name}</span>
        <div class="team-socials">
          <a href="${item.instagram}" target="_blank" class="soc-btn insta" title="Instagram">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="${item.facebook}" target="_blank" class="soc-btn fb" title="Facebook">
            <i class="bx bxl-facebook-circle"></i>
          </a>
        </div>
      </div>
    `;
    // click on avatar → open modal
    card.querySelector('.team-avatar').addEventListener('click', () => openModal(item));
    panel.appendChild(card);
  });
}
buildTeamPanel();

/* ============================================================
   CUSTOM SCROLLBAR — يتحرك مع الـ scroll
============================================================ */
(function initCustomScrollbar() {
  const panel = document.getElementById('teamPanel');
  const thumb = document.getElementById('scrollThumb');
  // const track = document.getElementById('customScrollbar');
  if (!panel || !thumb || !track) return;

  const TRACK_H = 380; // نفس ارتفاع الـ panel

  function updateThumb() {
    const ratio = panel.clientHeight / panel.scrollHeight;
    const thumbH = Math.max(ratio * TRACK_H, 36);
    const scrollable = panel.scrollHeight - panel.clientHeight;
    const scrolled = scrollable > 0 ? panel.scrollTop / scrollable : 0;
    const maxTop = TRACK_H - thumbH;

    thumb.style.height = thumbH + 'px';
    thumb.style.top = (scrolled * maxTop) + 'px';
  }

  /* دايمًا ظاهر */
  thumb.style.opacity = '1';
  thumb.style.transition = 'top 0.1s linear, height 0.1s';

  panel.addEventListener('scroll', updateThumb);

  /* drag */
  let dragging = false, startY = 0, startTop = 0;
  thumb.addEventListener('mousedown', e => {
    dragging = true; startY = e.clientY; startTop = panel.scrollTop;
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const ratio = panel.clientHeight / panel.scrollHeight;
    const thumbH = Math.max(ratio * TRACK_H, 36);
    const maxTop = TRACK_H - thumbH;
    const dy = e.clientY - startY;
    const scrollable = panel.scrollHeight - panel.clientHeight;
    panel.scrollTop = startTop + (dy / maxTop) * scrollable;
  });
  document.addEventListener('mouseup', () => { dragging = false; });

  updateThumb();
})();

/* ============================================================
   BUILD INFINITE STRIP — 5 نسخ عشان الـ loop يبان سلس
============================================================ */
const COPIES = 5;
const CARD_W = 74 + 14;               // عرض الكارت + الـ gap
const loopW = CARD_W * ITEMS.length; // عرض نسخة واحدة كاملة
let allCards = [];

for (let c = 0; c < COPIES; c++) {
  ITEMS.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'strip-card';
    card.dataset.idx = i;
    card.innerHTML = `<img src="${item.img}" alt="${item.name}"/><span class="idx">${i + 1}</span>`;
    track.appendChild(card);
    allCards.push(card);
  });
}

/* ============================================================
   INFINITE SCROLL
   بنستخدم left بدل transform عشان transform محجوز
   لـ translateY(-50%) للتوسيط الرأسي في الـ CSS
============================================================ */
let scrollX = 0;
let paused = false;
let speed = CFG.introSpeed;

(function tick() {
  if (!paused) {
    scrollX += speed;
    if (scrollX >= loopW) scrollX -= loopW;
    track.style.left = (-scrollX) + 'px';
  }
  requestAnimationFrame(tick);
})();

/* ============================================================
   HELPERS
============================================================ */

const wait = ms => new Promise(r => setTimeout(r, ms));
const setPhase = t => phaseLbl.textContent = t;

function highlightCard(idx) {
  allCards.forEach(c =>
    c.classList.toggle('active', parseInt(c.dataset.idx) === idx)
  );
}

function animProg(ms) {
  return new Promise(resolve => {
    progFill.style.width = '0%';
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min(((ts - start) / ms) * 100, 100);
      progFill.style.width = p + '%';
      if (p < 100) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

/* Web Animations API — بتحل مشكلة تعارض CSS transitions */
function animate(el, keyframes, duration, easing) {
  return new Promise(resolve => {
    const anim = el.animate(keyframes, { duration, easing, fill: 'forwards' });
    anim.onfinish = () => { anim.commitStyles(); anim.cancel(); resolve(); };
  });
}

function tweenSpeed(from, to, ms) {
  return new Promise(resolve => {
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / ms, 1);
      speed = from + (to - from) * p;
      if (p < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

/* ============================================================
   INTRO — الشريط يعرض كل الصور قبل الـ animation
============================================================ */
async function introScroll() {
  setPhase('loading...');
  speed = CFG.introSpeed;

  const distPerItem = loopW / ITEMS.length;

  for (let i = 0; i < ITEMS.length; i++) {
    const target = (distPerItem * i + distPerItem * 0.4) % loopW;
    await new Promise(resolve => {
      function check() {
        const pos = scrollX % loopW;
        const diff = (target - pos + loopW) % loopW;
        if (diff < 8) resolve();
        else requestAnimationFrame(check);
      }
      requestAnimationFrame(check);
    });
    highlightCard(i);
    await wait(260);
    highlightCard(-1);
  }

  await tweenSpeed(CFG.introSpeed, CFG.normalSpeed, 600);
  setPhase('');
  await wait(400);
}

/* ============================================================
   MAIN SEQUENCE — بتتشغل لكل صورة بالترتيب
============================================================ */
async function runItem(idx) {
  const item = ITEMS[idx];

  /* 1. Highlight */
  highlightCard(idx);
  setPhase('selecting...');
  await wait(CFG.selectHold);

  /* 2. Blur + pause */
  paused = true;
  stripSection.classList.add('blurred');
  await wait(CFG.blurDelay);

  /* 3. Reset + load */
  featImg.src = item.img;
  featName.textContent = item.name;
  featRole.textContent = item.role;
  featText.textContent = item.bio;

  featBio.classList.remove('in');
  featImgBox.style.cssText = '';
  featImgBox.style.transform = 'rotateY(0deg) scale(0)';

  featureWrap.classList.add('visible');
  glow.classList.add('on');
  await wait(50);

  /* 4. ROTATE من الجنب */
  setPhase('rotating...');
  await animate(featImgBox,
    [{ transform: 'rotateY(0deg) scale(0.5)' }, { transform: 'rotateY(360deg) scale(0.5)' }],
    CFG.rotateDur, 'cubic-bezier(0.4,0,0.2,1)'
  );

  /* 5. SCALE من 0 لـ 1 */
  setPhase('scaling...');
  await animate(featImgBox,
    [{ transform: 'rotateY(360deg) scale(0.5)' }, { transform: 'rotateY(360deg) scale(1)' }],
    CFG.scaleDur, 'cubic-bezier(0.175,0.885,0.32,1.275)'
  );

  /* 6. ZOOM بسيط عشان الصورة تظهر أكتر */
  await animate(featImgBox,
    [
      { transform: `rotateY(360deg) scale(1)` },
      { transform: `rotateY(360deg) scale(${CFG.zoomAmount})` }
    ],
    CFG.zoomDur, 'cubic-bezier(0.25,0.46,0.45,0.94)'
  );

  /* 7. Bio تظهر */
  setPhase('');
  featBio.classList.add('in');
  await animProg(CFG.readBioDur);

  /* 8. Hide */
  setPhase('returning...');
  featBio.classList.remove('in');
  await wait(CFG.hideDelay);
  featureWrap.classList.remove('visible');
  glow.classList.remove('on');
  featImgBox.style.transform = 'rotateY(0deg) scale(0)';
  await wait(CFG.afterHide);

  /* 9. Unblur + resume */
  stripSection.classList.remove('blurred');
  paused = false;
  highlightCard(-1);
  setPhase('');
  await wait(CFG.betweenItems);
}


/* ============================================================
   START
============================================================ */
async function main() {
  await introScroll();
  let i = 0;
  while (true) { await runItem(i); i = (i + 1) % ITEMS.length; }
}
// end slider//
/* ============================================================
   DYNAMIC MODAL MIND-MAP ENGINE WITH BACKDROP BLUR
============================================================ */
/* ============================================================
   بيانات كل محور — عدّل هنا بياناتك الخاصة لكل مشروع
   كل محور فيه 8 مربعات + عنوان رئيسي + subtitle للمربع الأول
============================================================ */
const PROJECT_DATA = {

  /* ── 1. المحطة والجميل ── */
  1: {
    mainTitle: "محور: المحطة ",
    // mainSub: "رفع مساحي وتصميم هندسي للمحور",

    p1_title: "مصر ( محافظة قنا)",
    p1_sub: "اسم المحور : محور المحطة ",
    p1_desc: "الامتداد : من المحطة حتي نهاية شارع الجميل \n تاريخ الانشاء : قديم ويرجع الي توسعات مدينة قنا خلال النصف الثاني من القرن العشرين ، مع تنفيذ اعمال تطوير ورفع كفاءة حديثة خلال 2024-2025 م .",

    p2_title: "الطبقات",
    p2_desc: "1- الطبقة السطحية (Surface Course) \n 2- طبقة الرصف الاسفلتية (Binder Course) \n 3- الطبقة القاعدية (Base) \n 4- الطبقة تحت القاعدية (Subbase) \n نوع الرصف : اسفلت  ",

    p3_title: "تفاصيل اخري للطريق",
    p3_desc: "الوظيفة : محور تجاري وخدمي رئيسي يربط محطة السكة الحديد بقلب المدينة \n نوع المنطقة : تجارية وادارية عالية الكثافة \n السرعة التصميمية : 40-50 كم/ساعة",

    p4_title: "طول وعرض المحور",
    p4_desc: "طول المحور: ~720 متر\nعرض الكلي: 22 متر\nعدد الحارات: 4 حارات (2 في كل اتجاه)\nعرض الحارة: 3.75 متر",

    p5_title: "السعة المرورية",
    p5_desc: "السعة النظرية للحارة: 1800 مركبة/ساعة\nالسعة الكلية: ~7200 مركبة/ساعة\nالسعة التشغيلية الفعلية: 4000–5500 مركبة/ساعة",

    p6_title: "إحصاءات القطاع",
    p6_desc: "نسبة الحركة التجارية علي جانبي المحور : 70% \n نسبة الاستخدام الاداري والخدمي : 20% \n نسبة الاستخدام السكني : 10% \n نسبة الخدمات والتأثيث الحضري : 10%",

    p7_title: "الاحصاءات المرورية ",
    p7_desc: "نسبة المساحة المرورية من اجمالي عرض الطريق : 65% \n الكفاءة المرورية : 80% \n نسبة الامان المروري : 90% \n نسبة اشغال الطريق وقت الذروة : 85% \n نسبة اشغال الطريق خارج الذروة : 45% \n نسبة المركبات الخاصة من حجم المرور : 55% \n نسبة سيارات الاجرة والميكروباص : 25% \n نسبة الدراجات النارية : 15% \n نسبة الشاحنات ومركبات النقل : 5%",

    p8_title: "التوصيات والاقتراحات",
    p8_desc: "1- منع الانتظار العشوائي على جانبي الطريق، خاصة أمام المحلات التجارية والمداخل الرئيسية للمحور. \n 2- تخصيص أماكن انتظار منظمة للسيارات وسيارات الأجرة بعيدًا عن حرم الطريق الرئيسي. \n 3- تكثيف التواجد المروري خلال الفترات الصباحية والمسائية لتنظيم حركة المركبات والمشاة. \n 4- إنشاء معابر مشاة آمنة للحد من العبور العشوائي الذي يسبب تباطؤ الحركة المرورية. \n 5- منع إشغالات الطريق الناتجة عن الباعة الجائلين أو التعديات على الأرصفة وحرم الطريق. \n 6- تطوير وسائل النقل العام وتشجيع استخدامها لتقليل الاعتماد على السيارات الخاصة. \n 7- توسعة الأرصفة وتنظيم حركة المشاة بما يقلل من تداخلهم مع حركة المركبات. \n 8- استخدام أنظمة النقل الذكية مثل كاميرات المراقبة ولوحات الإرشاد الإلكترونية لمتابعة الكثافات المرورية. \n 9- إجراء صيانة دورية للطريق لضمان سلامة سطح الرصف وعدم ظهور حفر أو تشققات تؤثر على انسيابية الحركة.",
  },

  /* ── 2. الجميل وبنزيون ── */
  2: {
    mainTitle: "محور: 23 يوليو",
    // mainSub: "رفع مساحي وتصميم هندسي للمحور",

    p1_title: "مصر (محافظة قنا)",
    p1_sub: "اسم المحور : 23 يوليو",
    p1_desc: "امتداده : بداية من بنزايون حتي شارع 23 يوليو \n تاريخ الانشاء : يعد شارع 23 يوليو من الشوارع الرئيسية داخل مدينة قنا، وقد ارتبط نموه بالتوسع العمراني والتجاري للمدينة خلال العقود الأخيرة، ويؤدي دورًا مهمًا في الربط بين المنطقة التجارية المركزية وعدد من المحاور والشوارع الرئيسية الأخرى، مما يجعله من أكثر الشوارع حيوية داخل المدينة.",

    p2_title: "الطبقات",
    p2_desc: "1- الطبقة السطحية (Surface Course) \n 2- طبقة الرصف الاسفلتية (Binder Course) \n 3- الطبقة القاعدية (Base) \n 4- الطبقة تحت القاعدية (Subbase) \n نوع الرصف : اسفلت  ",


    p3_title: "تفاصيل اخري للطريق",
    p3_desc: "الوظيفة : محور تجاري وخدمي و اداري  \n نوع المنطقة : تجارية وادارية وخدمية عالية الكثافة \n السرعة التصميمية : 40-50 كم/ساعة",

    p4_title: "طول وعرض المحور",
    p4_desc: "طول المحور: حوالي 1.1-1.4 كم \n متوسط العرض : 18-22 متر \n عدد الحارات: 4 حارات \n عرض الحارة : 3.5 متر",

    p5_title: "السعة المرورية",
    p5_desc: "السعة النظرية للحارة: 1800 مركبة/ساعة\nالسعة الكلية: ~7200 مركبة/ساعة\n السعة التشغيلية الفعلية : 4500-6000 مركبة/ساعة",

    p6_title: "إحصاءات القطاع",
    p6_desc: "نسبة الاستخدام التجاري : 60% \n نسبة الاستخدام الاداري والخدمي : 25% \n الاستخدام السكني : 15% \n نسبة الجاذبية التجارية : 92% ",

    p7_title: "الاحصاءات المرورية",
    p7_desc: "نسبة المساحة المرورية من اجمالي عرض الطريق : 68% \n الكفاءة المرورية : 85% \n نسبة الامان المروري : 88% \n نسبة اشغال الطريق وقت الذروة 80% \n نسبة اشغال الطريق خارج الذروة : 40% \n نسبة المركبات الخاصة : 60% \n نسبة سيارات الاجرة والميكروباص : 20% \n نسبة الدراجات النارية : 15% \n نسبة الشاحنات ومركبات النقل : 5% ",

    p8_title: "التوصيات والاقتراحات",
    p8_desc: "1- تنظيم أماكن الانتظار. \n 2- تحسين الإشارات المرورية. \n 3- منع الإشغالات والتعديات على الأرصفة. \n 4- زيادة معابر المشاة الآمنة. \n 5- تعزيز الرقابة المرورية خلال ساعات الذروة. \n 6- تطوير وسائل النقل الجماعي. ",
  },

  /* ── 3. بنزايون ومدينة العمال ── */
  3: {
    mainTitle: "محور: مستشفي الهلال",
    mainSub: "رفع مساحي وتصميم هندسي للمحور",

    p1_title: "مصر ( محافظة قنا)",
    p1_sub: "اسم المحور : محور مستشفي الهلال",
    p1_desc: "الامتداد : من بنزايون حتي مستشفي الهلال \n تاريخ الانشاء : النصف الثاني من القرن العشرين .",

    p2_title: "الطبقات",
    p2_desc: "1- الطبقة السطحية (Surface Course) \n 2- طبقة الرصف الاسفلتية (Binder Course) \n 3- الطبقة القاعدية (Base) \n 4- الطبقة تحت القاعدية (Subbase) \n نوع الرصف : اسفلت  ",

    p3_title: "تفاصيل اخري للطريق",
    p3_desc: "الوظيفة : محور خدمي وتجاري وصحي \n نوع المنطقة : خدمي - تجاري - صحي \n السرعة التصميمية : 40 كم/ساعة",

    p4_title: "طول وعرض المحور",
    p4_desc: "طول المحور: حوالي 0.9-1.2 كم \n متوسط العرض : 16- 20 متر \n عدد الحارات: 4 حارات (2 في كل اتجاه) \n عرض الحارة: 3.5 متر ",

    p5_title: "السعة المرورية",
    p5_desc: "السعة النظرية للحارة: 7200 مركبة/ساعة\n السعة التشغيلية الفعلية: 5000 مركبة/ساعة",

    p6_title: "إحصاءات القطاع",
    p6_desc: "نسبة الاستخدام التجاري : 30% \n نسبة الاستخدام الخدمي : 45% \n نسبة الاستخدام الاداري : 10% \n نسبة الاستخدام السكني : 15%",

    p7_title: "الاحصاءات المرورية ",
    p7_desc: "نسبة المساحة المرورية من اجمالي عرض الطريق : 65% \n الكفاءة المرورية : 85% \n نسبة الامان المروري : 90% \n نسبة اشغال الطريق وقت الذروة : 75% \n نسبة اشغال الطريق خارج الذروة : 35% \n نسبة المركبات الخاصة من حجم المرور : 50% \n نسبة سيارات الاجرة والميكروباص : 30% \n نسبة الدراجات النارية : 15% \n نسبة الشاحنات ومركبات النقل : 5%",

    p8_title: "التوصيات والاقتراحات",
    p8_desc: "1- تنظيم أماكن انتظار السيارات أمام المستشفى. \n 2- تخصيص أماكن لعبور المشاة. \n 3- منع الوقوف العشوائي للمركبات. \n 4- تحسين اللوحات الإرشادية والعلامات المرورية. \n 5- زيادة الرقابة المرورية في أوقات الذروة. ",
  },


  /* ── 4. الدولفين وطريق الموقف ── */
  4: {
    mainTitle: "محور: الدولفين وطريق الموقف",
    // mainSub: "خارطة تفاصيل المشروع",

    p1_title: "مصر ( محافظة قنا)",
    p1_sub: "اسم المحور : محور الموقف",
    p1_desc: "الامتداد : من ميدان الدولفين حتي طريق الموقف \n تاريخ الانشاء : يرجع الي توسعات مدينة قنا خلال النصف الثاني من القرن العشرين .",

    p2_title: "الطبقات",
    p2_desc: "1- الطبقة السطحية (Surface Course) \n 2- طبقة الرصف الاسفلتية (Binder Course) \n 3- الطبقة القاعدية (Base) \n 4- الطبقة تحت القاعدية (Subbase) \n نوع الرصف : اسفلت  ",

    p3_title: "تفاصيل اخري للطريق",
    p3_desc: "الوظيفة : محور خدمي وتجاري وللنقل \n نوع المنطقة : خدمية - تجارية - نقل \n السرعة التصميمية : 50 كم/ساعة",

    p4_title: "طول وعرض المحور",
    p4_desc: "طول المحور: 1.3-1.7 كم\n متوسط العرض : 20-24 متر \nعدد الحارات: 4 حارات (2 في كل اتجاه) \n عرض الحارة: 3.5 متر",

    p5_title: "السعة المرورية",
    p5_desc: "السعة النظرية للحارة: 1800 مركبة/ساعة\nالسعة الكلية: ~7200 مركبة/ساعة\nالسعة التشغيلية الفعلية: 5800 مركبة/ساعة",

    p6_title: "إحصاءات القطاع",
    p6_desc: "نسبة الحركة التجارية علي جانبي المحور : 50% \n نسبة الاستخدام الخدمي : 35% \n نسبة الاستخدام الاداري : 10% \n نسبة الاستخدام السكني : 5%",

    p7_title: "الاحصاءات المرورية ",
    p7_desc: "نسبة المساحة المرورية من اجمالي عرض الطريق : 70% \n الكفاءة المرورية : 78% \n نسبة الامان المروري : 82% \n نسبة اشغال الطريق وقت الذروة : 90% \n نسبة اشغال الطريق خارج الذروة : 50% \n نسبة المركبات الخاصة من حجم المرور : 45% \n نسبة سيارات الاجرة والميكروباص : 35% \n نسبة الدراجات النارية : 15% \n نسبة الشاحنات ومركبات النقل : 5%",

    p8_title: "التوصيات والاقتراحات",
    p8_desc: "1- تنظيم ساحات الانتظار بالموقف. \n 2- منع الوقوف العشوائي على جانبي الطريق. \n 3- إنشاء معابر مشاة آمنة. \n 4- تحسين الإشارات والعلامات المرورية. \n 5- زيادة الرقابة المرورية في ساعات الذروة. \n 6- تطوير الأرصفة وتحسين حركة المشاة. ",
  },


  /* ── 5. طريق مستشفى العام ── */
  5: {
    mainTitle: "محور: طريق مستشفى العام",
    // mainSub: "المخطط الشامل للتصميم",

    p1_title: "مصر ( محافظة قنا)",
    p1_sub: "اسم المحور : محور مستشفي العام",
    p1_desc: "الامتداد : من ميدان الدولفين حتي مستشفي العام\n تاريخ الانشاء : النصف الثاني من القرن العشرين .",

    p2_title: "الطبقات",
    p2_desc: "1- الطبقة السطحية (Surface Course) \n 2- طبقة الرصف الاسفلتية (Binder Course) \n 3- الطبقة القاعدية (Base) \n 4- الطبقة تحت القاعدية (Subbase) \n نوع الرصف : اسفلت  ",

    p3_title: "تفاصيل اخري للطريق",
    p3_desc: "الوظيفة : محور خدمي وصحي وتجاري \n نوع المنطقة : خدمية - صحية - تجارية \n السرعة التصميمية : 40-50 كم/ساعة",

    p4_title: "طول وعرض المحور",
    p4_desc: "طول المحور: 1-1.4 كم \n متوسط العرض : 18-22 متر \nعدد الحارات: 4 حارات (2 في كل اتجاه) \nعرض الحارة: 3.5 متر",

    p5_title: "السعة المرورية",
    p5_desc: "السعة النظرية للحارة: 1800 مركبة/ساعة\nالسعة الكلية: ~7200 مركبة/ساعة\nالسعة التشغيلية الفعلية: 5400 مركبة/ساعة",

    p6_title: "إحصاءات القطاع",
    p6_desc: "نسبة الاستخدام التجاري : 30% \n نسبة الاستخدام الخدمي : 20% \n نسبة الاستخدام الاداري : 15% \n نسبة الاستخدام السكني : 10%",

    p7_title: "الاحصاءات المرورية ",
    p7_desc: "نسبة المساحة المرورية من اجمالي عرض الطريق : 68% \n الكفاءة المرورية : 84% \n نسبة الامان المروري : 89% \n نسبة اشغال الطريق وقت الذروة : 80% \n نسبة اشغال الطريق خارج الذروة : 40% \n نسبة المركبات الخاصة من حجم المرور : 50% \n نسبة سيارات الاجرة والميكروباص : 30% \n نسبة الدراجات النارية : 15% \n نسبة الشاحنات ومركبات النقل : 5%",

    p8_title: "التوصيات والاقتراحات",
    p8_desc: "1- تنظيم أماكن انتظار السيارات أمام المستشفى. \n 2- إنشاء معابر مشاة آمنة بالقرب من المنشآت الصحية. \n 3- منع الانتظار العشوائي على جانبي الطريق. \n 4- تحسين الإشارات والعلامات المرورية. \n 5- زيادة الرقابة المرورية خلال ساعات الذروة. \n 6- تطوير الأرصفة لتسهيل حركة المشاة وذوي الاحتياجات الخاصة. ",
  },

};

function activateProjectMap(projectIndex) {
  // 1. التقاط مسار الصورة من الكارت العلوي
  const cards = document.querySelectorAll('.top-gallery-card');
  if (!cards[projectIndex - 1]) return;
  const imgSrc = cards[projectIndex - 1].querySelector('img').src;

  // 2. تزويد الصورة المركزية بالرابط المختار
  document.getElementById('centralHubImage').src = imgSrc;

  // 3. جلب بيانات المشروع وملء المربعات الـ 8
  const d = PROJECT_DATA[projectIndex];
  if (!d) return;

  document.getElementById('mainMapTitle').innerText = d.mainTitle;
  document.getElementById('mainMapSubtitle').innerText = d.mainSub;

  document.getElementById('panel-title-1').innerText = d.p1_title;
  document.getElementById('panel-subtitle-1').innerText = d.p1_sub;
  document.getElementById('panel-desc-1').innerText = d.p1_desc;

  document.getElementById('panel-title-2').innerText = d.p2_title;
  document.getElementById('panel-desc-2').innerText = d.p2_desc;

  document.getElementById('panel-title-3').innerText = d.p3_title;
  document.getElementById('panel-desc-3').innerText = d.p3_desc;

  document.getElementById('panel-title-4').innerText = d.p4_title;
  document.getElementById('panel-desc-4').innerText = d.p4_desc;

  document.getElementById('panel-title-5').innerText = d.p5_title;
  document.getElementById('panel-desc-5').innerText = d.p5_desc;

  document.getElementById('panel-title-6').innerText = d.p6_title;
  document.getElementById('panel-desc-6').innerText = d.p6_desc;

  document.getElementById('panel-title-7').innerText = d.p7_title;
  document.getElementById('panel-desc-7').innerText = d.p7_desc;

  document.getElementById('panel-title-8').innerText = d.p8_title;
  document.getElementById('panel-desc-8').innerText = d.p8_desc;

  // 4. إظهار الـ Modal
  document.getElementById('mindmapModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeProjectMap() {
  document.getElementById('mindmapModal').style.display = 'none';
  document.body.style.overflow = ''; // إعادة تفعيل السكرول بعد الإغلاق
}

main();