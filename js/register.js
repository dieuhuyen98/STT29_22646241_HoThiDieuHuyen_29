$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        var username = $('#user').val().trim();
        var password = $('#pass').val().trim();
        var email = $('#email').val().trim();

        // Kiểm tra định dạng tên người dùng
        if (username.length < 3) {
            $('#userErrorMessage').text('Username must be at least 3 characters long.');
            return;
        } else {
            $('#userErrorMessage').text('');
        }

        // Kiểm tra định dạng mật khẩu
        if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            $('#passErrorMessage').text('Password must be at least 8 characters long with at least one letter and one number.');
            return;
        } else {
            $('#passErrorMessage').text('');
        }

        // Kiểm tra định dạng email
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            $('#emailErrorMessage').text('Invalid email format.');
            return;
        } else {
            $('#emailErrorMessage').text('');
        }

        // Nếu không có lỗi, gửi form
        this.submit();
    });
});





