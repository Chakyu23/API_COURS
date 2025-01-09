import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Ville = DB_Main.define('Ville', {
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodePostal: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ISO_Pays: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'Ville',
    schema: 'Sch_User',
    timestamps: false,
    indexes: [
      {
        name: "PK__Ville__5755E0F4DA5D341B",
        unique: true,
        fields: [
          { name: "IdVille" },
        ]
      },
    ]
  });

