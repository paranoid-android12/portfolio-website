function clicked(){
    const title = document.getElementById("main");
    title.style.opacity = "0";
    setTimeout(function(){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley", "_self")
    }, 2000);
}