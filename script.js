/*let name = 'Vika',
    age = 38,
    email = 'email@ukr.net';

document.write(`User's name is ${name}. User's age is ${age}. User's email is ${ email}.`);


let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}
const square = new Rectangle(10);
console.log(square.calcArea());*/
class options{
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){


            let div = document.createElement('div');
            document.body.appendChild(div);
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.background = this.bg;
            div.style.fontSize = this.fontSize;
            div.style.textAlign = this.textAlign;

            function createNewBlock(text){
                div.textContent = text;
        }
        createNewBlock(prompt('Enter the massage'));





    }
}
const newDiv = new options('200px', '200px', 'red', '50px', 'center');
console.log(newDiv);
newDiv.createDiv();
const newDivT = new options('500px', '500px', 'red', '50px', 'center');
console.log(newDivT);
newDivT.createDiv();


