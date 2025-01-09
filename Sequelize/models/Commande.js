import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Commande = DB_Main.define('Commande', {
    IdCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Commentaire: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cde_Regle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IdUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    }
  }, {
  DB_Main,
    tableName: 'Commande',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "PK__Commande__0FA7B9E9F0FDF1B5",
        unique: true,
        fields: [
          { name: "IdCde" },
        ]
      },
    ]
  });

