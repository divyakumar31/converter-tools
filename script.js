let decimal = document.querySelector('#decimal');
let binary = document.querySelector('#binary');
let octal = document.querySelector('#octal');
let hexadecimal = document.querySelector('#hexadecimal');

decimal.addEventListener("input", () => {
    decimal.value = decimal.value.replace(/[^0-9]/g, '');

    // Prevent the default behavior for non-numeric key presses
    if (!/^[0-9]*$/.test(decimal.value)) {
        e.preventDefault();
    }

    let decimalval = parseInt(decimal.value);
    binary.value = isNaN(decimalval) ? '' : decimalval.toString(2);  // Output: "1010"
    octal.value = isNaN(decimalval) ? '' : decimalval.toString(8);
    hexadecimal.value = isNaN(decimalval) ? '' : decimalval.toString(16);
});

binary.addEventListener('input', (e) => {
    binary.value = binary.value.replace(/[^0-1]/g, '');

    // Prevent the default behavior for non-numeric key presses
    if (!/^[0-1]*$/.test(binary.value)) {
        e.preventDefault();
    }

    let binaryValue = parseInt(binary.value, radix = 2);
    decimal.value = isNaN(binaryValue) ? '' : binaryValue.toString(10);
    octal.value = isNaN(binaryValue) ? '' : binaryValue.toString(8);
    hexadecimal.value = isNaN(binaryValue) ? '' : binaryValue.toString(16);
});

octal.addEventListener('input', (e) => {
    octal.value = octal.value.replace(/[^0-7]/g, '');

    // Prevent the default behavior for non-numeric key presses
    if (!/^[0-7]*$/.test(octal.value)) {
        e.preventDefault();
    }

    let octalValue = parseInt(octal.value, radix = 8);
    decimal.value = isNaN(octalValue) ? '' : octalValue.toString(10);
    binary.value = isNaN(octalValue) ? '' : octalValue.toString(2);
    hexadecimal.value = isNaN(octalValue) ? '' : octalValue.toString(16);
});

hexadecimal.addEventListener('input', (e) => {
    hexadecimal.value = hexadecimal.value.replace(/[^0-9a-fA-F]/g, '');

    // Prevent the default behavior for non-numeric key presses
    if (!/^[0-9a-fA-F]*$/.test(hexadecimal.value)) {
        e.preventDefault();
    }

    let hexadecimalValue = parseInt(hexadecimal.value, radix = 16);
    decimal.value = isNaN(hexadecimalValue) ? '' : hexadecimalValue.toString(10);
    binary.value = isNaN(hexadecimalValue) ? '' : hexadecimalValue.toString(2);
    octal.value = isNaN(hexadecimalValue) ? '' : hexadecimalValue.toString(8);
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
});

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
    }
});
