import {DataTypes} from 'sequelize';
import {_Article} from './Article.js';
import {_Article_DEL} from './Article_DEL.js';
import {_BL_Ligne} from './BL_Ligne.js';
import {_BL_Ligne_DEL} from './BL_Ligne_DEL.js';
import {_BonLiv} from './BonLiv.js';
import {_BonLiv_DEL} from './BonLiv_DEL.js';
import {_CDE_Ligne} from './CDE_Ligne.js';
import {_Caracteristique} from './Caracteristique.js';
import {_Commande} from './Commande.js';
import {_Fournisseur} from './Fournisseur.js';
import {_Fournisseur_DEL} from './Fournisseur_DEL.js';
import {_Groupe} from './Groupe.js';
import {_MSG} from './MSG.js';
import {_MSG_DEL} from './MSG_DEL.js';
import {_MSG_PieceJointe} from './MSG_PieceJointe.js';
import {_MSG_Salon} from './MSG_Salon.js';
import {_Marque} from './Marque.js';
import {_Possede} from './Possede.js';
import {_Produit} from './Produit.js';
import {_Produit_DEL} from './Produit_DEL.js';
import {_Rayon} from './Rayon.js';
import {_TVA} from './TVA.js';
import {_Type_Caracteristique} from './Type_Caracteristique.js';
import {_Type_PieceJointe} from './Type_PieceJointe.js';
import {_Utilisateur} from './Utilisateur.js';
import {_Utilisateur_DEL} from './Utilisateur_DEL.js';
import {_Ville} from './Ville.js';

