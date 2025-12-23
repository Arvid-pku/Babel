// --- TRANSLATION DATA ---
const TRANSLATIONS = {
    en: {
        tooltip: "[SHIFT] Snap Axis • [CTRL+Z] Undo",
        h_lang: "UI LANGUAGE",
        h_cursor: "CURSOR MODE",
        btn_manipulate: "MANIPULATE",
        btn_disrupt: "DISRUPT",
        btn_architect: "ARCHITECT",
        lbl_tool: "TOOL",
        btn_free: "FREE",
        btn_line: "LINE",
        btn_fan: "FAN",
        btn_erase: "ERASE",
        tab_sim: "SIM",
        tab_arch: "ARCH",
        tab_vis: "VIS",
        tab_data: "DATA",
        h_spawn: "SPAWN MODE",
        btn_auto_drop: "AUTO DROP",
        btn_type_input: "TYPE INPUT",
        lbl_input_method: "INPUT METHOD",
        btn_1key: "1 KEY = 1 CHAR",
        btn_enter: "DROP ON ENTER",
        desc_type_char: "Press any key to drop a character.",
        desc_type_enter: "Type a word, then press ENTER to drop.",
        h_interaction: "INTERACTION TRIGGER",
        btn_click: "CLICK",
        btn_hover: "HOVER",
        h_physics: "PHYSICS",
        lbl_gravity: "GRAVITY",
        lbl_force: "FORCE",
        h_flow: "FLOW (AUTO MODE)",
        lbl_delay: "DELAY",
        lbl_infinite: "INFINITE LOOP",
        h_lifetime: "LIFETIME",
        lbl_max_life: "MAX EXISTENCE",
        h_maint: "MAINTENANCE",
        btn_sweep: "SWEEP DEBRIS",
        btn_purge: "PURGE ALL",
        h_blueprint: "BLUEPRINT",
        btn_save: "SAVE LAYOUT",
        btn_load: "LOAD LAYOUT",
        btn_saved: "SAVED!",
        h_linetype: "LINE TYPE",
        btn_standard: "STANDARD",
        btn_kill: "KILL ZONE",
        btn_bounce: "BOUNCE PAD",
        btn_portal: "PORTAL",
        desc_lines: "Kill zones vaporize text; bounce pads add 1.5x restitution.",
        h_portal_orient: "PORTAL ORIENTATION",
        btn_portal_left: "SIDE A",
        btn_portal_right: "SIDE B",
        desc_portal: "Draw two lines: entry then exit. Enter from the arc side; exit perpendicular on the arc side.",
        h_lineprop: "LINE PROPERTIES",
        lbl_friction: "FRICTION",
        lbl_thickness: "THICKNESS",
        h_wind: "WIND",
        lbl_fan_dir: "FAN DIRECTION",
        lbl_fan_str: "FAN STRENGTH",
        h_typo: "TYPOGRAPHY",
        lbl_text_size: "TEXT SIZE (RESETS)",
        h_palette: "PALETTE",
        lbl_line_col: "LINE COLOR",
        h_ref: "REFERENCE",
        lbl_img_url: "IMAGE URL",
        btn_load_img: "LOAD",
        btn_clear_img: "CLEAR",
        h_audio: "AUDIO",
        btn_init_audio: "INITIALIZE AUDIO",
        btn_audio_active: "AUDIO :: ACTIVE",
        btn_audio_sus: "AUDIO :: SUSPENDED",
        lbl_vol_master: "MASTER VOLUME",
        lbl_vol_exp: "EXPLOSION",
        lbl_vol_col: "COLLISION",
        lbl_vol_bounce: "BOUNCE",
        lbl_vol_type: "TYPING",
        h_source: "SOURCE TEXT",
        btn_inject: "INJECT NEW STREAM"
    },
    zh: {
        tooltip: "[SHIFT] 轴锁定 • [CTRL+Z] 撤销",
        h_lang: "界面语言",
        h_cursor: "光标模式",
        btn_manipulate: "操控",
        btn_disrupt: "粉碎",
        btn_architect: "建造",
        lbl_tool: "工具",
        btn_free: "手绘",
        btn_line: "直线",
        btn_fan: "风扇",
        btn_erase: "擦除",
        tab_sim: "模拟",
        tab_arch: "建造",
        tab_vis: "视觉",
        tab_data: "数据",
        h_spawn: "生成模式",
        btn_auto_drop: "自动掉落",
        btn_type_input: "键盘输入",
        lbl_input_method: "输入方式",
        btn_1key: "单键单字",
        btn_enter: "回车掉落",
        desc_type_char: "按任意键掉落字符。",
        desc_type_enter: "输入单词，按回车键掉落。",
        h_interaction: "触发方式",
        btn_click: "点击",
        btn_hover: "悬停",
        h_physics: "物理参数",
        lbl_gravity: "重力",
        lbl_force: "爆破力",
        h_flow: "自动流控",
        lbl_delay: "间隔延迟",
        lbl_infinite: "无限循环",
        h_lifetime: "生命周期",
        lbl_max_life: "存在时间",
        h_maint: "维护",
        btn_sweep: "清理碎片",
        btn_purge: "清空所有",
        h_blueprint: "蓝图",
        btn_save: "保存布局",
        btn_load: "加载布局",
        btn_saved: "已保存!",
        h_linetype: "线条类型",
        btn_standard: "标准",
        btn_kill: "销毁区",
        btn_bounce: "弹力板",
        btn_portal: "传送门",
        desc_lines: "销毁区气化文本；弹力板增加1.5倍弹性。",
        h_portal_orient: "传送门方向",
        btn_portal_left: "A侧辉光",
        btn_portal_right: "B侧辉光",
        desc_portal: "画两条线：先入口，后出口。 从弧线侧进入，从弧线侧垂直射出。",
        h_lineprop: "线条属性",
        lbl_friction: "摩擦力",
        lbl_thickness: "厚度",
        h_wind: "风力系统",
        lbl_fan_dir: "风向",
        lbl_fan_str: "风力强度",
        h_typo: "排版",
        lbl_text_size: "文字大小 (重置)",
        h_palette: "调色板",
        lbl_line_col: "线条颜色",
        h_ref: "参考图",
        lbl_img_url: "图片链接",
        btn_load_img: "加载",
        btn_clear_img: "清除",
        h_audio: "音频",
        btn_init_audio: "初始化音频",
        btn_audio_active: "音频 :: 运行中",
        btn_audio_sus: "音频 :: 已挂起",
        lbl_vol_master: "主音量",
        lbl_vol_exp: "爆炸音量",
        lbl_vol_col: "碰撞音量",
        lbl_vol_bounce: "反弹音量",
        lbl_vol_type: "打字音量",
        h_source: "文本源",
        btn_inject: "注入新文本流"
    }
};

// --- TAB SYSTEM LOGIC ---
const tabBtns = document.querySelectorAll('.tab-btn');
const tabSections = document.querySelectorAll('.tab-section');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabSections.forEach(s => s.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.target);
        if(target) target.classList.add('active');
    });
});

class Particle {
    constructor() {
        this.active = false;
        this.x = 0; this.y = 0;
        this.vx = 0; this.vy = 0;
        this.life = 0;
        this.size = 1;
    }
    reset(x, y) {
        this.active = true;
        this.x = x; this.y = y;
        this.vx = (Math.random()-0.5)*10;
        this.vy = (Math.random()-0.5)*10;
        this.life = 1.0;
        this.size = Math.random()*2+1;
    }
    update() {
        if (!this.active) return false;
        this.life -= 0.03;
        this.x += this.vx; this.y += this.vy;
        if (this.life <= 0) {
            this.active = false;
            return false;
        }
        return true;
    }
    draw(ctx, color) {
        if (!this.active) return;
        ctx.fillStyle = color;
        ctx.globalAlpha = this.life;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.globalAlpha = 1;
    }
}

class AudioEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.initialized = false;
        this.droneVoices = [];
        this.tension = 0;
        this.volumes = {
            master: 0.35,
            explosion: 1.4,
            collision: 0.1,
            bounce: 1,
            typing: 1
        };
    }
    init() {
        if (this.initialized) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        const compressor = this.ctx.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-24, this.ctx.currentTime);
        compressor.knee.setValueAtTime(30, this.ctx.currentTime);
        compressor.ratio.setValueAtTime(12, this.ctx.currentTime);
        compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
        compressor.release.setValueAtTime(0.25, this.ctx.currentTime);
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.volumes.master;
        this.masterGain.connect(compressor);
        compressor.connect(this.ctx.destination);
        this.initialized = true;
        this.updateUI(true);
        const status = document.getElementById('audio-status');
        status.style.opacity = 0.6;
        setTimeout(() => status.style.opacity = 0, 4000);
    }
    toggle() {
        if (!this.initialized) { this.init(); return; }
        if (this.ctx.state === 'running') { this.ctx.suspend(); this.updateUI(false); } 
        else if (this.ctx.state === 'suspended') { this.ctx.resume(); this.updateUI(true); }
    }
    updateUI(active) {
        const btn = document.getElementById('btn-audio-toggle');
        const t = TRANSLATIONS[SETTINGS.language];
        if (active) { 
            btn.innerText = t.btn_audio_active; 
            btn.classList.add('active'); 
        } else { 
            btn.innerText = t.btn_audio_sus; 
            btn.classList.remove('active'); 
        }
    }
    setVolume(val) { 
        this.volumes.master = val;
        if(this.masterGain) this.masterGain.gain.setValueAtTime(val, this.ctx.currentTime); 
    }
    setCategoryVolume(type, val) {
        if (this.volumes[type] !== undefined) this.volumes[type] = val;
    }
    playTone({ type = 'sine', startFreq = 220, endFreq = 180, duration = 0.15, gain = 0.05, pan = 0 } = {}) {
        if (!this.initialized || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const p = this.ctx.createStereoPanner();
        osc.type = type;
        osc.frequency.setValueAtTime(startFreq, t);
        osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);
        g.gain.setValueAtTime(gain, t);
        g.gain.exponentialRampToValueAtTime(0.0005, t + duration);
        p.pan.value = pan;
        osc.connect(g); g.connect(p); p.connect(this.masterGain);
        osc.start(t); osc.stop(t + duration + 0.02);
    }
    explosion(panX = 0) {
        if (!this.initialized || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.3, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
        noise.buffer = buffer;
        const bp = this.ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(220, t);
        bp.Q.value = 0.8;
        const lp = this.ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.setValueAtTime(1200, t);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.3 * Math.max(0.4, SETTINGS.force) * this.volumes.explosion, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(110, t);
        sub.frequency.exponentialRampToValueAtTime(48, t + 0.45);
        subGain.gain.setValueAtTime(0.18 * Math.max(0.4, SETTINGS.force) * this.volumes.explosion, t);
        subGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        const p = this.ctx.createStereoPanner();
        p.pan.value = panX;
        noise.connect(bp); bp.connect(lp); lp.connect(g); g.connect(p);
        sub.connect(subGain); subGain.connect(p);
        p.connect(this.masterGain);
        noise.start(t); noise.stop(t + 0.4);
        sub.start(t); sub.stop(t + 0.5);
    }
    bounce(panX = 0) {
        if (!this.initialized || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const bp = this.ctx.createBiquadFilter();
        const g = this.ctx.createGain();
        const p = this.ctx.createStereoPanner();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(360, t);
        osc.frequency.linearRampToValueAtTime(760, t + 0.16);
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(520, t);
        bp.Q.value = 5;
        g.gain.setValueAtTime(0.045 * this.volumes.bounce, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        p.pan.value = panX;
        osc.connect(bp); bp.connect(g); g.connect(p); p.connect(this.masterGain);
        osc.start(t); osc.stop(t + 0.22);
    }
    collision(panX = 0) {
        if (!this.initialized || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const lp = this.ctx.createBiquadFilter();
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.12, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
        noise.buffer = buffer;
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(160, t);
        noiseFilter.Q.value = 1.6;
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.03 * this.volumes.collision, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
        osc.type = 'square';
        osc.frequency.setValueAtTime(210, t);
        osc.frequency.exponentialRampToValueAtTime(90, t + 0.16);
        lp.type = 'lowpass';
        lp.frequency.setValueAtTime(280, t);
        lp.Q.value = 1.2;
        g.gain.setValueAtTime(0.05 * this.volumes.collision, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        const p = this.ctx.createStereoPanner();
        p.pan.value = panX;
        osc.connect(lp); lp.connect(g); g.connect(p);
        noise.connect(noiseFilter); noiseFilter.connect(noiseGain); noiseGain.connect(p);
        p.connect(this.masterGain);
        osc.start(t); osc.stop(t + 0.22);
        noise.start(t); noise.stop(t + 0.16);
    }
    setTension(level) {
        if (!this.initialized || this.ctx.state === 'suspended' || this.droneVoices.length === 0) return;
        this.tension = Math.max(0, Math.min(1, level));
        const spread = 1 + this.tension * 0.4;
        const now = this.ctx.currentTime;
        this.droneVoices.forEach((voice, idx) => {
            const offset = (idx - 1.5) * 0.01;
            voice.osc.frequency.setTargetAtTime(voice.baseFreq * spread * (1 + offset), now, 0.35);
            voice.gain.gain.setTargetAtTime(0.02 + this.tension * 0.02, now, 0.35);
        });
    }
    click() {
        if (!this.initialized || this.ctx.state === 'suspended') return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const hp = this.ctx.createBiquadFilter();
        const p = this.ctx.createStereoPanner();
        osc.type = 'square';
        osc.frequency.setValueAtTime(1250, t);
        osc.frequency.exponentialRampToValueAtTime(900, t + 0.05);
        hp.type = 'highpass';
        hp.frequency.setValueAtTime(900, t);
        gain.gain.setValueAtTime(0.02 * this.volumes.typing, t);
        gain.gain.exponentialRampToValueAtTime(0.0004, t + 0.1);
        p.pan.value = (Math.random() * 0.6) - 0.3;
        osc.connect(hp); hp.connect(gain); gain.connect(p); p.connect(this.masterGain);
        osc.start(t); osc.stop(t + 0.1);
    }
}
const audioEngine = new AudioEngine();

// --- GLOBAL SETTINGS ---
const SETTINGS = {
    gravity: 1.0,
    force: 0.05,
    spawnInterval: 35,
    loop: true,
    interactionMode: 'shatter', 
    architectTool: 'freehand', 
    triggerMode: 'hover', 
    spawnMode: 'auto', 
    typingType: 'char', 
    language: 'en', // 'en' or 'zh'
    textSource: [],
    lineFriction: 0.1,
    lineThickness: 4,
    lineType: 'standard',
    portalGlowSide: 1, // 1 = side A, -1 = side B
    fanStrength: 0.0006,
    fanRadius: 180,
    fanDirection: { x: 0, y: -1 },
    wellStrength: 0.0009,
    wellRadius: 220,
    lifetime: 61 // 61 = Infinity
};

let typingBuffer = "";
let enterHoldStart = null;

const DEFAULTS = [
    "Now the whole earth had one language and the same words.",
    "And as people migrated from the east, they found a plain in the land of Shinar and settled there.",
    "And they said to one another, Come, let us make bricks, and burn them thoroughly.",
    "Then they said, Come, let us build ourselves a city and a tower with its top in the heavens.",
    "And the Lord came down to see the city and the tower, which the children of man had built.",
    "And the Lord said, Behold, they are one people, and they have all one language.",
    "Come, let us go down and there confuse their language.",
    "So the Lord dispersed them from there over the face of all the earth.",
    "Therefore its name was called Babel, because there the Lord confused the language of all the earth.",
    "וַיְהִי כָל-הָאָרֶץ שָׂפָה אֶחָת וּדְבָרִים אֲחָדִים",
    "וַיְהִי בְּנָסְעָם מִקֶּדֶם וַיִּמְצְאוּ בִקְעָה בְּאֶרֶץ שִׁנְעָר וַיֵּשְׁבוּ שָׁם"
];
SETTINGS.textSource = [...DEFAULTS];

let CONFIG = {
    fontSize: 22, letterSpacing: 16, disruptRadius: 80, maxBodies: 700,
    colors: { 
        english: '#cccccc', hebrew: '#eebb99', shard: '#555', dust: '#777',
        kill: '#ff5555', bounce: '#5b8dff', portal: '#66ffe6', line: '#ffffff'
    },
    capitalMassBoost: 1.5,
    capitalSizeBoost: 1.15
};
const GLYPHS = "ΣΩΨΦДЖЊϞϠℵℶℷ∅∇∂≠≡⋈∴∵⌆⌖⌐⌡⌠";

// --- MATTER.JS SETUP ---
const Engine = Matter.Engine, Runner = Matter.Runner, Bodies = Matter.Bodies, 
      Composite = Matter.Composite, Constraint = Matter.Constraint, Body = Matter.Body, 
      Mouse = Matter.Mouse, MouseConstraint = Matter.MouseConstraint, Sleeping = Matter.Sleeping,
      Events = Matter.Events;

class WordFactory {
    constructor(config) {
        this.config = config;
    }
    isUpperCase(ch) {
        return ch === ch.toUpperCase() && ch !== ch.toLowerCase();
    }
    create(text, x, y, options = {}) {
        const group = Body.nextGroup(true);
        const letterBodies = [];
        const isHeb = /[\u0590-\u05FF]/.test(text);
        const chars = Array.from(text);
        const massScale = options.massScale || 1;
        const sizeScale = options.sizeScale || 1;
        const now = Date.now();

        for (let i = 0; i < chars.length; i++) {
            const ch = chars[i];
            const sizeBoost = this.isUpperCase(ch) ? this.config.capitalSizeBoost : 1;
            const massBoost = this.isUpperCase(ch) ? this.config.capitalMassBoost : 1;
            const height = this.config.fontSize * sizeScale * sizeBoost;
            const width = height * 0.5;
            const xPos = isHeb ? x + (chars.length - 1 - i) * this.config.letterSpacing : x + (i * this.config.letterSpacing);
            const body = Bodies.rectangle(xPos, y, width, height, {
                collisionFilter: { group },
                friction: 0.9, 
                restitution: 0.2,
                density: 0.02 * massScale * massBoost,
                plugin: { 
                    char: ch, isBroken: false, 
                    color: isHeb ? this.config.colors.hebrew : this.config.colors.english,
                    size: height,
                    birthTime: now
                }
            });
            letterBodies.push(body);
        }

        const constraints = [];
        for (let i = 0; i < letterBodies.length - 1; i++) {
            constraints.push(Constraint.create({
                bodyA: letterBodies[i], bodyB: letterBodies[i+1],
                stiffness: 0.8, length: this.config.letterSpacing, render: { visible: false }
            }));
        }
        const composite = Composite.create({ label: 'word' });
        Composite.add(composite, letterBodies);
        Composite.add(composite, constraints);
        composite.plugin = { intact: true, text, birthTime: now, lastTeleportTime: 0 };
        letterBodies.forEach(b => { b.plugin.wordComposite = composite; });
        return composite;
    }
}

const engine = Engine.create({ enableSleeping: true });
const world = engine.world;

const architectLayer = Composite.create();
Composite.add(world, architectLayer);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

const staticCanvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(1, 1) : document.createElement('canvas');
let staticCtx = staticCanvas.getContext('2d');
let staticDirty = true;

engine.positionIterations = 8;
engine.velocityIterations = 6;

let width, height;
let wordComposites = [];
const PARTICLE_POOL_SIZE = 1000;
const particles = Array.from({ length: PARTICLE_POOL_SIZE }, () => new Particle());
let particleCursor = 0;
let fanFields = [];
let gravityWells = [];
let glitchIntensity = 0;
let wordQueue = [];
let walls = []; 
let dpr = 1;
let undoStack = []; 
let currentLineColor = CONFIG.colors.line;
const wordFactory = new WordFactory(CONFIG);
let isSlowMotion = false;
let portalIdCounter = 1;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    if (staticCtx) {
        staticCanvas.width = width * dpr;
        staticCanvas.height = height * dpr;
        staticCtx.setTransform(1, 0, 0, 1, 0, 0);
        staticCtx.scale(dpr, dpr);
        staticDirty = true;
    }

    if (walls.length > 0) Composite.remove(world, walls);
    const floor = Bodies.rectangle(width / 2, height + 100, width * 2, 200, { isStatic: true });
    const wL = Bodies.rectangle(-50, height/2, 100, height*4, { isStatic: true });
    const wR = Bodies.rectangle(width + 50, height/2, 100, height*4, { isStatic: true });
    walls = [floor, wL, wR];
    Composite.add(world, walls);
}
window.addEventListener('resize', resize);
resize();

const mouse = Mouse.create(canvas);
mouse.pixelRatio = dpr;
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse, constraint: { stiffness: 0.1, render: { visible: false } }
});
Composite.add(world, mouseConstraint);

// --- DRAWING & KEYBOARD LOGIC ---
mouseConstraint.constraint.stiffness = 0;

const getPointerPos = (e) => {
    if (typeof e.offsetX === 'number' && typeof e.offsetY === 'number') {
        return { x: e.offsetX, y: e.offsetY };
    }
    const touch = e.touches?.[0] || e.changedTouches?.[0];
    if (touch) {
        const rect = canvas.getBoundingClientRect();
        return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    }
    return null;
};

const normalizePointerEvent = (e) => {
    const pt = getPointerPos(e);
    if (!pt) return null;
    return { offsetX: pt.x, offsetY: pt.y, shiftKey: e.shiftKey || false };
};

class InteractionState {
    enter() {}
    exit() {}
    onMouseDown() {}
    onMouseUp() {}
    onMouseMove() {}
    onMouseLeave() {}
    onKeyDown() {}
    onKeyUp() {}
}

class ShatterState extends InteractionState {
    onMouseDown(e) {
        if (SETTINGS.triggerMode === 'click') {
            checkShatterAt({ x: e.offsetX, y: e.offsetY });
        }
    }
    onMouseMove(e) {
        if (SETTINGS.triggerMode === 'hover') {
            checkShatterAt({ x: e.offsetX, y: e.offsetY });
        }
    }
}

class DragState extends InteractionState {
    enter() { mouseConstraint.constraint.stiffness = 0.1; }
    exit() { mouseConstraint.constraint.stiffness = 0; }
}

class DrawState extends InteractionState {
    constructor() {
        super();
        this.reset();
    }
    reset() {
        this.isDrawing = false;
        this.lastPoint = null;
        this.startPoint = null;
        this.currentPoint = null;
        this.hoveredEraseBody = null;
    }
    onMouseDown(e) {
        const pt = { x: e.offsetX, y: e.offsetY };
        if (SETTINGS.architectTool === 'eraser' && this.hoveredEraseBody) {
            removeArchitectBody(this.hoveredEraseBody);
            this.hoveredEraseBody = null;
            return;
        }
        if (SETTINGS.architectTool === 'fan') {
            createFan(pt);
            return;
        }
        if (SETTINGS.architectTool === 'well') {
            createWell(pt);
            return;
        }
        this.isDrawing = true;
        this.lastPoint = pt;
        this.startPoint = pt;
        this.currentPoint = pt;
    }
    onMouseMove(e) {
        let pt = { x: e.offsetX, y: e.offsetY };
        if (SETTINGS.architectTool === 'line' && this.startPoint && e.shiftKey) {
            const dx = Math.abs(pt.x - this.startPoint.x);
            const dy = Math.abs(pt.y - this.startPoint.y);
            if (dx > dy) pt.y = this.startPoint.y;
            else pt.x = this.startPoint.x;
        }
        this.currentPoint = pt;

        if (this.isDrawing && SETTINGS.architectTool === 'freehand') {
            const dist = Math.hypot(pt.x - this.lastPoint.x, pt.y - this.lastPoint.y);
            if (dist > 10) {
                createLineSegment(this.lastPoint, pt, dist);
                this.lastPoint = pt;
            }
        }

        if (SETTINGS.architectTool === 'eraser') {
            this.hoveredEraseBody = findEraseTarget(pt);
        } else {
            this.hoveredEraseBody = null;
        }
    }
    onMouseUp(e) {
        if (SETTINGS.architectTool === 'line' && this.startPoint) {
            let endPoint = { x: e.offsetX, y: e.offsetY };
            if (e.shiftKey) {
                const dx = Math.abs(endPoint.x - this.startPoint.x);
                const dy = Math.abs(endPoint.y - this.startPoint.y);
                if (dx > dy) endPoint.y = this.startPoint.y;
                else endPoint.x = this.startPoint.x;
            }
            createStraightLine(this.startPoint, endPoint);
        }
        this.reset();
    }
    onMouseLeave() { this.reset(); }
}

const shatterState = new ShatterState();
const dragState = new DragState();
const drawState = new DrawState();
let activeState = shatterState;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') isSlowMotion = true; // <--- ADD THIS
    if (!audioEngine.initialized) audioEngine.init();
    audioEngine.click();

    // Undo Logic
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        if (undoStack.length > 0) {
            const lastBody = undoStack.pop();
            removeArchitectBody(lastBody);
            const nearby = Matter.Query.region(Composite.allBodies(world), lastBody.bounds);
            nearby.forEach(b => Sleeping.set(b, false));
        }
        return;
    }

    // Typing Mode Logic
    if (SETTINGS.spawnMode === 'typing') {
        const bufferDisplay = document.getElementById('typing-buffer-display');

        if (SETTINGS.typingType === 'char') {
            if (e.key.length === 1) triggerSpawn(e.key);
        } else {
            if (e.key === 'Enter') {
                enterHoldStart = performance.now();
            } else if (e.key === 'Backspace') {
                typingBuffer = typingBuffer.slice(0, -1);
                bufferDisplay.innerText = typingBuffer + "_";
            } else if (e.key.length === 1) {
                typingBuffer += e.key;
                bufferDisplay.innerText = typingBuffer + "_";
            }
        }
    }

    activeState?.onKeyDown?.(e);
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') isSlowMotion = false; // <--- ADD THIS
    if (SETTINGS.spawnMode === 'typing' && SETTINGS.typingType === 'enter' && e.key === 'Enter') {
        const bufferDisplay = document.getElementById('typing-buffer-display');
        if (typingBuffer.length > 0) {
            const held = enterHoldStart ? performance.now() - enterHoldStart : 0;
            const clamped = Math.min(2000, Math.max(0, held));
            const massScale = 1 + (clamped / 2000) * 2; 
            const sizeScale = 1 + (clamped / 2000) * 0.2;
            triggerSpawn(typingBuffer, { massScale, sizeScale });
            typingBuffer = "";
            bufferDisplay.innerText = "";
        }
        enterHoldStart = null;
    }
    activeState?.onKeyUp?.(e);
});

