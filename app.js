/* -------------------------------------------------------------------------- */
/* 1. ASSET DICTIONARY & DESIGN ARTWORK                                       */
/* -------------------------------------------------------------------------- */

const SVG_ASSETS = {
  themeCoverArt: {
    party: `
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="rgba(255, 94, 98, 0.05)"/>
        <g class="float-item-1" style="transform-origin: 80px 100px;">
          <ellipse cx="80" cy="90" rx="20" ry="25" fill="#FF5E62" />
          <polygon points="80,115 76,120 84,120" fill="#FF5E62" />
          <path d="M80,120 Q83,140 77,155" stroke="#FF5E62" stroke-width="1.5" fill="none"/>
        </g>
        <g class="float-item-2" style="transform-origin: 120px 85px;">
          <ellipse cx="120" cy="75" rx="18" ry="23" fill="#FFA6C9" />
          <polygon points="120,98 117,103 123,103" fill="#FFA6C9" />
          <path d="M120,103 Q117,125 125,145" stroke="#FFA6C9" stroke-width="1.5" fill="none"/>
        </g>
        <g class="float-item-3" style="transform-origin: 100px 95px;">
          <ellipse cx="100" cy="85" rx="16" ry="21" fill="#FFD000" />
          <polygon points="100,106 97,110 103,110" fill="#FFD000" />
          <path d="M100,110 Q103,130 96,150" stroke="#FFD000" stroke-width="1.5" fill="none"/>
        </g>
        <path d="M60,40 L62,48 L70,50 L62,52 L60,60 L58,52 L50,50 L58,48 Z" fill="#FFEAA7"/>
        <path d="M140,120 L141.5,124 L146,125 L141.5,126 L140,130 L138.5,126 L134,125 L138.5,124 Z" fill="#FFEAA7"/>
      </svg>
    `,
    elegant: `
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="140" height="140" rx="70" stroke="#C5A059" stroke-width="1" stroke-dasharray="4 2"/>
        <circle cx="100" cy="100" r="62" stroke="#C5A059" stroke-width="1.5"/>
        <g stroke="#C5A059" stroke-width="1.5" stroke-linecap="round" fill="none">
          <path d="M70,120 Q65,95 85,75" />
          <path d="M68,110 Q60,105 62,98" />
          <path d="M71,97 Q64,90 67,84" />
          <path d="M76,86 Q70,78 74,72" />
          <path d="M130,120 Q135,95 115,75" />
          <path d="M132,110 Q140,105 138,98" />
          <path d="M129,97 Q136,90 133,84" />
          <path d="M124,86 Q130,78 126,72" />
          <path d="M100,75 Q96,65 100,55 Q104,65 100,75 Z" fill="#C5A059"/>
        </g>
      </svg>
    `,
    cute: `
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,150 C80,130 50,110 50,85 C50,65 65,50 85,50 C93,50 100,55 100,55 C100,55 107,50 115,50 C135,50 150,65 150,85 C150,110 120,130 100,150 Z" fill="rgba(255, 117, 151, 0.08)"/>
        <g fill="#A77A55">
          <circle cx="75" cy="80" r="14"/>
          <circle cx="125" cy="80" r="14"/>
          <circle cx="75" cy="80" r="8" fill="#FFC0CB"/>
          <circle cx="125" cy="80" r="8" fill="#FFC0CB"/>
          <circle cx="100" cy="100" r="32"/>
        </g>
        <ellipse cx="100" cy="108" rx="12" ry="8" fill="#FFF" />
        <circle cx="100" cy="104" r="3" fill="#2C1A0F" />
        <circle cx="88" cy="98" r="3" fill="#2C1A0F" />
        <circle cx="112" cy="98" r="3" fill="#2C1A0F" />
        <circle cx="80" cy="104" r="5" fill="#FF85A2" opacity="0.6"/>
        <circle cx="120" cy="104" r="5" fill="#FF85A2" opacity="0.6"/>
      </svg>
    `,
    minimal: `
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M100,160 L100,50" />
          <path d="M100,120 Q85,110 75,115" />
          <path d="M100,100 Q115,90 125,95" />
          <path d="M100,80 Q85,70 78,75" />
          <path d="M100,65 Q115,55 120,60" />
          <path d="M75,115 C70,110 72,105 78,107 C84,109 85,112 75,115" fill="#E0E0E0"/>
          <path d="M125,95 C130,90 128,85 122,87 C116,89 115,92 125,95" fill="#E0E0E0"/>
        </g>
      </svg>
    `
  },
  themeInsideLeftArt: {
    party: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,15 L20,70 L80,70 Z" fill="#FFEAA7" opacity="0.9"/>
        <ellipse cx="50" cy="72" rx="30" ry="6" fill="rgba(0,0,0,0.06)"/>
        <circle cx="50" cy="15" r="5" fill="#FF5E62"/>
      </svg>
    `,
    elegant: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="32" stroke="#C5A059" stroke-width="0.8"/>
        <g stroke="#C5A059" stroke-width="1.2" stroke-linecap="round" fill="none">
          <path d="M50,22 Q50,50 30,55" />
          <path d="M50,22 Q50,50 70,55" />
        </g>
        <circle cx="50" cy="22" r="3" fill="#C5A059"/>
      </svg>
    `,
    cute: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,30 C50,30 42,18 30,18 C18,18 10,28 10,42 C10,65 50,85 50,85 C50,85 90,65 90,42 C90,28 82,18 70,18 C58,18 50,30 50,30 Z" fill="#FF85A2" opacity="0.4"/>
      </svg>
    `,
    minimal: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="28" stroke="#1C1C1C" stroke-width="1"/>
        <circle cx="50" cy="50" r="3" fill="#1C1C1C"/>
      </svg>
    `
  },
  stickers: {
    balloon: `<svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="32" rx="20" ry="25" fill="#FF5E62"/><ellipse cx="23" cy="22" rx="6" ry="8" fill="white" opacity="0.4" transform="rotate(-15 23 22)"/><polygon points="30,55 26,60 34,60" fill="#FF5E62"/><path d="M30,60 Q33,70 27,80" stroke="#555" stroke-width="1.5" fill="none"/></svg>`,
    cake: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15,70 L65,70 M40,70 L40,65" stroke="#8b5cf6" stroke-width="3" stroke-linecap="round"/><rect x="20" y="42" width="40" height="23" rx="4" fill="#FFA6C9"/><rect x="26" y="22" width="28" height="20" rx="3" fill="#FFEAA7"/><path d="M26,30 Q33,33 40,30 Q47,33 54,30 L54,22 L26,22 Z" fill="#FFF"/><rect x="33" y="10" width="3" height="12" fill="#55EFC4"/><path d="M34.5,4 C34.5,4 37,8 34.5,10 C32,8 34.5,4 34.5,4Z" fill="#FF7675"/></svg>`,
    candle: `<svg viewBox="0 0 30 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="24" width="8" height="46" rx="2" fill="#74B9FF"/><line x1="15" y1="24" x2="15" y2="16" stroke="#2D3436" stroke-width="2"/><path d="M15,2 C15,2 21,10 15,16 C9,10 15,2 15,2Z" fill="#FFA100"/></svg>`,
    gift: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="22" width="46" height="42" rx="4" fill="#55EFC4"/><rect x="9" y="16" width="52" height="8" rx="2" fill="#00B894"/><rect x="31" y="16" width="8" height="48" fill="#D63031"/><path d="M35,16 C25,12 25,2 35,12 Z" fill="#D63031"/><path d="M35,16 C45,12 45,2 35,12 Z" fill="#D63031"/></svg>`,
    heart: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30,52 C20,44 6,32 6,20 C6,11 13,4 22,4 C27,4 30,8 30,8 C30,8 33,4 38,4 C47,4 54,11 54,20 C54,32 40,44 30,52 Z" fill="#D63031"/></svg>`,
    star: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30,3 L38,19 L56,22 L43,35 L46,53 L30,44 L14,53 L17,35 L4,22 L22,19 Z" fill="#FFEAA7" stroke="#FDCB6E" stroke-width="2" stroke-linejoin="round"/></svg>`,
    sparkles: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30,5 L32.5,22.5 L50,25 L32.5,27.5 L30,45 L27.5,27.5 L10,25 L27.5,22.5 Z" fill="#FFEAA7"/><path d="M15,10 L16,16 L22,17 L16,18 L15,24 L14,18 L8,17 L14,16 Z" fill="#FFF" opacity="0.8"/></svg>`,
    flower: `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="18" r="10" fill="#FFA6C9"/><circle cx="42" cy="25" r="10" fill="#FFA6C9"/><circle cx="37" cy="38" r="10" fill="#FFA6C9"/><circle cx="23" cy="38" r="10" fill="#FFA6C9"/><circle cx="18" cy="25" r="10" fill="#FFA6C9"/><circle cx="30" cy="28" r="8" fill="#FFEAA7" stroke="#FDCB6E" stroke-width="1.5"/></svg>`
  }
};

