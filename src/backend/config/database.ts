import { Sequelize } from "sequelize";
import path from "path";

const dbPath = path.resolve(process.cwd(), "database.sqlite");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
});

export default sequelize;
