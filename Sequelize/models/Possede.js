import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Possede = DB_Main.define('Possede', {
    IdProduit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Produit',
        key: 'IdProduit'
      }
    },
    idCaracteristique: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Caracteristique',
        key: 'idCaracteristique'
      }
    }
  }, {
    DB_Main,
    tableName: 'Possede',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__Possede__F9568B05D1F2ECB0",
        unique: true,
        fields: [
          { name: "IdProduit" },
          { name: "idCaracteristique" },
        ]
      },
    ]
  });

