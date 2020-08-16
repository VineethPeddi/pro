var imgobj=document.querySelector("#img_share");
var iconsobj=document.querySelector(".icons");

var k=0;
function displayNone(){
    if(k===0)
       { 
           iconsobj.setAttribute("style","display:none;");
        }
        
}
imgobj.addEventListener("click",function (){    
    
    iconsobj.setAttribute("style","display:inline;");
    setTimeout(displayNone,1000);
});

iconsobj.addEventListener("mouseover",function(){
    k=1;
    iconsobj.setAttribute("style","display:inline;");    
});

iconsobj.addEventListener("mouseout",function(){
    iconsobj.setAttribute("style","display:none;");
});
//document.addEventListener("click",displayNone);
