import { data } from './data.js';
import { initAnimations } from './animations.js';
import { initQuiz } from './quiz.js';
import { initForm } from './form_handler.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    populateContent();
    initAnimations();
    initQuiz(data.quiz);
    initForm();
    initFooter();
    initSound();
});

function populateContent() {
    document.getElementById('welcome-text').innerText = data.home.welcomeText;
    
    const salasContainer = document.getElementById('salas-container');
    data.sections.forEach(section => {
        const card = document.createElement('div');
        card.className = 'sala-card bg-[#3A3B3C] bg-opacity-20 p-6 rounded-lg border border-transparent hover:border-[#D4AF37]';
        card.innerHTML = `
            <div class="flex items-center mb-4">
                <i data-lucide="${section.icon}" class="w-10 h-10 mr-4" style="color:${section.color}"></i>
                <h3 class="font-serif-title text-2xl" style="color:${section.color}">${section.title}</h3>
            </div>
            <p class="text-gray-300">${section.description}</p>
        `;
        salasContainer.appendChild(card);
    });

    const ebooksContainer = document.getElementById('ebooks-container');
    data.ebooks.forEach(ebook => {
        const card = document.createElement('div');
        card.className = 'ebook-card rounded-lg overflow-hidden flex flex-col';
        card.innerHTML = `
            <div class="ebook-cover">
                <h4 class="text-xl">${ebook.cover.text}</h4>
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <h3 class="font-serif-title text-xl text-[#D4AF37] mb-2">${ebook.title}</h3>
                <p class="text-sm text-gray-400 mb-4">Autor: ${ebook.author}</p>
                <p class="text-gray-300 flex-grow">${ebook.description}</p>
            </div>
        `;
        ebooksContainer.appendChild(card);
    });
    
    document.getElementById('mission-statement').innerText = data.footer.mission;
    lucide.createIcons();
}

function initFooter() {
    const quoteTextEl = document.getElementById('quote-text');
    const quoteAuthorEl = document.getElementById('quote-author');
    let currentQuoteIndex = 0;

    function updateQuote() {
        const quote = data.footer.quotes[currentQuoteIndex];
        quoteTextEl.innerText = `"${quote.text}"`;
        quoteAuthorEl.innerText = `– ${quote.author}`;
        currentQuoteIndex = (currentQuoteIndex + 1) % data.footer.quotes.length;
    }

    updateQuote();
    setInterval(updateQuote, 8000);
}

function initSound() {
    const soundToggle = document.getElementById('sound-toggle');
    const icon = soundToggle.querySelector('i');
    let isMuted = true;
    

    const ambientSound = new Audio(); // Create an audio element, but don't set src yet.



    soundToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        if (isMuted) {
            ambientSound.pause();
            icon.setAttribute('data-lucide', 'volume-x');
        } else {

            icon.setAttribute('data-lucide', 'volume-2');

        }
        lucide.createIcons();
    });
}
