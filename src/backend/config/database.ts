import { Sequelize } from 'sequelize';
import path from 'path';

// Evita abrir múltiplas conexões em desenvolvimento
const globalForSequelize = global as unknown as { sequelize: Sequelize };

export const sequelize =
  globalForSequelize.sequelize ||
  new Sequelize({
    dialect: 'sqlite',
    storage: path.join(process.cwd(), 'database.sqlite'),
    logging: console.log,
  });

if (process.env.NODE_ENV !== 'production') globalForSequelize.sequelize = sequelize;

export default sequelize;