const handlePointerDown = (e) => {
    const evt = normalizePointerEvent(e);
    if (!evt) return;
    activeState?.onMouseDown?.(evt);
};
const handlePointerMove = (e) => {
    const evt = normalizePointerEvent(e);
    if (!evt) return;
    activeState?.onMouseMove?.(evt);
};
const handlePointerUp = (e) => {
    const evt = normalizePointerEvent(e);
    if (!evt) return;
    activeState?.onMouseUp?.(evt);
};

canvas.addEventListener('mousedown', handlePointerDown);
canvas.addEventListener('mouseup', handlePointerUp);
canvas.addEventListener('mouseleave', () => activeState?.onMouseLeave?.());
canvas.addEventListener('mousemove', handlePointerMove);

const touchOpts = { passive: false };
canvas.addEventListener('touchstart', (e) => { if (e.cancelable) e.preventDefault(); handlePointerDown(e); }, touchOpts);
canvas.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); handlePointerMove(e); }, touchOpts);
canvas.addEventListener('touchend', (e) => { if (e.cancelable) e.preventDefault(); handlePointerUp(e); }, touchOpts);
canvas.addEventListener('touchcancel', (e) => { if (e.cancelable) e.preventDefault(); activeState?.onMouseLeave?.(); }, touchOpts);

function markStaticDirty() {
    staticDirty = true;
}

function getAvailableParticle() {
    for (let i = 0; i < particles.length; i++) {
        const idx = (particleCursor + i) % particles.length;
        const candidate = particles[idx];
        if (!candidate.active) {
            particleCursor = (idx + 1) % particles.length;
            return candidate;
        }
    }
    return null;
}

function emitParticles(x, y, count = 1) {
    for (let i = 0; i < count; i++) {
        const p = getAvailableParticle();
        if (!p) return;
        p.reset(x, y);
    }
}

function resetParticles() {
    particles.forEach(p => p.active = false);
    particleCursor = 0;
}

function removeArchitectBody(body) {
    Composite.remove(architectLayer, body);
    const idx = undoStack.indexOf(body);
    if (idx > -1) undoStack.splice(idx, 1);
    if (body.label === 'fan-field') {
        fanFields = fanFields.filter(f => f.body !== body);
    }
    if (body.label === 'gravity-well') {
        gravityWells = gravityWells.filter(w => w.body !== body);
    }
    markStaticDirty();
}

function findEraseTarget(pt) {
    const bodies = Composite.allBodies(architectLayer);
    const eraseRadius = 20;
    for (let b of bodies) {
        if (Matter.Vertices.contains(b.vertices, pt) ||
            Math.hypot(b.position.x - pt.x, b.position.y - pt.y) < eraseRadius) {
            return b;
        }
    }
    return null;
}

