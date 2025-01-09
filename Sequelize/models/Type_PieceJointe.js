import Sequelize from 'sequelize';
export function _Type_PieceJointe(sequelize, DataTypes) {
  return sequelize.define('Type_PieceJointe', {
    IdTypePJ: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Type_PieceJointe',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "PK__Type_Pie__684978B149A484BF",
        unique: true,
        fields: [
          { name: "IdTypePJ" },
        ]
      },
      {
        name: "Type_PieceJointe_index_3",
        unique: true,
        fields: [
          { name: "Nom" },
        ]
      },
    ]
  });
};
