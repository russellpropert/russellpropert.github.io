const express = require('express');
const app     = express();

// --------------------------
//   for supertest testing
//   comment out listener
// --------------------------

// start server
// -----------------------
// app.listen(3000, function(){
//     console.log('Running on port 3000!')
// })

// export app for testing
module.exports = app;
