// codepen https://codepen.io/gcziprusz/pen/KKWojmv
// Search Autocomplete
// We start off with registering an event handler to both change and keyup event, where we pass the local value on the a method that queries the remote service.

// Once the results are back, we inject them into the results list:

    // Get HTML elements
    const searchInputElement = document.querySelector('.search-input');
    const resultsElement = document.querySelector('.results');

    // Convert search results into UI suggestions
    function showSearchResults(searchQuery) {
        searchData(searchQuery).then(results => {
            const html = results.map(movie => `
      <li>
        <span class="title">${movie.title}</span>
        <span class="rating">${movie.rating}</span>
      </li>
    `);

            resultsElement.innerHTML = html.join('');
        });
    }

    // Pass 
    function handleChange() {
        return showSearchResults(this.value);
    }

    // Register for both events
    searchInputElement.addEventListener('change', handleChange);
    searchInputElement.addEventListener('keyup', handleChange);
// Next, we’ll want to optimize by reducing the number of requests to the external service. We’ll start with reducing repeating requests, by using memoization:

    // Adding this right before the handleChange method
    function memoize(func) {
        const cache = new Map();
        return function(...args) {
            // Use first argument as key
            const key = args[0];
            if (cache.has(key)) {
                console.log('cache hit');
                return cache.get(key);
            }
            console.log('cache miss');
            const val = func.apply(this, arguments);
            cache.set(key, val);
            return val;
        };
    }

    // Apply the memoization to the search results method
    showSearchResults = memoize(showSearchResults);
// The next optimization would be to handle debouncing, making sure we only begin searching once the user is done typing. Let’s assume that 200ms is a good enough proxy:

 
    // Adding this right after applying memoization
    function debounce(fn, time) {
        let timeout;
        return function() {
            const functionCall = () => {
                console.log('calling');
                return fn.apply(this, arguments);
            };
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
        }
    }
    
    // Apply the debouncing to the search results method
    showSearchResults = debounce(showSearchResults, 200);
// Finally, we’ll also apply some regex to identify and highlight the search result within the query:


    function showSearchResults(searchQuery) {
        const regex = new RegExp(searchQuery, 'gi');
        searchData(searchQuery).then(results => {
            const html = results.map(movie => {
                const title = movie.title.replace(regex, `<span class="query-highlight">${searchQuery}</span>`);
                return `
      <li>
        <span class="title">${title}</span>
        <span class="rating">${movie.rating}</span>
      </li>
    `;
            });

            resultsElement.innerHTML = html.join('');
        });
    }



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search Autocomplete</title>
    <!-- Included some basic styling, change at will -->
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/prampcontent/3ea04cbd0f61a798e96afbe5d31ec2f9/raw/e879e32222b543b29a168daa089e2f9f28cf9eb2/autocomplete.css">
</head>
<body>
<form class="search-form">
    <input type="text" class="search-input" placeholder="Start typing a movie title...">
    <ul class="results"></ul>
</form>
<!-- Helper code to provide a search API for mock data -->
<script src="https://cdn.rawgit.com/prampcontent/180077452f9279073cab1035f60d30cf/raw/9cbf891a80bad9ad09c6261ef9578a65502922cc/search_helper.js"></script>
<script>
    /*-------------------------------
    *
    * Write your JavaScript code here.
    *
    * The mocked search data is available using the searchData async method, e.g:
    *   searchData("QUERY").then(results => ...)
    * ------------------------------*/
  
    // listen to the key event 
    // debounce that function 
    //  call searchData (inputs) 
    // ["",""]
    //  for each in result create element li's 
    //  append to .results
   
    let debouncedSearch = debounce(search,30);
   
    function debounce(fn, delay){
      //a ab abc abcd      abcde
      //^.......delay .... ^      
      
      let wait;
   
      let id = setTimeout(function(){
        fn.apply(this,arguments);
           clearTimeout(id);
      },delay);
    }
  
    let results = document.querySelector(".results");
  
    function search(inputString){
       return searchData(inputString)
         .then(processResult)
         .catch(e => results.appendChild(document.createElement("li").innerText=`Data didnt load ${e}`));       
    }
    function processResult(results){
      return results
        .map(res => document.createElement("li").innerText=res)
        .reduce(li=> results.appendChild(li));
        // batch update DOM api 
    }
    
  
    document.addEventListener("keydown", debouncedSearch);
</script>
</body>
</html>

 // Get HTML elements
    const searchInputElement = document.querySelector('.search-input');
    const resultsElement = document.querySelector('.results');

    // Convert search results into UI suggestions
    function showSearchResults(searchQuery) {
        searchData(searchQuery).then(results => {
            const html = results.map(movie => `
      <li>
        <span class="title">${movie.title}</span>
        <span class="rating">${movie.rating}</span>
      </li>
    `);

            resultsElement.innerHTML = html.join('');
        });
    }

    // Pass 
    function handleChange() {
        return showSearchResults(this.value);
    }

    // Register for both events
    searchInputElement.addEventListener('change', handleChange);
    searchInputElement.addEventListener('keyup', handleChange);
 // Adding this right before the handleChange method
    function memoize(func) {
        const cache = new Map();
        return function(...args) {
            // Use first argument as key
            const key = args[0];
            if (cache.has(key)) {
                console.log('cache hit');
                return cache.get(key);
            }
            console.log('cache miss');
            const val = func.apply(this, arguments);
            cache.set(key, val);
            return val;
        };
    }

    // Apply the memoization to the search results method
    showSearchResults = memoize(showSearchResults);
