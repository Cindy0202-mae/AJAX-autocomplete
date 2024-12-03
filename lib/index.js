// TODO: Autocomplete the input with AJAX calls.

// find the element and get the value
const searchInput = document.querySelector('#search');
const suggestionsList = document.querySelector('#results');

// function to display suggestions
const displaySuggestions = (suggestions) => {
  suggestionsList.innerHTML = '';
  suggestions.forEach((suggestion) => {
    const li = document.createElement('li');
    li.textContent = suggestion;
    li.addEventListener('click', () => {
      searchInput.value = suggestion;
      suggestionsList.innerHTML = '';
    });
    suggestionsList.appendChild(li);
  });
};

// function to fetch and call display function suggestions
const fetchSuggestions = (charType) => {
  // set URL
  const url = `https://dictionary.lewagon.com/autocomplete/${charType}`;
  // Make the HTTP request using fetch()
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displaySuggestions(data.words);
    });
};

// after getting the request response call the event listener
searchInput.addEventListener('input', (event) => {
  const charType = event.currentTarget.value;
  if (charType.length > 0) {
    fetchSuggestions(charType);
  } else {
    suggestionsList.innerHTML = '';
  }
});
