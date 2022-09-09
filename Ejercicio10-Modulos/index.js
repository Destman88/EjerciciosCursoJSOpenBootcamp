import * as moduloMate from "./controller.js";
import chalk from "chalk";

const log = console.log;

const suma = moduloMate.suma(1, 2);
log(suma);

const multiplica = moduloMate.multiplica(4, 5);
log(chalk.green(multiplica));
