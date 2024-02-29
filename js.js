var questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "J.K. Rowling", correct: false },
            { text: "Stephen King", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "W", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Euro", correct: false },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false }
        ]
    }
];







const start=document.querySelector('.start-quiz');

const ques_cont=document.querySelector('.ques-cont');



var ques_index;
ques_index=0;

var ansNo=0;


let qe=document.querySelector('#ques');
let next=document.querySelector('#next');
let option_cont=document.querySelector('.options-cont')



function start_quiz(){

    start.style.display='none';
    ques_cont.style.display='block';
}
    
function render_ques(){

ansNo=0;
if(ques_index>9){
    ques_index=0;
}
    option_cont.innerHTML='';
    
    let q=questions[ques_index];
    ques_index++;

    let ans=q.answers;

    ans.forEach(element => {
        
        let btn=document.createElement('button');
        btn.classList.add('options')
        ansNo++;
        btn.textContent=`${ansNo} : ${element.text}`;
        option_cont.appendChild(btn);
        btn.dataset.correct=element.correct;
        console.log(element.correct);

        btn.addEventListener('click', () => {
            checkans(btn);
            disableopt();
        });

    });;
    qe.textContent=` question ${ques_index}: ${q.question}`;
}
function disableopt(){
    var optionButtons = document.querySelectorAll('.options');
    optionButtons.forEach(button => {
        button.disabled = true;
        if(
            button.dataset.correct==='true'){
                button.classList.add('green');
        
            }
    });


}

function checkans(btn){

    
    if(btn.dataset.correct === 'true' ){
        btn.classList.add('green');
        
    }
    else{

        btn.classList.add('red');
        
    }


}


render_ques();

next.addEventListener('click',()=>{
    render_ques();

})