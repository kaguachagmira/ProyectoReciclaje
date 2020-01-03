// Variables de cada imagen basura
var botellaPlastico = document.querySelector(".botellaPlastico");
var vasoPlastico = document.querySelector(".vasoPlastico");
var desaparecer = document.querySelector(".invisible");

var botellaVidrio = document.querySelector(".botellaVidrio");

//Variables de cada imagen basurero
var basureroR = document.querySelector(".plasticRed");
var basureroG = document.querySelector(".plasticGreen");
var basureroY = document.querySelector(".plasticYellow");
var basureroB = document.querySelector(".plasticBlue");
//Identificador para cada basurero
basureroR.number=1;
basureroG.number=2;
basureroY.number=3;
basureroB.number=4;



//Listeners de la basura plastica

//Vaso plastico
vasoPlastico.addEventListener('dragstart',dragStart);
vasoPlastico.addEventListener('dragend',dragEnd);
vasoPlastico.number=2;

//Botella plastica
botellaPlastico.addEventListener('dragstart',dragStart);
clave=botellaPlastico.addEventListener('dragend',dragEnd);
botellaPlastico.number=1;

//Listeners de la basura de vidrio

//Botella de vidrio
botellaVidrio.addEventListener('dragstart',dragStart);
clave1=botellaVidrio.addEventListener('dragend',dragEnd);
botellaVidrio.number=3;


//Mover al basurero de vidrios(Verde)
basureroG.addEventListener('dragover',dragOver);
basureroG.addEventListener('dragenter',dragEnter);
basureroG.addEventListener('dragleave', dragLeave);
basureroG.addEventListener('drop',dragDrop);

//Mover al basurero de plasticos(Rojo)
basureroR.addEventListener('dragover',dragOver);
basureroR.addEventListener('dragenter',dragEnter);
basureroR.addEventListener('dragleave', dragLeave);
basureroR.addEventListener('drop',dragDrop);


//funciones del dragable

function dragStart()
{
    this.className +=' hold';
    setTimeout(()=>(this.className ='invisible'),0) ;
    console.log('start');
}
function dragEnd()
{   
    switch (this.number)
    {
        case 1:
        {
            this.className = 'botellaPlastico';
            return true;
            break;
        }
        case 2:
        {
            this.className = 'vasoPlastico';
            return true;
            break;
        }
        case 3:
        {
            this.className = 'botellaVidrio';
            break;
        }
        default:
        {
            console.log("Error");
        }
    }
    
    console.log('End');
}
function dragOver(e)
{
    e.preventDefault();   
}
function dragEnter(e)
{   
    e.preventDefault();
    this.className +=' hovered';
}
function dragLeave()
{
    switch (this.number)
    {
        case 1:
            {
                this.className = 'plasticRed';
                break;
            }
        case 2:
            {
                this.className = 'plasticGreen';
                break;
            }
        case 3:
            {
                this.className = 'plasticYellow';
                break;
            }
        case 4:
            {
                this.className = 'plasticBlue';
                break;
            }
            default:
            {
                console.log("error");
            }
    }
    

}
function dragDrop ()
{
    
    switch (this.number)
    {
        case 1:
            {
                this.className = 'plasticRed';

                    this.append(botellaPlastico);
               
                break;
            }
        case 2:
            {
                this.className = 'plasticGreen'
                    this.append(botellaVidrio);
                break;
            }
        case 3:
            {
                break;
            }
        case 4:
            {
                break;
            }
        default :
        {
            console.log("Error");
        }
    }

}