function getLineProps() {
    if (SETTINGS.lineType === 'kill') {
        return { color: CONFIG.colors.kill, isSensor: true, restitution: 0, label: 'kill-line', pluginLineType: 'kill' };
    }
    if (SETTINGS.lineType === 'bounce') {
        return { color: CONFIG.colors.bounce, isSensor: false, restitution: 1.5, label: 'bounce-line', friction: 0.05, pluginLineType: 'bounce' };
    }
    if (SETTINGS.lineType === 'portal') {
        return { color: currentLineColor || CONFIG.colors.line, isSensor: false, restitution: 0, label: 'drawn-line', friction: SETTINGS.lineFriction, pluginLineType: 'standard' };
    }
    return { color: currentLineColor || CONFIG.colors.line, isSensor: false, restitution: 0, label: 'drawn-line', friction: SETTINGS.lineFriction, pluginLineType: 'standard' };
}

function findOpenPortalId() {
    const bodies = Composite.allBodies(architectLayer);
    const exits = new Set();
    const entries = [];
    for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        const plugin = b.plugin;
        if (!plugin || plugin.lineType !== 'portal') continue;
        const id = plugin.portalId;
        if (typeof id !== 'number') continue;
        if (plugin.portalRole === 'exit' || b.label === 'portal-exit') exits.add(id);
        if (plugin.portalRole === 'entry' || b.label === 'portal-entry') entries.push(id);
    }
    let openId = null;
    for (let i = 0; i < entries.length; i++) {
        const id = entries[i];
        if (exits.has(id)) continue;
        if (openId === null || id > openId) openId = id;
    }
    return openId;
}

function allocatePortalMeta() {
    const openId = findOpenPortalId();
    if (openId !== null) return { portalId: openId, portalRole: 'exit' };
    return { portalId: portalIdCounter++, portalRole: 'entry' };
}

function createFan(pt) {
    const dir = SETTINGS.fanDirection;
    const body = Bodies.circle(pt.x, pt.y, 12, {
        isStatic: true,
        isSensor: true,
        render: { visible: true, fillStyle: '#224466' },
        label: 'fan-field',
        plugin: { dir: { ...dir }, strength: SETTINGS.fanStrength }
    });
    Composite.add(architectLayer, body);
    undoStack.push(body);
    fanFields.push({
        body,
        radius: SETTINGS.fanRadius,
        dir: { ...dir },
        strength: SETTINGS.fanStrength
    });
    markStaticDirty();
}

function createWell(pt) {
    const body = Bodies.circle(pt.x, pt.y, 14, {
        isStatic: true,
        isSensor: true,
        render: { visible: true, fillStyle: '#552266' },
        label: 'gravity-well'
    });
    Composite.add(architectLayer, body);
    undoStack.push(body);
    gravityWells.push({
        body,
        radius: SETTINGS.wellRadius,
        strength: SETTINGS.wellStrength
    });
    markStaticDirty();
}

function createLineSegment(p1, p2, dist) {
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const props = getLineProps();
    const body = Bodies.rectangle(midX, midY, dist, SETTINGS.lineThickness, {
        isStatic: true,
        angle: angle,
        friction: props.friction ?? SETTINGS.lineFriction,
        restitution: props.restitution || 0,
        isSensor: props.isSensor || false,
        render: { visible: true, fillStyle: props.color },
        label: props.label,
        plugin: { lineType: props.pluginLineType ?? SETTINGS.lineType }
    });
    Composite.add(architectLayer, body);
    undoStack.push(body); 
    markStaticDirty();
}

function createPortalLineSegment(p1, p2, dist) {
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const { portalId, portalRole } = allocatePortalMeta();
    const label = portalRole === 'entry' ? 'portal-entry' : 'portal-exit';
    const body = Bodies.rectangle(midX, midY, dist, SETTINGS.lineThickness, {
        isStatic: true,
        angle,
        friction: SETTINGS.lineFriction,
        restitution: 0,
        isSensor: true,
        render: { visible: true, fillStyle: '#ffffff' },
        label,
        plugin: { lineType: 'portal', portalId, portalRole, portalGlowSide: SETTINGS.portalGlowSide }
    });
    Composite.add(architectLayer, body);
    undoStack.push(body);
    markStaticDirty();
}

function createStraightLine(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 5) return; 
    if (SETTINGS.lineType === 'portal') {
        createPortalLineSegment(p1, p2, dist);
        return;
    }
    createLineSegment(p1, p2, dist);
}

// --- GAME LOGIC ---
function refillQueue() {
    let allWords = [];
    SETTINGS.textSource.forEach(s => allWords = allWords.concat(s.split(/\s+/)));
    wordQueue = allWords;
}
refillQueue();

let spawnTimer = 0;
let frameCount = 0;

function triggerSpawn(text, options = {}) {
    const x = (width/2) + (Math.random()-0.5) * (width*0.6);
    const comp = wordFactory.create(text, x, -100, options);
    Composite.rotate(comp, (Math.random()-0.5), {x:x, y:-100});
    Composite.add(world, comp);
    wordComposites.push(comp);
}

Events.on(engine, 'collisionStart', (event) => {
    event.pairs.forEach(pair => {
        const a = pair.bodyA;
        const b = pair.bodyB;
        const killBody = [a, b].find(body => body.label === 'kill-line');
        const bounceBody = [a, b].find(body => body.label === 'bounce-line');
        const portalEntryBody = [a, b].find(body => {
            const plugin = body.plugin;
            if (!plugin || plugin.lineType !== 'portal') return false;
            return plugin.portalRole !== 'exit' && body.label !== 'portal-exit';
        });
        const letterBody = [a, b].find(body => body.plugin && body.plugin.wordComposite);

        if (killBody && letterBody && letterBody.plugin.wordComposite?.plugin?.intact) {
            shatter(letterBody.plugin.wordComposite, letterBody.position);
        }

        if (bounceBody && letterBody) {
            const vy = letterBody.velocity.y;
            const boost = Math.max(6, Math.abs(vy) * 1.1);
            Body.setVelocity(letterBody, { x: letterBody.velocity.x, y: -boost });
            letterBody.restitution = 1.2;
            letterBody.friction = 0.2;
            Sleeping.set(letterBody, false);
            const pan = (letterBody.position.x / width) * 2 - 1;
            audioEngine.bounce(pan);
        }

        if (portalEntryBody && letterBody) {
            teleportThroughPortal(
                portalEntryBody,
                letterBody.plugin.wordComposite,
                letterBody.position,
                { x: letterBody.velocity.x, y: letterBody.velocity.y }
            );
            return;
        }

        const letters = [a, b].filter(body => body.plugin && body.plugin.char);
        if (letters.length === 2 && !killBody && !bounceBody) {
            const relVx = letters[0].velocity.x - letters[1].velocity.x;
            const relVy = letters[0].velocity.y - letters[1].velocity.y;
            const speed = Math.hypot(relVx, relVy);
            if (speed > 6) {
                const pan = ((letters[0].position.x + letters[1].position.x) / 2 / width) * 2 - 1;
                audioEngine.collision(pan);
            }
        }
    });
});

function update() {
    // --- TIME DILATION LOGIC ---
    const targetScale = isSlowMotion ? 0.05 : 1.0;
    // Smoothly interpolate current timeScale to target (0.1 is the smoothing factor)
    engine.timing.timeScale += (targetScale - engine.timing.timeScale) * 0.1;
    // ---------------------------
    frameCount++;
    Engine.update(engine, 1000 / 60);
    engine.world.gravity.y = SETTINGS.gravity;

    // Only Auto-Spawn if in Auto Mode
    if (SETTINGS.spawnMode === 'auto') {
        if (spawnTimer <= 0) {
            if (wordQueue.length === 0 && SETTINGS.loop) refillQueue();
            if (wordQueue.length > 0) {
                triggerSpawn(wordQueue.shift());
                spawnTimer = SETTINGS.spawnInterval;
            }
        }
        spawnTimer--;
    }

    applyFanForces();
    applyGravityWells();
    updateAudioTension();
    garbageCollect();
    draw();
    requestAnimationFrame(update);
}

function checkShatterAt(point) {
    wordComposites.forEach(comp => {
        if (!comp.plugin.intact) return;
        const bodies = Composite.allBodies(comp);
        if (!bodies.length) return;

        let cx = 0, cy = 0;
        bodies.forEach(b => { cx += b.position.x; cy += b.position.y; });
        cx /= bodies.length; cy /= bodies.length;

        if (Math.hypot(point.x - cx, point.y - cy) < CONFIG.disruptRadius) {
            shatter(comp, point);
        }
    });
}

function shatter(comp, source) {
    if (!comp.plugin.intact) return;
    comp.plugin.intact = false;
    Composite.remove(comp, Composite.allConstraints(comp)); 
    audioEngine.explosion((source.x / width) * 2 - 1); 

    Composite.allBodies(comp).forEach(b => {
        b.plugin.char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        b.plugin.isBroken = true;
        b.friction = 0.05; 
        b.restitution = 0.1;
        Sleeping.set(b, false);
        const fx = b.position.x - source.x;
        const fy = b.position.y - source.y;
        const len = Math.hypot(fx, fy) || 1;
        const forceMag = SETTINGS.force * b.mass;
        Body.applyForce(b, b.position, { x: (fx/len)*forceMag, y: (fy/len)*forceMag });
        Body.setAngularVelocity(b, (Math.random()-0.5)*0.3);

        emitParticles(b.position.x, b.position.y, 3);
    });
    glitchIntensity = 5;
}

function applyFanForces() {
    if (fanFields.length === 0) return;
    const bodies = Composite.allBodies(world).filter(b => b.plugin && b.plugin.char);
    fanFields.forEach(fan => {
        bodies.forEach(b => {
            const dx = b.position.x - fan.body.position.x;
            const dy = b.position.y - fan.body.position.y;
            const dist = Math.hypot(dx, dy);
            if (dist < fan.radius) {
                const falloff = 1 - (dist / fan.radius);
                Body.applyForce(b, b.position, { 
                    x: fan.dir.x * fan.strength * falloff * b.mass, 
                    y: fan.dir.y * fan.strength * falloff * b.mass 
                });
            }
        });
    });
}

