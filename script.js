//1. Create an array of all the students in your class.
let students = ["Mike", "Michael", "Emily"];

//2. Update this array of companies to whatever you'd like.
let companies = [
  "Microsoft",
  "Google",
  "Netflix",
  "Twitter",
  "American Express",
  "Paypal",
  "Etsy",
  "LaunchDarkly",
  "Disney Streaming",
  "Oscar Health",
  "Salesforce",
  "Pandora",
  "Spotify",
  "Flexport",
  "Nike",
  "Dropbox",
  "Vogue",
  "Donors Choose",
  "Tesla",
  "NBA.com",
  "Capital One",
  "SurveyMonkey",
  "Bumble",
  "Nintendo",
  "GrubHub",
  "Sony",
  "Task Rabbit",
  "Plangrid",
  "Bevel",
  "Calendly",
  "RocketLawyer",
  "Audible",
  "New York Times",
  "Coinbase",
  "Adobe",
  "Slack",
  "Peleton",
  "AirBnb",
  "Bloomberg",
  "Entrepreneur",
];

//3. Complete the getRandomCompany function to return a random company from your array.
function getRandomCompany() {
  let randomIndex = Math.floor(Math.random() * companies.length);
  return companies[randomIndex];
}
console.log(getRandomCompany());

//4. Complete the displayStudents and displayCompanies functions. The functions should loop through the array of students and companies respectively and display them on the webpage in the appropriate divs.
displayStudents();
displayCompanies();

function displayStudents() {
  for (let student of students) {
    $(".students").append(`<p>${student}</p>`);
  }
}

function displayCompanies() {
  for (let company of companies) {
    $(".companies").append(`<p>${company}</p>`);
  }
}

//5. Review the getMatch and displayMatch functions. Once you understand the purpose of these functions, move on to completing your event handler.

function getMatch(student) {
  let company = getRandomCompany();
  let match = `${student} was hired by ${company}.`;
  return `<p class="match">${match}</p>`;
}

function displayMatch(match) {
  $(".matches").append(match);
}

//6. Complete the body of the event handler. Use map to create an array of matches using getMatch. Use forEach to display each match using displayMatch.
$("button").click(function () {
  $(".matches").empty();
  let matches = students.map(function (student) {
    return getMatch(student);
  });

  matches.forEach(function (match) {
    displayMatch(match);
  });
  $(".match-heading").text("Congratulations!");
});
