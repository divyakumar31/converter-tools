let decimal = document.querySelector('#decimal');
let binary = document.querySelector('#binary');

decimal.addEventListener("input", () => {
    decimal.value = decimal.value.replace(/[^0-9]/g, '');

    // Prevent the default behavior for non-numeric key presses
    if (!/^[0-9]*$/.test(decimal.value)) {
        e.preventDefault();
    }

    let decimalval = parseInt(decimal.value);
    let binaryval = isNaN(decimalval)? '' : decimalval.toString(2);  // Output: "1010"
    binary.value = binaryval;
});

binary.addEventListener('input', (e) => {
    binary.value = binary.value.replace(/[^0-1]/g, '');

    // Prevent the default behavior for non-numeric key presses
    if (!/^[0-1]*$/.test(binary.value)) {
        e.preventDefault();
    }

    let binaryValue = parseInt(binary.value, radix = 2);
    let decimalValue = isNaN(binaryValue) ? '' : binaryValue.toString(10);
    decimal.value = decimalValue;
});

decimal.addEventListener('paste', (e) => {
    e.preventDefault();
});

binary.addEventListener('paste', (e) => {
    e.preventDefault();
});

decimal.addEventListener('keydown', disableUpDown);
binary.addEventListener('keydown', disableUpDown);

function disableUpDown(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown"){
        event.preventDefault();
    }
}