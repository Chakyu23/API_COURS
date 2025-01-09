import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const BonLiv = DB_Main.define('BonLiv', {
    IdBL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Recu: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Prix_Total_HT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddresseFact: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    AddresseLivr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IdReferantCommercial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    IdReferantLogistique: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    IdLivreur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    IdCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Commande',
        key: 'IdCde'
      }
    },
    DateLivraison: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'BonLiv',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "BonLiv_index_10",
        unique: true,
        fields: [
          { name: "IdCde" },
        ]
      },
      {
        name: "PK__BonLiv__B773A8E924DDE530",
        unique: true,
        fields: [
          { name: "IdBL" },
        ]
      },
    ]
  });

