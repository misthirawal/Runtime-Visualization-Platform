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