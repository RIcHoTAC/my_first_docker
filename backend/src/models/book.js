import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const Book = sequelize.define(
  "Book",
  {
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantPages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { tableName: "books" }
);

export default Book;
