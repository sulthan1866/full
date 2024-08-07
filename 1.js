let subFunc =function(){
    var a= Number.parseInt(document.getElementById("a").value);
var b = Number.parseInt(document.getElementById("b").value);
var c = Number.parseInt(document.getElementById("c").value);

    alert(`
    
Sum: ${a+b+c}
Average: ${(a+b+c)/2}
Product: ${a*b*c}
Smallest: ${Math.min(a,b,c)}
Largest: ${Math.max(a,b,c)}`);
}