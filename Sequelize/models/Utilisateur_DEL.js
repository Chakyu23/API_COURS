import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Utilisateur_DEL = DB_Main.define('Utilisateur_DEL', {
    IdUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Prenom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumTelephone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AddresseFact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AddresseLivr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Login: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Mdp: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdGroupe: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'Utilisateur_DEL',
    schema: 'Sch_User',
    timestamps: false,
    indexes: [
      {
        name: "PK__Utilisat__45A4C157201B1F7E",
        unique: true,
        fields: [
          { name: "IdUtilisateur" },
        ]
      },
    ]
  });

