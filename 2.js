let selec = 0;


function e(){

    let date =  new Date();

    if(selec!=0){
        date.setMonth(new Date().getMonth()+selec);
    }
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let numDayMon = new Date(year,month+1,0);
let numDay = numDayMon.getDate();
let firstDay = new Date(year,month,1);

    document.getElementById("days").innerHTML=''
    document.getElementById("month").textContent=date.toLocaleDateString("en-us",{month:"long"});
document.getElementById("year").textContent=year;
let days=document.getElementById("days");

const weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
let empty = firstDay.toLocaleDateString("en-us",{weekday:"short"})
let emptynum=weekday.indexOf(empty);

for (let i = 1; i <=numDay+emptynum+(7-(numDay+emptynum)%7); i++) {
    let week = document.createElement("div");
    week.classList.add("row");
    days.appendChild(week);
    let cnt=1;
    for (let j = 0; j <= 6 && i<=numDay+emptynum+(7-(numDay+emptynum)%7); j++) {
        let element = document.createElement("div");
        element.classList.add("col","text-light","rounded","m-1","my-2");
        element.id="day"
        if(i>emptynum && i<=numDay+emptynum) element.textContent=i-emptynum;
        else if(i>=numDay+emptynum){
            
            element.textContent=cnt++;
            element.classList.remove("text-light")
            element.classList.add("nextmon")
        }
        if(i-emptynum==day && selec==0) element.id="currday";
        week.appendChild(element);
        i++;
    }
    i--;
    
}

}

document.getElementById("next").addEventListener("click",function(){
    selec++;
    
    
    e();
})
document.getElementById("pre").addEventListener("click",function(){
    selec--;
   
    e();
})

e();