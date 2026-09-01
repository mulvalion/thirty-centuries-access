// Thirty Centuries inc. 2026 Agent / Researcher Database
const AGENTS = [
    {
        id: "agent-9r5t",
        codeName: "M1.N.9R5T.3GMF",
        officialName: "Joseph",
        role: "RND / ARCHITECT",
        position: "RND / ARCHITECT",
        species: "human",
        secCode: "M1.N.9R5T.3GMF",
        avatarImg: "assets/avatar_joseph.png",
        avatarTransform: "none",
        email: "joseph@thirtycenturies.com",
        phone: "010 57** 77**",
        status: "human",
        access: "EXECUTIVE CLEARANCE",
        eyeCoords: { leftX: 0.38, rightX: 0.58, y: 0.44, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 THIRTY CENTURIES INC. 2026 차세대 아키텍처 및 메인 프레임 시스템 구조를 전담 설계하는 수석 아키텍터이다. 복잡한 모듈 간 상호작용을 통합 분석하여 시스템 안정성을 보장한다.",
        authTextEn: "This subject serves as Chief Architect, leading the design of next-generation system architecture and mainframe structures for THIRTY CENTURIES INC. 2026. Ensures structural stability through integrated analysis of complex inter-module interactions."
    },
    {
        id: "agent-2c7h",
        codeName: "M1.N.2C7H.5QK8",
        officialName: "Hyeonkoo",
        role: "RND",
        position: "RND",
        species: "human",
        secCode: "M1.N.2C7H.5QK8",
        avatarImg: "assets/avatar_hyeonkoo.png",
        avatarTransform: "translateX(-14px)",
        email: "dhgpool@gmail.com",
        phone: "010 54** 64**",
        status: "human",
        access: "LEVEL-A CLEARANCE",
        eyeCoords: { leftX: 0.33, rightX: 0.53, y: 0.42, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 30세기 고도화 R&D 핵심 프로젝트 및 미래 연구 개발을 전담하는 연구원이다. 탁월한 적응력과 기술 연구 성향을 나타내어 집중 관찰 연구원으로 분류된다.",
        authTextEn: "This subject is a dedicated researcher assigned to 30th-century advanced R&D core projects and future technological development. Exhibits exceptional adaptability and deep technical acumen, classified as a focused observation subject."
    },
    {
        id: "agent-5v9j",
        codeName: "M1.N.5V9J.3RD7",
        officialName: "Kijung",
        role: "RND",
        position: "RND",
        species: "human",
        secCode: "M1.N.5V9J.3RD7",
        avatarImg: "assets/avatar_kijung.png",
        avatarTransform: "none",
        email: "tyler.kijoungkim@gmail.com",
        phone: "010 74** 34**",
        status: "human",
        access: "LEVEL-A CLEARANCE",
        eyeCoords: { leftX: 0.37, rightX: 0.57, y: 0.46, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 R&D 데이터 모니터링 및 실시간 비정상 프로토콜 감지를 담당하는 고급 연구원이다. 신속한 문제 해결 능력과 논리적 분석력이 뛰어나다.",
        authTextEn: "This subject is a senior researcher responsible for R&D data telemetry and real-time protocol anomaly detection. Possesses rapid problem-solving capabilities and sharp analytical logic."
    },
    {
        id: "agent-4x8p",
        codeName: "M1.N.4X8P.2R7C",
        officialName: "Jongwook",
        role: "RND",
        position: "RND",
        species: "human",
        secCode: "M1.N.4X8P.2R7C",
        avatarImg: "assets/avatar_jongwook.png",
        avatarTransform: "none",
        email: "jongwook412@gmail.com",
        phone: "010 87** 43**",
        status: "human",
        access: "CLASS-ALPHA CLEARANCE",
        eyeCoords: { leftX: 0.35, rightX: 0.55, y: 0.41, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 코어 시스템 최적화 및 고성능 연산 모듈을 개발하는 R&D 전담 연구원이다. 정밀한 알고리즘 설계와 구조적 안정성에 강점을 보인다.",
        authTextEn: "This subject is a core R&D researcher specializing in system optimization and high-performance compute module engineering. Demonstrates mastery in precision algorithmic design and structural stability."
    },
    {
        id: "agent-3h6r",
        codeName: "M1.N.3H6R.9KM5",
        officialName: "Woosung",
        role: "RND",
        position: "RND",
        species: "human",
        secCode: "M1.N.3H6R.9KM5",
        avatarImg: "assets/avatar_woosung.png",
        avatarTransform: "none",
        email: "neworlds124@gmail.com",
        phone: "010 94** 95**",
        status: "human",
        access: "ADMINISTRATIVE CLEARANCE",
        eyeCoords: { leftX: 0.37, rightX: 0.57, y: 0.43, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 미래 문명 네트워크 및 신기술 이머징 프로토콜을 다루는 핵심 R&D 연구원이다. 독창적인 사고방식과 높은 탐구 능력으로 지속 관찰 연구원으로 평가받는다.",
        authTextEn: "This subject is a key R&D researcher handling future civilization networks and emerging technological protocols. Evaluated as a sustained observation subject due to highly original thinking and profound inquiry drive."
    },
    {
        id: "agent-7p4x",
        codeName: "M1.N.7P4X.8CF3",
        officialName: "NOUTHER",
        role: "RND / ART DIRECTOR",
        position: "RND / ART DIRECTOR",
        species: "human",
        secCode: "M1.N.7P4X.8CF3",
        avatarImg: "assets/avatar_nouther.png",
        avatarTransform: "none",
        email: "utherbot@gmail.com",
        phone: "010 74** 72**",
        status: "human",
        access: "LEVEL-9 CLEARANCE",
        eyeCoords: { leftX: 0.36, rightX: 0.56, y: 0.43, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 미래 시스템과 인터페이스를 설계하는 연구자형 인물로 분류된다. 인간성의 회복을 최우선으로 하며, 창조를 발명이 아닌 '원형으로의 복귀'로 해석한다. 관습과 권위에 쉽게 순응하지 않고 아름다움과 진실을 판단 기준으로 삼는다. 장기적으로 새로운 문명 구조의 설계를 지향하며, 사회적 노출보다 관찰·분석·설계에 강한 성향을 보인다. 종합 평가 결과, 직접적 위협 수준은 낮으나 장기적 영향력은 예측 범위를 벗어날 가능성이 있어 지속 관찰 및 보호 대상으로 분류한다.",
        authTextEn: "This subject is classified as a researcher-type individual who designs future systems and interfaces. Prioritizing the recovery of humanity, creation is interpreted not as invention, but as a 'return to origin'. Resisting passive conformity to convention and authority, beauty and truth serve as core judgment criteria. Geared toward long-term structural architecture of new civilizations, displaying strong traits in observation, analysis, and system design over public exposure. Assessment: Low direct threat level, but long-term systemic impact may exceed predictive bounds. Classified for continuous observation and strategic protection."
    },
    {
        id: "agent-4k9d",
        codeName: "M1.N.4K9D.7XH2",
        officialName: "CENTURION",
        role: "SECURITY / FIELD UNIT",
        position: "SECURITY / FIELD UNIT",
        species: "android",
        secCode: "M1.N.4K9D.7XH2",
        avatarImg: "assets/avatar_centurion.jpg",
        avatarTransform: "none",
        manufacturer: "THIRTY CENTURIES // SYNTHETICS DIVISION",
        unitSerial: "TC-A26-4K9D-7XH2",
        syntheticOrigin: "factory",
        modificationStatus: "STANDARD",
        status: "android",
        access: "SECURITY CLEARANCE LEVEL-9",
        eyeCoords: { leftX: 0.35, rightX: 0.55, y: 0.43, w: 0.08, h: 0.03 },
        authTextKo: "본 개체는 THIRTY CENTURIES INC. SYNTHETICS DIVISION에서 제조된 전술 안드로이드 보안 기체이다. 시설 경비, 위협 요인 탐지 및 현장 대응 임무를 전담 수행한다.",
        authTextEn: "This unit is a tactical android security unit manufactured by THIRTY CENTURIES INC. SYNTHETICS DIVISION. Assigned to facility defense, threat vector detection, and tactical field response."
    }
];

let currentDepth = 1;
let selectedAgent = AGENTS[0]; // Default M1.N.7P4X.8CF3 (NOUTHER)
let currentFilter = "all";
let currentLang = "ko"; // "ko" or "en"

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    startClock();
    startCoordTicker();
    renderAgentGrid();
    renderAgentDossier(selectedAgent);
    setupKeyboardShortcuts();
    initCRTMonitorEffects();
    initInitialActivityLogs();
});

// Real-time Clock for Root Screen and Inner Terminal App
function startClock() {
    const rootClockEl = document.getElementById("root-current-time");
    const appClockEl = document.getElementById("current-time");

    function update() {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        const timeStr = `${hrs}:${mins}:${secs}`;
        if (rootClockEl) rootClockEl.textContent = timeStr;
        if (appClockEl) appClockEl.textContent = timeStr;
    }
    update();
    setInterval(update, 1000);
}

// Live GPS Coordinates & Frequency Ticker for Root Screen and App
function startCoordTicker() {
    const rootFreqEl = document.getElementById("root-freq-val");
    const appFreqEl = document.getElementById("app-freq-val");
    const coordEl = document.getElementById("coord-display");
    
    setInterval(() => {
        const freqOffset = (Math.random() * 0.04 - 0.02).toFixed(2);
        const currentFreq = (142.85 + parseFloat(freqOffset)).toFixed(2);
        const freqStr = `FREQ: ${currentFreq} MHz`;
        if (rootFreqEl) rootFreqEl.textContent = freqStr;
        if (appFreqEl) appFreqEl.textContent = freqStr;

        if (coordEl) {
            const sig = 96 + Math.floor(Math.floor(Math.random() * 4));
            coordEl.textContent = `LOC: 34.0522°N 118.2437°W [${sig}%]`;
        }
    }, 2000);
}

// Authentic Cold & Mechanical MS-DOS Multi-Block Boot Sequence Script
const DOS_BOOT_LOG_ITEMS = [
    { text: "INITIALIZING TCI TERMINAL SESSION...", delay: 90 },
    { text: "ESTABLISHING SECURE LINK.............. OK", delay: 110 },
    { text: "REMOTE NODE........................... TCI-CENTRAL", delay: 80 },
    { text: "ENCRYPTION PROTOCOL................... TCI-9", delay: 80 },
    { text: "LINK STATUS........................... STABLE", delay: 120 },
    { text: "", delay: 40 },
    { text: "LOADING TCI\\CORE.SYS.................. OK", delay: 90 },
    { text: "LOADING TCI\\IDENT.SYS................. OK", delay: 90 },
    { text: "LOADING TCI\\DIRECTORY.SYS............. OK", delay: 120 },
    { text: "", delay: 40 },
    { text: "VERIFYING OPERATOR ID................. VERIFIED", delay: 400 }, // 0.4s operator verification delay
    { text: "CHECKING ACCESS CLEARANCE............. LEVEL-9", delay: 100 },
    { text: "REGISTERING SESSION................... COMPLETE", delay: 120 },
    { text: "", delay: 40 },
    { text: "ACTIVITY RECORDING.................... ACTIVE", delay: 90 },
    { text: "IDENTITY TRACE........................ ACTIVE", delay: 110 },
    { text: "", delay: 40 },
    { text: "MOUNTING AUTHORIZED DIRECTORIES....... COMPLETE", delay: 130 },
    { text: "", delay: 40 },
    { text: "THIRTY CENTURIES TERMINAL READY.", delay: 500 } // 0.5s pause before menu reveal
];

function handleDosPromptTrigger() {
    if (isDosBooting || isDosBootComplete) return;
    isDosBooting = true;

    const visualBlock = document.getElementById("landing-visual-block");
    if (visualBlock) visualBlock.style.display = "none";

    const bootSeq = document.getElementById("dos-boot-sequence");
    if (bootSeq) bootSeq.classList.remove("dos-hidden");

    // 1. > CONNECTING... 3-dot buffering animation
    animateConnectingDots(() => {
        const initialPrompt = document.getElementById("dos-initial-prompt");
        if (initialPrompt) {
            initialPrompt.innerHTML = '&gt; CONNECT TO THIRTY CENTURIES TERMINAL [OK]';
        }
        // 2. Stream multi-block system boot logs
        startDosMultiBlockBootSequence();
    });
}

function animateConnectingDots(onComplete) {
    const connEl = document.getElementById("dos-connecting-line");
    if (!connEl) {
        if (onComplete) onComplete();
        return;
    }

    // 3점 제자리 깜빡임 애니메이션 4회 반복 (4 full cycles)
    const baseFrames = ["> CONNECTING.", "> CONNECTING..", "> CONNECTING..."];
    const frames = [...baseFrames, ...baseFrames, ...baseFrames, ...baseFrames];

    let frameIdx = 0;
    const interval = setInterval(() => {
        if (frameIdx < frames.length) {
            connEl.textContent = frames[frameIdx];
            frameIdx++;
        } else {
            clearInterval(interval);
            setTimeout(onComplete, 150);
        }
    }, 120); // 120ms * 12 frames = ~1.4초 버퍼링 타임 (소리 제거)
}

function scrollDosToBottom() {
    const windowEl = document.getElementById("landing-root-screen");
    if (windowEl) {
        windowEl.scrollTop = windowEl.scrollHeight;
    }
}

// Session & Activity Surveillance Telemetry System
let currentSessionId = generateSessionId();
let currentVisitorIP = "203.0.113.47";
let currentVisitorOrigin = "SEOUL/KR";
let currentOperatorId = "UNKNOWN";
let activityLogs = [];
let isViewingActivityLog = false;

function generateSessionId() {
    const chars = "0123456789ABCDEF";
    let p1 = "", p2 = "";
    for (let i = 0; i < 4; i++) {
        p1 += chars.charAt(Math.floor(Math.random() * chars.length));
        p2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${p1}-${p2}`;
}

// Pre-populate 50 realistic historical telemetry logs on initial load (Sorted NEWEST -> OLDEST)
function initInitialActivityLogs() {
    const sampleIPs = ["203.0.113.47", "192.0.2.18", "198.51.100.24", "198.51.100.89", "203.0.113.112"];
    const sampleOrigins = ["SEOUL/KR", "TOKYO/JP", "NEW YORK/US", "LONDON/GB", "BERLIN/DE"];
    const sampleEvents = [
        "SESSION_OPENED", "PAGE_ACCESS", "DIRECTORY_SEARCH", "PERSONNEL_ACCESS",
        "DOSSIER_VIEW", "DOSSIER_EXIT", "ACCESS_DENIED", "AUTH_SUCCESS", "NETWORK_REQUEST"
    ];

    const now = new Date();
    activityLogs = [];

    for (let i = 0; i < 50; i++) {
        const pastTime = new Date(now.getTime() - i * (28000 + Math.random() * 42000));
        const hrs = String(pastTime.getHours()).padStart(2, '0');
        const mins = String(pastTime.getMinutes()).padStart(2, '0');
        const secs = String(pastTime.getSeconds()).padStart(2, '0');
        const timeStr = `${hrs}:${mins}:${secs}`;

        const isVerified = (i % 6 === 0);
        const ipIdx = i % sampleIPs.length;
        const eventIdx = i % sampleEvents.length;

        activityLogs.push({
            time: timeStr,
            session: i === 0 ? currentSessionId : generateSessionId(),
            ip: sampleIPs[ipIdx],
            origin: sampleOrigins[ipIdx],
            identity: isVerified ? "VERIFIED" : "UNKNOWN",
            event: sampleEvents[eventIdx]
        });
    }

    // Record initial session boot
    logActivityEvent("SESSION_OPENED");
}

function logActivityEvent(eventType, customIdentity = null) {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const timeStr = `${hrs}:${mins}:${secs}`;

    const identity = customIdentity || currentOperatorId;

    const newRecord = {
        time: timeStr,
        session: currentSessionId,
        ip: currentVisitorIP,
        origin: currentVisitorOrigin,
        identity: identity,
        event: eventType
    };

    activityLogs.unshift(newRecord);
    if (activityLogs.length > 50) {
        activityLogs.pop(); // Maintain max 50 records limit
    }

    if (isViewingActivityLog) {
        renderActivityLogsList();
    }
}

function formatLogTextLine(rec) {
    const timeCol = rec.time.padEnd(10, ' ');
    const sessionCol = rec.session.padEnd(12, ' ');
    const ipCol = rec.ip.padEnd(17, ' ');
    const originCol = rec.origin.padEnd(13, ' ');
    const idCol = rec.identity.padEnd(13, ' ');
    const eventCol = rec.event;

    return `${timeCol}${sessionCol}${ipCol}${originCol}${idCol}${eventCol}`;
}

function renderActivityLogsList() {
    const container = document.getElementById("dos-log-rows-container");
    const countEl = document.getElementById("log-count-num");
    if (!container) return;

    if (countEl) countEl.textContent = activityLogs.length;

    container.innerHTML = "";
    activityLogs.forEach((rec) => {
        const p = document.createElement("p");
        p.className = "dos-line";
        p.textContent = formatLogTextLine(rec);
        container.appendChild(p);
    });
}

// Single Active Cursor Manager (Guarantees only 1 blinking cursor exists on screen at any time)
function setSingleActiveCursor(activeCursorId) {
    const allCursors = document.querySelectorAll(".dos-cursor");
    allCursors.forEach(c => c.style.display = "none");

    if (activeCursorId) {
        const target = document.getElementById(activeCursorId);
        if (target) {
            target.style.display = "inline-block";
        }
    }
}

let isActivityLogBooting = false;
let isActivityLogBootComplete = false;
let isWaitingActivityLogEnter = false;

function enterActivityLogApp() {
    if (isActivityLogBooting) return;
    logActivityEvent("PAGE_ACCESS");

    const errLine = document.getElementById("dos-error-line");
    if (errLine) errLine.classList.add("dos-hidden");

    // Phase 1: Show "07" typed on existing main prompt line: C:\TCI\TERMINAL> 07█
    const mainInputEl = document.getElementById("dos-user-input");
    if (mainInputEl) mainInputEl.textContent = "07";
    setSingleActiveCursor("dos-main-cursor");

    // Phase 2: After 120ms (Enter pressed), hide main cursor, keep "07", and show PRESS ENTER prompt
    setTimeout(() => {
        isViewingActivityLog = true;
        isWaitingActivityLogEnter = true;
        isActivityLogBootComplete = false;

        // Main cursor removed from C:\TCI\TERMINAL> 07
        setSingleActiveCursor(null);

        const logScreenEl = document.getElementById("dos-activity-log-screen");
        if (logScreenEl) {
            logScreenEl.classList.remove("dos-hidden");
            logScreenEl.style.display = "block";
        }

        renderActivityLogStep1Prompt();
        scrollDosToBottom();
    }, 120);
}

function renderActivityLogStep1Prompt() {
    const logScreenEl = document.getElementById("dos-activity-log-screen");
    if (!logScreenEl) return;

    logScreenEl.innerHTML = `
        <br>
        <p class="dos-line" id="activity-log-press-enter-line" style="cursor: pointer;" onclick="handleActivityLogEnterTrigger()">
            &gt; ACCESS THIRTY CENTURIES ACTIVITY LOG <span id="activity-log-enter-status">[PRESS ENTER]</span> <span class="dos-cursor" id="activity-log-enter-cursor">█</span>
        </p>
        <div id="activity-log-dynamic-boot-area"></div>
    `;

    // Only 1 active cursor at [PRESS ENTER] █
    setSingleActiveCursor("activity-log-enter-cursor");
}

function handleActivityLogEnterTrigger() {
    if (!isWaitingActivityLogEnter || isActivityLogBooting) return;

    isWaitingActivityLogEnter = false;
    isActivityLogBooting = true;

    // Phase 3: Change [PRESS ENTER] -> OK and REMOVE cursor from this line
    const enterStatusEl = document.getElementById("activity-log-enter-status");
    if (enterStatusEl) enterStatusEl.textContent = "OK";

    // NO CURSOR during loading sequence!
    setSingleActiveCursor(null);

    const bootAreaEl = document.getElementById("activity-log-dynamic-boot-area");
    if (!bootAreaEl) return;

    const callingP = document.createElement("p");
    callingP.className = "dos-line";
    callingP.innerHTML = "<br>&gt; CALLING ACTIVITY LOG...<br>";
    bootAreaEl.appendChild(callingP);
    scrollDosToBottom();

    const initLines = [
        "LOADING TCI\\LOG.SYS................ OK",
        "MOUNTING SESSION BUFFER............ OK",
        "VERIFYING LOG INTEGRITY............ OK",
        "INDEXING RECENT RECORDS............ 50",
        "ACTIVITY STREAM.................... ACTIVE"
    ];

    let lineIdx = 0;

    function stepNextInitLine() {
        if (lineIdx < initLines.length) {
            const p = document.createElement("p");
            p.className = "dos-line";
            p.textContent = initLines[lineIdx];
            bootAreaEl.appendChild(p);
            lineIdx++;
            scrollDosToBottom();

            const delay = Math.floor(Math.random() * 40) + 80; // 80~120ms
            setTimeout(stepNextInitLine, delay);
        } else {
            setTimeout(() => {
                const readyP = document.createElement("p");
                readyP.className = "dos-line";
                readyP.style.fontWeight = "bold";
                readyP.innerHTML = "<br>THIRTY CENTURIES ACTIVITY LOG READY.";
                bootAreaEl.appendChild(readyP);
                scrollDosToBottom();

                // 350ms pause (300~400ms), then display 50 recent logs all at once
                setTimeout(() => {
                    renderActivityLogTableAndRecords(bootAreaEl);
                    isActivityLogBooting = false;
                    isActivityLogBootComplete = true;
                    scrollDosToBottom();
                }, 350);
            }, 200);
        }
    }

    setTimeout(stepNextInitLine, 200);
}

function renderActivityLogTableAndRecords(targetContainer) {
    const tableDiv = document.createElement("div");
    tableDiv.id = "activity-log-table-block";
    tableDiv.innerHTML = `
        <br>
        <p class="dos-line">============================================================</p>
        <p class="dos-line">THIRTY CENTURIES // ACTIVITY LOG</p>
        <p class="dos-line">RECENT RECORDS: <span id="log-count-num">${activityLogs.length}</span></p>
        <p class="dos-line">SORT: NEWEST -&gt; OLDEST</p>
        <p class="dos-line">============================================================</p>
        <br>
        <p class="dos-line log-table-header">TIME      SESSION     SOURCE IP        ORIGIN       IDENTITY     EVENT</p>
        <p class="dos-line log-table-divider">--------------------------------------------------------------------------------</p>
        <div id="dos-log-rows-container"></div>
        <br>
        <p class="dos-line prompt-line">
            C:\\TCI\\LOGS&gt; <span id="dos-log-user-input"></span><span class="dos-cursor" id="dos-log-cursor">█</span>
        </p>
        <p id="dos-log-error-line" class="dos-line dos-hidden"></p>
    `;
    targetContainer.appendChild(tableDiv);
    renderActivityLogsList();

    // Phase 4: Create new single active cursor ONLY at C:\TCI\LOGS> █
    setSingleActiveCursor("dos-log-cursor");
}

function exitActivityLogApp() {
    isViewingActivityLog = false;
    isWaitingActivityLogEnter = false;
    isActivityLogBooting = false;
    isActivityLogBootComplete = false;

    const logScreenEl = document.getElementById("dos-activity-log-screen");
    if (logScreenEl) {
        logScreenEl.classList.add("dos-hidden");
        logScreenEl.style.display = "none";
        logScreenEl.innerHTML = "";
    }

    // Reset main line user input text
    const mainInputEl = document.getElementById("dos-user-input");
    if (mainInputEl) mainInputEl.textContent = "";

    // Return single active cursor back to C:\TCI\TERMINAL> █
    setSingleActiveCursor("dos-main-cursor");

    logActivityEvent("PAGE_ACCESS");
    scrollDosToBottom();
}

function startDosMultiBlockBootSequence() {
    const logsContainer = document.getElementById("dos-boot-logs");
    const menuBlockEl = document.getElementById("dos-menu-block");

    if (!logsContainer) return;
    logsContainer.innerHTML = "";

    let itemIdx = 0;

    function renderNextLogLine() {
        if (itemIdx < DOS_BOOT_LOG_ITEMS.length) {
            const item = DOS_BOOT_LOG_ITEMS[itemIdx];
            const p = document.createElement("p");
            p.className = "dos-line";
            p.textContent = item.text;
            logsContainer.appendChild(p);

            scrollDosToBottom();

            itemIdx++;
            setTimeout(renderNextLogLine, item.delay);
        } else {
            isDosBooting = false;
            isDosBootComplete = true;

            // Pause for 0.5s after "THIRTY CENTURIES TERMINAL READY.", then reveal menu directory!
            if (menuBlockEl) menuBlockEl.classList.remove("dos-hidden");
            setSingleActiveCursor("dos-main-cursor");
            scrollDosToBottom();
        }
    }

    renderNextLogLine();
}

// Pure MS-DOS Terminal Boot Flags
let isDosBooting = false;
let isDosBootComplete = false;

// Focus hidden input for full interactive typing without auto-booting
function focusDosInput() {
    const inputEl = document.getElementById("dos-hidden-input");
    if (inputEl) inputEl.focus();
}

function handleDosInputChange(e) {
    const val = e.target.value;
    const userInputEl = document.getElementById("dos-user-input");
    const logUserInputEl = document.getElementById("dos-log-user-input");
    const mainCursorEl = document.getElementById("dos-main-cursor");

    if (isViewingActivityLog) {
        if (logUserInputEl) logUserInputEl.textContent = val;
        if (userInputEl) userInputEl.textContent = val;
    } else {
        if (userInputEl) userInputEl.textContent = val;
        if (mainCursorEl) {
            if (val.length > 0) {
                mainCursorEl.style.display = "none";
            } else {
                mainCursorEl.style.display = "inline-block";
            }
        }
    }
}

// Unified Master Enter Handler (Works whether input is focused or not)
function handleDosGlobalEnter() {
    if (isDosBooting) return;

    if (!isDosBootComplete) {
        handleDosPromptTrigger();
        const inputEl = document.getElementById("dos-hidden-input");
        if (inputEl) inputEl.value = "";
        return;
    }

    const inputEl = document.getElementById("dos-hidden-input");
    const typedVal = inputEl ? inputEl.value.trim() : "";
    const lowerVal = typedVal.toLowerCase();

    if (isViewingActivityLog) {
        if (isWaitingActivityLogEnter) {
            handleActivityLogEnterTrigger();
            if (inputEl) inputEl.value = "";
            return;
        }
        if (isActivityLogBooting) return;

        // Handlers inside C:\TCI\LOGS> view
        if (lowerVal === "0" || lowerVal === "exit" || lowerVal === "cd .." || lowerVal === "menu") {
            exitActivityLogApp();
        } else if (lowerVal === "1" || lowerVal === "01" || lowerVal === "personnel") {
            exitActivityLogApp();
            enterPersonnelApp();
        } else {
            showDosLogErrorLine("> [ERROR] UNKNOWN COMMAND. TYPE 'EXIT' OR '0' TO RETURN TO MAIN MENU.");
        }
    } else {
        // Handlers inside C:\TCI\TERMINAL> main screen
        if (["1", "01", "personnel", "citizen", "registry"].includes(lowerVal)) {
            enterPersonnelApp();
        } else if (["6", "06", "activity", "surveillance", "logs"].includes(lowerVal)) {
            enterActivityLogApp();
        } else if (["2", "02", "3", "03", "4", "04", "5", "05", "projects", "research", "facilities", "facility", "archives", "vault", "network", "grid"].includes(lowerVal)) {
            let num = parseInt(lowerVal, 10);
            if (isNaN(num)) {
                if (lowerVal.includes("3") || lowerVal.includes("facility")) num = 3;
                else if (lowerVal.includes("4") || lowerVal.includes("archive")) num = 4;
                else if (lowerVal.includes("5") || lowerVal.includes("network")) num = 5;
                else num = 2;
            }
            triggerSecurityInterruptModal(num);
        } else {
            logActivityEvent("ACCESS_DENIED");
            showDosErrorLine("> [ERROR] ACCESS DENIED. PLEASE VERIFY SECTOR ACCESS CLEARANCE WITH MASTER.");
        }
    }

    if (inputEl) inputEl.value = "";
    const userInputEl = document.getElementById("dos-user-input");
    const logUserInputEl = document.getElementById("dos-log-user-input");
    if (userInputEl) userInputEl.textContent = "";
    if (logUserInputEl) logUserInputEl.textContent = "";
}

function handleDosInputKeydown(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        handleDosGlobalEnter();
    }
}

// ==========================================================================
// TERMINAL SECURITY INTERRUPT MODAL SYSTEM (#security-interrupt-modal)
// ==========================================================================
let isSecModalActive = false;
let secAuthKeyInput = "";
let isSecModalVerifying = false;
let secTargetMenuNum = 0;

const CLEARANCE_LEVELS = {
    2: "LEVEL-7",
    3: "LEVEL-8",
    4: "LEVEL-9",
    5: "ALPHA-10"
};

const VALID_AUTH_KEYS = [
    "TCI2026", "30TH-CENTURY", "LEVEL-7", "LEVEL7", "LEVEL-8", "LEVEL8", "LEVEL-9", "LEVEL9", "LEVEL-10", "LEVEL10", "ALPHA-10", "ALPHA10", "MASTER", "1234"
];

function selectDosMenu(menuNum) {
    triggerSecurityInterruptModal(menuNum);
}

function triggerSecurityInterruptModal(menuNum) {
    const modalEl = document.getElementById("security-interrupt-modal");
    if (!modalEl) return;

    secTargetMenuNum = menuNum;
    secAuthKeyInput = "";
    isSecModalVerifying = false;

    const cursorEl = document.getElementById("sec-input-cursor");
    if (cursorEl) cursorEl.classList.remove("cursor-fail-red");

    const reqLevelEl = document.getElementById("sec-req-level");
    if (reqLevelEl) {
        reqLevelEl.textContent = CLEARANCE_LEVELS[menuNum] || "LEVEL-7";
    }

    const maskedEl = document.getElementById("sec-masked-input");
    if (maskedEl) maskedEl.textContent = "";

    const logAreaEl = document.getElementById("sec-log-area");
    if (logAreaEl) logAreaEl.innerHTML = "";

    modalEl.classList.remove("dos-hidden");
    isSecModalActive = true;
    setSingleActiveCursor("sec-input-cursor");

    logActivityEvent("ACCESS_DENIED");
    playBeepSound(400, 0.08);
}

function closeSecurityInterruptModal() {
    const modalEl = document.getElementById("security-interrupt-modal");
    if (modalEl) modalEl.classList.add("dos-hidden");
    isSecModalActive = false;
    secAuthKeyInput = "";
    isSecModalVerifying = false;
    const cursorEl = document.getElementById("sec-input-cursor");
    if (cursorEl) cursorEl.classList.remove("cursor-fail-red");
    setSingleActiveCursor("dos-main-cursor");
}

function handleSecModalKeyDown(e) {
    if (!isSecModalActive) return false;

    if (e.key === "Escape") {
        e.preventDefault();
        closeSecurityInterruptModal();
        return true;
    }

    if (isSecModalVerifying) {
        e.preventDefault();
        return true;
    }

    if (e.key === "Enter") {
        e.preventDefault();
        verifySecurityInterruptKey();
        return true;
    }

    if (e.key === "Backspace") {
        e.preventDefault();
        if (secAuthKeyInput.length > 0) {
            secAuthKeyInput = secAuthKeyInput.slice(0, -1);
            updateSecMaskedDisplay();
            playBeepSound(1000, 0.01);
        }
        return true;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (secAuthKeyInput.length < 24) {
            secAuthKeyInput += e.key;
            updateSecMaskedDisplay();
            playBeepSound(1200, 0.01);
        }
        return true;
    }

    return true;
}

function updateSecMaskedDisplay() {
    const maskedEl = document.getElementById("sec-masked-input");
    const cursorEl = document.getElementById("sec-input-cursor");
    if (maskedEl) {
        maskedEl.textContent = "█".repeat(secAuthKeyInput.length);
    }
    if (cursorEl) {
        if (secAuthKeyInput.length > 0) {
            cursorEl.style.display = "none";
        } else {
            cursorEl.style.display = "inline-block";
        }
    }
}

function verifySecurityInterruptKey() {
    if (isSecModalVerifying) return;

    isSecModalVerifying = true;
    const logAreaEl = document.getElementById("sec-log-area");
    const cursorEl = document.getElementById("sec-input-cursor");

    const userKey = secAuthKeyInput.trim().toUpperCase();
    const isValid = VALID_AUTH_KEYS.includes(userKey);

    if (isValid) {
        logActivityEvent("AUTH_SUCCESS");

        if (logAreaEl) {
            logAreaEl.innerHTML = `
                <p class="sec-log-ok">AUTHORIZATION.................... VERIFIED</p>
                <p class="sec-log-ok">ACCESS........................... GRANTED</p>
            `;
        }

        playBeepSound(900, 0.15);

        setTimeout(() => {
            closeSecurityInterruptModal();
            enterPersonnelApp();
        }, 400);

    } else {
        logActivityEvent("AUTH_FAILED");

        secAuthKeyInput = "";
        updateSecMaskedDisplay();

        if (logAreaEl) {
            logAreaEl.innerHTML = `
                <p class="sec-log-fail">AUTHORIZATION.................... FAILED</p>
            `;
        }

        if (cursorEl) {
            cursorEl.classList.add("cursor-fail-red");
        }

        playBeepSound(300, 0.15);

        setTimeout(() => {
            if (cursorEl) {
                cursorEl.classList.remove("cursor-fail-red");
            }
            isSecModalVerifying = false;
        }, 600);

        // Clear "AUTHORIZATION FAILED" message automatically after 2 seconds (2000ms)
        setTimeout(() => {
            if (logAreaEl) {
                logAreaEl.innerHTML = "";
            }
        }, 2000);
    }
}



function showDosErrorLine(errText) {
    const errLine = document.getElementById("dos-error-line");
    if (!errLine) return;

    errLine.classList.remove("dos-hidden");
    errLine.style.display = "block";
    errLine.textContent = errText;

    const userInputEl = document.getElementById("dos-user-input");
    if (userInputEl) userInputEl.textContent = "";
}

// Root Access Landing Screen Interaction
function enterPersonnelApp() {
    playBeepSound(900, 0.12);
    const rootScreen = document.getElementById("landing-root-screen");
    const appContainer = document.getElementById("inner-app-container");

    if (rootScreen) rootScreen.classList.remove("active");
    if (appContainer) appContainer.classList.add("active");

    switchDepth(1);
}

function exitToRootTerminal() {
    playBeepSound(450, 0.1);
    const rootScreen = document.getElementById("landing-root-screen");
    const appContainer = document.getElementById("inner-app-container");

    if (appContainer) appContainer.classList.remove("active");
    if (rootScreen) rootScreen.classList.add("active");
}

// Render Depth 1 Agent Grid Cards
function renderAgentGrid() {
    const gridEl = document.getElementById("agent-grid");
    if (!gridEl) return;
    const searchInput = document.getElementById("search-input");
    const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";

    const filtered = AGENTS.filter(agent => {
        const matchesFilter = currentFilter === "all" || agent.species === currentFilter || agent.status === currentFilter;
        const matchesSearch = agent.codeName.toLowerCase().includes(searchQuery) || 
                              agent.officialName.toLowerCase().includes(searchQuery) ||
                              agent.role.toLowerCase().includes(searchQuery) ||
                              agent.secCode.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    gridEl.innerHTML = filtered.map(agent => `
        <div class="agent-card ${agent.id === selectedAgent.id ? 'active' : ''}" onclick="selectAgentAndSwitch('${agent.id}')">
            <div class="agent-card-header">
                <span class="citizen-status">CITIZEN STATUS: MARS FEDERATION / ACTIVE</span>
            </div>
            <div class="agent-card-name">${agent.codeName}</div>
            <div class="agent-card-role">${agent.officialName} // ${agent.position}</div>
            <div class="agent-card-footer">
                <span class="status-badge ${agent.species}">${agent.species.toUpperCase()}</span>
                <span>OPEN DOSSIER &gt;</span>
            </div>
        </div>
    `).join('');

    renderMobileAgentGrid();
}

function renderMobileAgentGrid() {
    const mGridEl = document.getElementById("m-agent-grid");
    if (!mGridEl) return;

    mGridEl.innerHTML = AGENTS.map(agent => `
        <div class="m-agent-card" onclick="selectAgentAndSwitch('${agent.id}')">
            <div class="m-access-tag">CITIZEN STATUS: MARS FEDERATION / ACTIVE</div>
            <div class="m-agent-code">${agent.codeName}</div>
            <div class="m-agent-meta">${agent.officialName} // ${agent.position}</div>
            <div class="m-card-action-bar">
                <span class="status-badge ${agent.species}">${agent.species.toUpperCase()}</span>
                <span class="m-open-link">OPEN DOSSIER &gt;</span>
            </div>
        </div>
    `).join('');
}

function filterDirectory() {
    renderAgentGrid();
}

function setFilter(filterType, btnEl) {
    currentFilter = filterType;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnEl.classList.add('active');
    renderAgentGrid();
}

// Select Agent and Open Depth 2
function selectAgentAndSwitch(agentId) {
    const agent = AGENTS.find(a => a.id === agentId);
    if (agent) {
        selectedAgent = agent;
        renderAgentDossier(agent);
        renderMobileDossier(agent);
        switchDepth(2);
        playBeepSound();
    }
}

// Menu Selection for Central Terminal (Depth 0)
function selectMenu(menuNum) {
    playBeepSound(600 + menuNum * 100, 0.08);
    if (menuNum === 1) {
        // [01] PERSONNEL -> Open Agents Directory (Depth 1)
        switchDepth(1);
    } else {
        // [02] ~ [06] -> Display Retro DOS Access Restricted Notification
        const titles = [
            "", "PERSONNEL", "PROJECTS", "FACILITIES", "ARCHIVES", "OPERATIONS", "NETWORK"
        ];
        alert(`[SYSTEM ALERT] ACCESS RESTRICTED // ${titles[menuNum]} SECTOR REQUIRES CLEARANCE LEVEL ALPHA-10`);
    }
}

function handleMobileBack() {
    if (currentDepth === 2) {
        switchDepth(1);
    } else if (currentDepth === 1) {
        switchDepth(0);
    }
}

// Switch Depth View (Depth 0 <-> Depth 1 <-> Depth 2)
function switchDepth(depthNumber) {
    currentDepth = depthNumber;

    // Desktop Views
    const depth0View = document.getElementById("depth-0-view");
    const depth1View = document.getElementById("depth-1-view");
    const depth2View = document.getElementById("depth-2-view");

    const btnNav0 = document.getElementById("btn-nav-root");
    const btnNav1 = document.getElementById("btn-nav-depth1");
    const btnNav2 = document.getElementById("btn-nav-depth2");

    [depth0View, depth1View, depth2View].forEach(v => { if (v) v.classList.remove("active"); });
    [btnNav0, btnNav1, btnNav2].forEach(b => { if (b) b.classList.remove("active"); });

    if (depthNumber === 0) {
        if (depth0View) depth0View.classList.add("active");
        if (btnNav0) btnNav0.classList.add("active");
        if (btnNav1) btnNav1.removeAttribute("disabled");
    } else if (depthNumber === 1) {
        if (depth1View) depth1View.classList.add("active");
        if (btnNav1) btnNav1.classList.add("active");
        if (btnNav1) btnNav1.removeAttribute("disabled");
    } else if (depthNumber === 2) {
        if (depth2View) depth2View.classList.add("active");
        if (btnNav2) btnNav2.classList.add("active");
        if (btnNav2) btnNav2.removeAttribute("disabled");
    }

    // Mobile Views
    const mDepth0 = document.getElementById("m-depth-0");
    const mDepth1 = document.getElementById("m-depth-1");
    const mDepth2 = document.getElementById("m-depth-2");
    const mHeaderRoot = document.getElementById("m-header-root");
    const mHeaderNav = document.getElementById("m-header-nav");
    const mDepthTag = document.getElementById("m-depth-tag");

    [mDepth0, mDepth1, mDepth2].forEach(v => { if (v) v.classList.remove("active"); });

    if (depthNumber === 0) {
        if (mDepth0) mDepth0.classList.add("active");
        if (mHeaderRoot) mHeaderRoot.style.display = "";
        if (mHeaderNav) mHeaderNav.style.display = "none";
    } else if (depthNumber === 1) {
        if (mDepth1) mDepth1.classList.add("active");
        if (mHeaderRoot) mHeaderRoot.style.display = "none";
        if (mHeaderNav) mHeaderNav.style.display = "flex";
        if (mDepthTag) mDepthTag.textContent = "[01] 연구원 디렉토리 (DIRECTORY)";
    } else if (depthNumber === 2) {
        if (mDepth2) mDepth2.classList.add("active");
        if (mHeaderRoot) mHeaderRoot.style.display = "none";
        if (mHeaderNav) mHeaderNav.style.display = "flex";
        if (mDepthTag) mDepthTag.textContent = "[02] 상세 신분증 (ID DOSSIER)";
    }
}

function renderMobileDossier(agent) {
    const mImg = document.getElementById("m-portrait-img");
    const mCode = document.getElementById("m-card-code");
    const mName = document.getElementById("m-card-name");
    const mPos = document.getElementById("m-card-pos");
    const mEmail = document.getElementById("m-card-email");
    const mPhone = document.getElementById("m-card-phone");
    const mBio = document.getElementById("m-card-bio");

    if (mImg) mImg.src = agent.avatarImg || "";
    if (mCode) mCode.textContent = agent.codeName;
    if (mName) mName.textContent = agent.officialName;
    if (mPos) mPos.textContent = agent.position;

    if (agent.species === "android" || agent.manufacturer) {
        if (mEmail) mEmail.textContent = agent.manufacturer || "THIRTY CENTURIES // SYNTHETICS DIVISION";
        if (mPhone) mPhone.textContent = agent.unitSerial || "N/A";
    } else {
        if (mEmail) mEmail.textContent = agent.email || "N/A";
        if (mPhone) mPhone.textContent = agent.phone || "N/A";
    }

    if (mBio) mBio.textContent = currentLang === 'en' ? (agent.authTextEn || agent.authText) : agent.authText;

    const speciesList = ["human", "cyborg", "android", "alien"];
    speciesList.forEach(sp => {
        const chk = document.getElementById(`m-chk-${sp}`);
        if (chk) chk.checked = (agent.species === sp);
    });
}

// Render Depth 2 ID Card Detail
function renderAgentDossier(agent) {
    const editBtn = document.getElementById("btn-edit-profile");
    if (editBtn && !isProfileEditing) {
        editBtn.textContent = "[EDIT DOSSIER]";
        editBtn.classList.remove("saving");
    }

    const officerNameEl = document.getElementById("card-officer-name");
    const roleLabelEl = document.getElementById("card-role-label");

    if (officerNameEl) officerNameEl.textContent = agent.codeName;
    if (roleLabelEl) roleLabelEl.textContent = `RESEARCHER // ${agent.position}`;

    const nameEl = document.getElementById("card-official-name");
    const posEl = document.getElementById("card-position");
    const labelEmailEl = document.getElementById("label-email");
    const labelPhoneEl = document.getElementById("label-phone");
    const emailEl = document.getElementById("card-email");
    const phoneEl = document.getElementById("card-phone");

    if (nameEl) nameEl.textContent = agent.officialName || "N/A";
    if (posEl) {
        posEl.classList.remove("editing");
        posEl.textContent = agent.position || "N/A";
    }

    if (agent.species === "android" || agent.manufacturer) {
        if (labelEmailEl) labelEmailEl.textContent = "MANUFACTURER";
        if (emailEl) emailEl.textContent = agent.manufacturer || "THIRTY CENTURIES // SYNTHETICS DIVISION";
        if (labelPhoneEl) labelPhoneEl.textContent = "UNIT SERIAL";
        if (phoneEl) phoneEl.textContent = agent.unitSerial || "N/A";
    } else {
        if (labelEmailEl) labelEmailEl.textContent = "EMAIL";
        if (emailEl) emailEl.textContent = agent.email || "N/A";
        if (labelPhoneEl) labelPhoneEl.textContent = "PHONE";
        if (phoneEl) phoneEl.textContent = agent.phone || "N/A";
    }

    // Species Grid Checkbox logic (HUMAN, CYBORG, ANDROID, ALIEN)
    const speciesList = ["human", "cyborg", "android", "alien"];
    speciesList.forEach(sp => {
        const chkEl = document.getElementById(`chk-${sp}`);
        if (chkEl) {
            chkEl.checked = (agent.species === sp);
        }
    });

    // Section 2: Origin (GENETIC ORIGIN vs SYNTHETIC ORIGIN)
    const labelOriginEl = document.getElementById("label-origin");
    const originGridEl = document.getElementById("origin-grid-container");

    if (agent.species === "android" || agent.manufacturer) {
        if (labelOriginEl) labelOriginEl.textContent = "SYNTHETIC ORIGIN";
        if (originGridEl) {
            const isProto = agent.syntheticOrigin === "prototype";
            originGridEl.innerHTML = `
                <label class="chk-label">
                    <input type="checkbox" id="chk-factory" ${!isProto ? 'checked' : ''} disabled>
                    <span class="custom-chk"></span>
                    <span class="chk-text">FACTORY</span>
                </label>
                <label class="chk-label">
                    <input type="checkbox" id="chk-prototype" ${isProto ? 'checked' : ''} disabled>
                    <span class="custom-chk"></span>
                    <span class="chk-text">PROTOTYPE</span>
                </label>
            `;
        }
    } else {
        if (labelOriginEl) labelOriginEl.textContent = "GENETIC ORIGIN";
        if (originGridEl) {
            const currentGenetic = agent.geneticOrigin || "natural";
            originGridEl.innerHTML = `
                <label class="chk-label">
                    <input type="checkbox" id="chk-natural" ${currentGenetic === 'natural' ? 'checked' : ''} disabled>
                    <span class="custom-chk"></span>
                    <span class="chk-text">NATURAL</span>
                </label>
                <label class="chk-label">
                    <input type="checkbox" id="chk-cultured" ${currentGenetic === 'cultured' ? 'checked' : ''} disabled>
                    <span class="custom-chk"></span>
                    <span class="chk-text">CULTURED</span>
                </label>
                <label class="chk-label">
                    <input type="checkbox" id="chk-cloned" ${currentGenetic === 'cloned' ? 'checked' : ''} disabled>
                    <span class="custom-chk"></span>
                    <span class="chk-text">CLONED</span>
                </label>
            `;
        }
    }

    // Section 3: Augmentation / Modification Status
    const labelAugEl = document.getElementById("label-augmentation");
    const augEl = document.getElementById("aug-status-text");

    if (agent.species === "android" || agent.manufacturer) {
        if (labelAugEl) labelAugEl.textContent = "MODIFICATION STATUS";
        if (augEl) augEl.textContent = agent.modificationStatus || "STANDARD";
    } else {
        if (labelAugEl) labelAugEl.textContent = "AUGMENTATION STATUS";
        if (augEl) augEl.textContent = agent.augmentationStatus || "NONE";
    }

    // Language Toggle Button sync
    const langBtnText = document.getElementById("lang-btn-text");
    if (langBtnText) {
        langBtnText.textContent = currentLang === "ko" ? "ENGLISH [ENG]" : "한국어 [KOR]";
    }

    // Update Portrait Image with Eye Blinking
    drawAvatarWithBlink();

    // Trigger Fast DOS Terminal Typewriter Effect for Evaluation Bio Text in active language
    const bioText = currentLang === "ko" ? (agent.authTextKo || agent.authText) : (agent.authTextEn || agent.authText);
    startTypewriterEffect(bioText || "");
}

// ==========================================================================
// PROFILE EDIT MODE SYSTEM
// ==========================================================================
let isProfileEditing = false;

function toggleProfileEditMode() {
    const editBtn = document.getElementById("btn-edit-profile");
    if (!selectedAgent) return;

    if (!isProfileEditing) {
        // TURN ON EDIT MODE
        isProfileEditing = true;
        if (editBtn) {
            editBtn.textContent = "[SAVE DOSSIER]";
            editBtn.classList.add("saving");
        }

        // Enable Species Checkboxes
        const speciesList = ["human", "cyborg", "android", "alien"];
        speciesList.forEach(sp => {
            const chk = document.getElementById(`chk-${sp}`);
            if (chk) chk.disabled = false;
        });

        const isAndroid = selectedAgent.species === "android" || selectedAgent.manufacturer;
        if (isAndroid) {
            ["factory", "prototype"].forEach(or => {
                const chk = document.getElementById(`chk-${or}`);
                if (chk) chk.disabled = false;
            });
        } else {
            ["natural", "cultured", "cloned"].forEach(or => {
                const chk = document.getElementById(`chk-${or}`);
                if (chk) chk.disabled = false;
            });
        }

        // Stop typewriter effect if running
        if (typewriterInterval) {
            clearInterval(typewriterInterval);
            typewriterInterval = null;
        }

        // Make Name, Position, Contact, Augmentation & Evaluation Editable Inputs
        const nameEl = document.getElementById("card-official-name");
        const posEl = document.getElementById("card-position");
        const emailEl = document.getElementById("card-email");
        const phoneEl = document.getElementById("card-phone");
        const augEl = document.getElementById("aug-status-text");
        const bioEl = document.getElementById("card-bio");

        if (nameEl) {
            nameEl.innerHTML = `<input type="text" id="edit-val-name" class="dos-edit-input" value="${selectedAgent.officialName || ''}">`;
        }
        if (posEl) {
            posEl.classList.add("editing");
            posEl.innerHTML = `<input type="text" id="edit-val-pos" class="dos-edit-input" value="${selectedAgent.position || ''}">`;
        }
        if (emailEl) {
            const val = isAndroid ? (selectedAgent.manufacturer || '') : (selectedAgent.email || '');
            emailEl.innerHTML = `<input type="text" id="edit-val-email" class="dos-edit-input" value="${val}">`;
        }
        if (phoneEl) {
            const val = isAndroid ? (selectedAgent.unitSerial || '') : (selectedAgent.phone || '');
            phoneEl.innerHTML = `<input type="text" id="edit-val-phone" class="dos-edit-input" value="${val}">`;
        }
        if (augEl) {
            const val = isAndroid ? (selectedAgent.modificationStatus || 'STANDARD') : (selectedAgent.augmentationStatus || 'NONE');
            augEl.innerHTML = `<input type="text" id="edit-val-aug" class="dos-edit-input" value="${val}">`;
        }
        if (bioEl) {
            const currentBio = currentLang === 'en' ? (selectedAgent.authTextEn || selectedAgent.authText) : (selectedAgent.authTextKo || selectedAgent.authText);
            bioEl.innerHTML = `<textarea id="edit-val-bio" class="dos-edit-textarea">${currentBio || ''}</textarea>`;
        }

        playBeepSound(1000, 0.05);

    } else {
        // TURN OFF & SAVE EDIT MODE
        const nameInput = document.getElementById("edit-val-name");
        const posInput = document.getElementById("edit-val-pos");
        const emailInput = document.getElementById("edit-val-email");
        const phoneInput = document.getElementById("edit-val-phone");
        const augInput = document.getElementById("edit-val-aug");
        const bioInput = document.getElementById("edit-val-bio");

        if (nameInput) selectedAgent.officialName = nameInput.value.trim();
        if (posInput) {
            selectedAgent.position = posInput.value.trim();
            selectedAgent.role = selectedAgent.position;
        }

        // Species Check
        const speciesList = ["human", "cyborg", "android", "alien"];
        for (const sp of speciesList) {
            const chk = document.getElementById(`chk-${sp}`);
            if (chk && chk.checked) {
                selectedAgent.species = sp;
                selectedAgent.status = sp;
                break;
            }
        }

        const isAndroid = selectedAgent.species === "android";
        if (isAndroid) {
            if (emailInput) selectedAgent.manufacturer = emailInput.value.trim();
            if (phoneInput) selectedAgent.unitSerial = phoneInput.value.trim();
            if (augInput) selectedAgent.modificationStatus = augInput.value.trim();

            const chkProto = document.getElementById("chk-prototype");
            if (chkProto && chkProto.checked) selectedAgent.syntheticOrigin = "prototype";
            else selectedAgent.syntheticOrigin = "factory";
        } else {
            if (emailInput) selectedAgent.email = emailInput.value.trim();
            if (phoneInput) selectedAgent.phone = phoneInput.value.trim();
            if (augInput) selectedAgent.augmentationStatus = augInput.value.trim();

            const geneticList = ["natural", "cultured", "cloned"];
            for (const gen of geneticList) {
                const chk = document.getElementById(`chk-${gen}`);
                if (chk && chk.checked) {
                    selectedAgent.geneticOrigin = gen;
                    break;
                }
            }
        }

        if (bioInput) {
            if (currentLang === "en") {
                selectedAgent.authTextEn = bioInput.value.trim();
            } else {
                selectedAgent.authTextKo = bioInput.value.trim();
                selectedAgent.authText = bioInput.value.trim();
            }
        }

        isProfileEditing = false;
        if (editBtn) {
            editBtn.textContent = "[EDIT DOSSIER]";
            editBtn.classList.remove("saving");
        }

        logActivityEvent("DOSSIER_UPDATED");
        playBeepSound(800, 0.1);

        // Re-render Dossier and Grid
        renderAgentDossier(selectedAgent);
        renderAgentGrid();
    }
}

// Toggle Language (KO <-> EN)
function toggleLanguage() {
    currentLang = currentLang === "ko" ? "en" : "ko";
    const langBtnText = document.getElementById("lang-btn-text");
    if (langBtnText) {
        langBtnText.textContent = currentLang === "ko" ? "ENGLISH [ENG]" : "한국어 [KOR]";
    }
    
    // Re-trigger fast DOS terminal typewriter effect with translated text
    const bioText = currentLang === "ko" ? (selectedAgent.authTextKo || selectedAgent.authText) : (selectedAgent.authTextEn || selectedAgent.authText);
    startTypewriterEffect(bioText || "");
    playBeepSound(960, 0.08);
}

// Fast Retro DOS Terminal Typewriter Engine
let typewriterInterval = null;

function startTypewriterEffect(fullText) {
    const authTextEl = document.getElementById("card-bio") || document.getElementById("card-auth-text");
    if (!authTextEl) return;

    if (typewriterInterval) {
        clearInterval(typewriterInterval);
        typewriterInterval = null;
    }

    authTextEl.innerHTML = '<span class="type-text"></span><span class="type-cursor">█</span>';
    const typeTextEl = authTextEl.querySelector('.type-text');

    let charIndex = 0;
    const speed = 8; // Ultra snappy DOS terminal typing speed

    typewriterInterval = setInterval(() => {
        if (charIndex < fullText.length) {
            const chunkSize = 2; // Type 2 characters per tick
            typeTextEl.textContent += fullText.substr(charIndex, chunkSize);
            charIndex += chunkSize;
            if (charIndex % 6 === 0) {
                playBeepSound(1100 + Math.random() * 300, 0.008); // Retro keyclick sound
            }
        } else {
            typeTextEl.textContent = fullText;
            clearInterval(typewriterInterval);
            typewriterInterval = null;
        }
    }, speed);
}

// Eye Blinking Animation Engine (Completely Removed as requested)
const loadedAvatarImages = {};

function initEyeBlinking() {
    // Disabled / Removed completely
}

function drawAvatarWithBlink() {
    const portraitImgEl = document.getElementById("portrait-img");
    if (!portraitImgEl) return;

    if (selectedAgent && selectedAgent.avatarImg) {
        portraitImgEl.style.display = "block";
        portraitImgEl.style.transform = selectedAgent.avatarTransform || "none";
        portraitImgEl.src = selectedAgent.avatarImg;
    } else {
        portraitImgEl.style.display = "none";
        portraitImgEl.src = "";
    }
}

// CRT Scanlines Toggle
function toggleCRT() {
    const scanlines = document.querySelector('.scanlines');
    scanlines.classList.toggle('off');
    playBeepSound();
}

// Voight-Kampff Scanning effect on Depth 2
function scanDossier() {
    const frame = document.getElementById("id-card-frame");
    frame.style.boxShadow = "0 0 35px rgba(228, 75, 75, 0.6)";

    let count = 0;
    const interval = setInterval(() => {
        drawAvatarWithBlink();
        count++;
        if (count > 6) {
            clearInterval(interval);
            frame.style.boxShadow = "0 0 20px rgba(0,0,0,0.9), inset 0 0 10px rgba(74, 108, 120, 0.2)";
        }
    }, 150);

    playBeepSound(880, 0.15);
}

// Real-time Dynamic CRT TV Static Snow Noise Engine
function initCRTMonitorEffects() {
    const noiseCanvas = document.getElementById("crt-noise-canvas");
    if (!noiseCanvas) return;
    const ctx = noiseCanvas.getContext("2d");

    let noiseWidth = 170;
    let noiseHeight = 224;
    noiseCanvas.width = noiseWidth;
    noiseCanvas.height = noiseHeight;

    function renderTVNoise() {
        const imgData = ctx.createImageData(noiseWidth, noiseHeight);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
            const grain = Math.random() < 0.15 ? Math.floor(Math.random() * 255) : 0;
            data[i] = grain > 0 ? 85 : 0;       // R (Cyan tint)
            data[i + 1] = grain > 0 ? 200 : 0;  // G
            data[i + 2] = grain > 0 ? 228 : 0;  // B
            data[i + 3] = grain > 0 ? Math.floor(Math.random() * 40) : 0; // Alpha reduced by 50%
        }

        ctx.putImageData(imgData, 0, 0);
        requestAnimationFrame(renderTVNoise);
    }

    renderTVNoise();
}

// Web Audio API Retro Synthesizer Beep (Completely Muted/Disabled)
function playBeepSound(freq = 440, duration = 0.08) {
    return; // 100% Silent mode across all screens
}

// Keyboard shortcuts for Pure MS-DOS CLI Terminal & Inner App Navigation
function setupKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
        if (isSecModalActive) {
            handleSecModalKeyDown(e);
            return;
        }

        const rootScreen = document.getElementById("landing-root-screen");
        const isRootActive = rootScreen && rootScreen.classList.contains("active");

        if (isRootActive) {
            focusDosInput();
            if (e.key === "Enter") {
                e.preventDefault();
                handleDosGlobalEnter();
            }
        } else {
            // Actions inside Inner Cyberpunk App
            if (e.key === "0") {
                exitToRootTerminal();
            } else if (e.key === "1") {
                switchDepth(1);
            } else if (e.key === "2") {
                switchDepth(2);
            } else if (e.key === "Escape") {
                if (currentDepth === 2) {
                    switchDepth(1);
                } else {
                    exitToRootTerminal();
                }
            }
        }
    });
}
