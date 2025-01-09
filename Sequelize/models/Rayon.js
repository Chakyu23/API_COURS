import Sequelize from 'sequelize';
export function _Rayon(sequelize, DataTypes) {
  return sequelize.define('Rayon', {
    idRayon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ref_Rayon: {
      type: DataTypes.CHAR(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Rayon',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "NomRayon",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Rayon__69487D207B6AB5E9",
        unique: true,
        fields: [
          { name: "idRayon" },
        ]
      },
      {
        name: "Rayon_index_1",
        unique: true,
        fields: [
          { name: "Ref_Rayon" },
        ]
      },
    ]
  });
};
