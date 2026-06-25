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
    "Катар_Швейцария": { score1: 1, score2: 1 },
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

        // --- Подготовка Команды 1 ---
        let t1Text = `<span class="po-team-label-text ${match.isFinalist1 ? 'gold-text' : ''}">${match.team1Text}</span>`;
        let t1CodeHtml = match.team1Code;
        let t1Key = match.team1Code;

        // Жесткая привязка к ID матча, если в роли первой команды выступает 3-е место
        if (match.team1Text && match.team1Text.toLowerCase().includes("3-е место")) {
            if (match.id === 75) t1Key = "3_МЕСТО_ДЛЯ_1B";
            else if (match.id === 78) t1Key = "3_МЕСТО_ДЛЯ_1C";
            else if (match.id === 79) t1Key = "3_МЕСТО_ДЛЯ_1E";
            else if (match.id === 80) t1Key = "3_МЕСТО_ДЛЯ_1F";
            else if (match.id === 81) t1Key = "3_МЕСТО_ДЛЯ_1G";
            else if (match.id === 82) t1Key = "3_МЕСТО_ДЛЯ_1H";
            else if (match.id === 85) t1Key = "3_МЕСТО_ДЛЯ_1A";
            else if (match.id === 88) t1Key = "3_МЕСТО_ДЛЯ_1D";
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

        // --- Подготовка Команды 2 ---
        let t2Text = `<span class="po-team-label-text ${match.isFinalist2 ? 'gold-text' : ''}">${match.team2Text}</span>`;
        let t2CodeHtml = match.team2Code;
        let t2Key = match.team2Code;

        // Жесткая привязка к ID матча, если в роли второй команды выступает 3-е место
        if (match.team2Text && match.team2Text.toLowerCase().includes("3-е место")) {
            if (match.id === 75) t2Key = "3_МЕСТО_ДЛЯ_1B";
            else if (match.id === 78) t2Key = "3_МЕСТО_ДЛЯ_1C";
            else if (match.id === 79) t2Key = "3_МЕСТО_ДЛЯ_1E";
            else if (match.id === 80) t2Key = "3_МЕСТО_ДЛЯ_1F";
            else if (match.id === 81) t2Key = "3_МЕСТО_ДЛЯ_1G";
            else if (match.id === 82) t2Key = "3_МЕСТО_ДЛЯ_1H";
            else if (match.id === 85) t2Key = "3_МЕСТО_ДЛЯ_1A";
            else if (match.id === 88) t2Key = "3_МЕСТО_ДЛЯ_1D";
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
                
                <div class="amc-vs">vs</div>
                
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
        { id: 73, date: "Воскресенье, 28 июня", time: "22:00", stadium: "Лос-Анджелес • Соу-Фай", team1Code: "2A", team1Text: "2-е место Группы A", team2Code: "2B", team2Text: "2-е место Группы B", prob1: 34, probX: 33, prob2: 33, analysisText: "Здесь твой подробный разбор матча 49. Можно использовать теги <b>жирный</b>, <br> для переноса строки, или списки, чтобы красиво оформить xG и тактику."
         },
        { id: 74, date: "Понедельник, 29 июня", time: "20:00", stadium: "Хьюстон • НРГ Стадиум", team1Code: "1C", team1Text: "Победитель Группы C", team2Code: "2F", team2Text: "2-е место Группы F", prob1: 34, probX: 33, prob2: 33 },
        { id: 75, date: "Понедельник, 29 июня", time: "23:30", stadium: "Бостон • Джиллетт Ст.", team1Code: "1E", team1Text: "Победитель Группы E", team2Code: "3A+", team2Text: "3-е место ABCDF", prob1: 34, probX: 33, prob2: 33 },
        { id: 76, date: "Вторник, 30 июня", time: "04:00", stadium: "Монтеррей • ББВА", team1Code: "1F", team1Text: "Победитель Группы F", team2Code: "2C", team2Text: "2-е место Группы C", prob1: 34, probX: 33, prob2: 33 },
        { id: 77, date: "Вторник, 30 июня", time: "20:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "2E", team1Text: "2-е место Группы E", team2Code: "2I", team2Text: "2-е место Группы I", prob1: 34, probX: 33, prob2: 33 },
        { id: 78, date: "Среда, 1 июля", time: "00:00", stadium: "Нью-Джерси • МетЛайф", team1Code: "1I", team1Text: "Победитель Группы I", team2Code: "3C+", team2Text: "3-е место CDFGH", prob1: 34, probX: 33, prob2: 33 },
        { id: 79, date: "Среда, 1 июля", time: "04:00", stadium: "Мехико • Ацтека", team1Code: "1A", team1Text: "Победитель Группы A", team2Code: "3C+", team2Text: "3-е место CEFHI", prob1: 34, probX: 33, prob2: 33 },
        { id: 80, date: "Среда, 1 июля", time: "19:00", stadium: "Аталанта • Мерседес-Бенц", team1Code: "1L", team1Text: "Победитель Группы L", team2Code: "3E+", team2Text: "3-е место EHIJK", prob1: 34, probX: 33, prob2: 33 },
        { id: 81, date: "Среда, 1 июля", time: "23:00", stadium: "Сиэтл • Люмен Филд", team1Code: "1G", team1Text: "Победитель Группы G", team2Code: "3A+", team2Text: "3-е место AEHIJ", prob1: 34, probX: 33, prob2: 33 },
        { id: 82, date: "Четверг, 2 июля", time: "03:00", stadium: "Сан-Франциско • Левайс", team1Code: "1D", team1Text: "Победитель Группы D", team2Code: "3B+", team2Text: "3-е место BEFIJ", prob1: 34, probX: 33, prob2: 33 },
        { id: 83, date: "Четверг, 2 июля", time: "22:00", stadium: "Лос-Анджелес • Соу-Фай", team1Code: "1H", team1Text: "Победитель Группы H", team2Code: "2J", team2Text: "2-е место Группы J", prob1: 34, probX: 33, prob2: 33 },
        { id: 84, date: "Пятница, 3 июля", time: "02:00", stadium: "Торонто • БМО Филд", team1Code: "2K", team1Text: "2-е место Группы K", team2Code: "2L", team2Text: "2-е место Группы L", prob1: 34, probX: 33, prob2: 33 },
        { id: 85, date: "Пятница, 3 июля", time: "06:00", stadium: "Ванкувер • Би-Си Плэйс", team1Code: "1B", team1Text: "Победитель Группы B", team2Code: "3E+", team2Text: "3-е место EFGIJ", prob1: 34, probX: 33, prob2: 33 },
        { id: 86, date: "Пятница, 3 июля", time: "21:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "2D", team1Text: "2-е место Группы D", team2Code: "2G", team2Text: "2-е место Группы G", prob1: 34, probX: 33, prob2: 33 },
        { id: 87, date: "Суббота, 4 июля", time: "01:00", stadium: "Майами • Хард Рок", team1Code: "1J", team1Text: "Победитель Группы J", team2Code: "2H", team2Text: "2-е место Группы H", prob1: 34, probX: 33, prob2: 33 },
        { id: 88, date: "Суббота, 4 июля", time: "04:30", stadium: "Канзас-Сити • Эрроухед", team1Code: "1K", team1Text: "Победитель Группы K", team2Code: "3D+", team2Text: "3-е место DEIJL", prob1: 34, probX: 33, prob2: 33 }
    ],
    '1/8': [
        { id: 89, date: "Суббота, 4 июля", time: "20:00", stadium: "Хьюстон • НРГ Стадиум", team1Code: "💥", team1Text: "Победитель Матча 73", team2Code: "💥", team2Text: "Победитель Матча 75", prob1: 34, probX: 33, prob2: 33 },
        { id: 90, date: "Воскресенье, 5 июля", time: "00:00", stadium: "Филадельфия • Линкольн Ф.", team1Code: "💥", team1Text: "Победитель Матча 74", team2Code: "💥", team2Text: "Победитель Матча 77", prob1: 34, probX: 33, prob2: 33 },
        { id: 91, date: "Воскресенье, 5 июля", time: "23:00", stadium: "Нью-Джерси • МетЛайф", team1Code: "💥", team1Text: "Победитель Матча 76", team2Code: "💥", team2Text: "Победитель Матча 78", prob1: 34, probX: 33, prob2: 33 },
        { id: 92, date: "Понедельник, 6 июля", time: "03:00", stadium: "Мехико • Ацтека", team1Code: "💥", team1Text: "Победитель Матча 79", team2Code: "💥", team2Text: "Победитель Матча 80", prob1: 34, probX: 33, prob2: 33 },
        { id: 93, date: "Понедельник, 6 июля", time: "22:00", stadium: "Даллас • Эй-Ти&Ти", team1Code: "💥", team1Text: "Победитель Матча 83", team2Code: "💥", team2Text: "Победитель Матча 84", prob1: 34, probX: 33, prob2: 33 },
        { id: 94, date: "Вторник, 7 июля", time: "03:00", stadium: "Сиэтл • Люмен Филд", team1Code: "💥", team1Text: "Победитель Матча 81", team2Code: "💥", team2Text: "Победитель Матча 82", prob1: 34, probX: 33, prob2: 33 },
        { id: 95, date: "Вторник, 7 июля", time: "19:00", stadium: "Аталанта • Мерседес-Бенц", team1Code: "💥", team1Text: "Победитель Матча 86", team2Code: "💥", team2Text: "Победитель Матча 88", prob1: 34, probX: 33, prob2: 33 },
        { id: 96, date: "Вторник, 7 июля", time: "23:00", stadium: "Ванкувер • Би-Си Плэйс", team1Code: "💥", team1Text: "Победитель Матча 85", team2Code: "💥", team2Text: "Победитель Матча 87", prob1: 34, probX: 33, prob2: 33 }
    ],
    '1/4': [
        { id: 97, date: "Четверг, 9 июля", time: "23:00", stadium: "Бостон • Джиллетт Ст.", team1Code: "🏆", team1Text: "Победитель Матча 89", team2Code: "🏆", team2Text: "Победитель Матча 90", prob1: 34, probX: 33, prob2: 33 },
        { id: 98, date: "Пятница, 10 июля", time: "22:00", stadium: "Лос-Анджелес • Соу-Фай", team1Code: "🏆", team1Text: "Победитель Матча 93", team2Code: "🏆", team2Text: "Победитель Матча 94", prob1: 34, probX: 33, prob2: 33 },
        { id: 99, date: "Воскресенье, 12 июля", time: "00:00", stadium: "Майами • Хард Рок", team1Code: "🏆", team1Text: "Победитель Матча 91", team2Code: "🏆", team2Text: "Победитель Матча 92", prob1: 34, probX: 33, prob2: 33 },
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

// Функция открытия окна с индивидуальным анализом конкретного матча
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
    
    // Берем текст из базы или выводим дефолтный
    if (foundMatch && foundMatch.analysisText) {
        textElement.innerHTML = foundMatch.analysisText;
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

        // матч считается завершенным через 2 часа
        const finishTime = new Date(
            kickoff.getTime() + (2 * 60 * 60 * 1000)
        );

        if (finishTime <= now) return;

        const teams = row.querySelectorAll('.d-team');

        if (teams.length < 2) return;

        const team1Flag =
            teams[0].querySelector('.fi')?.className || '';

        const team2Flag =
            teams[1].querySelector('.fi')?.className || '';

        const team1Name =
            teams[0].textContent.trim();

        const team2Name =
            teams[1].textContent.trim();

        const matchKey = `${team1Name}_${team2Name}`;

        const groupElement =
            row.querySelector('.d-group');

        const venueElement =
            row.querySelector('.d-venue');

        upcomingMatches.push({
            matchKey,
            groupId:
            (groupElement?.classList[1] || '')
            .replace('gr-', ''),

            kickoff,

            date: kickoff.toLocaleDateString(
                'ru-RU',
                {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                }
            ),

            time:
                row.querySelector('.d-match-time')
                ?.textContent.trim() || '',

            team1Flag,
            team2Flag,
            team1Name,
            team2Name,

            groupText:
                (groupElement?.textContent.trim() || '')
        .replace('Гр.', 'Группа'),

            groupClass:
                groupElement?.classList[1] || '',

            venue:
                venueElement?.textContent.trim() || ''
        });
    });

    upcomingMatches.sort(
        (a, b) => a.kickoff - b.kickoff
    );

    const nearestThree =
        upcomingMatches.slice(0, 3);

    container.innerHTML =
        nearestThree.map(match => `

        <div class="match-card">

            <div class="match-header">
                <span class="match-date">${match.date}</span>
                <span class="match-time">${match.time}</span>
            </div>

            <div class="match-teams">

                <div class="team">
                    <span class="${match.team1Flag}"></span>
                    <span class="team-name">${match.team1Name}</span>
                </div>

                <div class="vs">VS</div>

                <div class="team">
                    <span class="${match.team2Flag}"></span>
                    <span class="team-name">${match.team2Name}</span>
                </div>

            </div>

            <div class="match-group-center">
                <span class="group-pill ${match.groupClass}">
                    ${match.groupText}
                </span>
            </div>

            <div class="match-footer">
                ${match.venue}

                
        </div>
            ${(() => {

    let team1 = match.team1Name;
    let team2 = match.team2Name;

    team1 = teamAliases[team1] || team1;
    team2 = teamAliases[team2] || team2;

    const key = `${team1}_${team2}`;

    const probability = firstTourProbabilities[key];

    if (!probability) {
        console.log('Не найден прогноз:', key);
        return '';
    }

    return `
        <div class="home-odds-container">

            <div class="home-odds-labels">
                <span class="home-p1">П1 ${probability.p1}%</span>
                <span class="home-x">X ${probability.draw}%</span>
                <span class="home-p2">П2 ${probability.p2}%</span>
            </div>

            <div class="home-odds-bar">
                <div class="home-segment home-p1-bg"
                     style="width:${probability.p1}%"></div>

                <div class="home-segment home-x-bg"
                     style="width:${probability.draw}%"></div>

                <div class="home-segment home-p2-bg"
                     style="width:${probability.p2}%"></div>
            </div>

            <div class="upcoming-analysis-box">
                    <button
                        class="upcoming-analysis-btn"
                         onclick="window.location.href=
                        'group.html?id=${match.groupId}&match=' +
                         encodeURIComponent('${match.matchKey}')">
                         Анализ матча
                    </button>
                </div>

        </div>
    `;

})()}

        </div>

    `).join('');
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
                "EFGHIJKL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "H", "1I": "G", "1K": "L", "1L": "K" },
    "DEFGHIJK": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "DEGHIJKL": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "G", "1K": "L", "1L": "K" },
    "DEFGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "DEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "DEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "DEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "DEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "CFGHIJKL": { "1A": "H", "1B": "G", "1D": "I", "1E": "C", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "CEGHIJKL": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "G", "1K": "L", "1L": "K" },
    "CEFGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "C", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "CDEGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "C", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "C", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "C", "1K": "L", "1L": "K" },
    "CDFGHIJK": { "1A": "C", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "C", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "C", "1K": "L", "1L": "I" },
    "CDFGHIJK": { "1A": "C", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "CDFGHIJK": { "1A": "C", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "CDFGHIJK": { "1A": "C", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "CDFGHIJK": { "1A": "C", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "CDEFGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "C", "1G": "J", "1I": "F", "1K": "D", "1L": "E" },
    "CEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "G", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "G" },
    "CDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "C", "1K": "G", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "C", "1K": "L", "1L": "G" },
    "CDFGHIJK": { "1A": "C", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "G", "1L": "K" },
    "CDFGHIJK": { "1A": "C", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "G" },
    "CDEFGHIK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "K" },
    "CDEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "G" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "C", "1L": "H" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "I" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "J" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "G" },
    "CDEFGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "C", "1L": "E" },
    "CDEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "G", "1K": "C", "1L": "F" },
    "CDEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "G" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "C", "1L": "E" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "E" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "E" },
    "CDEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "I" },
    "BFGHIJKL": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "J", "1I": "B", "1K": "L", "1L": "K" },
    "BEGHIJKL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BEFGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "J", "1I": "B", "1K": "L", "1L": "K" },
    "BEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "H", "1I": "B", "1K": "L", "1L": "I" },
    "BDEGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "B", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BDFGHIJK": { "1A": "B", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "B", "1K": "L", "1L": "I" },
    "BDFGHIJK": { "1A": "B", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "BDFGHIJK": { "1A": "B", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BDFGHIJK": { "1A": "B", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BDFGHIJK": { "1A": "B", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "BCEGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "C", "1G": "J", "1I": "B", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "C", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "B", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "C", "1G": "H", "1I": "B", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "C", "1G": "H", "1I": "B", "1K": "L", "1L": "I" },
    "BCFGHIJK": { "1A": "B", "1B": "G", "1D": "I", "1E": "C", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "B", "1B": "G", "1D": "J", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "B", "1B": "G", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "B", "1B": "G", "1D": "J", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "B", "1K": "C", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "B", "1K": "C", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "B", "1K": "C", "1L": "K" },
    "BCDFGHIJ": { "1A": "B", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "B", "1K": "C", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "B", "1K": "C", "1L": "I" },
    "BCDFGHIJ": { "1A": "B", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "C", "1L": "K" },
    "BCDFGHIJ": { "1A": "B", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "K" },
    "BCDFGHIJ": { "1A": "B", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "K" },
    "BCDFGHIJ": { "1A": "B", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "C", "1L": "I" },
    "BCDEFGHI": { "1A": "B", "1B": "F", "1D": "E", "1E": "H", "1G": "I", "1I": "G", "1K": "C", "1L": "D" },
    "BCDEFGHI": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "J", "1I": "B", "1K": "C", "1L": "E" },
    "BEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "H", "1I": "B", "1K": "G", "1L": "K" },
    "BEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "H", "1I": "B", "1K": "L", "1L": "G" },
    "BDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "B", "1K": "G", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "B", "1K": "L", "1L": "G" },
    "BDFGHIJK": { "1A": "B", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "G", "1L": "K" },
    "BDFGHIJK": { "1A": "B", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "G" },
    "BCEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "B", "1K": "G", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "B", "1K": "L", "1L": "G" },
    "BCFGHIJK": { "1A": "B", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "G", "1L": "K" },
    "BCFGHIJK": { "1A": "B", "1B": "J", "1D": "I", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "G" },
    "BCDEGHIK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "B", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "B", "1L": "G" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "J", "1I": "F", "1K": "B", "1L": "H" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "B", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "H", "1I": "F", "1K": "B", "1L": "J" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "H", "1I": "F", "1K": "B", "1L": "G" },

    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "I", "1I": "F", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "L", "1L": "I" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "I", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "L", "1L": "E" },
    "BCEGHIJK": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "E", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "H", "1I": "F", "1K": "I", "1L": "K" },
    "BCEGHIJK": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "E", "1L": "I" },
    "BCDEGHIK": { "1A": "H", "1B": "J", "1D": "B", "1E": "C", "1G": "I", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "I", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "I", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "I", "1L": "K" },
    "BCDFGHIK": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "I", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIK": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIK": { "1A": "C", "1B": "I", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "I", "1L": "K" },
    "BCDFGHIK": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIK": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "I", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "J", "1I": "F", "1K": "I", "1L": "K" },
    "BCDEGHIK": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "J" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "D", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "D", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "B", "1E": "C", "1G": "I", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIK": { "1A": "E", "1B": "J", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "L", "1L": "K" },
    "BCDFGHIK": { "1A": "E", "1B": "I", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "I", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "I", "1L": "K" },
    "BCDEGHIK": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "L", "1L": "E" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "E", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "B", "1E": "C", "1G": "H", "1I": "D", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "D", "1K": "E", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "E", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIK": { "1A": "C", "1B": "E", "1D": "B", "1E": "D", "1G": "I", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "E", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "E", "1I": "F", "1K": "I", "1L": "K" },
    "BCDEGHIK": { "1A": "C", "1B": "E", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "E" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "E", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "E", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "E", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "J", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "E", "1L": "I" },
    "BCDFGHIK": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "E", "1I": "F", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "J", "1I": "F", "1K": "L", "1L": "E" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "J", "1I": "F", "1K": "E", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "E", "1I": "F", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "E", "1I": "F", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "J", "1I": "F", "1K": "E", "1L": "I" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "L", "1L": "E" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "E", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "G", "1D": "B", "1E": "C", "1G": "J", "1I": "F", "1K": "D", "1L": "E" },
    "BCDEGHIJ": { "1A": "C", "1B": "G", "1D": "B", "1E": "D", "1G": "H", "1I": "F", "1K": "E", "1L": "I" },
    "AFGHIJKL": { "1A": "H", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "AEGHIJKL": { "1A": "E", "1B": "J", "1D": "I", "1E": "A", "1G": "H", "1I": "G", "1K": "L", "1L": "K" },
    "AEFGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "H", "1K": "L", "1L": "K" },
    "AEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "AEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "H", "1K": "L", "1L": "K" },
    "AEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "H", "1K": "L", "1L": "K" },
    "AEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "H", "1K": "L", "1L": "I" },
    "AEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "H", "1K": "I", "1L": "K" },
    "ADEGHIJL": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "H", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "H", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "H", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "H", "1K": "L", "1L": "I" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "H", "1K": "I", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ADEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ADEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "E" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "E", "1L": "K" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },

    "ADEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "E", "1L": "I" },
    "CEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "CEFGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "CEFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "CDEGHIJL": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "CDEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "CDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "C" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "C", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "CDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "C", "1L": "I" },
    "BCEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BCEGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "I" },
    "BCEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "I", "1L": "K" },
    "BDEGHIJL": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "I" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "I", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BDEGHIJK": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BDEGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "B" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "B", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BDEGHIJK": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "B", "1L": "I" },
    "BCFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BCFGHIJL": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "BCFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "BCFGHIJK": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "BCDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "BCDFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BCDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BCDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },

    "BCDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "C" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "C", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "BCDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "C", "1L": "I" },
    "BCDEFGHI": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "E" },
    "BCDEFGHI": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "E" },
    "ACEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "ACDEGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "E" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "E", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "E", "1L": "I" },
    "ABEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABEGHIJK": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "I" },
    "ABEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "I", "1L": "K" },
    "ABDEGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "I" },
    "ABDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "I", "1L": "K" },
    "ABDFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "B" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "B", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "B", "1L": "I" },
    "ACEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "C", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "ACEFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "ACDEGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "K" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "L", "1L": "I" },
    "ACDEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "C", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },

    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "C" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "C", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ACDFGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "C", "1L": "I" },
    "ABCEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "F", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "L", "1L": "I" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "F", "1G": "A", "1I": "B", "1K": "I", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "I", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "G", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "L", "1L": "I" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "B", "1K": "I", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "J", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "E", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABCEGHIJ": { "1A": "H", "1B": "J", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "I", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABCEGHIJ": { "1A": "E", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "B" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "B", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "L", "1L": "I" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "E", "1E": "D", "1G": "A", "1I": "F", "1K": "I", "1L": "K" },
    "ABCEGHIJ": { "1A": "H", "1B": "G", "1D": "J", "1E": "D", "1G": "A", "1I": "F", "1K": "B", "1L": "I" },
    "ABCDEGHI": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "E" },
    "ABCDEGHI": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "G", "1B": "H", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "G", "1B": "H", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "H", "1B": "G", "1D": "E", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "H", "1B": "G", "1D": "E", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "G", "1B": "H", "1D": "E", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "G", "1B": "H", "1D": "E", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "H", "1B": "F", "1D": "I", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "H", "1B": "F", "1D": "I", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "F", "1B": "H", "1D": "I", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "F", "1B": "H", "1D": "I", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "H", "1B": "F", "1D": "G", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "H", "1B": "F", "1D": "G", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "F", "1B": "H", "1D": "G", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "F", "1B": "H", "1D": "G", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "G", "1B": "F", "1D": "I", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "G", "1B": "F", "1D": "I", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "F", "1B": "G", "1D": "I", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "F", "1B": "G", "1D": "I", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "G", "1B": "F", "1D": "H", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "G", "1B": "F", "1D": "H", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "F", "1B": "G", "1D": "H", "1E": "E", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "F", "1B": "G", "1D": "H", "1E": "E", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "H", "1B": "E", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "H", "1B": "E", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "E", "1B": "H", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "E", "1B": "H", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "G" },
    "ABCDEFGH": { "1A": "H", "1B": "E", "1D": "G", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "H", "1B": "E", "1D": "G", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "E", "1B": "H", "1D": "G", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "E", "1B": "H", "1D": "G", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "G", "1B": "E", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "G", "1B": "E", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "E", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "H" },
    "ABCDEFGH": { "1A": "G", "1B": "E", "1D": "H", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "G", "1B": "E", "1D": "H", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "E", "1B": "G", "1D": "H", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "E", "1B": "G", "1D": "H", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "I" },
    "ABCDEFGH": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "H", "1B": "G", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "G", "1B": "H", "1D": "I", "1E": "F", "1G": "A", "1I": "C", "1K": "D", "1L": "E" },
    "ABCDEFGH": { "1A": "G", "1B": "H", "1D": "I", "1E": "F", "1G": "A", "1I": "B", "1K": "D", "1L": "E" }

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
        { combo: "ABCDF", key: "3_МЕСТО_ДЛЯ_1B" }, // 1-е встреченное 3-е место
        { combo: "CDFGH", key: "3_МЕСТО_ДЛЯ_1C" }, // 2-е встреченное 3-е место
        { combo: "CEFHI", key: "3_МЕСТО_ДЛЯ_1E" }, // 3-е
        { combo: "ADEJK", key: "3_МЕСТО_ДЛЯ_1F" }, // 4-е
        { combo: "BGHIK", key: "3_МЕСТО_ДЛЯ_1G" }, // 5-е
        { combo: "AFJKL", key: "3_МЕСТО_ДЛЯ_1H" }, // 6-е
        { combo: "BCEIL", key: "3_МЕСТО_ДЛЯ_1A" }, // 7-е
        { combo: "DGHJL", key: "3_МЕСТО_ДЛЯ_1D" }  // 8-е
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





