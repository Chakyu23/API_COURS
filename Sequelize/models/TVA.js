import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const TVA = DB_Main.define('TVA', {
    IdTVA: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Taux: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    }
  }, {
    DB_Main,
    tableName: 'TVA',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__TVA__2BC4BEA39158F87D",
        unique: true,
        fields: [
          { name: "IdTVA" },
        ]
      },
    ]
  });

