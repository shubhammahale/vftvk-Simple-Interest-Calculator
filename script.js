var validating=false;

function compute()
{
    console.log("click")
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = interest;

    console.log("principal:",principal);
    console.log("rate:",rate);
    console.log("years:",years);
    console.log("interest:",interest);
    console.log("amount:",amount);

    if(principal<=0){
        document.getElementById('result').innerHTML="";
        if(validating == false) {
            validating = true
            alert("Enter a positive number");
            setTimeout(function(){
                document.getElementById("principal").focus();
                validating = false;
            }, 1);
        }
        
    }
    var year = new Date().getFullYear()+parseInt(years);

    if(principal>0){
        document.getElementById('result').innerHTML="\<br>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    }

    
}
    
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}