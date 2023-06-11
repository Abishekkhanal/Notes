function validateForm(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in all fields.";
    }
    
    else if (username !== "abishek" || password !== "10") 
    {
      errorMessage.textContent = "Invalid username or password.";
    }
    
    else {
      document.getElementById("login-form").reset();
      errorMessage.textContent = "";
  
      window.open('notes.html', '_blank');
    }
  }
  
  