// Add all scripts to the JS folder
function initialize() {
    cities(); // Call cities() to create and append the table
}

function cities() {

	//Array with cities and their respective populations
    var cityPop = [
        { city: 'Madison', population: 233209 },
        { city: 'Milwaukee', population: 594833 },
        { city: 'Green Bay', population: 104057 },
        { city: 'Superior', population: 27244 }
    ];

    // Create the table
    var table = document.createElement("table");

    // Create header row and add to table
    var headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>City</th><th>Population</th><th>City Size</th>";
    table.appendChild(headerRow);

    // Create table rows
    cityPop.forEach(city => {
        var row = document.createElement("tr");
        
        // Determine city size
        let citySize;
        if (city.population < 100000) {
            citySize = 'Small';
        } else if (city.population < 500000) {
            citySize = 'Medium';
        } else {
            citySize = 'Large';
        }

        // Add table data
        row.innerHTML = `<td>${city.city}</td><td>${city.population}</td><td>${citySize}</td>`;
        table.appendChild(row);
    });

    // Append the table to the body
    document.body.appendChild(table);

	// Call addEvents after the table is added to the DOM
    addEvents(); 
}

//Adds mouse hover and click functionality to the table
function addEvents() {

	//Selects table from DOM
    let table = document.querySelector("table");

	//Changes the color of the text of the table whenever a mouse is hovered over a new table entry
    table.addEventListener("mouseover", function () {
        let color = "rgb(";
        for (let i = 0; i < 3; i++) {
            let random = Math.round(Math.random() * 255);
            color += random + (i < 2 ? "," : ")");
        }
		//Color changes on a randomly generated rgb value, like (210,45,67)
        table.style.color = color;
    });

	//Creates an alert when the table is clicked
    function clickme() {
        alert('Hey, you clicked me!');
    }

    table.addEventListener("click", clickme);
}
//Run the function initialize() once the window loads
window.onload = initialize();


//---------------------------------------
//Activity 4


//Debugging AJAX
function debugAjax(){
	//Retrieves data from MegaCities.geojson
	fetch('data/MegaCities.geojson')
		.then(function(response){
            //Converts data to a useable form
			return response.json();
		})
        //Send retrieved data to a callback function
        .then(debugCallback)
};

//Callback function
function debugCallback(response){
    //Logs geojson object to the console
    console.log(response)
    //Prints out geojson object to the html page
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: <br>' + JSON.stringify(response))
};


window.onload = debugAjax();