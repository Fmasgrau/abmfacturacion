import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import Invoices from "./invoice.model";
import Product from "./product.model";

class InvoiceItems extends Model {
  public id!: number;
  public invoice_id!: number;
  public product_id!: number;
  public quantity!: number;
  public price!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

InvoiceItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Invoices,
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "invoice_items",
    timestamps: true,
  },
);


Invoices.hasMany(InvoiceItems, { foreignKey: 'invoice_id', onDelete: 'CASCADE' });
InvoiceItems.belongsTo(Invoices, { foreignKey: 'invoice_id' });

InvoiceItems.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(InvoiceItems, { foreignKey: 'product_id', onDelete: 'CASCADE' });


export default InvoiceItems;
