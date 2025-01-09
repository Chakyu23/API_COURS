import Sequelize from 'sequelize';
export function _Article(sequelize, DataTypes) {
  return sequelize.define('Article', {
    IdArticle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ref_Article: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IdMarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Marque',
        key: 'IdMarque'
      }
    },
    idRayon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rayon',
        key: 'idRayon'
      }
    },
    IdTVA: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'TVA',
        key: 'IdTVA'
      }
    }
  }, {
    sequelize,
    tableName: 'Article',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "Article_index_7",
        unique: true,
        fields: [
          { name: "Ref_Article" },
        ]
      },
      {
        name: "Nom_Article_Index",
        fields: [
          { name: "Nom" },
        ]
      },
      {
        name: "PK__Article__2CC641E4D34DA79A",
        unique: true,
        fields: [
          { name: "IdArticle" },
        ]
      },
    ]
  });
};
