export const data = {
    home: {
        title: "A Nova Luz do Conhecimento",
        welcomeText: "Bem-vindo, viajante do saber. Adentre os corredores desta Biblioteca Virtual, um santuário erguido não com pedras, mas com a perene ambição humana de compreender o universo e a si mesmo. Aqui, como na antiga Alexandria, o conhecimento não é um destino, mas uma jornada infindável. Convidamo-lo a redescobrir a grandiosidade do pensamento, a debater as grandes questões e a encontrar, nas palavras dos que vieram antes, o eco das suas próprias indagações."
    },
    sections: [
        {
            title: "Filosofia",
            description: "Adentre o domínio onde cada pergunta é mais valiosa que uma resposta. A Filosofia é a arte de desconstruir o óbvio para revelar o extraordinário. Navegue pelos pensamentos que moldaram civilizações e desafie os alicerces da sua própria realidade.",
            icon: "brain-circuit",
            color: "#6c9cff" // Royal Blue Variant
        },
        {
            title: "Ciência",
            description: "Aqui, deciframos a linguagem com que o cosmos foi escrito. A Ciência é a busca incansável pela verdade através da observação e da razão. Explore as leis que regem desde a partícula infinitesimal até a dança das galáxias.",
            icon: "atom",
            color: "#fdd835" // Gold Variant
        },
        {
            title: "Artes",
            description: "Mergulhe no santuário da expressão humana. As Artes são a tradução do indizível, a materialização da beleza, da angústia e do sublime. Testemunhe como a criatividade transcende o tempo, capturando a essência da nossa condição.",
            icon: "palette",
            color: "#e57373" // Deep Red Variant
        },
        {
            title: "História",
            description: "Caminhe pelos corredores do tempo e ouça os ecos do passado. A História é o diálogo contínuo entre o presente e o que fomos. Compreenda as forças que nos trouxeram até aqui e descubra que o futuro está semeado nas lições de ontem.",
            icon: "scroll-text",
            color: "#c8aE77" // Parchment Variant
        }
    ],
    quiz: {
        intro: "Um verdadeiro sábio não é aquele que detém todas as respostas, mas aquele que ousa fazer as perguntas mais difíceis. Este não é um teste de conhecimento, mas um espelho para sua alma de leitor. Suas escolhas revelarão os contornos do seu pensamento. Responda com instinto, não apenas com lógica. O que você realmente acredita?",
        questions: [
            {
                question: "Se um livro, contendo uma sabedoria transformadora, for selado em uma tumba e jamais lido por ninguém, seu conhecimento ainda existe?",
                options: [
                    { text: "Sim. O conhecimento é uma verdade platónica, existindo independentemente da percepção humana.", value: "a" },
                    { text: "Não. O conhecimento só se realiza na mente do leitor; sem a interpretação, são apenas símbolos inertes.", value: "b" },
                    { text: "Parcialmente. Existe como dados, mas seu valor só é ativado quando conectado a uma consciência.", value: "c" }
                ]
            },
            {
                question: "Ao interpretar um texto antigo, qual deve ser a principal busca do leitor?",
                options: [
                    { text: "A intenção original e imutável do autor, buscando uma fidelidade arqueológica ao seu pensamento.", value: "a" },
                    { text: "O significado que ressoa com o presente, pois cada geração tem o direito de dialogar com a obra.", value: "b" },
                    { text: "A estrutura subjacente da linguagem, pois o significado não está nem no autor nem no leitor.", value: "c" }
                ]
            },
            {
                question: "A era digital, com seu acesso instantâneo à informação, representa:",
                options: [
                    { text: "O apogeu da Biblioteca de Alexandria; um renascimento do conhecimento acessível a todos.", value: "a" },
                    { text: "Uma ameaça perigosa; a abundância de informação desvaloriza o saber profundo.", value: "b" },
                    { text: "Uma evolução natural; uma ferramenta neutra cujo valor depende do discernimento de quem a utiliza.", value: "c" }
                ]
            },
            {
                question: "Qual a finalidade última da leitura de ficção?",
                options: [
                    { text: "A empatia. Viver outras vidas para expandir nossa compreensão da condição humana.", value: "a" },
                    { text: "A verdade. Usar a lente da metáfora para enxergar realidades que a não-ficção não captura.", value: "b" },
                    { text: "A arquitetura. Apreciar a beleza da construção da linguagem e da estrutura narrativa como arte.", value: "c" }
                ]
            },
            {
                question: "O que distingue a Sabedoria do mero Conhecimento?",
                options: [
                    { text: "A aplicação. A sabedoria é o conhecimento temperado pela experiência e aplicado com ética.", value: "a" },
                    { text: "A integração. A sabedoria é entender a conexão entre as coisas, vendo o sistema.", value: "b" },
                    { text: "A humildade. A sabedoria começa com o reconhecimento da própria ignorância.", value: "c" }
                ]
            }
        ],
        results: {
            a: "um pragmatismo ancorado na experiência",
            b: "uma reverência pela verdade atemporal",
            c: "uma fascinação pela arquitetura das ideias",
            default: "um equilíbrio notável entre tradição e inovação"
        },
        finalReflection: "Suas escolhas traçam o perfil de uma mente que navega pelas correntezas do saber com [result]. Você parece entender que o conhecimento não é um objeto a ser possuído, mas um fogo a ser mantido vivo. Ora valorizando a intenção original, ora abraçando a nova interpretação, sua jornada intelectual revela um profundo respeito tanto pela herança do passado quanto pelo poder transformador do presente. Continue a questionar, pois é no espaço entre a pergunta e a resposta que a verdadeira sabedoria floresce."
    },
    ebooks: [
        {
            title: "O Espelho de Toth",
            author: "Dr. Alistair Finch",
            description: "Para além da leitura literal jaz um oceano de significados. Dr. Finch oferece as ferramentas para navegar nestas águas profundas, ensinando a identificar as múltiplas camadas que se escondem sob a superfície de qualquer grande obra.",
            cover: { text: "Reflexos e Refrações no Texto Sagrado" }
        },
        {
            title: "Cartografias da Alma",
            author: "Isabella V. Rossi",
            description: "Rossi defende uma tese audaciosa: não somos nós que lemos os livros, são os livros que nos leem. Esta obra explora como a jornada através de uma narrativa pode reconfigurar nossa percepção, memória e identidade.",
            cover: { text: "A Leitura como Arquitetura do Eu" }
        },
        {
            title: "O Silêncio entre as Linhas",
            author: "Julien Moreau",
            description: "O que um texto escolhe não dizer é, muitas vezes, mais revelador do que suas palavras. Moreau nos guia por uma fascinante exploração das omissões, pausas e silêncios na literatura e na filosofia.",
            cover: { text: "Hermenêutica do Não-Dito" }
        }
    ],
    footer: {
        mission: "Preservar a chama do saber. Provocar a coragem do pensamento. Inspirar a busca perpétua pela sabedoria.",
        quotes: [
            { text: "A verdadeira sabedoria está em reconhecer a própria ignorância.", author: "Sócrates" },
            { text: "Sempre imaginei que o paraíso seria uma espécie de biblioteca.", author: "Jorge Luis Borges" },
            { text: "O livro é uma criatura frágil, sofre o desgaste do tempo, teme os roedores e as mãos inábeis.", author: "Umberto Eco" },
            { text: "Não aprendemos para a escola, mas para a vida.", author: "Sêneca" },
            { text: "Saber muito não me ensina a ter bom senso. Os livros não tornam os homens mais sábios.", author: "Heráclito" }
        ]
    }
};
