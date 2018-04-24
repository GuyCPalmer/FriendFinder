var html = function () {
    this.home("/app/public/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
    this.home("app/public/", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });
}

module.export = html;
