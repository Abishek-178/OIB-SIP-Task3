function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');

    if (temperatureInput === '') {
        resultElement.textContent = 'Please enter a temperature value.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    let convertedTemperature;
    let resultUnit;

    if (unit === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultUnit = 'Celsius';
    }

    resultElement.textContent = `${temperature}° ${unit} is equal to ${convertedTemperature.toFixed(2)}° ${resultUnit}.`;
}
