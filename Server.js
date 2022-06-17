const http = require('http') ;
const Server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page') ;
    }
    if(req.url === '/about'){
        res.end('This is about our backend server') ;
    }
    res.end(
        `
            <h1>Oops!</h1>
            <p>Couldn't find the page</p>
            <a href='/'>Home  </a>
        `
    )
})

Server.listen(5000) ;

console.log("Working") ;