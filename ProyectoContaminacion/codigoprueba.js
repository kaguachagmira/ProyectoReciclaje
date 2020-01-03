// Variables para basura de plastico
var botellaPlastico = document.querySelector(".botellaPlastico");
var vasoPlastico = document.querySelector(".vasoPlastico");
//Variables para basura de vidrio
var botellaVidrio = document.querySelector(".botellaVidrio");
//Variables para basura organica
var platanoOrganico = document.querySelector(".platanoOrganico");
var manzanaOrganico = document.querySelector(".manzanaOrganico");
//Varaibles para basura de papel
var papelPapel = document.querySelector(".papelPapel");
var cajaPapel = document.querySelector(".cajaPapel");

//Variable que me permite copiar informacion
let draggedItem = null;
//Variable para el audio
var win = document.getElementById("win");
var fail = document.getElementById("fail");
//Variable para basurero de plastico
var basureroR = document.querySelector(".plasticRed");
basureroR.number=1;
basureroR.addEventListener('dragover',dragOver);
basureroR.addEventListener('dragenter',dragEnter);
basureroR.addEventListener('dragleave', dragLeave);
basureroR.addEventListener('drop',dragDrop);
//Variable para basurero de vidrio
var basureroG = document.querySelector(".plasticGreen");
basureroG.number=2;
basureroG.addEventListener('dragover',dragOver);
basureroG.addEventListener('dragenter',dragEnter);
basureroG.addEventListener('dragleave', dragLeave);
basureroG.addEventListener('drop',dragDropG);
//Variables para basurero de organicos
var basureroY = document.querySelector(".plasticYellow");
basureroY.number=3;
basureroY.addEventListener('dragover',dragOver);
basureroY.addEventListener('dragenter',dragEnter);
basureroY.addEventListener('dragleave', dragLeave);
basureroY.addEventListener('drop',dragDropY)

//Varaibles para basurero de papel
var basureroB = document.querySelector(".plasticBlue");
basureroB.number=4;
basureroB.addEventListener('dragover',dragOver);
basureroB.addEventListener('dragenter',dragEnter);
basureroB.addEventListener('dragleave',dragLeave);
basureroB.addEventListener('drop',dragDropB); 

//Listeners de la basura plastica
botellaPlastico.number=1;
vasoPlastico.number=2;
botellaPlastico.addEventListener('dragstart',dragStart);
botellaPlastico.addEventListener('dragend',dragEnd);
vasoPlastico.addEventListener('dragstart',dragStart);
vasoPlastico.addEventListener('dragend',dragEnd);
//Listeners de la basura vidrio
botellaVidrio.number=4;
botellaVidrio.addEventListener('dragstart',dragStart);
botellaVidrio.addEventListener('dragend',dragEnd);
//Listeners de la basura organica
platanoOrganico.number=7;
manzanaOrganico.number=8;
platanoOrganico.addEventListener('dragstart',dragStart);
platanoOrganico.addEventListener('dragend',dragEnd);
manzanaOrganico.addEventListener('dragstart',dragStart);
manzanaOrganico.addEventListener('dragend',dragEnd);

//Listeners de la basura de papel
papelPapel.number=10;
cajaPapel.number=11;
papelPapel.addEventListener('dragstart',dragStart);
papelPapel.addEventListener('dragend',dragEnd);
cajaPapel.addEventListener('dragstart',dragStart);
cajaPapel.addEventListener('dragend',dragEnd);

function dragStart()
{
    switch (this.number)
    {
        case 1:
            {
                draggedItem = botellaPlastico;
                draggedItem.number=1;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 2:
            {
                draggedItem = vasoPlastico;
                draggedItem.number=2;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 3:
            {
                break;
            }
        //Casos para basura de vidrio
        case 4:
            {
                draggedItem = botellaVidrio;
                draggedItem.number=4;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 5:
            {
                break;
            }
        case 6:
            {
                break;
            }
        //Casos para basura organica
        case 7:
            {
                draggedItem = platanoOrganico;
                draggedItem.number=7;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 8:
            {
                draggedItem = manzanaOrganico;
                draggedItem.number=8;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
                break;
            }
        case 10:
            {
                draggedItem = papelPapel;
                draggedItem.number=10;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        case 11:
            {
                draggedItem = cajaPapel;
                draggedItem.number=11;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Empezo a arastrasrse");
                break;
            }
        default:
            {
                console.log("Default");
            }
    }

}
function dragEnd()
{   
    switch(this.number)
    {
        //Efecto de retorno para plasticos
        case 1:
        {
            //draggedItemR.style.display = 'block';
            this.className = 'botellaPlastico';
            console.log("End");
            break;
        }
        case 2:
        {
            //draggedItemR.style.display = 'block';
            this.className = 'vasoPlastico';
            break;
        }
        case 3:
        {
            break;
        }
        //Efecto de retorno para vidrio
        case 4:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'botellaVidrio';
            break;
        }
        case 5:
        {
            break;
        }
        case 6:
        {
            break;
        }
        //Efectos de  retorno para organico
        case 7:
        {
            //draggedItemG.style.display = 'block';
            this.className = 'platanoOrganico';
            break;
        }
        case 8:
        {
            this.className = 'manzanaOrganico';
            break;
        }
        //Efecto de retorno para papeles
        case 10:
        {
            this.className = 'papelPapel';
            break;
        }
        case 11:
        {
            this.className = 'cajaPapel';
            break;
        }
        default:
        {
            console.log("Default");
        }
    }
    
}
//PARA PLASTICO
function dragOver(e)
{
    e.preventDefault();
    this.className +=' hovered';
}
function dragEnter(e)   
{   
    e.preventDefault();
    this.className +=' hovered';
}
function dragLeave()
{
    switch(this.number)
    {
        case 1:
        {
            this.className = 'plasticRed';
            //this.className -=' hovered';
            break;
        }
        case 2:
        {
            this.className = 'plasticGreen';
            //this.className -=' hovered';
            break;
        }
        case 3:
        {
            this.className = 'plasticYellow';
            //this.className -=' hovered';
            break;
        }
        case 4:
        {
            this.className = 'plasticBlue';
            break;
        }
        default:
        {
            console.log("nada");
        }
    }
 
}
function dragDrop ()
{

    if(draggedItem.number==1 ||draggedItem.number==2)
    {
        this.className = 'plasticRed';
        //draggedItemR.style.display = 'block';
        this.append(draggedItem);
        draggedItem.number=0;
        win.play();
    }
    else
    {
        fail.play();
    }

}
//PARA VIDRIO
function dragDropG()
{
    if(draggedItem.number==4)
    {
        this.className = 'plasticGreen';
        //draggedItemG.style.display = 'block';
        this.append(draggedItem);
        draggedItem.number=0;
        win.play();
    }
    else
    {
        fail.play();
    }
}
//PARA ORGANICO
function dragDropY()
{
    if(draggedItem.number==7 || draggedItem.number==8 || draggedItem.number==9)
    {
        this.className = 'plasticYellow';
        //draggedItemG.style.display = 'block';
        this.append(draggedItem);
        win.play();
        draggedItem.number=0;
    }
    else
    {
        fail.play();
    }

}
function dragDropB()
{
    if(draggedItem.number==10 ||draggedItem.number==11||draggedItem.number==12)
    {
        this.className = 'plasticBlue';
        //draggedItemR.style.display = 'block';
        this.append(draggedItem);
        win.play();
        draggedItem.number=0;
    }
    else
    {
        fail.play();
    }
}