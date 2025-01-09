import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const MSG_DEL = DB_Main.define('MSG_DEL', {
    IdMsg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Contenu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IdSalon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'MSG_DEL',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "PK__MSG_DEL__0D12C91A962AB55C",
        unique: true,
        fields: [
          { name: "IdMsg" },
        ]
      },
    ]
  });
