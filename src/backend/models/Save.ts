import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

interface SaveAttributes {
  id: number;
  saveName: string;
  managerName: string;
  currentDate: Date;
  clubId: number;
}

interface SaveCreationAttributes extends Optional<
  SaveAttributes,
  "id" | "currentDate"
> {}

class Save
  extends Model<SaveAttributes, SaveCreationAttributes>
  implements SaveAttributes
{
  public id!: number;
  public saveName!: string;
  public managerName!: string;
  public currentDate!: Date;
  public clubId!: number;
}

Save.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    saveName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    managerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentDate: {
      type: DataTypes.DATE,
      defaultValue: new Date(2026, 0, 1),
    },
    clubId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "save",
  },
);

export default Save;
