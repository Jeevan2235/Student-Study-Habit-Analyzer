// Function to handle click event on the "Home" button
function handleHomeButtonClick() {
    const username = prompt("Please enter your username:"); // Prompt user to enter username
    if (username) { // Check if username is entered
        fetchAndDisplayUserData(username); // Fetch and display user data
    } else {
        alert("Username cannot be empty!"); // Display alert if username is empty
    }
}

// Function to fetch user data from the backend based on the username
function fetchAndDisplayUserData(username) {
    // Make AJAX request to fetch user data based on the username
    fetch(`/api/user-data?username=${username}`)
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse response body as JSON
        } else {
            throw new Error('Error fetching user data'); // Throw error if request fails
        }
    })
    .then(userData => {
        // Display user data on the current page
        displayUserData(userData);
    })
    .catch(error => {
        console.error('Fetch user data error:', error);
        // Display error message to the user
    });
}

// Function to display user data on the current page
function displayUserData(userData) {
    // Display user data (study sessions, goals, recommendations) on the current page
    const userDataContainer = document.getElementById('userData');
    userDataContainer.innerHTML = ''; // Clear previous data
    
    // Display study sessions
    const studySessionsHeader = document.createElement('h2');
    studySessionsHeader.textContent = 'Study Sessions';
    userDataContainer.appendChild(studySessionsHeader);
    userData.studySessions.forEach(session => {
        const sessionElement = document.createElement('p');
        sessionElement.textContent = `${session.subject} - ${session.startTime} to ${session.endTime}`;
        userDataContainer.appendChild(sessionElement);
    });

    // Display goals
    const goalsHeader = document.createElement('h2');
    goalsHeader.textContent = 'Goals';
    userDataContainer.appendChild(goalsHeader);
    userData.goals.forEach(goal => {
        const goalElement = document.createElement('p');
        goalElement.textContent = `${goal.description} - ${goal.targetDate}`;
        userDataContainer.appendChild(goalElement);
    });

    // Display recommendations
    const recommendationsHeader = document.createElement('h2');
    recommendationsHeader.textContent = 'Recommendations';
    userDataContainer.appendChild(recommendationsHeader);
    userData.recommendations.forEach(recommendation => {
        const recommendationElement = document.createElement('p');
        recommendationElement.textContent = recommendation.description;
        userDataContainer.appendChild(recommendationElement);
    });
}

// Add event listener to the "Home" button
document.getElementById('homeButton').addEventListener('click', handleHomeButtonClick);



