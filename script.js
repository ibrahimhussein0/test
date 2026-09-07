// متابعة حركة الماوس أو اللمس لإعطاء إضاءة خلفية ممتازة للفيديو
const glow = document.getElementById('glow');
window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});
window.addEventListener('touchmove', (e) => {
    glow.style.left = e.touches[0].clientX + 'px';
    glow.style.top = e.touches[0].clientY + 'px';
});

const messages = [
    "متزعليش طيب مني يا روحي! 💔",
    "حقك عليا، خلاص بقى متبقيش قاسية! 🥺",
    "والله ما أقصد أزعلك دقيقة واحدة! 🙏",
    "طب بلاش زعل، العتاب غالي بس رضاكي أغلى! 🌸",
    "قلبك أبيض وعارفه، سامحيني بقى! 🤍",
    "خلاص حقك عليا, ابتسامة بقى عشان نخلص؟ 😊",
    "مقدرش على زعل القمر ده أصلاً! ✨",
    "الزرار بيبعد عشان عارف إنك مش زعلانة! 😂❤️"
];

let msgIndex = 0;
let noScale = 1;

function moveYesButton(e) {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const msgDiv = document.getElementById('msg');
    const card = document.getElementById('card');

    // انفجار قلوب عند موقع الزرار قبل الهروب
    createBurst(e.clientX || e.pageX, e.clientY || e.pageY);

    // اهتزاز الكارت
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 350);

    // تحديث النصوص بس (شيلنا سطر تحديث الإيموجي من هنا)
    msgDiv.innerText = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;

    // تكبير زرار "لا" تدريجياً ليشجع على الضغط عليه!
    noScale += 0.12;
    if (noScale <= 2.2) {
        btnNo.style.transform = `scale(${noScale})`;
    }

    // حركة هروب عشوائية ودوران
    const maxX = 110;
    const maxY = 90;

    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;
    const randomRot = (Math.random() - 0.5) * 80;

    btnYes.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg) scale(0.9)`;
}

// باقي الدوال زي (createBurst) و (openSuccessPage) هتسيبها زي ما هي تحت الكود ده

// تأثير انفجار القلوب المصغرة
function createBurst(x, y) {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'burst-heart';
        heart.innerText = ['💔', '✨', '🌸', '💖'][Math.floor(Math.random() * 4)];
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        const tx = (Math.random() - 0.5) * 160 + 'px';
        const ty = (Math.random() - 0.5) * 160 + 'px';
        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 800);
    }
}

function openSuccessPage() {
    const card = document.getElementById('card');
    
    // لو حابب تشغل الاحتفالات شيل علامتين الـ //
    // launchCelebration();

card.innerHTML = `
        <div class="name-highlight">MY LOVE</div>
        <div class="success-box">
            <h2 class="romantic-title">كنت عارف إنك مش هتزعلي مني ❤️</h2>
            <h3 class="romantic-subtitle">وكمان مرة أنا آسف لو زعلتك مني</h3>
            
            <div class="creative-note">
                <p>عملت الموقع ده عشان أصالحك بطريقة كريتيف ✨</p>
            </div>
            
            <!-- حاوية كل كروت الذكريات -->
            <div class="memories-container">
                
                <!-- الكارت الأول -->
                <div class="memory-card">
                    <div class="memory-header">
                        <span class="memory-title">أول مرة نخرج فيها 🌸</span>
                        <span class="memory-date">15 / 8 / 2024</span>
                    </div>
                    <div class="memories-gallery">
                        <img src="1.jpg" alt="صورة">
                        <img src="2.jpg" alt="صورة">
                        <img src="3.jpg" alt="صورة">
                    </div>
                </div>

                <!-- الكارت التاني -->
                <div class="memory-card">
                    <div class="memory-header">
                        <span class="memory-title">يوم خطوبتنا 💍</span>
                        <span class="memory-date">5 / 6 / 2025</span>
                    </div>
                    <div class="memories-gallery">
                        <img src="7.jpg" alt="صورة">
                        <img src="8.jpg" alt="صورة">
                        <img src="9.jpg" alt="صورة">
                    </div>
                </div>
                
                <!-- الكارت التالت -->
                <div class="memory-card">
                    <div class="memory-header">
                        <span class="memory-title">عيد ميلادك 🎂</span>
                        <span class="memory-date">10 / 8 / 2025</span>
                    </div>
                    <div class="memories-gallery">
                        <img src="4.jpg" alt="صورة">
                        <img src="5.jpg" alt="صورة">
                        <img src="6.jpg" alt="صورة">
                    </div>
                </div>

                <!-- الكارت الرابع -->
                <div class="memory-card">
                    <div class="memory-header">
                        <span class="memory-title"> يوم مميز بالنسبالنا ❤️</span>
                        <span class="memory-date">16 / 10 / 2025</span>
                    </div>
                    <div class="memories-gallery">
                        <img src="10.jpg" alt="صورة">
                        <img src="11.jpg" alt="صورة">
                        <img src="12.jpg" alt="صورة">
                    </div>
                </div>

                <!-- الكارت الختامي -->
                <div class="final-message-card">
                    <p class="final-message-text">في النهاية حابب أقولك إنك أحلى حاجة حصلتلي في حياتي، ومش عايزك تزعلي مني خالص لأني هفضل أدور على طريقة أصالحك بيها ❤️</p>
                </div>
            </div>
        </div>
    `;
}

function launchCelebration() {
    var duration = 3.5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 35, spread: 360, ticks: 80, zIndex: 1000 };

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
        return clearInterval(interval);
        }

        var particleCount = 60 * (timeLeft / duration);
        
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: 0.2, y: 0.3 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: 0.8, y: 0.3 } }));
    }, 200);
}
