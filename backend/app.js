var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var peterpetRouter = require("./routes/pet");
var IPFSRouter = require("./routes/ipfs");
var nftRouter = require("./routes/nft");

const cfg = require("./cfg");

if (!cfg) {
  console.error("./cfg.js file not exists");
  process.exit(1);
}

var app = express();

if (cfg.web.cors) app.use(require("cors")());

var expressVue = require("express-vue");
const vueOptions = {
  VUE_DEV: true,
  rootPath: path.join(__dirname, "/views"),
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/wenddy", usersRouter);
app.use("/api/pet", peterpetRouter);
app.use("/api/ipfs", IPFSRouter);
app.use("/api/nft",nftRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
