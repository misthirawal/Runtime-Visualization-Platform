            //code-editor code based on user prefernece of dropdown
let console_output=document.getElementById("console_output");
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

    Control_Flow : `
    for(let i=0;i<3;i++)
    {
    console.log(i*2);
    }
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
    let user= { name: "Misthi" };
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
    abc.value='';

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


//-----------------detecting code written by user------------------//
let detect_code=document.getElementById("run_system");
detect_code.addEventListener("click",detection);
function detection()
{
    let trace=[];//will store runtime elements
    let stack_data=[] //to seperately store all stack lines so we can show it in stack animation in console.html page
    let heap_data=[] //to store dynamically allocated variables in heap array and to show them dyaniacally
//loop detection code in code_editor........
    let user_code = document.getElementById("code_editor").value;
    let arr=["for","while","do"];
    for(let i=0;i<arr.length;i++)
        {
            if(user_code.includes(arr[i]))
                {
                    trace.push(arr[i]+"LOOP DETECTED IN SYSTEM...");

                }
        }
        if(user_code.includes("function"))
        {
            trace.push("FUNCTION IS DETECTED IN SYSTEM...");
        }
        if(user_code.includes("=>"))
        {
            trace.push("ARROW FUNCTION DETECTED");
        }
        let lines=user_code.split("\n");
        for(let i=0;i<lines.length;i++)
            {
                let trimmed_line=lines[i].trim(); //extra spaces remove
                //skip all empty spaces, { } to prevent them entering into stack
                if(trimmed_line==="")
                {
                    continue; //to skip all those lines from classification of stack or heap..
                }
                if(trimmed_line.includes("[")&& trimmed_line.includes("]"))  //aray detection
                    {
                        console.log("ARRAY-> HEAP");
                        heap_data.push(trimmed_line);
                    }
                    else if(trimmed_line.includes("function") || trimmed_line.includes("=>"))  //function detection
                        {
                            console.log("FUNCTION => HEAP");
                            heap_data.push(trimmed_line);
                        }
                    else if(trimmed_line.includes("=")&&trimmed_line.includes("{"))  //object detection
                        {
                            console.log("OBJECT => HEAP");
                            heap_data.push(trimmed_line);
                        }
                    else if(trimmed_line.startsWith("let")||trimmed_line.startsWith("const")||trimmed_line.startsWith("var"))
                        {
                            console.log("PRIMITIVE OBJECTS=> STACK");
                            stack_data.push(trimmed_line);
                        }
                        else
                        {
                            continue;
                        }
                    }
                    localStorage.setItem("stack_memory",JSON.stringify(stack_data));
                    localStorage.setItem("heap_memory",JSON.stringify(heap_data));
                    localStorage.setItem("runtime_trace", JSON.stringify(trace));
                    console_output.innerHTML=trace.join("<br>");
                }

//local storage only stores string so we are converting our trace array into string
var b= navigator.deviceMemory;
console.log(b);

//scanner line 
let run_btn =document.getElementById("run_system");
run_btn.addEventListener("click", runSystem);
function runSystem()
{
    let user_code =document.getElementById("code_editor").value;
    localStorage.setItem("user_code",user_code);
    localStorage.setItem("final_output","[1,2,3,4]");
    let scanner =document.getElementById("scanner_line");
    scanner.classList.add("active");
    document.querySelector(".code_writing_space").classList.add("scanning");
    document.getElementById("console_output").innerText =
    "Analyzing Runtime...\nAllocating Memory...\nLaunching Execution Trace...";
    setTimeout(function(){ window.location.href = "console.html";},1800);
}
function runSystem()
{
    let user_code =document.getElementById("code_editor").value;
    let output_logs = [];
    const custom_console ={
        log: function(message)
        {
            output_logs.push(message);
        }
    };
    try
    {
        new Function(
            "console",
            user_code
        )(custom_console);
    }
    catch(error)
    {
        output_logs.push(
            "Runtime Error: " + error.message
        );}
    localStorage.setItem("final_output", JSON.stringify(output_logs));
    window.location.href ="console.html";
}
