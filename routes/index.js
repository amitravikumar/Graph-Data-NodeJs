const initializeRoutes = (app) => {
    app.use('/api/v1/data', require('./getData.routes'));
};

module.exports = initializeRoutes;