const form = document.querySelector('form');
//console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = document.querySelector('#height').value;
    console.log(height);
    const weight = document.querySelector('#weight').value;
    console.log(weight);
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    const results = document.querySelector('#results');
    console.log(bmi);
   //results.innerHTML = `Your BMI is ${bmi}`;
   if (bmi < 18.5) {
    results.innerHTML = `Your BMI is ${bmi} and you are underweight`;
   }
   else if (bmi > 18.5 && bmi < 25) {
    results.innerHTML = `Your BMI is ${bmi} and you are normal`;
   }
   else if (bmi > 25 && bmi < 30) {
    results.innerHTML = `Your BMI is ${bmi} and you are overweight`;
   }
});