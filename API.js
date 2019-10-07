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