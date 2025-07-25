let quizData;
let currentQuestionIndex = 0;
let userAnswers = [];

const quizIntroEl = document.getElementById('quiz-intro');
const quizMainEl = document.getElementById('quiz-main');
const quizResultEl = document.getElementById('quiz-result');
const startBtn = document.getElementById('start-quiz-btn');
const questionCounterEl = document.getElementById('question-counter');
const questionEl = document.getElementById('quiz-question');
const optionsEl = document.getElementById('quiz-options');
const resultTextEl = document.getElementById('quiz-result-text');

export function initQuiz(data) {
    quizData = data;
    document.getElementById('quiz-intro-text').innerText = quizData.intro;
    startBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
    quizIntroEl.classList.add('hidden');
    quizMainEl.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion();
}

function renderQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    questionCounterEl.innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizData.questions.length}`;
    questionEl.innerText = question.question;
    optionsEl.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.innerHTML = `<span class="font-bold mr-2">${option.value.toUpperCase()})</span> ${option.text}`;
        button.dataset.value = option.value;
        button.addEventListener('click', handleAnswer);
        optionsEl.appendChild(button);
    });
}

function handleAnswer(event) {
    const selectedValue = event.currentTarget.dataset.value;
    userAnswers.push(selectedValue);
    
    document.querySelectorAll('.quiz-option').forEach(btn => btn.disabled = true);
    event.currentTarget.classList.add('selected');

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizMainEl.classList.add('hidden');
    quizResultEl.classList.remove('hidden');

    const counts = userAnswers.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});

    let resultKey = 'default';
    if (Object.keys(counts).length > 0) {
        resultKey = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }
    
    const resultDescriptor = quizData.results[resultKey] || quizData.results.default;
    const finalMessage = quizData.finalReflection.replace('[result]', resultDescriptor);

    resultTextEl.innerText = finalMessage;
}
