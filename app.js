// Core Node.js Packages
// External Packages
const express = require('express');
const morgan = require('morgan');

// Local Modules
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Creating the express app
const app = express();
// 1) MIDDLEWARES
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();

    next();
});

// 2) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
    // const err = new Error(`Can't find ${req.originalUrl} on this server!`)
    // err.status = 'fail';
    // err.statusCode = 404;

    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;

// SMALL NOTES FROM THE COURSE

// app.use((req, res, next) => {
//     console.log('Hello from the middleware');
//     // Never forget the next function
//     next();
// });
// app.use((req, res, next) => {
//     console.log('Hello from the middleware');
//     // Never forget the next function
//     next();
// });

// app.use((req, res, next) => {
// req.requestTime = new Date().toISOString();
// next();
// });

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
