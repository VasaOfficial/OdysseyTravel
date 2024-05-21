import winston from 'winston';
const { combine, timestamp, json, prettyPrint, errors } = winston.format

const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        json(),
        prettyPrint(),
        errors({stack: true }),
    ),
    transports: [
        new winston.transports.Console(), 
    ]
});

export default logger;