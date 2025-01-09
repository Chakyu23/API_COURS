import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const MSG_Salon = DB_Main.define('MSG_Salon', {
    IdSalon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IdProduit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Produit',
        key: 'IdProduit'
      }
    }
  }, {
  DB_Main,
    tableName: 'MSG_Salon',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "MSG_Salon_index_11",
        unique: true,
        fields: [
          { name: "IdProduit" },
        ]
      },
      {
        name: "PK__MSG_Salo__0EAA5B2C5C0CD0AC",
        unique: true,
        fields: [
          { name: "IdSalon" },
        ]
      },
    ]
  });
