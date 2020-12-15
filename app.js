const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const resultArea = document.getElementById('result');

const resetInputs = () => {
    heightInput.value = '';
    weightInput.value = '';
    resultArea.innerHTML = '';
};

const calculateBmi = () => {
    console.log("Deepan");
    const enteredHeight = +heightInput.value;
    const enteredweight = +weightInput.value;

    const bmi = enteredweight / (enteredHeight * enteredHeight);
    if (isNaN(bmi)) {
        alert('Not a number, Pleae check imput');
        return;
    }
    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
    <ion-card-content>
    <h2>${bmi}</h2>
    </ion-card-content>
    `;
    resultArea.innerHTML = '';
    resultArea.appendChild(resultElement);
};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetInputs);
