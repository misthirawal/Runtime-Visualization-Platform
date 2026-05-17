let stack_data=JSON.parse(localStorage.getItem("stack_memory"));
let heap_data=JSON.parse(localStorage.getItem("heap_memory"));
let stack_output=document.getElementById("stack_output");
let div=document.createElement("div");
div.classList.add("memory_box");
for(let i=0;i<stack_data.length;i++)
{
    setTimeout(()=>
    {
    let div=document.createElement("div");
    div.classList.add("memory_box");
    div.innerText=stack_data[i];
    stack_output.prepend(div);
    },i*1000);

}
let heap_memory =new Array(10);
heap_memory=["ALLOCATED","FREE","ALLOCATED","ALLOCATED","FREE","FREE","FREE","ALLOCATED","ALLOCATED","FREE"];
const heap_grid =document.getElementById("heap_grid");
let heap_cells = [];
for(let i=0;i<heap_memory.length;i++)
{
    let cell =
    document.createElement("div");

    cell.classList.add("heap_cell");

    cell.innerText =
    heap_memory[i];

    heap_grid.appendChild(cell);

    heap_cells.push(cell);
}
//heap real_time value allocation
//find 1st free index in heap and allocating its value to our code_editor_ heap value classify
async function heap_allocation(value)
{
    for(let i=0;i<heap_memory.length;i++)
    {
        heap_cells[i].classList.add("searching");
        await delay(500);
        heap_cells[i].classList.remove("searching");
        if(heap_memory[i]==="FREE")
        {
            heap_memory[i]=value;
            heap_cells[i].innerText = value;
            heap_cells[i].classList.add("allocated");
            break;
        }
    }
}
async function run_heap()
{
    for(let i=0;i<heap_data.length;i++)
    {
        await heap_allocation(
        heap_data[i]);
    }
}

run_heap();
function delay(ms)
{
    return new Promise(resolve =>
    setTimeout(resolve,ms));
}
