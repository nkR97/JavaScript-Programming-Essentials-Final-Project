var data;


// Event listener for search button click
document.getElementById('search-button').addEventListener('click', function() {
    const userinput = document.getElementById('search-box').value.toLowerCase();

    // Clear results and stop execution if the input is empty
    if (userinput.trim() === "") {
        document.getElementsByClassName('search-result')[0].innerHTML = '';
        return;
    }

    // Fetching data from the API and initiate search
    axios.get('./travel_recommendation_api.json')
        .then(response => {
            data = response.data;
            document.getElementsByClassName('search-result')[0].innerHTML = '';
            search(userinput); // Perform the search based on user input
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

// Event listener for clear text button
document.getElementById('clear-text').addEventListener('click', function() {
    document.getElementById('search-box').value = ''; // Clear the search input
    document.getElementsByClassName('search-result')[0].innerHTML = ''; // Clear search results
    document.getElementById('search-box').focus(); // Focus back to the search box
});

// Main search function
function search(userinput) {
    // Check for specific search keywords and call respective functions
    if (userinput === "temple" || userinput === "temples") {
        searchbytemple();
    } else if (userinput === "beach" || userinput === "beaches") {
        searchbybeach();
    } else {
        searchbytext(userinput); // Search by general text input
    }
}

// Function to search by general text input
function searchbytext(userinput) {
    var found = [];

    // Filter cities based on user input
    data.countries.forEach(country => {
        const filteredCities = country.cities.filter(city => city.name.toLowerCase().includes(userinput));
        found.push(...filteredCities);
    });

    // Filter beaches based on user input
    const filteredBeaches = data.beaches.filter(beach => beach.name.toLowerCase().includes(userinput));
    found.push(...filteredBeaches);

    // Filter temples based on user input
    const filteredTemples = data.temples.filter(temple => temple.name.toLowerCase().includes(userinput));
    found.push(...filteredTemples);

    // Display filtered results
    found.forEach(inaction => {
        var searchresult = document.getElementsByClassName('search-result')[0];
        var div = document.createElement('div');
        div.className = 'result';
        
        var img = document.createElement('img');
        img.src = inaction.imageUrl;
        
        var h3 = document.createElement('h3');
        h3.textContent = inaction.name;
        
        var p = document.createElement('p');
        p.textContent = inaction.description;
        
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        
        searchresult.appendChild(div);
    });
}

// Function to search specifically for beaches
function searchbybeach() {
    data.beaches.forEach(beach => {
        var searchresult = document.getElementsByClassName('search-result')[0];
        var div = document.createElement('div');
        div.className = 'result';
        
        var img = document.createElement('img');
        img.src = beach.imageUrl;
        
        var h3 = document.createElement('h3');
        h3.textContent = beach.name;
        
        var p = document.createElement('p');
        p.textContent = beach.description;
        
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        
        searchresult.appendChild(div);
    });
}

// Function to search specifically for temples
function searchbytemple() {
    data.temples.forEach(temple => {
        var searchresult = document.getElementsByClassName('search-result')[0];
        var div = document.createElement('div');
        div.className = 'result';
        
        var img = document.createElement('img');
        img.src = temple.imageUrl;
        
        var h3 = document.createElement('h3');
        h3.textContent = temple.name;
        
        var p = document.createElement('p');
        p.textContent = temple.description;
        
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        
        searchresult.appendChild(div);
    });
}
