const income = document.getElementById('income').value;
const incomeNum = parseInt(income);
const foods = document.getElementById('foods').value;
const foodsNum = parseInt(foods);
const rent = document.getElementById('rent').value;
const rentNum = parseInt(rent);

function calculate() {
    const totalExpenses = incomeNum + foodsNum;

    console.log(totalExpenses);
}