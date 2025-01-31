import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const BL_Ligne = DB_Main.define('BL_Ligne', {
    IdLigBL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Prix_HT: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    IdLigCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CDE_Ligne',
        key: 'IdLigCde'
      }
    },
    IdBL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BonLiv',
        key: 'IdBL'
      }
    },
    TVA: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'BL_Ligne',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "BL_Ligne_index_12",
        unique: true,
        fields: [
          { name: "IdLigCde" },
        ]
      },
      {
        name: "PK__BL_Ligne__3ECB55B9F3BCA833",
        unique: true,
        fields: [
          { name: "IdLigBL" },
        ]
      },
    ]
  });

