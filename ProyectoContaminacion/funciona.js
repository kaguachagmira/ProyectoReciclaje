// Variables para basura de plastico
var botellaPlastico = document.querySelector(".botellaPlastico");
var vasoPlastico = document.querySelector(".vasoPlastico");
//Variables para basura de vidrio
var botellaVidrio = document.querySelector(".botellaVidrio");
let draggedItem = null;

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
basureroG.addEventListener('dragover',dragOverG);
basureroG.addEventListener('dragenter',dragEnterG);
basureroG.addEventListener('dragleave', dragLeaveG);
basureroG.addEventListener('drop',dragDropG);

//Mover al basurero de plasticos(Rojo)



//Listeners de la basura plastica
botellaPlastico.number=1;
vasoPlastico.number=2;
botellaPlastico.addEventListener('dragstart',dragStart);
botellaPlastico.addEventListener('dragend',dragEnd);
vasoPlastico.addEventListener('dragstart',dragStart);
vasoPlastico.addEventListener('dragend',dragEnd);
//Listeners de la basura vidrio
botellaVidrio.number=3;
botellaVidrio.addEventListener('dragstart',dragStart);
botellaVidrio.addEventListener('dragend',dragEnd);


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
                draggedItem = botellaVidrio;
                draggedItem.number=3;
                setTimeout(()=>(this.className ='invisible'),0) ;
                console.log("Start");
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
        case 1:
        {
            //draggedItemR.style.display = 'block';
            this.className = 'botellaPlastico';
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
            //draggedItemG.style.display = 'block';
            this.className = 'botellaVidrio';
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
}
function dragEnter(e)
{   
    e.preventDefault();
    this.className +=' hovered';
}
function dragLeave()
{
    this.className = 'plasticRed'; 
}
function dragDrop ()
{

    if(draggedItem.number==1 ||draggedItem.number==2)
    {
        this.className = 'plasticRed';
        //draggedItemR.style.display = 'block';
        this.append(draggedItem);
        draggedItem.number=0;
    }
    else
    {
        
    }

}
//PARA VIDRIO
function dragOverG(e)
{
    e.preventDefault();   
}
function dragEnterG(e)
{   
    e.preventDefault();
    this.className +=' hovered';
}
function dragLeaveG()
{
    this.className = 'plasticGreen';
}
function dragDropG()
{
    if(draggedItem.number==3)
    {
        this.className = 'plasticGreen';
        //draggedItemG.style.display = 'block';
        this.append(draggedItem);
        draggedItem.number=0;
    }
    else
    {

    }

}