/* -------------------------------------------------------------------------- */
/* 2. DEFAULT STATE                                                           */
/* -------------------------------------------------------------------------- */

const state = {
  mode: 'builder',
  theme: 'party',
  title: 'Happy Birthday!',
  message: 'Wishing you a wonderful day filled with love, laughter, and magical moments. You deserve the absolute best!',
  sender: 'Sarah',
  activePage: 0, // 0 = Cover, 1 = Inside Opened, 2 = Back Cover
  targetPage: 2, // 0 = Cover, 1 = Inside Left, 2 = Inside Right, 3 = Back Cover
  stickers: [],  // Array of { id, type, x, y, scale, rotate, pageIndex, fileDataUrl }
  customBackgrounds: [null, null, null, null], // base64 images per page
  customBackgroundPositions: [50, 50, 50, 50], // X position percentages (0 - 100)
  spanInsideBg: false, // Span left inside background across both pages
  selectedItemId: null,
  selectedItemType: null, // 'sticker' | 'text'
  textStyles: {
    coverTitle: { size: 32, font: 'Outfit', color: '#ff5e62', align: 'center', weight: 700, bold: true, italic: false, x: 50, y: 25 },
    insideLeftQuote: { size: 15, font: 'Inter', color: '#2d3748', align: 'center', weight: 300, bold: false, italic: true, x: 50, y: 55 },
    insideRightMessage: { size: 28, font: 'Caveat', color: '#2d3748', align: 'left', weight: 400, bold: false, italic: false, x: 50, y: 45 },
    backSender: { size: 32, font: 'Caveat', color: '#2d3748', align: 'center', weight: 700, bold: true, italic: false, x: 50, y: 70 }
  }
};

const THEME_QUOTES = {
  party: `"A birthday is a beautiful beginning — a time for new starts, new goals, and a chance to celebrate the gift of you."`,
  elegant: `"May your day be filled with warm sunshine, soft laughter, and the beautiful music of shared memories."`,
  cute: `"Sending you the biggest hug, the sweetest wishes, and a little bit of magic to brighten up your special day!"`,
  minimal: `"Wishing you a calm, beautiful, and inspiring year ahead."`
};

const THEME_SEALS = {
  party: "HANDCRAFTED WITH JOY",
  elegant: "COLLECTOR EDITION",
  cute: "HANDMADE WITH LOVE",
  minimal: "ARTISAN PRESS"
};

const PRESET_COLORS = [
  '#2d3748', '#ff5e62', '#ff85a2', '#c5a059', '#10b981', 
  '#3b82f6', '#8b5cf6', '#f59e0b', '#000000', '#ffffff'
];

/* -------------------------------------------------------------------------- */
/* 3. DOM CACHE                                                               */
/* -------------------------------------------------------------------------- */

const DOM = {
  app: document.getElementById('app'),
  book: document.getElementById('book-3d'),
  cardWrapper: document.getElementById('card-wrapper'),
  cardShadow: document.getElementById('card-shadow'),
  canvas: document.getElementById('ambient-canvas'),
  
  // Draggable Text Containers & Inner elements
  textElements: {
    coverTitle: {
      wrapper: document.getElementById('text-cover-title'),
      inner: document.getElementById('card-cover-title')
    },
    insideLeftQuote: {
      wrapper: document.getElementById('text-inside-left-quote'),
      inner: document.getElementById('card-inside-quote')
    },
    insideRightMessage: {
      wrapper: document.getElementById('text-inside-right-message'),
      inner: document.getElementById('card-inside-message')
    },
    backSender: {
      wrapper: document.getElementById('text-back-sender'),
      inner: document.getElementById('card-back-sender')
    }
  },
  
  // Page Containers (Canvases)
  pages: [
    document.getElementById('canvas-page-0'),
    document.getElementById('canvas-page-1'),
    document.getElementById('canvas-page-2'),
    document.getElementById('canvas-page-3')
  ],

  // Form Inputs
  inputTitle: document.getElementById('input-title'),
  inputMessage: document.getElementById('input-message'),
  inputSender: document.getElementById('input-sender'),
  
  // Tabs & Panels
  tabButtons: document.querySelectorAll('.tab-btn'),
  tabPanels: document.querySelectorAll('.tab-panel'),
  
  // Upload elements & Crop sliders
  btnCustomSticker: document.getElementById('btn-custom-sticker'),
  stickerFileInput: document.getElementById('sticker-file-input'),
  bgFileInput: document.getElementById('bg-file-input'),
  bgCards: document.querySelectorAll('.bg-upload-card'),
  checkboxSpanBg: document.getElementById('checkbox-span-bg'),
  // Sticker Controls
  stickerControlsPanel: document.getElementById('sticker-controls-panel'),
  stickerScale: document.getElementById('sticker-scale'),
  stickerScaleVal: document.getElementById('sticker-scale-val'),
  stickerRotate: document.getElementById('sticker-rotate'),
  stickerRotateVal: document.getElementById('sticker-rotate-val'),
  btnDeleteSticker: document.getElementById('btn-delete-sticker'),
  
  // Text style sub-panel elements
  textStylesControl: document.getElementById('text-styles-control'),
  styleFontFamily: document.getElementById('style-font-family'),
  styleFontSize: document.getElementById('style-font-size'),
  fontSizeVal: document.getElementById('font-size-val'),
  btnToggleBold: document.getElementById('btn-toggle-bold'),
  btnToggleItalic: document.getElementById('btn-toggle-italic'),
  styleFontWeight: document.getElementById('style-font-weight'),
  fontWeightVal: document.getElementById('font-weight-val'),
  textColorPalette: document.getElementById('text-color-palette'),
  textColorPicker: document.getElementById('text-color-picker'),
  alignBtns: document.querySelectorAll('.align-btn'),
  
  // Mode toggles
  btnModeBuilder: document.getElementById('btn-mode-builder'),
  btnModePreview: document.getElementById('btn-mode-preview'),
  btnExitPreview: document.getElementById('btn-exit-preview'),
  
  // Actions
  themeOptions: document.querySelectorAll('.theme-option'),
  stickerSelectors: document.querySelectorAll('.sticker-selector'),
  btnReset: document.getElementById('btn-reset'),
  
  // Navigation
  btnPrevPage: document.getElementById('btn-prev-page'),
  btnNextPage: document.getElementById('btn-next-page'),
  pageDots: document.querySelectorAll('.page-dot'),
  interactionHint: document.getElementById('interaction-hint'),
  indicatorText: document.querySelector('.indicator-text'),
  activeTargetPageName: document.getElementById('active-target-page-name'),
  selectTargetPage: document.getElementById('select-target-page'),
  pageElementsList: document.getElementById('page-elements-list')
};

