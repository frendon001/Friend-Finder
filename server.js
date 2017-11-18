// ==============================================================================
// NPM Dependancies
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");


// ==============================================================================
// EXPRESS Setup
// ==============================================================================

// Creating an "express" server
var app = express();

// Sets Port
var PORT = process.env.PORT || 8080;

// Sets up the parsing for Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTING
// Point to route FIles
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
