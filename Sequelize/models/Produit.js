import Sequelize from 'sequelize';
export function _Produit(sequelize, DataTypes) {
  return sequelize.define('Produit', {
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
      allowNull: false,
      references: {
        model: 'Fournisseur',
        key: 'IdFourn'
      }
    },
    IdArticle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Article',
        key: 'IdArticle'
      }
    }
  }, {
    sequelize,
    tableName: 'Produit',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "Nom_Article_Index",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Produit__2E8997F0D857DFF0",
        unique: true,
        fields: [
          { name: "IdProduit" },
        ]
      },
      {
        name: "Ref_Produit_index",
        fields: [
          { name: "Ref_Declinaison" },
        ]
      },
    ]
  });
};