const ctx = DOM.canvas.getContext('2d');
let confettiParticles = [];
let ambientParticles = [];

/* -------------------------------------------------------------------------- */
/* 4. REACTIVE STATE SYNC & INITIALIZATION                                    */
/* -------------------------------------------------------------------------- */

function initApp() {
  // Sync inputs
  DOM.inputTitle.value = state.title;
  DOM.inputMessage.value = state.message;
  DOM.inputSender.value = state.sender;

  // Apply default text values
  DOM.textElements.coverTitle.inner.textContent = state.title;
  DOM.textElements.insideRightMessage.inner.textContent = state.message;
  DOM.textElements.backSender.inner.textContent = state.sender;

  // Render Theme & Backgrounds
  updateThemeVisuals();
  applySavedTextStyles();

  // Apply custom backgrounds if loaded
  for (let i = 0; i < 4; i++) {
    applyBackgroundStyles(i);
    syncBackgroundSidebarCard(i);
  }

  // Color bubbles injection in sidebar
  renderColorPalette();

  // Event Listeners setup
  setupEventListeners();

  // Canvas resize and loop
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  startAmbientParticlesLoop();

  // Set default targeted editing page
  setPageState(0); // Initialize at closed page 0
  renderPageElementsList();
}

function updateThemeVisuals() {
  DOM.app.classList.remove('theme-party', 'theme-elegant', 'theme-cute', 'theme-minimal');
  DOM.app.classList.add(`theme-${state.theme}`);

  // Theme artwork intentionally disabled.
  // Keeping original code for future optional theme decorations.
  // document.getElementById('cover-artwork-container').innerHTML = SVG_ASSETS.themeCoverArt[state.theme];
  // document.getElementById('inside-left-art-container').innerHTML = SVG_ASSETS.themeInsideLeftArt[state.theme];

  document.getElementById('cover-artwork-container').innerHTML = "";
  document.getElementById('inside-left-art-container').innerHTML = "";
  
  const sealText = document.querySelector('.seal-text');
  if (sealText) sealText.textContent = THEME_SEALS[state.theme];
  
  const madeWithLove = document.querySelector('.made-with-love');
  if (madeWithLove) madeWithLove.textContent = `Assembled by hand in builder mode`;

  const sigLabel = document.querySelector('.sig-label');
  if (sigLabel) sigLabel.textContent = `Created for you by`;

  // Apply quote only if not customized/edited
  if (DOM.textElements.insideLeftQuote.inner.textContent === THEME_QUOTES.party ||
      DOM.textElements.insideLeftQuote.inner.textContent === THEME_QUOTES.elegant ||
      DOM.textElements.insideLeftQuote.inner.textContent === THEME_QUOTES.cute ||
      DOM.textElements.insideLeftQuote.inner.textContent === THEME_QUOTES.minimal ||
      DOM.textElements.insideLeftQuote.inner.textContent.trim() === "") {
    DOM.textElements.insideLeftQuote.inner.textContent = THEME_QUOTES[state.theme];
  }

  // Update theme sidebar button states
  DOM.themeOptions.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === state.theme);
  });
}

function renderColorPalette() {
  const bubbles = DOM.textColorPalette.querySelectorAll('.color-bubble');
  bubbles.forEach(b => b.remove());

  // Insert presets
  PRESET_COLORS.forEach(color => {
    const bubble = document.createElement('div');
    bubble.classList.add('color-bubble');
    bubble.style.backgroundColor = color;
    bubble.dataset.color = color;
    bubble.addEventListener('click', () => {
      selectTextColor(color);
    });
    DOM.textColorPalette.insertBefore(bubble, DOM.textColorPalette.firstChild);
  });
}

function selectTextColor(color) {
  if (state.selectedItemType === 'text') {
    const key = state.selectedItemId;
    state.textStyles[key].color = color;
    DOM.textElements[key].inner.style.color = color;
    
    // Sync bubbles selected state
    DOM.textColorPalette.querySelectorAll('.color-bubble').forEach(b => {
      b.classList.toggle('active', b.dataset.color === color);
    });
    DOM.textColorPicker.value = color.startsWith('#') ? color : '#000000';
  }
}

function applySavedTextStyles() {
  Object.keys(state.textStyles).forEach(key => {
    const styles = state.textStyles[key];
    const el = DOM.textElements[key].inner;
    const wr = DOM.textElements[key].wrapper;

    // Apply Typography styles
    el.style.fontFamily = styles.font;
    el.style.fontSize = `${styles.size}px`;
    el.style.color = styles.color;
    el.style.textAlign = styles.align;
    el.style.fontWeight = styles.bold ? 'bold' : styles.weight;
    el.style.fontStyle = styles.italic ? 'italic' : 'normal';

    // Position wrapper
    wr.style.left = `${styles.x}%`;
    wr.style.top = `${styles.y}%`;
    wr.style.transform = `translate(-50%, -50%)`;
  });
}

/* -------------------------------------------------------------------------- */
/* 5. BACKGROUND ENGINE (CROPPING & SPANNING LOGIC)                           */
/* -------------------------------------------------------------------------- */

