document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const maxMessageLength = 500;

    messageInput.addEventListener('input', function() {
        if (messageInput.value.length > maxMessageLength) {
            messageInput.value = messageInput.value.slice(0, maxMessageLength);
        }
    });

    form.addEventListener('submit', function(e) {
        let valid = true;
        phoneError.textContent = '';
        messageError.textContent = '';
        // Phone validation: 10 digits only
        const phoneVal = phoneInput.value.replace(/\D/g, '');
        if (phoneVal.length !== 10) {
            phoneError.textContent = 'Please enter a valid 10-digit phone number.';
            valid = false;
        }
        // Message length validation
        if (messageInput.value.length > maxMessageLength) {
            messageError.textContent = 'Message must be 500 characters or less.';
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    });
});
