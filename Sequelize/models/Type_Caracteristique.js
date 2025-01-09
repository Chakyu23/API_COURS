import Sequelize from 'sequelize';
export function _Type_Caracteristique(sequelize, DataTypes) {
  return sequelize.define('Type_Caracteristique', {
    IdTypeCara: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Type_Caracteristique',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__Type_Car__D094384B0178F3EA",
        unique: true,
        fields: [
          { name: "IdTypeCara" },
        ]
      },
      {
        name: "Type_Caracteristique_index_2",
        unique: true,
        fields: [
          { name: "Nom" },
        ]
      },
    ]
  });
};
