// DOM Elements
const timeDisplay = document.getElementById('live-time');
const dateDisplay = document.getElementById('live-date');
const grid = document.getElementById('market-grid');


// Master Data Arrays
const marketsPagi = [
    { name: "HOKI DRAW", close: "08:00", result: "08:00", link: "https://hokidraw.com" },
    { name: "CALIFORNIA", close: "08:25", result: "08:40", link: "https://www.calottery.com/draw-games/daily-4" },
    { name: "FLORIDA EVENING", close: "08:35", result: "08:45", link: "https://floridalottery.com/games/draw-games/pick-4" },
    { name: "OREGON 09", close: "08:50", result: "09:00", link: "https://www.oregonlottery.org/pick-4/winning-numbers/" },
    { name: "HOKI DRAW", close: "09:00", result: "09:00", link: "https://hokidraw.com" },
    { name: "BANGKOK 0930", close: "09:15", result: "09:30", link: "https://bangkokpoolstoday.com/" },
    { name: "NEW YORK EVENING", close: "09:25", result: "09:35", link: "https://nylottery.ny.gov/draw-game?game=win4" },
    { name: "KENTUCKY EVENING", close: "09:45", result: "10:00", link: "https://www.kylottery.com/apps/draw_games/pick4//" },
    { name: "HOKI DRAW", close: "10:00", result: "10:00", link: "https://hokidraw.com" },
    { name: "CAROLINA EVENING", close: "10:17", result: "10:22", link: "https://www.wral.com/evening-pick-3-pick-4-and-cash-5/1075494/" },
    { name: "TOTO CAMBODIA LIVE", close: "10:45", result: "11:00", link: "https://totocambodialive.com/live-draw.html" },
    { name: "HOKI DRAW", close: "11:00", result: "11:00", link: "https://hokidraw.com" },
    { name: "CHELSEA11", close: "11:00", result: "11:15", link: "https://chelseapools.co.uk/" },
    { name: "OREGON 12", close: "11:50", result: "12:00", link: "https://www.oregonlottery.org/pick-4/winning-numbers/" },
    { name: "HOKI DRAW", close: "12:00", result: "12:00", link: "https://hokidraw.com" },
    { name: "BULLSEYE", close: "12:00", result: "12:15", link: "https://mylotto.co.nz/results/bullseye" },
    { name: "POIPET12", close: "12:15", result: "12:30", link: "https://poipetlottery.com/" },
    { name: "HOKI DRAW", close: "13:00", result: "13:00", link: "https://hokidraw.com" },
    { name: "TOTO MACAU SIANG", close: "13:00", result: "13:15", link: "https://kick.com/live-ttm4d" },
    { name: "SYDNEY LOTTO", close: "13:49", result: "14:00", link: "https://kick.com/sydney-lotto-official" },
    { name: "HOKI DRAW", close: "14:00", result: "14:00", link: "https://hokidraw.com" },
    { name: "BRUNEI14", close: "14:30", result: "14:45", link: "https://bruneipools.com/" },
    { name: "HOKI DRAW", close: "15:00", result: "15:15", link: "https://hokidraw.com" },
    { name: "CHELSEA 15", close: "15:00", result: "15:15", link: "https://chelseapools.co.uk/" },
    { name: "POIPET15", close: "15:15", result: "15:30", link: "https://poipetlottery.com/" },
    { name: "TOTOMALI1530", close: "15:15", result: "15:30", link: "https://totomali.com/" }
];

