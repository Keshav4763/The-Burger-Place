/*alert("keshav kumar");*/


/*function Hiden() 

    {
        document.getElementById("navbar").style.display="block"

}*/

           
document.querySelector(".bunside").addEventListener("click",function(){
    const x=document.querySelector(".navbar");
    const y=getComputedStyle(x).display;
    
    if(y=="none"){
        x.style.display="inline";
    }
    else{
        x.style.display="none";
    }   
});



               