function applyGravityWells() {
    if (gravityWells.length === 0) return;
    const bodies = Composite.allBodies(world).filter(b => b.plugin && b.plugin.char);
    gravityWells.forEach(well => {
        bodies.forEach(b => {
            const dx = well.body.position.x - b.position.x;
            const dy = well.body.position.y - b.position.y;
            const dist = Math.hypot(dx, dy) || 0.0001;
            if (dist < well.radius) {
                const falloff = 1 - (dist / well.radius);
                const forceMag = well.strength * falloff * b.mass;
                Body.applyForce(b, b.position, { x: (dx / dist) * forceMag, y: (dy / dist) * forceMag });
            }
        });
    });
}

function clamp01(v) {
    return Math.max(0, Math.min(1, v));
}

function getCenterline(body) {
    const v = body.vertices;
    if (!v || v.length < 4) return null;
    const a = { x: (v[0].x + v[3].x) / 2, y: (v[0].y + v[3].y) / 2 };
    const b = { x: (v[1].x + v[2].x) / 2, y: (v[1].y + v[2].y) / 2 };
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx, dy) || 0.0001;
    return { a, b, length, along: { x: dx / length, y: dy / length } };
}

function getThickness(body) {
    const v = body.vertices;
    if (!v || v.length < 4) return SETTINGS.lineThickness;
    return Math.hypot(v[0].x - v[3].x, v[0].y - v[3].y) || SETTINGS.lineThickness;
}

function getPortalNormal(body) {
    const sign = body.plugin?.portalGlowSide === -1 ? -1 : 1;
    const line = getCenterline(body);
    if (!line) return { x: 0, y: -1 };
    let ax = line.along.x;
    let ay = line.along.y;
    if (ax < 0 || (Math.abs(ax) < 1e-6 && ay < 0)) {
        ax = -ax;
        ay = -ay;
    }
    return { x: -ay * sign, y: ax * sign };
}

function findPortalExitBody(portalId) {
    const bodies = Composite.allBodies(architectLayer);
    for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        const plugin = b.plugin;
        if (!plugin || plugin.lineType !== 'portal') continue;
        if (plugin.portalId !== portalId) continue;
        if (plugin.portalRole === 'exit' || b.label === 'portal-exit') return b;
    }
    return null;
}

function teleportThroughPortal(entryBody, wordComposite, hitPoint, incomingVelocity) {
    if (!entryBody || !wordComposite) return;
    const portalId = entryBody.plugin?.portalId;
    if (typeof portalId !== 'number') return;

    const exitBody = findPortalExitBody(portalId);
    if (!exitBody) return;

    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    const cooldown = 200;
    if (wordComposite.plugin?.lastTeleportTime && now - wordComposite.plugin.lastTeleportTime < cooldown) return;

    const bodies = Composite.allBodies(wordComposite);
    if (!bodies.length) return;

    let cx = 0, cy = 0;
    bodies.forEach(b => { cx += b.position.x; cy += b.position.y; });
    cx /= bodies.length;
    cy /= bodies.length;

    const entryLine = getCenterline(entryBody);
    const exitLine = getCenterline(exitBody);
    if (!entryLine || !exitLine) return;

    const hit = hitPoint || { x: cx, y: cy };
    const entryNormal = getPortalNormal(entryBody);
    const entrySideDist = ((hit.x - entryBody.position.x) * entryNormal.x) + ((hit.y - entryBody.position.y) * entryNormal.y);
    if (entrySideDist < 0) return;

    let inVx = incomingVelocity?.x ?? 0;
    let inVy = incomingVelocity?.y ?? 0;
    let inSpeed = Math.hypot(inVx, inVy);
    if (inSpeed > 0.01) {
        const movingTowardDoor = (inVx * entryNormal.x) + (inVy * entryNormal.y);
        if (movingTowardDoor > 0) return;
    }

    const hx = hit.x - entryLine.a.x;
    const hy = hit.y - entryLine.a.y;
    const alongDist = hx * entryLine.along.x + hy * entryLine.along.y;
    const t = clamp01(alongDist / entryLine.length);

    const baseX = exitLine.a.x + exitLine.along.x * (t * exitLine.length);
    const baseY = exitLine.a.y + exitLine.along.y * (t * exitLine.length);
    const exitNormal = getPortalNormal(exitBody);
    const offset = (getThickness(exitBody) / 2) + 18;
    const targetX = baseX + exitNormal.x * offset;
    const targetY = baseY + exitNormal.y * offset;

    const dx = targetX - cx;
    const dy = targetY - cy;
    if (inSpeed <= 0.01) {
        let avgVx = 0;
        let avgVy = 0;
        bodies.forEach(b => { avgVx += b.velocity.x; avgVy += b.velocity.y; });
        avgVx /= bodies.length;
        avgVy /= bodies.length;
        inSpeed = Math.hypot(avgVx, avgVy);
    }
    const outVx = exitNormal.x * inSpeed;
    const outVy = exitNormal.y * inSpeed;
    bodies.forEach(b => {
        Body.translate(b, { x: dx, y: dy });
        Body.setVelocity(b, { x: outVx, y: outVy });
        Sleeping.set(b, false);
        if (b.plugin) b.plugin.lastTeleportTime = now;
    });
    if (wordComposite.plugin) wordComposite.plugin.lastTeleportTime = now;
}

function updateAudioTension() {
    const textBodies = Composite.allBodies(world).filter(b => b.plugin && b.plugin.char);
    if (textBodies.length === 0) {
        audioEngine.setTension(0);
        return;
    }
    const highest = Math.min(...textBodies.map(b => b.position.y));
    const tension = Math.max(0, 1 - (highest / (height * 0.8)));
    audioEngine.setTension(Math.min(1, tension));
}

function garbageCollect() {
    // Standard off-screen removal
    if (frameCount % 60 === 0) {
        const all = Composite.allBodies(world);
        const toRemove = [];
        const now = Date.now();
        const lifeLimit = SETTINGS.lifetime < 61 ? SETTINGS.lifetime * 1000 : Infinity;

        for (let i = 0; i < all.length; i++) {
            const b = all[i];

            // Remove if far below screen
            if (b.position.y > height + 200) {
                toRemove.push(b);
                continue;
            }

            // Remove if lifetime exceeded
            if (b.plugin && b.plugin.birthTime) {
                const age = now - b.plugin.birthTime;
                if (age > lifeLimit) {
                    toRemove.push(b);
                }
            }
        }

        if (toRemove.length > 0) Composite.remove(world, toRemove);

        // Count cap check
        const textBodies = Composite.allBodies(world).filter(b => b.plugin && b.plugin.char);
        if (textBodies.length > CONFIG.maxBodies) {
            const excess = textBodies.slice(0, textBodies.length - CONFIG.maxBodies);
            Composite.remove(world, excess);
        }
    }
}

