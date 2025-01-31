import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Groupe = DB_Main.define('Groupe', {
    IdGroupe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    DB_Main,
    tableName: 'Groupe',
    schema: 'Sch_User',
    timestamps: false,
    indexes: [
      {
        name: "Groupe_index_0",
        unique: true,
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Groupe__5A7ABBA22B654574",
        unique: true,
        fields: [
          { name: "IdGroupe" },
        ]
      },
    ]
  });

