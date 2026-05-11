async function navbar_load()//async bcz this func may take time to load in browser
{
    const response= await fetch("./Components/navbar.html"); //fetch from relative path my reusable block of navigation code
    const navigation = await response.text();//response is not html it contains response object so text() convert the content into text to read
    document.getElementById("navigation_container").innerHTML=navbarHTML
}
navbar_load();
