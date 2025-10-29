module.exports = (req, res, next) => {
    console.log();
    console.log('middleware global acessado');
    next();
}