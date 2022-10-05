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




//crop the image and draw it to the canvas
function cropImage(imagePath, newX, newY, newWidth, newHeight) {
    //create an image object from the path
    const originalImage = new Image();
    originalImage.src = imagePath;
 
    //initialize the canvas object
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d');
 
    //wait for the image to finish loading

 
        //set the canvas size to the new width and height
        canvas.width = newWidth;
        canvas.height = newHeight;
         
        //draw the image
        ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight); 
    
}

document.getElementById("edit6").addEventListener("click", ()=>{
    var newX=document.getElementById("dim1");
    var newY=document.getElementById("dim2");
    var newWidth=document.getElementById("dim3");
    var newHeight=document.getElementById("dim4");

    const recentimgurl=localStorage.getItem("preview1");
   cropImage(recentimgurl,Number(newX),Number(newY),Number(newWidth),Number(newHeight));
});