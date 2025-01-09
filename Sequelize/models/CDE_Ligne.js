import Sequelize from 'sequelize';
export function _CDE_Ligne(sequelize, DataTypes) {
  return sequelize.define('CDE_Ligne', {
    IdLigCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Qte_Cde: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IdProduit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produit',
        key: 'IdProduit'
      }
    },
    IdCde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Commande',
        key: 'IdCde'
      }
    }
  }, {
    sequelize,
    tableName: 'CDE_Ligne',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "PK__CDE_Lign__6EE05569C84F3D6C",
        unique: true,
        fields: [
          { name: "IdLigCde" },
        ]
      },
    ]
  });
};
