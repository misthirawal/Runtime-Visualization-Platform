async function navbar_load()//async bcz this func may take time to load in browser
{
    const response= await fetch("./navbar.html"); //fetch from relative path my reusable block of navigation code
    const navigation = await response.text();//response is not html it contains response object so text() convert the content into text to read
    document.getElementById("navigation_container").innerHTML=navigation
}

async function sidebar_load()
{
    const reply=await fetch("./Sidebar.html");
    const sidebar= await reply.text();
    document.getElementById("sidebar_container").innerHTML=sidebar;
}

async function dashboard_load()
{
    await navbar_load();
    await sidebar_load(); //wait till sidebar and navbar gets load then load dashboard 
    detect_memory();
    push_stack("main()");
    setTimeout(() =>
{
    push_stack("hello()");
}, 1000);



setTimeout(() =>
{
    push_stack("sum()");
}, 2000);



setTimeout(() =>
{
    pop_stack();
}, 3000);



setTimeout(() =>
{
    pop_stack();
}, 4000);
    console.log(runtime_state);
}

window.addEventListener("load",dashboard_load);
function detect_memory()
{
    let user_memory=navigator.deviceMemory;
    if(!user_memory)
    {
        user_memory=8;
    }
    document.getElementById("ram_text").innerText =`[ SYSTEM SCAN COMPLETE ]
    Memory profile available.
    Select runtime configuration mode.`;
    document.getElementById("detected_ram").addEventListener("click",function()
    {
        document.getElementById("ram_text").innerText =`Detected RAM Selected:${user_memory} GB
        Initializing runtime engine...`;
        localStorage.setItem("ram", user_memory);
        setTimeout(() =>{close_popup();}, 1500);
        console.log("RAM Saved:",user_memory);
    });
    document.getElementById("custom_ram_input").addEventListener("click",function()
    {
        //custom_ram_input_handler
        let a = prompt("Enter custom RAM size in GB");
        document.getElementById("ram_text").innerText =`Custom RAM Selected:${a} GB
        Building runtime environment...`;
        localStorage.setItem("ram", a);
        setTimeout(() =>{close_popup();}, 1500);
        localStorage.setItem("ram",a);
        console.log("RAM Saved:",a);
    });
    //close_popup
    function close_popup()
    {
        document.getElementById("memory_popup").style.display = "none";
    }
}
