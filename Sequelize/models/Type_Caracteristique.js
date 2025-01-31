import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Type_Caracteristique = DB_Main.define('Type_Caracteristique', {
    IdTypeCara: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
  DB_Main,
    tableName: 'Type_Caracteristique',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__Type_Car__D094384B0178F3EA",
        unique: true,
        fields: [
          { name: "IdTypeCara" },
        ]
      },
      {
        name: "Type_Caracteristique_index_2",
        unique: true,
        fields: [
          { name: "Nom" },
        ]
      },
    ]
  });

