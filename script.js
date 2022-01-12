const div=document.createElement("div");
document.body.appendChild(div);
div.id="traffic-light";


for (var i=1; i<=3; i++){
const div=document.createElement("div");
div.className="bulb";

document.getElementById("traffic-light").append(div);

}
const data=["stopLight","slowLight","goLight"];

data.forEach((item ,index)=>{
     const lights=document.querySelectorAll(".bulb");
     
     if(data.length=lights.length){
     lights[index].id=item;
     }
    console.log(data instanceof Object);
})

const timeOutGreen=setTimeout(illuminateGreen,);
const timeOutYell=setTimeout(illuminateYellow,6000);
const timeOutRed=setTimeout(illuminateRed,7000);

function clearLights() {
     document.getElementById("stopLight").style.backgroundColor = "black";
     document.getElementById("slowLight").style.backgroundColor = "black";
     document.getElementById("goLight").style.backgroundColor = "black";
   }
   function illuminateRed() {
     clearLights();
     document.getElementById('stopLight').style.backgroundColor = "red";
   }
   
   function illuminateYellow() {
     clearLights();
     document.getElementById('slowLight').style.backgroundColor = "gold";
   }
   function illuminateGreen(){
     clearLights();
     document.getElementById('goLight').style.backgroundColor = "green";
   }

   
   console.log(div)



