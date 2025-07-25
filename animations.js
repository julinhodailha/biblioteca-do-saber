import * as framerMotion from 'https://esm.run/framer-motion';

export function initAnimations() {
    const { animate, scroll } = framerMotion;


    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        scroll(
            (progress) => {
                const y = progress * 200; // Adjust multiplier for effect strength
                animate(heroBg, { y: y }, { duration: 0 });
            }
        );
    }
    

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const elementsToAnimate = section.querySelectorAll('.sala-card, .parchment-bg, .ebook-card, .font-serif-title, .ornamental-divider');
        
        scroll(
            ({ y }) => {
                if (y.current > section.offsetTop - window.innerHeight + 200) {
                     elementsToAnimate.forEach((el, index) => {
                        animate(el, 
                            { opacity: [0, 1], y: [30, 0] }, 
                            { duration: 0.8, delay: index * 0.1, ease: 'easeOut' }
                        );
                    });
                }
            }
        );
    });


    document.querySelectorAll('.sala-card, .quiz-option, .ebook-card, #start-quiz-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            animate(el, { scale: 1.03 }, { duration: 0.2 });
        });
        el.addEventListener('mouseleave', () => {
            animate(el, { scale: 1 }, { duration: 0.2 });
        });
    });
}
