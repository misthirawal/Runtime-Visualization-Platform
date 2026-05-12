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

//----------------------------------------matrix rain efefct----------------------------------//------------------------
let canvas=document.getElementById("my_canvas");
let ctx= canvas.getContext("2d");  //it will return drawing tools for 2d drawing on the canvas so ctx will become an object
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let font_size=16; //1 character-20 px
const binary = "01";
//total no of streams(horizontally fill =canvas_width/font_size)
const no_of_streams=(canvas.width/font_size);
let arr=[];  //created an array to store the current yth position of each stream
for(let i=0;i<no_of_streams;i++)
{
    arr[i]=Math.random()*canvas.height;//it will store random initial position of each stream to give it a more natural feel
    
}
function draw()
{
    ctx.fillStyle="rgba(2, 6, 23, 0.12)";
    ctx.fillRect(0 ,0 ,canvas.width,canvas.height);
    ctx.fillStyle="#38bdf8";
    ctx.font=`${font_size}px monospace`;
    ctx.shadowColor="#7dd3fc";
    ctx.shadowBlur = 8;
    for(let i=0;i<no_of_streams;i++)
    {
         const text =
            binary.charAt(
                Math.floor(
                    Math.random() * binary.length
                )
            );
        ctx.fillText(texts,i*16,arr[i]);  //filltext contains (text to display,x position, y position)
        arr[i]+=font_size;
        if(arr[i] > canvas.height && Math.random()>0.975)
        {
            arr[i] =Math.random()*-200;
        }
    }

}
setInterval(draw,50);
window.addEventListener("resize", () =>
{
    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;
});