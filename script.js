function validateSyntax() {
    //trim in case user inputs spaces
    let input = document.getElementById('petInput').value.trim();
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
     if (input.startsWith('pet_') && /^[a-zA-Z0-9_]+$/.test(input.slice(4))) {
        result = 'Valid Syntax';
    } else {
        result = 'Invalid Syntax';
    }
        document.getElementById('result').innerText = result;
}



