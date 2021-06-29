const correctAns = ["B", "A", "A", "B", "A", "B", "A","A","B","A"];
const form = document.querySelector(".quizz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    // console.log(userAnswers);


    // check answers
    userAnswers.forEach( (ans,index) => {
        if(correctAns[index] === userAnswers[index]){
            score += 10;
        }      
    
    });

    // console.log(score);

    // scroling to the top
    scroll(0,0);

    // show result***
    result.classList.remove('d-none');
    // we are checking span under result class div and updating textcontent
    // result.querySelector('span').textContent = `${score}%`;



    let output = 0;

    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output ++;
        }        
    }, 40 );
});







