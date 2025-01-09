import Sequelize from 'sequelize';
export function _MSG(sequelize, DataTypes) {
  return sequelize.define('MSG', {
    IdMsg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Contenu: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IdSalon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MSG_Salon',
        key: 'IdSalon'
      }
    },
    IdUtilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    IdReception: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    }
  }, {
    sequelize,
    tableName: 'MSG',
    schema: 'Sch_Msg',
    timestamps: false,
    indexes: [
      {
        name: "PK__MSG__0D12C91A4F9C8B70",
        unique: true,
        fields: [
          { name: "IdMsg" },
        ]
      },
    ]
  });
};
