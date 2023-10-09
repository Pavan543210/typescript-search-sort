var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var people = [];
function displayAllPeople() {
    return people;
}
function pushPerson(name, age) {
    var newPerson = new Person(name, age);
    people.push(newPerson);
}
function popPerson() {
    if (people.length === 0) {
        setMessage("No people to pop.");
        return;
    }
    people.pop();
    setMessage("Person popped.");
}
function sortPeopleByName() {
    if (people.length === 0) {
        setMessage("No people to sort.");
        return;
    }
    people.sort(function (a, b) { return a.name.localeCompare(b.name); });
    setMessage("People sorted by name.");
}
function searchPeople(query) {
    query = query.toLowerCase();
    var searchResults = people.filter(function (person) { return person.name.toLowerCase().indexOf(query) !== -1; });
    if (searchResults.length === 0) {
        setMessage("No matching people found.");
    }
    else {
        setMessage("".concat(searchResults.length, " matching people found."));
    }
    return searchResults;
}
function setMessage(message) {
    var messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
