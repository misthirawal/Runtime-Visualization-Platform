//code-editor code based on user prefernece of dropdown
const select=document.getElementById("header_action_1");
const abc=document.getElementById("code_editor");
select.addEventListener('change',()=>
{
    abc.value=samples[select.value]
});
//object which contains sample code for my code_editor
const samples={
    Functioncall :  `function add(a,b)
    {
        let sum=a+b;
        return sum;
    }
        let result=add(5,10);
        console.log(result);`,

    Control_Flow : `//-----for loop--------//
    for(let i=0;i<3;i++)
    {
    console.log(i*2);
    }
//-----while loop--------//
    while(10>0) {
    console.log("good morning sir")}
    `,
    Closures: `function outerFunction() 
    {
    let message = "Hello from outer function";
    function innerFunction()
     {
       console.log(message); 
      }
    return innerFunction;
  }
    let myClosure = outerFunction();
    myClosure();`,
    Heap_Allocation: `let numbers=[1,2,3];
    let user=
    {
    name: "Misthi"
    };
    numbers.push(4);
    console.log(numbers);`,
    Recursion: `function factorial(n) {
    if (n <= 1)
    {
    return 1;
    }
    return n * factorial(n - 1);}
    let f = factorial(3);`
};

//code to hide placeholder when user start writing in code_editor-------
const user_typing=document.getElementById("code_editor");
const placeholder=document.getElementById("editor_placeholder");
user_typing.addEventListener("input", remove_placeholder);
function remove_placeholder()
{
    if(user_typing.value.length>0)
    {
        placeholder.style.display="none";
    }
    else{
        placeholder.style.display="block";
    }
}
///clear button------------------------------
const click_buton=document.getElementById("clear");
click_buton.addEventListener("click",remove_text);
function remove_text()
{
    code_editor.value='';

}
///adding numbering in code_editor
const line_numbers = document.getElementById("code_editor_numbering");
user_typing.addEventListener("input", update_lines);
function update_lines()
{
    let lines = user_typing.value.split("\n").length;

    let numbers = "";

    for(let i = 1; i <= lines; i++)
    {
        numbers += i + "<br>";
    }

    line_numbers.innerHTML = numbers;
}
update_lines();
select.addEventListener('change', () =>
{
    abc.value = samples[select.value];

    update_lines();

    remove_placeholder();
});
