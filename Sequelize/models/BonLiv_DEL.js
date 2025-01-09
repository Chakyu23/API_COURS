import Sequelize from 'sequelize';
export function _BonLiv_DEL(sequelize, DataTypes) {
  return sequelize.define('BonLiv_DEL', {
    IdBL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Recu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TVA: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    Prix_Total_HT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddresseFact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AddresseLivr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IdReferantCommercial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdReferantLogistique: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdLivreur: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdCde: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BonLiv_DEL',
    schema: 'Sch_Cde',
    timestamps: false,
    indexes: [
      {
        name: "PK__BonLiv_D__B773A8E9A4D129B0",
        unique: true,
        fields: [
          { name: "IdBL" },
        ]
      },
    ]
  });
};
