
//Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    var arr= result.filter(ele=>ele.region === "Asia continent")
    console.log(arr);
}

//Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    var arr= result.filter(ele=>ele.population<200000)
    console.log(arr);
}


//Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    result.forEach(function (country) {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital[0]);
        console.log("Flag:", country.flags.svg);
    });
};

//Print the total population of countries using reduce function
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => {
      if (country.population) {
        return accumulator + country.population;
      } else {
        return accumulator;
      }
    }, 0);

    console.log('Total Population of Countries:', totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

//Print the country that uses US dollars as currency.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithUSD = data.filter(country => {
      return country.currencies && country.currencies.hasOwnProperty('USD');
    });
    if (countriesWithUSD.length > 0) {
      console.log('Countries using US Dollars as currency:', countriesWithUSD.map(country => country.name.common));
    } else {
      console.log('No countries found that use US Dollars as currency.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));


