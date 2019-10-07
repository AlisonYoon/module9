//Application Programming Interface
//-Cat App - as a data source
//-Web API -as a functionality

//API is the way that code talks to each other.

//RESTful APIs : Industry best practices to ease development and increase client adoption
//What it means : If everyone follows the rules it becomes very easy to use/consume(consume here means either sending or receiving requests) API.
//->basically this way, you know what to expect.

//RE presentational
//S tate
//T ransfer


// * Stateless : doesn't hold/store any information from one call to another
//              doesn't store anything about the calls that have been made (don't use session)
//              in PHP, don't use SESSION in your API
//              Because it doesn't use session, it uses cookie when use is logged in, server sends a special generated cookie to client so that it knows user is logged in
// * Logins : Send a cookie in every http request every time to authenticate
// * Consistency : data format is always the same
//              ex. Plaintext/html/JSON (most languages can handle JSON)
//                 Always get the same thing back, even if unsuccessful
//                 ->Structure
//                      ->Same keys
//                          {
//                             success: true,
//                              msg: 'yup',
//                              code : 200,
//                              data: [{
//
//                                  }]
//                             }
// * URLs
// - should be plural
// - should represent the data you are interacting with (nouns)
// eg. /users (all users),  /users/3 (individual user)   -> "users" is plural here
// Get, Post, Put(edit), Delete
// In an ideal world, API provides all 4 of them above. (In reality, it't not)
// Should all handle all 4 verbs, even if they just give a failure response
// Post, Put, Delete work in the same way since they store data in the body
//


// Nice to know :
// -When you create/update a user, you should only get back
// whether it worked or not, not the data you sent.
// -This would mean you would have to do 2 API calls,
//  1. Create user
//  2. Retrieve user
// Real world - this might not be the case

