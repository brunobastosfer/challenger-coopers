import { createConnection } from "typeorm";

createConnection().then(() => console.log('Conectando ao banco de dados'))