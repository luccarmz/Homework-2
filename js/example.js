var listItems = document.getElementsByTagName('li');                   // All <li> elements

// Assuming listItems is a NodeList or array-like object representing the <li> elements
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>';  // Content with total items


// Part 1: Check items and change class if necessary
for (var i = 0; i < listItems.length; i++) {
    var itemText = listItems[i].textContent.toLowerCase(); // Get text content of each item

    // Check if item is "fresh figs", "kale", or "honey"
    if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
        listItems[i].className = 'cool'; // Change class to "cool" if match is found
    }
}

// Part 2: Update heading with the number of items
heading.innerHTML = newHeading;