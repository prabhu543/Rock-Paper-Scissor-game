// important variables are 👇 declared and initialization is also done
const options=document.querySelectorAll('.choice');
const message=document.querySelector('#msg');
const userPoints=document.querySelector('#userPoints');
const compPoints=document.querySelector('#compPoints');
let user=0;
let comp=0;
// here we get user choice 👇
options.forEach((choices) => {
    choices.addEventListener('click', () => {
        const userOption= choices.getAttribute("id");
        game(userOption);
    });
});
// here we get computer choice 👇
let compChoice = () =>{
let choiceArray=["rock","paper","scissors"];
let compOption=Math.floor(Math.random() * 3);
return choiceArray[compOption];
};
//
let game = (userOption) =>{
    const compOption=compChoice();
    console.log('user',userOption);
    console.log('computer',compOption);
    if(userOption===compOption)
        draw();
    else 
    if(userOption==="paper"){
        let result= compOption==="scissors" ? compWin():userWin();
    }
    else
    if(userOption==="scissors"){
        let result= compOption==="paper" ? userWin():compWin();
    }
    else  //else means user chose rock here
    {
        let result= compOption==="paper" ? compWin():userWin();
    }
};

let draw = () => {
    message.innerText='Its draw. play once again';
    message.style.backgroundColor='orange';
};

let userWin = () => {
    message.innerText='You won';
    message.style.backgroundColor='green';
    user++;
    userPoints.innerText=user;
};

let compWin = () => {
    message.innerText='You lost';
    message.style.backgroundColor='red';
    comp++;
    compPoints.innerText=comp;
};