// Step 1: Define the asynchronous function
async function fetchUserData() {

  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container where data will be displayed
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch the data asynchronously
    const response = await fetch(apiUrl);

    // Convert the response to JSON format
    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = '';

    // Step 6: Create and append a list of users
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; // Display each user's name
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 7: Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 8: Invoke fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
