//@include "aexios.js"

// Example of a GET request
try {
  var getResponse = aexios.get(
    "https://jsonplaceholder.typicode.com/posts",
    { userId: 1 }, // Query parameters
    { Authorization: "Bearer your_token_here" } // Optional headers
  );

  $.writeln("GET Request Successful:");
  $.writeln(JSON.stringify(getResponse, null, 2));
} catch (e) {
  $.writeln("Error in GET request: " + e.message);
}

// Example of a POST request
try {
  var postResponse = aexios.post(
    "https://jsonplaceholder.typicode.com/posts",
    { title: "foo", body: "bar", userId: 1 }, // Request body
    { Authorization: "Bearer your_token_here" } // Optional headers
  );

  $.writeln("POST Request Successful:");
  $.writeln(JSON.stringify(postResponse, null, 2));
} catch (e) {
  $.writeln("Error in POST request: " + e.message);
} 
