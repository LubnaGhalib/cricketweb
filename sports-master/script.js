$(document).ready(function() {
            $('#togglePassword').click(function() {
                var passwordInput = $('#password');
                var icon = $(this);

                if (passwordInput.attr('type') === 'password') {
                    passwordInput.attr('type', 'text');
                    icon.removeClass('fa-eye').addClass('fa-eye-slash');
                } else {
                    passwordInput.attr('type', 'password');
                    icon.removeClass('fa-eye-slash').addClass('fa-eye');
                }
            });
        });
$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        var messageDiv = $('#message');

        // Check if username has at least 5 characters
        if (username.length < 5) {
            messageDiv.text('Username must be at least 5 characters long').css('color', 'red');
            return;
        }

        // Check if password is strong
        var strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!strongPasswordPattern.test(password)) {
            messageDiv.text('Password must be at least 8 characters long and contain uppercase, lowercase, and a number').css('color', 'red');
            return;
        }

        // Simulate an AJAX call with a success message
        setTimeout(function() {
            messageDiv.text('Login successful').css('color', 'lightgreen');
        }, 500);
    });
});
