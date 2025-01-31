import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Type_PieceJointe = DB_Main.define('Type_PieceJointe', {
    IdTypePJ: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
  DB_Main,
    tableName: 'Type_PieceJointe',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "PK__Type_Pie__684978B149A484BF",
        unique: true,
        fields: [
          { name: "IdTypePJ" },
        ]
      },
      {
        name: "Type_PieceJointe_index_3",
        unique: true,
        fields: [
          { name: "Nom" },
        ]
      },
    ]
  });

