import Sequelize from 'sequelize';
export function _Fournisseur(sequelize, DataTypes) {
  return sequelize.define('Fournisseur', {
    IdFourn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Identifiant_Societe: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    Addresse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ville',
        key: 'IdVille'
      }
    },
    IdContactSociete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    },
    IdReferantCommercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Utilisateur',
        key: 'IdUtilisateur'
      }
    }
  }, {
    sequelize,
    tableName: 'Fournisseur',
    schema: 'Sch_Fourn',
    timestamps: false,
    indexes: [
      {
        name: "Fournisseur_index_8",
        unique: true,
        fields: [
          { name: "IdContactSociete" },
        ]
      },
      {
        name: "Fournisseur_index_9",
        unique: true,
        fields: [
          { name: "Identifiant_Societe" },
        ]
      },
      {
        name: "PK__Fourniss__F967038A3170DB0E",
        unique: true,
        fields: [
          { name: "IdFourn" },
        ]
      },
    ]
  });
};
