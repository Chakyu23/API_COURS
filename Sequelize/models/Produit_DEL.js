import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Produit_DEL = DB_Main.define('Produit_DEL', {
    IdProduit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ref_Declinaison: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    Nom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Prix_HT: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    Qte_Stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IdFourn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdArticle: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    DB_Main,
    tableName: 'Produit_DEL',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__Produit___2E8997F0745ACEF3",
        unique: true,
        fields: [
          { name: "IdProduit" },
        ]
      },
    ]
  });