function renderStaticLayer() {
    if (!staticCtx || !staticDirty) return;
    staticDirty = false;

    staticCtx.setTransform(1, 0, 0, 1, 0, 0);
    staticCtx.clearRect(0, 0, width * dpr, height * dpr);
    staticCtx.scale(dpr, dpr);

    // Static grid once to avoid per-frame draw cost
    staticCtx.save();
    staticCtx.strokeStyle = '#111';
    staticCtx.globalAlpha = 0.25;
    const step = 60;
    for (let x = (width % step); x < width; x += step) {
        staticCtx.beginPath();
        staticCtx.moveTo(x, 0);
        staticCtx.lineTo(x, height);
        staticCtx.stroke();
    }
    for (let y = (height % step); y < height; y += step) {
        staticCtx.beginPath();
        staticCtx.moveTo(0, y);
        staticCtx.lineTo(width, y);
        staticCtx.stroke();
    }
    staticCtx.restore();

    const architectBodies = Composite.allBodies(architectLayer);
    architectBodies.forEach(b => {
        if (b.label === 'fan-field') {
            const fan = fanFields.find(f => f.body === b);
            const dir = fan?.dir || b.plugin?.dir || { x: 0, y: -1 };
            const radius = fan?.radius || SETTINGS.fanRadius;
            staticCtx.save();
            staticCtx.translate(b.position.x, b.position.y);
            staticCtx.strokeStyle = '#77aaff';
            staticCtx.lineWidth = 1;
            staticCtx.globalAlpha = 0.2;
            staticCtx.beginPath();
            staticCtx.arc(0, 0, radius, 0, Math.PI*2);
            staticCtx.stroke();
            staticCtx.globalAlpha = 1;
            staticCtx.beginPath();
            staticCtx.arc(0, 0, 12, 0, Math.PI*2);
            staticCtx.fillStyle = '#0f1f3a';
            staticCtx.fill();
            staticCtx.stroke();
            staticCtx.rotate(Math.atan2(dir.y, dir.x));
            staticCtx.fillStyle = '#77aaff';
            staticCtx.beginPath();
            staticCtx.moveTo(-6, 4);
            staticCtx.lineTo(6, 0);
            staticCtx.lineTo(-6, -4);
            staticCtx.closePath();
            staticCtx.fill();
            staticCtx.restore();
            return;
        }
        if (b.label === 'gravity-well') {
            const well = gravityWells.find(w => w.body === b);
            const radius = well?.radius || SETTINGS.wellRadius;
            staticCtx.save();
            staticCtx.translate(b.position.x, b.position.y);
            staticCtx.strokeStyle = '#aa88ff';
            staticCtx.lineWidth = 1;
            staticCtx.globalAlpha = 0.25;
            staticCtx.beginPath();
            staticCtx.arc(0, 0, radius, 0, Math.PI*2);
            staticCtx.stroke();
            staticCtx.globalAlpha = 1;
            staticCtx.beginPath();
            staticCtx.arc(0, 0, 14, 0, Math.PI*2);
            staticCtx.fillStyle = '#552266';
            staticCtx.fill();
            staticCtx.stroke();
            staticCtx.restore();
            return;
        }

        if (b.label === 'portal-entry' || b.label === 'portal-exit' || b.label === 'portal-line') {
            const line = getCenterline(b);
            if (!line) return;
            const thickness = getThickness(b);
            const n = getPortalNormal(b);

            staticCtx.save();
            staticCtx.lineCap = 'butt';
            staticCtx.strokeStyle = '#ffffff';
            staticCtx.lineWidth = thickness;
            staticCtx.shadowColor = CONFIG.colors.portal;
            staticCtx.shadowBlur = 18;
            staticCtx.shadowOffsetX = n.x * 12;
            staticCtx.shadowOffsetY = n.y * 12;
            staticCtx.beginPath();
            staticCtx.moveTo(line.a.x, line.a.y);
            staticCtx.lineTo(line.b.x, line.b.y);
            staticCtx.stroke();

            staticCtx.shadowBlur = 0;
            staticCtx.shadowOffsetX = 0;
            staticCtx.shadowOffsetY = 0;
            staticCtx.globalAlpha = 0.95;
            staticCtx.lineWidth = Math.max(1, thickness - 1);
            staticCtx.beginPath();
            staticCtx.moveTo(line.a.x, line.a.y);
            staticCtx.lineTo(line.b.x, line.b.y);
            staticCtx.stroke();

            const midX = (line.a.x + line.b.x) / 2;
            const midY = (line.a.y + line.b.y) / 2;
            const arcSpan = Math.min(52, line.length * 0.8);
            const half = arcSpan / 2;
            const p1X = midX - line.along.x * half;
            const p1Y = midY - line.along.y * half;
            const p2X = midX + line.along.x * half;
            const p2Y = midY + line.along.y * half;
            const bulge = Math.min(28, arcSpan * 0.65);
            const cX = midX + n.x * bulge;
            const cY = midY + n.y * bulge;

            staticCtx.lineCap = 'round';
            staticCtx.globalAlpha = 0.85;
            staticCtx.strokeStyle = '#ffffff';
            staticCtx.lineWidth = Math.max(1, thickness * 0.3);
            staticCtx.shadowColor = CONFIG.colors.portal;
            staticCtx.shadowBlur = 12;
            staticCtx.beginPath();
            staticCtx.moveTo(p1X, p1Y);
            staticCtx.quadraticCurveTo(cX, cY, p2X, p2Y);
            staticCtx.stroke();
            staticCtx.restore();
            return;
        }

        if (b.label === 'drawn-line' || b.label === 'kill-line' || b.label === 'bounce-line') {
            staticCtx.beginPath();
            staticCtx.moveTo(b.vertices[0].x, b.vertices[0].y);
            for(let j=1; j<b.vertices.length; j++) {
                staticCtx.lineTo(b.vertices[j].x, b.vertices[j].y);
            }
            staticCtx.lineTo(b.vertices[0].x, b.vertices[0].y);

            staticCtx.fillStyle = b.render.fillStyle || '#ffffff';
            staticCtx.globalAlpha = b.label === 'kill-line' ? 0.7 : 1;
            staticCtx.fill();

            staticCtx.beginPath();
            staticCtx.strokeStyle = b.render.fillStyle || '#ffffff';
            staticCtx.globalAlpha = 0.6;
            staticCtx.lineWidth = 1;
            staticCtx.moveTo(b.vertices[0].x, b.vertices[0].y);
            for(let j=1; j<b.vertices.length; j++) staticCtx.lineTo(b.vertices[j].x, b.vertices[j].y);
            staticCtx.stroke();
            staticCtx.globalAlpha = 1.0;
        }
    });
}

function drawHoveredArchitect(ctx) {
    const body = drawState.hoveredEraseBody;
    if (!body) return;
    ctx.save();
    ctx.strokeStyle = '#ff5555';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.8;
    if (body.label === 'fan-field') {
        const fan = fanFields.find(f => f.body === body);
        const radius = fan?.radius || SETTINGS.fanRadius;
        ctx.beginPath();
        ctx.arc(body.position.x, body.position.y, radius, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(body.position.x, body.position.y, 12, 0, Math.PI*2);
        ctx.stroke();
    } else if (body.label === 'gravity-well') {
        const well = gravityWells.find(w => w.body === body);
        const radius = well?.radius || SETTINGS.wellRadius;
        ctx.beginPath();
        ctx.arc(body.position.x, body.position.y, radius, 0, Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(body.position.x, body.position.y, 14, 0, Math.PI*2);
        ctx.stroke();
    } else {
        const verts = body.vertices;
        ctx.beginPath();
        ctx.moveTo(verts[0].x, verts[0].y);
        for (let j = 1; j < verts.length; j++) ctx.lineTo(verts[j].x, verts[j].y);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.restore();
}

// --- RENDERER ---
function draw() {
    ctx.clearRect(0,0,width,height);
    if(glitchIntensity > 0.1) {
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--bg');
        ctx.fillRect(0,0,width,height);
    }

    let ox = 0, oy = 0;
    if(glitchIntensity > 0.1) {
        ox = (Math.random()-0.5)*glitchIntensity;
        oy = (Math.random()-0.5)*glitchIntensity;
        glitchIntensity *= 0.9;
    }

    ctx.save();
    ctx.translate(ox, oy);

    renderStaticLayer();
    if (staticCtx) ctx.drawImage(staticCanvas, 0, 0, width, height);
    drawHoveredArchitect(ctx);

    const bodies = Composite.allBodies(world);
    const now = Date.now();
    const lifeLimit = SETTINGS.lifetime < 61 ? SETTINGS.lifetime * 1000 : Infinity;

    // Draw Words
    bodies.forEach(b => {
        if (b.plugin && b.plugin.char) {
            ctx.save();

            // Fade out logic if close to death
            let alpha = 1.0;
            if (lifeLimit !== Infinity && b.plugin.birthTime) {
                const age = now - b.plugin.birthTime;
                const remaining = lifeLimit - age;
                if (remaining < 1000) { // fade out in last 1 second
                    alpha = Math.max(0, remaining / 1000);
                }
            }
            ctx.globalAlpha = alpha;

            ctx.translate(b.position.x, b.position.y);
            ctx.rotate(b.angle);
            ctx.textAlign="center"; ctx.textBaseline="middle";
            ctx.font = `${b.plugin.size || CONFIG.fontSize}px 'Courier New'`;

            const isHebrew = /[\u0590-\u05FF]/.test(b.plugin.char);
            if (isHebrew && !b.plugin.isBroken) {
                ctx.shadowColor = CONFIG.colors.hebrew;
                ctx.shadowBlur = 10; 
            }

            if (b.plugin.isBroken) {
                ctx.fillStyle = CONFIG.colors.shard;
                if(Math.random()>0.98) ctx.fillStyle='#fff'; 
            } else {
                ctx.fillStyle = b.isSleeping ? '#888' : b.plugin.color;
            }
            ctx.fillText(b.plugin.char, 0, 0);
            ctx.shadowBlur = 0;
            ctx.restore();
        }
    });

    // Draw Particles
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!p.active) continue;
        if (!p.update()) continue;
        p.draw(ctx, CONFIG.colors.dust);
    }
    ctx.globalAlpha = 1;

    // Draw Tool Overlays
    if (SETTINGS.interactionMode === 'draw' && drawState.currentPoint) {
        if (SETTINGS.architectTool === 'line' && drawState.isDrawing && drawState.startPoint) {
            ctx.beginPath();
            ctx.moveTo(drawState.startPoint.x, drawState.startPoint.y);
            ctx.lineTo(drawState.currentPoint.x, drawState.currentPoint.y);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
        } else if (SETTINGS.architectTool === 'eraser') {
            ctx.beginPath();
            ctx.arc(drawState.currentPoint.x, drawState.currentPoint.y, 20, 0, Math.PI*2);
            ctx.strokeStyle = drawState.hoveredEraseBody ? '#ff5555' : '#777';
            ctx.lineWidth = drawState.hoveredEraseBody ? 2 : 1;
            ctx.stroke();
        }
    }

    ctx.restore();
}

// --- CONTROLS ---
const panel = document.getElementById('control-panel');
const trigger = document.getElementById('settings-trigger');
trigger.addEventListener('click', () => panel.classList.toggle('active'));
document.addEventListener('click', () => { if(!audioEngine.initialized) audioEngine.init(); });
document.addEventListener('touchstart', () => { if(!audioEngine.initialized) audioEngine.init(); }, { passive: true });

const bindSlider = (id, settingKey, displayId) => {
    const el = document.getElementById(id);
    const disp = document.getElementById(displayId);
    el.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        SETTINGS[settingKey] = val;
        disp.innerText = val;
    });
};
bindSlider('inp-gravity', 'gravity', 'val-gravity');
bindSlider('inp-force', 'force', 'val-force');
bindSlider('inp-speed', 'spawnInterval', 'val-speed');
bindSlider('inp-friction', 'lineFriction', 'val-friction');
bindSlider('inp-thickness', 'lineThickness', 'val-thickness');

// Custom Logic for Lifetime Slider
const lifetimeSlider = document.getElementById('inp-lifetime');
const lifetimeVal = document.getElementById('val-lifetime');
lifetimeSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    SETTINGS.lifetime = val;
    if (val === 61) {
        lifetimeVal.innerText = "∞";
    } else {
        lifetimeVal.innerText = val + "s";
    }
});

const btnLineStandard = document.getElementById('btn-line-standard');
const btnLineKill = document.getElementById('btn-line-kill');
const btnLineBounce = document.getElementById('btn-line-bounce');
const btnLinePortal = document.getElementById('btn-line-portal');
const portalControls = document.getElementById('portal-controls');
const btnPortalLeft = document.getElementById('btn-portal-left');
const btnPortalRight = document.getElementById('btn-portal-right');

const setPortalGlowSide = (side) => {
    SETTINGS.portalGlowSide = side === -1 ? -1 : 1;
    btnPortalLeft?.classList.toggle('active', SETTINGS.portalGlowSide === 1);
    btnPortalRight?.classList.toggle('active', SETTINGS.portalGlowSide === -1);
};
btnPortalLeft?.addEventListener('click', () => setPortalGlowSide(1));
btnPortalRight?.addEventListener('click', () => setPortalGlowSide(-1));
setPortalGlowSide(SETTINGS.portalGlowSide);

