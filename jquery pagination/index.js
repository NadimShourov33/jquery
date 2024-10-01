var allData = [];  // Global variable to store all data
var itemsPerPage = 10;  // Number of items to display per page

// Step 1: Fetch all data from the API
function fetchData() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function(data) {
            allData = data.slice(0, 5000);  // Limit to 5000 items
            displayPage(1);  // Display the first page
        },
        error: function(error) {
            console.log("Error fetching data", error);
        }
    });
}

// Step 2: Display data for the selected page
function displayPage(pageNumber) {
    var startIndex = (pageNumber - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var paginatedData = allData.slice(startIndex, endIndex);

    var container = $('#data-container');
    container.empty();  // Clear previous data

    paginatedData.forEach(function(item) {
        container.append('<div><img src="' + item.thumbnailUrl + '" alt="' + item.title + '"><p>' + item.title + '</p></div>');
    });

    setupPaginationControls(pageNumber);  // Update pagination controls
}

// Step 3: Setup pagination controls with a limit of 10 buttons
function setupPaginationControls(currentPage) {
    var totalPages = Math.ceil(allData.length / itemsPerPage);
    var paginationControls = $('#pagination-controls');
    paginationControls.empty();

    var startPage = Math.max(1, currentPage - 5);
    var endPage = Math.min(totalPages, startPage + 9);

    // Add "Previous" button
    if (currentPage > 1) {
        var prevButton = $('<button>Previous</button>');
        prevButton.click(function() {
            displayPage(currentPage - 1);
        });
        paginationControls.append(prevButton);
    }

    // Display only 10 pagination buttons
    for (var i = startPage; i <= endPage; i++) {
        var button = $('<button>' + i + '</button>');
        if (i === currentPage) {
            button.attr('disabled', true);
        }
        button.click((function(page) {
            return function() {
                displayPage(page);
            };
        })(i));

        paginationControls.append(button);
    }

    // Add "Next" button
    if (currentPage < totalPages) {
        var nextButton = $('<button>Next</button>');
        nextButton.click(function() {
            displayPage(currentPage + 1);
        });
        paginationControls.append(nextButton);
    }
}

// Initial data fetch when the page loads
$(document).ready(function() {
    fetchData();
});

