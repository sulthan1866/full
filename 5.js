document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();

    
    let r =Number.parseInt( document.getElementById("r").value);
    let text = document.getElementById("oddtext");
    let vol=(4/3)*Math.PI*Math.pow(r,3);
    vol=vol.toFixed(3);
    if(r>=0)
    text.textContent=`The Volume of the sphere ~ ${vol} cubic units`
   else text.textContent='Please enter a valid input'
})