import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Fournisseur = DB_Main.define('Fournisseur', {
    IdFourn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Identifiant_Societe: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    Addresse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Ville: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CodePostal: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    ISO_Pays: {
        type: DataTypes.CHAR(2),
        allowNull: true
    },
    IdContactSociete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    IdReferantCommercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    Suppr: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'Fournisseur',
    schema: 'Sch_Fourn',
    timestamps: false,
    indexes: [
      {
        name: "Fournisseur_index_8",
        unique: true,
        fields: [
          { name: "IdContactSociete" },
        ]
      },
      {
        name: "Fournisseur_index_9",
        unique: true,
        fields: [
          { name: "Identifiant_Societe" },
        ]
      },
      {
        name: "PK__Fourniss__F967038A3170DB0E",
        unique: true,
        fields: [
          { name: "IdFourn" },
        ]
      },
    ]
  });

