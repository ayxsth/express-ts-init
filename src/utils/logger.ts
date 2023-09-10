import winston, { format } from 'winston';

const level = 'debug';
const { combine, printf, colorize, errors, metadata } = format;

const logFormat = printf((info) => {
  const formattedNamespace = info.metadata.namespace ?? '';

  return `${info.timestamp} [${info.level}] [${formattedNamespace}]: ${info.message}`;
});

export const createLogger = (namespace: string) => {
  return winston.createLogger({
    format: combine(
      colorize(),
      errors({ stack: true }),
      metadata(),
      format((info) => {
        info.metadata = info.metadata || {};
        info.metadata.namespace = namespace;
        info.timestamp = new Date().toISOString();

        return info;
      })(),
      logFormat
    ),
    transports: [new winston.transports.Console({ level })]
  });
};