function applyBackgroundStyles(pageIndex) {
  const page = DOM.pages[pageIndex];
  const imgUrl = state.customBackgrounds[pageIndex];
  const cropVal = state.customBackgroundPositions[pageIndex];

  // If spanning is active, Inside Right page mirrors Inside Left page image
  if (state.spanInsideBg && (pageIndex === 1 || pageIndex === 2)) {
    const leftImgUrl = state.customBackgrounds[1];
    const leftCropVal = state.customBackgroundPositions[1];

    if (!leftImgUrl) {
      page.style.backgroundImage = '';
      return;
    }

    page.style.backgroundImage = `url(${leftImgUrl})`;
    page.style.backgroundSize = '200% 100%';
    
    // Left page aligns left half, Right page aligns right half (seamless fold)
    if (pageIndex === 1) {
      page.style.backgroundPosition = `${leftCropVal * 2 - 100}% center`;
    } else {
      page.style.backgroundPosition = `${leftCropVal * 2}% center`;
    }
    return;
  }

  // Normal Background Styling
  if (!imgUrl) {
    page.style.backgroundImage = '';
    return;
  }

  page.style.backgroundImage = `url(${imgUrl})`;
  page.style.backgroundSize = 'cover';
  page.style.backgroundPosition = `${cropVal}% center`;
}

function syncBackgroundSidebarCard(pageIndex) {
  const card = document.querySelector(`.bg-upload-card[data-page-index="${pageIndex}"]`);
  if (!card) return;

  const hasBg = !!state.customBackgrounds[pageIndex];
  card.classList.toggle('has-bg', hasBg);
  card.querySelector('.btn-clear').disabled = !hasBg;

  // Sync crop value slider representation
  const cropVal = state.customBackgroundPositions[pageIndex];
  card.querySelector('.bg-crop-slider').value = cropVal;
  card.querySelector('.crop-val').textContent = `${cropVal}%`;
}

/* -------------------------------------------------------------------------- */
/* 6. MULTI-PAGE TARGET TRACKER                                               */
/* -------------------------------------------------------------------------- */

const PAGE_NAMES = ["Front Cover", "Inside Left Page", "Inside Right Page", "Back Cover"];

const TEXT_LABELS = {
  coverTitle: { name: "Front Title Text", icon: "✍️", pageIndex: 0 },
  insideLeftQuote: { name: "Inside Left Quote", icon: "✍️", pageIndex: 1 },
  insideRightMessage: { name: "Handwritten Message", icon: "✍️", pageIndex: 2 },
  backSender: { name: "Sender Signature", icon: "✍️", pageIndex: 3 }
};

function setTargetPage(pageIndex) {
  state.targetPage = pageIndex;
  
  // Sync glowing frames on canvas
  DOM.pages.forEach((p, idx) => {
    p.classList.toggle('target-active', idx === pageIndex);
  });

  // Sync sidebar text & dropdown
  if (DOM.activeTargetPageName) {
    DOM.activeTargetPageName.textContent = PAGE_NAMES[pageIndex];
  }
  if (DOM.selectTargetPage) {
    DOM.selectTargetPage.value = pageIndex;
  }

  renderPageElementsList();
}

function renderPageElementsList() {
  if (!DOM.pageElementsList) return;
  DOM.pageElementsList.innerHTML = '';

  const target = state.targetPage;
  const items = [];

  // Add matching text block for target page
  Object.keys(TEXT_LABELS).forEach(key => {
    if (TEXT_LABELS[key].pageIndex === target) {
      items.push({
        type: 'text',
        id: key,
        name: TEXT_LABELS[key].name,
        icon: TEXT_LABELS[key].icon
      });
    }
  });

  // Add matching stickers for target page
  state.stickers.forEach(s => {
    if (s.pageIndex === target) {
      const icon = s.type === 'custom' ? '🖼️' : '✨';
      const name = s.type === 'custom' ? 'Custom Sticker' : `Sticker (${s.type})`;
      items.push({
        type: 'sticker',
        id: s.id,
        name,
        icon
      });
    }
  });

  if (items.length === 0) {
    DOM.pageElementsList.innerHTML = `<div class="empty-elements-msg">No elements on ${PAGE_NAMES[target]} yet</div>`;
    return;
  }

  items.forEach(item => {
    const isSelected = state.selectedItemType === item.type && state.selectedItemId === item.id;
    const row = document.createElement('div');
    row.classList.add('element-row');
    if (isSelected) row.classList.add('active');

    row.innerHTML = `
      <span class="element-icon">${item.icon}</span>
      <span class="element-name">${item.name}</span>
      ${item.type === 'sticker' ? `<button class="btn-element-delete" title="Delete Sticker" data-id="${item.id}">🗑️</button>` : ''}
    `;

    row.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-element-delete')) {
        e.stopPropagation();
        removeSticker(item.id);
        return;
      }
      selectItem(item.type, item.id);
    });

    DOM.pageElementsList.appendChild(row);
  });
}

/* -------------------------------------------------------------------------- */
/* 7. EVENT LISTENERS                                                         */
/* -------------------------------------------------------------------------- */

