Overview
This project is a web application designed to display phone details and allow users to search for specific phones. The application features a clean user interface and implements several functionalities, including search, detailed views, and a "Show All" option. The following README provides an overview of the code structure and functionality implemented in the JavaScript file.


Features
Search Functionality: Users can search for phones by entering a query in the search field.

Loading Indicator: A loading spinner is displayed while fetching data from the API.

Display Phone Cards: A list of phone cards is rendered based on the search results.

Show All Phones: A button allows users to view all available phones if there are more than 12 results.

Detailed View: Users can click on a phone card to view detailed specifications in a modal.
Code Structure

The JavaScript file includes several key functions that work together to provide the desired functionality:

handleSearch(showAll): Initiates the search process based on user input.

toggleLoading(isLoading): Displays or hides the loading indicator.

fetchPhones(queryText, showAll): Fetches phone data from the API based on the search query.

renderPhones(phoneList, showAll): Renders the phone cards in the user interface.

showAllPhones(): Handles the display of all phones when the "Show All" button is clicked.

openDetails(phoneId): Fetches and displays detailed information about a specific phone.

displayPhoneDetails(details): Updates the modal with detailed information about the selected phone.
Functionality

1. Search Functionality
The handleSearch function retrieves the user's input from the search field and calls fetchPhones to get phone data based on the query. It also toggles the loading indicator to inform the user that a search is in progress.

2. Loading Indicator
The toggleLoading function controls the visibility of the loading indicator. It adds or removes the 'hidden' class based on whether data is being fetched.

3. Fetching Phone Data
The fetchPhones function makes an asynchronous request to the API to retrieve phone data. It processes the response and calls renderPhones to display the results. Error handling is included to log any issues that arise during the fetch.

4. Rendering Phone Cards
The renderPhones function creates a card for each phone in the list. It checks if there are more than 12 results and displays the "Show All" button accordingly. Each card includes a button that, when clicked, opens a detailed view of the phone.

5. Detailed View
The openDetails function fetches detailed information about a specific phone using its unique identifier (slug). The details are displayed in a modal through the displayPhoneDetails function, which updates the modal's content with the phone's specifications.

6. Show All Phones
The showAllPhones function is called when the "Show All" button is clicked. It sets the showAll parameter to true and calls handleSearch to display all available phones.


Conclusion
This Phone Details Application effectively demonstrates the use of JavaScript to create an interactive web application. By leveraging API calls, dynamic DOM manipulation, and user-friendly design, users can easily search for and view detailed information about various phones. The implementation showcases essential JavaScript functionalities and provides a solid foundation for further enhancements and features.