const setLineType = (type) => {
    SETTINGS.lineType = type;
    btnLineStandard.classList.toggle('active', type === 'standard');
    btnLineKill.classList.toggle('active', type === 'kill');
    btnLineBounce.classList.toggle('active', type === 'bounce');
    btnLinePortal.classList.toggle('active', type === 'portal');
    if (portalControls) portalControls.style.display = type === 'portal' ? 'block' : 'none';
};

btnLineStandard.addEventListener('click', () => setLineType('standard'));
btnLineKill.addEventListener('click', () => setLineType('kill'));
btnLineBounce.addEventListener('click', () => setLineType('bounce'));
btnLinePortal.addEventListener('click', () => setLineType('portal'));

const btnFanLeft = document.getElementById('btn-fan-left');
const btnFanUp = document.getElementById('btn-fan-up');
const btnFanRight = document.getElementById('btn-fan-right');
const btnFanDown = document.getElementById('btn-fan-down');

const setFanDirection = (dir) => {
    SETTINGS.fanDirection = dir;
    btnFanLeft.classList.toggle('active', dir.x === -1 && dir.y === 0);
    btnFanUp.classList.toggle('active', dir.x === 0 && dir.y === -1);
    btnFanRight.classList.toggle('active', dir.x === 1 && dir.y === 0);
    btnFanDown.classList.toggle('active', dir.x === 0 && dir.y === 1);
    markStaticDirty();
};

btnFanLeft.addEventListener('click', () => setFanDirection({ x: -1, y: 0 }));
btnFanUp.addEventListener('click', () => setFanDirection({ x: 0, y: -1 }));
btnFanRight.addEventListener('click', () => setFanDirection({ x: 1, y: 0 }));
btnFanDown.addEventListener('click', () => setFanDirection({ x: 0, y: 1 }));

const fanStrengthSlider = document.getElementById('inp-fan-strength');
const fanStrengthVal = document.getElementById('val-fan-strength');
fanStrengthSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    SETTINGS.fanStrength = val;
    fanStrengthVal.innerText = val.toFixed(4);
    fanFields.forEach(f => f.strength = val);
});

const wellStrengthSlider = document.getElementById('inp-well-strength');
const wellStrengthVal = document.getElementById('val-well-strength');
wellStrengthSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    SETTINGS.wellStrength = val;
    wellStrengthVal.innerText = val.toFixed(4);
    gravityWells.forEach(w => w.strength = val);
});

const wellRadiusSlider = document.getElementById('inp-well-radius');
const wellRadiusVal = document.getElementById('val-well-radius');
wellRadiusSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    SETTINGS.wellRadius = val;
    wellRadiusVal.innerText = val;
    gravityWells.forEach(w => w.radius = val);
    markStaticDirty();
});

const volMasterSlider = document.getElementById('inp-vol');
const volMasterVal = document.getElementById('val-vol');
const volExplosionSlider = document.getElementById('inp-vol-explosion');
const volExplosionVal = document.getElementById('val-vol-explosion');
const volCollisionSlider = document.getElementById('inp-vol-collision');
const volCollisionVal = document.getElementById('val-vol-collision');
const volBounceSlider = document.getElementById('inp-vol-bounce');
const volBounceVal = document.getElementById('val-vol-bounce');
const volTypingSlider = document.getElementById('inp-vol-typing');
const volTypingVal = document.getElementById('val-vol-typing');

const syncMasterVolume = () => {
    const val = parseFloat(volMasterSlider.value);
    volMasterVal.innerText = val.toFixed(2);
    audioEngine.setVolume(val);
};
const syncExplosionVolume = () => {
    const val = parseFloat(volExplosionSlider.value);
    volExplosionVal.innerText = val.toFixed(2);
    audioEngine.setCategoryVolume('explosion', val);
};
const syncCollisionVolume = () => {
    const val = parseFloat(volCollisionSlider.value);
    volCollisionVal.innerText = val.toFixed(2);
    audioEngine.setCategoryVolume('collision', val);
};
const syncBounceVolume = () => {
    const val = parseFloat(volBounceSlider.value);
    volBounceVal.innerText = val.toFixed(2);
    audioEngine.setCategoryVolume('bounce', val);
};
const syncTypingVolume = () => {
    const val = parseFloat(volTypingSlider.value);
    volTypingVal.innerText = val.toFixed(2);
    audioEngine.setCategoryVolume('typing', val);
};

volMasterSlider.addEventListener('input', syncMasterVolume);
volExplosionSlider.addEventListener('input', syncExplosionVolume);
volCollisionSlider.addEventListener('input', syncCollisionVolume);
volBounceSlider.addEventListener('input', syncBounceVolume);
volTypingSlider.addEventListener('input', syncTypingVolume);
// Initialize displayed values to match defaults
syncMasterVolume();
syncExplosionVolume();
syncCollisionVolume();
syncBounceVolume();
syncTypingVolume();
document.getElementById('btn-audio-toggle').addEventListener('click', (e) => {
    e.stopPropagation(); 
    audioEngine.toggle();
});

// Mode Toggles
const btnDrag = document.getElementById('btn-mode-drag');
const btnShatter = document.getElementById('btn-mode-shatter');
const btnDraw = document.getElementById('btn-mode-draw');

const setMode = (mode) => {
    activeState?.exit?.();
    SETTINGS.interactionMode = mode;
    activeState = mode === 'drag' ? dragState : (mode === 'draw' ? drawState : shatterState);
    activeState?.enter?.();
    btnDrag.classList.toggle('active', mode === 'drag');
    btnShatter.classList.toggle('active', mode === 'shatter');
    btnDraw.classList.toggle('active', mode === 'draw');

    document.body.classList.remove('mode-drag', 'mode-shatter', 'mode-draw');
    document.body.classList.add(`mode-${mode}`);
    if (mode !== 'draw') drawState.reset();
};

btnDrag.addEventListener('click', () => setMode('drag'));
btnShatter.addEventListener('click', () => setMode('shatter'));
btnDraw.addEventListener('click', () => setMode('draw'));

// Architect Sub-Tools
const btnToolFree = document.getElementById('btn-tool-free');
const btnToolLine = document.getElementById('btn-tool-line');
const btnToolFan = document.getElementById('btn-tool-fan');
const btnToolWell = document.getElementById('btn-tool-well');
const btnToolErase = document.getElementById('btn-tool-erase');

const setArchitectTool = (tool) => {
    SETTINGS.architectTool = tool;
    btnToolFree.classList.toggle('active', tool === 'freehand');
    btnToolLine.classList.toggle('active', tool === 'line');
    btnToolFan.classList.toggle('active', tool === 'fan');
    btnToolWell.classList.toggle('active', tool === 'well');
    btnToolErase.classList.toggle('active', tool === 'eraser');

    document.body.classList.remove('tool-free', 'tool-line', 'tool-fan', 'tool-well', 'tool-erase');
    document.body.classList.add(`tool-${tool}`);
};

btnToolFree.addEventListener('click', () => setArchitectTool('freehand'));
btnToolLine.addEventListener('click', () => setArchitectTool('line'));
btnToolFan.addEventListener('click', () => setArchitectTool('fan'));
btnToolWell.addEventListener('click', () => setArchitectTool('well'));
btnToolErase.addEventListener('click', () => setArchitectTool('eraser'));
document.body.classList.add('tool-free');
setMode('shatter');

// Trigger Mode Toggles
const btnTrigClick = document.getElementById('btn-trigger-click');
const btnTrigHover = document.getElementById('btn-trigger-hover');

btnTrigClick.addEventListener('click', () => {
    SETTINGS.triggerMode = 'click';
    btnTrigClick.classList.add('active');
    btnTrigHover.classList.remove('active');
});
btnTrigHover.addEventListener('click', () => {
    SETTINGS.triggerMode = 'hover';
    btnTrigHover.classList.add('active');
    btnTrigClick.classList.remove('active');
});

// --- NEW SPAWN MODE TOGGLES ---
const btnSpawnAuto = document.getElementById('btn-spawn-auto');
const btnSpawnType = document.getElementById('btn-spawn-type');
const typingSettingsDiv = document.getElementById('typing-settings');

btnSpawnAuto.addEventListener('click', () => {
    SETTINGS.spawnMode = 'auto';
    btnSpawnAuto.classList.add('active');
    btnSpawnType.classList.remove('active');
    typingSettingsDiv.style.display = 'none';
});

btnSpawnType.addEventListener('click', () => {
    SETTINGS.spawnMode = 'typing';
    btnSpawnType.classList.add('active');
    btnSpawnAuto.classList.remove('active');
    typingSettingsDiv.style.display = 'flex';
    typingBuffer = "";
    document.getElementById('typing-buffer-display').innerText = "";
});

const btnTypeChar = document.getElementById('btn-type-char');
const btnTypeEnter = document.getElementById('btn-type-enter');
const typeDesc = document.getElementById('type-desc');

btnTypeChar.addEventListener('click', () => {
    SETTINGS.typingType = 'char';
    btnTypeChar.classList.add('active');
    btnTypeEnter.classList.remove('active');
    typeDesc.innerText = TRANSLATIONS[SETTINGS.language].desc_type_char;
    typingBuffer = "";
    document.getElementById('typing-buffer-display').innerText = "";
});

btnTypeEnter.addEventListener('click', () => {
    SETTINGS.typingType = 'enter';
    btnTypeEnter.classList.add('active');
    btnTypeChar.classList.remove('active');
    typeDesc.innerText = TRANSLATIONS[SETTINGS.language].desc_type_enter;
});

document.getElementById('btn-update-text').addEventListener('click', () => {
    const raw = document.getElementById('inp-text').value;
    if (raw.trim().length > 0) {
        SETTINGS.textSource = [raw];
        refillQueue();
    }
});

