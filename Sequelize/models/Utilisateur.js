import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Utilisateur = DB_Main.define('Utilisateur', {
  IdUtilisateur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  Nom: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Prenom: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  NumTelephone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  AddresseFact: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  AddresseLivr: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Login: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Mdp: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  IdVille: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ville',
      key: 'IdVille'
    }
  },
  IdGroupe: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Groupe',
      key: 'IdGroupe'
    }
  }
}, {
  DB_Main,
  tableName: 'Utilisateur',
  schema: 'Sch_User',
  timestamps: false,
  indexes: [
    {
      name: "NomPrenom_index",
      fields: [
        { name: "Nom" },
        { name: "Prenom" },
      ]
    },
    {
      name: "PK__Utilisat__45A4C15730F34D96",
      unique: true,
      fields: [
        { name: "IdUtilisateur" },
      ]
    },
    {
      name: "Prenom_Index",
      fields: [
        { name: "Prenom" },
      ]
    },
    {
      name: "Utilisateur_index_4",
      unique: true,
      fields: [
        { name: "NumTelephone" },
      ]
    },
    {
      name: "Utilisateur_index_5",
      unique: true,
      fields: [
        { name: "Email" },
      ]
    },
    {
      name: "Utilisateur_index_6",
      unique: true,
      fields: [
        { name: "Login" },
      ]
    },
  ]
});
