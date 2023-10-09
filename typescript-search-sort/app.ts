
class Person {
  constructor(public name: string, public age: number) {}
}

let people: Person[] = [];

function displayAllPeople(): Person[] {
  return people;
}

function pushPerson(name: string, age: number): void {
  const newPerson = new Person(name, age);
  people.push(newPerson);
}

function popPerson(): void {
  if (people.length === 0) {
    setMessage("No people to pop.");
    return;
  }
  people.pop();
  setMessage("Person popped.");
}

function sortPeopleByName(): void {
  if (people.length === 0) {
    setMessage("No people to sort.");
    return;
  }
  people.sort((a, b) => a.name.localeCompare(b.name));
  setMessage("People sorted by name.");
}

function searchPeople(query: string): Person[] {
  query = query.toLowerCase();
  const searchResults = people.filter((person) => person.name.toLowerCase().indexOf(query) !== -1);

  if (searchResults.length === 0) {
    setMessage("No matching people found.");
  } else {
    setMessage(`${searchResults.length} matching people found.`);
  }

  return searchResults;
}

function setMessage(message: string): void {
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = message;
  }
}
