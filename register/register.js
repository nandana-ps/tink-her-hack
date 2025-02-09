function checkAge() {
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    const personalDetailsDiv = document.getElementById('personalDetails');
  
    if (age < 18) {
      alert("Not Applicable");
    } else if (age >= 18 && age <= 55) {
      // Redirect to youth registration page
      window.location.href = "youth.html"; 
    } else { 
      // Redirect to elderly registration page
      window.location.href = "elderly.html"; 
    }
  }