export function initModels(sequelize) {
  const Article = _Article(sequelize, DataTypes);
  const Article_DEL = _Article_DEL(sequelize, DataTypes);
  const BL_Ligne = _BL_Ligne(sequelize, DataTypes);
  const BL_Ligne_DEL = _BL_Ligne_DEL(sequelize, DataTypes);
  const BonLiv = _BonLiv(sequelize, DataTypes);
  const BonLiv_DEL = _BonLiv_DEL(sequelize, DataTypes);
  const CDE_Ligne = _CDE_Ligne(sequelize, DataTypes);
  const Caracteristique = _Caracteristique(sequelize, DataTypes);
  const Commande = _Commande(sequelize, DataTypes);
  const Fournisseur = _Fournisseur(sequelize, DataTypes);
  const Fournisseur_DEL = _Fournisseur_DEL(sequelize, DataTypes);
  const Groupe = _Groupe(sequelize, DataTypes);
  const MSG = _MSG(sequelize, DataTypes);
  const MSG_DEL = _MSG_DEL(sequelize, DataTypes);
  const MSG_PieceJointe = _MSG_PieceJointe(sequelize, DataTypes);
  const MSG_Salon = _MSG_Salon(sequelize, DataTypes);
  const Marque = _Marque(sequelize, DataTypes);
  const Possede = _Possede(sequelize, DataTypes);
  const Produit = _Produit(sequelize, DataTypes);
  const Produit_DEL = _Produit_DEL(sequelize, DataTypes);
  const Rayon = _Rayon(sequelize, DataTypes);
  const TVA = _TVA(sequelize, DataTypes);
  const Type_Caracteristique = _Type_Caracteristique(sequelize, DataTypes);
  const Type_PieceJointe = _Type_PieceJointe(sequelize, DataTypes);
  const Utilisateur = _Utilisateur(sequelize, DataTypes);
  const Utilisateur_DEL = _Utilisateur_DEL(sequelize, DataTypes);
  const Ville = _Ville(sequelize, DataTypes);

  Caracteristique.belongsToMany(Produit, { as: 'IdProduit_Produits', through: Possede, foreignKey: "idCaracteristique", otherKey: "IdProduit" });
  Produit.belongsToMany(Caracteristique, { as: 'idCaracteristique_Caracteristiques', through: Possede, foreignKey: "IdProduit", otherKey: "idCaracteristique" });
  Produit.belongsTo(Article, { as: "IdArticle_Article", foreignKey: "IdArticle"});
  Article.hasMany(Produit, { as: "Produits", foreignKey: "IdArticle"});
  Possede.belongsTo(Caracteristique, { as: "idCaracteristique_Caracteristique", foreignKey: "idCaracteristique"});
  Caracteristique.hasMany(Possede, { as: "Possedes", foreignKey: "idCaracteristique"});
  Article.belongsTo(Marque, { as: "IdMarque_Marque", foreignKey: "IdMarque"});
  Marque.hasMany(Article, { as: "Articles", foreignKey: "IdMarque"});
  Possede.belongsTo(Produit, { as: "IdProduit_Produit", foreignKey: "IdProduit"});
  Produit.hasMany(Possede, { as: "Possedes", foreignKey: "IdProduit"});
  CDE_Ligne.belongsTo(Produit, { as: "IdProduit_Produit", foreignKey: "IdProduit"});
  Produit.hasMany(CDE_Ligne, { as: "CDE_Lignes", foreignKey: "IdProduit"});
  MSG_Salon.belongsTo(Produit, { as: "IdProduit_Produit", foreignKey: "IdProduit"});
  Produit.hasMany(MSG_Salon, { as: "MSG_Salons", foreignKey: "IdProduit"});
  Article.belongsTo(Rayon, { as: "idRayon_Rayon", foreignKey: "idRayon"});
  Rayon.hasMany(Article, { as: "Articles", foreignKey: "idRayon"});
  Article.belongsTo(TVA, { as: "IdTVA_TVA", foreignKey: "IdTVA"});
  TVA.hasMany(Article, { as: "Articles", foreignKey: "IdTVA"});
  Caracteristique.belongsTo(Type_Caracteristique, { as: "IdTypeCara_Type_Caracteristique", foreignKey: "IdTypeCara"});
  Type_Caracteristique.hasMany(Caracteristique, { as: "Caracteristiques", foreignKey: "IdTypeCara"});
  BL_Ligne.belongsTo(BonLiv, { as: "IdBL_BonLiv", foreignKey: "IdBL"});
  BonLiv.hasMany(BL_Ligne, { as: "BL_Lignes", foreignKey: "IdBL"});
  BL_Ligne.belongsTo(CDE_Ligne, { as: "IdLigCde_CDE_Ligne", foreignKey: "IdLigCde"});
  CDE_Ligne.hasMany(BL_Ligne, { as: "BL_Lignes", foreignKey: "IdLigCde"});
  BonLiv.belongsTo(Commande, { as: "IdCde_Commande", foreignKey: "IdCde"});
  Commande.hasMany(BonLiv, { as: "BonLivs", foreignKey: "IdCde"});
  CDE_Ligne.belongsTo(Commande, { as: "IdCde_Commande", foreignKey: "IdCde"});
  Commande.hasMany(CDE_Ligne, { as: "CDE_Lignes", foreignKey: "IdCde"});
  Produit.belongsTo(Fournisseur, { as: "IdFourn_Fournisseur", foreignKey: "IdFourn"});
  Fournisseur.hasMany(Produit, { as: "Produits", foreignKey: "IdFourn"});
  MSG_PieceJointe.belongsTo(MSG, { as: "IdMsg_MSG", foreignKey: "IdMsg"});
  MSG.hasMany(MSG_PieceJointe, { as: "MSG_PieceJointes", foreignKey: "IdMsg"});
  MSG.belongsTo(MSG_Salon, { as: "IdSalon_MSG_Salon", foreignKey: "IdSalon"});
  MSG_Salon.hasMany(MSG, { as: "MSGs", foreignKey: "IdSalon"});
  MSG_PieceJointe.belongsTo(Type_PieceJointe, { as: "IdTypePJ_Type_PieceJointe", foreignKey: "IdTypePJ"});
  Type_PieceJointe.hasMany(MSG_PieceJointe, { as: "MSG_PieceJointes", foreignKey: "IdTypePJ"});
  Utilisateur.belongsTo(Groupe, { as: "IdGroupe_Groupe", foreignKey: "IdGroupe"});
  Groupe.hasMany(Utilisateur, { as: "Utilisateurs", foreignKey: "IdGroupe"});
  BonLiv.belongsTo(Utilisateur, { as: "IdLivreur_Utilisateur", foreignKey: "IdLivreur"});
  Utilisateur.hasMany(BonLiv, { as: "BonLivs", foreignKey: "IdLivreur"});
  BonLiv.belongsTo(Utilisateur, { as: "IdReferantCommercial_Utilisateur", foreignKey: "IdReferantCommercial"});
  Utilisateur.hasMany(BonLiv, { as: "IdReferantCommercial_BonLivs", foreignKey: "IdReferantCommercial"});
  BonLiv.belongsTo(Utilisateur, { as: "IdReferantLogistique_Utilisateur", foreignKey: "IdReferantLogistique"});
  Utilisateur.hasMany(BonLiv, { as: "IdReferantLogistique_BonLivs", foreignKey: "IdReferantLogistique"});
  Commande.belongsTo(Utilisateur, { as: "IdUtilisateur_Utilisateur", foreignKey: "IdUtilisateur"});
  Utilisateur.hasMany(Commande, { as: "Commandes", foreignKey: "IdUtilisateur"});
  Fournisseur.belongsTo(Utilisateur, { as: "IdContactSociete_Utilisateur", foreignKey: "IdContactSociete"});
  Utilisateur.hasMany(Fournisseur, { as: "Fournisseurs", foreignKey: "IdContactSociete"});
  Fournisseur.belongsTo(Utilisateur, { as: "IdReferantCommercial_Utilisateur", foreignKey: "IdReferantCommercial"});
  Utilisateur.hasMany(Fournisseur, { as: "IdReferantCommercial_Fournisseurs", foreignKey: "IdReferantCommercial"});
  MSG.belongsTo(Utilisateur, { as: "IdUtilisateur_Utilisateur", foreignKey: "IdUtilisateur"});
  Utilisateur.hasMany(MSG, { as: "MSGs", foreignKey: "IdUtilisateur"});
  MSG.belongsTo(Utilisateur, { as: "IdReception_Utilisateur", foreignKey: "IdReception"});
  Utilisateur.hasMany(MSG, { as: "IdReception_MSGs", foreignKey: "IdReception"});
  Fournisseur.belongsTo(Ville, { as: "IdVille_Ville", foreignKey: "IdVille"});
  Ville.hasMany(Fournisseur, { as: "Fournisseurs", foreignKey: "IdVille"});
  Utilisateur.belongsTo(Ville, { as: "IdVille_Ville", foreignKey: "IdVille"});
  Ville.hasMany(Utilisateur, { as: "Utilisateurs", foreignKey: "IdVille"});

  return {
    Article,
    Article_DEL,
    BL_Ligne,
    BL_Ligne_DEL,
    BonLiv,
    BonLiv_DEL,
    CDE_Ligne,
    Caracteristique,
    Commande,
    Fournisseur,
    Fournisseur_DEL,
    Groupe,
    MSG,
    MSG_DEL,
    MSG_PieceJointe,
    MSG_Salon,
    Marque,
    Possede,
    Produit,
    Produit_DEL,
    Rayon,
    TVA,
    Type_Caracteristique,
    Type_PieceJointe,
    Utilisateur,
    Utilisateur_DEL,
    Ville,
  };
}
