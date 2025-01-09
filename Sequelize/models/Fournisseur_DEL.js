import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Fournisseur_DEL = DB_Main.define('Fournisseur_DEL', {
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
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdContactSociete: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdReferantCommercial: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'Fournisseur_DEL',
    schema: 'Sch_Fourn',
    timestamps: false,
    indexes: [
      {
        name: "PK__Fourniss__F967038A1C7EB4E3",
        unique: true,
        fields: [
          { name: "IdFourn" },
        ]
      },
    ]
  });

