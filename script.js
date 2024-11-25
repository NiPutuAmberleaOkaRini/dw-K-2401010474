 document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai dari input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    console.log(document.getElementById("signup-form")); 

    // Validasi form
    if (name === "" || email === "" || phonenumber === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // Validasi email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }
    
    // Validasi phone number
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonenumber.match(phonePattern)) {
        errorMessage.textContent = "Please enter a valid phone number (10-15 digits).";
        return;
    }

    // Validasi password
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // Jika semua validasi lulus, form dapat disubmit 
    errorMessage.textContent = ""; 
    alert("Sign Up Successful! Welcome " + name);
    document.getElementById("signup-form").reset(); 
})