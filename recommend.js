var data;

document.getElementById('search-button').addEventListener('click', function() {
    const userinput = document.getElementById('search-box').value.toLowerCase();
    axios.get('./travel_recommendation_api.json')
        .then(response => {
            data = response.data;
            search(userinput);
        })
        .catch(error => console.error('Error fetching JSON:', error));
});


function search(userinput) {
    
    
    if (userinput === "temple" || userinput === "temples") {
        //searchbytemple();
        console.log("temp")
    }
    else if (userinput === "beach" || userinput === "beaches") {
        //searchbybeach();
        console.log("beach")
    }
    else {
        searchbytext(userinput);
    }
}

function searchbytext (userinput) {
    // Initialize found as an empty array
var found = [];

// Filter countries and cities based on user input
data.countries.forEach(country => {
    const filteredCities = country.cities.filter(city => city.name.toLowerCase().includes(userinput));
    found.push(...filteredCities); // Add the filtered cities to found
});

// Filter beaches based on user input and add them to found
const filteredBeaches = data.beaches.filter(beach => beach.name.toLowerCase().includes(userinput));
found.push(...filteredBeaches); // Add the filtered beaches to found

const filteredTemples = data.temples.filter(temple => temple.name.toLowerCase().includes(userinput));
found.push(...filteredTemples);
console.log(found); // Logs the filtered countries with cities and beaches 
}



