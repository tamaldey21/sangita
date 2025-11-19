document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Predefined credentials (in a real app, this would be handled securely on a server)
    const validCredentials = {
        username: 'sangita',
        password: 'mylove'
    };
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        // Clear previous messages
        errorMessage.textContent = '';
        successMessage.textContent = '';
        
        // Validate credentials
        if (username === validCredentials.username && password === validCredentials.password) {
            // Successful login
            successMessage.textContent = 'Login successful! Welcome, Sangita! ❤️';
            
            // Add a special effect
            document.querySelector('.login-container').style.boxShadow = '0 0 30px rgba(46, 204, 113, 0.8)';
            
            // Redirect to gallery after a delay
            setTimeout(function() {
                window.location.href = 'gallery.html';
            }, 2000);
        } else {
            // Failed login
            errorMessage.textContent = 'Invalid username or password. Please try again.';
            
            // Shake animation for error
            const container = document.querySelector('.login-container');
            container.style.animation = 'shake 0.5s';
            
            // Remove animation after it completes
            setTimeout(() => {
                container.style.animation = '';
            }, 500);
        }
    });
    
    // Add shake animation to CSS if not already present
    if (!document.getElementById('shake-animation')) {
        const style = document.createElement('style');
        style.id = 'shake-animation';
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-10px); }
                40%, 80% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }
});