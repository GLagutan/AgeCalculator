let dt = document.getElementById("date")
let yr = document.getElementById("yr")

const print = () => {
    // Get the value from the date input
    const birthdate = dt.value;
    if (!birthdate) {
        alert('Please select a birthdate.');
        return;
    }

    // Convert the birthdate to a Date object
    const birthDateObj = new Date(birthdate);
    const today = new Date();

    // Calculate the difference in years
    let age = today.getFullYear() - birthDateObj.getFullYear();

    // Adjust if the birthdate has not yet occurred this year
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    // Display the result
    // document.getElementById('yr').textContent = `Your age is ${age} years old.`;
    yr.textContent = age;
}
