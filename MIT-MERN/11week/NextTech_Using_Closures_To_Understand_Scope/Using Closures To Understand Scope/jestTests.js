import { defineClosure } from './closure.js';
var myBook = defineClosure();

describe('Testing defineClosure func', () => {
    test('myBook should be a object', () => {
        expect(typeof myBook).toEqual('object')
    })

    // first test bookName direct access and getter function with the following 3 tests
    test('Testing direct access of bookName variable returns undefined', () => {
        expect(myBook.bookName).toEqual(undefined)
    })

    test('getBookTitle should be a function', () => {
        expect(typeof myBook.getBookTitle).toEqual('function')
    })

    test('Testing getBookTitle accessor function to return default value', () => {
        expect(myBook.getBookTitle()).toEqual("The Count of Monte Cristo")
    })

    // next test direct access of currentPage number, test turnPage function, and then verify pageNumber was iterated
    test('Testing direct access of currentPageNumber variable returns undefined', () => {
        expect(myBook.currentPageNumber).toEqual(undefined)
    })

    test('getBookTitle should be a function', () => {
        expect(typeof myBook.getPage).toEqual('function')
    })

    test('turnPage should be a function', () => {
        expect(typeof myBook.turnPage).toEqual('function')
    })

    // call the turnPage function to edit the closure variable which preserves its own scope chain
    myBook.turnPage();

    test('Testing getPage accessor function to return default value + 1 as we called turnPage before this', () => {
        expect(myBook.getPage()).toEqual(874)
    })

})

