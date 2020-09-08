const { isCelebrateError } = require('celebrate');

const Response = require('./response.helper');

function handleError(err, req, res, next) {
    // console.log(err);
    // Nếu đây là error của celebrate
    if (isCelebrateError(err)) {
        const { details } = err;
        // console.log(details.get('body').details.length);

        Response.error(res, {
            message: 'Invalid celebrate request',
            type: details.get('body').name,
            errors: details.get('body').details.map(({ message, type }) => {
                return { message: message.replace(/['"']/g, ''), type };
            })
        });
        return;
    }

    Response.error(res, {
        type: err.name,
        message: err.message
    });
    // 2 types
    // normal errors
    // validation errors
}

module.exports = handleError;