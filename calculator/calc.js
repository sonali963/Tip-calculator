let e=document.getElementById('a')
let f=document.getElementById('b')
let g=document.getElementById('c')
let h=document.getElementById('d')

let people=Number(g.innerText)




 function calculateBill(){
    let bill=Number(e.value)
    let tip=Number(f.value)*.01*bill
    let total=bill+tip;
    
    h.innerText=total/people

 }
 function increase(){
    people=people+1;
    g.innerText=people;
    calculateBill()
 }
 function decrease(){
    if(people<=1){
        alert("hey! u cannot have less than 1 person")
        return

    }
    
    people=people-1;
    g.innerText=people;
    calculateBill()
 }