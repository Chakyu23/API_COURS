import Sequelize from 'sequelize';
export function _Possede(sequelize, DataTypes) {
  return sequelize.define('Possede', {
    IdProduit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Produit',
        key: 'IdProduit'
      }
    },
    idCaracteristique: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Caracteristique',
        key: 'idCaracteristique'
      }
    }
  }, {
    sequelize,
    tableName: 'Possede',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__Possede__F9568B05D1F2ECB0",
        unique: true,
        fields: [
          { name: "IdProduit" },
          { name: "idCaracteristique" },
        ]
      },
    ]
  });
};
