function validateForm(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in all fields.";
      
    } else if (username !== "abishek" || password !== "10") {
      errorMessage.textContent = "Invalid username or password.";
    } else {
      // Successful login
    //   alert("Login successful!");
      document.getElementById("login-form").reset();
      errorMessage.textContent = "";
  
      // Redirect to the landing page
      window.open('notes.html', '_blank');
    }
  }
  
  