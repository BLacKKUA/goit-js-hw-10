import '../css/styles.css';
import { fetchCountries } from "./fetchCountries";
import debounce from "lodash.debounce";

const DEBOUNCE_DELAY = 300;

const refs = {
   inputValue: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfo: document.querySelector('.country-info')
}


refs.inputValue.addEventListener('input', debounce(event => {
   const country = refs.inputValue.value.trim()
   if (country.length >= 2) {
      fetchCountries(country).then(country => {
         console.log(country);
         refs.countryList.innerHTML = buildListCountry(country)
      })
   } else {
      refs.countryList.innerHTML = ""
      return;
   }
},DEBOUNCE_DELAY))

function buildListCountry(country) { 
   let templatesCountry = "";
   if(country.length > 1){
   for (let key of country) {
      templatesCountry += `<li class="styleForCoutryList"><img src="${key.flags.svg}" width
="36px" height="30px">${key.name.official}</li>`
   }
      return templatesCountry
   } else {
      templatesCountry = `<li class="styleForCoutryList"><img src="${country[0].flags.svg}" width
="36px" height="30px">${country[0].name.official}</li>
<p>Capital: ${country[0].capital}</p>
<p>Population: ${country[0].population}</p>
<p>Languages: ${country[0].languages}</p>` // need think about, how to get values from languages
   }
   return templatesCountry
}