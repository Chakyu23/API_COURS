import Sequelize from 'sequelize';
export function _Caracteristique(sequelize, DataTypes) {
  return sequelize.define('Caracteristique', {
    idCaracteristique: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Descriptif: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IdTypeCara: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'Type_Caracteristique',
        key: 'IdTypeCara'
      }
    }
  }, {
    sequelize,
    tableName: 'Caracteristique',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "Nom_Caracteristique",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Caracter__7DF1CF5CCDA9E8CC",
        unique: true,
        fields: [
          { name: "idCaracteristique" },
        ]
      },
    ]
  });
};
