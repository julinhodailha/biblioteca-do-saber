export function initForm() {
    const form = document.getElementById('ebook-form');
    const emailInput = document.getElementById('email-input');
    const feedbackEl = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;

        if (!isValidEmail(email)) {
            feedbackEl.innerText = 'Por favor, insira um e-mail válido.';
            feedbackEl.style.color = '#e57373';
            return;
        }
        

        feedbackEl.innerText = 'Enviando...';
        feedbackEl.style.color = '#D4AF37';

        setTimeout(() => {
            feedbackEl.innerText = 'Inscrição confirmada. Bem-vindo(a) ao círculo dos sábios!';
            feedbackEl.style.color = '#81c784';
            form.reset();
        }, 1500);

        setTimeout(() => {
            feedbackEl.innerText = '';
        }, 6500);
    });
}

function isValidEmail(email) {
    const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$');
    return emailRegex.test(email);
}
