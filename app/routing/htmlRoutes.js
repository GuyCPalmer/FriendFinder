const path = require ("path")

var html = function(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./survey.html"));
    })
}

module.exports = html;
