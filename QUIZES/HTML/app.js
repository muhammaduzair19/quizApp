const questions = [
    {
        Question: "HTML Stands for?",
        Answer: [
            {
                text: "Hyper Text Multi Language", nature: false
            },
            {
                text: "Hyper Term Markup Language", nature: false
            },
            {
                text: "Hyper Text Markup Language", nature: true
            },
            {
                text: "Heights Tech Multi Lingual", nature: false
            }
        ]
    },
    {
        Question: "HTML Use for",
        Answer: [
            {
                text: "For make structure of website", nature: false
            },
            {
                text: "To make your website funtional", nature: false
            },
            {
                text: "To design your website", nature: true
            },
            {
                text: "Heights Tech Multi Lingual", nature: false
            }
        ]
    },
    {
        Question: "HTML elements are",
        Answer: [
            {
                text: "Variables", nature: false
            },
            {
                text: "Function", nature: false
            },
            {
                text: "Promises", nature: true
            },
            {
                text: "Tags", nature: false
            }
        ]
    },
    {
        Question: "Which is the largest heading in HTML",
        Answer: [
            {
                text: "'h6 Tag'", nature: false
            },
            {
                text: "h1 Tag", nature: false
            },
            {
                text: "heading Tag", nature: true
            },
            {
                text: "H1 Tag", nature: false
            }
        ]
    },
]



const start = document.querySelector('.start');
const quizes = document.querySelector('.quizes');
const questionElement = document.querySelector('.question');
const answerElement = document.querySelector('.answers');
const nextBtn = document.querySelector('.next')
const quizScore = document.querySelector('.scoreCard')


let currentQuestionIndex = 0;
let score = 0;


function beginQuiz() {
    start.classList.toggle('hidden')
    quizes.classList.toggle('hidden')
    currentQuestionIndex = 0;
    score = 0;
    answerElement.innerHTML = "";
    startQuiz();
}

function startQuiz() {
    if (currentQuestionIndex !== questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = `Q ${questionNo}. ${currentQuestion.Question}`;
        console.log(currentQuestion.Answer.text)
        if(currentQuestionIndex === (questions.length -1)){
            nextBtn.innerHTML = 'Finish';
            nextBtn.addEventListener('click', () =>{
                showScore();
            })
        }
        currentQuestion.Answer.forEach(ans => {
            const label = document.createElement('label')
            label.innerHTML = `<input type="radio" "name="answer">
        <p id="01">${ans.text}</p>`
            answerElement.appendChild(label)
        })
    }

}

nextBtn.addEventListener('click', () => {
    console.log("working")
    if ((currentQuestionIndex < questions.length) && (currentQuestionIndex !== questions.length)) {
        currentQuestionIndex++;
        answerElement.innerHTML = "";
        startQuiz();
    }
})

function showScore() {
    answerElement.innerHTML = "";
    questionElement.innerHTML = "your score is"
    nextBtn.innerHTML = 'Play Again'
    const back = document.createElement('div')
    back.innerHTML = `<button class="back" >Main Page</button>`
    back.classList.add('btn-navigation')
    back.classList.add('margin')
    quizes.appendChild(back)
    const mainPage = document.querySelector('.back')
    mainPage.addEventListener('click', () =>{
        window.location.href = '../../index.html'
    })
    nextBtn.addEventListener('click', () => beginQuiz() )

}

// function nextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex > questions.length) {
//         startQuiz();
//     }
//     else {
//         beginQuiz();
//     }
// }

