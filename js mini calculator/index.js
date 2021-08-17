
// 1. Find Total?
const  calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";


    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    alert(totalGrades);
    

    // 2. Find Percentage?

    let perc = (totalGrades/400) * 100;
    alert(perc);

    // 3. Find Grade?
    debugger;
    if (perc <=100 && >=80) {
        grades ='A';
    }
    elseif(perc <=79 && >=60){
        grades ='B';
    }
    elseif(perc <=59 && >=40){
        grades ='C';
    }else{
        grades ='F';
    }

    // 4. Check Pass or Fail.
    
    if (perc >=40 ) {
        // 5. Combined all and show Output.
        document.getElementById('showData').innerHTML = 'out of 400 your toatl is ${totalGrades} and CGPA is ${perc}%.<br> your grades is ${grades}.You are pass'
    
}
else{
    document.getElementById('showData').innerHTML = 'out of 400 your toatl is ${totalGrades} and CGPA is ${perc}%.<br> your grades is ${grades}.Ypur are fail'
}



}