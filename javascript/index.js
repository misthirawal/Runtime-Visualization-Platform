async function navbar_load()//async bcz this func may take time to load in browser
{
    const response= await fetch("./Components/navbar.html"); //fetch from relative path my reusable block of navigation code
    const navigation = await response.text();//response is not html it contains response object so text() convert the content into text to read
    document.getElementById("navigation_container").innerHTML=navigation
}
navbar_load();

//-----------------------------------------------------//-------------------------------------//---------------------------
//typewriter effect on home page console layout
let text=[ "> Initializing Runtime...",
    "> Loading Memory Heap...",
    "> Executing JavaScript Engine..."]; //text name array which contains text i want to show in typewriter effect
 let ch=0;
 let line=0; //line=0 means "> Initializing Runtime..."
 const effect=document.getElementById("hi");
 function type_writter_effect()
 {
    if(ch<text[line].length)  //text[0]=1st line ,till we reach the end of 1st line last char run this
    {
        effect.innerHTML+=text[line].charAt(ch);
        ch++;
        setTimeout(type_writter_effect,70);
    }  //loop will go till end of 1 st line
    else
    {
        effect.innerHTML+="<br>";
        line++;
        ch=0;
        if (line < text.length) //to check if nay more line is left
        {
            setTimeout(type_writter_effect, 500);
        }
    }
 }
 type_writter_effect();

 //blinking cursor feel
let blink=document.getElementById("blinking_cursor");
setInterval(()=>
{
    blink.style.visibility=="visible";
    if(blink.style.visibility==="hidden")  //using visibilty over display because it reserves space for that element
    {
        blink.style.visibility= "visible";
    }
    else{
        blink.style.visibility="hidden";
    }
},500);
 