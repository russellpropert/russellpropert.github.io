/*
Instructions:
Your task is to complete the described closure object which allows the creation of a book object with a name and current Page.
Additionally the BookObject will return an inner object with functions that will allow the code outside BookObject to access and modify BookObject Scoped Variables.
*/


function defineClosure() {
    function BookObject(name = "The Count of Monte Cristo", currentPage = 873) {
        console.log(`\n\nCreating new Book Object with name: ${name} and currentPage: ${currentPage}`);
        var currentPageNumber = currentPage;
        var bookName = name;

        //construct and return an object with the three methods defined below.
        // Your task is to fill in these methods according to the comments in order to to allow outside functions to access            // and change your BookObject variables ONLY using these gateway functions
        //All methods have access to currentPageNumber and bookName, but those variables cannot be
        //directly accessed outside of this function.
        return {
            "getBookTitle": function () {
                // your code here to return the bookName
                return bookName;
            },
            "turnPage": function () {
                // your code here to iterate the currentPageNumber
                currentPageNumber++;
            },
            "getPage": function () {
                //your code here to return the currentPageNumber
                return currentPageNumber;
            }
        };
    }

    var myBook = BookObject('Reckless', 28);
    console.log(`The book name is: ${myBook.getBookTitle()}`);
    console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
    console.log(`Initial Page Number is: ${myBook.getPage()}`);
    myBook.turnPage();
    console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

    // creating a new instance of myBook, this resets all inner variables as its completely different object and scope
    myBook = BookObject();
    console.log(`The book name is: ${myBook.getBookTitle()}`);
    console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
    console.log(`Initial Page Number is: ${myBook.getPage()}`);
    myBook.turnPage();
    console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

    return BookObject();
}


// Don't change this code 
window.onload = () => {
    defineClosure();
};

//don't change this code
if (typeof module !== 'undefined') {
    module.exports = { defineClosure };
}
