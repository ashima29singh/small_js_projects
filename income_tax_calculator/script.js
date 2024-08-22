function test(){
    t = document.getElementById("taxable-income").value;
    console.log(t);
    a = document.getElementById("age").value;
    console.log(a);
    b = document.querySelector('input[type = radio][name = gender]:checked').value;
    console.log(b);
    r = incomeTax(a,b,t);
    console.log(r);
    document.getElementById("result").value= "Your total tax is - " + r;
}
function incomeTax(age,gender,taxable_income){
        let income_tax = 0;
        if(age>65 || gender=="F"){
            console.log("wrong category"); 
        }
        else if(age<=65 && gender=="M"){
            if(taxable_income < 160000){
                income_tax = 0;
            }
            else if(taxable_income>160000 && taxable_income<=500000){
                income_tax = (taxable_income - 160000)/100*10;
            }
            else if(taxable_income>500000 && taxable_income<=800000){
                income_tax = ((taxable_income - 500000)/100)*20 + 34000;
            }
            else if(taxable_income>800000){
                income_tax = ((taxable_income - 800000)/100) * 30 + 94000;
            }    
            console.log(income_tax);
        }
        return income_tax;
    }
