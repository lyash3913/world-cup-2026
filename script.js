// Устанавливаем дату ФИНАЛА ЧМ-2026 (19 июля 2026 года, 22:00)
const countdownDate = new Date("July 19, 2026 22:00:00").getTime();

// Обновляем счетчик каждую 1 секунду
const timerInterval = setInterval(function() {

    // Получаем текущую дату и время
    const now = new Date().getTime();

    // Находим разницу между текущей датой и финалом
    const distance = countdownDate - now;

    // Вычисляем дни, часы и минуты
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Проверяем, существует ли еще обертка счетчика, чтобы избежать ошибок в консоли
    const daysEl = document.getElementById("days");
    if (!daysEl) return;

    // Подставляем вычисленные значения с ведущими нулями
    daysEl.innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;

    // Если финал наступил или прошел
    if (distance < 0) {
        clearInterval(timerInterval);
        const wrapper = document.querySelector(".countdown-wrapper");
        if (wrapper) {
            wrapper.innerHTML = "<div class='time-block' style='width: 100%; font-size: 20px; color: #ffd700; border-color: #ffd700; text-shadow: 0 0 10px rgba(255,215,0,0.3);'>👑 ОПРЕДЕЛЯЕТСЯ ЧЕМПИОН МИРА! 🏆</div>";
        }
    }

}, 1000);

// =========================================================================
// ТОЧНЫЕ РЕЗУЛЬТАТЫ МАТЧЕЙ (Просто копируем из group.html)
// =========================================================================
const matchResults = {
    "Мексика_ЮАР": { score1: 2, score2: 0 },
    "Южная Корея_Чехия": { score1: 2, score2: 1 },
    "Канада_Босния и Герцеговина": { score1: 1, score2: 1 },
    "США_Парагвай": { score1: 4, score2: 1 },
    "Катар_Швейцария": { score1: 1, score2: 1 },
    "Бразилия_Марокко": { score1: 1, score2: 1 },
    "Гаити_Шотландия": { score1: 0, score2: 1 },
    "Австралия_Турция": { score1: 2, score2: 0 },
    "Германия_Кюрасао": { score1: 7, score2: 1 },
    "Нидерланды_Япония": { score1: 2, score2: 2 },
    "Кот-д'Ивуар_Эквадор": { score1: 1, score2: 0 },
    "Швеция_Тунис": { score1: 5, score2: 1 },
    "Испания_Кабо-Верде": { score1: 0, score2: 0 },
    "Бельгия_Египет": { score1: 1, score2: 1 },
    "Саудовская Аравия_Уругвай": { score1: 1, score2: 1 },
    "Иран_Новая Зеландия": { score1: 2, score2: 2 },
    "Франция_Сенегал": { score1: 3, score2: 1 },
    "Ирак_Норвегия": { score1: 1, score2: 4 },
    "Аргентина_Алжир": { score1: 3, score2: 0 },
    "Австрия_Иордания": { score1: 3, score2: 1 },
    "Португалия_Конго ДР": { score1: 1, score2: 1 },
    "Англия_Хорватия": { score1: 4, score2: 2 },
    "Гана_Панама": { score1: 1, score2: 0 },
    "Узбекистан_Колумбия": { score1: 1, score2: 3 },
    "Чехия_ЮАР": { score1: 1, score2: 1 },
    "Швейцария_Босния и Герцеговина": { score1: 4, score2: 1 },
    "Канада_Катар": { score1: 6, score2: 0 },
    "Мексика_Южная Корея": { score1: 1, score2: 0 },
    "США_Австралия": { score1: 2, score2: 0 },
    "Шотландия_Марокко": { score1: 0, score2: 1 },
    "Бразилия_Гаити": { score1: 3, score2: 0 },
    "Турция_Парагвай": { score1: 0, score2: 1 },
    "Нидерланды_Швеция": { score1: 5, score2: 1 },
    "Германия_Кот-д'Ивуар": { score1: 2, score2: 1 },
    "Эквадор_Кюрасао": { score1: 0, score2: 0 },
    "Тунис_Япония": { score1: 0, score2: 4 },
    "Испания_Саудовская Аравия": { score1: 4, score2: 0 },
    "Бельгия_Иран": { score1: 0, score2: 0 },
    "Уругвай_Кабо-Верде": { score1: 2, score2: 2 },
    "Новая Зеландия_Египет": { score1: 1, score2: 3 },
    "Аргентина_Австрия": { score1: 2, score2: 0 },
    "Франция_Ирак": { score1: 3, score2: 0 },
    "Норвегия_Сенегал": { score1: 3, score2: 2 },
    "Иордания_Алжир": { score1: 1, score2: 2 },
    "Португалия_Узбекистан": { score1: 5, score2: 0 },
    "Англия_Гана": { score1: 0, score2: 0 },
    "Панама_Хорватия": { score1: 0, score2: 1 },
    "Колумбия_Конго ДР": { score1: 1, score2: 0 },
    "Канада_Швейцария": { score1: 1, score2: 2 },
    "Босния и Герцеговина_Катар": { score1: 3, score2: 1 },

    "Марокко_Гаити": { score1: 4, score2: 2 },
    "Шотландия_Бразилия": { score1: 0, score2: 3 },

    "Мексика_Чехия": { score1: 3, score2: 0 },
    "ЮАР_Южная Корея": { score1: 1, score2: 0 },
    "Эквадор_Германия": { score1: 2, score2: 1 },
    "Кюрасао_Кот-д'Ивуар": { score1: 0, score2: 2 },

    "Тунис_Нидерланды": { score1: 1, score2: 3 },
    "Япония_Швеция": { score1: 1, score2: 1 },

    "Турция_США": { score1: 3, score2: 2 },
    "Парагвай_Австралия": { score1: 0, score2: 0 },

    "Норвегия_Франция": { score1: 1, score2: 4 },
    "Сенегал_Ирак": { score1: 5, score2: 0 },

    "Уругвай_Испания": { score1: 0, score2: 1 },
    "Кабо-Верде_Саудовская Аравия": { score1: 0, score2: 0 },

    "Новая Зеландия_Бельгия": { score1: 1, score2: 5 },
    "Египет_Иран": { score1: 1, score2: 1 },

     "Панама_Англия": { score1: 0, score2: 2 },
    "Хорватия_Гана": { score1: 2, score2: 1 },

    "Колумбия_Португалия": { score1: 0, score2: 0 },
    "Конго ДР_Узбекистан": { score1: 3, score2: 1 },

    "Алжир_Австрия": { score1: 3, score2: 3 },
    "Иордания_Аргентина": { score1: 1, score2: 3 }
    // сюда постепенно добавлять результаты
};


// --- ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ ПОЛНОГО РАСПИСАНИЯ ---

const drawer = document.getElementById('schedule-drawer');
const openBtn = document.getElementById('open-schedule-btn');
const closeBtn = document.getElementById('close-schedule-btn');
const overlay = document.querySelector('.drawer-overlay');

// Функция открытия шторки
openBtn.addEventListener('click', () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden'; 
    
    // Запускаем обновление команд в расписании прямо при открытии!
    updatePlayoffTeamsInDrawer();
});

// Функция закрытия
const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = ''; // Возвращаем скролл
};

closeBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer); // Закрываем при клике на темную область

// --- ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА ГРУПП ---

const groupsModal = document.getElementById('groups-modal');
const openGroupsBtn = document.getElementById('open-groups-btn');
const closeGroupsBtn = document.getElementById('close-groups-btn');
const modalOverlay = groupsModal.querySelector('.modal-overlay');

// Функция открытия
openGroupsBtn.addEventListener('click', () => {
    groupsModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Замораживаем скролл страницы
});

// Функция закрытия
const closeGroupsModal = () => {
    groupsModal.classList.remove('open');
    document.body.style.overflow = ''; // Возвращаем обычный скролл
};

// Закрытие по крестику и по клику на темный фон
closeGroupsBtn.addEventListener('click', closeGroupsModal);
modalOverlay.addEventListener('click', closeGroupsModal);

// Бонус: Закрытие по кнопке Escape на клавиатуре
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && groupsModal.classList.contains('open')) {
        closeGroupsModal();
    }
});
// --- АВТО-ОТКРЫТИЕ МОДАЛКИ ПРИ ПЕРЕХОДЕ ПО ССЫЛКЕ ИЛИ КНОПКЕ «НАЗАД» ---

function checkHashAndOpenModal() {
    // Если в адресе страницы есть хэш #open-groups
    if (window.location.hash === '#open-groups') {
        const groupsModal = document.getElementById('groups-modal');
        if (groupsModal) {
            groupsModal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Замораживаем скролл
        }
    }
}

// Проверяем хэш на самом раннем этапе загрузки, чтобы избежать задержки и мерцания
document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
        checkHashAndOpenModal();
    }
});

// 2. Проверяем хэш, если пользователь жмет кнопку «Назад»/«Вперед» в самом браузере
window.addEventListener('hashchange', checkHashAndOpenModal);

// 3. Очищаем хэш в адресе при закрытии модалки, чтобы при обычном скролле он не висел
document.getElementById('close-groups-btn').addEventListener('click', () => {
    if (window.location.hash === '#open-groups') {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});
document.querySelector('#groups-modal .modal-overlay').addEventListener('click', () => {
    if (window.location.hash === '#open-groups') {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
});

// =========================================================================
// УПРАВЛЕНИЕ МОДАЛЬНЫМ ОКНОМ ПЛЕЙ-ОФФ
// =========================================================================

function openPlayoffModal() {
    const poModal = document.getElementById('playoff-modal');
    if (poModal) {
        poModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Замораживаем задний фон
    }
}

function closePlayoffModal() {
    const poModal = document.getElementById('playoff-modal');
    if (poModal) {
        poModal.classList.remove('active');
        document.body.style.overflow = ''; // Возвращаем скролл
    }
}

// Закрытие при клике мимо окна сетки
window.addEventListener('click', function(e) {
    const poModal = document.getElementById('playoff-modal');
    if (e.target === poModal) {
        closePlayoffModal();
    }
});

// Переменная для хранения текущего раунда
let currentPlayoffRound = '1/16';

// БРОНЕБОЙНАЯ ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ПО ИНДЕКСАМ
function switchPlayoffRound(buttonIndex, roundName) {
    currentPlayoffRound = roundName;
    
    // 1. Находим все 5 кнопок в меню
    const buttons = document.querySelectorAll('.po-tabs-menu .po-tab-btn');
    
    // 2. Без исключения у ВСЕХ кнопок стираем класс active
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 3. Точечно зажигаем кнопку по её порядковому номеру (индексу)
    if (buttons[buttonIndex]) {
        buttons[buttonIndex].classList.add('active');
    }

    // 4. Перерисовываем карточки матчей
    renderPlayoffMatches();
}

// Функция открытия модального окна плей-офф
function openPlayoffModal() {
    const poModal = document.getElementById('playoff-modal');
    if (poModal) {
        poModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // При старте жестко зажигаем нулевую кнопку (1/16)
        switchPlayoffRound(0, '1/16');
    }
}

// Функция рендеринга карточек плей-офф в стиле "Аналитика и тактика матчей"
function renderPlayoffMatches() {
    const renderContainer = document.getElementById('playoff-matches-render');
    if (!renderContainer) return;
    
    renderContainer.innerHTML = '';
    const currentMatches = playoffMatchesSchedule[currentPlayoffRound] || [];
    let lastDate = ''; 

    const actualWinners = getActualGroupWinners();

    currentMatches.forEach(match => {
        if (match.date !== lastDate) {
            lastDate = match.date;
            const dateHeader = document.createElement('div');
            dateHeader.className = 'po-date-header';
            dateHeader.innerHTML = `<h3>${match.date}</h3>`;
            renderContainer.appendChild(dateHeader);
        }

        // --- Модернизированная подготовка Команды 1 ---
        let t1Text = `<span class="po-team-label-text ${match.isFinalist1 ? 'gold-text' : ''}">${match.team1Text}</span>`;
        let t1CodeHtml = match.team1Code;
        let t1Key = match.team1Code;

        // --- Исправление для Команды 1 в модальном окне ---
        if (match.team1Code && match.team1Code !== "💥") {
        const codeClean = match.team1Code.toLowerCase().trim();
        // Если это код обычной страны (2 буквы) ИЛИ код Англии/Шотландии/Уэльса (начинается с gb-)
        if (codeClean.length === 2 || codeClean.startsWith('gb-')) {
        t1CodeHtml = `<span class="fi fi-${codeClean}" style="width: 100%; height: 100%; background-size: contain; background-position: center; background-repeat: no-repeat; display: block;"></span>`;
            }
        }

        // Жесткая привязка к ID матча, если в роли первой команды выступает 3-е место
        if (match.team1Text && match.team1Text.toLowerCase().includes("3-е место")) {
            if (match.id === 75) t1Key = "3_МЕСТО_ДЛЯ_1E";
            else if (match.id === 78) t1Key = "3_МЕСТО_ДЛЯ_1I";
            else if (match.id === 79) t1Key = "3_МЕСТО_ДЛЯ_1A";
            else if (match.id === 80) t1Key = "3_МЕСТО_ДЛЯ_1L";
            else if (match.id === 81) t1Key = "3_МЕСТО_ДЛЯ_1G";
            else if (match.id === 82) t1Key = "3_МЕСТО_ДЛЯ_1D";
            else if (match.id === 85) t1Key = "3_МЕСТО_ДЛЯ_1B";
            else if (match.id === 88) t1Key = "3_МЕСТО_ДЛЯ_1K";
        }

        if (t1Key && actualWinners[t1Key]) {
            const originG = actualWinners[t1Key].originGroup || "";
            const subLabel = match.team1Text.toLowerCase().includes("3-е место") 
                ? `${match.team1Text} ${originG ? '(Гр. ' + originG + ')' : ''}`
                : match.team1Text;

            t1Text = `
                <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.2;">
                    <span class="po-team-label-text ${match.isFinalist1 ? 'gold-text' : ''}" style="font-weight: 700;">${actualWinners[t1Key].name}</span>
                    <span style="font-size: 11px; color: #a0aec0; font-weight: 400; margin-top: 2px;">${subLabel}</span>
                </div>
            `;
            t1CodeHtml = `<span class="${actualWinners[t1Key].flag}" style="width: 100%; height: 100%; border-radius: 50%; background-size: cover; display: block;"></span>`;
        }

        // --- Модернизированная подготовка Команды 2 ---
        let t2Text = `<span class="po-team-label-text ${match.isFinalist2 ? 'gold-text' : ''}">${match.team2Text}</span>`;
        let t2CodeHtml = match.team2Code;
        let t2Key = match.team2Code;

        // --- Исправление для Команды 2 в модальном окне ---
        if (match.team2Code && match.team2Code !== "💥") {
        const codeClean = match.team2Code.toLowerCase().trim();
        if (codeClean.length === 2 || codeClean.startsWith('gb-')) {
        t2CodeHtml = `<span class="fi fi-${codeClean}" style="width: 100%; height: 100%; background-size: contain; background-position: center; background-repeat: no-repeat; display: block;"></span>`;
            }
        }

        // Жесткая привязка к ID матча, если в роли второй команды выступает 3-е место
        if (match.team2Text && match.team2Text.toLowerCase().includes("3-е место")) {
            if (match.id === 75) t2Key = "3_МЕСТО_ДЛЯ_1E";
            else if (match.id === 78) t2Key = "3_МЕСТО_ДЛЯ_1I";
            else if (match.id === 79) t2Key = "3_МЕСТО_ДЛЯ_1A";
            else if (match.id === 80) t2Key = "3_МЕСТО_ДЛЯ_1L";
            else if (match.id === 81) t2Key = "3_МЕСТО_ДЛЯ_1G";
            else if (match.id === 82) t2Key = "3_МЕСТО_ДЛЯ_1D";
            else if (match.id === 85) t2Key = "3_МЕСТО_ДЛЯ_1B";
            else if (match.id === 88) t2Key = "3_МЕСТО_ДЛЯ_1K";
        }

        if (t2Key && actualWinners[t2Key]) {
            const originG = actualWinners[t2Key].originGroup || "";
            const subLabel = match.team2Text.toLowerCase().includes("3-е место") 
                ? `${match.team2Text} ${originG ? '(Гр. ' + originG + ')' : ''}`
                : match.team2Text;

            t2Text = `
                <div style="display: flex; flex-direction: column; align-items: flex-end; line-height: 1.2; text-align: right;">
                    <span class="po-team-label-text ${match.isFinalist2 ? 'gold-text' : ''}" style="font-weight: 700;">${actualWinners[t2Key].name}</span>
                    <span style="font-size: 11px; color: #a0aec0; font-weight: 400; margin-top: 2px;">${subLabel}</span>
                </div>
            `;
            t2CodeHtml = `<span class="${actualWinners[t2Key].flag}" style="width: 100%; height: 100%; border-radius: 50%; background-size: cover; display: block;"></span>`;
        }

        const stadiumParts = match.stadium.split(' • ');
        const cityName = stadiumParts[0] || '';
        const stadiumName = stadiumParts[1] || '';

        const matchCard = document.createElement('div');
        matchCard.className = match.isGrandFinal ? 'analytics-match-card po-grand-final' : 'analytics-match-card';

        const finalT1Name = actualWinners[t1Key] ? actualWinners[t1Key].name : match.team1Text;
        const finalT2Name = actualWinners[t2Key] ? actualWinners[t2Key].name : match.team2Text;

        let vsDisplay = "vs"; // По умолчанию

        // Вручную вносите сюда результаты по ID матчей:
        if (match.id === 73) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">0 : 1</span>';
        if (match.id === 74) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 1</span>';
        if (match.id === 75) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 1 <br> пен. 3:4</span>';
        if (match.id === 76) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 1 <br> пен. 2:3</span>';
        if (match.id === 77) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 2</span>';
        if (match.id === 78) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">3 : 0</span>';
        if (match.id === 79) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 0</span>';
        if (match.id === 80) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 1</span>';
        if (match.id === 81) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 2 <br> после д.в. 3:2</span>';
        if (match.id === 82) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 0</span>';
        if (match.id === 83) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">3 : 0</span>';
        if (match.id === 84) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 1</span>';
        if (match.id === 85) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 0</span>';
        if (match.id === 86) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 1 <br> пен. 2:4</span>';
        if (match.id === 87) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 1 <br> после д.в. 3:2</span>';
        if (match.id === 88) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 0</span>';
        if (match.id === 89) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">0 : 3</span>';
        if (match.id === 90) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">0 : 1</span>';
        if (match.id === 91) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">1 : 2</span>';
        if (match.id === 92) vsDisplay = '<span style="font-size: 18px; color: #00ffcc; font-weight: 800; letter-spacing: 1px;">2 : 3</span>';
       
       

        matchCard.innerHTML = `
            <div class="amc-header">
                <span class="amc-stage-badge">${currentPlayoffRound}</span>
                <span class="amc-time-badge">${match.time}</span>
                <span class="amc-location">📍 ${cityName}</span>
            </div>
            
            <div class="amc-teams-layout">
                <div class="amc-team-row">
                    <div class="po-badge-circle" style="display: flex; align-items: center; justify-content: center; overflow: hidden; background: #1a202c;">${t1CodeHtml}</div>
                    ${t1Text}
                </div>
                
                <div class="amc-vs" style="min-width: 60px; text-align: center; display: flex; align-items: center; justify-content: center;">
                    ${vsDisplay}
                </div>
                
                <div class="amc-team-row amc-right-align">
                    ${t2Text}
                    <div class="po-badge-circle" style="display: flex; align-items: center; justify-content: center; overflow: hidden; background: #1a202c;">${t2CodeHtml}</div>
                </div>
            </div>

            <div class="amc-stadium-subtext">${stadiumName}</div>

            <div class="amc-probability-block">
                <div class="amc-prob-labels">
                    <span class="lbl-p1">П1 ${match.prob1}%</span>
                    <span class="lbl-px">Н ${match.probX}%</span>
                    <span class="lbl-p2">П2 ${match.prob2}%</span>
                </div>
                <div class="amc-prob-bar">
                    <div class="amc-bar-seg seg-p1" style="width: ${match.prob1}%;"></div>
                    <div class="amc-bar-seg seg-px" style="width: ${match.probX}%;"></div>
                    <div class="amc-bar-seg seg-p2" style="width: ${match.prob2}%;"></div>
                </div>
            </div>

           <div class="amc-actions">
                <button class="amc-analysis-btn" onclick="openAnalysisModal(${match.id}, '${finalT1Name.replace(/'/g, "\\'")}', '${finalT2Name.replace(/'/g, "\\'")}')">
                    Полный анализ матча
                </button>
                <span class="amc-number-tag">МАТЧ ${match.id}</span>
            </div>
        `;
        renderContainer.appendChild(matchCard);
    });
}


// База данных с номерами матчей и точными текстовыми описаниями слотов
const playoffMatchesSchedule = {
    '1/16': [
        { id: 73, date: "Воскресенье, 28 июня", time: "22:00", stadium: "Лос-Анджелес • Соу-Фай", team1Code: "2A", team1Text: "2-е место Группы A", team2Code: "2B", team2Text: "2-е место Группы B", prob1: 23, probX: 29, prob2: 48, analysisText:
             `Исторический поединок в Лос-Анджелесе. Обе сборные впервые в своей истории пробились в плей-офф чемпионатов мира. Яркая, атакующая Канада Джесси Марша попытается взломать прагматичный африканский «автобус» Уго Брооса.

            ## 1) Общая аналитика

            ## 1. Общая картина
            - **Стадия турнира:** 1/16 финала ЧМ-2026 (первый раунд плей-офф). Матч на вылет — при ничьей в основное время нас ждут экстра-таймы и серия пенальти.
            - **Поле и стадион:** «Лос-Анджелес Стэдиум» (США). Нейтральное поле для ЮАР, но для Канады это практически домашний континент — поддержка трибун будет тотально на стороне североамериканцев.
            - **Климат:** Сухой, теплый калифорнийский климат (около **+23°C...+25°C** на момент игры), комфортный для обеих сборных. Климатическое влияние минимально.
            - **Кто фаворит:** По оценкам суперкомпьютеров (Opta дает Канаде **66%** на проход) и котировкам букмекеров — Канада.
            - **Опыт на ЧМ:** Исторический момент для обеих стран — они впервые преодолели групповой барьер мундиалей.

            ## 2. Рейтинг команд и футболистов
            - **Рейтинг ФИФА:** Канада находится ощутимо выше (в районе топ-30), имея в ростере звезд из европейских топ-лиг. ЮАР (Bafana Bafana) располагается в районе 60-й строчки.
            - **Класс игроков:** Костяк ЮАР собран из сыгранных игроков местного чемпионата (в основном базовый клуб сборной — «Мамелоди Сандаунз»). У канадцев обойму определяют высококлассные легионеры с опытом игры на максимальных скоростях.

            ## 3. Текущая форма на турнире (Групповой этап)
            - **ЮАР (Л-Н-В):** Тяжело вкатывались в турнир. Проиграли Мексике (**0:2**), вырвали ничью у Чехии (**1:1**) благодаря пенальти и сотворили сенсацию, обыграв Южную Корею (**1:0**) в решающем матче. Команда крайне прагматична, «сушит» игру и берет строгой организованностью.
            - **Канада (Н-В-Л):** Стартовали с боевой ничьей против Боснии (**1:1**), затем уничтожили Катар (**6:0**) с хет-триком Дэвида, но в последнем туре уступили крепкой Швейцарии (**1:2**). Показывают яркий футбол с высоким темпом.

            ## 4. Основная статистика
            - **ЮАР:** Забито всего **2 гола** в 3 матчах (0.66 за игру), пропущено 3. Оба мяча на турнире записал на свой счет вингер Тапело Масеко.
            - **Канада:** Забито **8 голов** (2.66 за игру, во многом за счет разгрома Катара), пропущено 3. Легко забивают, когда ловят кураж.

            ## 5. Дополнительная статистика (Тренды)
            - **Угловые:** Канада активно использует фланги (в среднем **5.5** угловых за матч). ЮАР обороняется низким блоком, позволяя оппонентам подавать много корнеров у своих ворот.
            - **Контроль мяча:** Прогнозируется перекос в сторону Канады (**55-58%** против **42-45%** у ЮАР), которая заберет территорию.
            - **Желтые карточки:** У ЮАР показатель выше, так как команда вынуждена часто фолить в переходных фазах при срыве быстрых атак.

            ## 6. Очные встречи
            В официальных матчах на таком уровне не пересекались. Был лишь один товарищеский поединок в далеком 2007 году (ЮАР победила 2:0), который не имеет никакого турнирного значения сегодня. Исторический срез отсутствует.

            ## 7. Тактика, стиль и проблемы
            - **ЮАР:** Уго Броос использует схему 4-3-3, трансформирующуюся в глухие 4-5-1 при обороне. **Фишка** — идеальная сыгранность оборонительного блока из «Мамелоди». **Проблема** — катастрофически тяжело дается позиционное созидание.
            - **Канада:** Джесси Марш ставит вертикальный, энергозатратный футбол и сверхагрессивный прессинг. **Фишка** — сумасшедшая скорость на флангах. **Проблема** — оголение зон сзади при потере мяча: если прессинг разбивают, защита проваливается в ситуациях 1 в 1.

            ## 8. Составы, травмы и дисквалификации
            - **ЮАР:** Главная потеря — опытнейший Темба Зване (отбывает дисквалификацию). Зато в центр поля возвращается ключевой хавбек Тебохо Мокоена. На острие вместо Макгопа выйдет более резкий Райнерс для контратак. В воротах — лидер и капитан Ронвен Уильямс.
            - **Канада:** Состав полностью оптимальный, травмированных лидеров нет. Главная ударная сила (Дэвид, Ларин) готовы с первых минут.

            ## 9. Статистика отдельных игроков
            - **Ронвен Уильямс (Вратарь, ЮАР):** Совершил **6 ключевых сейвов** в последних двух турах, поймав кураж. Признанный мастер по отражению пенальти.
            - **Джонатан Дэвид (Канада):** Один из лидеров бомбардирской гонки ЧМ, обладает высочайшей конверсией моментов.

            ## 10. Настрой и важность матча
            Ставки максимальны — это плей-офф. ЮАР уже прыгнула выше головы, они раскрепощены, но будут действовать максимально осторожно. На Канаду (как на сохозяев) жестко давит пресса, вылет от андердога станет провалом. Первый гол определит всё: если забьет Канада — ЮАР придется раскрываться; если забьют африканцы — они закроются в «автобус», который канадцы рискуют не вскрыть.

            ## 11. Тренерский фактор
            Уго Броос (ЮАР) — глыба африканского футбола, бравший Кубок Африки с Камеруном. Великолепно выжимает максимум в матчах на вылет. Джесси Марш (Канада) проповедует системный футбол школы Red Bull, менее опытен в плей-офф сборных, но имеет более классный ресурс.

            ## 12. Мнение аналитиков и букмекеров
            Букмекеры выставляют Канаду явным фаворитом. Коэффициенты на основное время:
            - Победа Канады (П1): **1.65 – 1.75**
            - Ничья (Х): **3.60**
            - Победа ЮАР (П2): **5.00 – 5.50**

            ## 2) Футбольные метрики

            - **Атакующие метрики (xG/xA/xGOT):** Канада за групповой этап накопила около **5.8 xG** (с учетом пенальти и Катара). ЮАР — скромные **2.1 xG** за три матча. По качеству создаваемых моментов канадцы превосходят соперника почти в 3 раза. У Канады xA распределен между флангами (Дэвис, Бьюкенен), создающими изоляции. У ЮАР xA критически низок — большинство пасов идет поперек или назад. Джонатан Дэвид реализует моменты выше графика xG, у ЮАР же гол Корее был забит едва ли не с единственного чистого попадания в створ (проблемы с точным завершением).
            - **Продвижение мяча:** Канада входит в топ-10 турнира. Альфонсо Дэвис обеспечивает колоссальное продвижение на рывках. ЮАР продвигает мяч медленно, через короткий пас на своей половине, избегая риска вертикальных передач. Наклон поля (Field Tilt) в матчах ЮАР был против них (около **40% на 60%**). У Канады наклон был доминирующим (до **65%**). Ожидается затяжное нахождение Канады на трети поля соперника. Точность паса ЮАР на своей половине высокая (**86%**), но падает до **62%** на чужой.
            - **Защита и прессинг:** Канада буквально душит соперников контрпрессингом (**PPDA ~ 8.5–9.2**), высоко накрывая ЮАР. ЮАР прессингует избирательно (**PPDA ~ 14.5**), предпочитая встречать в средней зоне. Защитники ЮАР при этом великолепны в подборах в штрафной площади при навесах.
            - **Комплексные модели:** Тепловая карта Канады плотно завязана на полуфлангах и чужой штрафной. Тепловая карта ЮАР — монолитное красное пятно в опорной зоне и прямо перед своей штрафной. Это позиционная стена.

            ## 3) Расчет матча методом Пуассона
            Для расчета взята очищенная атакующая сила команд (без учета аномального разгрома Катара у Канады и с корректировкой оборонительных показателей ЮАР)
            - Математическое ожидание голов Канады ( 1.45$)
            - Математическое ожидание голов ЮАР ( 0.65$)

            ## Матрица наиболее вероятных точных счетов
            Счет | Расчетная вероятность
            --- | ---
            1:0 в пользу Канады | **~16.5%**
            0:0 ничья | **~12.3%**
            2:0 в пользу Канады | **~12.0%**
            1:1 ничья | **~11.5%**
            0:1 в пользу ЮАР | **~7.5%**

            - Общая вероятность победы Канады в основное время: **56%**
            - Общая вероятность ничьей (уход в доп. время): **25%**
            - Общая вероятность победы ЮАР в основное время: **19%**

            ## 4) Поиск в линии VALUE (Честной ставки)
            Букмекеры дают на победу Канады в основное время около 1.70 (58% вероятности). Метод Пуассона дает 56%. Значит, чистая победа Канады не имеет валуйности — кэф занижен из-за статуса сохозяев.
            - **Где сидит реальный Value?** Букмекеры жестко переоценивают верховой матч (ТБ 2.5), ориентируясь на канадские 6:0 на групповом этапе. Но ЮАР закрылась против Кореи и Чехии. Честная вероятность Тотала Меньше 2.5 составляет около **63%** (честный кэф должен быть 1.58), в то время как конторы дают на ТМ 2.5 шикарные **1.80 – 1.85**. Это чистый валуй.

            ## 5) Анализ общей информации
            Матч на вылет полностью изменит характер игры Канады — они не побегут вперед сломя голову, помня о контратаках Масеко и пропущенных голах от Швейцарии. ЮАР без Зване окончательно потеряла креатив в центре, поэтому их единственный шанс — дотянуть до серии пенальти, где Уильямс является признанным королем. Канада будет владеть мячом 60%+ времени, методично расшатывая оборону «Мамелоди». Матч обещает быть вязким, низовым и нервным.

            ## 6) Лучшие ставки на матч
            - **Основной выбор (VALUE):** Тотал Меньше (2.5) голов за коэффициент **~1.82**. (Стадия плей-офф, отсутствие Зване у ЮАР, прагматизм Уго Брооса и завышенный букмекерами тотал из-за былых успехов Канады против слабых азиатских команд. ЮАР костьми ляжет у своих ворот).
            - **Дополнительный выбор (Value):** ЮАР с форой (+1) за коэффициент **~1.75**. (Пуассон показывает высокую вероятность минимальной победы Канады в 1 мяч или ничьей в основное время — суммарно около 40%. Разгрома здесь быть не должно. В случае поражения ЮАР ровно в один мяч — будет возврат).
            - **Смелый выбор (Для ординара):** Ничья в первом тайме за коэффициент **~2.15**. (В первом тайме матча на вылет обе команды будут прощупывать друг друга. ЮАР выйдет со свежими силами и высокой концентрацией, взломать их структуру в первые 45 минут — задача со звездочкой).`
         },
        { id: 74, date: "Понедельник, 29 июня", time: "20:00", stadium: "Хьюстон • НРГ Стадиум", team1Code: "1C", team1Text: "Победитель Группы C", team2Code: "2F", team2Text: "2-е место Группы F", prob1: 61, probX: 24, prob2: 15, analysisText:
            `## 1. Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Стадия и статус:** 1/16 финала (Раунд 32) Чемпионата мира 2026 года. Бескомпромиссный поединок на вылет. В случае ничейного исхода в основное время регламентом предусмотрены два экстра-тайма по 15 минут и последующая серия послематчевых пенальти.
            * **Локация и стадион:** «Хьюстон Стэдиум» (Lincoln Financial Field / NRG Stadium), Хьюстон, Техас, США. Матч пройдет на полностью закрытой арене со сдвижной роботизированной крышей. Это целиком нивелирует жесткие внешние климатические факторы (высокую субтропическую влажность Хьюстона) и гарантирует идеальные, стабильные **+22°C** внутри чаши.
            * **Статусный бэкграунд:** Бразилия — 5-кратные чемпионы мира, традиционный и безальтернативный фаворит любого международного форума. Япония — опытнейший и ментально устойчивый кубковый боец, регулярно преодолевающий групповые стадии и закрепивший за собой статус главного мирового «гигантоубийцы» последних лет. Букмекеры отдают весомое предпочтение южноамериканцам: коэффициент на итоговый проход «Селесао» составляет около **1.45** против **2.75** на «Синих самураев».

            ### 2. Рейтинги и рыночная стоимость
            * **Табель о рангах FIFA:** Бразилия стабильно удерживает позиции в Топ-5 мирового рейтинга; Япония уверенно возглавляет азиатский регион, входя в Топ-15 сильнейших сборных планеты.
            * **Кадровый потенциал:** Бразилия обладает колоссальным и неоспоримым перевесом в аспекте индивидуального класса и медийного статуса исполнителей (Винисиус Жуниор, Родриго, Бруно Гимарайнс — мировые суперзвезды первой величины). У Японии ростер более ровный по именам, но при этом высококлассный и сыгранный, состоящий преимущественно из лидеров крепких европейских клубов (Такефуса Кубо, Даити Камада, Такехиро Томиясу, Такуми Минамино).

            ### 3. Текущая игровая форма на ЧМ-2026
            * ** Бразилия:** Уверенно квалифицировалась в плей-офф с 1-го места из Группы C, набрав 7 очков. Пентакампеоны стартовали со сложной, вязкой ничьей против Марокко (1:1), однако затем набрали мощный крейсерский ход, поочередно разгромив Гаити (3:0) и Шотландию (3:0). Суммарная разница мячей: 7 забито, 1 пропущен.
            * ** Япония:** Вышла в knockout-раунд со 2-й строчки Группы F, аккумулировав 5 баллов. Азиатский коллектив продемонстрировал несгибаемый характер, дважды отыгравшись по ходу встречи против Нидерландов (2:2), хладнокровно уничтожил Тунис (4:0) и засушил прагматичную ничью со Швецией (1:1). Разница мячей: 7 забито, 3 пропущено.

            ### 4. Основная статистика группового этапа
            * **Бразилия:** 2 победы, 1 ничья. Средняя атакующая результативность — 2.33 гола за игру. Оборонительная линия под руководством Анчелотти выглядит монументально, удерживая серию из 2 «сухих» матчей подряд.
            * **Япония:** 1 победа, 2 ничьи. Средняя результативность абсолютно идентична — 2.33 забитых мяча за встречу. Нападение функционирует стабильно (отличались во всех сыгранных турах), однако оборонительный блок допускал системные сбои против организованного давления европейских команд.

            ### 5. Дополнительная статистика и микротренды
            * **Территориальный контроль:** Бразилия — 62% владения, Япония — 46%. Японцы сознательно и безболезненно отдают инициативу топ-сборным, уповая на пространство.
            * **Интенсивность ударов (в створ):** Бразилия наносит в среднем 16.5 ударов (6.3 точных) за матч; Япония отвечает показателями в 11.2 ударов (4.8 в створ).
            * **Стандарты (Угловые):** Бразильцы тотально доминируют на флангах, подавая в среднем 6.5 корнеров за игру. Япония делает ставку на быстрый короткий розыгрыш — 4.2 за встречу.
            * **Дисциплина и прессинг:** Япония традиционно действует подчеркнуто аккуратно и дисциплинированно (в среднем 1.1 желтых карточек за игру). Бразилия играет значительно агрессивнее в фазе контрпрессинга, получая около 2.0 ЖК за матч.

            ### 6. История очных встреч (Head-to-Head)
            Историческое и статистическое доминирование в этой паре всегда оставалось за Бразилией (включая уверенные 4:1 на ЧМ-2006). Однако последний очный поединок, состоявшийся осенью 2025 года в рамках товарищеского окна, завершился сенсационной и сверхрезультативной победой Японии со счетом 3:2. Ментальный и психологический барьер «Самураев» перед желто-зелеными полностью снят.

            ### 7. Тактико-стратегический рисунок
            * **Бразилия (Карло Анчелотти):** Гибкая и атакующая модель 4-3-3. Ключевая ставка делается на создание численных изоляций для Винисиуса на левом фланге и умное заполнение свободных зон Матеусом Куньей. Команда использует сверхинтенсивный прессинг и мгновенный возврат мяча при потерях. Главная уязвимость — свободные зоны за спинами высоко поднимающихся латералей.
            * **Япония (Хадзимэ Мориясу):** Трансформирующиеся схемы 3-4-2-1 или 4-2-3-1. Стиль команды напоминает сжатую «пружину». Организован идеальный, вертикальный переход из обороны в атаку через диспетчерские навыки Камады и дриблинг Кубо. Предлагают сопернику высочайший темп на полуфлангах. Проблема — позиционная защита при затяжных фланговых навесах.

            ### 8. Кадровый статус и ориентировочные составы
            * **Бразилия:** К knockout-раунду южноамериканцы подходят в оптимальном сочетании. Сыгранное трио в полузащите Пакета — Каземиро — Гимарайнс наглухо цементирует центр поля. На острие атаки ярко зажегся Матеус Кунья. Неймар находится вне обоймы из-за кондиций, однако Винисиус полностью и безболезненно взял на себя функции единоличного лидера.
            * **Япония:** Профильный защитник Такехиро Томиясу полностью готов руководить оборонительной линией. В полузащите рабочий треугольник Танака — Сано — Камада находится в идеальном тонусе. Нападающий Аясе Уэда прочно закрепил за собой позицию стартовой «девятки». Потерь из-за дисквалификаций нет.

            ### 9. Индивидуальный перформанс лидеров
            * **Винисиус Жуниор (Бразилия):** Главный фаворит в борьбе за «Золотой Мяч». На текущем Мундиале вингер уже оформил 4 забитых мяча в 3 встречах. Форма феноменальная.
            * **Матеус Кунья (Бразилия):** Отличился 3 голами в последних двух играх группового этапа, находясь на пике своей игровой эффективности.
            * **Даити Камада / Аясе Уэда (Япония):** Оба футболиста имеют по 2 забитых мяча на турнире, являясь ключевыми и незаменимыми элементами атакующей структуры Мориясу.

            ### 10. Мотивационный вектор
            Это полноценный матч жизни для обеих национальных команд. Для Бразилии вылет на столь ранней стадии 1/16 финала — грандиозная национальная катастрофа. Для Японии — исторический шанс переписать историю футбола. Мотивация запредельная, при этом цена малейшей ошибки возрастает кратно, что обычно вынуждает фаворитов действовать строже и прагматичнее во второй половине матча.

            ### 11. Тренерский factor
            * **Карло Анчелотти (Бразилия):** Абсолютный король кубковых противостояний и Лиги Чемпионов. Его фундаментальные качества — ледяное хладнокровие, идеальный тактический баланс и умение ювелирно управлять эго звездных футболистов. Сборную контролирует безупречно.
            * **Хадзимэ Мориясу (Япония):** Работает с национальной командой уже второй полноценный цикл. Досконально знает возможности каждого игрока, является тактическим гиком, способным безболезненно перестроить схему 3 раза за один тайм под конкретный отрезок матча.

            ### 12. Аналитический консенсус рынка
            Большинство профильных экспертов сходится во мнении, что Бразилия преодолеет данный раунд за счет колоссального индивидуального класса. Однако капперы четко отмечают устойчивый тренд: Япония забивает топ-сборным практически всегда. Самый популярный и заигранный исход в спортивной прессе — «Обе забьют — Да».

            ### 13. Психологический контекст и свежие новости
            Жесткое давление со стороны бразильской прессы после стартовой ничьей с Марокко заставило «Селесао» максимально мобилизовать внутренние ресурсы. В Японии же наблюдается колоссальный футбольный бум после победы над бразильцами в 2025 году, ожидания болельщиков находятся на историческом максимуме.

            ### 14. Судейский фактор
            Общая тенденция арбитража на ЧМ-2026: рефери дают бороться и сохранять динамику, однако жестко и бескомпромиссно карают предупреждениями за срыв перспективных атак. В кубковом матче против стремительно контратакующей Японии бразильские опорные хавбеки серьезно рискуют «сесть» на желтые карточки в случае тактических обрезов.


            ## 2. Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе ЧМ-2026. Для удобства чтения на смартфонах параметры разбиты на списки.*

            * **xG (Expected Goals / Ожидаемые голы):**
            * Бразилия: **2.41**
            * Япония: **1.65**
            * *Вывод модели:* Бразилия создает значительно больше чистых моментов; Япония берет свое за счет аномально высокой конверсии.
            * **xA (Expected Assists / Ожидаемые ассисты):**
            * Бразилия: **1.85**
            * Япония: **1.20**
            * *Вывод модели:* Креатив Бразилии идет через тонкие передачи по центру; у Японии — через быстрые фланговые прострелы.
            * **xGOT (Качество ударов в створ):**
            * Бразилия: **2.60**
            * Япония: **1.88**
            * *Вывод модели:* Винисиус и Кунья бьют из убойных зон точно в углы. Голкиперу Японии Сузуки будет чрезвычайно тяжело.
            * **Field Tilt (Наклон поля / Доля владения в финальной трети):**
            * Бразилия: **66%**
            * Япония: **41%**
            * *Вывод модели:* Бразилия наглухо зажмет Японию на их трети поля. Японцы тактически и ментально согласны на такой сценарий.
            * **Progressive Passes (Продвигающие передачи за матч):**
            * Бразилия: **48**
            * Япония: **29**
            * *Вывод модели:* Бразилия продвигает мяч через сложную позиционную структуру; Япония — за счет вертикальных рывков (Progressive Runs).
            * **PPDA (Интенсивность прессинга):**
            * Бразилия: **8.4**
            * Япония: **12.5**
            * *Вывод модели:* Бразилия душит соперника сразу в момент потери. Япония предпочитает встречать плотным средним блоком.
            * **Successful Pressures % (Успешность давления):**
            * Бразилия: **38%**
            * Япония: **31%**
            * *Вывод модели:* Контрпрессинг Карло Анчелотти на данном этапе функционирует заметно эффективнее.


            ## 3. Расчёт матча методом Пуассона

            Для математического расчета атакующего и защитного потенциала взяты чистые результаты групповой стадии ЧМ-2026 с применением поправочного коэффициента силы соперников.

            * **Бразилия:** Атакующий потенциал = **1.42**, Защитный потенциал = **0.45**
            * **Япония:** Атакующий потенциал = **1.15**, Защитный потенциал = **1.10**

            **Расчет ожидаемого количества голов (среднее значение):**
            Бразилия = 1.42  
            Япония= 1.15 

            Применив формулу распределения Пуассона для основного времени матча, получаем следующие математические вероятности исходов

            * **Суммарная вероятность победы Бразилии:** **63.5%**
            * **Суммарная вероятность ничейного исхода:** **21.8%**
            * **Суммарная вероятность победы Японии:** **14.7%**
            * **Наиболее вероятные варианты точного счета:** 1:0 (вероятность **24.1%**), 2:0 (**18.8%**), 1:1 (**12.5%**).


            ## 4. Поиск валуйных позиций (VALUE) в букмекерской линии

            Текущая европейская букмекерская линия на основной исход (1X2) распределилась следующим образом: П1 — **1.48**, Х — **4.30**, П2 — **7.00**. 
            Линия на популярный маркет «Обе забьют»: ДА — **1.95**, НЕТ — **1.85**.

            ### Анализ валуйности:
            Чистый метод Пуассона определяет вероятность гола сборной Японии в основном времени скромным показателем в районе ~40% ($\lambda = 0.52$). Однако голая математика Пуассона физически не способна учесть специфический фактор кубкового камбэка и уникальный кадровый стиль Японии (которая стабильно забивала Нидерландам и Швеции, генерируя моменты буквально из ничего). 

            В реалиях жесткого плей-офф, если Бразилия поведет в счете (1:0 или 2:0), она предсказуемо начнет экономить физические ресурсы в излюбленном стиле Анчелотти. В этот момент Япония гарантированно пойдет ва-банк, полностью раскрывая игру на встречных курсах.

            > **Вывод модели:** Честный, очищенный коэффициент на маркет **«Обе забьют — Да»** с учетом кубкового статуса поединка и недавней очной встречи (3:2 в пользу Японии в 2025 году) должен находиться в районе **1.75**. Букмекер же предлагает щедрые **1.95**. Это чистый, хрестоматийный **VALUE BET** для долгосрочной дистанции.


            ## 5. Итоговое аналитическое заключение

            Бразилия по всем ключевым продвинутым метрикам (xG, интенсивность прессинга, индивидуальный класс исполнителей) существенно превосходит Японию. Сценарий стартового отрезка матча очевиден: «Селесао» заберут мяч под тотальный контроль ($60\%+$), включат агрессивный высокий прессинг (PPDA 8.4) и попытаются оформить быстрый гол усилиями реактивного Винисиуса.

            Однако Япония — это стилистический кошмар для любого мирового фаворита, склонного заигрываться в позиционной атаке. Азиатская сборная идеально переносит затяжное давление. Тот факт, что это бескомпромиссный матч на вылет, заставит Японию до последнего дисциплинированно сидеть в глубоком блоке, выманивая бразильцев на свою половину поля. Как только Бразилия снизит интенсивность прессинга (ближе к 60-й минуте), игра неизбежно раскроется в обе стороны.


            ## 6. Лучшие варианты для ставок на матч

            Опираясь на глубокий тактический анализ, продвинутые метрики и контекст стадии 1/16 финала, наиболее перспективными являются три следующих выбора:

            * **🎯 Основной выбор (Value): Маркет «Обе забьют — Да» за коэффициент ~1.95.**
            Бразилия имеет феноменальный показатель xG (2.41) — уйти с поля без забитого мяча они объективно не могут. Япония же отличается поразительной стабильностью в матчах против грандов и уже наказывала оборону «Селесао» тремя голами в недавней личке. Кубковый плей-офф заставит проигрывающую сторону бросить в атаку абсолютно все ресурсы.
            * **🎯 Консервативный выбор: Комбинированный маркет: Проход Бразилии + Тотал матча Больше 1.5 голов за коэффициент ~1.65.**
            Колоссальный класс скамейки запасных и кубковый гений Карло Анчелотти обязаны брать свое. Даже если основное время завершится боевой ничьей (например, 1:1), на дистанции 120 минут колоссальная глубина состава бразильцев решит исход встречи в их пользу.
            * **🎯 Статистический тренд: Индивидуальный Тотал угловых Бразилии Больше 5.5 за коэффициент ~1.80.**
            При прогнозном показателе Field Tilt в 66% и затяжных позиционных атаках через фланговые зоны Винисиуса и Родриго, бразильцы без труда пробьют данный численный тотал против низкого оборонительного блока Японии.`
         },
        
        { id: 75, date: "Понедельник, 29 июня", time: "23:30", stadium: "Бостон • Джиллетт Ст.", team1Code: "1E", team1Text: "Победитель Группы E", team2Code: "3A+", team2Text: "3-е место ABCDF", prob1: 69, probX: 20, prob2: 11, analysisText:
            `Стартовый поединок стадии плей-офф (Round of 32), где малейшая тактическая ошибка приводит к немедленному вылету с турнира. Безоговорочный фаворит в лице Бундестим, получивший болезненный щелчок по носу в финальном туре группового этапа, сталкивается с классической оборонительной стеной из Южной Америки. В Бостоне нас ждет классическое противостояние атакующего доминирования и циничного прагматизма.

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Матч по счету:** 1/16 финала (Round of 32) — первый раунд игр на вылет.
            - **Поле и стадион:** США, Бостон, стадион «Бостон Стэдиум» (Gillette Stadium / Foxborough). Великолепный натуральный газон.
            - **Климат:** Конец июня в Массачусетсе радует умеренно теплой и комфортной погодой. Экстремальной жары или удушающей влажности не прогнозируется, что позволит европейской сборной поддерживать фирменную интенсивность движений.
            - **Фаворит:** Германия. Очевидный исторический, статусный и котировочный фаворит у всех мировых букмекеров.
            - **Опыт в чемпионатах:** Германия — 4-кратный чемпион мира и традиционный завсегдатай глубоких кубковых стадий. Парагвай («Альбироха») — ментально крепкий и неуступчивый боец из зоны КОНМЕБОЛ, но их историческим пиком на мундиалях остается лишь четвертьфинал в 2010 году.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Германия стабильно удерживает позиции в топ-15 лучших сборных планеты. Парагвай располагается значительно ниже (ближе к топ-40/50), но имеет репутацию одного из самых кусачих андердогов Южной Америки.
            - **Рейтинг игроков:** По суммарной трансферной стоимости ростера и клубному представительству (Мусиала, Виртц, Киммих, Рюдигер) Германия превосходит оппонента на несколько порядков. У Парагвая выделяются исключительно лидеры из АПЛ — Мигель Альмирон и Хулио Энсисо.

            ### 3. Текущая форма на турнире
            - **Германия:** В Группе E набрали 6 очков (2 победы, 1 поражение). Стартовали сверхуверенно, уничтожив Кюрасао (7:1), затем прагматично переиграли Кот-д’Ивуар (2:1), но в третьем туре сенсационно уступили Эквадору (1:2). Атака Бундестим в полном порядке, но в обороне вскрылись системные проблемы.
            - **Парагвай:** Пробились в плей-офф с 3-го места в Группе D, набрав 4 очка. Получив болезненный разгром от США (1:4) в стартовой игре, Густаво Альфаро мгновенно перестроил ряды: парагвайцы минимально одолели Турцию (1:0) и наглухо засушили Австралию (0:0). 

            ### 4. Форма и основная статистика
            - **Германия:** Забили 10 голов за 3 матча группового раунда (в среднем сумасшедшие **3.33 гола** за игру), пропустив при этом 4 мяча.
            - **Парагвай:** Отличились всего 2 раза, пропустив 4 гола (3 из которых пришлись на матч против США). Команда имеет действующую серию из двух «сухих» поединков подряд.

            ### 5. Дополнительная статистика (Тренды)
            - **Владение мячом:** Германия будет тотально доминировать на поле (**62%–67%**). Парагвай абсолютно осознанно откажется от мяча (**33%–38%**) и выстроит глубокий низкий блок.
            - **Удары и угловые:** Немцы наносят в среднем **16+** ударов по чужим воротам за матч. Парагвайцы практически не бьют с дальних дистанций, уповая на редкие, но акцентированные стандарты и вертикальные контратаки.

            ### 6. Очные встречи
            - Исторически очные матчи этих соперников всегда носят упорный и вязкий характер. Самый известный прецедент на ЧМ — это 1/8 финала в 2002 году, когда прагматичная Германия вырвала путевку дальше лишь на 88-й минуте благодаря голу Оливера Нойвилля (1:0). Парагвай исторически умеет вязать Бундестим по рукам и ногам.

            ### 7. Тактика и стиль
            - **Германия (4-2-3-1 / 4-3-3):** Тотальное позиционное давление. Активное насыщение полуфлангов и зон между линиями через гениальные перемещения Виртца и Мусиалы. В роли наконечника используется ложная девятка (Хавертц) или классический страйкер (Ундав). Главная уязвимость — свободные зоны за спинами защитников при высокой линии обороны.
            - **Парагвай (4-5-1 / 4-4-2):** Узкий, монолитный оборонительный «автобус» под руководством маэстро защиты Густаво Альфаро. Главная задача — лишить немцев пространства в финальной трети. Переход в атаку — исключительно длинные забросы на Авалоса или реактивные сольные рывки Энсисо и Альмирона.

            ### 8. Составы, травмы и звезды
            - **Германия:** В шикарной форме находится центрфорвард Дениз Ундав (уже забил 3 гола на ЧМ). Магическая связка Хавертц-Мусиала-Виртц в полной боевой готовности. Оборону цементирует Антонио Рюдигер.
            - **Парагвай:** Ключевая фигура в центре поля — Диего Гомес, дающий баланс, и Андрес Кубас (чистый разрушитель). В рамке ворот поймал кураж Орландо Хиль. Главным мотором контратак остается Альмирон.

            ### 9. Статистика отдельных игроков
            - Креативная пара **Мусиала–Виртц** генерирует колоссальное количество продвигающих передач в штрафную.
            - У Парагвая центральные защитники совершают в среднем до **18** оборонительных действий (выносы, заблокированные удары) за игру.

            ### 10. Настрой и важность матча
            Это бескомпромиссный плей-офф. Для Германии вылет на стадии 1/16 финала станет национальной катастрофой и позором. Для Парагвая этот матч — исторический шанс прыгнуть выше головы. На южноамериканцев не давит абсолютно никакой груз ответственности, статус андердога полностью развязывает им руки для циничной оборонительной игры.

            ### 11. Тренеры
            - **Юлиан Нагельсманн (Германия):** Склонен к ежеминутной тактической гибкости, но осечка с Эквадором наглядно показала, что его систему можно эффективно наказывать через быстрые выпады.
            - **Густаво Альфаро (Парагвай):** Признанный во всей Южной Америке гроссмейстер по выстраиванию непроходимых редутов. Он обожает и умеет играть кубковые матчи «на выживание».

            ### 12. Аналитики и букмекеры
            Букмекерские котировки на основное время матча отражают колоссальный перекос в сторону европейского гранда:
            - Победа Германии — **1.35**
            - Ничья — **4.90**
            - Победа Парагвая — **8.80**

            ### 13. Ключевые факторы и новости
            Фактор работы над ошибками. После обидного поражения от Эквадора (1:2) Нагельсманн наверняка уделит повышенное внимание надежности при переходных фазах, что сделает игру Германии более сдержанной и аккуратной.

            ### 14. Арбитр
            Судейский комитет ФИФА на первые матчи на вылет традиционно назначает рефери топ-уровня. Ожидается жесткое пресечение любых тактических срывов перспективных атак. Парагвай будет активно использовать мелкий фол в центре поля, что неминуемо приведет к карточкам.


            ## 2) Футбольные метрики

            - **Атака:** Германия имеет солидный накопленный атакующий индекс — средний показатель **xG** составляет **2.45** за матч. Метрика **xGOT** (ожидаемые голы с учетом створа) также высока из-за великолепного исполнительского мастерства Сане, Мусиалы и Виртца. У Парагвая индивидуальный **xG** критически мал (в среднем **0.75** за игру), но латиноамериканцы демонстрируют феноменальную бережливость к собственным редким моментам.
            - **Продвижение:** Индекс **Field Tilt** (наклон поля) в этой встрече прогнозируется на уровне **75% на 25%** в пользу Бундестим. Немцы буквально запрут Парагвай на их трети поля. По передачам в финальную треть Германия лидирует на ЧМ благодаря диспетчерским качествам Киммиха и Крооса/Павловича. Парагвай продвигает мяч исключительно через лонгболлы.
            - **Защита и прессинг:** У Германии индекс прессинга **PPDA** равен **8.5** — это сверхагрессивный контрпрессинг сразу в момент потери мяча. У Парагвая **PPDA** равен **14.2** — они встречают оппонента строго на своей половине поля, максимально экономя силы для оборонительной пахоты.


            ## 3) Расчет матча методом Пуассона

            На основе скорректированной оборонительной и атакующей эффективности команд на групповом этапе (с учетом двух «сухих» игр Парагвая и пропущенных мячей Германии), получаем следующие параметры ожидаемых голов
            - **Лямбда Германии (ожидаемые голы):** 1.95
            - **Лямбда Парагвая (ожидаемые голы):** 0.55

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            1:0 | 14.8%
            2:0 | 14.4%
            3:0 | 9.3%
            1:1 | 8.1%
            0:0 | 7.6%

            **Итог Пуассона:** Общая вероятность победы Германии в основное время составляет **69.0%**, вероятность ничьей — **19.0%**, победа Парагвая — **12.0%**. Математически честный коэффициент на победу Бундестим по модели должен быть в районе **1.45**.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Букмекер оценивает шансы на победу Германии в основное время коэффициентом 1.35 (около 74% вероятности). Наш беспристрастный расчет Пуассона с учетом жесткого оборонительного стиля «Альбирохи» дает Германии только 69%. Из этого следует, что чистая победа фаворита за 1.35 абсолютно невыгодна для ставки — валуя в ней нет.
            - Явный и жирный VALUE сокрыт в маркетах на **Тотал Меньше**. Букмекеров сильно ввел в заблуждение разгром Кюрасао (7:1), из-за чего планка общего тотала завышена, а коэффициент на низовой матч искусственно завышен. Однако Парагвай — это не Кюрасао. В кубковом матче на вылет южноамериканцы выстроят идеальный, дисциплинированный «автобус», взломать который мизерными силами будет архисложно.


            ## 5) Анализ общей информации

            Учитывая запредельный статус ответственности в 1/16 финала, Парагвай сделает явную ставку на удержание стартовых 0:0 как можно дольше, мечтая дотянуть до серии послематчевых пенальти или поймать фаворита на шальной контратаке. Германия, помня о звонком щелчке от Эквадора, сыграет в защите намного строже и академичнее, не позволяя себе авантюрных наскоков. Матч обещает стать затяжной осадой парагвайской крепости.


            ## 6) Лучшие ставки на матч

            - **Основной выбор (Value):** Тотал Меньше (3.0) голов за коэффициент **1.82** (или ТМ 2.5 за **2.20** для более рискованного варианта). (Железобетонное математическое обоснование. Парагвай закроется на все замки, а немцы не полетят вперед сломя голову, опасаясь Альмирона).
            - **Альтернативная ставка:** Парагвай с форой (+1.5) в основное время за коэффициент **1.85**. (Даже в случае поражения, организованная южноамериканская защита не позволит Бундестим устроить разгром. Скорее всего, нас ждет прагматичный триумф фаворита в 1 или 2 мяча — 1:0 или 2:0).
            - **Индивидуальный маркет:** Индивидуальный Тотал Парагвая Меньше (0.5) голов за коэффициент **1.75**. (Нагельсманн проведет образцовую работу над тактическими ошибками группового этапа. Преодолеть оборонительные редуты Рюдигера скромной контратакующей линии парагвайцев в главном матче года будет невероятно тяжело).`
    
         },
        { id: 76, date: "Вторник, 30 июня", time: "04:00", stadium: "Монтеррей • ББВА", team1Code: "1F", team1Text: "Победитель Группы F", team2Code: "2C", team2Text: "2-е место Группы C", prob1: 45, probX: 30, prob2: 25, analysisText:
            `Ярчайший поединок стадии плей-офф (Round of 32) на вылет, в котором сходятся две бескомпромиссные и стилистически полярные футбольные системы. «Оранье» под руководством Рональда Кумана набрали крейсерский ход на групповом этапе, однако марокканские «Атласские львы» — полуфиналисты прошлого мундиаля — обладают безупречным кубковым менталитетом и готовы к очередному громкому апсету. В Монтеррее ожидается тактическая битва высочайшего накала.

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Матч по счету:** 1/16 финала (Round of 32) — первый раунд матчей на выживание.
            - **Поле и стадион:** Мексика, Монтеррей, стадион «Монтеррей Стэдиум» (Estadio BBVA). Поединок закроет официальную программу турнира на этой арене, газон в отличном состоянии.
            - **Климат:** Высокая влажность воздуха и удушающая жара. Данный климатический фактор потребует от обеих команд грамотного распределения сил на всю дистанцию встречи и может спровоцировать резкое падение темпа во втором тайме.
            - **Фаворит:** Нидерланды. За счет более звездного и глубокого европейского ростера «Оранье» идут умеренными фаворитами у букмекеров, но Марокко котируется как максимально опасный андердог.
            - **Опыт в чемпионатах:** Нидерланды трижды в своей истории доходили до финалов мировых первенств. Марокко сотворило грандиозную сенсацию на ЧМ-2022 в Катаре (4-е место) и имеет менталитет прожженных кубковых бойцов.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Обе национальные сборные стабильно и заслуженно входят в топ-15 актуального мирового рейтинга.
            - **Рейтинг игроков:** У голландцев традиционно мощно выглядит центральная ось (ван Дейк, де Йонг) и реактивные фланги (Гакпо, Думфрис). У марокканцев выделяется правый фланг мирового уровня в лице Хакими и звездная атакующая группа во главе с Браимом Диасом из мадридского «Реала».

            ### 3. Текущая форма на турнире
            - **Нидерланды:** Заняли 1-е место в Группе F, набрав **7 очков**. Стартовали с тяжелой ничьей против Японии (2:2), после чего разнесли Швецию (5:1) и уверенно переиграли Тунис (3:1). Команда Рональда Кумана ощутимо прогрессирует от матча к матчу.
            - **Марокко:** Заняли 2-е место в Группе C, также набрав **7 очков**. Прошли сложнейший квартет наравне с Бразилией, уступив южноамериканцам первую строчку лишь по дополнительной разнице мячей и продемонстрировав феноменальную кубковую стабильность.

            ### 4. Форма и основная статистика
            - **Нидерланды:** Забили 10 голов за 3 матча группового раунда (в среднем **3.33 гола** за игру), пропустив при этом 4 мяча. Нападение голландцев находится в огне.
            - **Марокко:** Продемонстрировали схожий баланс прочности и игровой зрелости, практически не уступая соперникам в жестких единоборствах, но действуя чуть более прагматично.

            ### 5. Дополнительная статистика (Тренды)
            - **Владение мячом:** Нидерланды любят тотально забирать себе мяч и территорию (**58%–63%**). Марокканцы комфортно чувствуют себя без мяча (**45%–48%**), уповая на вертикальные переходы и дриблинг.
            - **Удары и стандарты:** Голландцы активно задействуют фланговые навесы Думфриса (высокий показатель корнеров). Марокко обороняется компактно, блокируя до 40% ударов соперников еще на дальних подступах к своей штрафной площади.

            ### 6. Очные встречи
            - Сборные пересекались на ЧМ-1994 (тогда Нидерланды отпраздновали победу со счетом 2:1). В современную эпоху это классическое стилистическое противостояние систем: голландский тотальный атакующий напор против организованного марокканского блока.

            ### 7. Тактика и стиль игры
            - **Нидерланды (4-3-3):** Интенсивный высокий прессинг, сверхактивное включение в атаку крайних защитников (Думфрис / ван де Вен), давление через Коди Гакпо и Брайана Бробби. Главная уязвимость — свободные зоны за спинами защитников при затяжных позиционных атаках.
            - **Марокко (4-2-3-1):** Компактный и плотный средний блок. Оборону цементирует пара Риад — Диоп. Переход в контратаку строится через реактивные подключения Хакими по бровке и умные передачи Унаи и Буадди в полуфлангах на ход Браиму Диасу.

            ### 8. Составы, травмы и звезды
            - **Нидерланды:** Коди Гакпо пребывает в феноменальной игровой форме на этом турнире. Френки де Йонг безупречно координирует весь темп игры в центре поля. В рамке ворот надежен Барт Вербрюгген.
            - **Марокко:** Опытный Яссин Буну — настоящая ментальная стена в кубковых поединках. Главным креативным центром команды является Браим Диас, способный в одиночку решить исход любого сложного эпизода.

            ### 9. Статистика отдельных игроков
            - **Коди Гакпо (Нидерланды):** Лидирует в команде по системе гол+пас и xG-метрикам на текущем турнире.
            - **Браим Диас (Марокко):** Имеет наивысший процент успешного продвигающего дриблинга один в один в составе марокканцев.

            ### 10. Настрой и важность матча
            Это бескомпромиссная стадия на вылет. Марокканцы еще на прошлом мундиале доказали всей планете, что они ментально и физически безупречно готовы к затяжным овертаймам и сериям послематчевых пенальти. Нидерланды же испытывают колоссальное давление со стороны европейской прессы, требующей от Кумана обязательного прохода в глубокие стадии сетки.

            ### 11. Тренеры
            - **Рональд Куман (Нидерланды):** Предпочитает классический, академический голландский футбол с постоянным силовым давлением по всему фронту атаки.
            - **Валид Реграги (Марокко):** Делает ключевой тактический упор на идеальное позиционное смещение оборонительных линий и минимизацию пространства между ними.

            ### 12. Аналитики и букмекеры
            Букмекерские котировки на основное время матча оставляют голландцев фаворитами, но отражают высокую вероятность ничейного исхода:
            - Победа Нидерландов — **1.92**
            - Ничья — **3.50**
            - Победа Марокко — **4.20**

            ### 13. Ключевые факторы и новости
            Тяжелые погодные условия Монтеррея. Изнуряющая жара во втором тайме неизбежно приведет к потере концентрации защитниками обеих команд, что увеличивает шансы на результативные ошибки в финальной трети матча.

            ### 14. Арбитр
            Матч доверено обслуживать строгому бразильскому арбитру **Вилтону Сампайо** (Wilton Sampaio). Рефери не терпит симуляций и лишних разговоров на поле, охотно карая желтыми карточками любые срывы перспективных атак, что критически важно для жестко прессингующего Марокко.


            ## 2) Футбольные метрики

            - **Атака:** Нидерланды демонстрируют солидную атакующую мощь — их средний показатель **xG** составляет **2.15** за матч. Фиксируется высокий индекс xA (ожидаемые ассисты) у Райана Гравенберха и Тейяни Рейндерса. Марокко идет с показателем **xG** в районе **1.35**. Африканцы реже подходят к чужим воротам позиционно, но их метрика **xGOT** (качество ударов в створ) аномально высока благодаря высочайшему индивидуальному мастерству Браима Диаса.
            - **Продвижение:** Индекс **Field Tilt** (наклон поля) прогнозируется на уровне **57% на 43%** в пользу Нидерландов. Территориальное преимущество останется за европейцами, но без тотального прижимания марокканцев к их собственной штрафной площади.
            - **Защита и прессинг:** У Нидерландов индекс прессинга **PPDA** равен **9.8** — это высокий уровень давления на чужой половине поля. У Марокко **PPDA** составляет **12.4** — они позволяют сопернику разыгрывать мяч на его трети, но максимально плотно и агрессивно встречают в центральном круге.


            ## 3) Расчет матча методом Пуассона

            На базе выдающейся атакующей мощи Нидерландов (10 голов в группе) и идеальной оборонительной организации Марокко, получаем следующие параметры ожидаемых голов
            - **Лямбда Нидерландов (ожидаемые голы):** 1.62
            - **Лямбда Марокко (ожидаемые голы):** 1.15

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            1:1 | 13.2%
            1:0 | 11.8%
            2:1 | 10.5%
            0:1 | 8.4%
            2:2 | 5.8%

            **Итог Пуассона:** Общая вероятность победы Нидерландов в основное время составляет всего **46.0%**, вероятность ничьей — **26.0%**, победа Марокко — **28.0%**. Математически честный коэффициент на победу европейской сборной по модели должен быть в районе **2.17**.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Букмекер оценивает чистую победу Нидерландов в основное время коэффициентом 1.92 (около 52% вероятности). Наш беспристрастный расчет Пуассона с учетом колоссального кубкового опыта Марокко дает голландцам всего 46%. Рыночный коэффициент на фаворита откровенно занижен, валуя в исходе П1 нет.
            - Рынок сильно недооценивает кубковую неуступчивость «Атласских львов» в матчах на вылет. Настоящее, математически обоснованное VALUE лежит в голах обеих команд, а также в исходах в пользу андердога с подстраховкой.


            ## 5) Анализ общей информации

            Голландцы много и со вкусом забивают, но при этом пропускают регулярно (4 пробоины в группе, включая 2 мяча от Японии). Марокко со своей реактивной контратакующей группой (Диас, Хакими) обязательно накажет «Оранье» за авантюрно высокую линию обороны. При этом наглухо удержать Гакпо и Бробби на протяжении полных 90 минут марокканцы тоже вряд ли сумеют. Тяжелый климат Монтеррея сделает свое дело во второй половине встречи.


            ## 6) Лучшие ставки на матч

            - **Основной выбор (Value):** Обе забьют (Да) за коэффициент **1.85**. (Идеальное тактическое и математическое обоснование. Атака Нидерландов прекрасна (3.33 гола за игру), но их защита уязвима к быстрым выпадам. По матрице Пуассона результативная ничья 1:1 является самым вероятным исходом встречи).
            - **Альтернативная ставка:** Марокко с форой (+1.0) в основное время за коэффициент **1.65**. (Оборона номинальных гостей слишком организована и монолитна, чтобы развалиться. Даже в случае минимального поражения ставка обеспечит полноценный расход, давая шикарный подстраховочный вариант).
            - **Статистический маркет:** Тотал голов в матче Больше (2.0) за коэффициент **1.70**. (Стилистически игра не превратится в унылый закрытый «автобус». Нидерланды всегда играют сами и дают атаковать сопернику. Полный возврат при 2 голах и чистая прибыль при 3 и более мячах).`
    
         },
        { id: 77, date: "Вторник, 30 июня", time: "20:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "2E", team1Text: "2-е место Группы E", team2Code: "2I", team2Text: "2-е место Группы I", prob1: 33, probX: 31, prob2: 36, analysisText:
            `## 1. Общая аналитика

            ### 1. Общая картина
            - **Турнирный статус:** Пятый матч стадии 1/16 финала ЧМ-2026 (первый поединок в игровом дне 30 июня). Плей-офф, игра на вылет.
            - **Стадион и поле:** «Dallas Stadium» (AT&T Stadium), Арлингтон, Техас, США. Высокотехнологичный крытый стадион со сдвижной крышей, искусственный газон высочайшего качества, уложенный специально под мундиаль.
            - **Климат:** В Техасе в конце июня фиксируется изнуряющая жара под $+35^\\circ\\text{C}$ и выше, но на самой арене запущена мощнейшая система климат-контроля (поддерживается стабильные **+21°C…+22°C**). Фактор погоды полностью нивелирован.
            - **Фаворит:** Букмекеры отдают минимальное преимущество Норвегии за счёт медийного фактора Холанда и Эдегора, но по игре на групповом этапе Кот-д'Ивуар выглядит более цельно. Реальные шансы близки к $50\\% / 50\\%$.
            - **Кубковый опыт:** Кот-д'Ивуар имеет богатейший кубковый бэкграунд (действующие триумфаторы Кубка африканских наций), они умеют ментально и тактически играть матчи на вылет. Для текущего поколения Норвегии это первый большой международный турнир такого масштаба, опыта игр на выбывание на уровне сборных у них практически нет.

            ### 2. Рейтинг команд и футболистов
            - **Рейтинг ФИФА:** Кот-д'Ивуар колеблется в районе 30-35 места, Норвегия находится в районе 45-50 места.
            - **Рейтинг игроков:** По общему балансу состава Кот-д'Ивуар выглядит ровнее (почти все исполнители представляют клубы топ-5 лиг). У Норвегии наблюдается колоссальный игровой перекос: две суперзвезды мирового класса (Эрлинг Холанд и Мартин Эдегор) на фоне весьма средней и медленной линии обороны.

            ### 3. Текущая форма команд
            - **Кот-д'Ивуар:** Находится в отличной игровой и психологической форме. Уверенно вышли со 2-го места сложнейшей группы E, обыграв Эквадор и Кюрасао, а также навязав мощный бой Германии (уступили 1:2 в равной борьбе).
            - **Норвегия:** Форма оценивается как неоднозначная. Пробились в плей-офф, но в третьем туре получили болезненные 0:3 от Франции. Да, там применялась ротация, но тактический удар по морали и вскрытые системные проблемы в обороне никуда не делись.

            ### 4. Основная статистика на турнире
            - **Кот-д'Ивуар:** В группе забили 5 голов, пропустили 2. Имеют хорошую динамику (выиграли 2 из 3 матчей на турнире). Также обыгрывали топ-сборные в недавних товарищеских циклах.
            - **Норвегия:** 4 гола на турнире (абсолютно все забил Холанд в первых двух турах). Скандинавы стабильно пропускают: получили голы от Ирака и Сенегала, а Франция отгрузила три. В среднем пропускают более **1.5** гола за игру.

            ### 5. Дополнительная статистика (тренды ЧМ-2026)
            - **Угловые:** Кот-д'Ивуар подает много за счёт активных флангов и дриблинга Пепе (в среднем **6.2** за матч). Норвегия строит игру через центр и навесы на Холанда (около **4.5**).
            - **Владение мячом:** Норвегия при Сольбаккене стремится к доминации (55-58% в первых турах). Кот-д'Ивуар комфортно чувствует себя в позиционной обороне без мяча (45-48%), делая ставку на быстрый вертикальный переход.
            - **Дисциплина:** Африканцы играют плотно и агрессивно, много фолят в центре поля (в среднем 2.3 ЖК). Норвегия действует мягче (1.2 ЖК).

            ### 6. Очные встречи
            - Сборные Кот-д'Ивуара и Норвегии ни разу в истории не встречались на уровне главных мужских национальных команд. Это абсолютно чистый тактический лист.

            ### 7. Тактика, расстановка и стиль игры
            - **Кот-д'Ивуар (4-3-3):** Тренер Эмерс Фаэ построил атлетичный, организованный блок. Сверхзадача — перекусить центр поля за счёт физической мощи Кессье и организовать мгновенную доставку мяча на правый фланг на Николя Пепе (главное оружие изоляций).
            - **Норвегия (4-3-3 / 4-2-3-1):** Столе Сольбаккен ставит на контроль владения. Ключевая связка: Эдегор опускается глубже, вытягивает за собой опорников соперника, оголяет зону между линиями и закидывает мяч на ход Холанду.
            - **Главные проблемы:** У Норвегии — катастрофически медленный центр обороны. У Кот-д'Ивуара — высокий риск увлечься прессингом и оставить Холанда 1-в-1 на пространстве.

            ### 8. Составы и кадровый баланс
            - **Кот-д'Ивуар:** Все ключевые лидеры в строю. Обойма оптимальная, на острие атаки и на флангах присутствует высокая конкуренция.
            - **Норвегия:** Главная новость — Холанд и Эдегор полностью отдохнули, так как практически не играли против Франции (Сольбаккен сознательно берёг их под 1/16). Они будут свежими на все 100%. Оборона выйдет в стандартном, но уязвимом сочетании.

            ### 9. Статистика отдельных игроков
            - **Николя Пепе (Кот-д'Ивуар):** Главный хедлайнер ивуарийцев прямо сейчас. Оформил дубль против Кюрасао, разрывает свой фланг на взрывной скорости.
            - **Эрлинг Холанд (Норвегия):** Забил 4 гола всего за 2 матча группового этапа. Один из главных претендентов на «Золотую бутсу» ЧМ, если Норвегия пройдёт дальше по сетке.

            ### 10. Настрой команд и важность матча
            - Это 1/16 плей-офф — цена ошибки максимальна. Победитель этой пары выходит напрямую на Бразилию (которая в параллельном матче вырвала победу у Японии 2:1). Настрой у Кот-д'Ивуара кубковый, они ментально устойчивее. Для Норвегии невыход в 1/8 с Холандом в прайме будет воспринят на родине как провал.

            ### 11. Тренерский фактор
            - **Эмерс Фаэ:** Принял команду по ходу триумфального КАН-2024, сотворил чудо, имеет стопроцентный кредит доверия. Обладает ярко выраженным «кубковым ДНК».
            - **Столе Сольбаккен:** Работает долго. Вывел команду на ЧМ, выполнив историческую задачу, но его часто критикуют за неумение гибко перестраивать игру по ходу неудачно складывающихся матчей (встреча с Францией это наглядно подтвердила).

            ### 12. Что говорят аналитики и букмекеры
            Большинство экспертов сходятся во мнении, что матч будет «на три результата». Букмекеры дают котировки: 
            - **Победа Кот-д'Ивуара:**  3.10$
            - **Ничья:**  3.30$
            - **Победа Норвегии:**  2.45$
            - *Небольшой перекос в сторону Норвегии обусловлен исключительно медийным фактором Холанда.*

            ### 13. Ключевые факторы и инсайды
            Главный тактический инсайд — Кот-д'Ивуар готовит персональный «сдвоенный» прессинг против Мартина Эдегора, чтобы полностью отрезать Холанда от передач из глубины. Если это сработает, Норвегия останется без акцентированной атаки.

            ### 14. Анализ арбитров
            Назначена строгая судейская бригада Elite-категории. В матче кость-в-кость от африканцев и при наличии быстрых контратак можно уверенно ожидать Тотал Больше по желтым карточкам и высокую вероятность назначения пенальти (учитывая частые фолы на Холанде и Пепе в штрафных площадях).


            ## 2. Футбольные метрики

            ### 1. Атакующие метрики (ожидаемые события)
            - **xG (Expected Goals):** Кот-д'Ивуар стабильно добирает свои $1.4 - 1.6$ за матч за счёт высокой плотности ударов. Норвегия демонстрирует оверперформанс: при базовом xG около $1.1$ они забивают больше исключительно благодаря феноменальной реализации Холанда.
            - **xA (Expected Assists):** У Норвегии здесь тотально доминирует Эдегор (высокий показатель xA через ключевые пасы). У Кот-д'Ивуара xA равномерно размазан между фланговыми защитниками и полузащитой.
            - **xGOT:** У Норвегии этот показатель выше. Холанд бьет редко, но почти всегда точно в створ и в мертвые для вратаря зоны. У Кот-д'Ивуара фиксируется много дальних ударов с низким xGOT.

            ### 2. Продвижение мяча и паса
            - **Progressive Passes / Runs:** У Кот-д'Ивуара сделан упор на Runs (прогрессивные рывки Пепе и Диаките). У Норвегии — исключительно Passes от Эдегора из глубины поля.
            - **Field Tilt (Наклон поля):** Прогнозируется в районе $53\\% - 47\\\%$ в пользу Норвегии. Они будут больше времени проводить с мячом на чужой трети, но Кот-д'Ивуар сознательно отдаст это пространство под свои быстрые контратаки.
            - **Pass Completion Rate:** Норвегия — около **85%** (стерильное владение защитников), Кот-д'Ивуар — **80%** (из-за обилия обостряющих вертикальных передач).

            ### 3. Защитные и прессинг метрики
            - **PPDA:** У Кот-д'Ивуара PPDA низкий (около $9.5$) — они яростно включаются в активный отбор сразу при потере мяча. Норвегия прессингует хуже, их PPDA около $13.2$, они позволяют сопернику спокойно разыгрывать мяч на начальной стадии.
            - **Interceptions & Recoveries:** Очевидное преимущество у Кот-д'Ивуара. Франк Кессье — настоящая машина по перехватам в переходных фазах игры.

            ### 4. Комплексные модели (PV / VAEP)
            - У Норвегии **70%** ценности владения генерирует одна связка. Если заблокировать Мартина, PV Норвегии падает дельтой вниз. У Кот-д'Ивуара угроза более диверсифицирована по всему фронту атаки.


            ## 3. Расчёт матча методом Пуассона

            Беря за основу очищенные показатели забитых/пропущенных мячей в группе (с поправкой на уровень соперников и кубковый статус матча, где результативность в основное время падает в среднем на $15\\%$)
            - **Лямбда Кот-д'Ивуара (ожидаемые голы):** 1.25$
            - **Му Норвегии (ожидаемые голы):** 1.30$

            Матрица вероятностей точного счета (основное время):
            - **0:0** — $8.2\\%$
            - **1:1** — $13.1\\%$ *(самый вероятный исход)*
            - **1:0** — $10.1\\%$
            - **0:1** — $10.5\\%$
            - **2:1** — $6.6\\%$
            - **1:2** — $6.9\\%$

            > **Итог по Пуассону:** Вероятность ничьей в основное время — $28.5\\%$, победа Кот-д'Ивуара — $34.5\\%$, победа Норвегии — $37.0\\%$.


            ## 4. Поиск в линии VALUE (честной ставки)

            Линия букмекеров перекошена в сторону Норвегии (2.45 на победу в основное время эквивалентно примерно $40.8\\%$, заложенным в коэффициент). Модель Пуассона и тактический анализ показывают, что реальная вероятность победы Норвегии в основное время ниже ($37\\%$), а Кот-д'Ивуар сильно недооценен из-за отсутствия в составе «громких» медийных имен уровня Холанда.

            - **Где сидит Value:**
            1. Кот-д'Ивуар не проиграет (1Х) за коэффициент в районе **1.62**. Честный коэффициент по модели — **1.53**.
            2. Тотал меньше 2.5 за коэффициент **1.85**. В плей-офф команды будут осторожничать, цена ошибки — вылет, Сольбаккен закроется сильнее, чем в игре с Францией.


            ## 5. Анализ общей информации

            Матч стилистически будет напоминать игру Кот-д'Ивуара против Германии. Норвегия сильна индивидуальностями, но системно их оборона трещит под организованным давлением. Свежие Холанд и Эдегор точно организуют 1-2 убойных момента. Кот-д'Ивуар ответит на это мощным физическим давлением в центре поля и ставкой на скорость Пепе против медленных защитников Норвегии. Иход решит то, сможет ли Кессье выключить Эдегора из игры. Сборная Кот-д'Ивуара выглядит более сбалансированным и стрессоустойчивым кубковым бойцом.


            ## 6. Лучшие ставки на матч

            **1. Основной выбор: Кот-д'Ивуар пройдет в 1/8 финала (Проход 1) (Коэффициент $ 2.15$)**
            - **Обоснование:** Отличный валуй. Ивуарийцы гораздо опытнее в играх на вылет, и даже в случае ничьей в основное время они способны забрать матч в экстра-таймах или по пенальти за счет глубины состава и физики.

            **2. Вариант на основное время: 1Х (Кот-д'Ивуар не проиграет) (Коэффициент $ 1.62$)**
            - **Обоснование:** Математически обоснованная ставка против перекоса букмекерской линии в сторону скандинавов.

            **3. Трендовая ставка: Тотал голов Норвегии: Меньше 1.5 (Коэффициент $ 1.57$)**
            - **Обоснование:** Африканцы плотно закроют зоны, Холанда будут встречать вдвоем, а без свободного пространства ему будет крайне тяжело забить больше одного мяча.`
    
         },
        { id: 78, date: "Среда, 1 июля", time: "00:00", stadium: "Нью-Джерси • МетЛайф", team1Code: "1I", team1Text: "Победитель Группы I", team2Code: "3C+", team2Text: "3-е место CDFGH", prob1: 62, probX: 24, prob2: 14, analysisText:
            `## 1. Общая аналитика

            ### 1. Общая картина
            - **Турнирный статус:** Шестой матч стадии 1/16 финала ЧМ-2026. Классическое кубковое противостояние явного фаворита и андердога, который запрыгнул в плей-офф вопреки тяжелому групповому этапу.
            - **Стадион и поле:** «New York New Jersey Stadium» (MetLife Stadium), Ист-Ратерфорд. Открытая арена, натуральный газон высочайшего качества, уложенный поверх искусственного покрытия специально под строгие требования FIFA.
            - **Климат:** В Нью-Йорке/Нью-Джерси на конец июня влажно и жарко (около **+28°C…+30°C**). К вечеру температура падает, но высокая влажность может сказаться на интенсивности прессинга во втором тайме. Это скорее минус для силовой и энергозатратной Швеции.
            - **Кто фаворит:** Франция — безоговорочный фаворит матча и один из главных претендентов на титул чемпионов мира 2026 года.
            - **Кубковый опыт:** Колоссальный разрыв. Франция — это сыгранный прагматичный костяк, бравший золото в 2018-м и серебро в 2022-м. Швеция пропустила ЧМ-2022, и для многих их футболистов текущий плей-офф — вообще первый опыт матчей на вылет на мундиалях.

            ### 2. Рейтинг команд и футболистов
            - **Рейтинг ФИФА:** Франция стабильно входит в топ-3 мирового рейтинга. Швеция находится лишь в третьем десятке (22–26 места).
            - **Рейтинг игроков:** Несопоставимый индивидуальный класс. У Франции глубина состава позволяет выставить два равноценных ростера топ-уровня (Мбаппе, Дембеле, Тчуамени, Салиба). У Швеции есть яркие звезды в атаке (Исак, Дьёкереш, Кулусевски), но критически проседает линия обороны.

            ### 3. Текущая форма команд
            - **Франция:** В полном порядке. Уверенно выиграли группу I, в последнем туре катком прошлись по Норвегии (4:1). Команда Дидье Дешама забивает много и играет с позиции силы, поймав идеальный игровой баланс.
            - **Швеция:** Вышли с 3-го места группы F с огромными приключениями. Обыграли Тунис (5:1), но получили сокрушительные 1:5 от Нидерландов, обнажившие системный кризис в защитных построениях при переходе соперника в быстрые атаки.

            ### 4. Основная статистика на турнире
            - **Франция:** Наколотили 10 голов на групповом этапе (в среднем 3.33 за игру). Пропустили всего 2 мяча за 3 встречи.
            - **Швеция:** Очень атакующая и разбалансированная статистика — забили 7 голов, но пропустили целых 7. Меньше 2-3 мячей в их матчах практически не забивается.

            ### 5. Дополнительная статистика (тренды ЧМ-2026)
            - **Угловые:** Франция часто использует фланговые перегрузы и прострелы (6.8 угловых за матч). Швеция за счет габаритов Дьёкереша и стандартов тоже держит планку (5.2).
            - **Владение мячом:** Франция — **58-62%** (тотальный контроль). Швеция против топ-сборных падает до **40-42%**, пытаясь быстро выбегать через дриблинг Кулусевски.
            - **Дисциплина:** Шведы часто фолят, срывая быстрые атаки в центре поля (в среднем 2.5 ЖК). Франция действует чище на классе (1.1 ЖК).

            ### 6. Очные встречи
            - Последние официальные матчи в Лиге Наций завершились победами Франции (1:0 в гостях, 4:2 дома). Исторически Швеция — неудобный соперник, способный упереться, но на нейтральном поле в США класс французов нивелирует прошлые заслуги скандинавов.

            ### 7. Тактика, расстановка и стиль игры
            - **Франция (4-2-3-1):** Дешам развязал руки атаке. Упамекано и Салиба страхуют высокую линию, Тчуамени и Коне выжигают центр поля. Главная фишка — изоляции для Мбаппе на левом фланге и реактивные смещения Дембеле справа (Усман сделал хет-трик Норвегии).
            - **Швеция (4-4-2 / 4-2-3-1):** Йон-Даль Томассон пытается играть в современный прессинг, но защитники не успевают возвращаться назад. Сверхзадача — доставить мяч в штрафную на Исака и Дьёкереша, чтобы зацепиться за счет физической мощи.
            - **Главные проблемы:** Защитники Швеции (Хин, Линделеф) габаритные, но позиционно и на взрывной скорости они полностью проигрывают легкой атаке Франции.

            ### 8. Составы и кадровый баланс
            - **Франция:** Обойма идеальная. Дешам провел частичную ротацию в группе, лидеры свежи. Мбаппе голоден до голов в плей-офф.
            - **Швеция:** Все лидеры атаки в строю, но есть микроповреждения в опорной зоне, что критично против Тчуамени и Камавинги/Коне.

            ### 9. Статистика отдельных игроков
            - **Килиан Мбаппе (Франция):** Главный мотор команды, безоговорочный лидер по продвижению мяча на дриблинге и xG.
            - **Усман Дембеле (Франция):** Находится в пиковой форме на этом турнире (оформил 3 гола Норвегии).
            - **Виктор Дьёкереш (Швеция):** Главная ударная сила шведов, навязавший больше всего верховых единоборств в группе.

            ### 10. Настрой команд и важность матча
            - Для Швеции выход в 1/16 — уже локальный успех после пропуска прошлых турниров, давления на них меньше. Для Франции любой результат, кроме золота, — катастрофа. Цена гола колоссальная, но Франция умеет образцово «сушить» матчи в плей-офф, когда это необходимо.

            ### 11. Тренерский фактор
            - **Дидье Дешам:** Настоящая глыба. Знает о плей-офф абсолютно все. Его прагматизм в играх на вылет — главный козырь Франции.
            - **Йон-Даль Томассон:** Пытается привить Швеции более атакующий, европейский стиль, но баланса между атакой и обороной пока достичь не удалось.

            ### 12. Что говорят аналитики и букмекеры
            Букмекеры не верят в сенсацию, линия сильно прогружена на «трехцветных»:
            - **Победа Франции:**  1.38$
            - **Ничья:**  4.90$
            - **Победа Швеции:**  8.50$

            ### 13. Ключевые факторы и инсайды
            Швеция будет пытаться физически смять полузащиту Франции в первые 20 минут. Если Франция выдержит стартовый натиск и поймает шведов на быстрой контратаке — игра для скандинавов закроется.

            ### 14. Анализ арбитров
            Назначена строгая судейская бригада. Шведы будут вынуждены часто фолить на Мбаппе и Дембеле $\rightarrow$ высокая вероятность желтых карточек для защитников Швеции и назначения пенальти.


            ## 2. Футбольные метрики

            ### 1. Атакующие метрики
            - **xG (Expected Goals):** Франция генерирует космические $2.2 - 2.4$ за игру. Швеция имеет солидный xG ($1.6$), но против топ-обороны (как у Нидерландов) этот показатель падает до $0.8$.
            - **xA (Expected Assists):** У Франции Гризманн или Олисе/Диалло создают умное продвижение. У Швеции вся xA идет через фланговые кроссы Кулусевски.
            - **xGOT:** Мбаппе и Дембеле бьют из убойных позиций $\rightarrow$ xGOT французов значительно превышает стандартный xG за счет индивидуального мастерства.

            ### 2. Продвижение мяча
            - **Progressive Passes / Runs:** Франция — топ-1 турнира по Progressive Runs (Мбаппе, Тео Эрнандес). Они буквально вбегают в штрафную на скорости.
            - **Field Tilt (Наклон поля):** $65\%$ на $35\%$ в пользу Франции. Швеция будет зажата в своей трети поля.
            - **Pass Completion Rate:** Франция — **89%** (элитный уровень), Швеция — **78%** под интенсивным прессингом.

            ### 3. Защитные и прессинг метрики
            - **PPDA:** У Франции PPDA управляемый ($10.2$) — они включают давление зонально. У Швеции PPDA высокий ($14.5$), они дают принимать мяч Тчуамени, что фатально.
            - **Interceptions & Recoveries:** Полное превосходство Салиба и Упамекано на перехватах при длинных забросах шведов на Дьёкереша.


            ## 3. Расчёт матча методом Пуассона

            Корректируем результативность команд с учетом стадии плей-офф, где Дешам традиционно поджимает игру сзади, а Швеция постарается сыграть строже, чем с голландцами.
            - **Лямбда Франции (ожидаемые голы):** 2.15$
            - **Му Швеции (ожидаемые голы):** 0.75$

            Матрица вероятностей точного счета (основное время):
            - **2:0 (П1)** — $13.8\%$ *(самый вероятный исход)*
            - **1:0 (П1)** — $12.8\%$
            - **3:0 (П1)** — $9.9\%$
            - **2:1 (П1)** — $10.3\%$
            - **1:1** — $7.4\%$

            > **Итог по Пуассону:** Победа Франции — $68.5\%$, ничья — $18.1\%$, победа Швеции — $13.4\%$.


            ## 4. Поиск в линии VALUE (честной ставки)

            Линия на чистую победу Франции перегрета ($1.38$). Искать валуй нужно в альтернативных рынках, учитывая нестабильную оборону Швеции в матчах с топами и неудержимую форму французских флангов.

            - **Где сидит Value:**
            1. **Тотал голов Франции: Больше 2** за коэффициент в районе **1.85**. Если французы забьют ровно 2 — будет возврат, но против такой открытой Швеции Франция способна забивать больше.
            2. **Индивидуальный тотал желтых карточек Швеции: Больше 2.0**. Удержать Мбаппе и Дембеле без тактических фолов шведы просто не смогут физически.


            ## 5. Анализ общей информации

            Сенсации здесь ждать не приходится. Швеция — слишком открытая и несбалансированная команда для кубкового прагматизма Дешама. Нидерланды уже показали, как разбивать шведский прессинг быстрыми вертикальными атаками. Франция сделает то же самое, но с еще более качественными исполнителями. Ключ к матчу — первый гол Франции. Как только шведам придется отыгрываться и раскрывать зоны, Мбаппе и Дембеле разорвут их на пространстве.


            ## 6. Лучшие ставки на матч

            **1. Основной выбор: Победа Франции с форой (-1) (Коэффициент  1.60$) или Фора (-1.5) (Коэффициент 2.10$)**
            - **Обоснование:** Оборона Швеции не дотягивает до уровня 1/16 ЧМ против топ-сборной. Разница в скоростях команд колоссальная.

            **2. Трендовый маркер: Индивидуальный Тотал Франции Больше 1.5 (Коэффициент  1.50$)**
            - **Обоснование:** Железобетонный вариант, учитывая 7 пропущенных шведами голов на групповом этапе.

            **3. Специфический валуй: Швеция: Тотал желтых карточек Больше 2.0 (Коэффициент  1.75$)**
            - **Обоснование:** Фланговые защитники Швеции будут регулярно опаздывать за реактивными Мбаппе и Дембеле.`
    
         },
        { id: 79, date: "Среда, 1 июля", time: "04:00", stadium: "Мехико • Ацтека", team1Code: "1A", team1Text: "Победитель Группы A", team2Code: "3C+", team2Text: "3-е место CEFHI", prob1: 42, probX: 30, prob2: 28, analysisText:
            `## 1. Общая аналитика

            ### 1. Общая картина
            - **Турнирный статус:** Седьмой матч стадии 1/16 финала ЧМ-2026. Один из самых ожидаемых, равных и принципиальных поединков первого раунда плей-офф, где сойдутся две яркие латиноамериканские школы футбола.
            - **Стадион и поле:** Легендарный «Estadio Azteca» («Mexico City Stadium»), Мехико, Мексика. Главная историческая цитадель турнира, принимающая свой третий мундиаль. Хозяева поля — мексиканцы.
            - **Климат:** Матч проходит на высоте 2240 метров над уровнем моря. Разреженный воздух, своя специфика полета мяча и колоссальное давление на дыхательную систему игроков. Для Мексики это родная стихия, а вот Эквадор, хоть и сам играет в высокогорном Кито, на турнире базировался в США, поэтому адаптация на 90+ минут будет тяжелейшей. Температура комфортная (**~+22°C** к вечеру), но фактор высоты станет ключевым во 2-м тайме.
            - **Кто фаворит:** Мексика — фаворит за счёт домашней арены, сумасшедшей поддержки 80 000+ зрителей и идеального группового этапа. Коэффициент на проход Мексики — в районе 1.65, на Эквадор — 2.25.
            - **Кубковый опыт:** У Мексики колоссальный опыт групповых стадий, но они регулярно страдают от проклятия 1/8 финала («quinto partido» — пятого матча). Сейчас стадия 1/16 добавилась, и ментальный груз давления всей нации огромен. Эквадор — молодая, «кусачая» кубковая команда, не раз портившая кровь грандам в квалификации КОНМЕБОЛ.

            ### 2. Рейтинг команд и футболистов
            - **Рейтинг ФИФА:** Мексика замыкает топ-15, Эквадор располагается в районе 28-32 места.
            - **Рейтинг игроков:** Индивидуально по именам Эквадор выглядит даже мощнее и дороже (Кайседо из «Челси», Инкапье из «Байера», Пачо из «ПСЖ»). У Мексики состав более ровный, сильный системностью Хавьера Агирре и сыгранностью внутренних лидеров Лиги МХ.

            ### 3. Текущая форма команд
            - **Мексика:** В феноменальной форме. «Эль Три» стали одной из трёх команд на турнире (вместе с Францией и Аргентиной), набравших максимум (9 очков) в группе. И главное — 0 пропущенных мячей.
            - **Эквадор:** Форма волнообразная. Тяжело вкатывались (0:1 от Кот-д'Ивуара, тоскливые 0:0 с Кюрасао), но в третьем туре выдали матч жизни и сенсационно прихлопнули Германию (2:1), вырвав путевку в плей-офф с 3-го места. Находятся на диком эмоциональном подъеме.

            ### 4. Основная статистика на турнире
            - **Мексика:** Забили 6 голов, пропустили 0 (2:0 ЮАР, 1:0 Южная Корея, 3:0 Чехия). Оборона — бетон.
            - **Эквадор:** Забили 2 гола, пропустили 2. Команда забивает с огромным трудом, но и в свои ворота не позволяет забивать много. Матчи Эквадора на турнире — строго «низовые».

            ### 5. Дополнительная статистика (тренды ЧМ-2026)
            - **Угловые:** Мексика много атакует флангами через Киньонеса (в среднем 5.8 за матч). Эквадор часто играет через плотные вертикальные выносы и стандарты (4.2 угловых).
            - **Владение мячом:** Мексика дома заберет мяч (**54-56%**). Себастьян Беккасесе (тренер Эквадора) выстроит средний/низкий блок (**44-46%**) и сделает ставку на атлетизм.
            - **Дисциплина:** Ожидается настоящая рубка. Очные матчи этих сборных традиционно горячие. В группе Мексика собирала по 2 ЖК за матч, Эквадор — около 1.8.

            ### 6. Очные встречи
            - Последний раз команды играли на Копа Америка 2024 (0:0 в группе, что выбило Мексику) и провели товарищеский матч в конце 2025 года (снова ничья 1:1). Эквадор для Мексики исторически — крайне вязкий и неудобный оппонент.

            ### 7. Тактика, расстановка и стиль игры
            - **Мексика (4-3-3):** Хавьер Агирре привил команде жесткий прагматизм. Эдсон Альварес («Вест Хэм») контролирует опорную зону. Атаку разгоняют реактивные фланги в лице Киньонеса и Альварадо, а на острие опыта добавит Рауль Хименес. Задача — задушить Эквадор прессингом на первых минутах за счет трибун.
            - **Эквадор (4-4-2 / 3-5-2):** Беккасесе закроет зоны. Связка защитников Пачо-Инкапье — одна из самых перспективных в мире. В центре поля Мойзес Кайседо будет персонально работать по мексиканским диспетчерам. В атаке вечный Эннер Валенсия готов караулить единственную ошибку защитников.
            - **Главные проблемы:** У Мексики — риск занервничать, если не забьют быстрый гол. У Эквадора — слабая реализация и фактор истощения из-за высокогорья Мехико во 2-м тайме.

            ### 8. Составы и кадровый баланс
            - **Мексика:** Состав полностью здоровый и свежий. Агирре дал отдохнуть лидерам в третьем туре, решив задачу досрочно.
            - **Эквадор:** Дисквалификаций нет, но лидеры центра поля изрядно выхолощены после энергозатратной битвы с немцами.

            ### 9. Статистика отдельных игроков
            - **Хулиан Киньонес (Мексика):** Главный дриблер хозяев, создающий ключевые изоляции на левом фланге атаки.
            - **Мойзес Кайседо (Эквадор):** Настоящее сердце команды. Напрямую определяет темп игры Эквадора, один из лидеров по перехватам на турнире.

            ### 10. Настрой команд и важность матча
            - Матч жизни для обеих сборных. Победитель пары выходит на триумфатора матча Англия – ДР Конго в 1/8 финала. Для Мексики вылететь дома в первом же раунде плей-офф — национальная трагедия.

            ### 11. Тренерский фактор
            - **Хавьер Агирре:** Сверхопытный кубковый волк. Он прекрасно знает, как выжимать результат «на зубах», полностью убрав лишний романтизм из игры сборной.
            - **Себастьян Беккасесе:** Эмоциональный, тактически гибкий аргентинец, последователь идей Бьелсы. Умеет мотивировать андердогов на матчи против гигантов (Германия тому пример).

            ### 12. Что говорят аналитики и букмекеры
            Букмекеры видят Мексику фаворитом за счет «Ацтеки», но закладывают высокую вероятность ничьей в основное время:
            - **Победа Мексики:** 2.28$
            - **Ничья:** 2.98$
            - **Победа Эквадора:** 3.81$

            ### 13. Ключевые факторы и инсайды
            Давление трибун Estadio Azteca — это полноценный +1 игрок для Мексики. Оглушительный шум и свист парализуют соперников. Эквадору критически важно выдержать стартовые 25 минут натиска.

            ### 14. Анализ арбитров
            Назначен словенский арбитр Славко Винчич. Рефери строгий, авторитетный, абсолютно не поддающийся на провокации латиноамериканских игроков и симуляции. Будет много свистков, игра рискует разбиться на мелкие эпизоды.


            ## 2. Футбольные метрики

            ### 1. Атакующие метрики
            - **xG (Expected Goals):** Мексика идет по турниру со стабильными $1.6 - 1.8$ xG за матч. Реализация на высоком уровне. Эквадор оверперформил против Германии (забили 2 при xG $0.9$), но системный xG против плотной обороны у них низкий — около $0.75$.
            - **xA (Expected Assists):** У Мексики Луис Ромо и Чавес генерируют моменты через кроссы. У Эквадора вся xA преимущественно завязана на индивидуальных действиях Гонсало Платы.
            - **xGOT:** Вратарь Мексики Рамон Ранхель еще не имел серьезной работы (0 пропущенных), так как соперники даже не доводили удары до створа из опасных зон благодаря защитникам.

            ### 2. Продвижение мяча
            - **Progressive Passes / Runs:** Мексика доминирует по продвижению мяча через фланговые рывки защитников (Хорхе Санчес).
            - **Field Tilt (Наклон поля):** Прогнозируется $58\%$ на $42\%$ в пользу Мексики. Эквадор добровольно отдаст территорию, как делал это в игре с Германией.
            - **Pass Completion Rate:** Мексика — **84%**, Эквадор — **77%** (высокий брак из-за вертикального стиля игры).

            ### 3. Защитные и прессинг метрики
            - **PPDA:** У Мексики PPDA один из лучших на турнире — $8.4$. Они мгновенно душат соперника на чужой половине поля. У Эквадора PPDA высокий ($13.8$), они встречают глубже.
            - **Interceptions & Recoveries:** Эквадорская пара защитников Пачо-Инкапье находится в лидерах турнира по заблокированным ударам и выносам из штрафной площади.


            ## 3. Расчёт матча методом Пуассона

            Учитывая статус матча (1/16 финала, Мехико, высота), а также прагматизм Агирре и сильную защиту Эквадора, забитых голов в основное время прогнозируется критически мало.
            - **Лямбда Мексики (ожидаемые голы):** 1.15$
            - **Му Эквадора (ожидаемые голы):** 0.65$

            Матрица вероятностей точного счета (основное время):
            - **1:0 (П1)** — $19.2\%$ *(самый вероятный исход)*
            - **0:0** — $16.7\%$
            - **2:0 (П1)** — $11.0\%$
            - **1:1** — $10.5\%$
            - **0:1 (П2)** — $6.2\%$

            > **Итог по Пуассону:** Победа Мексики в основное время — $46.2\%$, ничья — $32.5\%$, победа Эквадора — $21.3\%$.


            ## 4. Поиск в линии VALUE (честной ставки)

            Букмекеры дают на чистую победу Мексики коэффициент 2.28 (что означает около $43.8\%$ вероятности). Расчет по Пуассону и фактор «Ацтеки» дают Мексике $46.2\%$ на победу в основное время. Здесь есть чистый, хотя и небольшой Value. Еще больший валуй сидит в тоталах. Рынок ждет низовой матч, но кэфы на супер-низ неоправданно завышены.

            - **Где сидит Value:**
            1. **Тотал меньше 2.0 голов** за котировки около **1.90**. Сценарий, при котором одна из команд забьет 1 мяч и наглухо закроется, равен почти $40\%$.
            2. **Мексика победит и тотал матча < 3.5** за хороший валуйный коэффициент.


            ## 5. Анализ общей информации

            Мексика за счет домашнего стадиона и сумасшедшего куража группового этапа зажмет Эквадор с первых минут. Высокогорье Мехико начнет сказываться на эквадорцах после 60-й минуты — держать мексиканский темп прессинга на такой высоте энергозатратно. Эквадор силен, победа над Германией заставит Мексику уважать соперника, поэтому Агирре откажется от авантюр. «Эль Три» будут методично расшатывать оборону гостей и искать свой единственный шанс.


            ## 6. Лучшие ставки на матч

            **1. Основной выбор: Мексика пройдет в 1/8 финала (Проход 1) (Коэффициент  1.65$)**
            - **Обоснование:** Максимально надежный кубковый вариант. Даже если Эквадор дотянет до экстра-таймов или пенальти, фактор стадиона и свежесть состава выведут хозяев дальше.

            **2. Вариант на основное время: Тотал голов Меньше 2.0 (Коэффициент  1.88$)**
            - **Обоснование:** При счетах 0:0 или 1:0 — ставка полностью играет, при ровно двух голах — будет возврат. Риск потери минимален.

            **3. Специфический валуй (для ординара): Победа Мексики в основное время (Коэффициент  2.28$)**
            - **Обоснование:** Расчетная вероятность победы хозяев на «Ацтеке» выше, чем заложено в букмекерских котировках.`
    
         },
        { id: 80, date: "Среда, 1 июля", time: "19:00", stadium: "Аталанта • Мерседес-Бенц", team1Code: "1L", team1Text: "Победитель Группы L", team2Code: "3E+", team2Text: "3-е место EHIJK", prob1: 76, probX: 16, prob2: 8, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Матч и статус:** 1/16 финала (Раунд 32) Чемпионата мира 2026 года. Первая стадия кубкового плей-офф — классическая игра на вылет. В случае ничейного результата в основное время регламентом предусмотрены два дополнительных тайма (экстра-таймы) и серия послематчевых пенальти.
            * **Поле и стадион:** «Atlanta Stadium» (Mercedes-Benz Stadium), Атланта, США. Сверхсовременная полностью закрытая арена с искусственным покрытием последнего поколения и автоматизированным климат-контролем. Внутри чаши поддерживается стабильная температура около **+22°C**, что полностью нивелирует фактор внешней погоды.
            * **Статус фаворита:** Сборная Англии идет безальтернативным фаворитом у букмекеров (коэффициент на итоговый проход в районе **1.13**, на чистую победу в основное время — около **1.30**).
            * **Исторический бэкграунд:** Англия — чемпионы мира (1966) и регулярные участники поздних стадий крупных турниров. ДР Конго сотворила сенсацию и пробилась в плей-офф мундиаля впервые в своей суверенной истории (до этого команда квалифицировалась лишь в далеком 1974 году под флагом Заира).

            ### 2. Рейтинги команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Англия стабильно удерживает позиции в Топ-5 мирового рейтинга (3-4 место). Сборная ДР Конго располагается во второй половине первой сотни — в районе 60-й строчки.
            * **Класс исполнителей:** По суммарной трансферной стоимости состава родоначальники футбола превосходят африканцев более чем в 8 раз. Лидеры англичан (Джуд Беллингем, Гарри Кейн, Деклан Райс) — признанные мировые суперзвезды. У ДР Конго большинство игроков представляют крепкие европейские клубы средней руки из АПЛ, Бундеслиги и Чемпионшипа.

            ### 3. Текущая игровая форма на групповом этапе ЧМ-2026
            * ** Англия:** Уверенно финишировала на 1-м месте в Группе L, набрав 7 очков. В стартовом туре в ярком стиле переиграли Хорватию (4:2), затем разгромили Панаму и прагматично засушили ничью со сборной Ганы (0:0). Подопечные Томаса Тухеля выглядят солидно и расчетливо.
            * ** ДР Конго:** Вышла в плей-офф с 3-го места Группы K (4 очка), став главным открытием квартета. Африканцы сенсационно отобрали очки у Португалии (1:1), минимально уступили мощной Колумбии (0:1) и проявили характер в решающем матче с Узбекистаном (3:1), вырвав историческую победу по ходу встречи.

            ### 4. Основная статистика турнира
            * **Англия:** Забила 7 мячей при 2 пропущенных. Атакующая линия вариативна, а оборонительный каркас после стартовой перестрелки с хорватами оформил два «сухих» поединка подряд.
            * **ДР Конго:** Оформила 4 забитых гола и пропустила 3. Сборная стабильно находила свои моменты у чужих ворот в 2 из 3 сыгранных туров групповой стадии.

            ### 5. Дополнительная статистика и тактические микротренды
            * **Территориальный контроль:** Англия — в лидерах мундиаля по контролю мяча с показателем в 65.3% (3-е место на турнире). ДР Конго имеет скромные 38.5% владения (38-е место), сознательно отказываясь от позиционного доминирования.
            * **Удары и стандарты:** Англия строит атаки через долгие, подготовленные розыгрыши. ДР Конго входит в число лучших команд ЧМ по эффективности и скорости вертикальных контратак. При этом защитная линия конголезцев во главе с Мбембой представляет колоссальную угрозу для соперников при розыгрыше собственных угловых.

            ### 6. История очных встреч (Head-to-Head)
            В официальных и товарищеских матчах на уровне национальных сборных эти команды никогда ранее в истории не пересекались. Нас ожидает абсолютный исторический дебют.

            ### 7. Тактико-стратегический рисунок
            * **Англия (Томас Тухель):** Системная модель 4-2-3-1 с жестким контролем игровой структуры. Высокий контрпрессинг, затяжное владение мячом и создание численных изоляций на флангах для Букайо Сака и Маркуса Рэшфорда. Стиль удушающий для команд-андердогов.
            * **ДР Конго (Себастьен Дезабр):** Трансформируемые схемы 4-3-3 или 4-2-3-1. Дезабр построил образцовый низкий блок. Команда действует строго вторым номером, уповая на реактивную скорость вингеров. Фирменный элемент — моментальный выход из обороны через длинные вертикальные забросы на ход форварду.

            ### 8. Кадровые новости и травмы
            * **Англия:** Зафиксирована ощутимая потеря в линии защиты — перспективный центрбек Джарелл Куанса получил травму в матче с Панамой. Его позицию вынужденно закроет Джед Спенс. Главные атакующие опции (Кейн, Беллингем, Райс) находятся в идеальных кондициях.
            * **ДР Конго:** Все ключевые исполнители готовы к бою. Оборонительные редуты цементируют Аарон Ван-Биссака, Аксель Туанзебе и опытный капитан Шансель Мбемба. На острие выйдет сыгранное трио: Мешак Элия, Седрик Бакамбу и Йоан Висса.

            ### 9. Индивидуальный перформанс лидеров
            * **Гарри Кейн:** Лучший бомбардир в истории сборной Англии на Чемпионатах мира (11 голов суммарно). Находится в оптимальном игровом тонусе.
            * **Эллиот Андерсон:** Настоящее открытие в составе англичан. Молодой хавбек лидирует в команде по числу продвигающих передач (30), возвратам владения (20) и проценту выигранных единоборств (24).
            * **Йоан Висса:** Нападающий набрал сумасшедший ход. Он записал на свой счет **75% всех голов ДР Конго** на текущем мундиале (3 из 4), отличаясь в среднем каждые 90 минут игрового времени.
            * **Бриан Сипенга:** Реактивный вингер конголезцев в матче против Узбекистана совершил 6 успешных обводок — один из лучших индивидуальных показателей группового этапа ЧМ.

            ### 10. Мотивационный вектор
            Бескомпромиссная стадия плей-офф. Для Англии потенциальный невыход в четвертьфинал от сборной из второй пятидесяти рейтинга — колоссальный национальный позор и спортивная катастрофа. Для ДР Конго — величайший исторический момент. Команда уже прыгнула выше головы, никакого психологического давления на игроков нет, что делает их смертельно опасными (ярким примером служит вылет Германии от Парагвая днем ранее).

            ### 11. Тренерский фактор
            * **Томас Тухель (Англия):** Немецкий специалист выдал феноменальный стартовый отрезок у руля сборной: 11 матчей подряд без поражений (10 побед, 1 ничья). Обладает колоссальным кубковым опытом и хладнокровием в матчах на выбывание.
            * **Себастьен Дезабр (ДР Конго):** Руководит африканским коллективом с 2022 года. Досконально знает менталитет местного футбола, выводил Конго в полуфинал КАН. Сыгранность состава под его началом находится на пике.

            ### 12. Аналитический консенсус рынка
            Букмекерский рынок единогласно прогнозирует легкий проход Англии. Однако ведущие футбольные аналитики предостерегают: на ЧМ-2026 тренд на сенсации от андердогов силен как никогда (турнир уже покинули Германия и Бельгия). Конго называют крайне «колючей» и физически мощной командой, которая заставит англичан помучиться.

            ### 13. Психологический контекст
            Внешнего давления на команду нет, но внутри Англии таблоиды жестко требуют от Тухеля более яркого и доминирующего футбола. За нулевую ничью с Ганой тренерский штаб подвергся серьезной критике за избыточный прагматизм.

            ### 14. Судейский фактор
            На поединки такого калибра традиционно назначаются строгие арбитражные бригады из зон УЕФА или КОНМЕБОЛ. В матчах на вылет общая планка допустимой борьбы обычно повышается, однако ДР Конго ввиду плотной и агрессивной игры в защите склонна к набору желтых карточек.


            ## 2) Футбольные метрики

            *Все статистические показатели нормализованы с учетом силы оппонентов на групповой стадии. Для удобства чтения на экранах смартфонов данные представлены в виде лаконичного списка.*

            * **xG / xA (Expected Goals / Ожидаемые голы и ассисты):**
            * Англия генерирует солидные **~1.95 xG** за матч благодаря высочайшему индивидуальному качеству моментов у Кейна и Беллингема. 
            * ДР Конго демонстрирует скромный показатель **~0.85 xG**, однако феноменальная реализация Йоана Висса (3 гола при xG около 1.2) полностью нивелирует эту разницу.
            * **xGOT (Ожидаемые голы с учетом точности ударов):**
            * У Англии данный параметр значительно выше. Исполнительское мастерство атакующей линии (Сака, Рэшфорд) позволяет наносить акцентированные удары высокой точности в створ ворот.
            * **Field Tilt (Наклон поля / Территориальное доминирование):**
            * Прогноз модели составляет **75% на 25%** в пользу Англии. Подавляющее большинство игрового времени поединок будет проходить исключительно на трети поля ДР Конго.
            * **Pass Completion Rate (Точность передач):**
            * Англия: **~88-90%** (демонстрируют уверенное позиционное, порой стерильное владение мячом).
            * ДР Конго: **~72%** (низкий процент обусловлен высокой долей вынужденных рискованных длинных передач вперед).
            * **PPDA (Интенсивность прессинга):**
            * Англия: **~8.5** (агрессивный, моментальный прессинг сразу в фазе потери мяча).
            * ДР Конго: **~16.0** (полный отказ от давления на чужой половине поля; конголезцы встречают оппонентов глубоким организованным блоком).
            * **Interceptions & Recoveries (Перехваты и подборы):**
            * Ожидаются аномально высокие защитные показатели у ДР Конго внутри собственной штрафной площади за счет самоотверженной игры Мбембы и Ван-Биссаки.


            ## 3) Расчёт матча методом Пуассона

            За математическую основу расчета взята атакующая мощность Англии (в среднем 2.33 гола за игру) и оборонительные показатели Конго на текущем ЧМ с учетом силы соперников.

            * **Лямбда Англии :** **1.85** (показатель скорректирован с учетом прочности защиты Конго, сдержавшей Португалию).
            * **Лямбда ДР Конго :** **0.65** (расчет математической модели на один результативный контрвыпад).

            Применив формулу Пуассона для основного времени матча, получаем следующие вероятности

            * **Вероятность победы Англии:** **68%**
            * **Вероятность ничейного исхода:** **20%**
            * **Вероятность победы ДР Конго:** **12%**
            * **Наиболее вероятные точные счета:** 2:0 (вероятность **~16%**), 1:0 (**~15%**), 3:0 (**~10%**), 1:1 (**~9%**).


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерские котировки на чистую победу Англии откровенно занижены (в районе **1.30**, что эквивалентно завышенным 77% вероятности). Математический метод Пуассона и недавний структурный пример сборной Ганы (показавшей, как организованный африканский блок может наглухо засушить англичан) определяют реальную вероятность успеха Англии в основное время на уровне 68%.

            > **Вывод модели:** Линия сильно перекошена в сторону легкого и сверхрезультативного разгрома со стороны фаворита. Истинный **Value Bet** лежит в плоскости низовых тоталов или плюсовой форы на африканский коллектив. Конго умеет образцово защищаться против топ-сборных (1:1 с Португалией, 0:1 с Колумбией), поэтому разгрома здесь не ожидается.


            ## 5) Итоговое аналитическое заключение

            Статус кубкового матча на вылет наложит серьезный отпечаток на сценарий встречи. Томас Тухель не станет форсировать события и не побежит вперед всей командой, памятуя о недавней осечке сборной Германии. Себастьен Дезабр выстроит монументальный оборонительный редут с Ван-Биссакой и Мбембой, взломать который в позиционных атаках — тяжелый труд. 

            Англия заберет мяч под тотальный контроль, но стартовый взлом Конго займет много времени. Если родоначальникам футбола не удастся оформить быстрый гол, поединок превратится в вязкое, тягучее противостояние. Главная опасность для англичан — стандарты соперника и феноменальная игровая форма Йоана Висса.


            ## 6) Лучшие варианты для ставок на матч

            Опираясь на кубковый статус поединка, прагматичный стиль Томаса Тухеля и защитные метрики андердога, наиболее перспективными являются следующие выборы:

            * **🎯 Основной выбор (Value): Фора ДР Конго (+1.5) за коэффициент в районе 1.85 – 1.90.**
            Конголезцы организованно обороняются и практически никогда не проигрывают крупно топ-соперникам. Англия под руководством Тухеля в плей-офф предпочтет прагматичные, гроссмейстерские 1:0 или 2:0 без неоправданного риска.
            * **🎯 Консервативный выбор: Тотал Меньше 2.5 голов за коэффициент около 1.95.**
            В основное время кубкового матча на вылет команды едва ли станут устраивать открытую перестрелку. Защита Конго и системность Англии благоволят низовому сценарию.
            * **🎯 Статистический тренд: Процент владения мячом: Англия Тотал Больше 62.5% за коэффициент ~1.75.**
            ДР Конго абсолютно сознательно отдаст инициативу и игровое снаряды фавориту со стартовых минут, как они это делали во всех предыдущих поединках против грандов.`
    
         },
        { id: 81, date: "Среда, 1 июля", time: "23:00", stadium: "Сиэтл • Люмен Филд", team1Code: "1G", team1Text: "Победитель Группы G", team2Code: "3A+", team2Text: "3-е место AEHIJ", prob1: 48, probX: 29, prob2: 23, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Матч и статус:** 1/16 финала Чемпионата мира 2026 года. Первая стадия кубкового раунда плей-офф — классический поединок на выбывание. При ничейном исходе в основное время назначаются два дополнительных тайма (экстра-таймы) и последующая серия послематчевых пенальти.
            * **Локация и стадион:** «Seattle Stadium» (Lumen Field), Сиэтл, Вашингтон, США. Открытая футбольная арена экстра-класса с искусственным покрытием последнего поколения. 
            * **Климатические условия:** Конец июня, мягкое американское лето на Северо-Западе. Ожидается максимально комфортная погода без экстремальных температурных скачков. Фактор изнуряющей жары полностью исключен.
            * **Статус фаворита:** Букмекерская линия определяет сборную Бельгии умеренным фаворитом встречи: коэффициент на итоговый проход составляет около **1.55**, на чистую победу по итогам 90 минут матча — в районе **2.15**. Сенегал выступает в роли крайне опасного и взрывного кубкового андердога.
            * **Исторический бэкграунд:** Бельгийцы — стабильные завсегдатаи поздних стадий плей-офф (обладатели бронзовых медалей ЧМ-2018). Сенегал имеет в своем историческом активе легендарный четвертьфинал ЧМ-2002, а на предыдущем мундиале в Катаре уверенно дошел до стадии 1/8 финала.

            ### 2. Рейтинги команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Сборная Бельгии удерживает позиции в мировой десятке сильнейших (10-е место). Сенегал заслуженно считается одним из главных доминаторов африканского континента и располагается на 18-й строчке. Статистический разрыв между оппонентами минимален.
            * **Класс исполнителей:** По суммарной капитализации состава «Красные дьяволы» идут впереди благодаря россыпи суперзвезд АПЛ и Серии А (Кевин Де Брёйне, Жереми Доку, Леандро Троссард). Однако ростер «Львов Теранги» также под завязку укомплектован элитными игроками мирового уровня (Калиду Кулибали, Николас Джексон, Исмаила Сарр, Садио Мане).

            ### 3. Текущая игровая форма на групповом этапе ЧМ-2026
            * ** Бельгия:** Завоевала 1-е место в Группе G, набрав 5 очков. Команда начинала турнирный путь достаточно тяжело и академично, расписав прагматичные ничьи с Египтом (1:1) и Ираном (0:0). Однако в решающем туре бельгийцы поймали колоссальный кураж, тотально уничтожив Новую Зеландию со счетом 5:1.
            * ** Сенегал:** Квалифицировался в плей-офф с 3-го места Группы I (3 очка), пройдя буквально по лезвию бритвы. Африканцы потерпели два болезненных поражения на старте от европейских тяжеловесов — Франции (1:3) и Норвегии (2:3). Команда спаслась в заключительном туре, разгромив Ирак (5:0), что позволило пройти дальше за счет превосходной разницы мячей (+2).

            ### 4. Основная статистика турнира
            * **Бельгия:** Оформила 6 забитых мячей при 2 пропущенных. Оборонительный каркас выглядит монументально и организованно, дав сбой всего дважды за три прошедших тура.
            * **Сенегал:** Забил 8 голов и пропустил 6. Сенегальцы стали самой результативной и одновременно самой пропускающей командой среди всех коллективов, пробившихся в плей-офф с третьих мест. Наблюдается колоссальный тактический крен в сторону атакующих действий.

            ### 5. Дополнительная статистика и игровые микротренды
            * **Территориальный контроль:** Бельгия планомерно диктует темп и забирает мяч (в среднем ~58% владения). Сенегал действует подчеркнуто вертикально, не зацикливаясь на стерильном пасе в центре поля (~46% владения), и делает ставку на взрывные фланговые прорывы.
            * **Удары и стандарты:** Сенегальцы активно используют дальнюю артиллерию и плотные удары из-за пределов штрафной (в этом компоненте выделяется Папа Гей). Бельгия, в свою очередь, демонстрирует высочайший процент точности ключевых передач в финальную треть поля благодаря гениальному диспетчерскому видению Де Брёйне.

            ### 6. История очных встреч (Head-to-Head)
            В официальных турнирах или товарищеских поединках на уровне главных сборных эти национальные команды ранее никогда в истории не пересекались. Предстоящий кубковый матч — абсолютно чистый лист.

            ### 7. Тактико-стратегический рисунок
            * **Бельгия (Руди Гарсия):** Системная атакующая модель 4-2-3-1 с акцентом на тотальное доминирование и создание изоляций на флангах, где соперников за счет дриблинга разрывает реактивный Жереми Доку. В полуфланговых зонах игру гроссмейстерски ведет Кевин Де Брёйне. Стиль сбалансированный, но уязвимый к быстрым контратакам.
            * **Сенегал (Пап Тиав):** Классическая модель 4-3-3, опирающаяся на внушительное физическое превосходство, атлетизм в центре поля и агрессивный прессинг. Главная уязвимость Сенегала — серьезные провалы в фазе оборонительного транзита (перехода из атаки в защиту), за что их жестко наказали дисциплинированные французы и норвежцы.

            ### 8. Кадровые новости и травмы
            * **Бельгия:** К knockout-раунду европейцы подходят в идеальном кадровом сочетании. Весь боевой авангард (Куртуа, Теате, Тилеманс, Де Брёйне, Троссард) находится в строю. Опытный бомбардир Ромелу Лукаку сейчас эффективно используется тренерским штабом в роли элитного «суперсаба», выходящего уничтожать уставших защитников соперника под занавес встречи.
            * **Сенегал:** Накануне матча пришла катастрофическая новость из стана африканцев — основной голкипер Эдуар Менди получил тяжелую травму колена и полностью пропустит остаток турнира. В воротах его вынужден заменить неопытный Сени Дианг. Оборонительные редуты по-прежнему возглавляет Кулибали, а в атаке сыграно мощное трио в лице Джексона, Сарра и Мане.

            ### 9. Индивидуальный перформанс лидеров
            * **Кевин Де Брёйне:** 34-летний маэстро безупречно ведет всю атакующую игру сборной Бельгии. Имеет колоссальный опыт (122 матча за национальную команду) и отметился роскошным голом в ворота Новой Зеландии.
            * **Леандро Троссард:** Оформил убедительный дубль в крайнем туре, находится в праймовой игровой форме после завоевания чемпионского титула АПЛ в составе лондонского «Арсенала».
            * **Исмаила Сарр:** Ключевая атакующая угроза в составе «Львов Теранги». Вингер наколотил уже 3 гола в 3 матчах на текущем турнире.
            * **Папа Гей:** Записал на свой счет 2 гола и 1 ассист в поединке против Ирака, являясь абсолютным лидером центра поля по продвижению мяча.

            ### 10. Мотивационный вектор
            Стадия плей-офф не прощает ошибок. Бельгия одержима идеей реабилитироваться перед болельщиками за провал на ЧМ-2022 (где команда сенсационно не вышла из группы). Сенегал действует на запредельном эмоциональном фоне: они пережили драму на Кубке Африки ранее в этом году, вылезли из тяжелейшей ситуации в группе и теперь чувствуют себя раскрепощенно — терять им абсолютно нечего.

            ### 11. Тренерский фактор
            * **Руди Гарсия (Бельгия):** Прагматичный и умудренный опытом кубковый стратег, умеющий ювелирно выстраивать баланс сил в краткосрочных турнирах на вылет.
            * **Пап Тиав (Сенегал):** Экс-игрок легендарной сборной Сенегала образца 2002 года. Превосходный психолог и мотиватор, однако тактически заметно уступил своим визави в поединках против системных европейских команд на групповом этапе.

            ### 12. Аналитический консенсус рынка
            Подавляющее большинство футбольных аналитиков сходится во мнении, что внезапная потеря Эдуара Менди станет ключевым деструктивным фактором для сенегальской обороны против мощной бельгийской атаки. Букмекеры предлагают на чистую победу Бельгии отличный рабочий коэффициент **2.15**, параллельно ожидая проход маркета «Обе забьют — Да».

            ### 13. Специфический контекст
            Внутренний инсайд: защитник бельгийцев Зено Дебаст в интервью открыто признался, что тренерский штаб целенаправленно готовился к тактической модели Южной Кореи, однако из-за сложной перетасовки третьих мест в последний момент Бельгия получила в соперники Сенегал. Фактор внезапной смены оппонента может наложить отпечаток на дебют встречи.

            ### 14. Судейский фактор
            Поединок плей-офф будет обслуживаться строгой судейской бригадой. Сенегал проповедует подчеркнуто плотный, агрессивный и физический футбол, что создает высочайший риск обилия мелких фолов и частых предупреждений в опорной зоне африканцев.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе. Для максимального удобства чтения на экранах мобильных устройств параметры представлены в виде лаконичного списка.*

            * **xG / xA (Expected Goals / Ожидаемые голы и ассисты):**
            * Бельгия имеет стабильный системный показатель **~1.80 xG** за матч, уверенно конвертируя территориальное доминирование в опасные моменты.
            * Сенегал существенно завысил свой суммарный xG за счет разгрома Ирака, однако в поединках с топ-сборными Европы (Франция, Норвегия) их атакующий показатель падал до скромных **1.10 xG**.
            * **xGOT (Ожидаемые голы с учетом точности ударов в створ):**
            * У Бельгии эта метрика существенно выше. Исполнительское мастерство Леандро Троссарда и стандарты Кевина Де Брёйне позволяют наносить прицельные обводящие удары высшей категории сложности.
            * **Field Tilt (Наклон поля / Доля владения в финальной трети):**
            * Прогноз математической модели составляет **60% на 40%** в пользу Бельгии. «Красные дьяволы» зажмут соперника на его трети поля через постоянные фланговые изоляции Жереми Доку.
            * **Pass Completion Rate (Точность передач):**
            * Бельгия: **~86%** (демонстрируют культуру паса и уверенный контроль мяча).
            * Сенегал: **~76%** (африканцы регулярно грешат браком и невынужденными потерями при попытках выхода из-под интенсивного прессинга).
            * **PPDA (Интенсивность прессинга):**
            * Бельгия включает умеренное давление на отметке **~11.2**. Сенегал предпочитает защищаться средним блоком, уповая на индивидуальные перехваты и физическую мощь Кулибали непосредственно внутри штрафной площади.
            * **Оборонительный транзит (Переход из атаки в защиту):**
            * Статистически самая слабая и проблемная метрика сборной Сенегала. При потере мяча в финальной трети игроки не успевают тактически перестраиваться, оставляя огромные свободные зоны для разящих контратак соперника.


            ## 3) Расчёт матча методом Пуассона

            Учитывая возросший атакующий потенциал Бельгии (5 забитых мячей в крайнем туре) и критическое отсутствие основного голкипера в составе Сенегала, математическая модель закладывает высокую вероятность пробития оборонительных редутов африканской сборной.

            * **Лямбда Бельгии :** **2.10**
            * **Лямбда Сенегала :** **1.15**

            Применив формулу распределения Пуассона для основного времени матча, получаем следующие вероятности

            * **Суммарная вероятность победы Бельгии:** **56%**
            * **Суммарная вероятность ничейного исхода:** **23%**
            * **Суммарная вероятность победы Сенегала:** **21%**
            * **Наиболее вероятные варианты точного счета:** 2:1 (вероятность **~12%**), 2:0 (**~11%**), 1:1 (**~10%**), 3:1 (**~8%**).


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерские конторы выставили на чистую победу Бельгии в основное время очень вальяжный и привлекательный коэффициент **2.15**. С учетом тяжелейшей кадровой потери в лице Менди и того, какими пачками Сенегал пропускал от организованных европейских сборных (Франция и Норвегия суммарно отгрузили им 6 мячей), победа Бельгии выглядит сверхоптимально.

            > **Вывод модели:** Вероятность успеха бельгийцев оценена букмекерами ощутимо ниже, чем показывает честная математическая модель с учетом кадрового кризиса в Сенегале. Исход **Победитель матча: Бельгия (П1) за коэффициент выше 2.10** является чистокровным, хрестоматийным **VALUE BET**.


            ## 5) Итоговое аналитическое заключение

            Статус кубкового матча на вылет неизбежно заставит обе команды осторожничать на первых минутах, однако Сенегал ментально и стилистически просто не умеет долго и монотонно «сушить» игру. Рано или поздно вертикальный футбол африканцев оголит зоны. 

            Отсутствие Менди на последнем рубеже заставит защитников Сенегала инстинктивно садиться глубже к своим воротам, что подарит оперативную свободу Кевину Де Брёйне в зоне перед штрафной площадью. Бельгия на данном этапе выглядит куда более сбалансированной, хладнокровной и готовой кубковой машиной.


            ## 6) Лучшие варианты для ставок на матч

            Опираясь на глубокий математический анализ, продвинутые метрики и кадровые проблемы андердога, наиболее перспективными являются три следующих выбора:

            * **🎯 Основной выбор: Чистая победа Бельгии (П1) в основное время за коэффициент ~2.15.**
            Явный валуй на фаворита, набравшего мощный ход, против обескровленной и системно ошибающейся защиты соперника, оставшегося без элитного голкипера.
            * **🎯 Альтернативный выбор: Тотал матча Больше 2.5 голов за коэффициент ~2.16.**
            Оба коллектива в крайнем туре группового этапа отгрузили своим оппонентам ровно по 5 мячей. Атака команд в огне, а защитные порядки Сенегала регулярно допускают результативные сбои.
            * **🎯 Статистический тренд: Индивидуальный Тотал Бельгии Больше 1.5 голов за коэффициент ~1.95.**
            Связка Де Брёйне, Доку и Троссарда находится в идеальном тонусе и способна вскрыть неопытного дублера Эдуара Менди минимум дважды за 90 минут игры.`
    
         },
        { id: 82, date: "Четверг, 2 июля", time: "03:00", stadium: "Сан-Франциско • Левайс", team1Code: "1D", team1Text: "Победитель Группы D", team2Code: "3B+", team2Text: "3-е место BEFIJ", prob1: 53, probX: 27, prob2: 20, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Матч и статус:** 1/16 финала (Раунд 32) Чемпионата мира 2026 года. Бескомпромиссный матч на вылет — проигравшая сторона мгновенно покидает главный футбольный форум планеты. В случае ничейного результата в основное время регламентом предусмотрены два дополнительных тайма (экстра-таймы) и серия послематчевых пенальти.
            * **Поле и стадион:** «San Francisco Bay Area Stadium» / «Levi’s Stadium» (Санта-Клара, Калифорния). Знаменитая открытая арена с идеальным натуральным газоном высочайшего качества. 
            * **Климатические условия:** Типичное калифорнийское лето. Ожидается максимально комфортная погода без экстремальной субтропической влажности, что гарантирует высокий темп игры.
            * **Статус фаворита:** Сборная США идет безоговорочным и безальтернативным фаворитом поединка на правах хозяйки турнира. Букмекерская линия предлагает на победу американцев в основное время скромный коэффициент около **1.40** ($-250$). На сенсационный триумф Боснии дают внушительные **+800**.
            * **Исторический бэкграунд:** США являются регулярными участниками кубковых стадий мундиалей (уверенно выходили в 1/8 финала в 2010, 2014 и 2022 годах). Для Боснии и Герцеговины текущий выход в плей-офф — первый и абсолютно исторический в летописи сборной (на своем единственном ЧМ-2014 они вылетели еще на групповой стадии).

            ### 2. Рейтинг команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Американцы вплотную подобрались к заветной десятке сильнейших сборных мира. Босния и Герцеговина располагается на 61-м месте, поднявшись на 3 строчки вверх благодаря успешному перформансу на групповом этапе.
            * **Класс исполнителей:** По суммарной трансферной стоимости состава «Звездно-полосатые» превосходят балканцев в разы. Подавляющее большинство американских футболистов представляют клубы Лиги чемпионов и европейских топ-5 лиг («Милан», «Ювентус», «Монако»). Боснийский ростер укомплектован скромнее, но имеет крепкий сыгранный костяк из Серии А, Бундеслиги и чемпионата Чехии.

            ### 3. Текущая игровая форма на групповом этапе ЧМ-2026
            * **🇺🇸 США:** Завоевали 1-е место в Группы D, набрав 6 очков. Американцы выдали мощнейший стартовый спурт, поочередно переиграв Парагвай (4:1) и Австралию (2:0). В заключительном туре, досрочно обеспечив себе путевку в плей-офф, Маурисио Почеттино применил глубокую ротацию состава, что привело к поражению от Турции (2:3). Лидеры команды свежи и мотивированы.
            * **🇧🇦 Босния и Герцеговина:** Пробилась в раунд knockout с 3-го места Группы B (4 очка), проявив характер. Балканцы вырвали тяжелейшую ничью у сохозяев турнира из Канады (1:1), крупно уступили Швейцарии (1:4), но в решающем «матче жизни» хладнокровно переиграли Катар (3:1).

            ### 4. Основная статистика турнира
            * **США:** Забили 8 голов при 4 пропущенных. Атакующий механизм функционирует как швейцарские часы, однако три пропущенных мяча от турок наглядно подсветили локальные проблемы с концентрацией в оборонительной линии.
            * **Босния и Герцеговина:** Оформили 5 забитых мячей и пропустили 6. Защитные порядки стабильно дают результативные сбои, пропуская абсолютно во всех сыгранных турах.

            ### 5. Дополнительная статистика и тактические микротренды
            * **Территориальный контроль:** США под руководством Почеттино стремятся тотально диктовать темп матча и забирать игровой снаряд под свой контроль (в среднем ~60% владения). Босния предпочитает силовой, плотный футбол с использованием длинных вертикальных передач (~44% владения).
            * **Удары и стандарты:** Американцы лидируют на турнире по количеству успешных входов в чужую штрафную площадь через фланговый индивидуальный дриблинг. Босния, напротив, представляет колоссальную угрозу на «втором этаже» благодаря внушительным габаритам защитников и феноменальному кубковому опыту Джеко.

            ### 6. История очных встреч (Head-to-Head)
            В рамках официальных международных турниров эти сборные ранее никогда в истории не пересекались. В статистическом активе команд значатся лишь 3 товарищеских поединка: 2 победы праздновали США и 1 встреча завершилась вничью. Боснийцы американцев еще ни разу не обыгрывали.

            ### 7. Тактико-стратегический рисунок
            * **США (Маурисио Почеттино):** Агрессивная и сверхинтенсивная модель 4-2-3-1 с мгновенным высоким прессингом и реактивным оборонительным транзитом. Ключевая тактическая фишка — регулярные смещения Кристиана Пулишича в левое полупространство, что освобождает всю бровку для стремительных подключений латераля Энтони Робинсона.
            * **Босния и Герцеговина (Сергей Барбарез):** Плотный, низкий оборонительный блок по схеме 3-5-2 или 5-3-2. В плей-офф Босния предсказуемо сядет в глубокую защиту. Главное оружие — использование фланговых защитников (в частности, Дедича) для моментальной доставки мяча вперед в надежде на зацеп, качественную игру корпусом Эдина Джеко и быструю контратаку.

            ### 8. Кадровые новости и составы
            * **США:** Главная звезда Кристиан Пулишич полностью здоров и находится на пике кондиций. В опорной зоне воссоздана идеальная сыгранная связка Маккенни — Адамс. На острие атаки с первых минут выйдет праймовый Фоларин Балогун. Потерь нет.
            * **Босния и Герцеговина:** Огромный позитивный импульс для команды — возвращение в стартовый состав после дисквалификации ключевого 23-летнего центрбека Тарика Мухаремовича («Сассуоло»). Его жесткости критически не хватало в проигранном матче со Швейцарией. Оборону также будут цементировать опытный Сеад Колашинац («Аталанта») и Никола Катич.

            ### 9. Индивидуальный перформанс лидеров
            * **Фоларин Балогун (США):** Настоящее атакующее открытие американцев на домашнем мундиале. Нападающий оформил 2 гола на групповом этапе и находится в потрясающей физической форме.
            * **Кристиан Пулишич (США):** Креативное сердце и ментальный лидер команды. Занимает первое место по числу созданных явных голевых моментов (Big Chances Created) в составе хозяев.
            * **Эрмин Махмич (Босния):** 21-летний яркий талант из «Слована», неожиданно ставший лучшим бомбардиром боснийцев на турнире (2 гола в группе).
            * **Эдин Джеко (Босния):** 40-летняя легенда мирового футбола. Официально заявил, что это его прощальный ЧМ. Нападающий потерял в дистанционной скорости, но его позиционное чутье, игра в подыгрыше и работа корпусом остаются элитными.

            ### 10. Мотивационный вектор
            Для США это первый домашний матч плей-офф Чемпионата мира со времен легендарного ЧМ-1994. Давление трибун и местных медиа колоссальное, вся страна ждет от Почеттино первого с 2002 года выхода в четвертьфинал. Босния же свою главную задачу выполнила и уже сотворила историю. Балканцы ментально расслаблены, а статус скрытого андердога снимает с них груз ответственности.

            ### 11. Тренерский фактор
            * **Маурисио Почеттино (США):** Специалист топ-уровня, сумевший в кратчайшие сроки привить талантливой и эмоциональной американской молодежи жесткую системность и менталитет победителей. Обладает гигантским опытом больших кубковых матчей в Европе.
            * **Сергей Барбарез (Босния):** Культовая фигура боснийского футбола. Не имеет за плечами огромного тренерского бэкграунда, но является непререкаемым авторитетом для раздевалки, выведя сыгранность и самоотдачу команды на исторический максимум.

            ### 12. Аналитический консенсус рынка
            Все ведущие североамериканские спортивные медиа (ESPN, CBS) прогнозируют уверенный и легкий проход хозяев. Однако независимые футбольные эксперты обращают внимание на исторический тренд: сборная США традиционно тяжело взламывает организованные европейские оборонительные блоки в плей-офф ЧМ (вспоминаются болезненные вылеты от Нидерландов в 2022-м и Бельгии в 2014-м).

            ### 13. Специфический медиа-сюжет
            Особый драматизм поединка закручен вокруг вингера сборной Боснии Эсмира Байрактаревича. Молодой футболист родился в США, успешно выступает в МЛС за «Нью-Инглэнд Революшн», но в 2024 году принял окончательное решение защищать цвета исторической родины своих родителей. Для него этот матч плей-офф — главная личная драма жизни.

            ### 14. Судейский фактор
            На кубковой стадии 1/16 финала ожидается строгий арбитраж. Сборная Боснии традиционно действует подчеркнуто жестко, «в кость». Обилие тактических фолов со стороны балканцев для сдерживания реактивных флангов США неизбежно приведет к ранним желтым карточкам.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе ЧМ-2026. Для удобства чтения на экранах смартфонов параметры разбиты на лаконичный список.*

            * **xG / xA (Expected Goals / Ожидаемые голы и ассисты):**
            * США генерируют мощнейшие системные **~2.10 xG** за матч. Балогун и Вестон Маккенни великолепно находят свободные зоны, в том числе при розыгрыше стандартов.
            * У Боснии показатель ощутимо скромнее — **~1.05 xG**, причем львиная доля этой метрики была аккумулирована в поединке против слабого Катара.
            * **xGOT (Ожидаемые голы с учетом точности ударов в створ):**
            * Точность американских футболистов на домашнем турнире аномально высока. Фактор бешеной куражной поддержки трибун заставляет игроков реализовывать даже неочевидные моменты.
            * **Field Tilt (Наклон поля / Доля владения в финальной трети):**
            * Математическая модель прогнозирует тотальное территориальное преимущество США — в районе **70% на 30%**. Поединок практически целиком пройдет на трети поля Боснии.
            * **Pass Completion Rate (Точность передач):**
            * США стабильно держат высокую планку в **85-87%** точных пасов (культура владения Почеттино).
            * Босния из-за вертикального стиля, спешки и постоянных верховых забросов на Джеко имеет скромные **~73%**.
            * **PPDA (Интенсивность прессинга):**
            * Американцы при Почеттино буквально душат оппонентов сразу в момент потери мяча — PPDA колеблется на элитной отметке в районе **9.0**. Босния высоко прессинговать не станет (PPDA $> 15.5$), заблокировав подходы в своей трети поля.
            * **Interceptions & Recoveries (Перехваты и подборы):**
            * Возвращение в строй Мухаремовича поднимет защитную метрику перехватов Боснии внутри собственной штрафной площади до пиковых значений текущего мундиаля.
            * **Комплексные модели оценки (PV / VAEP):**
            * Модели ценности владения показывают, что ключевая атакующая угроза США исходит из зон левого фланга (Энтони Робинсон) и центральных включений из глубины от Маккенни. Тепловая карта Боснии наглядно отобразит глубокий оборонительный замок вокруг штрафной площади.


            ## 3) Расчёт матча методом Пуассона

            Для математического расчета взята атакующая мощность сборной США на домашнем турнире и оборонительные показатели Боснии с обязательным учетом возвращения их лидера защиты.

            * **Лямбда США :** **2.15** (фактор домашней арены, высокий прессинг и атакующий потенциал).
            * **Лямбда Боснии :** **0.75** (расчет модели на элитный навык Джеко при стандарте или контратаке).

            Применив формулу распределения Пуассона для основного времени матча, получаем следующие вероятности исходов:

            * **Вероятность победы США:** **69%**
            * **Вероятность ничейного исхода (овертайм):** **19%**
            * **Вероятность победы Боснии:** **12%**
            * **Наиболее вероятные варианты точного счета:** 2:0 (вероятность **~15.5%**), 2:1 (**~13%**), 1:0 (**~12.5%**), 3:0 (**~11%**).


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерские конторы под давлением общественного мнения сильно просадили коэффициент на чистую победу США в основное время (около **1.40**). Инвестировать средства в данный исход на дистанции экономически невыгодно. Босния — ментально крепкая европейская сборная, прошедшая в квалификации Италию и Уэльс. С возвращением Мухаремовича они костьми лягут у своих ворот.

            > **Вывод модели:** Букмекеры необоснованно ждут легкого разгрома на фоне недавней осечки Боснии со Швейцарией. Но это плей-офф, и балканцы умеют закрываться наглухо. Настоящий **VALUE BET** лежит в плоскости плюсовой форы на Боснию или низового тотала, так как США вряд ли станут бездумно рисковать в матче на вылет.


            ## 5) Итоговое аналитическое заключение

            Сборная США объективно сильнее, свежее и играет при сумасшедшей домашней поддержке стотысячных трибун. Однако Босния — это классическая, неудобная европейская команда, заточенная «на удержание». Балканцы не побегут атаковать первыми. 

            Американцам придется методично и долго взламывать тройку массивных центральных защитников во главе с Колашинацем. Если США не забьют быстрый гол в первые 20 минут матча, игра неизбежно станет нервной, вязкой и пойдет до первой ошибки. Маурисио Почеттино сделает ставку на прагматичный контроль мяча, дабы исключить малейший шанс на разящую контратаку в исполнении Джеко.


            ## 6) Лучшие варианты для ставок на матч

            Опираясь на глубокий тактический анализ, продвинутые метрики и контекст кубковой стадии 1/16 финала, наиболее перспективными являются следующие выборы:

            * **🎯 Основной выбор (Value): Фора Боснии и Герцеговины (+1.5) за коэффициент в районе 1.75 – 1.82.**
            Босния сделает все, чтобы не уступить крупно в своем историческом поединке плей-офф. Возвращение лидера обороны Мухаремовича добавит балканцам необходимой надежности и плотности у своих ворот.
            * **🎯 Альтернативный выбор: Тотал матча Меньше 2.5 голов за коэффициент около 2.05.**
            Матчи на вылет для хозяев ЧМ всегда сопряжены с колоссальным психологическим стрессом. США предпочтут прагматичную, сухую победу на классе (например, 1:0 или 2:0) без излишних авантюр в обороне.
            * **🎯 Статистический тренд: Тотал желтых карточек Боснии Больше 2.5 за коэффициент ~1.85.**
            Сдерживать реактивного Пулишича, Балогуна и стремительные фланговые прорывы США балканским защитникам придется исключительно ценой частых тактических фолов, срыва атак и жесткости.`
    
         },
        { id: 83, date: "Четверг, 2 июля", time: "22:00", stadium: "Лос-Анджелес • Соу-Фай", team1Code: "1H", team1Text: "Победитель Группы H", team2Code: "2J", team2Text: "2-е место Группы J", prob1: 58, probX: 25, prob2: 17, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Матч и статус:** 1/16 финала Чемпионата мира 2026 года. Первая стадия кубкового плей-офф (Раунд 32) — классический поединок на выбывание, где цена малейшей ошибки максимальна. Регламентом предусмотрены два дополнительных тайма (экстра-таймы) и серия послематчевых пенальти в случае ничейного исхода в основное время.
            * **Локация и стадион:** Один из ключевых стадионов мундиаля на территории США. Матч имеет статус поединка на нейтральном поле.
            * **Климатические условия:** Умеренная влажность, игра назначена на вечернее время. Это полностью нивелирует фактор дневной американской жары и позволит командам поддерживать высокую динамику.
            * **Статус фаворита:** Сборная Испании идет безоговорочным фаворитом как по мнению ведущих спортивных аналитиков, так и согласно котировкам букмекерских контор.
            * **Исторический бэкграунд:** «Красная фурия» — чемпионы мира (2010), действующие чемпионы Европы (2024), обладающие колоссальным кубковым опытом. Австрия регулярно пробивается в плей-офф крупных международных турниров, но исторически редко заходит далеко по сетке.

            ### 2. Рейтинг команд и футболистов
            * **Табель о рангах FIFA:** Испания стабильно удерживает позиции в Топ-3 мирового рейтинга (3-е место). Австрия располагается во втором десятке, занимая вполне респектабельную 22-ю строчку.
            * **Класс исполнителей:** По суммарной рыночной стоимости состава пиренейцы превосходят австрийский ростер почти в 3 раза. Средний персональный рейтинг игроков Испании в ведущих статистических базах (Whoscored/FotMob) составляет **7.45**, в то время как у Австрии этот показатель зафиксирован на отметке **6.85**.

            ### 3. Текущая игровая форма на групповом этапе ЧМ-2026
            * ** Испания:** Уверенно завоевала 1-е место в своей группе. Команда одержала 2 победы при тотальном игровом доминировании и прагматично сыграла вничью в третьем туре, когда Луис де ла Фуэнте применил частичную ротацию. Состав выглядит свежим, позиционная атака работает без сбоев.
            * ** Австрия:** Пробилась в раунд knockout со 2-го места. Австрийцы знатно потрепали нервы фаворитам своей группы и продемонстрировали фирменный сверхинтенсивный прессинг: 1 победа, 1 ничья и 1 минимальное поражение в абсолютно равной борьбе. Команда физически готова на 110%.

            ### 4. Основная статистика турнира
            * **Испания:** Забивает в среднем 2.1 гола за матч, пропуская при этом всего 0.4 мяча за игру. Территориальный контроль пиренейцев монументален — владение мячом не опускается ниже 62%.
            * **Австрия:** Демонстрирует среднюю результативность на уровне 1.3 забитых гола при 1.1 пропущенных за встречу. Австрийцы сознательно делают ключевую ставку на реактивные переходные фазы.

            ### 5. Дополнительная статистика и игровые микротренды
            * **Угловые удары:** Зафиксировано ощутимое преимущество фаворита — в среднем 6.5 корнеров за матч у Испании против 4.2 у Австрии.
            * **Удары (всего / в створ):** Испания производит колоссальное количество атакующих действий (**15.5 / 6.2** в среднем за игру). Австрия бьет реже, но конкретнее (**11.2 / 3.8**).
            * **Дисциплинарный подтекст:** Австрийцы получают значительно больше предупреждений из-за агрессивной тактики мелкого фола при высоком давлении (в среднем 2.6 желтых карточек за игру против 1.4 у техничной Испании).

            ### 6. История очных встреч (Head-to-Head)
            Исторический перевес целиком и полностью на стороне Испании. Последние официальные поединки в рамках отборочных циклов и Лиги Наций неизменно заканчивались либо уверенными победами пиренейцев, либо вязкими ничьими, в которых Австрия умышленно «сушила» игру в низком блоке.

            ### 7. Тактико-стратегический рисунок
            * **Испания (Луис де ла Фуэнте):** Классическая атакующая модель 4-3-3 с контролем мяча, но с выраженной вертикализацией через взрывные фланги, где действуют Ламин Ямаль и Нико Уильямс. Команда держит высокую линию обороны и включает образцовый контрпрессинг сразу после потери. Главная уязвимость — свободные зоны за спинами защитников при быстрых контратаках.
            * **Австрия (Ральф Рангник):** Фирменный стиль "Gegenpressing" в рамках схем 4-2-3-1 или 4-4-2 с ромбом в центре. Экстремально высокая интенсивность, вертикальные передачи вперед сразу в секунду отбора, минуя затяжной розыгрыш в центре поля. Фишка — умышленный перегруз зоны мяча. Проблема — функциональный спад и риск «выдохнуться» к 75-й минуте.

            ### 8. Составы, травмы и ротация
            * **Испания:** Весь фундаментальный костяк (Родри, Педри, Ямаль) находится в идеальном здравии. Травмированных среди железных игроков основы нет. Важно, что в третьем туре группового этапа ключевые лидеры получили полноценный отдых.
            * **Австрия:** Зафиксирована неприятная потеря важного игрока ротации в линии полузащиты из-за перебора желтых карточек. При этом главные ментальные лидеры (Марсель Забитцер, Конрад Лаймер) полностью готовы появиться на поле с первых минут.

            ### 9. Индивидуальный перформанс лидеров
            * **Ламин Ямаль:** Юный вингер находится на абсолютном пике игровой формы. Он является текущим лидером Чемпионата мира по числу созданных явных голевых моментов (Big Chances Created).
            * **Родри:** Метроном и теневой претендент на Золотой мяч, который железной рукой цементирует центр поля и управляет темпом игры.
            * **Марсель Забитцер:** Главный мотор австрийской сборной. Хавбек пробегает наибольшую дистанцию в команде и лидирует по метрике ожидаемых ассистов (xA).

            ### 10. Мотивационный вектор
            Стадия 1/16 финала накладывает колоссальную ответственность. Страх вылета заставит коллективы действовать прагматично, особенно во второй половине встречи. Для Испании невыход в 1/8 финала — национальная спортивная катастрофа. Для Австрии — уникальный шанс совершить исторический апсет турнира.

            ### 11. Тренерский фактор
            * **Луис де ла Фуэнте (Испания):** Триумфатор Евро-2024. Ювелирно знает возможности молодежи, так как прошел с ними все ступени юношеских сборных. Сыгранность состава доведена до автоматизма.
            * **Ральф Рангник (Австрия):** Главный архитектор современного немецкого прессинга. Долго работает со сборной, построил системную прессинг-машину. На коротких кубковых дистанциях мастерски умеет готовить тактические сюрпризы грандам.

            ### 12. Аналитический консенсус рынка
            Букмекерские котировки на исход основного времени распределились следующим образом: П1 — **1.55**, Х — **4.10**, П2 — **6.50**. Итоговый проход Испании оценивается скромными **1.25**, Австрии — **4.00**. Аналитики ждут затяжной игры, в которой Австрия на определенных отрезках предпочтет закрыться плотным блоком.

            ### 13. Психологический контекст
            Австрийская пресса активно подогревает тему «реванша за былые обиды на Евро», внутри коллектива царит сумасшедшая ментальная сплоченность. В Испании же спортивные таблоиды требуют от де ла Фуэнте исключительно уверенного разгрома, что создает легкое психологическое давление на молодых фланговых исполнителей.

            ### 14. Судейский фактор
            На поединок назначен строгий арбитр со средним карьерным тоталом **4.8** желтых карточек за матч. С учетом агрессивного стиля австрийцев, высока вероятность раннего предупреждения для их опорной зоны за срыв перспективной атаки.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе ЧМ-2026. Для удобства чтения на смартфонах данные структурированы в лаконичный список.*

            * **xG / xA / xGOT (Ожидаемые голы и ассисты):**
            * Испания демонстрирует мощный системный показатель **~2.34 xG** за матч в группе. Австрия генерирует скромнее — **~1.15 xG**. Пиренейцы создают моменты значительно более высокого качества.
            * По метрике ожидаемых ассистов (xA) Испания также впереди (**1.85** против **0.90** у Австрии) — фланги выдают колоссальный объем передач под удар.
            * Параметр xGOT (ожидаемые голы с учетом точности ударов в створ) у Испании (**2.45**) превосходит ее же сухой xG. Это наглядно подчеркивает высочайшее исполнительское мастерство атакующей линии.
            * **Метрики продвижения мяча (Progressive Passes / Runs):**
            * Испания идет в лидерах мундиаля по продвигающим передачам (в среднем 58 за матч). 
            * Австрия реже двигает мяч через пас, уповая на силовые Progressive Runs (продвигающие проходы на дриблинге в исполнении Лаймера и Баумгартнера).
            * **Key Passes (Ключевые передачи):**
            * Испания тотально доминирует: **12.4** ключевых пасов за игру против **7.1** у Австрии.
            * **Field Tilt (Наклон поля / Доминирование в финальной трети):**
            * Модель прогнозирует перекос **68% на 32%** в пользу Испании. Поединок будет протекать преимущественно на трети поля австрийцев.
            * **Pass Completion Rate (Точность передач):**
            * Испания удерживает элитную планку в **89.5%**. Австрия под интенсивным давлением проседает до **79.2%**.
            * **PPDA (Интенсивность прессинга):**
            * В этом компоненте Австрия доминирует на турнире. Их показатель PPDA составляет сумасшедшие **7.8** (топ-интенсивность мирового футбола). У Испании PPDA зафиксирован на отметке **9.2**.
            * **Interceptions & Recoveries (Перехваты и подборы):**
            * Австрия совершает больше чистых перехватов именно в средней зоне (45 за игру), тогда как Испания молниеносно возвращает мяч за счет точечного контрпрессинга на чужой половине. Успешность прессинг-действий австрийцев составляет **34%**, что станет серьезной проверкой для позиционной структуры де ла Фуэнте.
            * **Комплексные модели (PV / VAEP / Heat Maps):**
            * Модели ценности действий фиксируют наивысший вклад в развитие владения у Родри, а в завершающей стадии — у Ямаля. 
            * Тепловые карты (Heat Maps) отображают плотную красноту на флангах у чужой штрафной площади Испании и в полукруге перед ней (зона Педри/Ольмо). У Австрии максимальная активность сосредоточена в центральном круге и полуфлангах собственной половины поля.


            ## 3) Расчёт матча методом Пуассона

            На основе атакующего потенциала (забитые голы/xG) и оборонительной надежности команд на текущем турнире, средние ожидаемые голы на этот поединок составляют
            * **Лямбда Испании :** **1.85**
            * **Лямбда Австрии :** **0.75**

            Применив формулу распределения Пуассона, получаем следующие точные вероятности исходов в основное время

            | Точный счет | Вероятность |
            | :--- | :--- |
            | **1:0** | 13.9% |
            | **2:0** | 12.8% |
            | **2:1** | 9.6% |
            | **1:1** | 10.4% |
            | **0:0** | 7.5% |
            | **3:0** | 7.9% |

            * **Общая вероятность победы Испании в о.в.:** **62.5%**
            * **Общая вероятность ничейного исхода в о.в.:** **22.1%**
            * **Общая вероятность победы Австрии в о.в.:** **15.4%**


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерские конторы под влиянием публичного рынка слегка занижают коэффициент на чистую победу Испании (предлагают **1.55** при честном математическом коэффициенте модели около **1.60**). Заходить в чистый исход экономически невыгодно. На маркет Тотал Меньше (2.5) модель дает честный коэффициент **1.95**, в то время как букмекеры выставили **1.85** (ценности нет).

            > **Вывод модели:** Расчет Пуассона и оборонительные метрики показывают, что вероятность сценария, при котором Австрия уйдет с поля без забитого мяча, сильно недооценена рынком. Истинное **VALUE** обнаруживается в исходе **«Обе забьют — Нет»**. Математическая модель оценивает вероятность этого события в **58%** (честный коэффициент **1.72**), тогда как букмекеры щедро предлагают **1.88**. Математическое ожидание ставки строго положительное.


            ## 5) Итоговое аналитическое заключение

            Статус кубкового матча на вылет неизбежно внесет прагматичные коррективы. Сборная Австрии не станет огульно прессинговать Испанию с первых секунд всеми силами, поскольку де ла Фуэнте мгновенно накажет за подобную авантюру одной вертикальной передачей Родри на ход реактивному Уильямсу. Ральф Рангник предпочтет организованный средний блок с триггерами прессинга в момент приема мяча испанскими крайними защитниками.

            Испания традиционно заберет мяч под тотальный контроль (около 65% владения), но наткнется на очень плотную, физически мощную стену. Ключевым фактором взлома станет индивидуальный гений Ямаля и своевременные подключения полузащитников из глубины. С учетом кубкового статуса, оба коллектива будут минимизировать неоправданный риск. Если Испания забьет первой, Австрии придется раскрываться, что откроет зоны для убийственных контратак пиренейцев.


            ## 6) Лучшие варианты для ставок на матч

            Опираясь на контекст стадии 1/16 финала, тактические модели Рангника и де ла Фуэнте, а также на математический расчет Пуассона, наиболее перспективными являются три следующих выбора:

            * **🎯 Основной выбор: Проход Испании + Тотал матча Меньше 3.5 голов за коэффициент ~1.75.**
            Базовый, максимально логичный сценарий кубкового поединка. Ожидается гроссмейстерская, прагматичная победа фаворита на классе (в районе 1:0 или 2:0) без лишнего ремонтаду в обороне.
            * **🎯 Валуйная ставка (Value Bet): Маркет «Обе забьют — Нет» за коэффициент ~1.88.**
            Математически обоснованный выбор с высокой долей вероятности сухой победы Испании, либо нулевой ничьей с последующим переходом игры в экстра-таймы.
            * **🎯 Статистический тренд: Тотал желтых карточек Австрии Больше 2.0 за коэффициент ~1.65.**
            Фирменный австрийский Gegenpressing против сверхтехничной и быстрой полузащиты Испании неизбежно приведет к частым срывам перспективных атак, фолам и закономерным предупреждениям со стороны строгого арбитра.`
    
         },
        { id: 84, date: "Пятница, 3 июля", time: "02:00", stadium: "Торонто • БМО Филд", team1Code: "2K", team1Text: "2-е место Группы K", team2Code: "2L", team2Text: "2-е место Группы L", prob1: 44, probX: 31, prob2: 25, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Стадия и статус:** 1/16 финала Чемпионата мира 2026 года. Первая стадия игр на вылет (Раунд 32). Культовая, медийная и, весьма вероятно, финальная очная дуэль на уровне сборных между Криштиану Роналду и Лукой Модричем. Проигравший мгновенно прекращает свой путь на мундиале. В случае ничейного результата в основное время регламентом предусмотрены экстра-таймы и серия пенальти.
            * **Локация и стадион:** Поединок примет Канада на поле «Торонто Стэдиум» (нейтральная территория). 
            * **Климатические условия:** Максимально комфортный температурный режим для вечерней игры, идеальное состояние натурального газона. Фактор погоды не помешает командам показать свой максимум.
            * **Статус фаворита:** Сборная Португалии имеет статус умеренного фаворита благодаря глубине состава, кадровому потенциалу и оценкам аналитиков.
            * **Исторический бэкграунд:** Хорватия — вице-чемпионы мира (2018) и бронзовые призеры предыдущего мундиаля (2022). Португалия — чемпионы Европы (2016) и триумфаторы Лиги Наций. Оба коллектива обладают феноменальным и уникальным кубковым опытом на международной арене.

            ### 2. Рейтинг команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Португальцы стабильно закрепились в Топ-7 лучших сборных планеты. Хорватия балансирует на грани Топ-12, удерживая статус элитной европейской силы.
            * **Класс исполнителей:** По суммарной трансферной стоимости состава «Европейские бразильцы» существенно превосходят хорватов (Бруну Фернандеш, Бернарду Силва, Рафаэл Леау, Витинья). Средний индивидуальный рейтинг стартового состава Португалии в статистических базах составляет **7.50**, у Хорватии — **7.10**.

            ### 3. Текущая игровая форма на групповом этапе ЧМ-2026
            * **🇵🇹 Португалия:** Квалифицировалась в плей-офф со 2-го места сложной Группы K. Команда стартовала тяжело, сенсационно потеряв очки с ДР Конго (1:1), затем камня на камне не оставила от Узбекистана (5:0), а в заключительном туре расписала прагматичные и аккуратные **0:0** с Колумбией. Атака мощна, но прослеживается периодическая нестабильность при позиционном взломе низкого блока.
            * **🇭🇷 Хорватия:** Заняла 2-е место в Группе L. Начали турнир с минимального поражения от Англии, но затем строго на классе, хладнокровии и опыте переиграли Панаму и Гану. «Шашечные» традиционно тяжело вкатываются в крупные турниры, рассчитывая вывести пик физических кондиций именно на раунд knockout.

            ### 4. Основная статистика турнира
            * **Португалия:** Оформила в среднем 2.0 забитых гола за матч при минимальных пропущенных — всего 0.33 за игру (в 2 из 3 поединков отыграли строго «на ноль»).
            * **Хорватия:** Забивает в среднем 1.33 мяча за встречу, пропуская при этом ровно 1.0 гол за игру.

            ### 5. Дополнительная статистика и тактические микротренды
            * **Территориальный контроль:** Португалия стремится доминировать и забирать мяч (**61%** среднего владения). Хорватия также не любит бегать без игрового снаряда и умеет качественно его контролировать (**55%**).
            * **Удары (всего / в створ):** Португальцы бьют чаще и опаснее — **14.8 / 5.9** за матч. Статистика Хорватии скромнее — **11.5 / 4.1**.
            * **Угловые удары:** Португалия активно задействует фланги, генерируя в среднем 6.1 корнера за матч. У Хорватии этот показатель равен 4.8.
            * **Фолы и предупреждения:** Хорваты ощутимо чаще нарушают правила в центральном круге при срыве быстрых атак оппонента (в среднем 2.1 желтых карточек за игру против всего 1.2 у португальцев).

            ### 6. История очных встреч (Head-to-Head)
            Сборные прекрасно изучили друг друга. В розыгрыше Лиги Наций они обменялись плотными домашними результатами (победа Португалии 2:1 и ничья 1:1 в Сплите, где забивали Феликс и Гвардиол). Примечательно, что в рамках официальных кубковых матчей на вылет (Евро-2016) Португалия проходила Хорватию лишь по итогам изнурительных экстра-таймов.

            ### 7. Тактико-стратегический рисунок
            * **Португалия (Роберто Мартинес):** Гибкая атакующая модель 4-2-3-1 или 4-3-3. Ментальный лидер Бруну Фернандеш играет определяющую роль в продвижении мяча, а Криштиану Роналду выполняет функции классического наконечника. Фишка — плотное насыщение полупространств за счет смещения инсайдов. Проблема — уязвимость в переходных фазах сразу после потери мяча.
            * **Хорватия (Златко Далич):** Классический, сыгранный годами треугольник в центре поля (Модрич — Ковачич — Пашалич/Сучич). Стиль полностью завязан на удержании мяча под агрессивным прессингом и тотальном контроле темпа. Фишка — сверхопытная центральная ось. Недостатки — отсутствие элитного центрфорварда топ-класса в завершении (ставка на силового Будимира или Крамарича) и невысокая дистанционная скорость центра обороны.

            ### 8. Составы, травмы и ротация
            * **Португалия:** Весь ключевой хребет команды (Рубен Диаш, Нуну Мендеш, Бруну Фернандеш, Криштиану Роналду) находится в оптимальных физических кондициях. Роберто Мартинес применил аккуратную ротацию в игре с Колумбией, сохранив свежесть основы. Потерь нет.
            * **Хорватия:** Лука Модрич отбегал гигантский объем минут на групповой стадии. Физические ресурсы 40-летнего ветерана на столь интенсивной кубковой дистанции — главный вопрос для тренерского штаба. Травмированных в основе нет.

            ### 9. Индивидуальный перформанс лидеров
            * **Бруну Фернандеш (Португалия):** Абсолютный лидер текущего Чемпионата мира по числу ключевых передач и пасов под удар.
            * **Криштиану Роналду (Португалия):** Оформил 2 забитых мяча на групповом этапе и максимально мотивирован на обновление мировых рекордов.
            * **Йошко Гвардиол (Хорватия):** Фундаментальный игрок не только оборонительной линии, но и первой фазы продвижения мяча вперед.
            * **Лука Модрич (Хорватия):** Отпраздновал грандиозный юбилей — 201-й матч в футболке национальной сборной, продолжая оставаться ее главным мозговым центром.

            ### 10. Мотивационный вектор
            Для легендарного поколения Модрича и Роналду этот плей-офф — официальный «последний танец» на уровне Чемпионатов мира. Мотивация игроков запредельная. Учитывая высочайший статус матча на вылет, Хорватия целенаправленно постарается втянуть Португалию в затяжной, вязкий, закрытый футбол. Хорваты — признанные мировые гроссмейстеры овертаймов.

            ### 11. Тренерский фактор
            * **Роберто Мартинес (Португалия):** Имеет в своем распоряжении невероятно роскошный кадровый ресурс, однако регулярно подвергается жесткой критике со стороны прессы за недостаточную тактическую гибкость в матчах против топ-сборных.
            * **Златко Далич (Хорватия):** Настоящий футбольный отец для этой команды, прошедший с ней все круги ада. Его ключевое достижение — уникальное умение выжимать абсолютный максимум из имеющихся ресурсов именно на кубковых стадиях плей-офф.

            ### 12. Аналитический консенсус рынка
            Котировки букмекеров на основное время распределились следующим образом: П1 — **1.85**, Х — **3.50**, П2 — **4.50**. Итоговый проход Португалии в следующую стадию видится рынку более вероятным — **1.42** против **2.85** на Хорватию. Эксперты прогнозируют очень осторожный дебют встречи.

            ### 13. Психологический контекст
            Центральный сюжет мировых медиа — трогательное и бескомпромиссное противостояние бывших многолетних партнеров по мадридскому «Реалу». Психологическое давление на Португалию кратно выше, так как от их звездного состава болельщики и пресса требуют победы строго в основное время матча.

            ### 14. Судейский фактор
            Ожидается вязкий рисунок игры с огромным числом мелких тактических фолов в середине поля. Средний исторический тотал назначенного арбитра на матчах под эгидой FIFA составляет **4.2** желтых карточек. Хорваты под давлением будут вынуждены собирать предупреждения в опорной зоне.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе ЧМ-2026. Данные структурированы в лаконичный список для удобства чтения.*

            * **xG / xA / xGOT (Ожидаемые события):**
            * Португалия генерирует солидные **~2.12 xG** за матч. Хорватия создает ощутимо меньше — **~1.28 xG**. Португальцы создают остроту значительно качественнее благодаря активности флангов.
            * По метрике ожидаемых ассистов (xA) Португалия также доминирует — **1.65** (где Бруну аккумулирует львиную долю объема) против **0.95** у хорватов.
            * Параметр xGOT отражает, что реализация моментов Роналду и Феликсом находится строго на ожидаемом базовом уровне, без аномальных отклонений.
            * **Метрики продвижения мяча (Progressive Passes):**
            * Португалия выполняет в среднем 52 продвигающие передачи за матч, Хорватия — 46. Хорваты продвигают мяч более академично и позиционно через связку Модрич — Ковачич, в то время как Португалия действует более вертикально и стремительно.
            * **Field Tilt (Наклон поля / Доля владения в финальной трети):**
            * Модель фиксирует преимущество португальцев — **58% против 42%**. Они будут заметно чаще контролировать игровой снаряд на чужой трети поля.
            * **Pass Completion Rate (Точность передач):**
            * Обе сборные демонстрируют высочайшую культуру паса: Португалия — **88%**, Хорватия — **86%**.
            * **PPDA (Интенсивность прессинга):**
            * Португалия (**10.2**) — Хорватия (**12.1**). Ни одна из команд не использует сверхагрессивный, удушающий высокий прессинг, предпочитая компактно встречать оппонента в организованном среднем блоке.
            * **Successful Pressures (Успешность давления):**
            * Португальцы чуть эффективнее перекрывают кислород в центральной зоне (31% успешности против 27% у Хорватии).
            * **Комплексные модели (PV / Heat Maps):**
            * Модели ценности владения (Possession Value) фиксируют наивысшие показатели обострения у Португалии на флангах у Жоау Канселу и Нуну Мендеша.
            * Тепловые карты (Heat Maps) показывают максимальную хорватскую плотность непосредственно в центральном круге (контроль темпа). У Португалии выражена сверхактивность на левом фланге (зона Рафаэла Леау) и непосредственно в чужой штрафной площади.


            ## 3) Расчёт матча методом Пуассона

            На основе голевой активности и оборонительных показателей команд на групповом этапе ЧМ-2026, средние ожидаемые голы на этот поединок составляют
            * **Лямбда Португалии :** **1.62**
            * **Лямбда Хорватии :** **0.92**

            Применив формулу распределения Пуассона, получаем следующие точные вероятности исходов в основное время

            | Точный счет | Вероятность |
            | :--- | :--- |
            | **1:0** | 14.6% |
            | **1:1** | 13.5% |
            | **2:0** | 11.8% |
            | **2:1** | 10.9% |
            | **0:0** | 9.0% |
            | **0:1** | 8.3% |

            * **Общая вероятность победы Португалии в о.в.:** **49.8%**
            * **Общая вероятность ничейного исхода в о.в.:** **26.4%**
            * **Общая вероятность победы Хорватии in о.в.:** **23.8%**


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекер выставил чистую победу Португалии за **1.85**. Математическая модель Пуассона оценивает вероятность этого исхода ровно в **49.8%** (что эквивалентно честному коэффициенту **2.00**). Соответственно, в чистом исходе П1 маржинального валуя нет.

            > **Вывод модели:** Истинное **VALUE** скрывается на рынке тоталов и ничьих. Хорватия умышленно засушит и замедлит игру, как она делает во всех своих матчах плей-офф. Вероятность ничьей в основное время (26.4% -> честный коэффициент **3.78**) букмекерами занижена до 3.50. 
            > 
            > Наиболее недооцененным выглядит маркет **Тотал Меньше (2.5)**. Букмекер дает на ТМ (2.5) коэффициент около **1.80**, в то время как по кубковым метрикам и Пуассону реальная вероятность захода этого события составляет **61%** (честный коэффициент **1.64**). Здесь зафиксирован чистый перевес над линией.


            ## 5) Итоговое аналитическое заключение

            Сценарий этого кубкового противостояния читается довольно отчетливо: Хорватия заберет мяч под свой контроль на определенных временных отрезках с единственной целью — лишить Португалию взрывного темпа. Златко Далич прекрасно понимает, что в открытом, встречном и скоростном футболе реактивные фланги Мартинеса попросту уничтожат возрастных Станишича и Перишича. Хорватия сделает осознанную ставку на перевод игры в овертайм — это их ментальная и историческая зона абсолютного комфорта.

            Португалия будет оказывать методичное позиционное давление. Если Бруну Фернандешу удастся регулярно находить свободное пространство между линиями хорватской полузащиты, у Роналду обязательно появятся моменты. Огромный кубковый опыт обороны Хорватии (Гвардиол, Шутало) позволит им сдерживать этот натиск долгое время. Матч обещает быть низовым, тактическим, шахматным и сверхосторожным.


            ## 6) Лучшие варианты для ставок на матч

            Учитывая кубковый характер стадии 1/16 финала и уникальную специфику сборной Хорватии в матчах на вылет, наиболее надежными и валуйными выглядят следующие варианты:

            * **🎯 Основной выбор: Тотал матча Меньше 2.5 голов за коэффициент около 1.80.**
            Железный исторический тренд Хорватии в плей-офф крупных турниров плюс прагматизм Португалии, продемонстрированный против Колумбии. Риск в этой игре будет сведен к минимуму.
            * **🎯 Валуйная ставка (Value Bet): Ничейный исход [Х] в основное время за коэффициент 3.50.**
            Высочайшая математическая вероятность фиксации счетов 1:1 или 0:0 по итогам 90 минут с последующим уходом поединка в любимые хорватами дополнительные таймы.
            * **🎯 Безопасный вариант: Итоговый проход Португалии за коэффициент 1.42.**
            За счет куда более глубокой и качественной скамейки запасных, а также физической свежести лидеров во втором тайме или в экстра-таймах.`
    
         },
        { id: 85, date: "Пятница, 3 июля", time: "06:00", stadium: "Ванкувер • Би-Си Плэйс", team1Code: "1B", team1Text: "Победитель Группы B", team2Code: "3E+", team2Text: "3-е место EFGIJ", prob1: 51, probX: 28, prob2: 21, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Матч и статус:** 1/16 финала Чемпионата мира 2026 года. Первая стадия кубкового плей-офф (Раунд 32) — бескомпромиссный поединок на выбывание, где цена малейшей тактической помарки максимальна. Регламентом предусмотрены два дополнительных тайма по 15 минут (экстра-таймы) и серия послематчевых пенальти в случае ничейного исхода по итогам основного времени.
            * **Локация и стадион:** Поединок примет Ванкувер на знаменитой арене «Би-Си Плэйс» (Канада). Матч имеет статус игры на нейтральном поле.
            * **Игровые условия:** Стадион оборудован технологичным крытым куполом и искусственным газоном последнего поколения. Климат внутри чаши арены идеальный, влияние капризов погоды полностью исключено. Швейцария имеет ментальное преимущество — она уже играла и побеждала здесь на групповом этапе (обыграла хозяев турнира, канадцев).
            * **Статус фаворита:** Сборная Швейцарии идет фаворитом по мнению большинства футбольных аналитиков и согласно котировкам букмекерских контор, представляя собой более сбалансированную, сыгранную и системную команду.
            * **Исторический бэкграунд:** «Нати» — завсегдатаи плей-офф крупных международных турниров, дважды подряд добивавшиеся выхода в 1/4 финала на Евро-2020 и Евро-2024. Алжир имеет скромный бэкграунд, отмеченный лишь одним историческим выходом в 1/8 финала мирового первенства в далеком 2014 году.

            ### 2. Рейтинг команд и футболистов
            * **Табель о рангах FIFA:** Швейцария уверенно располагается в первой двадцатке на высоком 15-м месте. Алжир занимает более скромную 44-ю строчку.
            * **Класс исполнителей:** Согласно оценкам ведущих статистических платформ, средний рейтинг стартового состава Швейцарии (Грегор Кобель, Мануэль Аканджи, Гранит Джака, Брель Эмболо) составляет солидные **7.30**. У Алжира (Рияд Марез, Уссем Ауар, Райан Аит-Нури, Амин Гуири) данный параметр зафиксирован на отметке **6.80**.

            ### 3. Текущая игровая форма на групповом этапе ЧМ-2026
            * ** Швейцария:** Триумфально вышла с 1-го места Группы B, не потерпев ни одного поражения и набрав 7 очков. Команда сыграла вничью с Катаром (1:1), уверенно разгромила Боснию (4:1) и хладнокровно переиграла Канаду (2:1). Коллектив демонстрирует монолитную стабильность.
            * ** Алжир:** Пробился в раунд knockout с 3-го места Группы J в качестве одной из лучших третьих команд. Турнирный путь африканцев напоминает американские горки: начали с болезненных 0:3 от Аргентины, затем обыграли Иорданию, после чего выдали безумный результативный триллер со сборной Австрии (3:3), упустив победу на последних секундах. Атака пребывает в огне, но оборонительная линия серьезно страдает.

            ### 4. Основная статистика турнира
            * **Швейцария:** Демонстрирует отличную результативность — в среднем 2.33 забитых гола за поединок при стабильных 1.0 пропущенных мячах за игру.
            * **Алжир:** Оформил средний показатель в 1.66 забитых гола, однако пропускает катастрофически много — в среднем 2.0 мяча за встречу (6 пропущенных голов за 3 матча в группе).

            ### 5. Дополнительная статистика и игровые микротренды
            * **Территориальный контроль:** Швейцарцы стремятся доминировать в середине поля, контролируя мяч в среднем **56%** игрового времени. Алжир больше уповает на вертикальные выпады (**48%** владения).
            * **Удары (всего / в створ):** Швейцария превосходит оппонента по частоте и точности угроз — **13.7 / 5.4** в среднем за матч против **10.8 / 4.2** у алжирцев.
            * **Угловые удары:** Швейцарская команда активно задействует ширину поля и фланги (5.8 корнера за игру). Статистика Алжира скромнее — 3.9 за матч.
            * **Дисциплинарный подтекст:** Примерно равные показатели агрессии — в среднем 1.6 желтых карточек у швейцарцев против 2.0 предупреждений у эмоциональных алжирцев.

            ### 6. История очных встреч (Head-to-Head)
            Официальных матчей на турнирах столь высокого ранга между сборными ранее не фиксировалось. В исторических хрониках значатся две товарищеские встречи в 1980-х годах, в обеих из которых сильнее оказалась европейская команда (2:1 и 2:0).

            ### 7. Тактико-стратегический рисунок
            * **Швейцария (Мурат Якин):** Монолитная и отлаженная система 3-4-2-1. Главный тренер выстроил тотальный контроль центра поля за счет эталонной связки Джака — Фройлер. Фишка — гиперактивные латерали (Дан Ндойе) и резкие, вертикальные включения инсайдов. Ложка дегтя — периодическая расслабленность в концовках таймов.
            * **Алжир (Владимир Петкович):** Схема 4-3-3 с фокусом на техничную полузащиту (Ауар, Набиль Бенталеб) и индивидуальный креатив Рияда Мареза на правом фланге. Фишка — реактивная дистанционная скорость контратак через Мохамеда Амура. Главная уязвимость — огромные тактические разрывы между линиями при потере мяча и хаос в собственной штрафной при навесах.

            ### 8. Составы, травмы и ротация
            * **Швейцария:** Под небольшим вопросом находится участие правого защитника Сильвана Видмера. В остальном все ключевые лица, включая топового Грегора Кобеля в створе ворот и Мануэля Аканджи в центре обороны, готовы на 100%.
            * **Алжир:** Весь основной атакующий кулак в строю и рвется в бой, но физическое и ментальное состояние ветеранов оборонительной линии после тяжелейшего энергозатратного матча с Австрией вызывает обоснованные опасения.

            ### 9. Индивидуальный перформанс лидеров
            * **Йохан Манзамби (Швейцария):** Главное открытие и сенсация текущего Чемпионата мира. Молодой полузащитник оформил 3 гола и 1 ассист на групповом этапе, являясь главным претендентом на премию лучшему молодому игроку мундиаля.
            * **Гранит Джака (Швейцария):** Бессменный дирижер, лидер турнира по числу передач в финальную треть поля.
            * **Рияд Марез (Алжир):** За счет колоссального опыта выдает отличный турнир, ведя за собой команду по метрике ожидаемых ассистов (xA).
            * **Амин Гуири (Алжир):** Демонстрирует образцовую стабильность и нацеленность на ворота в завершающей фазе атаки.

            ### 10. Мотивационный вектор
            Для сборной Алжира и лично для Владимира Петковича (который на протяжении 7 лет успешно тренировал Швейцарию и знает устройство этой команды до мельчайших винтиков) данный поединок — главный матч в карьере. Эмоциональный настрой африканцев будет запредельным. Швейцария же подходит к противостоянию с холодной головой, как к профессиональной задаче-минимум.

            ### 11. Тренерский фактор
            * **Мурат Якин (Швейцария):** Окончательно доказал свою состоятельность на Евро-2024, переиграв тактически топовых визави. Мастерски умеет гибко перестраивать схему по ходу игры.
            * **Владимир Петкович (Алжир):** Настоящая легенда швейцарского футбола, выводивший «нати» в 1/4 финала Евро-2020. С Алжиром он пытается привить строгую европейскую дисциплину яркой африканской ментальности, но навести железобетонный порядок в защите пока банально не успел.

            ### 12. Аналитический консенсус рынка
            Коэффициенты букмекеров на основное время распределились в следующих диапазонах: П1 (Швейцария) — **2.05 – 2.10**, Х — **3.20 – 3.32**, П2 (Алжир) — **3.85 – 4.00**. Итоговый проход Швейцарии оценивается скромными **1.53**, Алжира — **2.50**. Рыночные котировки на Тотал Меньше (2.5) неоправданно занижены до **1.70**.

            ### 13. Психологический контекст
            «Фактор Петковича» — центральный медийный сюжет в спортивной прессе. Он досконально знает сильные и слабые стороны Джаки, Родригеса, Эмболо. Однако более глубокая скамейка запасных и высокая тактическая выучка швейцарцев нивелируют этот инсайдерский багаж.

            ### 14. Судейский фактор
            Поединок доверен строгому арбитру из Аргентины Яэлю Фалькону Пересу. Он категорически не терпит лишних апелляций и жестких подкатов сзади, что станет огромной проблемой для импульсивных алжирских опорников. Ожидается жесткий контроль и не менее 4 желтых карточек в матче.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе ЧМ-2026. Для удобства чтения на любых устройствах данные упакованы в scannable-список.*

            * **xG / xA / xGOT (Ожидаемые события):**
            * Швейцария генерирует стабильные **~1.98 xG** за матч. Алжир имеет показатель **~1.45 xG**. 
            * По метрике ожидаемых ассистов (xA) у швейцарцев объем распределен равномерно по линиям (**1.55**), в то время как у Алжира созидание жестко завязано на индивидуальных забросах Мареза и Ауара (**1.10**).
            * Параметр xGOT наглядно отражает, что Швейцария существенно превосходит свой сухой xG. Это следствие невероятной формы Манзамби и Варгаса, виртуозно конвертирующих сложные полумоменты в забитые мячи.
            * **Метрики продвижения мяча (Progressive Passes):**
            * Швейцария выполняет в среднем 48 продвигающих передач за матч против 35 у Алжира. Гранит Джака продвигает игровой снаряд системно через центральную ось, тогда как Алжир чаще сбивается на индивидуальные забеги Райана Аит-Нури.
            * **Field Tilt (Наклон поля / Доминирование в финальной трети):**
            * Модель прогнозирует перекос **57% против 43%** в пользу европейцев. Они будут доминировать территориально и зажмут Алжир на их трети поля.
            * **PPDA (Интенсивность прессинга):**
            * Швейцария (**10.4**) — Алжир (**13.5**). Алжирцы пассивно прессингуют на чужой половине поля, позволяя сопернику безболезненно начинать атаки от ворот. Швейцарцы накрывают оппонента значительно быстрее.
            * **Successful Pressures (Успешность давления):**
            * У Швейцарии зафиксировано **32%** успешных отборов сразу после потери мяча. У Алжира этот показатель составляет всего **22%**, что лишний раз подтверждает серьезные проблемы с балансом между атакой и обороной.
            * **Комплексные модели (PV / Heat Maps):**
            * Модели ценности владения (Possession Value) показывают, что у Швейцарии наиболее опасные и ценные передачи идут из зон левого латераля и опорной зоны.
            * Тепловые карты (Heat Maps) демонстрируют, что Алжир имеет выраженную «дыру» прямо перед своей штрафной площадью — опорная зона проседает под давлением. Швейцарцы же максимально активны в полуфлангах атаки.


            ## 3) Расчёт матча методом Пуассона

            На основе атакующего потенциала и оборонительной надежности команд на групповом этапе ЧМ-2026, средние ожидаемые голы на этот поединок составляют
            * **Лямбда Швейцарии :** **1.82**
            * **Лямбда Алжира :** **1.15**

            Применив формулу распределения Пуассона, получаем следующие точные вероятности исходов в основное время

            | Точный счет | Вероятность |
            | :--- | :--- |
            | **1:1** | 12.1% |
            | **2:1** | 11.0% |
            | **1:0** | 10.4% |
            | **2:0** | 9.5% |
            | **2:2** | 6.3% |
            | **0:1** | 6.6% |

            * **Общая вероятность победы Швейцарии в о.в.:** **48.2%**
            * **Общая вероятность ничейного исхода в о.в.:** **24.5%**
            * **Общая вероятность победы Алжира в о.в.:** **27.3%**


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекеры выставили коэффициент на чистую победу Швейцарии в районе **2.10**. Математическая модель Пуассона оценивает шансы швейцарцев в основное время примерно так же (честный коэффициент — **2.07**). В чистом исходе П1 маржинального валуя нет.

            > **Вывод модели:** Истинное **VALUE** сокрыто в общем тотале матча. Защита Алжира пропустила 6 голов в группе и устроила бесшабашные 3:3 с Австрией, а Швейцария забила 7 мячей за три игры. Из-за фактора матча на вылет букмекеры искусственно завысили коэффициенты на высокую результативность.
            > 
            > Коэффициент на маркет **Тотал Больше (2.5)** в линиях равен **2.10 – 2.15** (букмекерская вероятность около 46%). Однако атакующая мощь Швейцарии и проходной двор в защите Алжира по всем метрикам дают вероятность захода ТБ (2.5) на уровне **54%** (честный коэффициент должен быть в районе **1.85**). Это очевидный и жирный валуй.


            ## 5) Итоговое аналитическое заключение

            С одной стороны, нас ожидает яркая тактическая дуэль: Владимир Петкович великолепно знает швейцарский футбол. Но с другой стороны, класс исполнителей непосредственно в оборонительной линии несопоставим. Мануэль Аканджи имеет все ресурсы, чтобы намертво сдержать Амина Гуири, а вот престарелый Аисса Манди и нестабильный Рами Бенсебаини вряд ли справятся со сверхмобильной атакой Мурата Якина и поймавшим кураж Йоханом Манзамби.

            Алжир будет огрызаться, Рияд Марез обязательно создаст один-два убойных момента за счет гениальных передач, но системно Швейцария переедет Алжир за счет лучшей физической подготовки и класса центральной оси. Матч может пойти по сценарию игры с Боснией (4:1) — если Алжир пропустит первым, африканцам придется раскрываться, что станет для них фатальным приговором.


            ## 6) Лучшие варианты для ставок на матч

            Учитывая статус 1/16 финала и явный крен сборной Алжира в сторону открытого, несбалансированного футбола, наиболее перспективными выглядят следующие варианты:

            * **🎯 Основной выбор: Победа Швейцарии с форой (0) за коэффициент ~1.52.**
            Максимально надежный и застрахованный вариант для игрового купона. В худшем случае — мы получаем возврат ставки при ничейном исходе в основное время, но класс и системность европейцев обязательно скажутся на дистанции.
            * **🎯 Валуйная ставка (Value Bet): Тотал матча Больше 2.5 голов за коэффициент ~2.15.**
            Главный валуй игрового дня. Продвинутые метрики кричат о том, что нынешняя оборона Алжира физически не способна отыграть сухой матч, а их звездная атака точно найдет свой шанс у ворот Кобеля.
            * **🎯 Комбинированный вариант: Швейцария не проиграет (1Х) + Тотал матча Больше 1.5 голов за коэффициент ~1.68.**
            Идеально сбалансированный вариант, который полностью перекрывает как прагматичные 1:1, так и уверенные победы фаворита со счетом 2:0 или 2:1.`
    
         },
        { id: 86, date: "Пятница, 3 июля", time: "21:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "2D", team1Text: "2-е место Группы D", team2Code: "2G", team2Text: "2-е место Группы G", prob1: 39, probX: 31, prob2: 30, analysisText:
            `Интригующий поединок первого раунда плей-офф, где прагматичный системный подход сталкивается с колоссальной исторической мотивацией. Австралийские «Соккеруз» подходят к матчу на вылет в качестве монолитного, физически безупречного коллектива, тогда как «Фараоны» празднуют свой первый в истории выход из группы на мундиалях. Кадровые проблемы египтян уравнивают шансы и превращают встречу в Далласе в непредсказуемую шахматную партию.

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Матч по счету:** 1/16 финала (Round of 32) — первый раунд игр на выбывание.
            - **Поле и стадион:** США, Техас, стадион «Даллас Стэдиум» (AT&T Stadium / Arlington). Ультрасовременная закрытая арена со сдвижной крышей.
            - **Климат:** Идеальный климат-контроль внутри чаши стадиона полностью нивелирует сумасшедшую летнюю жару Техаса. Температурный режим и покрытие идеальны, что позволит командам сохранять свежесть.
            - **Фаворит:** Египет. «Фараоны» идут номинальным, очень аккуратным фаворитом за счет более высокого индивидуального класса исполнителей, однако кадровые потери лидеров стремительно сужают этот разрыв.
            - **Опыт в чемпионатах:** Австралия имеет более богатый опыт успешного преодоления групповой стадии (доходила до 1/8 финала в 2006 и 2022 годах). Для Египта текущий турнир — это историческая веха, так как они впервые преодолели групповой барьер.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Австралия располагается на 24–28 строчке мирового рейтинга, Египет находится чуть ниже — в районе 30–35 места. 
            - **Рейтинг игроков:** По средней стоимости ростера Египет превосходит своего оппонента благодаря мощному блоку игроков из топовых европейских чемпионатов (Мармуш, Салах, Трезеге).

            ### 3. Текущая форма на турнире
            - **Австралия:** Заняли 2-е место в Группе D (вслед за хозяевами, сборной США). Уверенно переиграли Турцию (2:0) и засушили крепкий Парагвай. Сборная отлично организована, прагматична и физически вынослива.
            - **Египет:** Заняли 2-е место в Группе G. Прошли групповую стадию без единого поражения: добыли историческую победу над Новой Зеландией (3:1) и дважды сыграли вничью (включая плотные 1:1 с Ираном).

            ### 4. Форма и основная статистика
            - **Австралия:** Стабильно забивают в среднем **1.0–1.5 гола** за игру. Оборонительные редуты работают надежно — «Соккеруз» пропустили абсолютный минимум на групповом этапе.
            - **Египет:** Действуют более результативно в финальной трети (4 забитых мяча в группе), но при этом стабильно пропускают — по 1 пробоине в каждом матче групповой стадии.

            ### 5. Дополнительная статистика (Тренды)
            - **Угловые:** Австралия сверхактивно задействует фланги и постоянные верховые кроссы в штрафную (в среднем **5.5** угловых за матч). Египтяне предпочитают комбинационный футбол низом через полуфланги (в среднем **4.0** корнера).
            - **Владение мячом:** Обе сборные делают явную ставку на быстрый вертикальный футбол без лишней стерильности. В очном противостоянии процент владения прогнозируется близким к паритету — **50% на 50%**.
            - **Дисциплина:** Австралийцы играют плотно, атлетично, допуская обилие мелкого тактического фола в центральном круге.

            ### 6. Очные встречи
            - В современной футбольной истории сборные пересекались крайне редко. Последний официальный товарищеский матч в 2010 году завершился разгромом австралийцев со счетом 3:0. На уровне финальных стадий ЧМ командные пути ранее не пересекались.

            ### 7. Тактика и стиль
            - **Австралия (4-4-2 / 4-2-3-1):** Сбалансированная, отлично прессингующая команда. Ключевая ставка делается на внушительные антропометрические габариты Харри Суттара при стандартах и взрывные прорывы молодых фланговых игроков (Бос, Велупиллай).
            - **Египет (4-3-3):** Нацелены на молниеносные контратаки и изоляцию своих топ-вингеров один в один. Под руководством Хоссама Хассана команда демонстрирует энергозатратный, но осторожный футбол. Главная тактическая фишка — резкие смещения Мармуша с фланга в центр.

            ### 8. Составы, травмы и критический фактор
            - **Австралия:** Травмированных среди ключевых лиц нет, состав полностью боевой и отдохнувший.
            - **Египет (Критический фактор):** Главное лицо сборной Мохамед Салах получил растяжение задней поверхности бедра в матче с Ираном. Его участие находится под огромным вопросом, медицинский штаб делает все возможное. Левый защитник Ахмед Фаттух точно пропустит встречу (надрыв мышцы). Защитник Абдельмонем восстанавливается от ушиба, но должен успеть вернуться в строй.

            ### 9. Статистика отдельных игроков
            - **Омар Мармуш (Египет):** Пребывает на пике игровой формы и берет на себя роль безоговорочного лидера атаки в условиях повреждения Салаха.
            - **Харри Суттар (Австралия):** Главная бетонная стена в защите и ключевая опция команды при подаче угловых ударов.

            ### 10. Настрой и важность матча
            Градус ответственности запредельный. Для Египта это уникальный шанс переписать футбольную историю страны и пробиться в четвертьфинал (где сетка выводит на победителя пары Аргентина / Кабо-Верде). Для Австралии это реальная возможность впервые в своей истории выиграть матч на стадии плей-офф чемпионата мира.

            ### 11. Тренеры
            - **Тони Попович (Австралия):** Провел качественное омоложение состава, успешно интегрировав дерзкую молодежь в прагматичную оборонительную модель.
            - **Хоссам Хассан (Египет):** Максимально эмоциональный специалист, выстроивший шикарную ментальную атмосферу внутри коллектива.

            ### 12. Аналитики и букмекеры
            Изначально Египет котировался очевидным фаворитом, но на фоне тревожных новостей из медицинского штаба по поводу Салаха линия стремительно выравнивается. Букмекеры ожидают вязкий и «низовой» поединок
            - Победа Австралии — **3.15**
            - Ничья — **3.10**
            - Победа Египта — **2.50**


            ## 2) Футбольные метрики

            - **Атака:** Египет на групповом этапе продемонстрировал более весомый атакующий индекс — средний **xG** составляет **1.45** за матч против **1.10 xG** у Австралии. Метрики xA и xGOT также выше у «Фараонов» за счет индивидуального класса Ашура и Трезеге. Однако аналитические модели фиксируют: без Салаха атакующий xG Египта автоматически просядет на **20–25%**.
            - **Продвижение:** Индекс **Field Tilt** (наклон поля) прогнозируется абсолютно нейтральным — **50% на 50%**. По показателю Pass Completion (точность передач) египтяне выглядят чуть предпочтительнее в переходных фазах (**82% на 78%**).
            - **Защита и прессинг:** У Австралии фиксируется более плотный и интенсивный прессинг на чужой половине поля — индекс **PPDA** равен **10.5**. Египет предпочитает организованно откатываться в средний блок (**PPDA** в районе **13.0**). Австралийцы тотально доминируют на «втором этаже» и в зоне подборов.
            - **Комплексные модели:** Тепловые карты Египта будут перегружать исключительно левый фланг атаки (зона Мармуша и Трезеге). У Австралии активность распределена более равномерно по всей ширине поля с акцентом на фланговые забросы в штрафную.


            ## 3) Расчет матча методом Пуассона

            Учитывая закрытый кубковый характер матча и серьезные кадровые проблемы египтян в созидании, закладываем следующие параметры ожидаемых голов на 90 минут основного времени
            - **Лямбда Австралии (ожидаемые голы):** 1.10
            - **Лямбда Египта (ожидаемые голы):** 1.15

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            1:1 | 13.3%
            1:0 | 11.6%
            0:1 | 11.1%
            0:0 | 10.5%
            1:2 | 7.7%

            **Итог Пуассона:** Вероятность победы Египта — **39.4%**, ничья — **28.7%**, победа Австралии — **31.9%**. Расчетная матрица указывает на то, что наиболее вероятным исходом основного времени является результативная ничья 1:1 или минимальный триумф одной из сторон со счетом 1:0.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Модель Пуассона определяет честные коэффициенты: П1 (Австралия) — 3.14, Х — 3.49, П2 (Египет) — 2.54. Честный **Тотал Меньше 2.5** оценивается кэфом 1.62 (вероятность захода — около **62%**).
            - Очевидный VALUE прослеживается в исходах в пользу Австралии. Букмекеры по инерции продолжают переоценивать Египет, занижая кэф на П2. Если в линии на победу Австралии с форой (0) дают коэффициент выше **2.30**, а на чистую ничью (Х) в основное время выше **3.50** — это чистый математический валуй, который необходимо заигрывать, учитывая отсутствие стопроцентно готового Мохамеда Салаха.


            ## 5) Анализ общей информации

            Нас ожидает классическая кубковая шахматная партия. Огромная цена ошибки в 1/16 финала заставит обе сборные до минимума снизить любые тактические риски. Австралия физически мощнее, моложе и абсолютно не имеет кадровых потерь. Они будут методично сушить игру, уповая на стандарты и атлетизм Суттара. Египет техничнее, но потеря Фаттуха и повреждение Салаха критически бьют по их вариативности. Вскрывать организованный блок «Соккеруз» позиционно без своих лидеров «Фараонам» будет архисложно. Велика вероятность овертайма.


            ## 6) Лучшие ставки на матч

            - **Основной выбор:** Тотал Меньше (2.5) голов за коэффициент **1.65**. (Железобетонное логическое обоснование. Травма Салаха снижает потенциал Египта, а Австралия системно умеет закрываться в окопах в матчах на вылет).
            - **Валуйный выбор:** Ничья (Х) в основное время за коэффициент **3.55** или Проход Австралии за **2.25**. (Пуассон выдает высокую вероятность равного счета. Если Египет зайдет в овертаймы, физически мощная, монолитная и более молодая Австралия заберет свое за счет физики).
            - **Статистический маркет:** Индивидуальный Тотал угловых Австралии Больше (4.5) за коэффициент **1.80**. (Британская стилистика игры «Соккеруз» через постоянные кроссы, навесы и прагматичные выносы гарантирует высокое давление на флангах обороны Египта).`
    
         },
        { id: 87, date: "Суббота, 4 июля", time: "01:00", stadium: "Майами • Хард Рок", team1Code: "1J", team1Text: "Победитель Группы J", team2Code: "2H", team2Text: "2-е место Группы H", prob1: 86, probX: 10, prob2: 4, analysisText:
            `Яркий поединок 1/16 финала (Round of 32), в котором классический футбольный Давид бросает вызов величайшему Голиафу современности. Действующие чемпионы мира, ведомые неудержимым капитаном, встречаются с главной и самой душевной сказкой текущего мундиаля. В Майами нас ожидает игра в одни ворота, где латиноамериканский гранд попытается максимально быстро и прагматично вскрыть африканский «автобус».

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Статус матча:** 1/16 финала (Round of 32) — первый раунд бескомпромиссных матчей на выбывание.
            - **Поле и стадион:** США, Майами, стадион «Хард Рок Стэдиум» (Hard Rock Stadium). Это домашняя арена для Лионеля Месси на клубном уровне, так что газон и атмосфера ему знакомы до мельчайших деталей.
            - **Условия:** Состояние покрытия идеальное. Ожидается тотальный аншлаг и бешеная кубковая поддержка «Альбиселесте» со стороны трибун.
            - **Фаворит:** Аргентина — безоговорочный, абсолютный фаворит поединка. Кабо-Верде («Синие акулы») — главный андердог стадии плей-офф.
            - **Опыт в чемпионатах:** Аргентина — действующий обладатель титула с колоссальным кубковым бэкграундом. Кабо-Верде — абсолютный дебютант мундиалей, ставший самой малонаселенной страной в истории футбола, сумевшей пробиться в весеннюю стадию ЧМ.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Аргентина уверенно удерживает позиции в топ-3 мирового табеля о рангах. Кабо-Верде располагается далеко за пределами первой пятидесяти (в районе 60–70 места).
            - **Рейтинг игроков:** Космическая разница. Суммарная трансферная стоимость звездного состава южноамериканцев измеряется миллиардами евро, в то время как футболисты Кабо-Верде представляют скромные европейские клубы средней руки.

            ### 3. Текущая форма на турнире
            - **Аргентина:** Безупречный групповой этап в Группе J. 3 матча — 3 уверенные победы (последовательно обыграны Алжир, Австрия и Иордания). Команда забивала минимум по два-третьих гола в каждой встрече и пребывает в шикарном тонусе.
            - **Кабо-Верде:** Фантастический и исторический прорыв в Группе H. Заняли 2-е место, умудрившись оформить 3 ничейных исхода в 3 турах: сенсационные 0:0 с Испанией, боевые 2:2 с Уругваем и прагматичные 0:0 с Саудовской Аравией. Сборная еще ни разу не уступала на турнире.

            ### 4. Форма и основная статистика
            - **Аргентина:** Отгрузили соперникам 8 голов за 3 игры групповой стадии (в среднем около **2.66 гола** за матч). В защите действуют слаженно и пропускают по большим праздникам.
            - **Кабо-Верде:** Настоящие кубковые ультрапрагматики. Оформили всего 2 забитых мяча за весь групповой этап, но и пропустили лишь 2 гола (все — в одном матче от Уругвая). Имеют в активе два «сухих» поединка против статусных сборных.

            ### 5. Дополнительная статистика (Тренды)
            - **Угловые:** Аргентина будет тотально доминировать по количеству корнеров (в среднем **6.8** за игру) за счет контроля мяча и постоянного давления на флангах. Кабо-Верде подает мало (около **2.5–3.0** за матч) из-за оборонительной модели.
            - **Владение мячом:** Аргентинцы заберут себе мяч примерно на **65%–70%** игрового времени. Африканская команда осознанно прижмется к своим воротам, как делала это в игре с Испанией.
            - **Дисциплина:** Андердог будет вынужден совершать обилие тактических фолов на подступах к штрафной, пытаясь сдержать дриблинг Месси и Альвареса. Ожидается серьезный перекос по желтым карточкам в сторону номинальных гостей.

            ### 6. Очные встречи
            - В современной футбольной истории официальных поединков на уровне сборных между данными командами не зафиксировано. Это будет абсолютно первая и историческая очная игра.

            ### 7. Тактика и стиль игры
            - **Аргентина (4-3-3 / 4-4-2):** Вариативная атакующая модель Лионеля Скалони. Фирменный высокий контрпрессинг, быстрое движение мяча через полузащиту (Мак Аллистер, Фернандес) и постоянные смещения Месси в центр для поиска зон.
            - **Кабо-Верде (4-5-1):** Сверхорганизованный, глубокий и компактный низкий блок. Главная фишка тренера Бубишты — максимальное сужение пространства между линиями и лишение фаворита свободы в центральной зоне. Ставка делается исключительно на редкие контратаки и стандарты.

            ### 8. Составы, травмы и звезды
            - **Аргентина:** Кадровых потерь нет, все лидеры здоровы. Капитан Лионель Месси получил полноценный отдых в третьем туре группы (вышел лишь на замену) и подходит к плей-офф свежим. Монолитная пара центрбеков Ромеро — Лисандро Мартинес готова к бою.
            - **Кабо-Верде:** Выйдут на поле в своем оптимальном оборонительном сочетании с опытным Возиньей в створе ворот и Лопешем в защитной линии.

            ### 9. Статистика отдельных игроков
            - **Лионель Месси (Аргентина):** Проводит выдающийся мундиаль. В свои 39 лет он уже забил **6 голов** в 3 матчах группы (оформив хет-трик и дубль) и единолично возглавляет гонку бомбардиров ЧМ-2026.
            - **Лаутаро Мартинес (Аргентина):** Проявляет идеальное голевое чутье, шикарно пользуясь свободными зонами, пока соперники стягивают все силы на сдерживание Месси.
            - **Логан Кошта (Кабо-Верде):** Ведущий центральный защитник, на плечи которого ляжет персональная задача по удержанию атакующего трио южноамериканцев.

            ### 10. Настрой и важность матча
            Стадия игры на вылет полностью исключает недооценку со стороны чемпионов мира. Для Аргентины этот поединок — дежурный, но обязательный шаг на пути к защите золотых медалей. Для скромной сборной Кабо-Верде — это главный футбольный матч в жизни. Они уже прыгнули выше головы, поэтому будут действовать без какого-либо психологического давления.

            ### 11. Тренеры
            - **Лионель Скалони (Аргентина):** Прекрасно знает, как взламывать плотные «автобусы», и умеет гроссмейстерски распределять силы команды по дистанции плей-офф.
            - **Бубишта (Кабо-Верде):** Сотворил настоящее тактическое чудо на групповой стадии, но в 1/16 финала его оборонительные идеи подвергнутся самому суровому прессингу на планете.

            ### 12. Аналитики и букмекеры
            Букмекерские котировки не оставляют африканскому коллективу ни единого шанса на успех в основное время встречи
            - Победа Аргентины — **1.15**
            - Ничья — **7.60**
            - Победа Кабо-Верде — **18.50**

            ### 13. Ключевые факторы и новости
            Фактор быстрого гола. Если южноамериканцы сумеют отличиться в стартовые 20 минут матча, Кабо-Верде придется раскрывать свои оборонительные редуты, что неминуемо приведет к разгрому. Если же африканцы удержат стартовые нули до свистка на перерыв, игра может приобрести нервный характер.

            ### 14. Арбитр
            Судейская бригада будет работать в строгом режиме, так как футболисты Кабо-Верде постараются компенсировать колоссальную разницу в классе жесткими стыками и частыми мелкими нарушениями. Ожидается высокий тотал фолов со стороны номинальных гостей.


            ## 2) Футбольные метрики

            - **Атака:** Аргентина демонстрирует космический атакующий потенциал — средний накопленный показатель **xG** составляет **2.25** за матч против скромнейших **0.45 xG** у Кабо-Верде. При этом Лионель Месси показывает феноменальную конверсию моментов, забив 6 голов при индивидуальном xG в районе 4.1. Креативный потенциал фаворита превосходит оппонента на три головы.
            - **Продвижение:** Индекс **Field Tilt** (наклон поля) отражает тотальный перекос в сторону южноамериканцев — ожидается порядка **75% на 25%**. Вся игра будет практически безвылазно проходить на трети поля Кабо-Верде. Точность передач у Аргентины в группе составила гроссмейстерские **88%**, тогда как у африканцев под плотным прессингом этот показатель рискует упасть до **70%**.
            - **Защита и прессинг:** Аргентина будет душить соперника сразу же в момент потери мяча — индекс **PPDA** равен **8.5**. Кабо-Верде организованно откатится в глубокий блок без активного прессинга на чужой половине поля (**PPDA** составит около **18.0**). Тепловые карты зафиксируют максимальную плотность «Альбиселесте» в чужой штрафной площади.


            ## 3) Расчет матча методом Пуассона

            Учитывая запредельную форму Лионеля Месси и феноменальную способность Кабо-Верде удерживать оборонительный строй против больших команд (0:0 с Испанией), выставляем следующие параметры ожидаемых голов на 90 минут основного времени
            - **Лямбда Аргентины (ожидаемые голы):** 2.45
            - **Лямбда Кабо-Верде (ожидаемые голы):** 0.20

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            3:0 | 21.1%
            2:0 | 17.2%
            4:0 | 12.9%
            1:0 | 10.4%
            2:1 | 4.1%
            0:0 | 0.7%

            **Итог Пуассона:** Общая вероятность триумфа Аргентины в основное время составляет внушительные **88.5%**, вероятность ничьей — **9.2%**, победа Кабо-Верде — **2.3%**. Расчетная матрица однозначно указывает на сухую победу фаворита с разницей в 2 или 3 мяча.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Модель Пуассона определяет честные коэффициенты: чистая победа П1 — 1.13, Фора Аргентины (-1.5) — 1.48, Тотал Больше 2.5 — 1.65. Букмекеры сильно занижают коэффициент на чистую победу фаворита (в районе 1.15), поэтому ставить на исход П1 экономически бессмысленно.
            - Однако, учитывая оборонительную стойкость Кабо-Верде на групповом этапе, букмекерские конторы могут искусственно завышать коэффициенты на общий Тотал Больше или индивидуальный тотал Аргентины. Комбинированная ставка на **Победу Аргентины + Тотал Больше 2.5** за коэффициент в районе **1.95–2.10** несет в себе отличный, математически обоснованный VALUE.


            ## 5) Анализ общей информации

            Сборная Кабо-Верде наглядно доказала, что умеет образцово сушить топ-коллективы, однако Аргентина за счет гения Месси взламывает подобные плотные блоки намного эффективнее позиционной Испании. Свежий Лионель (отдохнувший в финальном туре группы) и запредельный уровень мотивации на его прощальном мундиале станут ключевым фактором встречи. В кубковом матче Кабо-Верде не сможет обороняться вечно. Как только они пропустят первый мяч, их строгий тактический план рухнет, и класс Аргентины хладнокровно добьет соперника на пространстве.


            ## 6) Лучшие ставки на матч

            - **Основной выбор (Value):** Победа Аргентины + Тотал Больше (2.5) голов за коэффициент **1.95**. (Атака «Альбиселесте» в среднем забивает почти по 3 мяча за игру на ЧМ-2026. Удержать связку Месси и Лаутаро на протяжении полных 90 минут кубкового матча африканской команде не удастся).
            - **Статистический выбор:** Сухая победа Аргентины (Кабо-Верде забьет - Нет) за коэффициент **1.65**. (Защитная линия южноамериканцев монументальна, в то время как андердог забил всего 2 мяча в группе и будет полностью сконцентрирован исключительно на защите собственных ворот).
            - **Выбор на игрока:** Тотал голов Лионеля Месси Больше (0.5) за коэффициент **1.70**. (Лучший бомбардир текущего турнира с 6 голами в активе исполняет абсолютно все стандарты и пенальти, а защитники Кабо-Верде будут регулярно фолить перед собственной штрафной площадью).`
    
         },
        { id: 88, date: "Суббота, 4 июля", time: "04:30", stadium: "Канзас-Сити • Эрроухед", team1Code: "1K", team1Text: "Победитель Группы K", team2Code: "3D+", team2Text: "3-е место DEIJL", prob1: 47, probX: 29, prob2: 24, analysisText:
            `Интригующее кубковое противостояние первого раунда плей-офф (Round of 32), в котором латиноамериканский драйв и структурный баланс сталкиваются с железобетонным оборонительным цинизмом. Колумбийцы под руководством Нестора Лоренсо проводят выдающийся турнир и котируются теневым фаворитом мундиаля. Однако противостоять им будут «Черные звезды», ведомые главным архитектором оборонительных редутов — Карлосом Кейрушем. В Канзас-Сити нас ждет затяжная осада африканской крепости.

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Статус матча:** 1/16 финала (Round of 32) — бескомпромиссная стадия игр на выживание, где любая осечка означает моментальный вылет.
            - **Поле и стадион:** США, Канзас-Сити, легендарный открытый стадион «Эрроухед Стэдиум» (Arrowhead Stadium), славящийся своей невероятной, оглушительной акустикой. Покрытие в безупречном состоянии.
            - **Климат:** Погода в Миссури ожидается довольно жаркой, однако обе сборные физически выносливы и адаптированы к высоким температурам, так что погодный фактор не должен критически уронить темп в начале встречи.
            - **Фаворит:** Колумбия. Южноамериканцы идут однозначным и весомым фаворитом как у аналитиков, так и по букмекерским котировкам.
            - **Опыт в чемпионатах:** Колумбия триумфально вернулась в мировую элиту после пропуска ЧМ-2022 (их исторический пик — четвертьфинал в 2014-м). Гана имеет в своем портфолио легендарный четвертьфинал 2010 года, но их текущий ростер заметно моложе и только учится играть матчи «на вылет».

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Колумбия уверенно и по праву закрепилась в топ-15 сильнейших сборных планеты. Гана располагается значительно ниже — в районе 60-й строчки мирового табеля о рангах.
            - **Рейтинг игроков:** По общему классу и глубине состава Колумбия на голову превосходит оппонента (лидеры представляют топ-клубы Европы). У Ганы сформирован крепкий костяк (Парти, Семеньо, Уильямс), но равноценной скамейки запасных африканцам не хватает.

            ### 3. Текущая форма на турнире
            - **Колумбия:** Потрясающее выступление в сложнейшей Группе K (1-е место, **7 очков**). Уверенно разобрались с Узбекистаном (3:1), прагматично дожали ДР Конго (1:0) и засушили гроссмейстерские 0:0 с мощной Португалией. Команда Нестора Лоренсо идет по турниру без поражений.
            - **Гана:** Настоящие кубковые прагматики. Вышли с 3-го места в Группе L благодаря строгой оборонительной структуре. Минимально одолели Панаму (1:0), сотворили сенсацию, удержав 0:0 против Англии, и лишь в финальном туре уступили Хорватии (1:2). 

            ### 4. Форма и основная статистика
            - **Колумбия:** Оформили 4 забитых мяча в группе, пропустив при этом всего 1 гол. Оборона колумбийцев показала себя одной из самых монолитных на турнире.
            - **Гана:** Демонстрирует максимально «низовые» тренды. Всего 2 забитых и 2 пропущенных мяча за 3 игры группового раунда (причем оба гола пришлись на матч против хорватов).

            ### 5. Дополнительная статистика (Тренды)
            - **Угловые:** Колумбийцы активно и агрессивно нагружают фланги, подавая в среднем **5.8** корнера за игру. Гана садится очень глубоко к своим воротам, из-за чего сама подает мало — около **3.2** за матч.
            - **Владение мячом:** Колумбия заберет себе игровой снаряд под тотальный контроль (**58%–62%**). Африканский коллектив Кейруша абсолютно сознательно откажется от инициативы в пользу плотного низкого блока.
            - **Дисциплина:** Игра Ганы изобилует жестким прессингом в статике и частыми мелкими тактическими фолами в центре поля для срыва темпа.

            ### 6. Очные встречи
            - В современной истории это абсолютно первая официальная встреча между национальными сборными Колумбии и Ганы на Чемпионатах мира. Никакого исторического бэкграунда и груза прошлых матчей у команд нет.

            ### 7. Тактика и стиль игры
            - **Колумбия (4-2-3-1):** Сбалансированная, гибкая модель Нестора Лоренсо. Ключевые фишки — реактивные фланги, высочайшая плотность в центре при потерях и регулярные неожиданные смещения правого защитника Даниэля Муньоса в полуфланги атаки.
            - **Гана (4-3-3 / 4-5-1):** Классический оборонительный «автобус» от Карлоса Кейруша. Без мяча схема превращается в глухой капкан. Задача — максимально лишить колумбийцев пространства в финальной трети и уповать на редкие вертикальные забросы.

            ### 8. Составы, травмы и звезды
            - **Колумбия:** Кадровых потерь нет, состав идеален. Ударное трио Луис Диас — Джеймс Родригес — Джон Ариас в полном порядке. Роль правого латераля застолбил за собой Муньос, забивший уже дважды на турнире.
            - **Гана:** Выйдет в максимально боевом, оборонительном сочетании. Томас Парти будет цементировать опорную зону, а Иньяки Уильямс и Антуан Семеньо будут караулить контратаки на острие.

            ### 9. Статистика отдельных игроков
            - **Джеймс Родригес (Колумбия):** Ментальный лидер сборной. Его радиоуправляемые передачи и стандарты способны вскрыть любое оборонительное кольцо.
            - **Томас Парти (Гана):** Главный волнорез команды. От его персональной успешности в дуэлях с Джеймсом напрямую зависит выживание Ганы.

            ### 10. Настрой и важность матча
            Запредельный уровень мотивации. Для Колумбии это шанс подтвердить статус реального теневого фаворита ЧМ-2026, команда поймала кураж после сухой ничьей с Португалией. Для Ганы выход в плей-офф из убойной группы — уже локальный успех, но прагматик Кейруш умеет выжимать максимум из матчей «на вылет».

            ### 11. Тренеры
            - **Нестор Лоренсо (Колумбия):** Построил удивительно синергичный коллектив, который несется вперед без какого-либо ущерба для собственных тылов.
            - **Карлос Кейруш (Гана):** Признанный профессор оборонительного футбола. Великий мастер по связыванию фаворитов по рукам и ногам в излюбленном «португальском» стиле.

            ### 12. Аналитики и букмекеры
            Букмекерская линия четко определяет колумбийцев в качестве фаворитов основного времени, ожидая вязкий матч
            - Победа Колумбии — **1.53**
            - Ничья — **4.00**
            - Победа Ганы — **8.30**

            ### 13. Ключевые факторы и новости
            Умение фаворита взламывать насыщенную оборону. Если Колумбия сумеет отличиться первой, Гане будет нечем отвечать — их позиционное нападение на турнире выглядит блекло (всего 2 гола в группе).

            ### 14. Арбитр
            Встреча будет наполнена обилием свистков и тактических мелких нарушений со стороны Ганы. Рефери придется регулярно останавливать игру в центральном круге, что выгодно африканцам для сдерживания стартового штурма.


            ## 2) Футбольные метрики

            - **Атака:** Колумбия демонстрирует серьезное превосходство в созидании — средний показатель **xG** составляет **1.65** за матч против скромнейших **0.55 xG** у Ганы (трехкратная разница). Ассистентский потенциал колумбийцев (xA) сосредоточен на гениальных передачах Джеймса Родригеса. У Ганы метрика xA минимальна, а большинство моментов — это сольные рывки Сулемана и Уильямса.
            - **Продвижение:** Индекс **Field Tilt** (наклон поля) прогнозирует тотальное территориальное доминирование Колумбии — примерно **68% на 32%**. Гана будет наглухо прижата к своей штрафной. Точность передач в финальной трети у колумбийцев составляет солидные **85%**, у Ганы — всего **71%** из-за упрощенного стиля «выбей вперед на нападающего».
            - **Защита и прессинг:** Колумбия использует умеренный, но крайне эффективный прессинг — индекс **PPDA** равен **11.2**. Гана не идет вперед вообще, выстраивая плотный забор на своей трети поля (**PPDA** в районе **17.5**). Тепловая карта Ганы зафиксирует глухое оборонительное кольцо вокруг собственных ворот.


            ## 3) Расчет матча методом Пуассона

            Учитывая исключительный кубковый прагматизм Ганы (0:0 с Англией) и строжайшую игру Колумбии в обороне (0:0 с Португалией), закладываем следующие параметры ожидаемых голов на 90 минут основного времени
            - **Лямбда Колумбии (ожидаемые голы):** 1.60
            - **Лямбда Ганы (ожидаемые голы):** 0.35

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            1:0 | 22.8%
            2:0 | 18.2%
            0:0 | 14.2%
            3:0 | 9.7%
            1:1 | 8.0%

            **Итог Пуассона:** Общая вероятность победы Колумбии в основное время составляет **63.5%**, вероятность ничьей — **24.1%**, победа Ганы — **12.4%**. Математически честный коэффициент на победу колумбийцев идеально совпадает с букмекерским и равен **1.57**.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Модель Пуассона определяет честный коэффициент на П1 в районе 1.57. Букмекеры дают 1.53 — линия на чистый исход отточена идеально, валуя в чистой победе нет. Честный коэффициент на **Тотал Меньше 2.5** составляет 1.50 (вероятность захода — порядка **74%** из-за закрытого стиля Ганы в плей-офф).
            - Настоящее VALUE сокрыто в комбинированных маркетах. Букмекеры, ожидая доминирования южноамериканцев, завышают кэфы на варианты через Тотал Меньше. Комбинация **Колумбия не проиграет + Тотал Меньше 2.5** за коэффициент в районе **1.95–2.10** несет в себе чистейший математический валуй, так как Гана Кейруша костьми ляжет, но разгромить себя не позволит.


            ## 5) Анализ полученной информации

            Сборная Ганы за счет колоссального опыта Карлоса Кейруша умеет наглухо связывать фаворитов (что они наглядно доказали в матче с Англией), так что быстрого и легкого разгрома здесь ждать не стоит. Статус матча на вылет заставит африканцев сесть в окопы еще глубже. Однако Колумбия образца 2026 года выглядит намного вариативнее той же Англии в позиционном нападении. Наличие Джеймса Родригеса, способного одной передачей разрезать любой блок, и постоянные включения защитника Муньоса станут ключом к успеху. Колумбия дожмет соперника во втором тайме, когда Гана физически подсядет.


            ## 6) Лучшие ставки на матч

            - **Основной выбор:** Победа Колумбии (П1) в основное время за коэффициент **1.53**. (Класс исполнителей южноамериканской сборной и их текущая беспроигрышная форма на турнире слишком монументальны для нестабильной атаки Ганы).
            - **Надежный выбор:** Тотал Меньше (2.5) голов за коэффициент **1.60**. (Карлос Кейруш выстроит «автобус» повышенной прочности. Колумбия засушила Португалию и пропустила лишь раз в группе. Кубковый матч будет максимально закрытым).
            - **Комбинированный Валуй:** Колумбия не проиграет (1Х) + Тотал Меньше (2.5) голов за коэффициент **1.95**. (Идеальный вариант, который полностью перекрывает наиболее вероятные и обоснованные исходы по матрице Пуассона — 1:0, 2:0 и 0:0).`
    
         }
    ],
    '1/8': [
        { id: 89, date: "Суббота, 4 июля", time: "20:00", stadium: "Хьюстон • НРГ Стадиум", team1Code: "ca", team1Text: "Канада", team2Code: "ma", team2Text: "Марокко", prob1: 41, probX: 31, prob2: 28, analysisText:
            `Исторический поединок 1/8 финала (Round of 16), в котором признанный африканский гранд сталкивается с амбициозными хозяевами турнира. Полуфиналисты прошлого мундиаля и свежеиспеченные обладатели Кубка Африки проверяют на прочность главную сенсацию Северной Америки. В Хьюстоне нас ожидает тактическое противостояние колоссального опыта и безбашенной, энергозатратной вертикальной агрессии.

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Статус матча:** 1/8 финала чемпионата мира — грандиозная битва за путевку в восьмерку сильнейших команд планеты.
            - **Поле и стадион:** США, Хьюстон, «Хьюстон Стэдиум» (NRG Stadium). Арена оборудована раздвижной кровлей и продвинутой климатической установкой.
            - **Климат:** На улице царит экстремальное техасское лето (до **+38°C** при высокой влажности), но внутри чаши автоматика будет стабильно поддерживать комфортные **+21°C**. Погодный фактор полностью нивелирован, состояние газона — эталонное.
            - **Фаворит:** Марокко — очевидный фаворит по оценкам аналитических моделей и букмекеров. Канада отвечает на это сумасшедшим ментальным давлением домашних трибун.
            - **Опыт в чемпионатах:** «Атласские львы» — полуфиналисты ЧМ-2022 и действующие триумфаторы КАН (январь 2026), кубковый бэкграунд этого поколения монументален. Канада впервые в истории пробилась в плей-офф ЧМ и уже переписала историю в 1/16 финала.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Марокко прочно удерживает позиции в топ-12 мирового рейтинга (лучшая сборная Африки). Канада идет в районе 35–40 мест, демонстрируя мощный игровой прогресс.
            - **Рейтинг игроков:** По трансферной стоимости и представительству в европейских топ-клубах Марокко доминирует. В составе африканцев блистают игроки «ПСЖ», «Реала», «МЮ» и «Баварии». У Канады есть суперзвезда Альфонсо Дэвис, снайпер Джонатан Дэвид («Лилль») и Эуштакиу («Порту»), но глубина оборонительной линии заметно скромнее.

            ### 3. Текущая форма на турнире
            - **Марокко:** Настоящий триумфальный марш. В начале 2026 года взяли Кубок Африки (разгромив в финале Сенегал 3:0). В группе ЧМ разошлись миром с Бразилией (1:1), дожали Шотландию (1:0) и разбили Гаити (4:2). В 1/16 финала в эпическом триллере выбили Нидерланды по пенальти (**1:1**, **3:2 пен.**).
            - **Канада:** Коллектив Джесси Марша прыгнул выше головы. Оформили 2-е место в Группе B, а в 1/16 финала вырвали историческую победу у ЮАР (**1:0**) на 90+2 минуте матча благодаря точному удару Стефена Эуштакиу.

            ### 4. Форма и основная статистика
            - **Забитые/пропущенные:** Марокко наколотило 7 мячей в 4 матчах ЧМ-2026 при 4 пропущенных. Канада забила 4 гола и пропустила 3, играя в более строгий и прагматичный футбол.
            - **Серии:** Марокканцы не проигрывают в основное время на протяжении **9 официальных матчей** кряду. Канадцы добыли 2 победы в основное время в рамках текущего мундиаля.

            ### 5. Дополнительная статистика (Тренды)
            - **Владение мячом:** Марокко забирает мяч под контроль в районе **52–54%** времени, грамотно дозируя темп. Канада сознательно действует вторым номером (**44–46%**), уповая на высокий триггерный прессинг.
            - **Удары и угловые:** Марокканцы бьют чаще и качественнее — в среднем **13.5** ударов за матч и преимущество по корнерам (**5.5** против **4.2** у соперника). Канада бьет реже (**9.8**), используя исключительно вертикальные выпады.
            - **Дисциплина:** Канадцы играют чрезвычайно плотно и агрессивно в кость, собирая на турнире в среднем **2.2** желтые карточки за игру. Марокко действует аккуратнее — всего **1.4** ЖК за матч.

            ### 6. Очные встречи
            - Свежий очный бэкграунд остался за Марокко — на групповом этапе ЧМ-2022 в Катаре «Атласские львы» победили со счетом **2:1** (отличились Зиеш и Эн-Несири). Исторический перевес на стороне африканской команды.

            ### 7. Тактика и стиль игры
            - **Марокко (4-2-3-1 / 4-3-3):** Прекрасно сбалансированная модель Валида Реграги. Ключевая фигура — Браим Диас в роли свободного художника под нападающим, подкрепленный реактивными флангами Хакими и Мазрауи. Сборная способна как душить позиционно, так и безупречно засушить игру по счету.
            - **Канада (4-4-2 / 4-2-2-2):** Фирменный энергозатратный «редбулловский» стиль Джесси Марша. Жесткий вертикальный прессинг сразу при потере мяча. Задача — доставить снаряд в чужую штрафную за минимальное количество пасов. Слабое место — высокая линия обороны и уязвимость центрбеков (Бомбито и Корнелиуса) при забросах за спину.

            ### 8. Составы, травмы и звезды
            - **Марокко:** Защитник Шади Риад получил повреждение в прошлой игре, вместо него с первых минут ожидается герой матча с голландцами Исса Диоп. Центр поля цементирует связка Амрабат — Унаи. В атаке Реграги выбирает между Рахими и Эн-Несири.
            - **Канада:** Обойма без критических потерь. Натан Салиба и Нико Сигур избежали дисквалификаций. Капитан Эуштакиу займет место в опорной зоне, дуэт форвардов составят Олувасейи и Дэвид. Главная новость — Альфонсо Дэвис выйдет в старте, Марш умышленно дозировал его минуты в 1/16 под этот матч.

            ### 9. Статистика отдельных игроков
            - **Браим Диас (Марокко):** Находится в гениальной форме, связывая воедино всю атакующую линию.
            - **Яссин Буну (Марокко):** Настоящий кубковый ментальный гигант, в очередной раз доказавший это в серии пенальти против Нидерландов.
            - **Стивен Эуштакиу (Канада):** Мозг и мотор команды, забивший ключевой мяч на турнире.

            ### 10. Настрой и важность матча
            Ментальный пик для обеих наций. На Канаду давит статус хозяев и колоссальные ожидания домашних медиа — Марш зажигает команду в раздевалке на статус национальных героев. Для Марокко это подтверждение статуса элиты мирового футбола. Стадия 1/8 финала взвинчивает цену ошибки до предела: первый же забитый мяч наглухо закроет игру со стороны отличившегося коллектива.

            ### 11. Тренеры
            - **Валид Реграги (Марокко):** Архитектор марокканской сказки. Обладает непререкаемым авторитетом, тактически гибок и мастерски проводит точечные замены в плей-офф.
            - **Джесси Марш (Канада):** Элитный мотиватор с европейским бэкграундом. Сплотил североамериканцев, но его прямолинейному и энергозатратному футболу будет невероятно трудно противостоять шахматам Реграги.

            ### 12. Аналитики и букмекеры
            Букмекерские компании выставили аккуратную кубковую линию на основное время матча
            - Победа Марокко — **1.95**
            - Ничья — **3.40**
            - Победа Канады — **4.10**

            ### 13. Ключевые факторы и новости
            Фактор трибун Хьюстона окажет яростную поддержку канадцам, однако марокканская диаспора в США традиционно организует мощнейший шумовой отпор. Политического подтекста нет — нас ждет чистый, бескомпромиссный футбол.

            ### 14. Арбитр
            ФИФА традиционно дает жесткие инструкции судьям пресекать грубость в переходных фазах плей-офф. Поскольку Канада строит игру на тактических фолах при срыве атак, арбитраж будет строгим и принципиальным.


            ## 2) Футбольные метрики

            - **Атака:** Марокко имеет более высокое качество создаваемых моментов — средний показатель **xG** равен **1.68** за счет комбинаций Диаса и фланговых защитников. У Канады **xG** скромнее — **1.12** (угроза идет в основном со стандартов и вертикальных прорывов). Конверсия ударов у африканцев в разы выше за счет топ-класса исполнителей (Зиеш, Диас, Саибари). По ожидаемым ассистам (**xA**) преимущество у Хакими и Мазрауи (**1.24** против **0.85** у канадцев).
            - **Продвижение:** Марокко заберет себе игровое и территориальное пространство. Прогнозируемый **Field Tilt** (наклон поля) составит **58% на 42%** в пользу «Атласских львов». Точность передач у Марокко составляет породистые **85.5%** против **78.2%** у Канады. Канадцы слишком часто рискуют и теряют мяч из-за вертикального стиля Марша.
            - **Защита и прессинг:** Канада демонстрирует сумасшедший показатель **PPDA** (**8.4**) — они вступают в отбор каждые 8 передач соперника. Марокко прессингует экономно и избирательно (**PPDA 11.6**), предпочитая встречать в среднем блоке. Софьян Амрабат гениально собирает все бесхозные мячи (**Recoveries**) перед своей штрафной. Высокий прессинг канадцев эффективен, но отнимает слишком много физических сил, что критично в случае овертайма.


            ## 3) Расчет матча методом Пуассона

            Берем очищенные показатели xG и xGA команд на ЧМ-2026, скорректированные на фактор закрытого стадиона и специфику плей-офф (результативность на этой стадии традиционно снижается на 15%).
            - **Лямбда Марокко (ожидаемые голы):** 1.45
            - **Лямбда Канады (ожидаемые голы):** 0.95

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            1:0 | 14.6%
            1:1 | 13.9%
            2:0 | 10.6%
            0:0 | 10.1%
            2:1 | 10.1%
            0:1 | 9.6%

            **Итог Пуассона:** Общая вероятность триумфа Марокко в основное время — **48.2%**, ничейный исход котируется в **26.4%**, победа Канады — **25.4%**. Модель предрекает максимально плотный кубковый матч с высокой вероятностью перехода игры в овертайм.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Букмекеры выставили коэффициент на П1 равным 1.95 (вероятность 51.3%), в то время как чистый Пуассон дает Марокко лишь 48.2%. Линия немного переоценивает шансы североафриканцев в основное время на фоне их громкой победы над Нидерландами. Марокко оставило все физические и эмоциональные силы в 120-минутном триллере с голландцами всего пару дней назад. Канада же прошла ЮАР в куда более экономном режиме за 90 минут.
            - Вероятность ничейного исхода в основное время недооценена рынком. Стадия 1/8 финала, накопленная усталость Марокко и строгая оборонительная структура Канады делают позиции **Ничья в основное время** или **Канада не проиграет (Х2)** максимально валуйными.


            ## 5) Анализ общей информации

            Марокко — гораздо более классная, сыгранная и ментально зрелая сборная. Команда Реграги умеет терпеть, сушить и выжимать моменты из полунамеков. Однако их главный враг на текущую секунду — физическое истощение после изнурительной битвы в 1/16 финала. Канада Джесси Марша со свежими силами включит безумный прессинг с первых секунд. Если африканцы выдержат стартовые 30 минут, то за счет класса полностью заберут контроль во втором тайме. Опыт Реграги скажется: он знает, как наказывать за свободные зоны при агрессивном давлении. Нас ждет осторожная игра, где класс Марокко столкнется со скоростью Альфонсо Дэвиса.


            ## 6) Лучшие ставки на матч

            - **Основная ставка (Надежно):** Проход Марокко в 1/4 финала за коэффициент **1.52**. (Класс исполнителей, феноменальный опыт Яссина Буну в сериях пенальти и глубина скамейки марокканцев в конечном итоге сделают разницу, даже если встреча выйдет за рамки 90 минут).
            - **Валуйная ставка:** Ничья (Х) в основное время за коэффициент **3.40**. (Марокко истощено физически после Нидерландов, а Канада закроется в защите, понимая силу соперника. Высока вероятность зафиксировать кубковые 0:0 или 1:1 к 90-й минуте).
            - **Статистический выбор:** Тотал желтых карточек Канады Больше (2.0) за коэффициент **1.85**. (Вертикальный стиль Джесси Марша завязан на жестком мелком фоле для срыва быстрых атак Марокко, особенно против реактивных Диаса и Хакими. В плей-офф арбитры будут судить максимально строго).`
    
         },
        { id: 90, date: "Воскресенье, 5 июля", time: "00:00", stadium: "Филадельфия • Линкольн Ф.", team1Code: "py", team1Text: "Парагвай", team2Code: "fr", team2Text: "Франция", prob1: 15, probX: 24, prob2: 61, analysisText:
            `Яркая кубковая вывеска в рамках 1/8 финала чемпионата мира 2026 года, где безоговорочный европейский гранд проэкзаменует главного творца сенсаций прошлой стадии. Встреча запланирована на знаковый день — 4 июля (День независимости США), а победитель этой пары выходит на сильнейшего в дуэли Канада — Марокко. В Филадельфии нас ожидает классическое столкновение убойной атакующей мощи и самоотверженного латиноамериканского «автобуса».

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Статус матча:** 1/8 финала — важнейший раунд плей-офф, где цена любой ошибки равняется вылету с мундиаля.
            - **Поле и стадион:** США, Филадельфия, «Филадельфия Стэдиум» (Lincoln Financial Field). Открытая арена премиум-класса с натуральным газоном, известная своей жесткой и очень быстрой поляной.
            - **Климат:** Начало июля на восточном побережье США характеризуется высокой влажностью и дневной температурой около **+30°C…+32°C**. К стартовому свистку в 17:00 жара начнет немного спадать, но душный воздух станет серьезным испытанием для энергозатратного стиля команд. Более привычные к такому климату южноамериканцы могут получить скрытое преимущество в концовке.
            - **Фаворит:** Франция — безусловный фаворит. «Ле Блё» прибыли на турнир в статусе одного из главных претендентов на мировую корону. Парагвай («Альбирроха») — классический «андердог-убийца», сотворивший монументальный апсет на предыдущем этапе.
            - **Опыт в чемпионатах:** Франция — финалист ЧМ-2022, чемпион мира 2018 года и обладатель колоссального кубкового опыта. Парагвай вернулся на мундиаль после долгого простоя и уже повторил свой исторический максимум, выйдя в 1/8 финала.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Франция стабильно удерживает 2-ю строчку в мировом рейтинге. Парагвай находится за пределами первой пятидесяти, но текущий турнир ломает любые предстартовые расклады.
            - **Рейтинг игроков:** Пропасть в индивидуальном классе. Французский ростер собран из суперзвезд «Реала», «ПСЖ», «Баварии» и «Интера» во главе с Килианом Мбаппе. Состав Парагвая гораздо скромнее, но имеет качественных лидеров в лице Хулио Энсисо («Брайтон») и Мигеля Альмирона («Ньюкасл»).

            ### 3. Текущая форма на турнире
            - **Франция:** Безупречный ход по дистанции. Французы уверенно выиграли сложную Группу I (победы над Сенегалом и Ираком), а в 1/32 финала прагматично и без шансов разгромили крепкую Швецию (**3:0**). Команда демонстрирует идеальный баланс между убойной атакой и стерильным контролем сзади.
            - **Парагвай:** Настоящая кубковая драма. Турнир начался с поражения от США, после чего команда вырвала победу у Турции и зацепила ничью с Австралией. В 1/32 финала парагвайцы сотворили главную сенсацию, выстояв против Германии (**1:1**) и выбив четырехкратных чемпионов мира в серии пенальти. Ментально они сейчас неуязвимы.

            ### 4. Форма и основная статистика
            - **Забитые/пропущенные:** Франция наколотила 8 голов за 4 матча турнира при всего одном пропущенном мяче. Парагвай забил 4 гола и пропустил 4 (с учетом 120 минут изнурительной борьбы против немцев).
            - **Серии:** Франция идет на серии из трех побед подряд в основное время на ЧМ-2026. Парагвай не выигрывает в основное время два матча кряду, но при этом не проигрывает три встречи подряд.

            ### 5. Дополнительная статистика (Тренды)
            - **Владение мячом:** Франция забирает мяч у любого оппонента (в среднем **58%–62%**). Парагвай играет строго вторым номером: их среднее владение составляет скромные **39%**, и против «Ле Блё» они сознательно отдадут инициативу с первых секунд.
            - **Удары и угловые:** Французы наносят колоссальное количество ударов (в среднем **16.4** за матч). Парагвай уповает на редкие контратаки и стандарты (**8.2** удара). По угловым ожидается тотальный перекос в пользу фаворита.
            - **Дисциплина:** Парагвай лидирует по количеству фолов среди всех оставшихся участников. В игре с Германией они собрали 4 желтые карточки, действуя на грани красной. Франция играет значительно чище, полагаясь на перехваты.

            ### 6. Очные встречи
            - Матчи этих команд на чемпионатах мира — это историческая драма. Болельщики помнят ЧМ-1998, когда в 1/8 финала Франция сломила героическое сопротивление Парагвая с Хосе Луисом Чилавертом только благодаря «золотому голу» Лорана Блана в овертайме. Нынешняя сборная Парагвая имеет те же ДНК — жесткость, терпение и самоотдача.

            ### 7. Тактика и стиль игры
            - **Франция (4-3-3 / 4-2-3-1):** Гибкая и вариативная модель Дидье Дешама. Ключевые элементы — полная свобода Килиана Мбаппе на левом фланге/полуфланге и реактивные смещения Брэдли Барколя. Мощный кулак в центре поля обеспечивает мгновенный контрпрессинг при потерях.
            - **Парагвай (4-4-2 / 5-4-1):** Сверхкомпактный низкий блок. Команда выстраивает две плотные оборонительные линии перед своей штрафной. Главная фишка — вертикальные забросы на ход скоростному Альмирону и индивидуальный дриблинг Энсисо при выходе из обороны.

            ### 8. Составы, травмы и звезды
            - **Франция:** Дешам имеет роскошь ротации благодаря невероятной глубине состава. Кадровых потерь нет, Мбаппе и Барколя в огне, пара центрбеков Салиба — Упамекано действует безошибочно.
            - **Парагвай:** Главная проблема — физическое истощение после 120 минут с немцами. Есть микроповреждения у двух игроков оборонительной линии, их участие под вопросом. Дисквалификаций нет, но глубина скамейки не позволяет безболезненно заменить лидеров.

            ### 9. Статистика отдельных игроков
            - **Килиан Мбаппе (Франция):** Нацелен на очередную «Золотую бутсу» — его дубль в ворота Швеции показал, что лидер французов находится в пиковой форме.
            - **Хулио Энсисо (Парагвай):** Главный креативный центр сборной, способный сотворить остроту из ничего за счет индивидуального мастерства.

            ### 10. Настрой и важность матча
            Для Франции этот матч — обязательный барьер на пути к титулу, на команду давит статус фаворита, ведь любой исход, кроме уверенного прохода, обернется катастрофой на родине. На Парагвай не давит абсолютно ничего: они уже герои страны после вылета Германии, поэтому будут раскрепощены и готовы умереть на поле ради еще одного чуда.

            ### 11. Тренеры
            - **Дидье Дешам (Франция):** Прожженный кубковый волк. Идеально умеет играть против закрытых систем, никогда не форсирует события и действует прагматично ради результата.
            - **Густаво Альфаро (Парагвай):** Профессор оборонительного футбола. Умеет ментально накачать подопечных так, что они прыгают выше головы, но сдержать Францию — задача космического масштаба.

            ### 12. Аналитики и букмекеры
            Весь мир ожидает затяжной осады парагвайской крепости. Эксперты не верят в повторение чуда, выставляя на основное время следующие коэффициенты
            - Победа Франции — **1.38**
            - Ничья — **4.80**
            - Победа Парагвая — **9.00**

            ### 13. Ключевые факторы и новости
            Фактор трибун. Филадельфия будет заполнена до отказа в День независимости США, и нейтральные американские болельщики традиционно будут поддерживать андердога, обеспечивая Парагваю шумовую помощь.

            ### 14. Арбитр
            Против техничных французов южноамериканцы будут много и жестко фолить. Если рефери с первых минут начнет карать за мелкий фол желтыми карточками, оборонительный план Парагвая посыплется, так как защитники потеряют агрессию в отборе.


            ## 2) Футбольные метрики

            - **Атака:** Франция демонстрирует один из лучших показателей **xG** на турнире — в среднем **2.15** за матч благодаря высочайшей креативности флангов. У Парагвая **xG** равен скромным **0.78** (моменты создаются с огромным трудом, преимущественно со стандартов). Ожидаемые ассисты (**xA**) также фиксируют тотальный перекос: **1.72** у европейцев против **0.48** у номинальных гостей.
            - **Продвижение:** Франция тотально доминирует через продвижение мяча низом. Килиан Мбаппе лидирует по продвижениям на дриблинге (Runs) в финальную треть поля. Прогнозируемый **Field Tilt** (наклон поля) составляет **68% на 32%** в пользу «Ле Блё». Точность передач у Франции составляет **88.2%**, в то время как у Парагвая показатель равен всего **71.4%** из-за обилия лонгболлов и простых выносов под давлением.
            - **Защита и прессинг:** Франция использует сбалансированный и умеренный прессинг с индексом **PPDA** в районе **10.2**. У Парагвая этот показатель равен **16.5**, что наглядно подтверждает их отказ от давления на чужой половине поля — южноамериканцы встречают оппонентов исключительно в своей зоне, выжигая собственный пятачок.


            ## 3) Расчет матча методом Пуассона

            Учитывая запредельную атакующую мощность Франции, усталость парагвайцев после овертайма с Германией и традиционный прагматизм стадии плей-офф, вводные параметры ожидаемых голов на 90 минут выглядят следующим образом
            - **Лямбда Франции (ожидаемые голы):** 2.10
            - **Лямбда Парагвая (ожидаемые голы):** 0.55

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            2:0 | 22.3%
            1:0 | 21.2%
            3:0 | 15.6%
            1:1 | 6.1%
            0:0 | 5.8%
            0:1 | 3.2%

            **Итог Пуассона:** Общая вероятность триумфа Франции в основное время составляет **72.4%**, ничейный исход оценивается в **16.8%**, победа Парагвая — **10.8%**. Математическая модель однозначно указывает на уверенную сухую победу европейского гранда.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Букмекерский коэффициент 1.38 на чистую победу Франции идеально отражает реальную вероятность по Пуассону (72.4%), поэтому валуя в чистом исходе П1 нет. Настоящее VALUE сокрыто на рынке забитых голов фаворита. Парагвай оставил все эмоции и физические силы в битве с Германией. Сдержать свежую, атакующую на полную мощность Францию уставший южноамериканский блок на протяжении 90 минут не сможет. 
            - Как только французы забьют первый мяч, Парагваю придется раскрываться, что для них губительно. Ставка на **Индивидуальный Тотал Франции Больше 2.0** за коэффициент выше **2.10** несет в себе отличную математическую выгоду.


            ## 5) Анализ общей информации

            Сказка Парагвая на ЧМ-2026 была прекрасна, но 1/8 финала против Франции — это тупик для нынешней сборной La Albirroja. Главные факторы против андердога — критическая усталость после Германии и колоссальная разница в классе исполнителей. Дешам детально изучил ошибки немецкого тренерского штаба и не позволит своей команде расслабиться. Франция заберет мяч, намертво зажмет Парагвай на его трети поля и будет методично расшатывать оборонительные порядки. Гол Франции — исключительно вопрос времени, у южноамериканцев банально не хватит свежести в ногах, чтобы бегать за Мбаппе и Барколя весь матч.


            ## 6) Лучшие ставки на матч

            - **Основной выбор (Надежно):** Победа Франции с форой (-1) за коэффициент **1.62**. (Наиболее прагматичный и обоснованный вариант. Франция обязана побеждать уставшего соперника на классе и опыте с разницей в 1–2 мяча).
            - **Валуйная ставка:** Индивидуальный Тотал Франции Больше (2.0) голов за коэффициент **2.10**. (С учетом физического истощения Парагвая, во втором тайме их оборонительные редуты неизбежно начнут давать сбои, что позволит Франции забить уставшему оппоненту более двух раз).
            - **Статистический выбор:** Тотал желтых карточек Парагвая Больше (2.5) за коэффициент **1.80**. (Чтобы остановить реактивных Мбаппе, Дембеле и Барколя, парагвайским защитникам придется регулярно сбивать темп тактическими фолами, что выльется в обилие предупреждений).`
    
         },
        { id: 91, date: "Воскресенье, 5 июля", time: "23:00", stadium: "Нью-Джерси • МетЛайф", team1Code: "br", team1Text: "Бразилия", team2Code: "no", team2Text: "Норвегия", prob1: 67, probX: 22, prob2: 11, analysisText:
            `Интригующая кубковая вывеска в рамках 1/8 финала чемпионата мира 2026 года. Безжалостная южноамериканская футбольная машина сталкивается лицом к лицу с самой дерзкой и атакующей европейской сборной нового поколения. В Ист-Резерфорде нас ожидает грандиозное тактическое сражение: россыпь бразильских виртуозов попытается сломать исторический скандинавский комплекс и сдержать лучшего центрфорварда планеты.

            ## 1) Общая аналитика

            ### 1. Общая картина
            - **Статус матча:** 1/8 финала — стадия плей-офф, где малейшая осечка означает мгновенный вылет с главного турнира четырехлетия.
            - **Поле и стадион:** США, Ист-Резерфорд, «Нью-Йорк Нью-Джерси Стэдиум» (MetLife Stadium). Временный натуральный травяной газон высочайшего качества, уложенный специально под жесткие регламентные требования ФИФА.
            - **Климат:** Начало июля на северо-востоке США принесет умеренную жару (**+26°C…+29°C**) с вероятностью высокой влажности. Матч вечерний (16:00 по местному времени), экстремального температурного прессинга не прогнозируется. Условия абсолютно комфортны для демонстрации интенсивного и быстрого футбола.
            - **Фаворит:** Бразилия — традиционный фаворит любого футбольного форума. Однако Норвегия с ее суперзвездным атакующим потенциалом по праву считается самым опасным и непредсказуемым скрытым андердогом этой стадии.
            - **Опыт в чемпионатах:** «Селесао» — пятикратные чемпионы мира и постоянные участники решающих кубковых стадий. Норвегия впервые за долгие десятилетия пробилась на ЧМ, с ходу преодолев групповой этап и сито 1/32 финала. Разница в кубковом бэкграунде колоссальна, но голод скандинавов до больших побед нивелирует этот дефицит.

            ### 2. Рейтинг команд и футболистов
            - **ФИФА:** Бразилия стабильно оккупировала место в топ-5 мирового рейтинга. Норвегия за последние два года совершила впечатляющий рывок и закрепилась в топ-25 лучших сборных планеты.
            - **Рейтинг игроков:** У Бразилии в наличии россыпь звезд первой величины (Винисиус Жуниор, Родриго, Рафинья, Бруно Гимарайнс, Габриэл Магальяйнс). У Норвегии есть Эрлинг Холанд (один из главных фаворитов в гонке за «Золотой мяч»), Мартин Эдегор (мозг и капитан команды) и восходящая звезда Антонио Нуса. По общей глубине состава перевес на стороне южноамериканцев, но по пиковой силе лидера атаки скандинавы ничуть не уступают.

            ### 3. Текущая форма на турнире
            - **Бразилия:** На групповом этапе уверенно застолбила за собой первую строчку в Группе C (7 очков), опередив грозное Марокко. В 1/32 финала бразильцы в тяжелом, вязком противостоянии сломили сопротивление дисциплинированной Японии со счетом **2:1** благодаря спасительному голу Габриэла Мартинелли на 90+5-й минуте.
            - **Норвегия:** Вышла со второго места из убойной Группы I, пропустив вперед лишь Францию. В 1/32 финала скандинавы выдали яркий перформанс, переиграв мощную сборную Кот-д’Ивуара со счетом **2:1**. Победный мяч на 86-й минуте хладнокровно оформил Эрлинг Холанд с филигранной передачи Антонио Нусы.

            ### 4. Форма и основная статистика
            - **Забитые/пропущенные:** Бразилия наколотила 9 голов за 4 игры турнира при 2 пропущенных. Норвегия забила 10 мячей и пропустила 8 — налицо очевидный игровой дисбаланс в сторону сверхатакующих действий при уязвимой оборонительной линии.
            - **Серии:** Бразилия идет без поражений на текущем мундиале (3 победы, 1 ничья). Норвежцы отличаются высокой стабильностью у чужих ворот, забивая абсолютно в каждом матче ЧМ-2026.

            ### 5. Дополнительная статистика (Тренды)
            - **Владение мячом:** Бразилия — тотальный доминант, контролирующий мяч в среднем **60%** игрового времени. Норвегия исповедует более гибкую модель: они способны забрать инициативу, но против грандов сознательно уповают на разящие вертикальные контратаки (**48%** владения).
            - **Удары и угловые:** Бразильцы бьют много и преимущественно из пределов штрафной площади (в среднем **15.2** удара за матч). Норвегия делает акцент на доставку мяча до Холанда в финальную треть и резкие фланговые прострелы. По угловым перевес на стороне южноамериканцев — **6.2** против **4.5** в среднем за игру.
            - **Дисциплина:** Обе сборные действуют на поле достаточно корректно. В тяжелой встрече с японцами бразильцы схлестнулись на 2 желтые карточки. Норвежцы в физически плотном матче против ивуарийцев получили всего 1 предупреждение.

            ### 6. Очные встречи
            - Исторический факт, будоражащий футбольный мир: сборная Бразилии ни разу в истории не обыгрывала Норвегию в официальных матчах. За четыре очные встречи (включая легендарный поединок на ЧМ-1998, завершившийся победой скандинавов 2:1) зафиксировано 2 победы Норвегии и 2 ничьи. Этот психологический комплекс добавляет игре особый подтекст.

            ### 7. Тактика и стиль игры
            - **Бразилия (4-3-3):** Модель заточена под изоляцию Винисиуса на левом фланге и создание для него ситуаций «1 в 1». Центр поля цементируют Каземиро и Бруно Гимарайнс, обеспечивая свободу атакующей тройке и агрессивный высокий контрпрессинг при потерях.
            - **Норвегия (4-3-3 / 4-2-3-1):** Главное тактическое оружие — связка Эдегора и Холанда. Мартин тонкими передачами находит свободные зоны, куда на космической скорости врывается Эрлинг. Антонио Нуса отвечает за дриблинг на фланге. Слабое место — медлительная пара центральных защитников, которой будет тяжело против маневренной атаки южноамериканцев.

            ### 8. Составы, травмы и звезды
            - **Бразилия:** Все ключевые исполнители находятся в строю. Защитник Данило получил небольшое повреждение в прошлой игре, но медицинский штаб ожидает его в стартовом составе. Родриго и Винисиус готовы разрывать фланги с первых минут.
            - **Норвегия:** Кадровых потерь в ключевой группе (Эдегор, Холанд, Нуса, Берге) нет. Команда подходит к историческому поединку в оптимальном сочетании и отличном физическом тонусе после победы в основное время.

            ### 9. Статистика отдельных игроков
            - **Винисиус Жуниор (Бразилия):** Главный мотор команды, стягивающий на себя по несколько защитников соперника и создающий зоны для партнеров.
            - **Эрлинг Холанд (Норвегия):** Лучший снайпер скандинавов на турнире, способный конвертировать в гол малейший полумомент у чужих ворот.

            ### 10. Настрой и важность матча
            Для Норвегии это главный матч жизни — шанс сокрушить гегемона мирового футбола и навсегда вписать свои имена в историю. Бразилия находится под колоссальным прессингом со стороны домашних медиа: на родине не поймут вылета в 1/8 финала от европейской сборной среднего эшелона. Мотивация запредельная у обоих коллективов, но груз ответственности ощутимо сильнее давит на «Селесао».

            ### 11. Тренеры
            - **Бразильский штаб:** Делает ключевую ставку на индивидуальный класс, высокое исполнительское мастерство и сыгранность обоймы в позиционной атаке.
            - **Норвежский штаб:** Отлично выстраивает тактический план под конкретных оппонентов. Скандинавы способны удивить бразильцев высокой плотностью в полузащите и перекрытием зон между линиями.

            ### 12. Аналитики и букмекеры
            Большинство футбольных экспертов прогнозируют результативное зрелище. Бразилия котируется фаворитом, но коэффициенты на гол Норвегии предельно низкие
            - Победа Бразилии — **1.65**
            - Ничья — **4.10**
            - Победа Норвегии — **5.20**

            ### 13. Ключевые факторы и новости
            Главная дилемма для Бразилии — как нейтрализовать Холанда. Центрбеки Габриэл Магальяйнс и Маркиньос прекрасно знают повадки норвежца по жестким битвам в АПЛ и Лиге чемпионов. Это персональное противостояние станет определяющим фактором матча.

            ### 14. Арбитр
            Встреча ожидается жесткой, но максимально корректной. Бразильцы будут сознательно провоцировать норвежских защитников на дриблинге, что может обернуться ранними желтыми карточками для оборонительной линии скандинавов.


            ## 2) Футбольные метрики

            - **Атака:** Бразилия имеет солидный показатель **xG** — в среднем **2.28** за матч за счет высокой частоты подходов к чужой штрафной. У Норвегии **xG** равен **1.85**, но при этом скандинавы демонстрируют аномально высокую конверсию моментов благодаря эталонной точности Холанда. Ожидаемые ассисты (**xA**) распределены у бразильцев между Рафиньей, Родриго и Винисиусом (**1.64**), тогда как у Норвегии львиную долю **xA** (**1.32**) генерирует единолично Мартин Эдегор. Показатель **xG o n Target** у норвежцев максимально близок к xG — каждый их удар несет смертельную угрозу для Алиссона.
            - **Продвижение:** Бразилия безоговорочно лидирует по показателю Runs (продвижения на дриблинге через фланговые зоны). Норвегия, напротив, доминирует по Progressive Passes из центральной зоны благодаря вертикальным передачам Эдегора. Среднее количество ключевых передач: **13.5** у южноамериканцев против **10.2** у европейцев. Прогнозируемый **Field Tilt** (наклон поля) — **56% на 44%** в пользу Бразилии, которая заберет территорию, пока Норвегия караулит свободные зоны. Точность паса: **87.4%** у Бразилии, **81.2%** у Норвегии.
            - **Защита и прессинг:** Бразилия включает интенсивный высокий прессинг сразу в момент потери с индексом **PPDA 9.1**. Норвегия предпочитает садиться в организованный средний блок (**PPDA 12.4**), не выбрасываясь на быструю атакующую линию соперника. Южноамериканцы сильны в перехватах на чужой половине поля за счет Бруно Гимарайнса. Норвежцы дисциплинированно собирают подборы в своей штрафной силами Сандера Берге.


            ## 3) Расчет матча методом Пуассона

            Учитывая атакующую мощь и очевидную уязвимость оборонительных редутов Норвегии, а также высочайший класс исполнителей у Бразилии, расчетные параметры xG (Лямбда) на 90 минут выглядят следующим образом
            - **Лямбда Бразилии (ожидаемые голы):** 1.95
            - **Лямбда Норвегии (ожидаемые голы):** 1.35

            ## Вероятности точного счета (основное время)
            Счет | Вероятность по модели
            1:1 | 12.8%
            2:1 | 12.5%
            2:0 | 9.0%
            1:2 | 8.6%
            2:2 | 7.8%

            **Итог Пуассона:** Вероятность победы Бразилии в основное время составляет **49.8%**, ничейный исход котируется в **23.4%**, триумф Норвегии — **26.8%**. Математика прогнозирует плотный поединок с высокой вероятностью результативной ничьей.


            ## 4) Поиск в линии VALUE (Честной ставки)

            Букмекеры заметно переоценивают шансы Бразилии в основное время, предлагая на П1 заниженный коэффициент 1.65 (что эквивалентно 60.6% вероятности против расчетных 49.8% по Пуассону). Бразилия серьезно намучилась с Японией и тратит колоссальное количество энергии на взлом эшелонированных оборон. 
            - Норвегия, напротив, идеально приспособлена ловить фаворитов на встречных курсах. Исторический комплекс «Селесао» против скандинавов и фактор гениального Холанда делают позиции **Норвегия с форой (+1)** или **Норвегия не проиграет (Х2)** максимально валуйными и выгодными для ставки на дистанции.


            ## 5) Анализ общей информации

            Нас ожидает самый открытый, бескомпромиссный и зрелищный матч на стадии 1/8 финала. Бразилия ожидаемо заберет мяч под контроль, начнет атаковать позиционно и неизбежно станет оголять свободные зоны за спинами защитников. Для Норвегии это идеальная среда обитания. Мартин Эдегор получит необходимый простор для разгона быстрых контратак, а Эрлинг Холанд заставит совершать ошибки центральных защитников южноамериканцев. Легкой прогулки для пятикратных чемпионов мира точно не будет; игра с высокой долей вероятности может выйти за пределы 90 минут.


            ## 6) Лучшие ставки на матч

            - **Основная ставка (Надежно):** Обе забьют (ОЗ) — Да за коэффициент **1.75**. (Убойный атакующий потенциал Норвегии во главе с Холандом обязательно найдет брешь в бразильской обороне, но и сами скандинавы со своей нестабильной защитой не удержат сухой матч против Винисиуса и Родриго).
            - **Валуйная ставка:** Норвегия с форой (+1) за коэффициент **1.88**. (Отличный выбор на фоне сильно заниженного коэффициента букмекеров на чистую победу Бразилии. Норвежцы имеют все ресурсы, чтобы как минимум зацепиться за ничью в основное время).
            - **Статистический выбор:** Тотал голов в матче Больше (2.5) за коэффициент **1.80**. (Метрики xG обеих национальных команд и контратакующий стиль Норвегии прямо указывают на высокую общую результативность этой встречи).`
    
         },
        { id: 92, date: "Понедельник, 6 июля", time: "03:00", stadium: "Мехико • Ацтека", team1Code: "mx", team1Text: "Мексика", team2Code: "gb-eng", team2Text: "Англия", prob1: 29, probX: 31, prob2: 40,  analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Турнирный статус:** Полноценный и бескомпромиссный раунд 1/8 финала (knockout stage) Чемпионата мира 2026 года. На кону стоит путевка в четвертьфинал главного футбольного первенства планеты. В случае ничейного результата по итогам 90 минут регламентом предусмотрены два экстра-тайма по 15 минут и серия послематчевых пенальти.
            * **Поле и климатические условия:** Турнир проходит на аренах Северной Америки. Мексиканская сборная получает колоссальное, определяющее преимущество «домашних стен», если поединок проводится непосредственно на ее территории, либо пользуется оглушительной и яростной поддержкой многомиллионной диаспоры в США. Климатический фактор в июле характеризуется изнуряющей жарой и экстремальной влажностью, к чему латиноамериканские футболисты адаптированы заметно лучше европейцев.
            * **Фаворит и опыт:** Согласно букмекерским котировкам и общему кадровому потенциалу, статус минимального фаворита удерживает Англия. Однако сборная Мексики на домашних для себя крупных турнирах традиционно демонстрирует невероятную стойкость и регулярно совершает громкие апсеты.

            ### 2. Рейтинг команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Англичане стабильно удерживают позиции в Топ-5 лучших сборных планеты. Мексика располагается в районе 12–15 мест, являясь ведущей силой своего региона.
            * **Класс исполнителей:** По суммарной трансферной стоимости состава и представительству игроков в элитных европейских топ-клубах (Джуд Беллингем, Гарри Кейн, Деклан Райс) родоначальники футбола значительно превосходят мексиканцев. 

            ### 3. Текущая игровая форма на ЧМ-2026
            * ** Мексика:** Демонстрирует идеальный, монументальный ход по турнирной дистанции. В рамках Группы А команда оформила три сухие победы из трех возможных: уверенно переиграли ЮАР (2:0), прагматично одолели Южную Корею (1:0) и разгромили Чехию (3:0). В рамках 1/32 финала мексиканцы на классе прошли крепкий Эквадор (**2:0**). Примечательно, что подопечные номинальных хозяев еще не пропустили ни одного мяча на текущем мундиале.
            * ** Англия:** На групповом этапе в квартете L набрали 7 очков, переиграв Хорватию (4:2), расписав нулевую ничью с Ганой (0:0) и победив Панаму (2:0). Однако на стадии 1/32 финала англичане столкнулись с жесточайшим, вязким сопротивлением со стороны ДР Конго: по ходу встречи европейцы уступали 0:1, и лишь спасительный дубль Гарри Кейна в самой концовке поединка (на 75-й и 86-й минутах) позволил вырвать тяжелейшую волевую победу.

            ### 4. Основная статистика турнира
            * **Мексика:** 4 сыгранных матча — 4 чистые победы. Абсолютно феноменальная разница забитых и пропущенных мячей: **8–0**. Средняя результативность команды зафиксирована на отметке 2.0 гола за игру.
            * **Англия:** 4 сыгранных матча — 3 победы и 1 ничейный исход. Общая разница мячей: **8–3**. Средняя атакующая результативность аналогична — ровно 2.0 забитых гола за встречу.

            ### 5. Дополнительная статистика и игровые микротренды
            * **Стиль Мексики:** Прагматичная модель игры с четким контролем темпа и ритма матча. В среднем мексиканцы владеют мячом **54%** времени, демонстрируя высочайшую точность оборонительных перестроений и допуская минимальное количество стандартов у собственных ворот.
            * **Стиль Англии:** Выраженный акцент на агрессивные фланговые подачи (Букайо Сака, Нони Мадуэке) и розыгрыши стандартных положений. Средний показатель наносимых ударов у англичан выше, однако команда допускает непозволительно много опасных контратак на свои ворота.

            ### 6. История очных встреч (Head-to-Head)
            Исторический баланс сил находится на стороне европейской сборной, однако на решающих стадиях плей-офф Чемпионатов мира команды не пересекались на протяжении очень долгого времени. Фактор родного региона для мексиканцев полностью нивелирует любые исторические тренды прошлых лет.

            ### 7. Тактико-стратегический рисунок
            * **Мексика:** Сбалансированная тактическая схема 4-1-2-3. Защитный центральный блок во главе с Сесаром Монтесом и Йоханом Васкесом выглядит на этом турнире монументально и безошибочно. Быстрый переход из обороны в атаку строится через реактивные фланговые коридоры, где действуют Хулиан Кинёнес и Роберто Альварадо.
            * **Англия:** Классическая прагматичная модель 4-2-3-1. В центре поля используется тяжеловесный кулак Райс — Андерсон (или Кобби Майну), а функции главного креативного центра возложены на Джуда Беллингема. Главная тактическая проблема англичан — системные провалы и потеря зон в переходных фазах (что наглядно подсветили матчи против Хорватии и ДР Конго).

            ### 8. Составы, травмы и ротация
            * **Мексика:** В минувшем матче с Эквадором Рауль Хименес вышел в стартовом составе, но во втором тайме его без потери качества сменил нацеленный на ворота Сантьяго Хименес. Вся основная обойма латиноамериканцев полностью здорова и готова к бою. В створе ворот тренерский штаб делает ставку на более молодого Ранхеля, оставляя легендарного Гильермо Очоа на скамейке запасных.
            * **Англия:** Из-за кадровых проблем и вынужденной ротации тренерский штаб пробует в старте О'Рейли и Спенса на флангах обороны, что заметно снижает общую сыгранность защитной линии. Джон Стоунз начинал встречу с ДР Конго на скамейке, подменяя Райса лишь в концовке, что сигнализирует о продолжающемся поиске игрового баланса.

            ### 9. Индивидуальный перформанс лидеров
            * **Хулиан Кинёнес / Рауль Хименес (Мексика):** Находятся в прекрасном игровом тонусе, именно их точные и хладнокровные удары принесли важнейшую победу над Эквадором.
            * **Роберто Альварадо (Мексика):** Креативный вингер, пребывающий в отличной физической форме и терзающий оборону соперников на фланге.
            * **Гарри Кейн (Англия):** Безоговорочный лидер атаки и настоящий спаситель нации, чей дубль в 1/32 финала уберег родоначальников футбола от грандиозного позора.
            * **Джуд Беллингем (Англия):** Вынужден играть глубже привычной позиции, имеет в пассиве желтую карточку за срыв атаки в прошлом матче и действует на поле на грани серьезного нервного срыва под давлением прессы.

            ### 10. Мотивационный вектор
            Стадия 1/8 финала — цена малейшей ошибки становится максимальной. Для Мексики это главный, исторический матч поколения на переполненной домашней арене. Для Англии — суровая необходимость подтверждать свой элитный статус под жесточайшим прессингом британских СМИ. Мотивация обеих сторон запредельная, высока вероятность затяжного матча со сценарием овертайма.

            ### 11. Тренерский фактор
            Мексиканский тренерский штаб проделал феноменальную работу, выстроив безупречную и до сих пор непробиваемую оборону (0 пропущенных мячей). Наставник англичан, напротив, излишне прагматичен и склонен принудительно «сушить» игру при минимальном преимуществе в счете, что регулярно оборачивается колоссальными проблемами (как в игре с ДР Конго).

            ### 12. Аналитический консенсус рынка
            Букмекеры продолжают по инерции выставлять Англию фаворитом пары, предлагая коэффициент в районе **2.10** на победу европейцев в основное время, против **3.60** на триумф Мексики. Профессиональные аналитики отмечают, что текущая идеальная оборонительная форма мексиканцев сильно недооценена рынком.

            ### 13. Психологический контекст
            На сборную Англии оказывается колоссальное, удушающее давление со стороны ведущих британских спортивных изданий за блеклую, академичную и неубедительную игру против конголезцев. Мексика, напротив, находится на невероятной волне национального подъема и пользуется абсолютной синергией со своими болельщиками.

            ### 14. Судейский фактор
            Назначение арбитра из европейской или южноамериканской зоны окажет прямое влияние на строгость трактовки эпизодов. В раунде плей-офф четко прослеживается тренд на фиксацию любых мелких тактических фолов, что стратегически крайне выгодно дисциплинированной и тактически подкованной Мексике.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе и в первом раунде плей-офф ЧМ-2026. Данные структурированы в лаконичный список.*

            * **xG / xA / xGOT (Ожидаемые события):**
            * Англия за счет индивидуального класса Кейна и Беллингема имеет высокий накопленный показатель xG (**~1.8** за матч). Однако Мексика демонстрирует феноменальную конверсию и высокую плотность моментов в штрафной с собственным xG **~1.4**.
            * По метрике ожидаемых ассистов (xA) у Англии львиная доля веса держится на стандартах защитников и фланговых кроссах Букайо Сака. У Мексики пасы под удар распределены более равномерно между хавбеками Луисом Ромо и Хорхе Мора.
            * Параметр xGOT отражает, что Гарри Кейн бьет с высочайшей точностью, выжимая голы из полумоментов. У мексиканцев Кинёнес представляет максимальную угрозу при плотных ударах из пределов штрафной площади.
            * **Метрики продвижения мяча (Progressive Passes / Runs):**
            * Англичане продвигают мяч вперед преимущественно через силовые рывки Беллингема и продвигающие пасы Стоунза. Мексиканская сборная эффективно использует свободные фланговые коридоры Хорхе Санчеса и Хесуса Гальярдо.
            * **Key Passes (Ключевые передачи):**
            * В английском составе по данному параметру лидирует связка Фоден — Сака. В мексиканском ростере главным диспетчером выступает Луис Ромо.
            * **Field Tilt (Наклон поля / Территориальное доминирование):**
            * Территориальное преимущество в первые 60 минут встречи прогнозируется за Англией (около **58%** наклона поля). При этом Мексика сознательно отдает пространство, выстраивая капканы для организации стремительных контратак.
            * **Pass Completion Rate (Точность передач):**
            * Англия демонстрирует **88%** точности (зачастую стерильное владение без обострения). Мексика имеет показатель **83%**, что подчеркивает их приверженность к более вертикальному, быстрому футболу.
            * **PPDA (Интенсивность прессинга):**
            * У Мексики PPDA зафиксирован в районе **11.5** — они включают организованный средний блок и не прессингуют Джордана Пикфорда слишком высоко. Англия имеет PPDA **~9.0**, пытаясь душить чужие атаки в зародыше.
            * **Interceptions & Recoveries (Перехваты и подборы):**
            * Центральная пара защитников Монтес — Васкес является лучшей на текущем Чемпионате мира по числу успешных перехватов непосредственно внутри своей штрафной площади.
            * **Successful Pressures (Успешность давления):**
            * Мексиканцы ощутимо эффективнее возвращают себе игровой снаряд в переходных фазах на своей трети поля, не позволяя сопернику расставиться.
            * **Комплексные модели (PV / Heat Maps):**
            * Тепловые карты Англии перегружены в полуфлангах и центральной зоне перед чужой штрафной. 
            * Тепловая карта Мексики наглядно фиксирует максимальную активность на флангах и высочайшую плотность в собственной штрафной площади (типичные очертания организованного «автобуса» при обороне победного счета).


            ## 3) Расчёт матча методом Пуассона

            При анализе базовой голевой активности и оборонительной надежности команд на текущем турнире, параметры модели распределения составляют
            * **Мексика:** Атака = **2.0**, Защита = **0.0** (абсолютный сухой показатель турнира).
            * **Англия:** Атака = **2.0**, Защита = **0.75**.

            > **Математический вывод:** С учетом обязательной поправки на силу оппонентов на прошлых стадиях, модель Пуассона рассчитывает наиболее вероятный и математически обоснованный счет поединка в основное время как **0:0** или **1:1**. 
            > 
            > Математическое ожидание забитых голов Англии критически падает из-за идеальной сухой серии Мексики. Суммарная вероятность ничейного исхода по итогам 90 минут игры превышает **33%**.


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерские конторы предлагают на маркет «Тотал Меньше 2.5» скромный коэффициент в районе **1.65–1.70**, по-прежнему считая Англию очевидным фаворитом, способным в одиночку вскрыть оборону латиноамериканцев 1-2 раза.

            > **Вывод модели:** Главное и наиболее валуйное **VALUE** скрывается в исходах в пользу номинальных хозяев. Ставка на то, что **Мексика не проиграет (1X)** за коэффициент **~1.85**, либо **Мексика со страховкой с форой (0)** за сочный коэффициент **~2.60** несут в себе огромный перевес над линией. Налицо явный перекос букмекеров в сторону громкого имени Англии, которая с колоссальным трудом спаслась от ДР Конго, в то время как мексиканцы при сумасшедшей поддержке трибун еще не пропускали на ЧМ.


            ## 5) Итоговое аналитическое заключение

            Сборная Мексики представляет собой превосходно отлаженную, сыгранную систему, поймавшую невероятный эмоциональный кураж. Эти футболисты умеют терпеть, безошибочно перестраиваться и продуктивно действовать без мяча. 

            Англия, напротив, физически подсаживается к концовке матчей (спаслись лишь на 86-й минуте в прошлой игре), испытывает явные проблемы с сыгранностью и ротацией в защитной линии и находится под чудовищным давлением собственной прессы. Фактор выносливости в жарком и влажном климате Северной Америки целиком и полностью на стороне номинальных хозяев поля.


            ## 6) Лучшие варианты для ставок на матч

            Учитывая статус 1/8 финала Чемпионата мира, безупречную оборону Мексики и очевидные тактические проблемы англичан, наиболее надежными выглядят следующие варианты:

            * **🎯 Основной выбор: Мексика не проиграет в основное время (1Х) за коэффициент ~1.85.**
            *(Для экспрессов повышенной надежности идеально подходит вариант: Мексика индивидуальный Тотал Меньше 1.5).* Класс, сыгранность обороны латиноамериканцев и фактор климата обязаны нивелировать английский статус фаворита.
            * **🎯 Валуйная ставка (Value Bet): Тотал матча Меньше 2.0 голов за коэффициент ~2.10.**
            В рамках 1/8 финала никто не станет раскрывать карты с первых минут. Оборона Мексики — признанный мастер по засушиванию топ-сборных, а Англия Саутгейта традиционно предпочтет излишне осторожный футбол.
            * **🎯 Острый вариант: Итоговый проход Мексики (с учетом д.в. и пенальти) за коэффициент ~2.45.**
            Отличная валуйная позиция, учитывая, что в случае экстра-таймов изнуренные жарой англичане физически просядут, а в серии пенальти психологическое преимущество будет на стороне мексиканского голкипера.
            * **🎯 Тактический тренд: Ничья в первом тайме (1-й тайм: Х) за коэффициент ~2.00.**
            В матчах плей-офф такой важности команды всегда начинают максимально осторожно. На всех аналитических рынках вероятность ничейного исхода к перерыву оценивается очень высоко.`
    
         },
        { id: 93, date: "Понедельник, 6 июля", time: "22:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "pt", team1Text: "Португалия", team2Code: "es", team2Text: "Испания", prob1: 34, probX: 31, prob2: 35, analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Статус и стадия:** Полноценный раунд 1/8 финала Чемпионата мира 2026 года. Для обеих европейских сборных это уже 5-й официальный поединок на турнире. Бескомпромиссная стадия плей-офф на выбывание — цена малейшей тактической или индивидуальной ошибки максимальна.
            * **Локация и условия:** Поединок примет один из ключевых ультрасовременных стадионов США. Учитывая изнуряющую июльскую жару в Северной Америке, климатический фактор и технологические системы кондиционирования внутри чаши арен сыграют критическую роль в поддержании высокой интенсивности движения, особенно во вторых таймах и потенциальных экстра-таймах.
            * **Статус фаворита:** Букмекерские конторы отдают минимальное, но устойчивое преимущество Испании. Это обусловлено более цельным, уверенным и системным прохождением предыдущих стадий мундиаля.
            * **Исторический опыт:** Обе сборные — признанные гранды мирового футбола с колоссальным опытом выступлений в матчах на вылет. Однако у Испании состав выглядит несколько моложе, агрессивнее и сбалансированнее на пиковых позициях (Родри, Дани Ольмо), в то время как у Португалии колоссальный кубковый опыт и ментальный авторитет сосредоточены в фигурах Криштиану Роналду и Бруну Фернандеша.

            ### 2. Рейтинг команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Обе сборные стабильно удерживают позиции в Топ-8 сильнейших команд планеты. Испания котируется чуть выше на фоне недавних триумфальных успехов на европейской арене.
            * **Класс исполнителей:** По суммарной трансферной стоимости и представительству игроков в элитных клубах составы практически эквивалентны (оба ростера оцениваются в грандиозные **€1.0+ млрд**). Пиковые игровые рейтинги в текущих тактических моделях у шпанцев удержвают Родри и Ламин Ямаль, а у португальцев — Бруну Фернандеш, Рубен Диаш и Рафаэл Леау.

            ### 3. Текущая игровая форма на ЧМ-2026
            * **🇵🇹 Португалия:** Демонстрирует умеренную игровую форму с выраженным акцентом на прагматизм и экономию сил. На групповом этапе португальцы разошлись миром с ДР Конго (1:1), разгромили Узбекистан (5:0) и засушили стратегическую ничью с Колумбией (0:0). 
            * **🇪🇸 Испания:** Находится на мощнейшем, доминирующем ходу. В рамках групповой стадии команда планомерно размялась на Кабо-Верде (0:0) и Саудовской Аравии (4:0), после чего хладнокровно переиграла сложнейший системный Уругвай (1:0). Испанцы выглядят на этом турнире максимально цельно в фазе позиционного давления.

            ### 4. Основная статистика турнирного пути
            * **Португалия:** 4 матча — 2 победы, 2 ничьи. Общая разница мячей: **8–2**. Важный нюанс: основной массив забитых голов пришелся на игру со скромным Узбекистаном. В поединках против организованной, плотной обороны (Колумбия, ДР Конго) португальцы испытывают явные проблемы со взломом чужой штрафной.
            * **Испания:** 4 матча — 3 победы, 1 ничейный исход. Общая разница мячей: **8–0**. Фундаментальный статистический тренд: «Красная фурия» еще не пропустила ни одного мяча на текущем турнире, демонстрируя эталонный контроль игры.

            ### 5. Дополнительная статистика и игровые микротренды
            * **Территориальный контроль:** Испания традиционно забирает мяч под тотальный контроль (**64%** владения) против стабильных **56%** у Португалии.
            * **Удары (всего / в створ):** Испанцы бьют чаще и прицельнее оппонента — **15.2 / 6.1** в среднем за поединок против **13.8 / 4.9** у португальцев.
            * **Дисциплинарный подтекст:** Португалия заметно чаще вынуждена фолить в переходных фазах при потере мяча (в среднем 2.1 желтых карточек за игру). Испания за счет слаженного контрпрессинга реже садится на предупреждения.

            ### 6. История очных встреч (Head-to-Head)
            Иберийское дерби исторически характеризуется максимальной плотностью, вязкостью и высокой частотой ничейных исходов в основное время на крупных турнирах (достаточно вспомнить легендарные 3:3 на ЧМ-2018 или закрытые матчи в Лиге Наций). Сборные отлично знают тактические сильные и слабые стороны друг друга, что сводит к минимуму фактор неожиданности.

            ### 7. Тактико-стратегический рисунок
            * **Испания (Луис де ла Фуэнте):** Классическая модель 4-1-2-3 с абсолютным контролем центра поля через интеллектуальный треугольник Родри — Педри — Ольмо. Необходимую ширину и остроту в атаке создают Ламин Ямаль и Микель Оярсабаль. Команда душит соперника прессингом сразу в момент потери, стремясь запереть его в первой трети поля.
            * **Португалия (Роберто Мартинес):** Тактическая схема 4-2-3-1, заточенная на жесткий баланс. Рабочая пара опорных хавбеков Витинья — Жоау Невеш (или Рубен Невеш) отвечает за доставку мяча до Бруну Фернандеша. Португальцы стали заметно более гибкими: они способны как забрать мяч, так и больно контратаковать через реактивные фланги (Леау / Нету / Консейсау).

            ### 8. Составы, травмы и ротация
            * **Испания:** Стартовое сочетание максимально сыграно и стабильно. Пау Кубарси и Эмерик Ляпорт цементируют оборонительную линию. Травмированных среди железных игроков основы нет. Мощнейший ресурс на скамейке запасных в лице Гави, Микеля Мерино и Нико Уильямса дает Де ла Фуэнте колоссальное стратегическое преимущество для усиления игры во втором тайме.
            * **Португалия:** Криштиану Роналду остается бессменным наконечником атак, но Роберто Мартинес активно задействует глубину состава — появление Гонсалу Рамуша со скамейки уже спасло матч на прошлых стадиях. Молодой защитник Ренату Вейга получает заслуженное доверие в центре обороны рядом с Рубеном Диашем.

            ### 9. Индивидуальный перформанс лидеров
            * **Микель Оярсабаль (Испания):** Пребывает на невероятном игровом пике. Его дубль в 1/32 финала подтверждает статус главного завершителя команды в штрафной площади при поддержке умных открываний Педри и передач Ямаля.
            * **Бруну Фернандеш (Португалия):** Остается ключевым ментальным и игровым лидером португальцев, уверенно лидируя по числу созданных голевых моментов.
            * **Криштиану Роналду (Португалия):** За счет хладнокровия при исполнении стандартов и колоссального авторитета является главным фактором психологического давления на молодых защитников Испании.

            ### 10. Мотивационный вектор
            Стадия 1/8 финала — это тяжелейший психологический водораздел. Мотивация обеих сторон запредельная. Для Криштиану Роналду это, с высокой долей вероятности, последний Чемпионат мира в карьере, что дает мощный эмоциональный заряд всей португальской сборной. Испания же мотивирована делом доказать, что их доминирующий игровой стиль готов конвертироваться в золото мирового первенства.

            ### 11. Тренерский фактор
            * **Луис де ла Фуэнте (Испания):** Построив вертикальный, но при этом строго контролируемый футбол, обладает идеальной сыгранностью и абсолютным авторитетом в коллективе после триумфального Евро.
            * **Роберто Мартинес (Португалия):** Прекрасно знаком с испанским футболом. Имеет солидный опыт работы с топ-сборными, но регулярно подвергается критике за излишнюю осторожность в ключевых матчах плей-офф. Для него этот поединок — главный экзамен в карьере.

            ### 12. Аналитический консенсус рынка
            Большинство футбольных аналитиков сходятся во мнении, что Испания будет тотально доминировать на мяче, а Португалия выберет выжидательную тактику с быстрым выходом из обороны через фланги. Текущие котировки букмекеров: П1 — **3.10**, Х — **3.25**, П2 — **2.40** *(небольшое, но устойчивое преимущество Испании на нейтральном поле).*

            ### 13. Психологический контекст
            Продолжающееся отсутствие пропущенных мячей у Испании создает на оборонительную линию определенное психологическое давление «первого пропущенного гола». В стане Португалии максимум внимания приковано к физической готовности возрастных ветеранов при столь плотном и энергозатратном графике турнира.

            ### 14. Судейский фактор
            Матчи такого иберийского накала традиционно доверяются топовым арбитрам (из Англии, Италии или Южной Америки). В жестких условиях 1/8 финала рефери постараются не давать ранние карточки, но при умышленных срывах контратак планка строгости быстро возрастет. Ожидаемый тотал желтых карточек: выше 4.5.


            ## 2) Футбольные метрики

            *Все статистические данные смоделированы и нормализованы на 90 минут игрового времени против равного соперника на основе структуры предыдущих матчей ЧМ-2026. Данные представлены в scannable-формате.*

            * **xG / xA / xGOT (Ожидаемые события):**
            * Испания генерирует стабильные **1.85 xG** за матч. Португалия имеет показатель **1.45 xG**. Испанцы создают более качественные и опасные моменты за счет тонких комбинаций внутри чужой штрафной.
            * По метрике ожидаемых ассистов (xA) у Испании объем (**1.40**) равномерно распределен между флангами и Педри. У Португалии данный параметр (**1.10**) критически зависит от стандартов и навесов Бруну Фернандеша.
            * Параметр xGOT наглядно отражает, что Испания (**1.92**) превосходит португальцев (**1.38**). Оярсабаль и Дани Ольмо сейчас наносят удары чрезвычайно прицельно, выжимая максимум.
            * **Метрики продвижения мяча (Progressive Passes / Runs):**
            * Испания значительно лучше и системнее двигает игровой снаряд через полупространства усилиями Педри и Родри: **48 / 22** продвигающих действий против **38 / 18** у Португалии.
            * **Key Passes (Ключевые передачи):**
            * Испанская сборная ощутимо впереди по числу передач под удар за 90 минут — **11.5** против **9.2** у португальцев.
            * **Field Tilt (Наклон поля / Территориальное доминирование):**
            * Модель прогнозирует перекос **58% на 42%** в пользу Испании. «Красная фурия» будет проводить подавляющее количество времени с мячом в финальной трети поля, зажимая португальцев.
            * **Pass Completion Rate (Точность передач):**
            * Испания демонстрирует филигранные **89.5%** точности паса против солидных, но более скромных **86.2%** у Португалии.
            * **PPDA (Интенсивность прессинга):**
            * Испания имеет ультра-интенсивный показатель PPDA (**8.4**), позволяя сопернику сделать не более 8-9 передач до своего оборонительного действия. Португалия предпочитает встречать оппонента в среднем блоке (PPDA **11.8**).
            * **Interceptions & Recoveries (Перехваты и подборы):**
            * Португалия за счет низкого блока превосходит соперника в перехватах внутри собственной штрафной площади (эффект Рубена Диаша). Испания тотально доминирует по числу возвратов мяча на чужой половине поля (эффект Родри).
            * **Successful Pressures (Успешность давления):**
            * У Испании зафиксировано **34%** успешного контрпрессинга сразу после потери. У Португалии этот параметр держится на отметке **26%**.
            * **Комплексные модели (PV / VAEP & Heat Maps):**
            * У Испании наивысшую ценность владения создают действия Ламина Ямаля на правом фланге (смещение в центр под удар или тонкий пас) и Родри (умное распределение). У Португалии — вертикальные рывки Рафаэла Леау и проникающие пасы Бруну Фернандеша.
            * Тепловые карты (Heat Maps) наглядно показывают, что Испания будет «краснеть» непосредственно в районе радиуса штрафной соперника и на флангах атаки. Португалия покажет плотную концентрацию в опорной зоне и на левом фланге атаки (зона Леау — Мендеша).


            ## 3) Расчёт матча методом Пуассона

            На основе атакующих и оборонительных рейтингов команд на ЧМ-2026 (с обязательным учетом уровня и силы оппозиции в предыдущих турах)
            * **Испания:** Атака = **1.70**, Защита = **0.40**
            * **Португалия:** Атака = **1.40**, Защита = **0.75**

            Рассчитаем математическое ожидание забитых голов
            Испании = 1.70  
            Португалии = 1.40 


            | Точный счет | Вероятность исхода |
            | :--- | :--- |
            | **1 : 0** | 21.2% |
            | **0 : 0** | 20.3% |
            | **2 : 0** | 13.5% |
            | **1 : 1** | 11.8% |
            | **2 : 1** | 7.6% |
            | **0 : 1** | 6.4% |

            * **Общая вероятность победы Испании в о.в.:** **51.5%**
            * **Общая вероятность ничейного исхода в о.в.:** **32.1%**
            * **Общая вероятность победы Португалии in о.в.:** **16.4%**


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерская линия предлагает на победу Испании в основное время коэффициент **2.40** (что соответствует рыночной вероятности около 41.6%). При этом наш математический расчет по методу Пуассона дает Испании солидные **51.5%** на успех.

            Применим формулу валуйности
            $$Value = (Коэффициент \times Вероятность) - 1$$
            $$Value = (2.40 \times 0.515) - 1 = 1.236 - 1 = +0.236$$

            > **Вывод по VALUE:** Ставки в сторону Испании (чистая победа или итоговый проход) имеют выраженное положительное математическое ожидание — **валуйность составляет более 23%** на дистанции. Букмекеры искусственно завышают шансы Португалии из-за громкого медийного статуса ее игроков и недавней крупной победы над Узбекистаном.


            ## 5) Итоговое аналитическое заключение

            Матч будет развиваться по классическому сценарию доминирования испанской системы контроля над португальской тактической гибкостью. 

            Безупречная оборона Испании на ЧМ-2026 (0 пропущенных) — это не случайность, а прямое следствие высочайшей метрики Field Tilt. Соперники под удушающим прессингом просто физически не доходят до ворот Унаи Симона. Португалии будет невероятно тяжело атаковать позиционно. 

            Кроме того, тот факт, что Португалия тратит колоссальное количество сил без мяча и тяжело вгрызалась в прошлые матчи, обязательно скажется после 60-й минуты встречи. Испания же физически уничтожила прошлых оппонентов, сохранив свежесть и глубину скамейки своих лидеров. Высочайшая ответственность стадии 1/8 финала заставит Мартинеса сесть в глубокий блок и уповать исключительно на стандарты Бруну и гений Роналду в штрафной.


            ## 6) Лучшие варианты для ставок на матч

            Учитывая прагматику плей-офф, безупречную оборону Испании и математическую валуйность линии, лучшими выборами являются:

            * **🎯 Основной выбор: Испания не проиграет и Тотал матча Меньше 3.5 (1Х и ТМ 3.5) за коэффициент ~1.70.**
            Идеальный комбинированный вариант для игрового купона. Он полностью и с запасом перекрывает наиболее вероятные пуассоновские исходы встречи: 0:0, 1:0, 2:0 и 1:1.
            * **🎯 Валуйная ставка (Value Bet): Итоговый проход Испании в 1/4 финала за коэффициент ~1.75.**
            Выглядит максимально надежно и валуйно с учетом колоссального превосходства Испании в свежести и глубине скамейки запасных на случай дополнительного времени.
            * **🎯 Статистический тренд: Тотал желтых карточек Больше 4.0.**
            Стадия 1/8 финала и обилие неизбежных тактических фолов в центре поля со стороны Португалии для сдерживания Ямаля, Педри и Ольмо гарантируют жесткую, плотную игру.`
    
         },
        { id: 94, date: "Вторник, 7 июля", time: "03:00", stadium: "Сиэтл • Люмен Филд", team1Code: "us", team1Text: "США", team2Code: "be", team2Text: "Бельгия", prob1: 34, probX: 30, prob2: 36,  analysisText:
            `## 1) Общая аналитика и контекст кубкового противостояния

            ### 1. Общая картина и антураж
            * **Турнирный статус:** Полноценный раунд 1/8 финала (knockout stage) Чемпионата мира 2026 года. Настоящий «матч жизни» на выбывание, где цена малейшей тактической ошибки максимальна. Регламентом предусмотрены два дополнительных тайма по 15 минут (экстра-таймы) и серия пенальти в случае ничейного исхода по итогам основного времени.
            * **Локация и климат:** Игра пройдет в Сиэтле, штат Вашингтон, на культовой арене «Сиэтл Стэдиум» (Lumen Field). Сборная США выступает в роли полноценного хозяина поля при оглушительной, сумасшедшей поддержке местных трибун. Климатические условия на северо-западе США в июле умеренно комфортные, без удушающей южной жары, что отлично подходит европейским сборным для демонстрации интенсивного футбола.
            * **Фаворит и опыт:** Котировки букмекеров распределились практически поровну (умеренное равенство с небольшими колебаниями). Бельгия обладает колоссальным кубковым опытом на международной арене (полуфинал ЧМ-2018), однако американцы на домашнем мундиале под руководством Маурисио Почеттино показывают запредельный ментальный драйв.

            ### 2. Рейтинг команд и рыночная стоимость ростеров
            * **Табель о рангах FIFA:** Бельгийцы стабильно удерживают позиции в Топ-10 сильнейших сборных планеты. США вплотную приблизились к первой десятке благодаря системным успехам последних лет и стремительному прогрессу поколения.
            * **Класс исполнителей:** У Бельгии элитный статус традиционно поддерживают признанные мировые ветераны (Кевин Де Брюйне, Ромелу Лукаку, Тибо Куртуа) и реактивная молодая поросль (Жереми Доку, Лоис Опенда). У американцев главную атакующую и созидательную силу представляют Кристиан Пулишич, Уэстон Маккенни и Тимоти Веа.

            ### 3. Текущая игровая форма на ЧМ-2026
            * **🇺🇸 США:** В рамках 1/16 финала уверенно, хладнокровно и прагматично переиграли крепкую сборную Боснии и Герцеговины (2:0), продемонстрировав железный характер и удержав преимущество даже после удаления во втором тайме. Весь групповой этап прошли стабильно, без явных игровых спадов.
            * **🇧🇪 Бельгия:** Пережила настоящий валидольный триллер в 1/16 финала против Сенегала (3:2). Бельгийцы совершили тяжелейший камбэк по ходу встречи и вырвали путевку в следующий раунд лишь благодаря точному одиннадцатиметровому удару Юри Тилеманса в самом конце изнурительного дополнительного времени. Физически бельгийская сборная потратила значительно больше ресурсов.

            ### 4. Основная статистика турнира
            * **США:** В среднем забивают 1.8 гола за поединок, делая ставку на очень строгую, дисциплинированную и слаженную игру в оборонительной линии на домашних аренах.
            * **Бельгия:** Демонстрирует высокую атакующую результативность (три забитых мяча Сенегалу), но при этом страдает от системных и позиционных провалов сзади (пропустили 2 гола от африканской команды).

            ### 5. Дополнительная статистика и игровые микротренды
            * **Стиль США:** Высочайший темп вертикальных атак, сверхактивное и продуктивное использование фланговых зон Антони Робинсона и Тимоти Веа. Меньше стерильного владения в центре — больше быстрых, адресных доставок мяча в штрафную.
            * **Стиль Бельгии:** Академичный контроль мяча (в среднем **57%** владения), тотальное дирижирование атаками со стороны Де Брюйне и высокий процент обостряющих, проникающих передач.

            ### 6. История очных встреч (Head-to-Head)
            Главный исторический маркер — культовый матч плей-офф ЧМ-2014, когда Бельгия с огромным трудом выбила США (**2:1 в доп. время**), несмотря на легендарный перформанс и 16 сейвов американского голкипера Тима Ховарда. Из того состава у бельгийцев до сих пор в строю Куртуа, Де Брюйне и Лукаку. В марте 2026 года команды провели товарищеский спарринг, где Бельгия разгромила США со счетом 5:2, однако те составы носили сугубо экспериментальный характер.

            ### 7. Тактико-стратегический рисунок
            * **США:** Маурисио Почеттино ставит агрессивную модель 4-2-3-1 или 4-3-3 с интенсивным, удушающим прессингом на чужой половине поля. Огромная тактическая потеря — вынужденное отсутствие главного наконечника атаки.
            * **Бельгия:** Руди Гарсия вынужден балансировать между ветеранской медлительностью и возрастной потерей скорости в центре обороны и взрывной, реактивной скоростью Доку и Доди Лукебакио на флангах. Стиль завязан на позиционное наступление с резким переводом игрового снаряда на бровки.

            ### 8. Составы, травмы и кадровые проблемы
            * **США:** Критическая, фундаментальная потеря для тренерского штаба. Основной центрфорвард Фоларин Балогун (оформивший 3 гола на турнире, включая важнейший мяч Боснии) получил красную карточку и полностью пропустит эту встречу из-за дисквалификации. Его место на острие займет либо Рикардо Пепи, либо мощный Патрик Аджеманг.
            * **Бельгия:** Кадровых потерь среди ключевых лидеров не зафиксировано, однако накопившаяся усталость основы после тяжелейших 120 минут против Сенегала обязательно скажется во втором тайме.

            ### 9. Индивидуальный перформанс лидеров
            * **Кристиан Пулишич (США):** Безусловный ментальный и игровой лидер атакующей линии, через которого строятся все ключевые выпады.
            * **Уэстон Маккенни (США):** Выполняет гигантский объем черновой работы, качественно выжигая центральную зону.
            * **Кевин Де Брюйне (Бельгия):** По-прежнему является главным мозговым центром команды, генерируя подавляющее большинство опасных моментов.
            * **Юри Тилеманс (Бельгия):** Набрал отличную физическую форму, став автором спасительного гола в прошлом матче.
            * **Доди Лукебакио (Бельгия):** Опасный джокер, исторически умеющий эффективно вскрывать оборонительные порядки американцев.

            ### 10. Мотивационный вектор
            Стадия 1/8 финала домашнего Чемпионата мира для США — событие планетарного, исторического масштаба для всей страны. Мотивация американских футболистов будет запредельной. Бельгия же находится под серьезным давлением европейской прессы за блеклую игру в защитной линии, а для великого поколения Де Брюйне данный мундиаль — один из последних реалистичных шансов зацепиться за международный трофей.

            ### 11. Тренерский фактор
            * **Маурисио Почеттино (США):** Безупречно подготовил американскую сборную в физическом и ментальном аспектах, превратив команду в единый атлетичный кулак.
            * **Руди Гарсия (Бельгия):** Регулярно подвергается критике за слабую тактическую гибкость по ходу матчей, однако тяжелейший поединок против Сенегала он сумел перевернуть именно за счет точечных своевременных замен.

            ### 12. Аналитический консенсус рынка
            Букмекерская линия держится практически равной. Эксперты сходятся во мнении, что США из-за отсутствия Балогуна заметно потеряют в качестве финальной реализации моментов, но при этом медлительная Бельгия останется крайне уязвимой к контратакам соперника на высоких скоростях.

            ### 13. Ключевые факторы и новости
            «Фактор трибун Сиэтла» — один из самых шумных, акустически мощных и сложных стадионов в США окажет колоссальное, удушающее психологическое давление на европейских футболистов с первых минут встречи.

            ### 14. Судейский фактор
            Строгость арбитража на стадии 1/8 финала традиционно возрастает. С учетом сверхагрессивного, плотного прессинга сборной США, многочисленные мелкие тактические фолы в центральном круге могут быстро трансформироваться в обилие желтых карточек.


            ## 2) Футбольные метрики

            *Все статистические данные нормализованы с обязательным учетом уровня оппозиции команд на групповом этапе и в первом кубковом раунде ЧМ-2026. Данные представлены в scannable-формате.*

            * **xG / xA / xGOT (Ожидаемые события):**
            * Бельгия за счет высочайшего креативного класса Де Брюйне и физической мощи Лукаку имеет чуть более высокий созданный показатель xG (**~1.65** за матч). США без дисквалифицированного Балогуна неизбежно просядут в завершении (ожидаемый xG **~1.30**).
            * Кевин Де Брюйне уверенно лидирует на текущем турнире по метрике ожидаемых ассистов (xA). У США за этот компонент традиционно отвечает Пулишич и выверенные кроссы Антони Робинсона.
            * Параметр xGOT наглядно отражает: с учетом того, что на последнем рубеже Бельгии располагается топовый Тибо Куртуа, американцам потребуются удары исключительной силы и точности, чтобы конвертировать созданную остроту в реальные голы.
            * **Метрики продвижения мяча (Progressive Passes / Runs):**
            * У США продвижение держится на взрывных фланговых рывках Тимоти Веа и продвигающих передачах из глубины от Уэстона Маккенни. Бельгийцы тотально доминируют по продвижению мяча через пасы в финальную треть от связки КДБ — Тилеманс.
            * **Field Tilt (Наклон поля / Территориальное преимущество):**
            * Модель прогнозирует умеренный перекос в районе **52% на 48%** в пользу европейской сборной. Бельгийцы заберут игровой снаряд под контроль, в то время как США будут взрывать свободные зоны вертикальными выпадами.
            * **Pass Completion Rate (Точность передач):**
            * Бельгия демонстрирует породистые **~87%** точности (высокий командный класс паса), у США данный параметр зафиксирован на отметке **~82%**.
            * **PPDA (Интенсивность прессинга):**
            * Американцы обладают куда более агрессивным и плотным показателем PPDA (**~9.5**). Они будут активно душить уставшую полузащиту бельгийцев. Бельгия обороняется значительно ниже и позиционнее (PPDA **~12.0**).
            * **Interceptions & Recoveries (Перехваты и подборы):**
            * Центральная оборонительная пара Тим Рим — Марк Маккензи демонстрирует качественное чтение игры, однако в отчетной встрече им предстоит тяжелейшее физическое испытание против мощного корпуса Ромелу Лукаку.


            ## 3) Расчёт матча методом Пуассона

            При анализе базовых голевых трендов команд с обязательной поправкой на кадровые изменения и физическое состояние (США пропускают минимум на домашнем турнире, но теряют наконечника; Бельгия много забивает и пропускает, отбегав 120 минут 5 дней назад), модель распределения выдает следующие маркеры

            > **Математический вывод:** Модель Пуассона указывает на то, что наиболее вероятным исходом основного времени является результативная ничья **1:1** либо минимальная прагматичная победа одной из сторон (**1:0** в пользу США за счет свежести и движения, либо **0:1** в пользу опыта Бельгии). Общая вероятность ухода поединка в овертайм крайне высока и оценивается в **32%**.


            ## 4) Поиск валуйных позиций (VALUE) в букмекерской линии

            Букмекерские конторы выставили фактически равные коэффициенты на чистые исходы, серьезно недооценивая фактор накопленной физической усталости Бельгии после изнурительных экстра-таймов с Сенегалом и одновременную потерю Балогуна в атаке американцев.

            > **Вывод модели:** Главное математическое **VALUE** скрывается в двух позициях. Первая — чистый **ничейный исход [Х] в основное время** за коэффициент выше **3.20**. Вторая валуйная позиция — маркет **«Обе забьют — ДА»** за коэффициент около **1.85**. Оборонительная линия Бельгии стабильно допускает грубые сбои, а сборная США при поддержке родных трибун обязана находить свой гол даже в отсутствие ключевого форварда.


            ## 5) Итоговое аналитическое заключение

            Перед нами классический кубковый матч равных возможностей. Главные козыри сборной США: неистовая энергетика домашнего стадиона, превосходство в свежести (Бельгия отыграла полноценные 120 минут против Сенегала) и высокая организация агрессивного прессинга Почеттино. 

            Главные козыри Бельгии: колоссальный международный опыт лидеров в лице Де Брюйне и Куртуа, способных в одиночку решить исход эпизода. При этом отсутствие дисквалифицированного Балогуна неизбежно заставит американцев действовать более осторожно и сбалансировано в финальной трети.


            ## 6) Лучшие варианты для ставок на матч

            Учитывая запредельную важность стадии 1/8 финала Чемпионата мира, усталость Бельгии и кадровую потерю США, наиболее перспективными выглядят следующие варианты:

            * **🎯 Основной выбор: Тотал матча Меньше 2.5 голов в основное время за коэффициент ~1.75.**
            Стадия плей-офф, где цена ошибки колоссальна. Команды начнут поединок максимально осторожно, а потеря Балогуна снизит общую атакующую конверсию американцев.
            * **🎯 Валуйная ставка (Value Bet): Ничейный исход [Х] в основное время за коэффициент ~3.25.**
            Высочайшая математическая вероятность повторения исторического сценария ЧМ-2014 с неизбежным уходом равного поединка в дополнительные таймы.
            * **🎯 Безопасный прогноз на проход: Итоговый проход США за коэффициент ~1.85.**
            За счет сумасшедшей домашней энергетики трибун Сиэтла и явного превосходства в физических кондициях, которое станет определяющим фактором во втором тайме или в экстра-таймах.`
    
         },
        { id: 95, date: "Вторник, 7 июля", time: "19:00", stadium: "Аталанта • Мерседес-Бенц", team1Code: "ar", team1Text: "Аргентина", team2Code: "eg", team2Text: "Египет", prob1: 72, probX: 19, prob2: 9, analysisText:
            `## 1. Общая аналитика

            ### 1. Общая картина
            - **Турнирный статус:** Матч стадии 1/8 финала ЧМ-2026. Для каждой из команд это уже 5-й поединок на турнире (3 игры группового этапа + раунд 1/32 финала). Права на ошибку больше нет.
            - **Стадион и поле:** «Atlanta Stadium» (Mercedes-Benz Stadium), Атланта. Ультрасовременная закрытая арена со сдвижной крышей и искусственным газоном последнего поколения.
            - **Климат:** Фактор изнуряющей жары (sapping heat), который измотал и обескровил Аргентину в Майами в игре против Кабо-Верде, здесь полностью нивелирован мощной системой кондиционирования. Скорость движения мяча на местном искусственном покрытии будет стабильно высокой.
            - **Кто фаворит:** Аргентина — безоговорочный фаворит в статусе действующих чемпионов мира.
            - **Кубковый опыт:** Аргентина — мировой гранд с колоссальным многолетним опытом в плей-офф. Египет прямо сейчас творит историю: это их первый в истории выход в 1/8 финала чемпионата мира.

            ### 2. Рейтинг команд и футболистов
            - **Рейтинг ФИФА:** Аргентина стабильно удерживает позиции в топ-3 мирового рейтинга. Египет замыкает топ-30.
            - **Рейтинг игроков:** По именам и суммарной рыночной стоимости Аргентина превосходит Египет в разы (созвездие исполнителей из АПЛ, Ла Лиги и Серии А). В составе Египта ярко выделяется суперзвезда Мохамед Салах, подкрепленный игроками крепкого европейского уровня (Мармуш, Трезеге).

            ### 3. Текущая форма команд
            - **Аргентина:** Идет без поражений, но с явным игровым скрипом. Групповой этап прошли уверенно (3:0 с Алжиром, 2:0 с Австрией, 3:1 с Иорданией), но в 1/32 финала получили тяжелейший отпор от Кабо-Верде (3:2 в дополнительное время). Команда физически серьезно просела во втором тайма.
            - **Египет:** Главный «крепкий орешек» текущего турнира. В группе сыграли 1:1 с Бельгией, обыграли Новую Зеландию 3:1 и разошлись 1:1 с Ираном. В 1/32 финала героически выстояли против мощной Австралии (1:1 в основное, победа 4:2 по пенальти). Эмоциональный подъем запредельный, но физически они отдали абсолютно все ресурсы.

            ### 4. Основная статистика (тренды голов)
            - **Аргентина:** Забивает много и со вкусом (11 голов за 4 матча, в среднем 2.75 за игру). Однако латиноамериканская оборона дала очевидный сбой в плей-офф — пропустили 2 мяча от разящих контратак Кабо-Верде.
            - **Египет:** Очень «низовые», прагматичные и системные (6 голов за 4 матча). Игры Египта — это всегда близкий счет на табло. Из 4 матчей на этом ЧМ три завершились со счетом 1:1 в основное время.

            ### 5. Дополнительная статистика (тренды ЧМ-2026)
            - **Угловые:** Аргентина тотально доминирует. В матче с Кабо-Верде именно стандарты спасли игру (2 ассиста Месси с угловых на голы Лисандро Мартинеса и Ромеро). У Египта угловых мало, они изначально обороняются низким блоком.
            - **Контроль мяча:** Аргентина удерживает мяч в районе **62–67%** в среднем. Египет добровольно отдает территорию (**40–45%**), уповая на быстрые переходы.
            - **Удары:** Аргентина наносит по 16–20 ударов за матч. Египет берет качеством и изоляциями Салаха/Мармуша (8–10 ударов).

            ### 6. Очные встречи
            - На уровне чемпионатов мира в современную эпоху команды не пересекались. Это первая официальная дуэль Лионеля Месси и Мохамеда Салаха на уровне сборных, что делает вывеску исторической.

            ### 7. Тактика, стиль и системные проблемы
            - **Аргентина (4-1-2-3 / 4-3-3):** Позиционная атака, перегруз центра за счет смещений Месси, Мак Аллистера и Энцо Фернандеса.
            - *Сила:* Стандарты, гений Месси (уже 7 голов на турнире).
            - *Проблема:* Уязвимость к вертикальным забросам за спину высокой линии обороны (Кабо-Верде это наглядно вскрыл).
            - **Египет (4-2-3-1):** Компактный средний/низкий блок. Пара опорников Аттиа — Фатхи выжигает пространство перед штрафной.
            - *Сила:* Феноменальная контратакующая связка Салах — Мармуш. Египет шикарно наказывает за свободные зоны.
            - *Проблема:* Физическое истощение после 120 минут и серии пенальти с Австралией. Команда банально может «сесть» к 70-й минуте.

            ### 8. Составы, травмы и ротация
            - **Аргентина:** Лионель Скалони имеет полную обойму. В атаке идет ротация между Лаутаро Мартинесом и Хулианом Альваресом. Месси играет без замен. Травмированных лидеров нет, но правый фланг обороны (Молина / Монтиель) под серьезным давлением из-за желтых карточек и ошибок в прошлом матче.
            - **Египет:** Египетский голкипер Мостафа Шобеир провел отличный прошлый матч. Салах отыграл все 120 минут против австралийцев, его физическое состояние — ключ к успеху. Карим Хафез и Марван Аттиа были заменены из-за судорог, их готовность к старту под вопросом.

            ### 9. Статистика отдельных игроков
            - **Лионель Месси (Аргентина):** На абсолютном пике. Забил в 8 матчах ЧМ подряд (с учетом ЧМ-2022). На этом турнире: 4 игры, 7 голов, статус главного претендента на «Золотую бутсу».
            - **Эмам Ашур (Египет):** Настоящий мотор полузащиты Египта, забил важнейший гол Австралии в 1/32 финала.
            - **Мохамед Салах (Египет):** Главный лидер, забил решающий пенальти в серии, ментальный хребет всей команды.

            ### 10. Настрой команд и важность матча
            - Мотивация Египта историческая — им нечего терять, они уже национальные герои. Мотивация Аргентины — «последний танец» Месси и защита мировой короны. Первый забитый мяч полностью изменит рисунок: если забьет Египет — они закроются в глухой «автобус», если Аргентина — Египту придется раскрываться, что для них губительно.

            ### 11. Тренерский фактор
            - **Лионель Скалони:** Выиграл всё на международном уровне. Сыгранность со сборной идеальная. Умеет перестраивать игру по ходу матча, но его иногда критикуют за поздний выход из-под интенсивного прессинга.
            - **Хоссам Хассан:** Построил невероятно дисциплинированный коллектив. Его тактика «терпеть и колоть» работает безотказно, но опыта матчей подобного калибра на тренерском мостике ему объективно не хватает.

            ### 12. Что говорят аналитики и букмекеры
            Букмекеры дают явный перекос в сторону южноамериканцев, но эксперты ждут вязкой игры
            - **Проход Аргентины:**  1.30$
            - **Проход Египта:**  3.60+$
            - *Аналитики сходятся во мнении: если Аргентина не забьет быстрый гол, матч превратится в тягучее болото.*

            ### 13. Ключевые факторы и новости
            Аргентина получила серьезную психологическую встряску от Кабо-Верде. Это пойдет им на пользу — недооценки Египта не будет. Египет находится под давлением колоссальных ожиданий арабского мира, но статус явного андердога частично снимает с них ментальные оковы.

            ### 14. Анализ арбитра
            Ожидается строгий европейский или южноамериканский арбитр топ-категории. В плей-офф ЧМ-2026 планка фола удерживается высоко, но за тактический срыв быстрых атак Салаха или Месси карточки будут лететь незамедлительно.


            ## 2. Футбольные метрики

            ### 1. Атакующие метрики (xG, xA, xGOT)
            - **Аргентина:** Средний $xG$ за матч на турнире — $2.25$. Высокий показатель $xGOT$ (ожидаемые голы с учетом створа), так как удары Месси и Лаутаро обладают снайперской точностью. Команда перебирает свои голы (забили 11 при $xG \\approx 9.0$), что говорит о высочайшей индивидуальной конверсии моментов.
            - **Египет:** Средний $xG$ — всего $0.95$. Но их метрика $xA$ (ожидаемые ассисты) в основном генерируется Салахом через умные скрытые передачи под удар набегающему Мармушу. Египет создает мало, но доводит до верного.

            ### 2. Продвижение мяча
            - **Field Tilt («Наклон поля»):** У Аргентины тотальное преимущество — $72\\%$ на $28\\%$. Игра практически полностью будет проходить на трети поля Египта.
            - **Progressive Passes:** Энцо Фернандес и Родриго Де Поль — в лидерах турнира по продвигающим передачам. Обороне Египта придется наглухо перекрывать линии паса в полуфлангах.
            - **Pass Completion Rate:** Аргентина удерживает рекордные **89%** точности передач. Египет — **78%** (из-за частых вертикальных и рискованных выносов на Салаха под давлением).

            ### 3. Защитные и прессинг-метрики
            - **PPDA:** У Аргентины — $8.8$ (интенсивный, удушающий прессинг сразу после потери мяча). У Египта — $15.4$ (пассивный блок, они дают сопернику перепасовываться на чужой половине, включаясь на полную только при пересечении мячом центрального круга).
            - **Successful Pressures:** Аргентина сильна в моментальном контрпрессинге (Мак Аллистер). Египет делает ставку на Interceptions & Recoveries (перехваты в своей штрафной и подборы ради контратаки).

            ### 4. Комплексные модели (PV / VAEP)
            - **VAEP (Ценность действий):** У Аргентины каждое второе действие в финальной трети увеличивает вероятность гола на 4-5%. У Египта **80%** ценности владений ($Possession\\ Value$) напрямую завязано на действиях Салаха и Мармуша. Перекрой их — и вся атака Египта мгновенно умрет.


            ## 3. Расчет матча методом Пуассона

            На основе сыгранных матчей на ЧМ-2026:
            - Атакующая сила Аргентины: 2.75 гола за игру. Защита Египта: пропускает 1.0 гол за игру. Ожидаемые голы Аргентины  1.88$.
            - Атакующая сила Египта: 1.5 гола за игру. Защита Аргентины: пропускает 0.75 гола за игру (с учетом экстра-тайма — 1.0). Ожидаемые голы Египта  0.92$.

            Распределение вероятностей Пуассона выдает следующие цифры исходов
            - **Победа Аргентины в основное время:** $56\\%$
            - **Ничья в основное время:** $26\\%$ *(счета 1:1, 0:0)*
            - **Победа Египта в основное время:** $18\\%$
            - *Наиболее вероятные точные счета по модели:* **2:0, 1:0, 2:1**.


            ## 4. Поиск в линии VALUE (Честной ставки)

            Букмекеры дают на чистую победу Аргентины слишком низкий коэффициент (в районе 1.35–1.40). Наша модель Пуассона оценивает реальную вероятность победы в основное время как $56\\%$ (честный кэф должен быть около **1.78**). Линия перекошена.

            - **Где скрыто VALUE:**
            1. **Тотал Меньше (2.5)** за кэф выше **1.90**. Букмекеры переоценивают верховой тренд Аргентины после матча с Кабо-Верде (3:2). Но Египет — гораздо более системная, вязкая и закрытая команда. Египет высушит игру. Реальная вероятность ТМ(2.5) выше, чем заложено в линии.
            2. **Египет с форой (+1.5)** за кэф **1.65 - 1.70**. Аргентина выхолощена физически, Египет умеет терпеть. Разгрома здесь не просматривается.


            ## 5. Анализ общей информации

            Матч 1/8 финала будет кардинально отличаться от открытого футбола Аргентины против Кабо-Верде. Египет не примет открытый бой — они сядут глубоко назад ($Field\\ Tilt$ это подтверждает). Основная угроза для Аргентины — контратаки Салаха на уставших после Майами защитников. Однако запредельный класс центра поля Аргентины ($Pass\\ Completion\\ Rate\\ 89\\%$) позволит им тотально контролировать темп игры. Скалони сыграет строже в обороне, проведя работу над ошибками. Египет физически подсядет во втором тайме после энергозатратной игры с Австралией.


            ## 6. Лучшие ставки на матч

            **1. Основной выбор (Инвестиция): Тотал Меньше 2.5 голов (Коэффициент  1.92$)**
            - **Обоснование:** Египет будет парковать образцовый автобус, а Аргентина после прошлого триллера сыграет максимально прагматично на результат.

            **2. Валуй-выбор (Value Bet): Египет с форой (+1.5) (Коэффициент  1.68$)**
            - **Обоснование:** Очень вероятен сценарий тяжелой победы Аргентины в 1 мяч (1:0 или 2:1) либо уход игры в овертайм из-за усталости фаворита.

            **3. Специфический выбор на тренд: Гол Лионеля Месси в матче (Коэффициент  1.85$)**
            - **Обоснование:** Месси бьет пенальти, исполняет все опасные штрафные, имеет 7 голов в 4 матчах и стабильно забивает в 8 играх ЧМ кряду. Удерживать этот тренд математически выгодно.`
    
         },
        { id: 96, date: "Вторник, 7 июля", time: "23:00", stadium: "Ванкувер • Би-Си Плэйс", team1Code: "ch", team1Text: "Швейцария", team2Code: "co", team2Text: "Колумбия", prob1: 37, probX: 31, prob2: 32, analysisText:
            `## 1. Общая аналитика

            ### 1. Общая картина
            - **Турнирный статус:** Матч стадии 1/8 финала ЧМ-2026. Для обеих национальных команд это 5-й поединок на турнире (3 игры групповой стадии + раунд 1/32 финала). Победитель этой пары выходит на триумфатора матча Аргентина — Египет.
            - **Стадион и поле:** «BC Place» («Vancouver Stadium»), Ванкувер, Канада. Крытая технологичная арена с искусственным газоном последнего поколения. Швейцария здесь уже полностью адаптировалась — именно на этом стадионе они провели победный матч 1/32 финала против Алжира.
            - **Уникальный логистический фактор:** Колумбия творит уникальную историю ЧМ — это единственная сборная на турнире, сыгравшая во всех трех странах-хозяйках. Группа прошла в Мексике (Мехико и Гвадалахара), раунд 1/32 — в США (Канзас-Сити), а теперь 1/8 — в Канаде. Перелеты огромные, трансатлантическая логистика может критически сказаться на свежести южноамериканцев.
            - **Кто фаворит:** Пары плей-офф с участием Швейцарии традиционно считаются самыми близкими, вязкими и непредсказуемыми («на три результата»). Букмекеры отдают микроскопический, едва заметный перевес Колумбии исключительно за счет звездного статуса лидеров атаки.
            - **Опыт в чемпионатах:** Обе команды прекрасно знают, как выходить в плей-офф. Лучший результат Колумбии — 1/4 финала в 2014 году, у Швейцарии — 1/4 финала в далеком 1954-м.

            ### 2. Рейтинг команд и футболистов
            - **Рейтинг ФИФА:** Швейцария стабильно держится в топ-15, у Колумбии схожие позиции (топ-12). Фактически это команды-соседи по классу.
            - **Рейтинг игроков:** У Колумбии более яркие, медийные и дорогие атакующие исполнители (Луис Диас из «Ливерпуля», Джон Дуран, Джон Ариас, вечный Джеймс Родригес). Швейцария монументально берет системной дороговизной оборонительного блока (Аканджи из «Манчестер Сити», Кобель из дортмундской «Боруссии», Закария).

            ### 3. Текущая форма команд
            - **Швейцария:** Абсолютно непотопляемы и стабильны на этом турнире. Уверенно заняли первое место в группе В (ничья с Катар 1:1, победы над Боснией 2:1 и Канадой 1:0). В 1/32 финала прагматично и солидно разобрались с крепким Алжиром (2:0). Команда находится в идеальном ментальном и физическом тонусе, обошлась без изнуряющих экстра-таймов.
            - **Колумбия:** Выиграли сложнейшую группу F (обыграли Узбекистан 3:1, Конго 1:0 и удержали стратегические 0:0 с Португалией). В 1/32 финала провели тяжелейший, вязкий матч против Ганы, где победили 1:0 благодаря раннему голу Джона Ариаса. Колумбия не пропускает три матча кряду.

            ### 4. Основная статистика (тренды голов)
            - **Швейцария:** Забивает стабильно, но строго дозировано (6 голов за 4 матча). Идеальный баланс в защите — в среднем они пропускают лишь 0.5 гола за игру.
            - **Колумбия:** Схожий прагматичный тренд. Забили 5 голов за 4 матча, пропустив всего один мяч (еще в первом туре от Узбекистана). Три последних матча Колумбии на турнире завершились на ТМ (1.5).

            ### 5. Дополнительная статистика (тренды ЧМ-2026)
            - **Угловые:** Швейцария много подает благодаря активным подключениям флангов и кроссам Рикардо Родригеса (в среднем 5.5 за матч). Колумбия использует угловые реже, но они у них опаснее из-за выдающейся антропометрии Давинсона Санчеса и Лукуми.
            - **Контроль мяча:** Примерное равенство. Обе команды одинаково хорошо умеют играть как в позиционное владение (**52-55%**), так и комфортно чувствуют себя в контратакующем среднем блоке.
            - **Желтые карточки:** Колумбия играет в традиционный агрессивный, плотный южноамериканский футбол. В матче с Ганой они сфолили 16 раз и получили 2 ранние карточки (Ариас и Риос). Швейцарцы действуют чище и тактически дисциплинированнее.

            ### 6. Очные встречи
            - Команды крайне редко пересекаются на официальном уровне. Исторически это классическое противостояние организованной европейской структуры и техничной, эмоциональной Южной Америки.

            ### 7. Тактика, стиль и системные проблемы
            - **Швейцария (4-2-3-1):** Монолитная структура. Гранит Джака и Денис Закария полностью цементируют опорную зону. В атаке все строится на умных силовых открываниях Бреэля Эмболо и скорости Дана Ндойе.
            - *Сила:* Сыгранность, железная дисциплина, сумасшедшая форма голкипера Грегора Кобеля.
            - *Проблема:* Склонность удерживать минимальное преимущество, что порой приводит к излишнему давлению на свои ворота в концовках.
            - **Колумбия (4-1-2-3 / 4-3-3):** Ставка на взрывные фланги и креатив. Джеймс Родригес (или заменяющий его Ричард Риос) выполняет роль свободного художника, а Луис Диас стягивает на себя по 2-3 защитника.
            - *Сила:* Индивидуальный дриблинг, высочайшая реализация полумоментов, умение «засушить» игру после забитого гола.
            - *Проблема:* Накопленная усталость из-за тяжелой логистики. В матче с Ганой Колумбия сознательно отдала инициативу во втором тайме, потому что физически подсела.

            ### 8. Составы, травмы и ротация
            - **Швейцария:** Мурат Якин имеет практически идеальный состав. Травмированных лидеров нет. Ндойе, Эмболо и Варгас составляют сыгранное и опасное трио атаки.
            - **Колумбия:** В матче с Ганой уже на 7-й минуте из-за повреждения был заменен основной форвард Джон Кордоба (вместо него вышел Луис Суарес). Его участие в 1/8 финала под большим вопросом, что снижает вариативность в атаке. Джеймс Родригес был превентивно заменен в перерыве против Ганы — Нестор Лоренсо бережет его ветеранские кондиции под плей-офф.

            ### 9. Статистика отдельных игроков
            - **Бреэль Эмболо (Швейцария):** Главный наконечник швейцарцев, забил важнейший гол Алжиру на 10-й минуте. Находится в отличной силовой форме.
            - **Джон Ариас (Колумбия):** Вингер Колумбии, герой матча 1/32 финала (гол на 14-й минуте). Обладает колоссальным объемом черновой работы.
            - **Луис Диас (Колумбия):** Главная звезда Колумбии. Даже когда не забивает, его метрика продвижения мяча на дриблинге ($Progressive\\ Runs$) — безоговорочно лучшая в команде.

            ### 10. Настрой команд и важность матча
            - Это 1/8 финала — стадия, где цена ошибки возрастает вдвое. Обе команды понимают, что находятся в шаге от повторения исторических достижений, а сетка оставляет осязаемые шансы для прорыва. Настрой прагматичный. Жтать искрометного открытого футбола с первых минут точно не стоит.

            ### 11. Тренерский фактор
            - **Мурат Якин:** Тактический гроссмейстер. Умеет филигранно подстраиваться под любого соперника. Его команда идеально готова к игре на результат «от ножа».
            - **Нестор Лоренсо:** Построил невероятную беспроигрышную серию Колумбии в квалификации и перенес этот дух на ЧМ. Умеет мотивировать, но логистические трудности турнира заставляют его сейчас больше думать о физическом восстановлении игроков, чем о тактических новинках.

            ### 12. Что говорят аналитики и букмекеры
            Котировки на проход в следующую стадию практически равны
            - **Проход Колумбии:**  1.85$
            - **Проход Швейцарии:**  1.95$
            - *Большинство аналитиков предсказывают строго «низовой» матч и не удивятся, если дело дойдет до серии пенальти, где у Швейцарии есть преимущество в лице Кобеля.*


            ## 2. Футбольные метрики

            ### 1. Атакующие метрики (xG, xA, xGOT)
            - **Швейцария:** Средний $xG$ на турнире — $1.45$. Очень высокое качество создаваемых моментов — они не бьют издали ради статистики, а доводят мяч до штрафной. Метрика $xGOT$ Эмболо и Ндойе подтверждает: удары идут строго в углы ворот.
            - **Колумбия:** Средний $xG$ — $1.20$. Забивают ровно то, что создают. $xA$ (ожидаемые ассисты) равномерно распределены между Джеймсом (со стандартов) и Луисом Диасом (после сольных проходов).

            ### 2. Продвижение мяча
            - **Field Tilt («Наклон поля»):** Примерно $51\\%$ на $49\\%$ в пользу Швейцарии. Швейцарцы чуть больше времени проводят с мячом на чужой трети поля благодаря выверенной структуре паса Гранита Джаки.
            - **Progressive Passes:** Джака — один из лидеров ЧМ по передачам в финальную треть поля ($Pass\\ Completion\\ Rate$ у него держится на космическом уровне **91%**).
            - **Progressive Runs:** Здесь Колумбия превосходит оппонента. Луис Диас в одиночку совершает до 6-8 успешных продвижений на дриблинге за матч.

            ### 3. Защитные и прессинг-метрики
            - **PPDA:** Швейцария — $10.2$ (сбалансированный прессинг). Колумбия — $12.5$ (южноамериканцы предпочитают не включать высокий прессинг постоянно, а встречать жестко в центральной зоне силами Лермы и Риоса).
            - **Interceptions & Recoveries:** Мануэль Аканджи — лидер турнира по перехватам без фола. Оборона Швейцарии практически не допускает паники и суеты в собственной штрафной.

            ### 4. Комплексные модели (PV / VAEP)
            - **VAEP (Ценность действий):** У Колумбии высочайшая зависимость ценности владения от индивидуальных действий Диаса. Если Якин закроет его сдвоенным флангом (Сильван Видмер + Денис Закария), атакующий потенциал Колумбии упадет наполовину.


            ## 3. Расчет матча методом Пуассона

            На основе четырех сыгранных матчей на ЧМ-2026
            - Ожидаемые голы Швейцарии: учитывая их атаку (1.5 гола за игру) и железную оборону Колумбии (0.25 пропущенных), модель выдает $0.95$ гола.
            - Ожидаемые голы Колумбии: атака колумбийцев (1.25 за игру) против защиты швейцарцев (0.5 пропущенных) дает $1.05$ гола.

            Распределение вероятностей Пуассона:
            - **Победа Швейцарии в основное время:** $31\\%$
            - **Ничья в основное время:** $38\\%$ *(наиболее вероятно 0:0 или 1:1)*
            - **Победа Колумбии в основное время:** $31\\%$
            - *Модель Пуассона прямо указывает на то, что основное время матча с огромной долей вероятности завершится вничью.*


            ## 4. Поиск в линии VALUE (Честной ставки)

            Букмекеры закладывают примерно равные шансы на исход, но серьезно недооценивают тотальный оборонительный тренд обеих команд в плей-офф.

            - **Где скрыто VALUE:**
            1. **Ничья в основное время** за коэффициент в районе **3.10 – 3.30**. Наша модель оценивает вероятность ничьей в $38\\%$ (что эквивалентно честному кэфу **2.63**). Это чистый валуй. Обе команды безупречны в защите и не станут неоправданно рисковать.
            2. **Тотал Меньше (2.0) голов** за кэф около **1.90 - 2.00**. С полным возвратом в случае ровно двух голов. Вероятность счетов 0:0 или 1:0 в одну из сторон здесь запредельно высока.


            ## 5. Анализ общей информации

            Мы увидим классическую, напряженную шахматную партию. Швейцария имеет весомое преимущество в свежести (они не летали через весь континент, как Колумбия, и уже успешно играли на этой арене в Ванкувере). Колумбия сильна индивидуально, но возможная потеря Джона Кордобы и усталость Джеймса Родригеса заставят Нестора Лоренсо играть максимально закрыто. Мануэль Аканджи индивидуально готов ментально и физически противостоять Луису Диасу. Матч затянется, и физическая структура Швейцарии во втором тайме начнет доминировать.


            ## 6. Лучшие ставки на матч

            **1. Основной выбор (Инвестиция): Тотал Меньше 2.0 голов (Коэффициент  1.95$)**
            - **Обоснование:** Обе команды пропустили всего по 1-2 мяча за весь турнир. Защита здесь явно превалирует над атакой. Стадия 1/8 финала только усугубит прагматизм тренеров.

            **2. Валуй-выбор (Value Bet): Ничья в основное время (Коэффициент  3.20$)**
            - **Обоснование:** Самый математически обоснованный исход по модели Пуассона для двух абсолютно равных по классу системных сборных.

            **3. Альтернативный надежный выбор: Швейцария не проиграет (1X) + ТМ 3.5 (Коэффициент  1.72$)**
            - **Обоснование:** Фактор свежести, отсутствие тяжелых перелетов и успешная акклиматизация в Ванкувере говорят в пользу европейского коллектива.`
    
         }
    ],
    '1/4': [
        { id: 97, date: "Четверг, 9 июля", time: "23:00", stadium: "Бостон • Джиллетт Ст.", team1Code: "fr", team1Text: "Франция", team2Code: "ma", team2Text: "Марокко", prob1: 34, probX: 33, prob2: 33 },
        { id: 98, date: "Пятница, 10 июля", time: "22:00", stadium: "Лос-Анджелес • Соу-Фай", team1Code: "🏆", team1Text: "Победитель Матча 93", team2Code: "🏆", team2Text: "Победитель Матча 94", prob1: 34, probX: 33, prob2: 33 },
        { id: 99, date: "Воскресенье, 12 июля", time: "00:00", stadium: "Майами • Хард Рок", team1Code: "no", team1Text: "Норвегия", team2Code: "gb-eng", team2Text: "Англия", prob1: 34, probX: 33, prob2: 33 },
        { id: 100, date: "Воскресенье, 12 июля", time: "04:00", stadium: "Канзас-Сити • Эрроухед", team1Code: "🏆", team1Text: "Победитель Матча 95", team2Code: "🏆", team2Text: "Победитель Матча 96", prob1: 34, probX: 33, prob2: 33 }
    ],
    '1/2': [
        { id: 101, date: "Вторник, 14 июля", time: "22:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "🌟", team1Text: "Победитель Матча 97", team2Code: "🌟", team2Text: "Победитель Матча 98", prob1: 34, probX: 33, prob2: 33 },
        { id: 102, date: "Среда, 15 июля", time: "22:00", stadium: "Аталанта • Мерседес-Бенц", team1Code: "🌟", team1Text: "Победитель Матча 99", team2Code: "🌟", team2Text: "Победитель Матча 100", prob1: 34, probX: 33, prob2: 33 }
    ],
    '3-е место': [
        { id: 103, date: "Воскресенье, 19 июля", time: "00:00", stadium: "Майами • Хард Рок", team1Code: "🥉", team1Text: "Проигравший Матча 101", team2Code: "🥉", team2Text: "Проигравший Матча 102", prob1: 34, probX: 33, prob2: 33 }
    ],
    'Финал': [
        { id: 104, date: "Воскресенье, 19 июля", time: "22:00", stadium: "Нью-Джерси • ФИНАЛ ЧМ-2026", team1Code: "👑", team1Text: "Победитель Матча 101", team2Code: "👑", team2Text: "Победитель Матча 102", prob1: 34, probX: 33, prob2: 33, isGrandFinal: true }
    ]
};

/// Функция открытия окна с индивидуальным анализом конкретного матча
function openAnalysisModal(matchId, team1Text, team2Text) {
    const modal = document.getElementById('poa-analysis-modal');
    const titleElement = document.getElementById('poa-modal-title');
    const textElement = document.getElementById('poa-modal-text');
    
    if (!modal || !titleElement || !textElement) return;

    // Ищем матч во всей базе данных по его ID
    let foundMatch = null;
    for (const round in playoffMatchesSchedule) {
        foundMatch = playoffMatchesSchedule[round].find(m => m.id === matchId);
        if (foundMatch) break;
    }

    // Красивый, аккуратный заголовок: Номер матча белый, а команды на следующей строчке — бирюзовые
    titleElement.innerHTML = `📊 Анализ матча №${matchId} <br><span style="color: #00ffcc; font-size: 14px; font-weight: 600; display: block; margin-top: 5px;">${team1Text} vs ${team2Text}</span>`;
    
    // Внедряем красивое форматирование для текста
    if (foundMatch && foundMatch.analysisText) {
        // ОБЕРНУЛИ ТЕКСТ В ФУНКЦИЮ АВТО-ФОРМАТИРОВАНИЯ
        textElement.innerHTML = formatRawTextToHTML(foundMatch.analysisText);
    } else {
        textElement.innerHTML = `Аналитика для матча №${matchId} (${team1Text} - ${team2Text}) находится в обработке. Скоро здесь появятся детальные xG метрики, разбор Fibonacci уровней и Poisson распределение команд.`;
    }

    // Показываем модалку
    modal.classList.add('active');
}

// Функция закрытия окна анализа
function closeAnalysisTextModal() {
    const modal = document.getElementById('poa-analysis-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/* =========================================
   АВТОМАТИЧЕСКИЕ БЛИЖАЙШИЕ МАТЧИ
========================================= */
const teamAliases = {
    "Босния": "Босния и Герцеговина",
    "Нов. Зеландия": "Новая Зеландия"
};

document.addEventListener('DOMContentLoaded', () => {
    // Первичное обновление при загрузке страницы
    updatePlayoffTeamsInDrawer();
    renderUpcomingMatches();

    // Обновление каждую минуту для live-режима
    setInterval(() => {
        updatePlayoffTeamsInDrawer();
        renderUpcomingMatches();
    }, 60000);
});

function renderUpcomingMatches() {
    const container = document.getElementById('upcoming-matches');
    if (!container) return;

    const now = new Date();
    const rows = document.querySelectorAll('.drawer-match-row');
    const upcomingMatches = [];

    rows.forEach(row => {
        const kickoffString = row.dataset.kickoff;
        if (!kickoffString) return;

        const kickoff = new Date(kickoffString);
        const finishTime = new Date(kickoff.getTime() + (2 * 60 * 60 * 1000));
        if (finishTime <= now) return;

        const teams = row.querySelectorAll('.d-team');
        if (teams.length < 2) return;

        const team1Flag = teams[0].querySelector('.fi')?.className || '';
        const team2Flag = teams[1].querySelector('.fi')?.className || '';
        

        // Сохраняем сырой текст из DOM
        const team1Name = teams[0].textContent.trim().replace(/\s+/g, ' ');
        const team2Name = teams[1].textContent.trim().replace(/\s+/g, ' ');

        const groupElement = row.querySelector('.d-group');
        const venueElement = row.querySelector('.d-venue');

        upcomingMatches.push({
            kickoff,
            date: kickoff.toLocaleDateString('ru-RU', {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
            }),
            time: row.querySelector('.d-match-time')?.textContent.trim() || '',
            team1Flag,
            team2Flag,
            team1Name,
            team2Name,
            groupText: (groupElement?.textContent.trim() || '').replace('Гр.', 'Группа'),
            groupClass: groupElement?.classList[1] || '',
            venue: venueElement?.textContent.trim() || ''
        });
    });

    upcomingMatches.sort((a, b) => a.kickoff - b.kickoff);
    const nearestThree = upcomingMatches.slice(0, 3);

    container.innerHTML = nearestThree.map(match => {
        let matchIdFromHTML = NaN;
        if (match.groupText && /\d+/.test(match.groupText)) {
            matchIdFromHTML = parseInt(match.groupText.replace(/\D/g, ""), 10);
        }

        let foundPlayoffMatch = null;
        if (!isNaN(matchIdFromHTML)) {
            for (const round in playoffMatchesSchedule) {
                foundPlayoffMatch = playoffMatchesSchedule[round].find(m => m.id === matchIdFromHTML);
                if (foundPlayoffMatch) break;
            }
        }

       // Исходные заглушки из базы данных
        let t1Placeholder = foundPlayoffMatch ? foundPlayoffMatch.team1Text : "";
        let t2Placeholder = foundPlayoffMatch ? foundPlayoffMatch.team2Text : "";

        // Очищаем имена команд
        let team1Display = match.team1Name;
        let team2Display = match.team2Name;

        // Эффективное удаление заглушек «Победитель» или «3-е место» вместе с хвостами групп
        if (t1Placeholder && team1Display.includes(t1Placeholder)) {
            team1Display = team1Display.replace(t1Placeholder, '').trim();
        }
        if (t2Placeholder && team2Display.includes(t2Placeholder)) {
            team2Display = team2Display.replace(t2Placeholder, '').trim();
        }

        // ДОПОЛНИТЕЛЬНАЯ КОРРЕКЦИЯ: Вырезаем "3-е место" и любые идущие следом латинские буквы групп
        const thirdPlaceRegex = /3-е\s+место\s*[A-Z]*/gi;
        const winnerRegex = /Победитель\s+Матча\s*\d*/gi;

        team1Display = team1Display.replace(thirdPlaceRegex, '').replace(winnerRegex, '').trim();
        team2Display = team2Display.replace(thirdPlaceRegex, '').replace(winnerRegex, '').trim();

        // На всякий случай убираем остаточные синтаксические хвосты вроде "Гр. D" или пустые скобки
        team1Display = team1Display.replace(/\(Гр\..*?\)/g, '').replace(/[\(\)\[\]]/g, '').trim().replace(/\s+/g, ' ');
        team2Display = team2Display.replace(/\(Гр\..*?\)/g, '').replace(/[\(\)\[\]]/g, '').trim().replace(/\s+/g, ' ');

        // Если после очистки ничего не осталось (матч еще не рассчитан и играет заглушка), возвращаем её назад
        if (!team1Display) team1Display = t1Placeholder;
        if (!team2Display) team2Display = t2Placeholder;

        // Переменные для базы данных ставок
        const dbTeam1 = teamAliases[team1Display] || team1Display;
        const dbTeam2 = teamAliases[team2Display] || team2Display;

        // Создаем подписи только если команда определена и имя отличается от заглушки
        let t1SubHtml = "";
        let t2SubHtml = "";

        if (t1Placeholder && t1Placeholder !== team1Display) {
            t1SubHtml = `<div style="position: absolute; bottom: -14px; left: 0; right: 0; font-size: 10px; color: #a0aec0; font-weight: 400; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t1Placeholder}</div>`;
        }
        if (t2Placeholder && t2Placeholder !== team2Display) {
            t2SubHtml = `<div style="position: absolute; bottom: -14px; left: 0; right: 0; font-size: 10px; color: #a0aec0; font-weight: 400; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t2Placeholder}</div>`;
        }

        return `
        <div class="match-card">
            <div class="match-header">
                <span class="match-date">${match.date}</span>
                <span class="match-time">${match.time}</span>
            </div>

            <!-- Добавляем margin-bottom, чтобы дать место абсолютным подписям внизу -->
            <div class="match-teams" style="margin-bottom: 20px;">
                
                <!-- Команда 1 -->
                <div class="team" style="position: relative;">
                    <span class="${match.team1Flag}"></span>
                    <span class="team-name">${team1Display}</span>
                    ${t1SubHtml}
                </div>

                <div class="vs">VS</div>

                <!-- Команда 2 -->
                <div class="team" style="position: relative;">
                    <span class="${match.team2Flag}"></span>
                    <span class="team-name">${team2Display}</span>
                    ${t2SubHtml}
                </div>

            </div>

            <div class="match-group-center" style="margin-bottom: 12px;">
                <span class="group-pill ${match.groupClass}">
                    ${match.groupText}
                </span>
            </div>

            <div class="match-footer">
                ${match.venue}
            </div>

            ${foundPlayoffMatch ? `
                <div class="home-odds-container">
                    <div class="home-odds-labels">
                        <span class="home-p1">П1 ${foundPlayoffMatch.prob1}%</span>
                        <span class="home-x">X ${foundPlayoffMatch.probX}%</span>
                        <span class="home-p2">П2 ${foundPlayoffMatch.prob2}%</span>
                    </div>
                    <div class="home-odds-bar">
                        <div class="home-segment home-p1-bg" style="width:${foundPlayoffMatch.prob1}%"></div>
                        <div class="home-segment home-x-bg" style="width:${foundPlayoffMatch.probX}%"></div>
                        <div class="home-segment home-p2-bg" style="width:${foundPlayoffMatch.prob2}%"></div>
                    </div>
                    <div class="upcoming-analysis-box">
                        <button 
                            class="upcoming-analysis-btn" 
                            onclick="openAnalysisModal(${foundPlayoffMatch.id}, '${dbTeam1.replace(/'/g, "\\'")}', '${dbTeam2.replace(/'/g, "\\'")}')">
                             Анализ матча
                        </button>
                    </div>
                </div>
            ` : ''}
        </div>
        `;
    }).join('');
}

// Клик по буквам групп на главной странице
document.querySelectorAll('.teaser-badge').forEach(badge => {
    badge.style.cursor = 'pointer';

    badge.addEventListener('click', () => {
        const group = badge.dataset.group.toLowerCase();
        window.location.href = `group.html?id=${group}`;
    });
});

/// Клик по плашкам групп в блоке матчей
document.addEventListener('click', function (e) {
    const pill = e.target.closest('.group-pill');

    if (!pill) return;

    const groupClass = [...pill.classList].find(cls => /^gr-[a-l]$/i.test(cls));

    if (!groupClass) return;

    const groupId = groupClass.replace('gr-', '').toLowerCase();

    window.location.href = `group.html?id=${groupId}`;
});


// Функция автоматического парсинга таблиц группового этапа
function getActualGroupWinners() {
    const resultData = {};
    const groups = ['a','b','c','d','e','f','g','h','i','j','k','l'];

    // 1. Наш жесткий справочник команд и флагов
    const groupsData = {
        a: [
            { place: 1, name: "Мексика", flag: "mx" },
            { place: 2, name: "Чехия", flag: "cz" },
            { place: 3, name: "Южная Корея", flag: "kr" },
            { place: 4, name: "ЮАР", flag: "za" }
        ],
        b: [
            { place: 1, name: "Канада", flag: "ca" },
            { place: 2, name: "Швейцария", flag: "ch" },
            { place: 3, name: "Катар", flag: "qa" },
            { place: 4, name: "Босния и Герцеговина", flag: "ba" }
        ],
        c: [
            { place: 1, name: "Бразилия", flag: "br" },
            { place: 2, name: "Шотландия", flag: "gb-sct" },
            { place: 3, name: "Марокко", flag: "ma" },
            { place: 4, name: "Гаити", flag: "ht" }
        ],
        d: [
            { place: 1, name: "США", flag: "us" },
            { place: 2, name: "Турция", flag: "tr" },
            { place: 3, name: "Парагвай", flag: "py" },
            { place: 4, name: "Австралия", flag: "au" }
        ],
        e: [
            { place: 1, name: "Германия", flag: "de" },
            { place: 2, name: "Эквадор", flag: "ec" },
            { place: 3, name: "Кот-д'Ивуар", flag: "ci" },
            { place: 4, name: "Кюрасао", flag: "cw" }
        ],
        f: [
            { place: 1, name: "Нидерланды", flag: "nl" },
            { place: 2, name: "Япония", flag: "jp" },
            { place: 3, name: "Швеция", flag: "se" },
            { place: 4, name: "Тунис", flag: "tn" }
        ],
        g: [
            { place: 1, name: "Бельгия", flag: "be" },
            { place: 2, name: "Египет", flag: "eg" },
            { place: 3, name: "Иран", flag: "ir" },
            { place: 4, name: "Новая Зеландия", flag: "nz" }
        ],
        h: [
            { place: 1, name: "Испания", flag: "es" },
            { place: 2, name: "Уругвай", flag: "uy" },
            { place: 3, name: "Саудовская Аравия", flag: "sa" },
            { place: 4, name: "Кабо-Верде", flag: "cv" }
        ],
        i: [
            { place: 1, name: "Франция", flag: "fr" },
            { place: 2, name: "Норвегия", flag: "no" },
            { place: 3, name: "Сенегал", flag: "sn" },
            { place: 4, name: "Ирак", flag: "iq" }
        ],
        j: [
            { place: 1, name: "Аргентина", flag: "ar" },
            { place: 2, name: "Австрия", flag: "at" },
            { place: 3, name: "Алжир", flag: "dz" },
            { place: 4, name: "Иордания", flag: "jo" }
        ],
        k: [
            { place: 1, name: "Португалия", flag: "pt" },
            { place: 2, name: "Колумбия", flag: "co" },
            { place: 3, name: "Узбекистан", flag: "uz" },
            { place: 4, name: "Конго ДР", flag: "cd" }
        ],
        l: [
            { place: 1, name: "Англия", flag: "gb-eng" },
            { place: 2, name: "Хорватия", flag: "hr" },
            { place: 3, name: "Панама", flag: "pa" },
            { place: 4, name: "Гана", flag: "gh" }
        ]
    };

    // Внутренний калькулятор, который собирает все возможные пары в группе и ищет их в matchResults
    function calculateInlineStandings(groupId) {
        const teams = groupsData[groupId].map(t => ({ ...t, points: 0, gd: 0, goalsFor: 0 }));
        let playedMatchesCount = 0;
        const currentResults = typeof matchResults !== 'undefined' ? matchResults : {};

        // Генерируем круговую систему (каждый играет с каждым, всего 6 матчей в группе)
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                const t1 = teams[i];
                const t2 = teams[j];

                // Проверяем оба варианта написания ключа в объекте результатов на случай разного порядка команд
                const keyDirect = `${t1.name}_${t2.name}`;
                const keyReverse = `${t2.name}_${t1.name}`;
                
                let match = currentResults[keyDirect];
                let isDirect = true;
                
                if (!match && currentResults[keyReverse]) {
                    match = currentResults[keyReverse];
                    isDirect = false;
                }

                // Если счет найден и он валиден — считаем статистику
                if (match && match.score1 !== null && match.score2 !== null && match.score1 !== undefined && match.score2 !== undefined) {
                    playedMatchesCount++;
                    const s1 = isDirect ? parseInt(match.score1) : parseInt(match.score2);
                    const s2 = isDirect ? parseInt(match.score2) : parseInt(match.score1);

                    t1.goalsFor += s1;
                    t2.goalsFor += s2;
                    t1.gd += (s1 - s2);
                    t2.gd += (s2 - s1);

                    if (s1 > s2) t1.points += 3;
                    else if (s1 < s2) t2.points += 3;
                    else { t1.points += 1; t2.points += 1; }
                }
            }
        }

        // Сортируем: Очки -> Разница мячей -> Забитые голы
        teams.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.gd !== a.gd) return b.gd - a.gd;
            return b.goalsFor - a.goalsFor;
        });

        return { standings: teams, isFinished: (playedMatchesCount === 6) };
    }

    try {
        const thirdCandidates = {};
        let finishedGroupsCount = 0;

        // Проходим по всем 12 группам
        groups.forEach(groupId => {
            const { standings, isFinished } = calculateInlineStandings(groupId);

            // Если в группе заполнено все 6 результатов матчей — открываем шторку и модалку
            if (isFinished && standings.length >= 3) {
                finishedGroupsCount++;

                resultData[`1${groupId.toUpperCase()}`] = {
                    name: standings[0].name,
                    flag: `fi fi-${standings[0].flag}`,
                    originGroup: groupId.toUpperCase()
                };

                resultData[`2${groupId.toUpperCase()}`] = {
                    name: standings[1].name,
                    flag: `fi fi-${standings[1].flag}`,
                    originGroup: groupId.toUpperCase()
                };

                // Сохраняем информацию о 3-м месте для таблицы лучших
                thirdCandidates[groupId.toUpperCase()] = {
                    group: groupId.toUpperCase(),
                    name: standings[2].name,
                    flag: `fi fi-${standings[2].flag}`,
                    points: standings[2].points,
                    gd: standings[2].gd,
                    goalsFor: standings[2].goalsFor
                };
            }
        });

        // ЖЕСТКИЙ ЗАМОК: 3-и места распределяются по ФИФА только когда доиграны ВСЕ 12 групп
        if (finishedGroupsCount < 12) {
            return resultData; 
        }

        // Сортировка третьих мест за выход в ТОП-8 плей-офф
        const sortedThirds = Object.values(thirdCandidates).sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.gd !== a.gd) return b.gd - a.gd;
            return b.goalsFor - a.goalsFor;
        });

        const top8Thirds = sortedThirds.slice(0, 8);
        const combination = top8Thirds.map(item => item.group.toUpperCase()).sort().join('');

            // --- ПОЛНАЯ ОФИЦИАЛЬНАЯ МАТРИЦА FIFA ДЛЯ ЧМ С 12 ГРУППАМИ ---
            // Указывает букву группы, чьё 3-е место отправляется к конкретному победителю
            const fifaMatrix = {
                
    "BDEFIJKL": { "1E": "D", "1I": "F", "1A": "E", "1L": "K", "1G": "I", "1D": "B", "1B": "J", "1K": "L" }

    
            };
            /******************************************************************
 * Какой матч 1/16 получает какое третье место
 ******************************************************************/
const PLAYOFF_THIRD_PLACE_SLOTS = {

    75: "3_МЕСТО_ДЛЯ_1E", // Германия — Парагвай

    78: "3_МЕСТО_ДЛЯ_1I", // Франция — Швеция

    79: "3_МЕСТО_ДЛЯ_1A", // Мексика — Эквадор

    80: "3_МЕСТО_ДЛЯ_1L", // Англия — Конго

    81: "3_МЕСТО_ДЛЯ_1G", // Бельгия — Сенегал

    82: "3_МЕСТО_ДЛЯ_1D", // США — Босния

    85: "3_МЕСТО_ДЛЯ_1B", // Швейцария — Алжир

    88: "3_МЕСТО_ДЛЯ_1K"  // Колумбия — Гана

};


      const currentScheme = fifaMatrix[combination];

        if (currentScheme) {
            Object.keys(currentScheme).forEach(winnerKey => {
                const targetGroupLetter = currentScheme[winnerKey].toUpperCase(); 
                const actualThirdTeam = thirdCandidates[targetGroupLetter];

                if (actualThirdTeam) {
                    resultData[`3_МЕСТО_ДЛЯ_${winnerKey}`] = {
                        name: actualThirdTeam.name,
                        flag: actualThirdTeam.flag,
                        originGroup: targetGroupLetter
                    };
                }
            });
        }

    } catch (err) {
        console.error("Ошибка авто-расчета по текстовым ключам:", err);
    }
    console.log("=== RESULT DATA ===");
console.log(resultData);

    return resultData;
}


function updatePlayoffTeamsInDrawer() {
    const drawer = document.getElementById('schedule-drawer');
    if (!drawer) return;

    const actualWinners = getActualGroupWinners();
    // Находим все элементы команд внутри шторки
    const teamElements = drawer.querySelectorAll('.d-team');

    // Массив соответствия строго по порядку появления 3-х мест в вашем index.html
    const thirdPlacesMap = [
        { combo: "ABCDF", key: "3_МЕСТО_ДЛЯ_1E" }, // 1-е встреченное 3-е место
        { combo: "CDFGH", key: "3_МЕСТО_ДЛЯ_1I" }, // 2-е встреченное 3-е место
        { combo: "CEFHI", key: "3_МЕСТО_ДЛЯ_1A" }, // 3-е
        { combo: "ADEJK", key: "3_МЕСТО_ДЛЯ_1L" }, // 4-е
        { combo: "BGHIK", key: "3_МЕСТО_ДЛЯ_1G" }, // 5-е
        { combo: "AFJKL", key: "3_МЕСТО_ДЛЯ_1D" }, // 6-е
        { combo: "BCEIL", key: "3_МЕСТО_ДЛЯ_1B" }, // 7-е
        { combo: "DGHJL", key: "3_МЕСТО_ДЛЯ_1K" }  // 8-е
    ];

    let thirdPlaceCounter = 0;

    teamElements.forEach(teamEl => {
        let key = "";
        let originalLabel = "";
        let isThirdPlace = false;

        // Если мы еще не кэшировали изначальный тип этого элемента, определяем его один раз
        if (!teamEl.hasAttribute('data-slot-type')) {
            const txt = teamEl.textContent.trim();
            
            if (txt.toLowerCase().includes("3-е место")) {
                teamEl.setAttribute('data-slot-type', 'third');
                teamEl.setAttribute('data-slot-index', thirdPlaceCounter);
                thirdPlaceCounter++;
            } else if (/(?:1-е место|Победитель) Группы\s+([A-L])/i.test(txt)) {
                const m = txt.match(/(?:1-е место|Победитель) Группы\s+([A-L])/i);
                teamEl.setAttribute('data-slot-type', 'first');
                teamEl.setAttribute('data-slot-id', "1" + m[1].toUpperCase());
                teamEl.setAttribute('data-slot-label', m[0]);
            } else if (/2-е место Группы\s+([A-L])/i.test(txt)) {
                const m = txt.match(/2-е место Группы\s+([A-L])/i);
                teamEl.setAttribute('data-slot-type', 'second');
                teamEl.setAttribute('data-slot-id', "2" + m[1].toUpperCase());
                teamEl.setAttribute('data-slot-label', m[0]);
            } else {
                teamEl.setAttribute('data-slot-type', 'unknown');
            }
        }

        // Читаем тип слота из сохраненных атрибутов (теперь innerHTML им не помешает)
        const slotType = teamEl.getAttribute('data-slot-type');

        if (slotType === 'first' || slotType === 'second') {
            key = teamEl.getAttribute('data-slot-id');
            originalLabel = teamEl.getAttribute('data-slot-label');
        } else if (slotType === 'third') {
            isThirdPlace = true;
            const idx = parseInt(teamEl.getAttribute('data-slot-index'), 10);
            if (thirdPlacesMap[idx]) {
                key = thirdPlacesMap[idx].key;
                originalLabel = `3-е место ${thirdPlacesMap[idx].combo}`;
            }
        }

        // Рендерим команду, если данные для этого ключа рассчитаны
        if (key && actualWinners[key]) {
            const flagClass = actualWinners[key].flag;
            const teamName = actualWinners[key].name;
            const originG = actualWinners[key].originGroup || "";
            
            const subLabel = (isThirdPlace && originG)
                ? `${originalLabel} (Гр. ${originG})` 
                : originalLabel;

            teamEl.innerHTML = `
                <span class="${flagClass}"></span>
                <div style="display: inline-flex; flex-direction: column; vertical-align: middle; margin-left: 6px; line-height: 1.1; text-align: left;">
                    <span style="font-weight: 700; color: #fff; font-size: 13px;">${teamName}</span>
                    <span style="font-size: 10px; color: #718096; font-weight: 400; margin-top: 1px;">${subLabel}</span>
                </div>
            `;
        }
    });
}

// =========================================================================
// Функция автоматического превращения обычного текста в красивый HTML
// =========================================================================
function formatRawTextToHTML(rawText) {
    if (!rawText) return '';
    
    // Разбиваем текст на строки
    const lines = rawText.split('\n');
    let htmlResult = '';
    let inList = false;
    let inTable = false;
    
    lines.forEach(line => {
        let trimmed = line.trim();
        
        // 1. Проверяем пустую строку
        if (trimmed === '') {
            if (inList) { htmlResult += '</ul>'; inList = false; }
            if (inTable) { htmlResult += '</table></div>'; inTable = false; }
            return;
        }
        
        // Функция-помощник для поиска **жирного текста** внутри строки
        let processedLine = trimmed.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        
        // 2. ОБРАБОТКА БОЛЬШИХ ЗАГОЛОВКОВ (через ##)
        if (trimmed.startsWith('##')) {
            if (inList) { htmlResult += '</ul>'; inList = false; }
            if (inTable) { htmlResult += '</table></div>'; inTable = false; }
            
            let headerText = trimmed.replace(/^##\s*/, '');
            htmlResult += `<h2 style="font-size: 20px; font-weight: 900; color: #00ffcc; margin-top: 25px; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">${headerText}</h2>`;
            return;
        }
        
        // 3. Обработка ТАБЛИЦЫ (если строка содержит разделитель |)
        if (trimmed.includes('|')) {
            if (inList) { htmlResult += '</ul>'; inList = false; }
            
            const cells = trimmed.split('|').map(c => c.trim());
            
            if (!inTable) {
                inTable = true;
                htmlResult += '<div style="overflow-x:auto; margin: 15px 0;"><table style="width:100%; border-collapse:collapse; background:#141a26; border-radius:8px; overflow:hidden; font-size:14px;">';
                htmlResult += '<tr style="background:#192130; border-bottom:1px solid #1e2535; font-weight:800; color:#00ffcc;">';
                cells.forEach(cell => { htmlResult += `<th style="padding:10px; text-align:left;">${cell}</th>`; });
                htmlResult += '</tr>';
                return;
            } else {
                htmlResult += '<tr style="border-bottom:1px solid rgba(30,37,53,0.5);">';
                cells.forEach((cell, idx) => { 
                    let style = idx === 0 ? 'color:#fff; font-weight:700;' : 'color:#b9c4da;';
                    htmlResult += `<td style="padding:10px; ${style}">${cell}</td>`; 
                });
                htmlResult += '</tr>';
                return;
            }
        }
        
        if (inTable && !trimmed.includes('|')) {
            htmlResult += '</table></div>';
            inTable = false;
        }
        
        // 4. Обработка СПИСКОВ (если строка начинается с дефиса)
        if (trimmed.startsWith('-')) {
            if (!inList) {
                inList = true;
                htmlResult += '<ul style="margin-left:20px; margin-bottom:15px; color:#b9c4da; list-style-type: disc;">';
            }
            let listItemContent = trimmed.substring(1).trim().replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            htmlResult += `<li style="margin-bottom:5px;">${listItemContent}</li>`;
            return;
        }
        
        if (inList && !trimmed.startsWith('-')) {
            htmlResult += '</ul>';
            inList = false;
        }
        
        // 5. Старые авто-заголовки (если строка заканчивается на двоеточие)
        if (trimmed.endsWith(':')) {
            htmlResult += `<p style="font-weight:800; color:#fff; margin-top:15px; margin-bottom:8px; text-transform:uppercase; font-size:14px; letter-spacing:0.5px;">${processedLine}</p>`;
        } else {
            // 6. Обычный абзац текста
            htmlResult += `<p style="margin-bottom:12px; color:#b9c4da; line-height:1.6;">${processedLine}</p>`;
        }
    });
    
    if (inList) htmlResult += '</ul>';
    if (inTable) htmlResult += '</table></div>';
    
    return htmlResult;
}










