// Get the stored token from sessionStorage or localStorage
const token = sessionStorage.getItem('token');
// const token = localStorage.getItem('token');

const userInfoElement = document.getElementById('userInfo');

// Check if the token exists
if (token) {
    // Decode the token to get the user information
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userwelcome = document.getElementById('welcome');


    userwelcome.innerHTML = `
    <h4><strong>Welcome Back</strong></h4>
  `
} else {
    // Redirect the user to the login page if the token is not found
    window.location.href = 'index.html';
}

// Logout button event listener
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', function () {
    // Remove the token from sessionStorage or localStorage
    sessionStorage.removeItem('token');
    // localStorage.removeItem('token');

    // Redirect the user to the login page
    window.location.href = 'index.html';
});

function openModal(dataType) {
    // Construct the URL for the provider information page with the data type parameter
    var url = "Dataprovider.html?Credential=" + encodeURIComponent(dataType);

    // Open the provider information page in a new window or tab
    window.location.href = url
}