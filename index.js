const container = document.querySelector("#container");
const resetButton = document.querySelector('#resetButton');

let mouseDown = false;

document.body.addEventListener("mousedown", ()=>mouseDown=true);
document.body.addEventListener("mouseup", ()=>mouseDown=false);



if(resetButton)
{
    resetButton.addEventListener("click" , (e)=>{
        let d = prompt("Enter n for an n x n grid");
        
        if(d > 100)alert('n must be <= 100');
        else resetGrid(parseInt(d));

    });
}

function resetGrid(dimensions){
    container.innerHTML ='';
    container.style.gridTemplateRows = "auto ".repeat(dimensions);
    container.style.gridTemplateColumns = "auto ".repeat(dimensions);

    for(let i=0; i< dimensions*dimensions; i++)
    {
        const div = document.createElement('div');
        div.className = "grid-box";
        div.addEventListener('mouseover', (e)=>{
            if(mouseDown)div.style.backgroundColor = "black";
        })
        container.append(div);
    }
}

resetGrid(100);