const marketsSore = [
    { name: "HOKI DRAW", close: "16:00", result: "16:00", link: "https://hokidraw.com" },
    { name: "TOTO MACAU SORE", close: "16:00", result: "16:05", link: "https://kick.com/live-ttm4d" },
    { name: "HUAHIN1630", close: "16:15", result: "16:30", link: "https://huahinlottery.com/" },
    { name: "HOKI DRAW", close: "17:00", result: "17:00", link: "https://hokidraw.com" },
    { name: "KING KONG4D SORE", close: "17:00", result: "17:10", link: "https://kick.com/king-kong-pools" },
    { name: "SINGAPORE", close: "17:30", result: "17:45", link: "https://www.singaporepools.com.sg/landing/en/Pages/index.html", note: "Setiap Hari Selasa dan Jumat Libur", offDays: [2, 5] },
    { name: "HOKI DRAW", close: "18:00", result: "18:00", link: "https://hokidraw.com" },
    { name: "MAGNUM4D", close: "18:10", result: "18:35", link: "https://www.magnum4d.my/en", note: "Hanya Buka Tanggal Tertentu Saja" },
    { name: "HOKI DRAW", close: "19:00", result: "19:00", link: "https://hokidraw.com" },
    { name: "TOTO MACAU MALAM 1", close: "19:00", result: "19:10", link: "https://kick.com/live-ttm4d" },
    { name: "CHELSEA 19", close: "19:00", result: "19:15", link: "https://chelseapools.co.uk/" },
    { name: "POIPET19", close: "19:30", result: "19:50", link: "https://poipetlottery.com/" },
    { name: "PCSO", close: "19:50", result: "20:10", link: "https://www.pcso.gov.ph/", note: "Setiap Hari Minggu Libur", offDays: [0] },
    { name: "HOKI DRAW", close: "20:00", result: "20:00", link: "https://hokidraw.com" },
    { name: "TOTOMALI2030", close: "20:15", result: "20:30", link: "https://totomali.com/" },
    { name: "HUAHIN2100", close: "20:45", result: "21:00", link: "https://huahinlottery.com/" },
    { name: "HOKI DRAW", close: "21:00", result: "21:00", link: "https://hokidraw.com" },
    { name: "CHELSEA 21", close: "21:00", result: "21:15", link: "https://chelseapools.co.uk/" },
    { name: "NEVADA", close: "21:15", result: "21:30", link: "https://www.nevadalottery.us/" },
    { name: "BRUNEI21", close: "21:30", result: "21:45", link: "https://bruneipools.com/" },
    { name: "HOKI DRAW", close: "22:00", result: "22:00", link: "https://hokidraw.com" },
    { name: "TOTO MACAU MALAM 2", close: "22:00", result: "22:15", link: "https://kick.com/live-ttm4d" },
    { name: "POIPET22", close: "22:30", result: "22:45", link: "https://poipetlottery.com/" },
    { name: "HONGKONG LOTTO", close: "22:59", result: "23:15", link: "https://kick.com/hongkong-lotto-official" },
    { name: "HOKI DRAW", close: "23:00", result: "23:00", link: "https://hokidraw.com" },
    { name: "TOTO MACAU MALAM 3", close: "23:00", result: "23:15", link: "https://kick.com/live-ttm4d" },
    { name: "TOTOMALI2330", close: "23:15", result: "23:30", link: "https://totomali.com/" },
    { name: "KING KONG4D MALAM", close: "23:30", result: "23:35", link: "https://kick.com/king-kong-pools" }
];

const marketsMalam = [
    { name: "HOKI DRAW", close: "00:00", result: "00:15", link: "https://hokidraw.com" },
    { name: "TOTO MACAU PAGI", close: "00:00", result: "00:15", link: "https://kick.com/live-ttm4d" },
    { name: "KENTUCKY MIDDAY", close: "00:05", result: "00:20", link: "https://play.kylottery.com/en-us/playnow/pick4.html" },
    { name: "FLORIDA MIDDAY", close: "00:20", result: "00:20", link: "https://floridalottery.com/games/draw-games/pick-4" },
    { name: "HUAHIN0100", close: "00:45", result: "01:00", link: "https://huahinlottery.com/" },
    { name: "HOKI DRAW", close: "01:00", result: "01:00", link: "https://hokidraw.com" },
    { name: "NEW YORK MIDDAY", close: "01:15", result: "01:25", link: "https://nylottery.ny.gov/draw-game?game=win4" },
    { name: "BANGKOK 0130", close: "01:15", result: "01:30", link: "https://bangkokpoolstoday.com/" },
    { name: "CAROLINA DAY", close: "01:45", result: "02:00", link: "https://www.wral.com/entertainment/lottery/" },
    { name: "HOKI DRAW", close: "02:00", result: "02:00", link: "https://hokidraw.com" },
    { name: "BRUNEI02", close: "02:30", result: "02:45", link: "https://bruneipools.com/" },
    { name: "OREGON 03", close: "02:50", result: "03:00", link: "https://www.oregonlottery.org/pick-4/winning-numbers/" },
    { name: "HOKI DRAW", close: "03:00", result: "03:00", link: "https://hokidraw.com" },
    { name: "HOKI DRAW", close: "04:00", result: "04:00", link: "https://hokidraw.com" },
    { name: "HOKI DRAW", close: "05:00", result: "05:00", link: "https://hokidraw.com" },
    { name: "OREGON 06", close: "05:50", result: "06:00", link: "https://www.oregonlottery.org/pick-4/winning-numbers/" },
    { name: "HOKI DRAW", close: "06:00", result: "06:00", link: "https://hokidraw.com" },
    { name: "HOKI DRAW", close: "07:00", result: "07:00", link: "https://hokidraw.com" }
];

