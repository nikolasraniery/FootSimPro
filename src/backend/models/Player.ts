import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

export type PlayerPosition =
  | "ATA"
  | "PD"
  | "PE"
  | "MEI"
  | "MD"
  | "ME"
  | "VOL"
  | "ZAG"
  | "LD"
  | "LE"
  | "GOL";

const positions: PlayerPosition[] = [
  "ATA",
  "PD",
  "PE",
  "MEI",
  "MD",
  "ME",
  "VOL",
  "ZAG",
  "LD",
  "LE",
  "GOL",
];

interface PlayerAttributes {
  id: number;
  name: string;
  age: number;
  position: PlayerPosition;
  skill: number;
  condition: number;
  country?: string;
  league?: string;
  clubId?: number;
}

interface PlayerCreationAttributes extends Optional<PlayerAttributes, "id"> {}

class Player
  extends Model<PlayerAttributes, PlayerCreationAttributes>
  implements PlayerAttributes
{
  public id!: number;
  public name!: string;
  public age!: number;
  public position!: PlayerPosition;
  public skill!: number;
  public condition!: number;
  public country!: string;
  public league!: string;
  public clubId!: number;
}

Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "Fulano",
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
    },
    position: {
      type: DataTypes.STRING,
      defaultValue: "ATA",
    },
    skill: {
      type: DataTypes.INTEGER,
      defaultValue: 20,
    },
    condition: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    country: {
      type: DataTypes.STRING,
    },
    league: {
      type: DataTypes.STRING,
    },
    clubId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "player",
  },
);

export default Player;
