import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Product extends Model {
    public id!: number;
    public name!: string;
    public price!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'products',
    timestamps: true,
});

export default Product;
