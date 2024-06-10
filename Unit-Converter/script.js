document.addEventListener("DOMContentLoaded", () => {
    // Temperature conversion
    document.getElementById("convert-temperature").addEventListener("click", () => {
        let celsius = parseFloat(document.getElementById("celsius").value);
        if (!isNaN(celsius)) {
            let fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        }
    });

    // Weight conversion
    document.getElementById("convert-weight").addEventListener("click", () => {
        let kg = parseFloat(document.getElementById("kg").value);
        if (!isNaN(kg)) {
            let pounds = kg * 2.205;
            document.getElementById("pounds").value = pounds.toFixed(2);
        }
    });

    // Distance conversion
    document.getElementById("convert-distance").addEventListener("click", () => {
        let km = parseFloat(document.getElementById("km").value);
        if (!isNaN(km)) {
            let miles = km / 1.609;
            document.getElementById("miles").value = miles.toFixed(2);
        }
    });
});
