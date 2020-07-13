const {renderingPage} = require('./renderingPage')

exports.requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/favicon.ico') {
        res.statusCode = 204;
        res.end();
    }
    else if (url === "/") {
        console.log("home");
        return renderingPage('public/index.html', req, res);
    }
    else if (url === "/about.html") {
        console.log("about");
        return renderingPage('public/about.html', req, res);
    }
    else{
        console.log("page not found");
        return renderingPage('public/404.html',req,res);
    }


}