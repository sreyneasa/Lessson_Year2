
function getRadioValue(radios) {
    // TODO: get Radio value from radios array
    let selectedValue;
    radios.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });
    return selectedValue;
}

function getCheckboxValue(checkboxes) {
    // TODO: get Check box value from checkboxes array
    // Return value example: red, orange, purple
    // remove the last charector by slice(0, -1) 
    let selectedValues = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    return selectedValues.join(', ');
}


function submitSurvey() {
    let qOne = getRadioValue(questionOne)
    let qTwo = getRadioValue(questionTwo )
    let qThree = getRadioValue(questionThree)
    let qFour = getRadioValue(questionFour )

    answerOne.textContent = qOne;
    answerTwo.textContent = qTwo;
    answerThree.textContent = qThree;
    answerFour.textContent = qFour;
}

// Main
const questionOne = document.querySelectorAll('input[name="q_1"]');
const questionTwo = document.querySelectorAll('input[name="q_2"]');
const questionThree = document.querySelectorAll('.chef');
const questionFour = document.querySelectorAll('.canteen');

const answerOne = document.querySelector('#quality')
const answerTwo = document.querySelector('#taste')
const answerThree = document.querySelector('#chef')
const answerFour = document.querySelector('#canteen')

const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    submitSurvey();
});