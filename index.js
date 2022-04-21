const container = document.querySelector("#container");
const resetButton = document.querySelector('#resetButton');

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
        container.append(div);
    }


}

