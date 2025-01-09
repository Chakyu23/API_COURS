import Sequelize from 'sequelize';
export function _Ville(sequelize, DataTypes) {
  return sequelize.define('Ville', {
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
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
    }
  }, {
    sequelize,
    tableName: 'Ville',
    schema: 'Sch_User',
    timestamps: false,
    indexes: [
      {
        name: "PK__Ville__5755E0F4DA5D341B",
        unique: true,
        fields: [
          { name: "IdVille" },
        ]
      },
    ]
  });
};