document.getElementById('btn-clear').addEventListener('click', () => {
    Composite.clear(world, false, true); 
    Composite.clear(architectLayer, false, true);
    Composite.add(world, architectLayer);
    Composite.add(world, mouseConstraint);
    resize(); 
    wordComposites = [];
    refillQueue();
    undoStack = [];
    fanFields = [];
    gravityWells = [];
    portalIdCounter = 1;
    resetParticles();
    markStaticDirty();
});
document.getElementById('inp-loop').addEventListener('change', (e) => SETTINGS.loop = e.target.checked);

// --- NEW FEATURES IMPLEMENTATION ---

// 1. SWEEP DEBRIS
document.getElementById('btn-sweep').addEventListener('click', () => {
    const all = Composite.allBodies(world);
    const debris = all.filter(b => b.plugin && b.plugin.isBroken);
    Composite.remove(world, debris);
    resetParticles();
});

// 2. SAVE LAYOUT
document.getElementById('btn-save').addEventListener('click', () => {
	    const lines = Composite.allBodies(architectLayer).map(b => {
        if (b.label === 'fan-field') {
            const fan = fanFields.find(f => f.body === b);
            return {
                kind: 'fan',
                x: b.position.x,
                y: b.position.y,
                dir: fan?.dir || b.plugin?.dir || { x: 0, y: -1 },
                strength: fan?.strength || SETTINGS.fanStrength,
                radius: fan?.radius || SETTINGS.fanRadius
            };
        }
        if (b.label === 'gravity-well') {
            const well = gravityWells.find(w => w.body === b);
            return {
                kind: 'well',
                x: b.position.x,
                y: b.position.y,
                strength: well?.strength || SETTINGS.wellStrength,
                radius: well?.radius || SETTINGS.wellRadius
            };
	        }
	        const len = Math.hypot(b.vertices[1].x - b.vertices[0].x, b.vertices[1].y - b.vertices[0].y);
	        const thickness = Math.hypot(b.vertices[0].x - b.vertices[3].x, b.vertices[0].y - b.vertices[3].y);
	        const lineType = b.plugin?.lineType || 'standard';
	        const out = { 
	            kind: 'line',
	            x: b.position.x, 
	            y: b.position.y, 
	            angle: b.angle, 
	            length: len,
	            thickness: thickness,
	            color: b.render.fillStyle || '#ffffff',
	            lineType
	        };
	        if (lineType === 'portal') {
	            out.portalId = b.plugin?.portalId;
	            out.portalRole = b.plugin?.portalRole || (b.label === 'portal-exit' ? 'exit' : 'entry');
	            out.portalGlowSide = b.plugin?.portalGlowSide === -1 ? -1 : 1;
	        }
	        return out;
	    });

    localStorage.setItem('babel_architect_v1', JSON.stringify(lines));

    const btn = document.getElementById('btn-save');
    const original = btn.innerText;
    btn.innerText = TRANSLATIONS[SETTINGS.language].btn_saved;
    setTimeout(() => btn.innerText = original, 1000);
});

// 3. LOAD LAYOUT
	document.getElementById('btn-load').addEventListener('click', () => {
	    const raw = localStorage.getItem('babel_architect_v1');
	    if (!raw) return;

	    Composite.clear(architectLayer, false, true);
	    undoStack = [];
	    fanFields = [];
	    gravityWells = [];
	    portalIdCounter = 1;
	    markStaticDirty();

	    const data = JSON.parse(raw);
	    let maxPortalId = 0;
	    let legacyPortalPendingId = null;
	    data.forEach(item => {
        if (item.kind === 'fan') {
            const body = Bodies.circle(item.x, item.y, 12, {
                isStatic: true,
                isSensor: true,
                render: { visible: true, fillStyle: '#224466' },
                label: 'fan-field',
                plugin: { dir: { ...(item.dir || { x: 0, y: -1 }) }, strength: item.strength || SETTINGS.fanStrength }
            });
            Composite.add(architectLayer, body);
            undoStack.push(body);
            fanFields.push({
                body,
                radius: item.radius || SETTINGS.fanRadius,
                dir: { ...(item.dir || { x: 0, y: -1 }) },
                strength: item.strength || SETTINGS.fanStrength
            });
            return;
        }
        if (item.kind === 'well') {
            const body = Bodies.circle(item.x, item.y, 14, {
                isStatic: true,
                isSensor: true,
                render: { visible: true, fillStyle: '#552266' },
                label: 'gravity-well'
            });
            Composite.add(architectLayer, body);
            undoStack.push(body);
            gravityWells.push({
                body,
                radius: item.radius || SETTINGS.wellRadius,
                strength: item.strength || SETTINGS.wellStrength
            });
            return;
	        }

	        const lineType = item.lineType || 'standard';
	        const color = item.color || (
	            lineType === 'kill' ? CONFIG.colors.kill :
	            lineType === 'bounce' ? CONFIG.colors.bounce :
	            currentLineColor
	        );
	        const isPortal = lineType === 'portal';
	        const isKill = lineType === 'kill';
	        if (isPortal) {
	            const portalGlowSide = item.portalGlowSide === -1 ? -1 : 1;
	            let portalId = (typeof item.portalId === 'number') ? item.portalId : null;
	            let portalRole = item.portalRole === 'exit' ? 'exit' : (item.portalRole === 'entry' ? 'entry' : null);

	            if (portalId === null) {
	                if (legacyPortalPendingId === null) {
	                    portalId = maxPortalId + 1;
	                    legacyPortalPendingId = portalId;
	                    portalRole = portalRole || 'entry';
	                } else {
	                    portalId = legacyPortalPendingId;
	                    legacyPortalPendingId = null;
	                    portalRole = portalRole || 'exit';
	                }
	            }
	            maxPortalId = Math.max(maxPortalId, portalId);

	            const label = portalRole === 'exit' ? 'portal-exit' : 'portal-entry';
	            const body = Bodies.rectangle(item.x, item.y, item.length, item.thickness || SETTINGS.lineThickness, {
	                isStatic: true,
	                angle: item.angle,
	                friction: SETTINGS.lineFriction,
	                restitution: 0,
	                isSensor: true,
	                render: { visible: true, fillStyle: '#ffffff' },
	                label,
	                plugin: { lineType: 'portal', portalId, portalRole: label === 'portal-exit' ? 'exit' : 'entry', portalGlowSide }
	            });
	            Composite.add(architectLayer, body);
	            undoStack.push(body);
	            return;
	        }
	        const body = Bodies.rectangle(item.x, item.y, item.length, item.thickness || SETTINGS.lineThickness, {
	            isStatic: true,
	            angle: item.angle,
	            friction: SETTINGS.lineFriction,
	            restitution: lineType === 'bounce' ? 1.5 : 0,
	            isSensor: isKill,
	            render: { visible: true, fillStyle: color },
	            label: isKill ? 'kill-line' : (lineType === 'bounce' ? 'bounce-line' : 'drawn-line'),
	            plugin: { lineType }
	        });
	        Composite.add(architectLayer, body);
	        undoStack.push(body);
	    });
	    portalIdCounter = Math.max(portalIdCounter, maxPortalId + 1);
	    markStaticDirty();
	});

// 4. VISUAL SETTINGS LISTENERS
const inpFontSize = document.getElementById('inp-fontsize');
inpFontSize.addEventListener('change', (e) => {
    CONFIG.fontSize = parseInt(e.target.value);
    CONFIG.letterSpacing = CONFIG.fontSize * 0.7; 
    document.getElementById('val-fontsize').innerText = CONFIG.fontSize;
    Composite.clear(world, false, true);
    wordComposites = [];
    refillQueue();
});
inpFontSize.addEventListener('input', (e) => {
     document.getElementById('val-fontsize').innerText = e.target.value;
});

const colorBtns = document.querySelectorAll('#line-color-picker button');
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLineColor = btn.getAttribute('data-col');
        CONFIG.colors.line = currentLineColor;
    });
});

document.getElementById('btn-load-bg').addEventListener('click', () => {
    const url = document.getElementById('inp-bg-url').value;
    if(url) document.getElementById('bg-reference').style.backgroundImage = `url('${url}')`;
});
document.getElementById('btn-clear-bg').addEventListener('click', () => {
    document.getElementById('bg-reference').style.backgroundImage = '';
    document.getElementById('inp-bg-url').value = '';
});

// --- LANGUAGE SWITCHING ---
function setLanguage(lang) {
    SETTINGS.language = lang;
    const t = TRANSLATIONS[lang];

    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if(t[key]) el.innerText = t[key];
    });

    // Update Audio Button State explicitly (dynamic text)
    audioEngine.updateUI(audioEngine.ctx && audioEngine.ctx.state === 'running');

    // Update dynamic description text if needed
    if (SETTINGS.spawnMode === 'typing') {
        const descKey = SETTINGS.typingType === 'char' ? 'desc_type_char' : 'desc_type_enter';
        document.getElementById('type-desc').innerText = t[descKey];
    }

    // Update Lifetime Slider Text
    const lifetimeVal = document.getElementById('val-lifetime');
    if (SETTINGS.lifetime === 61) {
        lifetimeVal.innerText = "∞";
    } else {
        lifetimeVal.innerText = SETTINGS.lifetime + "s";
    }

    // Toggle active buttons
    document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-lang-zh').classList.toggle('active', lang === 'zh');
}

document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('btn-lang-zh').addEventListener('click', () => setLanguage('zh'));

setLineType(SETTINGS.lineType);
setFanDirection(SETTINGS.fanDirection);
fanStrengthVal.innerText = SETTINGS.fanStrength.toFixed(4);
fanStrengthSlider.value = SETTINGS.fanStrength;
wellStrengthVal.innerText = SETTINGS.wellStrength.toFixed(4);
wellStrengthSlider.value = SETTINGS.wellStrength;
wellRadiusVal.innerText = SETTINGS.wellRadius;
wellRadiusSlider.value = SETTINGS.wellRadius;

update();
