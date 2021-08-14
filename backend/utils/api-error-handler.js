const AppError = require('./appError');

function apiErrorHandler(err, req, res, next) {
    // in prod, don't use console.log or console.err because
    // it is not async
    console.error(err);

    if (err instanceof AppError) {
        res.status(err.code).json(err.message);
        return;
    }

    res.status(500).json('something went wrong');
}

module.exports = apiErrorHandler;