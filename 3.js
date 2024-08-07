
function append(c){

    let display = document.getElementById("display");
    let section = document.getElementById("section");
    display.className="form-control text-dark"
    let text = display.value;
    let sectext = section.textContent;
   if(c=='x')s='*';
   else if(c=='sin(' || c=='cos(' || c=='tan('){
     s='Math.'+c;
    }

   else if(c=='sin^-1(' || c=='cos^-1(' || c=='tan^-1(') {
    s=`Math.a${c.slice(0, 3)}(`;
    
    }
    else if(c=='^')s='**'
    else if(c=='^2')s=`**2`
    else if(c=='√(')s='Math.sqrt('
    else if(c=='3√(')s='Math.cbrt('
    else if(c=='|')s='Math.abs('
    else if(c=='||'){s=')';c='|'}

   else s=c;

    display.value=text+c;
    section.textContent=sectext+s;
}

function calculate(){
    let display = document.getElementById("display");
    let text = display.value;
    let sec = document.getElementById("section");
    let sectext = sec.textContent;
   try {
    const ans=eval(sectext);
    display.value=ans;
    sec.textContent=ans;
   } catch (error) {
    display.className="form-control text-danger"
    display.value="SINTAX ERROR";
    sec.textContent="SINTAX ERROR"
   }
    
    
    
}
function cleardisplay(){
    let display = document.getElementById("display").value='';
    let sectext = document.getElementById("section").textContent='';
   
}
function x(){
    let display = document.getElementById("display");
    let text = display.value;
    let sec = document.getElementById("section");
    let sectext = sec.textContent;
    display.value=text.slice(0,-1); 
    sec.textContent=sectext.slice(0,-1);
}

function changesign(){
    calculate();
    let display = document.getElementById("display");
    let text = display.value;
    if(Number.parseFloat(text)<0) display.value=text.slice(1);
    else display.value='-'+text;
}
 




function sci(){
    let sci=document.getElementById("sci");
    let btn=document.getElementById("auto");

    if(sci.style.getPropertyValue('visibility')=='hidden'){
        
        btn.textContent="normal"
        sci.style.setProperty('visibility','visible');
    }
    else {
       
    
        sci.style.setProperty('visibility','hidden');
        btn.textContent="scientific"
    }
    
}