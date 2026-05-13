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