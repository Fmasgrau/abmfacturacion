import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Invoices extends Model {
  public id!: number;
  public client_id!: string;
  public total!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Invoices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "invoices",
    timestamps: true,
  },
);

export default Invoices;
