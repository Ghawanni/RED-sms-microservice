const Express = require("express");
const BodyParser = require("body-parser");
const Speakeasy = require("speakeasy");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/otp-generate", (request, response, next) => { });
app.post("/otp-validate", (request, response, next) => { });

app.listen(3000, () => {
    console.log("Listening at :3000...");
});
