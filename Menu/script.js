function clicked(){
    const title = document.getElementById("main");
    title.style.opacity = "0";
    setTimeout(function(){
        window.open("../Login/loginMain.html", "_self")
    }, 2000);
}