const defaultAppData = {
    pagi: marketsPagi,
    sore: marketsSore,
    malam: marketsMalam
};

let appData = JSON.parse(localStorage.getItem('wdbos_togel_data'));
if (!appData || !appData.pagi || !appData.pagi.length) {
    appData = JSON.parse(JSON.stringify(defaultAppData));
    
    // Sort array chronologically at initialization so even clean slate is sorted perfectly
    ['pagi', 'sore', 'malam'].forEach(s => {
        appData[s].sort((a, b) => {
            let diff = timeToMins(a.close) - timeToMins(b.close);
            if (diff === 0) return timeToMins(a.result) - timeToMins(b.result);
            return diff;
        });
    });
    
    localStorage.setItem('wdbos_togel_data', JSON.stringify(appData));
}

// Tabs DOM Elements
const tabPagi = document.getElementById('tab-pagi');
const tabSore = document.getElementById('tab-sore');
const tabMalam = document.getElementById('tab-malam');

function deactivateTabs() {
    tabPagi.classList.remove('active');
    tabSore.classList.remove('active');
    tabMalam.classList.remove('active');
}

tabPagi.addEventListener('click', () => {
    deactivateTabs();
    tabPagi.classList.add('active');
    renderGrid(appData.pagi);
});

tabSore.addEventListener('click', () => {
    deactivateTabs();
    tabSore.classList.add('active');
    renderGrid(appData.sore);
});

tabMalam.addEventListener('click', () => {
    deactivateTabs();
    tabMalam.classList.add('active');
    renderGrid(appData.malam);
});

