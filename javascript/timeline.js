let terminal =
document.getElementById("console_terminal");
let logs =
[
    "> Initializing Runtime...",
    "> Parsing JavaScript...",
    "> Allocating Heap Memory...",
    "> Creating Stack Frames...",
    "> Executing Program...",
    "",
    "OUTPUT:",
    "[1,2,3,4]",
    "",
    "> Execution completed successfully"
];
let index = 0;
function typeLogs()
{
    if(index < logs.length)
    {
        let line =
        document.createElement("div");
        line.innerText =
        logs[index];
        terminal.appendChild(line);
        terminal.scrollTop =
        terminal.scrollHeight;
        index++;
        setTimeout(typeLogs,500);
    }
}
typeLogs();
let terminal =
document.getElementById("console_terminal");



let final_output =
JSON.parse(
    localStorage.getItem("final_output")
);



let logs =
[
    "> Runtime initialized...",
    "> Parsing JavaScript...",
    "> Executing Program...",
    ""
];



// append actual outputs

final_output.forEach(function(item){

    logs.push(String(item));

});



logs.push("");
logs.push("> Execution completed successfully");



let index = 0;



function typeLogs()
{
    if(index < logs.length)
    {
        let line =
        document.createElement("div");

        line.innerText =
        logs[index];

        terminal.appendChild(line);

        terminal.scrollTop =
        terminal.scrollHeight;

        index++;

        setTimeout(typeLogs,400);
    }
}



typeLogs();