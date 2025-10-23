const moldovaCities = [
    'Chișinău',
    'Bălți',
    'Orhei',
    'Ungheni',
    'Cahul',
    'Hîncești',
    'Soroca',
    'Comrat',
    'Strășeni',
    'Căușeni',
    'Drochia',
    'Edineț',
    'Florești',
    'Cimișlia',
    'Criuleni'
];

const citiesDatalist = document.getElementById('cities');

moldovaCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    citiesDatalist.appendChild(option);
});

const formInputs = {
    name: document.getElementById('name-input'),
    city: document.getElementById('city-input'),
    romanianLanguage: document.getElementById('romanian-language-checkbox'),
    englishLanguage: document.getElementById('english-language-checkbox'),
    frenchLanguage: document.getElementById('french-language-checkbox'),
    motivation: document.getElementById('your-motivation-input')
}

const formButtons = {
    save: document.getElementById('save-button'),
    clear: document.getElementById('clear-button')
}

let formValues = [];

formButtons.clear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

if (localStorage.getItem('formValues')) {
    formValues = JSON.parse(localStorage.getItem('formValues'));
    loadFormValues(formValues);
}

formButtons.save.addEventListener('click', (e) => {
    e.preventDefault();

    for (let key in formInputs) {

        if (formInputs[key].type === 'checkbox') {
            formValues.push(formInputs[key].checked);
        } else {
            formValues.push(formInputs[key].value);
        }
    }

    localStorage.setItem('formValues', JSON.stringify(formValues));
    formValues = [];
});

function loadFormValues(formValues) {
    let index = 0;

    for (let key in formInputs) {

        if (formInputs[key].type === 'checkbox') {
            formInputs[key].checked = formValues[index];
        } else {
            formInputs[key].value = formValues[index];
        }
        index++;
    }
}