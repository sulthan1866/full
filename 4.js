document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();

    
    let a =Number.parseInt( document.getElementById("a").value);
    let text = document.getElementById("oddtext");
    let pdt=1;
     
    for (let i = 1; i <= a; i+=2) {
        pdt*=i;
        
    }
    if(a<=300&&a>=0){
        if(a==0)pdt=0;
        text.textContent=`The product of odd integers from 1 to ${a} is ${pdt}`
    }
        
    else text.textContent="please enter a value from 0 to 300"
})