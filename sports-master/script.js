$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let username = $('#username').val();
        let password = $('#password').val();

        $.ajax({
            url: 'login.php', // URL to your PHP login script
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if (response === 'success') {
                    window.location.href = 'dashboard.html'; // Redirect on successful login
                } else {
                    $('#message').text('Invalid username or password.');
                }
            },
            error: function(xhr, status, error) {
                $('#message').text('An error occurred: ' + error);
            }
        });
    });
});
