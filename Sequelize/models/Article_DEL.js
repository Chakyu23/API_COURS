import {DataTypes} from 'sequelize';
import {DB_Main} from "../DB_Main.js";
export const Article_DEL = DB_Main.define('Article_DEL', {
    IdArticle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ref_Article: {
      type: DataTypes.CHAR(5),
      allowNull: true
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
      allowNull: true
    },
    IdRayon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IdTVA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
  DB_Main,
    tableName: 'Article_DEL',
    schema: 'Sch_Art',
    timestamps: false,
    indexes: [
      {
        name: "PK__Article___2CC641E408591BC9",
        unique: true,
        fields: [
          { name: "IdArticle" },
        ]
      },
    ]
  });

