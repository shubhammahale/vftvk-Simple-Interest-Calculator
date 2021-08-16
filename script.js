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
        alert("Enter a positive number");
    }
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById('result').innerHTML="\<br>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
    
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}