import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface ClubAttibutes {
  id: number;
  name: string;
  country: string;
  league: string;
  budget: number;
  reputation: number;
  stadiumName?: string;
  logoUrl?: string;
  divisionName: string;
  divisionId: number;
}

interface ClubCreationAttributes extends Optional<ClubAttibutes, "id"> { }

export class Club
  extends Model<ClubAttibutes, ClubCreationAttributes>
  implements ClubAttibutes {
  public id!: number;
  public name!: string;
  public country!: string;
  public league!: string;
  public budget!: number;
  public reputation!: number;
  public stadiumName?: string;
  public logoUrl?: string;
  public divisionName: string;
  public divisionId: number;
}

Club.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
  },
  league: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.FLOAT,
    defaultValue: 5000000.0,
  },
  reputation: {
    type: DataTypes.INTEGER,
    defaultValue: 50,
  },
  stadiumName: {
    type: DataTypes.STRING,
    defaultValue: "Estádio Municipal",
  },
  logoUrl: {
    type: DataTypes.STRING,
  },
  divisionName: {
    type: DataTypes.STRING,
  },
  divisionId: {
    type: DataTypes.INTEGER
  }
}, { sequelize, modelName: 'club' });
