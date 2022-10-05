document.addEventListener("DOMContentLoaded", () => {
    const recentimgurl=localStorage.getItem("preview1");

    if(recentimgurl) {
        document.querySelector("#imgpreview1").setAttribute("src",recentimgurl);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const recentimgurl=localStorage.getItem("preview2");

    if(recentimgurl) {
        document.querySelector("#imgpreview2").setAttribute("src",recentimgurl);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const recentimgurl=localStorage.getItem("preview3");

    if(recentimgurl) {
        document.querySelector("#imgpreview3").setAttribute("src",recentimgurl);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const recentimgurl=localStorage.getItem("preview4");

    if(recentimgurl) {
        document.querySelector("#imgpreview4").setAttribute("src",recentimgurl);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const recentimgurl=localStorage.getItem("preview5");

    if(recentimgurl) {
        document.querySelector("#imgpreview5").setAttribute("src",recentimgurl);
    }
});


document.getElementById("delete1").addEventListener("click", () => {
    localStorage.removeItem("preview1");
    //localStorage.setItem("preview1","");
});

document.getElementById("delete2").addEventListener("click", () => {
    localStorage.removeItem("preview2");
});

document.getElementById("delete3").addEventListener("click", () => {
    localStorage.removeItem("preview3");
});

document.getElementById("delete4").addEventListener("click", () => {
    localStorage.removeItem("preview4");
});

document.getElementById("delete5").addEventListener("click", () => {
    localStorage.removeItem("preview5");
});

