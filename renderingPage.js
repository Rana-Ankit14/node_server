const fs= require('fs');

exports.renderingPage= (pageName,req,res) =>{
    fs.readFile(pageName,  (err, html)=> {
        if (err) {
            throw err;
        }
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    })
}