// Helper: Ubah "HH:MM" menjadi total menit dari jam 00:00 (untuk komparasi akurat)
function timeToMins(timeStr) {
    const parts = timeStr.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

// Format waktu jam, menit, detik dua digit (0X)
function padTime(n) {
    return n < 10 ? '0' + n : n;
}

function updateClockAndStatus() {
    const now = new Date();
    
    // 1. Update Jam UI
    const h = padTime(now.getHours());
    const m = padTime(now.getMinutes());
    const s = padTime(now.getSeconds());
    timeDisplay.textContent = `${h}:${m}:${s}`;
    
    // Update Tanggal UI
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Set locale ke bahasa Indonesia 'id-ID'
    dateDisplay.textContent = now.toLocaleDateString('id-ID', options);

    // 2. Evaluasi Status Buka/Tutup Setiap Pasaran
    const currentMins = now.getHours() * 60 + now.getMinutes();

    // Loop semua UI Card (memanfaatkan dataset atribut)
    const cards = document.querySelectorAll('.market-card');
    
    cards.forEach(card => {
        try {
            const h3 = card.querySelector('h3');
            if (!h3) return;
            const marketName = h3.textContent;
            const closeMins = parseInt(card.dataset.close);
            const resultMins = parseInt(card.dataset.result);
            const offDays = card.dataset.offDays ? JSON.parse(card.dataset.offDays) : [];
            const statusBadge = card.querySelector('.status-badge');
            
            let cardStatus = 'BUKA';

            // Cek Libur Berdasarkan Hari Terlebih Dahulu
            if (offDays.length > 0 && offDays.includes(now.getDay())) {
                cardStatus = 'LIBUR';
            } else {
                if (closeMins <= resultMins) {
                    // Pasaran biasa yang tutup & result di hari yang sama
                    if (currentMins >= closeMins && currentMins < resultMins) {
                        cardStatus = 'TUTUP';
                    } else if (currentMins >= resultMins) {
                        cardStatus = 'DONE';
                    }
                } else {
                    // Pasaran lintas malam
                    if (currentMins >= closeMins || currentMins < resultMins) {
                        cardStatus = 'TUTUP';
                    } else if (currentMins >= resultMins && currentMins < closeMins) {
                        cardStatus = 'DONE';
                    }
                }
            }

            if (statusBadge) {
                if (cardStatus === 'LIBUR') {
                    statusBadge.textContent = 'LIBUR';
                    statusBadge.className = 'status-badge close';
                    card.classList.add('done-card');
                } else if (cardStatus === 'DONE') {
                    statusBadge.textContent = 'RESULT SELESAI';
                    statusBadge.className = 'status-badge done';
                    card.classList.add('done-card');
                } else if (cardStatus === 'TUTUP') {
                    statusBadge.textContent = 'TUTUP';
                    statusBadge.className = 'status-badge close';
                    card.classList.remove('done-card');
                } else {
                    statusBadge.textContent = 'BUKA';
                    statusBadge.className = 'status-badge open';
                    card.classList.remove('done-card');
                }
            }
        } catch (cardErr) {
            console.error("Error updating card:", cardErr);
        }
    });
}

function getLogoForMarket(marketName) {
    let name = marketName.toUpperCase();
    if (name.includes("BANGKOK")) return "BANGKOK.png";
    if (name.includes("BRUNEI")) return "BRUNEI.png";
    if (name.includes("BULLSEYE")) return "BULLSEYE LOGO.png";
    if (name.includes("CALIFORNIA")) return "CALIFORNIA.png";
    if (name.includes("CAROLINA")) return "CAROLINA EVENING.png"; 
    if (name.includes("CHELSEA")) return "CHELSEA.png";
    if (name.includes("FLORIDA")) return "FLORIDA.png";
    if (name.includes("HOKI DRAW")) return "HOKI DRAW.png";
    if (name.includes("HONGKONG")) return "HONGKONG LOTTO.png";
    if (name.includes("HUAHIN")) return "HUAHIN.png";
    if (name.includes("KENTUCKY")) return "KENTUCKY.png";
    if (name.includes("KING KONG")) return "KING KONG.png";
    if (name.includes("MAGNUM")) return "MAGNUM.png";
    if (name.includes("NEVADA")) return "NEVADA.gif";
    if (name.includes("NEW YORK")) return "NEW YORK.png";
    if (name.includes("OREGON")) return "OREGON.png";
    if (name.includes("PCSO")) return "PCSO.png";
    if (name.includes("POIPET")) return "POIPET.png";
    if (name.includes("SINGAPORE") || name.includes("SGP")) return "SINGAPORE.png";
    if (name.includes("SYDNEY")) return "SYDNEY.png";
    if (name.includes("CAMBODIA")) return "TOTO CAMBODIA.png";
    if (name.includes("MACAU")) return "TOTO MACAU.png";
    if (name.includes("MALI")) return "TOTO MALI LOGO.png";
    return "";
}

function renderGrid(dataset) {
    grid.innerHTML = ''; // Bersihkan kontainer
    
    // Day untuk cek logic Singapore
    const dDay = new Date().getDay();

    dataset.forEach(m => {
        let displayName = m.name;
        
        // Dynamic name khusus SINGAPORE
        if (m.name === "SINGAPORE") {
            if (dDay === 1 || dDay === 4) displayName = "SINGAPORE TOTO";
            else if (dDay === 3 || dDay === 6 || dDay === 0) displayName = "SINGAPORE 4D";
        }

        // Logic Note Elements
        const noteHtml = m.note ? `<div class="market-note">${m.note}</div>` : '';
        
        let logoPath = getLogoForMarket(displayName);
        let logoHtml = logoPath ? `<img src="${logoPath}" class="market-logo" onerror="this.style.display='none'" alt="Logo">` : '';

        // Buat HTML string
        const html = `
            <div class="card-header">
                <div style="display: flex; align-items: center; gap: 12px;">
                    ${logoHtml}
                    <h3>${displayName}</h3>
                </div>
                <span class="status-badge">...</span>
            </div>
            ${noteHtml}
            <div class="times-container">
                <div class="time-box">
                    <span class="lbl">JAM TUTUP</span>
                    <span class="val">${m.close}</span>
                </div>
                <div class="separator"></div>
                <div class="time-box">
                    <span class="lbl">JAM RESULT</span>
                    <span class="val">${m.result}</span>
                </div>
            </div>
            <div class="card-footer">
                <a href="${m.link}" target="_blank" class="official-link">Situs Resmi ↗</a>
            </div>
        `;

        // Buat DOM Element
        const card = document.createElement('div');
        card.className = 'market-card';
        card.innerHTML = html;
        
        card.dataset.close = timeToMins(m.close);
        card.dataset.result = timeToMins(m.result);
        if (m.offDays) card.dataset.offDays = JSON.stringify(m.offDays);

        grid.appendChild(card);
    });

    updateClockAndStatus();
}

function initDashboard() {
    // Mulai dengan shift pagi
    renderGrid(appData.pagi);
    
    // Jalankan timer mutlak setiap 1 detik
    setInterval(updateClockAndStatus, 1000);
}

// Mulai
initDashboard();

// ==========================================
// SETTINGS MENU LOGIC
// ==========================================
const btnSettings = document.getElementById('btn-settings');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');
const selectShift = document.getElementById('select-shift');
const settingsTbody = document.getElementById('settings-tbody');
const btnSave = document.getElementById('btn-save');
const btnReset = document.getElementById('btn-reset');

btnSettings.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
    renderSettingsTable();
});

btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
});

selectShift.addEventListener('change', renderSettingsTable);

function renderSettingsTable() {
    const shift = selectShift.value; // 'pagi', 'sore', or 'malam'
    const data = appData[shift];
    settingsTbody.innerHTML = '';
    
    data.forEach((m, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="text" class="input-name" data-index="${index}" value="${m.name}"></td>
            <td><input type="time" class="input-close" data-index="${index}" value="${m.close}"></td>
            <td><input type="time" class="input-result" data-index="${index}" value="${m.result}"></td>
            <td><input type="text" class="input-link" data-index="${index}" value="${m.link}"></td>
        `;
        settingsTbody.appendChild(tr);
    });
}

btnSave.addEventListener('click', () => {
    const shift = selectShift.value;
    const data = appData[shift];
    
    const names = document.querySelectorAll('.input-name');
    const closes = document.querySelectorAll('.input-close');
    const results = document.querySelectorAll('.input-result');
    const links = document.querySelectorAll('.input-link');
    
    data.forEach((m, index) => {
        m.name = names[index].value;
        m.close = closes[index].value;
        m.result = results[index].value;
        m.link = links[index].value;
    });
    
    // Sort array chronologically by close time (and then result time if equal)
    data.sort((a, b) => {
        let diff = timeToMins(a.close) - timeToMins(b.close);
        if (diff === 0) return timeToMins(a.result) - timeToMins(b.result);
        return diff;
    });
    
    localStorage.setItem('wdbos_togel_data', JSON.stringify(appData));
    settingsModal.classList.add('hidden');
    
    // Refresh currently active tab
    if (tabPagi.classList.contains('active')) renderGrid(appData.pagi);
    if (tabSore.classList.contains('active')) renderGrid(appData.sore);
    if (tabMalam.classList.contains('active')) renderGrid(appData.malam);
    
    alert('Pengaturan berhasil disimpan dan diurutkan sesuai jam!');
});

btnReset.addEventListener('click', () => {
    if(confirm('Anda yakin ingin mereset semua data jadwal ke setelan bawaan / default awal?')) {
        appData = JSON.parse(JSON.stringify(defaultAppData));
        
        // Sort the defaults chronologically upon reset
        ['pagi', 'sore', 'malam'].forEach(s => {
            appData[s].sort((a, b) => {
                let diff = timeToMins(a.close) - timeToMins(b.close);
                if (diff === 0) return timeToMins(a.result) - timeToMins(b.result);
                return diff;
            });
        });
        
        localStorage.setItem('wdbos_togel_data', JSON.stringify(appData));
        renderSettingsTable();
        
        if (tabPagi.classList.contains('active')) renderGrid(appData.pagi);
        if (tabSore.classList.contains('active')) renderGrid(appData.sore);
        if (tabMalam.classList.contains('active')) renderGrid(appData.malam);
        
        alert('Data telah direset dan diurutkan sesuai jam bawaan!');
    }
});

/* ==========================================
   NAVIGATION SWITCHER (DASHBOARD VS CALC VS PREDIKSI)
   ========================================== */
const navDashboard = document.getElementById('nav-dashboard');
const navCalc = document.getElementById('nav-calc');
const navPrediksi = document.getElementById('nav-prediksi');

const dashboardView = document.getElementById('dashboard-view');
const calcView = document.getElementById('calc-view');
const prediksiView = document.getElementById('prediksi-view');

const navItems = [navDashboard, navCalc, navPrediksi];
const views = [dashboardView, calcView, prediksiView];

function switchView(targetNav, targetView) {
    navItems.forEach(nav => nav.classList.remove('active'));
    views.forEach(view => view.classList.add('hidden'));

    targetNav.classList.add('active');
    targetView.classList.remove('hidden');
    
    // Scroll to top when switching views
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetView === prediksiView) {
        initPrediksi();
    }
}

navDashboard.addEventListener('click', () => switchView(navDashboard, dashboardView));
navCalc.addEventListener('click', () => switchView(navCalc, calcView));
navPrediksi.addEventListener('click', () => switchView(navPrediksi, prediksiView));

/* ==========================================
   AUTOMATIC DAILY PREDIKSI LOGIC
   ========================================== */
let dailyPrediksiData = {};

function initPrediksi() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    const dateSeed = now.getUTCFullYear().toString() + (now.getUTCMonth() + 1).toString() + now.getUTCDate().toString();
    
    document.getElementById('prediksi-current-date').textContent = dateStr;

    generateAllPredictions(dateSeed);
    
    // Default show Pagi
    renderPrediksiGrid('pagi');

    // Tab switcher within Prediksi
    const pTabs = document.querySelectorAll('.p-tab');
    pTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            pTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderPrediksiGrid(tab.dataset.shift);
        });
    });
}

function generateAllPredictions(dateSeed) {
    ['pagi', 'sore', 'malam'].forEach(shift => {
        dailyPrediksiData[shift] = appData[shift].map(m => {
            return {
                name: m.name,
                data: getMarketPrediksi(m.name, dateSeed)
            };
        });
    });
}

function getMarketPrediksi(marketName, dateSeed) {
    // Generate a unique seed for this specific market on this specific day
    let marketSeed = 0;
    for (let i = 0; i < marketName.length; i++) {
        marketSeed += marketName.charCodeAt(i);
    }
    const finalSeed = parseInt(dateSeed) + marketSeed;

    // A simple deterministic random generator
    function drand() {
        var x = Math.sin(marketSeed++) * 10000;
        return x - Math.floor(x);
    }

    function getDigits(count, max = 9, allowDuplicate = false) {
        let res = [];
        while(res.length < count) {
            let d = Math.floor(drand() * (max + 1));
            if(allowDuplicate || !res.includes(d)) res.push(d);
        }
        return res;
    }

    const bbfs = getDigits(7).join('');
    const angkaMain = getDigits(5).join('');
    const shioList = ['Kuda', 'Ular', 'Naga', 'Kelinci', 'Harimau', 'Kerbau', 'Tikus', 'Babi', 'Anjing', 'Ayam', 'Monyet', 'Kambing'];
    
    // 4D (4 sets)
    const d4 = Array.from({length: 4}, () => getDigits(4).join(''));
    // 3D (4 sets)
    const d3 = Array.from({length: 4}, () => getDigits(3).join(''));
    // 2D (10 sets)
    const d2 = Array.from({length: 10}, () => getDigits(2).join(''));
    
    // Twin (3 sets)
    const twin = Array.from({length: 3}, () => {
        const d = Math.floor(drand() * 10);
        return `${d}${d}`;
    });

    return {
        bbfs: bbfs,
        angkaMain: angkaMain,
        d4: d4,
        d3: d3,
        d2: d2,
        colok1: getDigits(2).join(' / '),
        colok2: Array.from({length: 3}, () => Math.floor(drand() * 99)).join(' / '), 
        shio: (() => {
            let selected = [];
            while(selected.length < 3) {
                let s = shioList[Math.floor(drand() * 12)];
                if(!selected.includes(s)) selected.push(s);
            }
            return selected.join(' / ');
        })(),
        twin: twin.join(' / ')
    };
}

function renderPrediksiGrid(shift) {
    const grid = document.getElementById('prediksi-grid');
    grid.innerHTML = '';

    const markets = dailyPrediksiData[shift];
    if (!markets) return;

    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

    markets.forEach(m => {
        const p = m.data;
        const card = document.createElement('div');
        card.className = 'prediksi-card';
        card.innerHTML = `
            <div class="p-card-header">
                <div class="p-market-title">${m.name} ${dateStr}</div>
                <button class="btn-copy-prediksi" onclick="copyPrediksi('${m.name}')">📋 SALIN</button>
            </div>
            
            <div class="p-body-list">
                <div class="p-item"><span class="p-label">BBFS:</span> <span class="p-val highlight">${p.bbfs}</span></div>
                <div class="p-item"><span class="p-label">ANGKA MAIN:</span> <span class="p-val">${p.angkaMain}</span></div>
                <div class="p-item"><span class="p-label">4D (BB):</span> <span class="p-val">${p.d4.join(' ')}</span></div>
                <div class="p-item"><span class="p-label">3D (BB):</span> <span class="p-val">${p.d3.join(' ')}</span></div>
                <div class="p-item"><span class="p-label">2D (BB):</span> <span class="p-val">${p.d2.join(' ')}</span></div>
                <div class="p-item"><span class="p-label">COLOK BEBAS:</span> <span class="p-val">${p.colok1}</span></div>
                <div class="p-item"><span class="p-label">COLOK BEBAS:</span> <span class="p-val">${p.colok2}</span></div>
                <div class="p-item"><span class="p-label">SHIO:</span> <span class="p-val shio-text">${p.shio}</span></div>
                <div class="p-item"><span class="p-label">TWIN:</span> <span class="p-val">${p.twin}</span></div>
                <div class="p-footer-note">Selalu Utamakan Prediksi Sendiri</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function copyPrediksi(marketName) {
    // Find predictive data for this market
    let found = null;
    ['pagi', 'sore', 'malam'].forEach(s => {
        if (!found) found = dailyPrediksiData[s].find(m => m.name === marketName);
    });

    if (!found) return;

    const p = found.data;
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

    const textTemplate = `Berikut untuk Prediksi nya ya bosku

${marketName.toUpperCase()} ${dateStr}
BBFS: ${p.bbfs}
ANGKA MAIN: ${p.angkaMain}
4D (BB): ${p.d4.join(' ')}
3D (BB): ${p.d3.join(' ')}
2D (BB): ${p.d2.join(' ')}
COLOK BEBAS: ${p.colok1}
COLOK BEBAS: ${p.colok2}
SHIO: ${p.shio}
TWIN: ${p.twin}

Selalu Utamakan Prediksi Sendiri`;

    navigator.clipboard.writeText(textTemplate).then(() => {
        alert('Prediksi ' + marketName + ' berhasil disalin!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

/* ==========================================
   SGP TOTO CALCULATOR LOGIC
   ========================================== */
const btnProcessCalc = document.getElementById('btn-process-calc');
const calcResultArea = document.getElementById('calc-result-area');

btnProcessCalc.addEventListener('click', () => {
    // Get Inputs
    const n1 = parseInt(document.getElementById('val1').value) || 0;
    const n2 = parseInt(document.getElementById('val2').value) || 0;
    const n3 = parseInt(document.getElementById('val3').value) || 0;
    const n4 = parseInt(document.getElementById('val4').value) || 0;
    const n5 = parseInt(document.getElementById('val5').value) || 0;
    const n6 = parseInt(document.getElementById('val6').value) || 0;
    const nAdd = parseInt(document.getElementById('valAdd').value) || 0;

    // STEP 1: N2 + N3 (Similar to Excel column D8)
    const step1 = n2 + n3;
    const d1 = getTogelDigit(step1);

    // STEP 2: N4 + N5 (Similar to Excel column G8)
    const step2 = n4 + n5;
    const d2 = getTogelDigit(step2);

    // STEP 3: (SUM 1-6) * 2 (Similar to Excel column H8)
    const step3 = (n1 + n2 + n3 + n4 + n5 + n6) * 2;

    // STEP 4: Step3 - N1 - N6 + Add (Similar to Excel column J8)
    // Formula J8: =F8-D6-I6+J6 where F8 is the Sum*2
    const step4 = step3 - n1 - n6 + nAdd;
    
    // Extract result digits from Step 4 (MID 2nd & 3rd pos)
    const d3 = getDigitAtPos(step4, 2);
    const d4 = getDigitAtPos(step4, 3);

    // Update UI
    document.getElementById('res-step1').textContent = step1;
    document.getElementById('res-step2').textContent = step2;
    document.getElementById('res-step3').textContent = step3;
    document.getElementById('res-step4').textContent = step4;
    document.getElementById('final-4d').textContent = `${d1}${d2}${d3}${d4}`;

    // Reveal Result Area
    calcResultArea.classList.remove('hidden');
    
    // Smooth Scroll to result
    calcResultArea.scrollIntoView({ behavior: 'smooth' });
});

// Helper: Mengambil digit unit (terakhir) jika >= 10, atau angka itu sendiri
function getTogelDigit(num) {
    const s = Math.abs(num).toString();
    if (s.length >= 2) return s[1];
    return s[0];
}

// Helper: Mengambil digit pada posisi tertentu (1-indexed) seperti fungsi MID Excel
function getDigitAtPos(num, pos) {
    const s = Math.abs(num).toString();
    const idx = pos - 1;
    if (idx < s.length) return s[idx];
    return "0";
}

/* ==========================================
   SMART INPUT: AUTO-PASTE & AUTO-FOCUS
   ========================================== */
const calcInputs = [
    document.getElementById('val1'),
    document.getElementById('val2'),
    document.getElementById('val3'),
    document.getElementById('val4'),
    document.getElementById('val5'),
    document.getElementById('val6'),
    document.getElementById('valAdd')
];

calcInputs.forEach((input, index) => {
    // 1. Fitur Auto-Paste (Tempel sekaligus)
    input.addEventListener('paste', (e) => {
        // Ambil data dari clipboard
        const pasteData = (e.clipboardData || window.clipboardData).getData('text');
        
        // Pecah berdasarkan spasi, koma, titik, baris baru, atau tab
        const numbers = pasteData.split(/[\s,\.\t\n]+/).filter(n => n.trim() !== "");

        if (numbers.length > 1) {
            e.preventDefault(); // Batalkan paste default
            
            // Masukkan angka ke kotak-kotak mulai dari posisi kursor saat ini
            let numIdx = 0;
            for (let i = index; i < calcInputs.length && numIdx < numbers.length; i++) {
                calcInputs[i].value = numbers[numIdx];
                numIdx++;
            }
            
            // Fokus ke kotak terakhir yang terisi
            const nextFocus = Math.min(index + numbers.length - 1, calcInputs.length - 1);
            calcInputs[nextFocus].focus();
        }
    });

    // 2. Fitur Auto-Focus (Pindah kotak saat mengetik)
    input.addEventListener('input', (e) => {
        if (input.value.length >= 2) {
            // Jika sudah 2 digit, pindah ke kotak berikutnya
            if (index < calcInputs.length - 1) {
                calcInputs[index + 1].focus();
            }
        }
    });

    // 3. Pindah kotak menggunakan tombol Backspace (mundur)
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            calcInputs[index - 1].focus();
        }
    });
});





