import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const CDE_Ligne = DB_Main.define('CDE_Ligne', {
    IdLigCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Qte_Cde: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IdProduit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produit',
        key: 'IdProduit'
      }
    },
    IdCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Commande',
        key: 'IdCde'
      }
    }
  }, {
  DB_Main,
    tableName: 'CDE_Ligne',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "PK__CDE_Lign__6EE05569C84F3D6C",
        unique: true,
        fields: [
          { name: "IdLigCde" },
        ]
      },
    ]
  });
