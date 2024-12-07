// Function to validate the user inputs
function validateInputs() {
    // Retrieve input values
    let name = document.getElementById("nameInput").value.trim();
    let zip = document.getElementById("zipInput").value.trim();
    let message = ""; // To store result message
    
    // Decision logic: Validate name
    if (!isValidName(name)) {
        message = "Error: Name should only contain letters.";
    } 
    // Decision logic: Validate zip code
    else if (!isValidZip(zip)) {
        message = "Error: Zip code should be exactly 5 digits.";
    } 
    // Valid input
    else {
        message = `Welcome, ${name.split(" ")[0]}! Your input is valid.`;
    }
    
    // Display the result
    document.getElementById("resultMessage").innerText = message;
}

// Function to check if the name is valid (letters only)
function isValidName(name) {
    // Regular expression to ensure only letters and spaces
    return /^[a-zA-Z\s]+$/.test(name);
}

// Function to check if the zip code is valid (5 digits)
function isValidZip(zip) {
    // Zip code must be exactly 5 digits
    return /^\d{5}$/.test(zip);
}
