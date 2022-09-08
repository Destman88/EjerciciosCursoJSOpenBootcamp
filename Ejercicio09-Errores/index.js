const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

const calculaDoble = (num) => {
  if (typeof num === "number") {
    return 2 * num;
  }
  throw logger.error("Debes colocar un número");
};

const numero = "p";

try {
  const doble = calculaDoble(numero);
  console.log(doble);
} catch (e) {
  logger.error("Error en el cálculo");
}
