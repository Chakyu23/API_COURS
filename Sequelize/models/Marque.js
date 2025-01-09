import Sequelize from 'sequelize';
export function _Marque(sequelize, DataTypes) {
  return sequelize.define('Marque', {
    IdMarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Marque',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "Nom_Marque",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Marque__8FCD53DDD106DDC6",
        unique: true,
        fields: [
          { name: "IdMarque" },
        ]
      },
    ]
  });
};
