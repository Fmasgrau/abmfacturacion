import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import Invoices from './invoice.model';

class Client extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
}, {
    sequelize,
    tableName: 'clients',
    timestamps: true,
});

export default Client;
