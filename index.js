
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('accountForm').addEventListener('submit', (e) => {
            e.preventDefault();
    
            let isValid = true; 
    
        
            const name = document.getElementById('name').value.trim();
            if (name.length < 3 || name.length > 50) {
                alert("Name must be between 3 and 50 characters.");
                isValid = false;
            }
    
        
            const email = document.getElementById('email').value.trim();
            if (email === "") {
                alert("Email is required.");
                isValid = false;
            }
    
        
            const phone = document.getElementById('phone').value.trim();
            if (phone.length < 10 || phone.length > 14 || isNaN(phone)) {
                alert("Phone must be a number and between 10 and 14 digits.");
                isValid = false;
            }
    
            
            const age = parseInt(document.getElementById('age').value.trim());
            if (isNaN(age) || age < 18 || age > 120) {
                alert("Age must be a number between 18 and 120.");
                isValid = false;
            }
    
        
            const gender = document.getElementById('gender').value.trim();
            if (gender.length < 4 || gender.length > 15) {
                alert("Gender must be between 4 and 15 characters.");
                isValid = false;
            }
    
            
            if (isValid) {
                alert("Form submitted successfully!");
            }
        });
    });
