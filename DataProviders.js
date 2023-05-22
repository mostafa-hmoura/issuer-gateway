// Get the stored token from sessionStorage or localStorage
const token = sessionStorage.getItem('token');

// Check if the token exists
if (token) {
    
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



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dataType = urlParams.get('Credential');

// Print the data type in the title element
var titleElement = document.querySelector(".title h5");
titleElement.textContent = "Credential Providers for " + dataType + " :";

// Define the list of providers for each data type
var providers = {
    "Social Insurance Number (SIN)": [
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: 123456789 },
        { name: "Royal Bank of Canada", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: 123456 },
        { name: "Ministry of Transportation", image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQAWGQMKqZCclCN_40EoD8p-pV17k5um56ENbhRjwy8oBKjFnSC" },
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: 123456 },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: 123456 },
        { name: "Tangerine Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/tang.png", sin: 123456 }
    ],
    "Date of Birth": [
        { name: "Ministry of Transportation", image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQAWGQMKqZCclCN_40EoD8p-pV17k5um56ENbhRjwy8oBKjFnSC", sin: "18/07/1998" },
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: "18/07/1998" },
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "18/07/1998" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: "18/07/1998" },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: "18/07/1998" },
        { name: "Tangerine Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/tang.png", sin: "18/07/1998" }
    ],
    "Credit Score": [
        { name: "Equifax", image: "https://assets.equifax.com/global/images/logos/equifax.svg", sin: 300 },
        { name: "TransUnion", image: "https://www.transunion.com/content/dam/transunion/global/common/logos/logo.svg", sin: 300 },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: 300 }
    ],
    "Bank Balance": [
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "300 USD" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: 300 },
        { name: "National Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/nbc.png", sin: 300 },
        { name: "ATB Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/atb.png", sin: 300 },
        { name: "Scotia Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/bns.png", sin: 300 },
        { name: "TD Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/td.png", sin: 300 },
        { name: "BMO Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/bmo.png", sin: 300 },
        { name: "Caisse Alliance", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cais.png", sin: 300 },
    ],
    "Phone Number": [
        { name: "Ministry of Transportation", image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQAWGQMKqZCclCN_40EoD8p-pV17k5um56ENbhRjwy8oBKjFnSC", sin: "+1611010114" },
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: "18/07/1998" },
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "18/07/1998" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: "18/07/1998" },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: "18/07/1998" },
    ],
    "Address": [
        { name: "Ministry of Transportation", image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQAWGQMKqZCclCN_40EoD8p-pV17k5um56ENbhRjwy8oBKjFnSC", sin: "1165 Embro St, Beachville" },
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: "18/07/1998" },
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "18/07/1998" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: "18/07/1998" },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: "18/07/1998" },
    ],
    "Province": [
        { name: "Ministry of Transportation", image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQAWGQMKqZCclCN_40EoD8p-pV17k5um56ENbhRjwy8oBKjFnSC", sin: "Ontario" },
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: "18/07/1998" },
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "18/07/1998" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: "18/07/1998" },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: "18/07/1998" },
    ],
    "Country": [
        { name: "Ministry of Transportation", image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQAWGQMKqZCclCN_40EoD8p-pV17k5um56ENbhRjwy8oBKjFnSC", sin: "CANADA" },
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: "18/07/1998" },
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "18/07/1998" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: "18/07/1998" },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: "18/07/1998" },
    ],
    "Email": [
        { name: "Bell Canada", image: "https://logos-download.com/wp-content/uploads/2016/04/Bell_logo-700x420.png", sin: "canada@gmail.com" },
        { name: "CIBC Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/cibc.png", sin: "18/07/1998" },
        { name: "Royal Bank", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/rbc.png", sin: "18/07/1998" },
        { name: "Affinity Credit Union", image: "https://content-gc.signin.interac-id.ca/cbs/images/en/affinity.png", sin: "18/07/1998" },
    ],
    
    // Add more data types and providers as needed
};

// Find the container element to display the provider information
var container = document.getElementById("card");

// Get the providers for the selected data type
var selectedProviders = providers[dataType];
console.log(dataType,selectedProviders)

// Loop through the selected providers and display their information
selectedProviders.forEach(function (provider) {
    // Create a card element for each provider
    var card = document.createElement("div");
    card.className = "col-6 col-md-3 mt-2";

    // Create the card layout
    var cardLayout = `
        <div class="card h-100">
            <img src="${provider.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
                <h6 class="card-title">${provider.name}</h6>
                <p class="card-text"></p>
                <button onclick="openModal('${dataType}', '${providers[`${dataType}`][0].sin}','${provider.name}')" class="btn btn-custom">Pull your ${dataType}</button>
            </div>
        </div>
    `;

    // Set the card layout as the innerHTML of the card element
    card.innerHTML = cardLayout;

    // Append the card to the container
    container.appendChild(card);
});

function openModal(dataType, sinData, providerName) {

    var titleElement = document.querySelector(".modal-header h5");
    titleElement.textContent = dataType;

    // Update the modal content with the SIN data
    var modalBody = document.getElementById("sinText");
    var modalBody2 = document.getElementById("sinText2");
    modalBody.innerHTML = `Your ${dataType} is : <b id="value">${sinData}</b>`;
    modalBody2.innerHTML = `From <b id="value2">${providerName}</b>.`;

    // Show the modal
    var modal = new bootstrap.Modal(document.getElementById("sinModal"));
    modal.show();
}



