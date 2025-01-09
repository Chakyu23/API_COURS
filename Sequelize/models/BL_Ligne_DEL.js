import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const BL_Ligne_DEL = DB_Main.define('BL_Ligne_DEL', {
    IdLigBL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Prix_HT: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'BL_Ligne_DEL',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "PK__BL_Ligne__3ECB55B9708F5BDF",
        unique: true,
        fields: [
          { name: "IdLigBL" },
        ]
      },
    ]
  });

