import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Rayon = DB_Main.define('Rayon', {
    idRayon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ref_Rayon: {
      type: DataTypes.CHAR(3),
      allowNull: false
    }
  }, {
  DB_Main,
    tableName: 'Rayon',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "NomRayon",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Rayon__69487D207B6AB5E9",
        unique: true,
        fields: [
          { name: "idRayon" },
        ]
      },
      {
        name: "Rayon_index_1",
        unique: true,
        fields: [
          { name: "Ref_Rayon" },
        ]
      },
    ]
  });

