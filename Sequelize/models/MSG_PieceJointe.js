import Sequelize from 'sequelize';
export function _MSG_PieceJointe(sequelize, DataTypes) {
  return sequelize.define('MSG_PieceJointe', {
    IdPieceJointe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Add_Fic: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    IdMsg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MSG',
        key: 'IdMsg'
      }
    },
    IdTypePJ: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'Type_PieceJointe',
        key: 'IdTypePJ'
      }
    }
  }, {
    sequelize,
    tableName: 'MSG_PieceJointe',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "PK__MSG_Piec__42A303855A82BBE0",
        unique: true,
        fields: [
          { name: "IdPieceJointe" },
        ]
      },
    ]
  });
};
