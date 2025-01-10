import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Article = DB_Main.define('Article', {
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
    },
    Suppr: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
  }, {
  DB_Main,
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