function setupEventListeners() {
  // 1. Text Inputs (Workbench -> Card)
  DOM.inputTitle.addEventListener('input', (e) => {
    state.title = e.target.value;
    DOM.textElements.coverTitle.inner.textContent = state.title;
  });

  DOM.inputMessage.addEventListener('input', (e) => {
    state.message = e.target.value;
    DOM.textElements.insideRightMessage.inner.textContent = state.message;
  });

  DOM.inputSender.addEventListener('input', (e) => {
    state.sender = e.target.value;
    DOM.textElements.backSender.inner.textContent = state.sender;
  });

  // 2. Card Contenteditable Sync (Card -> Workbench Input)
  Object.keys(DOM.textElements).forEach(key => {
    const el = DOM.textElements[key].inner;
    
    el.addEventListener('input', () => {
      if (key === 'coverTitle') {
        state.title = el.textContent;
        DOM.inputTitle.value = state.title;
      } else if (key === 'insideRightMessage') {
        state.message = el.textContent;
        DOM.inputMessage.value = state.message;
      } else if (key === 'backSender') {
        state.sender = el.textContent;
        DOM.inputSender.value = state.sender;
      }
    });

    // Selection click event
    DOM.textElements[key].wrapper.addEventListener('mousedown', (e) => {
      if (state.mode === 'preview') return;
      e.stopPropagation();
      
      const pageIndex = parseInt(DOM.textElements[key].wrapper.closest('.page-content-wrapper').dataset.pageIndex);
      setTargetPage(pageIndex);
      
      selectItem('text', key);
    });

    // Drag event
    bindDraggableMovement(DOM.textElements[key].wrapper, (newX, newY) => {
      state.textStyles[key].x = newX;
      state.textStyles[key].y = newY;
    });
  });

  // 3. Tab Navigation
  DOM.tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.tabButtons.forEach(b => b.classList.remove('active'));
      DOM.tabPanels.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const targetPanel = document.getElementById(`panel-${btn.dataset.tab}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // 4. Theme Selectors
  DOM.themeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      state.theme = opt.dataset.theme;
      updateThemeVisuals();
    });
  });

  // 5. Background Image Upload and Crop Handlers
  DOM.bgCards.forEach(card => {
    const pageIndex = parseInt(card.dataset.pageIndex);
    const uploadBtn = card.querySelector('.btn-upload');
    const clearBtn = card.querySelector('.btn-clear');
    const cropSlider = card.querySelector('.bg-crop-slider');

    uploadBtn.addEventListener('click', () => {
      DOM.bgFileInput.dataset.targetPage = pageIndex;
      DOM.bgFileInput.click();
    });

    clearBtn.addEventListener('click', () => {
      state.customBackgrounds[pageIndex] = null;
      applyBackgroundStyles(pageIndex);
      syncBackgroundSidebarCard(pageIndex);
      
      // If spanning link, clear inside right too
      if (state.spanInsideBg && pageIndex === 1) {
        applyBackgroundStyles(2);
        syncBackgroundSidebarCard(2);
      }
    });

    cropSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      state.customBackgroundPositions[pageIndex] = val;
      card.querySelector('.crop-val').textContent = `${val}%`;

      applyBackgroundStyles(pageIndex);

      // If spanning link, adjust Inside Right too
      if (state.spanInsideBg && pageIndex === 1) {
        applyBackgroundStyles(2);
      }
    });
  });

  DOM.bgFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const pageIndex = parseInt(DOM.bgFileInput.dataset.targetPage);
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      state.customBackgrounds[pageIndex] = dataUrl;
      
      applyBackgroundStyles(pageIndex);
      syncBackgroundSidebarCard(pageIndex);

      // If spanning link, mirror on Inside Right
      if (state.spanInsideBg && pageIndex === 1) {
        applyBackgroundStyles(2);
        syncBackgroundSidebarCard(2);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });

  // 6. Linked Inside Background checkbox
  DOM.checkboxSpanBg.addEventListener('change', (e) => {
    state.spanInsideBg = e.target.checked;
    
    // Toggle active class on grid (for layout styling)
    const grid = document.querySelector('.bg-upload-grid');
    grid.classList.toggle('span-bg-active', state.spanInsideBg);
    
    // Toggle Inside Left Label name representation
    document.getElementById('label-inside-left-bg').textContent = state.spanInsideBg ? "Inside Spread" : "Inside Left";

    // Refresh inside left and right background rendering
    applyBackgroundStyles(1);
    applyBackgroundStyles(2);
    syncBackgroundSidebarCard(1);
    syncBackgroundSidebarCard(2);
  });

  // 7. Custom Sticker Upload handler
  DOM.btnCustomSticker.addEventListener('click', () => {
    DOM.stickerFileInput.click();
  });

  DOM.stickerFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      addCustomSticker(dataUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });

  // 8. Preset Stickers Add
  DOM.stickerSelectors.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.sticker;
      addPresetSticker(type);
    });
  });

  // 9. Navigation Controls
  DOM.btnPrevPage.addEventListener('click', () => {
    if (state.activePage > 0) setPageState(state.activePage - 1);
  });

  DOM.btnNextPage.addEventListener('click', () => {
    if (state.activePage < 2) setPageState(state.activePage + 1);
  });

  DOM.pageDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const pageIndex = parseInt(dot.dataset.page);
      setPageState(pageIndex);
    });
  });

  // 10. Target Page Select Dropdown Listener
  if (DOM.selectTargetPage) {
    DOM.selectTargetPage.addEventListener('change', (e) => {
      const pageIndex = parseInt(e.target.value);
      setTargetPage(pageIndex);

      // Auto-flip book to show target page
      if (pageIndex === 0) setPageState(0);
      else if (pageIndex === 1 || pageIndex === 2) setPageState(1);
      else if (pageIndex === 3) setPageState(2);
    });
  }

  // 11. Canvas clicks in Builder Mode vs Preview Mode
  document.getElementById('page-cover-front').addEventListener('click', (e) => {
    if (state.mode === 'builder') {
      setTargetPage(0);
      return;
    }
    if (state.activePage === 0) setPageState(1);
  });

  document.getElementById('page-inside-left').addEventListener('click', (e) => {
    if (state.mode === 'builder') {
      setTargetPage(1);
      return;
    }
    if (state.activePage === 1) setPageState(0);
  });

  document.getElementById('page-inside-right').addEventListener('click', (e) => {
    if (state.mode === 'builder') {
      setTargetPage(2);
      return;
    }
    if (state.activePage === 1) setPageState(2);
  });

  document.getElementById('page-back-cover').addEventListener('click', (e) => {
    if (state.mode === 'builder') {
      setTargetPage(3);
      return;
    }
    if (state.activePage === 2) setPageState(1);
  });

  // 11. Click canvas background to deselect
  DOM.app.addEventListener('mousedown', (e) => {
    if (state.mode === 'preview') return;
    if (!e.target.closest('.sticker-element') && 
        !e.target.closest('.draggable-text-wrapper') && 
        !e.target.closest('.workbench')) {
      deselectItem();
    }
  });

  // 12. Mode control clicks
  DOM.btnModeBuilder.addEventListener('click', () => setAppMode('builder'));
  DOM.btnModePreview.addEventListener('click', () => setAppMode('preview'));
  DOM.btnExitPreview.addEventListener('click', () => setAppMode('builder'));

  // 13. 3D Hover Tilt & Specular Shine Shifting
  const persContainer = document.querySelector('.card-perspective-container');
  persContainer.addEventListener('mousemove', handleCardTilt);
  persContainer.addEventListener('mouseleave', resetCardTilt);

  persContainer.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      handleCardTilt(e.touches[0]);
    }
  }, { passive: true });
  persContainer.addEventListener('touchend', resetCardTilt);

  // 14. Text Format and Style inputs
  DOM.styleFontFamily.addEventListener('change', (e) => {
    if (state.selectedItemType === 'text') {
      const key = state.selectedItemId;
      state.textStyles[key].font = e.target.value;
      DOM.textElements[key].inner.style.fontFamily = e.target.value;
    }
  });

  DOM.styleFontSize.addEventListener('input', (e) => {
    if (state.selectedItemType === 'text') {
      const key = state.selectedItemId;
      const size = parseInt(e.target.value);
      state.textStyles[key].size = size;
      DOM.textElements[key].inner.style.fontSize = `${size}px`;
      DOM.fontSizeVal.textContent = `${size}px`;
    }
  });

  DOM.btnToggleBold.addEventListener('click', () => {
    if (state.selectedItemType === 'text') {
      const key = state.selectedItemId;
      state.textStyles[key].bold = !state.textStyles[key].bold;
      DOM.btnToggleBold.classList.toggle('active', state.textStyles[key].bold);
      
      DOM.textElements[key].inner.style.fontWeight = state.textStyles[key].bold ? 'bold' : state.textStyles[key].weight;
    }
  });

  DOM.btnToggleItalic.addEventListener('click', () => {
    if (state.selectedItemType === 'text') {
      const key = state.selectedItemId;
      state.textStyles[key].italic = !state.textStyles[key].italic;
      DOM.btnToggleItalic.classList.toggle('active', state.textStyles[key].italic);
      
      DOM.textElements[key].inner.style.fontStyle = state.textStyles[key].italic ? 'italic' : 'normal';
    }
  });

  DOM.styleFontWeight.addEventListener('input', (e) => {
    if (state.selectedItemType === 'text') {
      const key = state.selectedItemId;
      const weight = parseInt(e.target.value);
      state.textStyles[key].weight = weight;
      DOM.fontWeightVal.textContent = weight;
      
      // Override bold toggle to match slider input
      state.textStyles[key].bold = false;
      DOM.btnToggleBold.classList.remove('active');
      DOM.textElements[key].inner.style.fontWeight = weight;
    }
  });

  DOM.textColorPicker.addEventListener('input', (e) => {
    selectTextColor(e.target.value);
  });

  DOM.alignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.selectedItemType === 'text') {
        const key = state.selectedItemId;
        const align = btn.dataset.align;
        state.textStyles[key].align = align;
        DOM.textElements[key].inner.style.textAlign = align;

        DOM.alignBtns.forEach(b => b.classList.toggle('active', b.dataset.align === align));
      }
    });
  });

  // 15. Sticker controls (Sidebar)
  DOM.stickerScale.addEventListener('input', (e) => {
    if (state.selectedItemType === 'sticker') {
      const val = parseFloat(e.target.value);
      DOM.stickerScaleVal.textContent = val.toFixed(1) + 'x';
      
      const sticker = state.stickers.find(s => s.id === state.selectedItemId);
      if (sticker) {
        sticker.scale = val;
        const el = document.querySelector(`.sticker-element[data-id="${state.selectedItemId}"]`);
        if (el) el.style.transform = `translate(-50%, -50%) scale(${sticker.scale}) rotate(${sticker.rotate}deg)`;
      }
    }
  });

  DOM.stickerRotate.addEventListener('input', (e) => {
    if (state.selectedItemType === 'sticker') {
      const val = parseInt(e.target.value);
      DOM.stickerRotateVal.textContent = val + '°';
      
      const sticker = state.stickers.find(s => s.id === state.selectedItemId);
      if (sticker) {
        sticker.rotate = val;
        const el = document.querySelector(`.sticker-element[data-id="${state.selectedItemId}"]`);
        if (el) el.style.transform = `translate(-50%, -50%) scale(${sticker.scale}) rotate(${sticker.rotate}deg)`;
      }
    }
  });

  DOM.btnDeleteSticker.addEventListener('click', () => {
    if (state.selectedItemType === 'sticker') {
      removeSticker(state.selectedItemId);
    }
  });

  // 16. Reset Card button
  DOM.btnReset.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all custom backgrounds, typography modifications, and sticker elements?')) {
      resetCard();
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 8. 3D TILT & SPECULAR FOIL SHINE MECHANICS                                 */
/* -------------------------------------------------------------------------- */

function handleCardTilt(e) {
  const container = document.querySelector('.card-perspective-container');
  const rect = container.getBoundingClientRect();
  
  // Get normalized mouse coords relative to viewport (-0.5 to 0.5)
  const pctX = (e.clientX - rect.left) / rect.width - 0.5;
  const pctY = (e.clientY - rect.top) / rect.height - 0.5;
  
  const tiltY = pctX * 36;
  const tiltX = -pctY * 36;
  
  // Rotate card wrapper
  DOM.cardWrapper.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

  // Shift cover holographic foil
  const foil = document.querySelector('.holographic-foil');
  if (foil) {
    foil.style.backgroundPosition = `${50 + pctX * 100}% ${50 + pctY * 100}%`;
  }

  // Shift specular shine gradient position across all page shine overlays
  const shineX = 50 + pctX * 120;
  const shineY = 50 + pctY * 120;
  DOM.cardWrapper.style.setProperty('--shine-x', `${shineX}%`);
  DOM.cardWrapper.style.setProperty('--shine-y', `${shineY}%`);

  // Shadow displacement
  DOM.cardShadow.style.transform = `rotateX(80deg) translateZ(-340px) scale(0.9) translateX(${pctX * -40}px) translateY(${pctY * -40}px)`;

  if (!DOM.interactionHint.classList.contains('fade-out')) {
    DOM.interactionHint.classList.add('fade-out');
  }
}

function resetCardTilt() {
  DOM.cardWrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
  DOM.cardShadow.style.transform = '';
  
  const foil = document.querySelector('.holographic-foil');
  if (foil) foil.style.backgroundPosition = '0% 0%';

  DOM.cardWrapper.style.setProperty('--shine-x', '50%');
  DOM.cardWrapper.style.setProperty('--shine-y', '50%');
}

/* -------------------------------------------------------------------------- */
/* 9. PAGE TURN STATE CONTROLLER                                              */
/* -------------------------------------------------------------------------- */

function setPageState(pageIndex) {
  state.activePage = pageIndex;
  deselectItem();

  const pFront = document.getElementById('page-cover-front');
  const pInsideLeft = document.getElementById('page-inside-left');
  const pInsideRight = document.getElementById('page-inside-right');
  const pBack = document.getElementById('page-back-cover');

  // Reset classes on book
  DOM.book.classList.remove('book-state-closed', 'book-state-open', 'book-state-back');
  
  // Set layout classes on float container (handles shadow styling)
  const container = document.getElementById('card-float-container');
  container.classList.remove('state-closed', 'state-open', 'state-back');

  if (pageIndex === 0) {
    pFront.classList.remove('page-disabled');
    pInsideLeft.classList.add('page-disabled');
    pInsideRight.classList.add('page-disabled');
    pBack.classList.add('page-disabled');

    DOM.book.classList.add('book-state-closed');
    container.classList.add('state-closed');
    DOM.btnPrevPage.disabled = true;
    DOM.btnNextPage.disabled = false;
    setTargetPage(0); // Cover Front target
  } else if (pageIndex === 1) {
    pFront.classList.add('page-disabled');
    pInsideLeft.classList.remove('page-disabled');
    pInsideRight.classList.remove('page-disabled');
    pBack.classList.add('page-disabled');

    DOM.book.classList.add('book-state-open');
    container.classList.add('state-open');
    DOM.btnPrevPage.disabled = false;
    DOM.btnNextPage.disabled = false;
    
    // Preserve target if already inside left (1) or inside right (2)
    if (state.targetPage !== 1 && state.targetPage !== 2) {
      setTargetPage(2);
    } else {
      setTargetPage(state.targetPage);
    }
    
    if (state.mode === 'preview') {
      triggerConfettiBlast();
    }
  } else if (pageIndex === 2) {
    pFront.classList.add('page-disabled');
    pInsideLeft.classList.add('page-disabled');
    pInsideRight.classList.add('page-disabled');
    pBack.classList.remove('page-disabled');

    DOM.book.classList.add('book-state-back');
    container.classList.add('state-back');
    DOM.btnPrevPage.disabled = false;
    DOM.btnNextPage.disabled = true;
    setTargetPage(3); // Back cover target
  }

  DOM.pageDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === pageIndex);
  });
}

/* -------------------------------------------------------------------------- */
/* 10. APP MODE CONTROL                                                       */
/* -------------------------------------------------------------------------- */

function setAppMode(modeName) {
  state.mode = modeName;
  deselectItem();

  if (modeName === 'builder') {
    DOM.app.classList.remove('mode-preview');
    DOM.app.classList.add('mode-builder');

    DOM.btnModeBuilder.classList.add('active');
    DOM.btnModePreview.classList.remove('active');

    DOM.indicatorText.textContent = "Builder Workspace";
    DOM.interactionHint.classList.remove('fade-out');
  } else {
    DOM.app.classList.remove('mode-builder');
    DOM.app.classList.add('mode-preview');

    DOM.btnModeBuilder.classList.remove('active');
    DOM.btnModePreview.classList.add('active');

    DOM.indicatorText.textContent = "Recipient View Mode";

    // Auto return to front page so receiver can open it
    setPageState(0);
    DOM.interactionHint.classList.remove('fade-out');
  }
}

/* -------------------------------------------------------------------------- */
/* 11. UNIFIED DRAGGING & SELECTION FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

function selectItem(type, id) {
  deselectItem();
  state.selectedItemId = id;
  state.selectedItemType = type;

  if (type === 'sticker') {
    const el = document.querySelector(`.sticker-element[data-id="${id}"]`);
    if (el) el.classList.add('selected');
    DOM.textStylesControl.style.display = 'none';
    DOM.stickerControlsPanel.style.display = 'block';
    
    const stickerData = state.stickers.find(s => s.id === id);
    if (stickerData) {
      DOM.stickerScale.value = stickerData.scale;
      DOM.stickerScaleVal.textContent = stickerData.scale.toFixed(1) + 'x';
      DOM.stickerRotate.value = Math.round(stickerData.rotate);
      DOM.stickerRotateVal.textContent = Math.round(stickerData.rotate) + '°';
    }

    const stickersTab = document.querySelector('.tab-btn[data-tab="stickers"]');
    if (stickersTab) stickersTab.click();
  } else if (type === 'text') {
    DOM.stickerControlsPanel.style.display = 'none';
    const el = DOM.textElements[id].wrapper;
    el.classList.add('selected');
    
    // Sync styles panel sidebar values
    const styles = state.textStyles[id];
    DOM.styleFontFamily.value = styles.font;
    DOM.styleFontSize.value = styles.size;
    DOM.fontSizeVal.textContent = `${styles.size}px`;
    
    // Sync Bold/Italic formatting buttons
    DOM.btnToggleBold.classList.toggle('active', !!styles.bold);
    DOM.btnToggleItalic.classList.toggle('active', !!styles.italic);
    DOM.styleFontWeight.value = styles.weight;
    DOM.fontWeightVal.textContent = styles.weight;
    
    DOM.alignBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.align === styles.align);
    });

    // Check color select
    DOM.textColorPalette.querySelectorAll('.color-bubble').forEach(b => {
      b.classList.toggle('active', b.dataset.color === styles.color);
    });
    DOM.textColorPicker.value = styles.color.startsWith('#') ? styles.color : '#000000';
    
    // Display control panel, auto open Content tab
    DOM.textStylesControl.style.display = 'block';
    
    const contentTab = document.querySelector('.tab-btn[data-tab="content"]');
    if (contentTab) contentTab.click();
  }

  renderPageElementsList();
}

function deselectItem() {
  state.selectedItemId = null;
  state.selectedItemType = null;
  
  document.querySelectorAll('.sticker-element').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.draggable-text-wrapper').forEach(el => el.classList.remove('selected'));
  
  DOM.textStylesControl.style.display = 'none';
  if (DOM.stickerControlsPanel) DOM.stickerControlsPanel.style.display = 'none';

  renderPageElementsList();
}

function bindDraggableMovement(element, onDragFinish) {
  let isDragging = false;
  let startX, startY;
  let initialLeftPct, initialTopPct;

  const handle = element.querySelector('.text-drag-handle') || element;

  handle.addEventListener('mousedown', (e) => {
    if (state.mode === 'preview') return;
    if (e.target.hasAttribute('contenteditable')) return;
    
    e.stopPropagation();
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    
    initialLeftPct = parseFloat(element.style.left) || 50;
    initialTopPct = parseFloat(element.style.top) || 50;
  });

  const onMouseMove = (e) => {
    if (!isDragging) return;
    
    const parentCanvas = element.closest('.sticker-canvas');
    if (!parentCanvas) return;
    const parentRect = parentCanvas.getBoundingClientRect();

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    const deltaPctX = (deltaX / parentRect.width) * 100;
    const deltaPctY = (deltaY / parentRect.height) * 100;

    let newX = initialLeftPct + deltaPctX;
    let newY = initialTopPct + deltaPctY;

    newX = Math.max(5, Math.min(95, newX));
    newY = Math.max(5, Math.min(95, newY));

    element.style.left = `${newX}%`;
    element.style.top = `${newY}%`;

    if (onDragFinish) onDragFinish(newX, newY);
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  // TOUCH
  handle.addEventListener('touchstart', (e) => {
    if (state.mode === 'preview' || e.touches.length === 0) return;
    if (e.target.hasAttribute('contenteditable')) return;
    e.stopPropagation();

    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    initialLeftPct = parseFloat(element.style.left) || 50;
    initialTopPct = parseFloat(element.style.top) || 50;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    onMouseMove(e.touches[0]);
  }, { passive: true });

  document.addEventListener('touchend', onMouseUp);
}

/* -------------------------------------------------------------------------- */
/* 12. STICKER MANAGEMENT                                                     */
/* -------------------------------------------------------------------------- */

function addPresetSticker(type) {
  const id = Date.now().toString();
  const stickerData = {
    id,
    type,
    x: 40 + Math.random() * 20,
    y: 40 + Math.random() * 20,
    scale: 1,
    rotate: -10 + Math.random() * 20,
    pageIndex: state.targetPage,
    fileDataUrl: null
  };

  state.stickers.push(stickerData);
  renderStickerDOM(stickerData);
  selectItem('sticker', id);
}

function addCustomSticker(dataUrl) {
  const id = Date.now().toString();
  const stickerData = {
    id,
    type: 'custom',
    x: 40 + Math.random() * 20,
    y: 40 + Math.random() * 20,
    scale: 1,
    rotate: 0,
    pageIndex: state.targetPage,
    fileDataUrl: dataUrl
  };

  state.stickers.push(stickerData);
  renderStickerDOM(stickerData);
  selectItem('sticker', id);
}

function renderStickerDOM(data) {
  const stickerEl = document.createElement('div');
  stickerEl.classList.add('sticker-element');
  stickerEl.dataset.id = data.id;
  stickerEl.style.left = `${data.x}%`;
  stickerEl.style.top = `${data.y}%`;
  stickerEl.style.transform = `translate(-50%, -50%) scale(${data.scale}) rotate(${data.rotate}deg)`;

  // Inner element
  const contentEl = document.createElement('div');
  contentEl.classList.add('sticker-content');
  if (data.type === 'custom') {
    contentEl.innerHTML = `<img src="${data.fileDataUrl}" alt="Sticker" draggable="false" style="-webkit-user-drag: none; pointer-events: none;">`;
  } else {
    contentEl.innerHTML = SVG_ASSETS.stickers[data.type];
  }
  stickerEl.appendChild(contentEl);

  // Append to targeted canvas overlay
  DOM.pages[data.pageIndex].appendChild(stickerEl);

  bindStickerEvents(stickerEl, data);
}

function bindStickerEvents(element, data) {
  let isDragging = false;
  
  let startX, startY;
  let initialLeftPct = data.x;
  let initialTopPct = data.y;

  // Prevent native browser drag
  element.addEventListener('dragstart', (e) => e.preventDefault());

  // Drag selection trigger
  element.addEventListener('mousedown', (e) => {
    if (state.mode === 'preview') return;
    e.stopPropagation();
    
    setTargetPage(data.pageIndex);
    selectItem('sticker', data.id);
    
    if (e.target === element || e.target.closest('.sticker-content')) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialLeftPct = parseFloat(element.style.left);
      initialTopPct = parseFloat(element.style.top);
    }
  });

  const onMouseMove = (e) => {
    if (state.mode === 'preview') return;
    const parentCanvas = DOM.pages[data.pageIndex];
    const parentRect = parentCanvas.getBoundingClientRect();

    if (isDragging) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      const deltaPctX = (deltaX / parentRect.width) * 100;
      const deltaPctY = (deltaY / parentRect.height) * 100;

      let newX = initialLeftPct + deltaPctX;
      let newY = initialTopPct + deltaPctY;

      newX = Math.max(5, Math.min(95, newX));
      newY = Math.max(5, Math.min(95, newY));

      data.x = newX;
      data.y = newY;
      element.style.left = `${newX}%`;
      element.style.top = `${newY}%`;
    }
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  // Touch
  element.addEventListener('touchstart', (e) => {
    if (state.mode === 'preview' || e.touches.length === 0) return;
    e.stopPropagation();
    setTargetPage(data.pageIndex);
    selectItem('sticker', data.id);

    const touch = e.touches[0];
    if (e.target === element || e.target.closest('.sticker-content')) {
      isDragging = true;
      startX = touch.clientX;
      startY = touch.clientY;
      initialLeftPct = parseFloat(element.style.left);
      initialTopPct = parseFloat(element.style.top);
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (e.touches.length === 0) return;
    onMouseMove(e.touches[0]);
  }, { passive: true });

  document.addEventListener('touchend', onMouseUp);
}

function removeSticker(id) {
  const el = document.querySelector(`.sticker-element[data-id="${id}"]`);
  if (el) el.remove();
  state.stickers = state.stickers.filter(s => s.id !== id);
  deselectItem();
}

/* -------------------------------------------------------------------------- */
/* 13. RESET CARD                                                             */
/* -------------------------------------------------------------------------- */

function resetCard() {
  state.title = 'Happy Birthday!';
  state.message = 'Wishing you a wonderful day filled with love, laughter, and magical moments. You deserve the absolute best!';
  state.sender = 'Sarah';
  state.theme = 'party';
  state.stickers = [];
  state.customBackgrounds = [null, null, null, null];
  state.customBackgroundPositions = [50, 50, 50, 50];
  state.spanInsideBg = false;
  DOM.checkboxSpanBg.checked = false;
  document.querySelector('.bg-upload-grid').classList.remove('span-bg-active');
  document.getElementById('label-inside-left-bg').textContent = "Inside Left";

  state.textStyles = {
    coverTitle: { size: 32, font: 'Outfit', color: '#ff5e62', align: 'center', weight: 700, bold: true, italic: false, x: 50, y: 25 },
    insideLeftQuote: { size: 15, font: 'Inter', color: '#2d3748', align: 'center', weight: 300, bold: false, italic: true, x: 50, y: 55 },
    insideRightMessage: { size: 28, font: 'Caveat', color: '#2d3748', align: 'left', weight: 400, bold: false, italic: false, x: 50, y: 45 },
    backSender: { size: 32, font: 'Caveat', color: '#2d3748', align: 'center', weight: 700, bold: true, italic: false, x: 50, y: 70 }
  };

  // Clear backgrounds
  DOM.pages.forEach((p, idx) => {
    p.style.backgroundImage = '';
    syncBackgroundSidebarCard(idx);
  });

  // Clear stickers
  document.querySelectorAll('.sticker-element').forEach(el => el.remove());

  // Restore quote
  DOM.textElements.insideLeftQuote.inner.textContent = "";

  initApp();
  setPageState(0);
}

/* -------------------------------------------------------------------------- */
/* 14. ANIMATIONS (CONFETTI & AMBIENT SPARKLES)                               */
/* -------------------------------------------------------------------------- */

function resizeCanvas() {
  DOM.canvas.width = window.innerWidth;
  DOM.canvas.height = window.innerHeight;
}

const THEME_PARTICLE_COLORS = {
  party: ['#FF5E62', '#FFA6C9', '#FFD000', '#55EFC4', '#8b5cf6'],
  elegant: ['#C5A059', '#1C1C1C', '#E5C158', '#4b6584', '#a5b1c2'],
  cute: ['#FF85A2', '#FFCCD7', '#FFEAA7', '#FFF0F3', '#D6A2E8'],
  minimal: ['#1C1C1C', '#DCDCDC', '#8A8A8A', '#000000', '#F2F2F2']
};

function triggerConfettiBlast() {
  const colors = THEME_PARTICLE_COLORS[state.theme] || THEME_PARTICLE_COLORS.party;
  const screenCenterX = window.innerWidth / 2;
  const screenCenterY = window.innerHeight / 2;

  for (let i = 0; i < 120; i++) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = 8 + Math.random() * 10;
    
    confettiParticles.push({
      x: screenCenterX,
      y: screenCenterY - 50,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity - 3,
      size: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1,
      gravity: 0.28,
      rotation: Math.random() * 360,
      rotationSpeed: -8 + Math.random() * 16,
      fadeSpeed: 0.005 + Math.random() * 0.005
    });
  }
}

function generateAmbientGlitter() {
  if (state.mode !== 'preview') return;
  
  if (Math.random() > 0.88) {
    const colors = THEME_PARTICLE_COLORS[state.theme] || THEME_PARTICLE_COLORS.party;
    ambientParticles.push({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 10,
      vx: -1 + Math.random() * 2,
      vy: -1.2 - Math.random() * 1.5,
      size: 2 + Math.random() * 3.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.1,
      maxOpacity: 0.5 + Math.random() * 0.4,
      sinVal: Math.random() * 10,
      sinSpeed: 0.02 + Math.random() * 0.03
    });
  }
}

function startAmbientParticlesLoop() {
  function tick() {
    ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);
    generateAmbientGlitter();

    // Confetti
    confettiParticles = confettiParticles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.fadeSpeed;

      if (p.opacity <= 0) return false;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      ctx.restore();
      return true;
    });

    // Glitter
    ambientParticles = ambientParticles.filter(p => {
      p.sinVal += p.sinSpeed;
      p.x += p.vx + Math.sin(p.sinVal) * 0.5;
      p.y += p.vy;

      if (p.y > window.innerHeight - 100) {
        p.opacity = Math.min(p.maxOpacity, p.opacity + 0.02);
      } else if (p.y < 200) {
        p.opacity -= 0.01;
      }

      if (p.y < -10 || p.opacity <= 0) return false;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(45 * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      ctx.restore();
      return true;
    });

    requestAnimationFrame(tick);
  }
  tick();
}

// Start
initApp();
