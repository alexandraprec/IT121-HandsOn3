function convertTemp() {
    // Get user input
    let temperature = parseFloat(document.getElementById("temperature").value);
    let conversion = document.getElementById("conversion").value;
    
    let result;
    
    // Perform conversion based on selected type
    if (conversion === "celsiusToFahrenheit") {
        // Celsius to Fahrenheit: (C × 9/5) + 32
        result = (temperature * 9/5) + 32;
        result = result.toFixed(2) + " °F";
    } else if (conversion === "fahrenheitToCelsius") {
        // Fahrenheit to Celsius: (F - 32) × 5/9
        result = (temperature - 32) * 5/9;
        result = result.toFixed(2) + " °C";
    } else {
        result = "Invalid conversion type";
    }
    
    // Display the result
    document.getElementById("result").textContent = `Result: ${result}`;
}
