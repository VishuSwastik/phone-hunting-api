let queryText = '13';

function handleSearch(showAll) {
    toggleLoading(true);
    const inputField = document.getElementById("searchField");
    queryText = inputField.value;
    fetchPhones(queryText, showAll);
}

const toggleLoading = (isLoading) => {
    const loadingIndicator = document.getElementById("loading");
    if (isLoading) {
        loadingIndicator.classList.remove('hidden');
    } else {
        loadingIndicator.classList.add('hidden');
    }
}

const fetchPhones = async (queryText, showAll) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${queryText}`);
        const result = await response.json();
        const phoneList = result.data;
        renderPhones(phoneList, showAll);
    } catch (error) {
        console.error('Error fetching phones:', error);
    }
}

fetchPhones(queryText);

const renderPhones = (phoneList, showAll) => {
    const container = document.getElementById("phone-container");
    container.textContent = '';

    const showAllButton = document.getElementById("showALLBtn");
    if (phoneList.length > 12 && !showAll) {
        showAllButton.classList.remove('hidden');
    } else {
        showAllButton.classList.add('hidden');
    }

    if (!showAll) {
        phoneList = phoneList.slice(0, 12);
    }

    phoneList.forEach(phone => {
        const card = document.createElement('div');
        card.className = 'card bg-base-100 shadow-xl p-5';
        card.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phone.image}" alt="phone" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions">
                    <button onclick="openDetails('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    toggleLoading(false);
}

function showAllPhones() {
    handleSearch(true);
}

const openDetails = async (phoneId) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`);
        const result = await response.json();
        const phoneDetails = result.data;
        displayPhoneDetails(phoneDetails);
    } catch (error) {
        console.error('Error fetching phone details:', error);
    }
}

const displayPhoneDetails = (details) => {
    my_modal.showModal();
    const modelElement = document.getElementById('detailsPhoneName');
    const brandElement = document.getElementById('detailsBrand');
    const specElement = document.getElementById('detailsSpec');
    const releaseElement = document.getElementById('releaseDate');
    const imageContainer = document.getElementById('imgContainer');

    imageContainer.innerHTML = `<img src="${details.image}" alt="">`;
    modelElement.innerText = details.name;
    brandElement.innerText = `Brand: ${details.brand}`;
    const features = details.mainFeatures;

    let featureString = "";
    for (const key in features) {
        featureString += `${key}: ${features[key]} \n`;
    }
    specElement.innerText = featureString;
    releaseElement.innerText = `${details.releaseDate}`;
}