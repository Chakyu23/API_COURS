import Sequelize from 'sequelize';
export function _MSG_DEL(sequelize, DataTypes) {
  return sequelize.define('MSG_DEL', {
    IdMsg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Contenu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IdSalon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MSG_DEL',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "PK__MSG_DEL__0D12C91A962AB55C",
        unique: true,
        fields: [
          { name: "IdMsg" },
        ]
      },
    ]
  });
};
