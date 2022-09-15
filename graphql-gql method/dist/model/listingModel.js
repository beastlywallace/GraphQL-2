"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class ListingInstance extends sequelize_1.Model {
}
exports.ListingInstance = ListingInstance;
ListingInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    noOfBeds: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    numberOfBaths: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    rating: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
}, {
    sequelize: database_config_1.default,
    tableName: "listing"
});
