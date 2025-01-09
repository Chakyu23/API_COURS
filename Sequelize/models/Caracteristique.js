import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Caracteristique = DB_Main.define('Caracteristique', {
    idCaracteristique: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Descriptif: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdTypeCara: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'Type_Caracteristique',
        key: 'IdTypeCara'
      }
    }
  }, {
  DB_Main,
    tableName: 'Caracteristique',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "Nom_Caracteristique",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Caracter__7DF1CF5CCDA9E8CC",
        unique: true,
        fields: [
          { name: "idCaracteristique" },
        ]
      },
    ]
  });
