const app_login = require('./app-api/routes/app/routes');

module.exports = (app) => {
	app.use("/app-api/", app_login);
}