// Get the stored JSON string from sessionStorage or localStorage
const jsonData = sessionStorage.getItem('authData');
// const jsonData = localStorage.getItem('authData');

// Parse the JSON string to get the data object
const data = JSON.parse(jsonData);

// Get the image URL and partner name from the data object
const imageUrl = data.imageUrl;
const partnerName = data.partnerName;

// Set the image source and partner name
const partnerImage = document.getElementById('partnerImage');
const partnerNameElement = document.getElementById('partnerName');
partnerImage.src = imageUrl;
partnerNameElement.textContent = partnerName;

// Get the form element
const form = document.querySelector('form');
// Get the email and password input elements
const emailInput = document.getElementById('form2Example1');
const passwordInput = document.getElementById('form2Example2');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Check if both email and password inputs are not empty
    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        // Show the MFA popup modal
        const mfaModal = new bootstrap.Modal(document.getElementById('mfaModal'));
        mfaModal.show();
    } else {
        // If any of the inputs is empty, show an error message or perform other actions
        alert('Please enter both email and password.');
        return;
    }
});

// Handle MFA verification
document.getElementById('mfaVerifyBtn').addEventListener('click', function () {
    const verificationCode = document.getElementById('verificationCode').value;

    // Perform MFA verification, e.g., send the verification code to a server-side API

    // Simulating MFA verification with a hardcoded code "123456"
    if (verificationCode === '123456') {

        const userId = generateUUID()
        const secretKey = 'LoginIDIssuerGateway';
        const expiresIn = 3600; // 1 hour
        const token = generateJWT(userId,emailInput.value, secretKey, expiresIn);
        console.log(token);

        // Store the token in sessionStorage or localStorage
        sessionStorage.setItem('token', token);
        // localStorage.setItem('token', token);

        // Redirect the user to the new page
        window.location.href = 'home.html';
    } else {
        // MFA code is incorrect, display an error message or perform other actions
        alert('Invalid verification code.');
    }
});

function checkInputValidity(input) {
    // Check if the input is empty or contains only whitespace
    if (input.value.trim() === '') {
        input.classList.add('is-invalid');
        return false;
    } else {
        input.classList.remove('is-invalid');
        return true;
    }
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function base64UrlEncode(str) {
    let base64 = btoa(str);
    base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return base64;
}

function generateJWT(userId,username, secretKey, expiresIn) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };

    const payload = {
        userId: userId,
        username: username,
        exp: Math.floor(Date.now() / 1000) + expiresIn
    };

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedPayload = base64UrlEncode(JSON.stringify(payload));

    const signature = sha256(encodedHeader + '.' + encodedPayload + secretKey);
    const encodedSignature = base64UrlEncode(signature);

    const jwt = encodedHeader + '.' + encodedPayload + '.' + encodedSignature;
    return jwt;
}

// Calculate SHA-256 hash
async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

