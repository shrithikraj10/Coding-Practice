function bmiCalculator (weight, height) {
    
    var bmi = weight / (height*height);
    interpretation = ""
    if(bmi < 18.5){
       interpretation = `your BMI is ${bmi}, so you are underweight`;
    }
    else if(18.5<bmi<24.9){
       interpretation = `your BMI is ${bmi}, so you have normal wight`;

    }else{
       interpretation = `your BMI is ${bmi}, so you are overweight`;
    }
    return interpretation;
}

console.log(bmiCalculator(45, 5.5));