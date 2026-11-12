(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const $ = (s, scope = document) => scope.querySelector(s);
  const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];
  const storage = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* Private browsing may disable storage. */ } }
  };
  const thai = {
    skip: 'ข้ามไปเนื้อหา', navAbout: 'เกี่ยวกับผม', navWork: 'ผลงาน', navJourney: 'เส้นทาง', navContact: 'ติดต่อ', letsTalk: 'มาคุยกัน',
    heroEyebrow: 'วิศวกรรมคอมพิวเตอร์ × ความคิดสร้างสรรค์', hello: 'สวัสดีครับ ผมชื่อ',
    heroTagline: 'คิดอย่างสร้างสรรค์<br>ลงมือแบบวิศวกร',
    heroDescription: 'ผมเชื่อมโค้ด วงจร และความคิดสร้างสรรค์ เพื่อเปลี่ยนไอเดียที่ซับซ้อนให้เป็นสิ่งที่ใช้งานได้จริง',
    viewWork: 'สำรวจผลงาน', downloadCV: 'ดาวน์โหลดเรซูเม่', humanSide: 'และความเป็นมนุษย์', basedIn: 'กรุงเทพมหานคร ประเทศไทย', scrollExplore: 'เลื่อนเพื่อสำรวจ',
    aboutKicker: 'คนเบื้องหลังโค้ด', aboutHeading: 'หลายโลกที่ต่างกัน<br><span class="dim">หนึ่งความสงสัยใคร่รู้</span>',
    aboutLead: 'เส้นทางสู่วิศวกรรมของผมไม่ได้เป็นเส้นตรง และนั่นคือมุมมองที่ผมมี',
    aboutBody: 'จากวิทยาลัยนาฏศิลป สู่การเรียนสายพาณิชย์ และวิศวกรรมคอมพิวเตอร์ที่มหาวิทยาลัยศรีปทุม ผมนำประสบการณ์ที่หลากหลายมามองโจทย์ทางเทคนิค และชอบพื้นที่ที่การออกแบบมาบรรจบกับเทคโนโลยีที่ใช้งานได้จริง',
    aboutBodyTwo: 'บางวันผมทำระบบฝังตัวหรือโมเดล Computer Vision บางวันออกแบบเว็บ ทดลองเรื่องเสียง หรือเล่าเรื่องผ่านวิดีโอ สิ่งที่เชื่อมทุกอย่างเข้าด้วยกันคือการทำให้ไอเดียเกิดขึ้นจริง',
    meetGithub: 'รู้จักผมผ่าน GitHub', capHardware: 'จากบิตสู่วงจร', capHardwareBody: 'ระบบฝังตัว การออกแบบ PCB และอุปกรณ์เชื่อมต่อที่พาโลกจริงมาพบกับโลกดิจิทัล',
    capAI: 'ให้เครื่องจักรมองเห็น', capAIBody: 'เรียนรู้การฝึกโมเดล Computer Vision และการนำ AI ไปใช้งานบนอุปกรณ์ปลายทาง',
    capSoftware: 'สร้างขึ้นเพื่อผู้ใช้', capSoftwareBody: 'อินเทอร์เฟซที่รองรับหลายหน้าจอ และแอปที่เชื่อมต่อกัน โดยใส่ใจทั้งการใช้งานและความรู้สึก',
    workKicker: 'ความคิดที่จับต้องได้', workHeading: 'ผลงาน<span class="orange">ที่คัดมา</span>', workIntro: 'บางส่วนจากสิ่งที่ผมกำลังสร้าง<br>ตั้งแต่ระบบเชื่อมต่อไปจนถึงประสบการณ์ดิจิทัล',
    filterAll: 'ทั้งหมด', filterSoftware: 'แอปและเว็บ',
    energySummary: 'มองพลังงานในอาคารให้ฉลาดขึ้น ผ่านการจำลองการใช้ไฟ การปรับแต่งด้วย AI และระบบที่อยู่เบื้องหลัง',
    iotSummary: 'จากเซนเซอร์ถึงหน้าจอ ติดตามข้อมูลสภาพแวดล้อมและควบคุมอุปกรณ์ผ่านแอปบนมือถือ',
    chatSummary: 'แอปแชทข้ามแพลตฟอร์ม พร้อมห้องส่วนกลาง ข้อความส่วนตัว สถานะการพิมพ์ และสถานะออนไลน์',
    checkoutSummary: 'ต้นแบบอินเทอร์เฟซที่สำรวจประสบการณ์การชำระเงินด้วยตนเองโดยมี AI ช่วย',
    moreExperiments: 'ยังมีอีกหลายการทดลองให้สำรวจ', allRepositories: 'ดูโปรเจกต์ทั้งหมด',
    journeyKicker: 'เส้นทางที่เชื่อมทุกจุดเข้าด้วยกัน', journeyHeading: 'เรียนรู้เสมอ<br><span class="dim">ลงมือสร้างเสมอ</span>',
    journeyIntro: 'ทุกช่วงของชีวิตเติมบางอย่างให้ช่วงต่อไป ความคิดสร้างสรรค์สอนให้ผมมองต่าง และวิศวกรรมมอบเครื่องมือให้ผมลงมือทำ',
    experienceLabel: 'ประสบการณ์', present: 'ปัจจุบัน', expCreator: 'คอนเทนต์ครีเอเตอร์อิสระ',
    expCreatorBody: 'ทำงานตั้งแต่เขียนสคริปต์ถึงเรนเดอร์สุดท้าย ทั้งโปรดักชันวิดีโอ Premiere Pro และงานวิศวกรรมเสียง',
    expTgrBody: 'ประยุกต์ความรู้ระบบฝังตัวและระบบอัตโนมัติเพื่อแก้โจทย์วิศวกรรมภายใต้เวลาที่จำกัด',
    expWeb: 'นักพัฒนาเว็บไซต์', expWebBody: 'พัฒนาเว็บไซต์ WordPress และธีม ในสภาพแวดล้อมของสตาร์ตอัปขนาดเล็ก',
    expIntern: 'นักศึกษาฝึกงานสนับสนุนงานบริหาร', expInternBody: 'สนับสนุนงานของกรมการพัฒนาชุมชนในหน่วยงานภาครัฐ',
    expMusic: 'นักดนตรีอาชีพ', expMusicBody: 'นักดนตรีอิสระและสมาชิกวง ประสบการณ์ที่วางพื้นฐานด้านการฟัง จังหวะ และการทำงานร่วมกัน',
    educationLabel: 'การศึกษา', universityCourse: 'วิศวกรรมคอมพิวเตอร์', dramaticCollege: 'วิทยาลัยนาฏศิลป',
    toolkitKicker: 'เครื่องมือที่ใช้ลงมือทำ', toolkitHeading: 'เครื่องมือที่เหมาะ<br><span class="dim">กับไอเดียที่ใช่</span>',
    toolCode: 'โค้ดและอินเทอร์เฟซ', toolConnected: 'ข้อมูลและระบบเชื่อมต่อ', toolIntelligence: 'ฮาร์ดแวร์และปัญญาประดิษฐ์', toolCreative: 'งานสร้างสรรค์',
    beyondLabel: 'นอกเหนือจากโค้ด', beyondBody: 'กีตาร์เบส Audio DSP ฟิสิกส์และอวกาศ การศึกษาด้านความปลอดภัย<br>มีสิ่งใหม่ให้สงสัยและเรียนรู้อยู่เสมอ',
    contactKicker: 'สิ่งดี ๆ เริ่มต้นจากบทสนทนา', contactPretitle: 'มีไอเดียในใจอยู่ไหม?',
    contactHeading: 'มาสร้างให้<br>เป็น<em>จริง</em><span aria-hidden="true">↗</span>', connectLinkedin: 'คุยกันบน LinkedIn', copyLine: 'คัดลอก LINE ID', callLabel: 'โทรศัพท์',
    motionOn: 'เปิดโมชั่น', backTop: 'กลับด้านบน', projectHighlights: 'รายละเอียดโปรเจกต์', viewSource: 'ดูซอร์สบน GitHub'
  };
  const english = new Map();
  $$('[data-i18n]').forEach(el => { if (!english.has(el.dataset.i18n)) english.set(el.dataset.i18n, el.innerHTML); });
  let language = storage.get('pham-language') === 'th' ? 'th' : 'en';
  let currentFilter = 'all';
  let currentProject = null;
  let lastProjectTrigger = null;
  const projects = {
    energy: {
      title: 'SPCSSim', category: 'IoT / AI / ENERGY SIMULATION', source: 'https://github.com/maxwellisnothere/SPCSSim',
      tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Linear Regression', 'Recharts'],
      en: { description: 'An educational smart-building energy simulation that compares baseline consumption with AI-optimized operation. It brings occupancy, indoor and outdoor temperature, room controls, and scheduling into one interactive system.', features: ['Real-time energy simulation with baseline and optimized comparisons.', 'An interactive SVG floor plan with room-level device settings.', 'AI power estimates, scheduling, and anomaly or maintenance simulation.', 'Supabase-backed energy logs and simulation state.'] },
      th: { description: 'ระบบจำลองพลังงานอาคารอัจฉริยะเพื่อการศึกษา เปรียบเทียบการใช้ไฟแบบปกติกับการปรับแต่งด้วย AI โดยนำจำนวนผู้ใช้งาน อุณหภูมิ การควบคุมแต่ละห้อง และตารางเวลามาเชื่อมกัน', features: ['จำลองพลังงานแบบเรียลไทม์ เปรียบเทียบ Baseline กับ Optimized', 'แผนผังอาคาร SVG ที่โต้ตอบได้ พร้อมตั้งค่าอุปกรณ์รายห้อง', 'ประมาณการใช้ไฟด้วย AI จัดตาราง และจำลองเหตุขัดข้อง', 'บันทึกข้อมูลพลังงานและสถานะการจำลองผ่าน Supabase'] }
    },
    iot: {
      title: 'Smart IoT Dashboard', category: 'IoT / ENVIRONMENTAL MONITORING', source: 'https://github.com/maxwellisnothere/DashbaordandController',
      tags: ['React Native', 'Expo', 'TypeScript', 'ESP32', 'MQTT', 'HiveMQ'],
      en: { description: 'A mobile dashboard connecting ESP32 environmental sensors with a React Native interface over MQTT. The project explores both reading the physical world and controlling it from a screen.', features: ['Monitoring DHT22 temperature and humidity, plus MQ2 gas and smoke readings.', 'Slider controls for LED brightness, fan speed, and alarm thresholds.', 'MQTT over secure WebSockets using a HiveMQ Cloud broker.', 'ESP32 hardware simulation through Wokwi.'] },
      th: { description: 'แดชบอร์ดมือถือที่เชื่อมเซนเซอร์สภาพแวดล้อมบน ESP32 กับอินเทอร์เฟซ React Native ผ่าน MQTT สำรวจทั้งการอ่านค่าจากโลกจริงและการควบคุมอุปกรณ์จากหน้าจอ', features: ['ติดตามอุณหภูมิและความชื้นจาก DHT22 รวมถึงก๊าซและควันจาก MQ2', 'ควบคุมความสว่าง LED ความเร็วพัดลม และค่าแจ้งเตือนด้วยสไลเดอร์', 'เชื่อมต่อ MQTT ผ่าน WebSockets แบบเข้ารหัสด้วย HiveMQ Cloud', 'จำลองฮาร์ดแวร์ ESP32 ผ่าน Wokwi'] }
    },
    chat: {
      title: 'PHAM Messenger', category: 'MOBILE / CROSS-PLATFORM COMMUNICATION', source: 'https://github.com/maxwellisnothere/Chatmessager',
      tags: ['React Native', 'Expo Router', 'TypeScript', 'MQTT.js', 'HiveMQ'],
      en: { description: 'A real-time messaging application built with Expo Router and MQTT. It uses a publish–subscribe architecture to connect people through a shared lobby and private conversations.', features: ['A public lobby and private direct messages.', 'Typing indicators and online or offline presence.', 'MQTT messaging over WebSockets through HiveMQ Cloud.', 'A shared React Native codebase for mobile and web.'] },
      th: { description: 'แอปส่งข้อความเรียลไทม์ที่พัฒนาด้วย Expo Router และ MQTT ใช้สถาปัตยกรรม Publish–Subscribe เพื่อเชื่อมผู้ใช้ผ่านห้องแชทส่วนกลางและบทสนทนาส่วนตัว', features: ['ห้องแชทส่วนกลางและข้อความส่วนตัว', 'แสดงสถานะกำลังพิมพ์และออนไลน์หรือออฟไลน์', 'ส่งข้อความ MQTT ผ่าน WebSockets ด้วย HiveMQ Cloud', 'ใช้โค้ด React Native ร่วมกันบนมือถือและเว็บ'] }
    },
    checkout: {
      title: 'AI Self-Checkout UI', category: 'INTERFACE / EDUCATIONAL PROTOTYPE', source: 'https://github.com/maxwellisnothere/Ai_Cashier',
      tags: ['TypeScript', 'Interface Design', 'UI Prototype', 'Figma'],
      en: { description: 'A code implementation of an AI self-checkout simulator interface, based on a Figma design. This is an interface prototype, exploring how a checkout flow can present product recognition and payment steps clearly.', features: ['A prototype interface for a self-checkout simulator.', 'A TypeScript codebase implementing a Figma design.', 'An exploration of visual hierarchy and an understandable checkout flow.', 'Presented as a UI prototype rather than a deployed payment or computer-vision system.'] },
      th: { description: 'งานพัฒนาอินเทอร์เฟซจำลองจุดชำระเงินด้วยตนเองจากดีไซน์ Figma เป็น UI Prototype ที่สำรวจการจัดลำดับข้อมูลและขั้นตอนการชำระเงินให้เข้าใจง่าย', features: ['ต้นแบบอินเทอร์เฟซจำลอง Self-Checkout', 'พัฒนาด้วย TypeScript จากแบบบน Figma', 'สำรวจลำดับความสำคัญของข้อมูลและขั้นตอนใช้งาน', 'เป็นต้นแบบ UI ไม่ใช่ระบบชำระเงินจริงหรือระบบ Computer Vision ที่เปิดใช้งานแล้ว'] }
    }
  };

  function translate() {
    root.lang = language;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = language === 'th' ? (thai[key] || english.get(key) || el.innerHTML) : (english.get(key) || el.innerHTML);
    });
    const langButton = $('#language');
    $('.lang-active', langButton).textContent = language.toUpperCase();
    $('.lang-other', langButton).textContent = language === 'th' ? 'EN' : 'TH';
    langButton.setAttribute('aria-label', language === 'th' ? 'Switch language to English' : 'เปลี่ยนภาษาเป็นไทย');
    $('#line-feedback').textContent = '';
    updateProjectCount();
    renderMotionLabel();
    if (currentProject) populateProject(currentProject);
  }
  $('#language').addEventListener('click', () => { language = language === 'en' ? 'th' : 'en'; storage.set('pham-language', language); translate(); });

  const menuToggle = $('#menu-toggle');
  const mobileMenu = $('#mobile-nav');
  function closeMenu() { menuToggle.setAttribute('aria-expanded', 'false'); mobileMenu.hidden = true; menuToggle.setAttribute('aria-label', 'Open navigation'); }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open)); mobileMenu.hidden = !open;
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  $$('a', mobileMenu).forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuToggle.focus(); } });
  window.matchMedia('(min-width:721px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

  function updateProjectCount() {
    const count = $$('.project-card').filter(card => !card.hidden).length;
    $('#work-count').textContent = String(count).padStart(2, '0') + (language === 'th' ? ' โปรเจกต์' : ' PROJECTS');
  }
  $$('.filter').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    $$('.filter').forEach(b => { const selected = b === button; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); });
    $$('.project-card').forEach(card => { card.hidden = currentFilter !== 'all' && card.dataset.category !== currentFilter; if (!card.hidden) card.classList.add('visible'); });
    updateProjectCount();
  }));

  const dialog = $('#project-dialog');
  function populateProject(id) {
    const p = projects[id]; if (!p) return;
    const copy = p[language];
    $('#dialog-title').textContent = p.title;
    $('#dialog-category').textContent = p.category;
    $('#dialog-description').textContent = copy.description;
    $('#dialog-features').replaceChildren(...copy.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
    $('#dialog-tags').replaceChildren(...p.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
    $('#dialog-source').href = p.source;
  }
  $$('[data-open-project]').forEach(trigger => trigger.addEventListener('click', () => {
    currentProject = trigger.dataset.openProject; lastProjectTrigger = trigger; populateProject(currentProject);
    if (typeof dialog.showModal === 'function') dialog.showModal(); else window.open(projects[currentProject].source, '_blank', 'noopener');
  }));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { const r = dialog.getBoundingClientRect(); if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close(); });
  dialog.addEventListener('close', () => { currentProject = null; lastProjectTrigger?.focus(); });

  $('#copy-line').addEventListener('click', async () => {
    const value = 'LASTARDER55'; let copied = false;
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(value); copied = true; } }
    catch { /* Show the ID below when clipboard permission is unavailable. */ }
    $('#line-feedback').textContent = copied ? (language === 'th' ? 'คัดลอกแล้ว: LASTARDER55' : 'Copied: LASTARDER55') : (language === 'th' ? 'LINE ID: LASTARDER55 — เลือกข้อความนี้เพื่อคัดลอก' : 'LINE ID: LASTARDER55 — select this text to copy.');
  });
  function updateClock() { $('#bangkok-time').textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Bangkok', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) + ' ICT'; }
  updateClock(); setInterval(updateClock, 30000);
  $('#year').textContent = new Intl.DateTimeFormat('en', { timeZone: 'Asia/Bangkok', year: 'numeric' }).format(new Date());

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }); }, { threshold: .08 });
    $$('.reveal').forEach(el => observer.observe(el));
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) $$('.desktop-nav a').forEach(a => a.classList.toggle('active', a.hash === '#' + e.target.id)); });
    }, { rootMargin: '-15% 0px -55% 0px' });
    $$('section[id]').forEach(s => navObserver.observe(s));
  } else $$('.reveal').forEach(el => el.classList.add('visible'));

  // Original particle scene. No third-party reference-site scripts are executed.
  const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = storage.get('pham-motion') === 'paused' || (storage.get('pham-motion') !== 'on' && reducedQuery.matches);
  const atmosphere = $('#atmosphere'), orbit = $('#orbit');
  const dustCtx = atmosphere.getContext('2d'), orbitCtx = orbit.getContext('2d');
  let viewportWidth = 0, viewportHeight = 0, orbitWidth = 0, orbitHeight = 0, dpr = 1, raf = 0, lastFrame = 0, simulationTime = 0;
  let orbitVisible = true;
  let seed = 7732266;
  function rand() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
  const dust = Array.from({length: 78}, () => ({x: rand(), y: rand(), radius: .3 + rand() * 1.1, speed: .003 + rand() * .012, phase: rand() * Math.PI * 2, alpha: .10 + rand() * .35}));
  const particles = Array.from({length: 440}, (_, i) => {
    const u = rand() * Math.PI * 2, v = rand() * Math.PI * 2;
    const radius = 1 + .19 * Math.cos(v * 3 + u * 2);
    return {x: radius * Math.cos(u), y: .65 * Math.sin(u), z: .38 * Math.sin(v) + .24 * Math.sin(u * 3), radius: .4 + rand() * 1.4, phase: rand() * Math.PI * 2, bright: i % 19 === 0};
  });
  function resizeCanvases() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    viewportWidth = window.innerWidth; viewportHeight = window.innerHeight;
    atmosphere.width = Math.round(viewportWidth * dpr); atmosphere.height = Math.round(viewportHeight * dpr);
    if (dustCtx) dustCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = orbit.getBoundingClientRect(); orbitWidth = r.width; orbitHeight = r.height;
    orbit.width = Math.max(1, Math.round(r.width * dpr)); orbit.height = Math.max(1, Math.round(r.height * dpr));
    if (orbitCtx) orbitCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawScene(simulationTime);
  }
  function drawDust(t) {
    if (!dustCtx) return;
    dustCtx.clearRect(0, 0, viewportWidth, viewportHeight);
    dust.forEach(p => {
      const x = ((p.x + Math.sin(t * .08 + p.phase) * .018) % 1 + 1) % 1 * viewportWidth;
      const y = ((p.y - t * p.speed * .07) % 1 + 1) % 1 * viewportHeight;
      dustCtx.beginPath(); dustCtx.arc(x, y, p.radius, 0, Math.PI * 2);
      dustCtx.fillStyle = `rgba(255,170,105,${p.alpha * (.6 + .3 * Math.sin(t * .3 + p.phase))})`; dustCtx.fill();
    });
  }
  function drawOrbit(t) {
    if (!orbitCtx || !orbitVisible || !orbitWidth || !orbitHeight) return;
    const c = orbitCtx; c.clearRect(0, 0, orbitWidth, orbitHeight);
    const angle = t * .08, ca = Math.cos(angle), sa = Math.sin(angle), tilt = -.42;
    const scale = orbitWidth * .44;
    const projected = particles.map(p => {
      const x = p.x * ca + p.z * sa, z = -p.x * sa + p.z * ca;
      const yy = p.y * Math.cos(tilt) - z * Math.sin(tilt), zz = p.y * Math.sin(tilt) + z * Math.cos(tilt);
      const perspective = 2.8 / (2.8 - zz);
      return {x: orbitWidth * .5 + x * scale * perspective, y: orbitHeight * .49 + yy * scale * perspective, z: zz, r: p.radius * perspective, alpha: .18 + .55 * (zz + 1) / 2, bright: p.bright, phase: p.phase};
    }).sort((a,b) => a.z - b.z);
    c.globalCompositeOperation = 'lighter';
    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      if (i % 3 === 0) {
        for (let j = i + 1; j < Math.min(i + 7, projected.length); j++) {
          const q = projected[j], distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 55 && distance > 8) {
            c.beginPath(); c.moveTo(p.x,p.y); c.lineTo(q.x,q.y); c.strokeStyle = `rgba(255,116,48,${(1-distance/55)*.13})`; c.lineWidth=.55; c.stroke();
          }
        }
      }
      c.beginPath(); c.arc(p.x,p.y,p.r,0,Math.PI*2); c.fillStyle = `rgba(255,${p.bright?204:124},${p.bright?140:58},${p.alpha*(.8+.2*Math.sin(t+p.phase))})`;
      c.shadowColor = '#ff712b'; c.shadowBlur = p.bright ? 9 : 0; c.fill();
    }
    c.shadowBlur = 0; c.globalCompositeOperation = 'source-over';
  }
  function drawScene(t) { drawDust(t); drawOrbit(t); }
  function animate(timestamp) {
    if (motionPaused || document.hidden) { raf = 0; return; }
    if (!lastFrame) lastFrame = timestamp;
    const elapsed = timestamp - lastFrame;
    if (elapsed >= 32) { simulationTime += Math.min(elapsed, 80) / 1000; lastFrame = timestamp; drawScene(simulationTime); }
    raf = requestAnimationFrame(animate);
  }
  function renderMotionLabel() {
    root.classList.toggle('motion-paused', motionPaused);
    $('#motion-toggle').setAttribute('aria-pressed', String(motionPaused));
    $('#motion-toggle [data-i18n]').textContent = language === 'th' ? (motionPaused ? 'หยุดโมชั่น' : 'เปิดโมชั่น') : (motionPaused ? 'MOTION OFF' : 'MOTION ON');
    $('#motion-toggle').setAttribute('aria-label', language === 'th' ? (motionPaused ? 'เปิดการเคลื่อนไหว' : 'หยุดการเคลื่อนไหว') : (motionPaused ? 'Enable motion' : 'Pause motion'));
  }
  function setMotion(paused) {
    motionPaused = paused; renderMotionLabel();
    if (paused && raf) { cancelAnimationFrame(raf); raf = 0; }
    else if (!paused && !raf && !document.hidden) { lastFrame = 0; raf = requestAnimationFrame(animate); }
    drawScene(simulationTime);
  }
  $('#motion-toggle').addEventListener('click', () => { storage.set('pham-motion', motionPaused ? 'on' : 'paused'); setMotion(!motionPaused); });
  reducedQuery.addEventListener('change', e => { if (!storage.get('pham-motion')) setMotion(e.matches); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && raf) { cancelAnimationFrame(raf); raf=0; } else if (!motionPaused && !raf) { lastFrame=0; raf=requestAnimationFrame(animate); } });
  let resizeTimeout;
  window.addEventListener('resize', () => { clearTimeout(resizeTimeout); resizeTimeout = setTimeout(resizeCanvases, 120); });
  if ('ResizeObserver' in window) new ResizeObserver(resizeCanvases).observe($('.hero-art'));
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { orbitVisible = entries[0].isIntersecting; if (orbitVisible) drawOrbit(simulationTime); }).observe($('.hero-art'));
  const hero = $('.hero');
  hero.addEventListener('pointermove', e => {
    if (motionPaused || e.pointerType !== 'mouse' || window.innerWidth < 721) return;
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--art-x', ((e.clientX - r.left) / r.width - .5) * 12 + 'px');
    hero.style.setProperty('--art-y', ((e.clientY - r.top) / r.height - .5) * 9 + 'px');
  });
  hero.addEventListener('pointerleave', () => { hero.style.setProperty('--art-x','0px'); hero.style.setProperty('--art-y','0px'); });
  translate(); resizeCanvases(); setMotion(motionPaused);
})();
