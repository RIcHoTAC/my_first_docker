import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const Author = sequelize.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { tableName: "authors" }
);

export default Author;
