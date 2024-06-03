const canvas=document.getElementById("canvas");
const width=canvas.width=600;
const height=canvas.height=600;
const ctx=canvas.getContext("2d");
console.dir(canvas);

function animate(){
    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    // ctx.fillRect(Math.random()*width*0.999,Math.random()*height*0.999,30,30);
    ctx.beginPath();
    ctx.shadowColor = "black";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 6;
    ctx.shadowOffsetY = 6;
    ctx.shadowColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.arc(Math.random()*width*0.999,Math.random()*height*0.999, 50, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();
    requestAnimationFrame(()=>{
        setTimeout(animate,10); 
    })
}
animate();
function motion(details){
    console.log(details.clientX,details.clientY); 
    canvas.style.top=`${details.clientY}px`;
    canvas.style.left=`${details.clientX}px`;
    ctx.fillStyle="black";

}

canvas.addEventListener("mousemove",motion);

// function experiment1(details){
//     canvas.width=10px;

// }
// canvas.addEventListener("mousedown",experiment1)