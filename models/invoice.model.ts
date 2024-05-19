import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import Client from "./clients.model";
import InvoiceItems from "./invoiceItems.model";

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
      references: {
        model: Client,
        key: 'id',
      },
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

Invoices.belongsTo(Client, { foreignKey: 'client_id' });
Client.hasMany(Invoices, { foreignKey: 'client_id' });


export default Invoices;
