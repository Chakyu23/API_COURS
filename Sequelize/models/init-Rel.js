import {Produit} from "./Produit.js";
import {MSG_PieceJointe} from "./MSG_PieceJointe.js";
import {Caracteristique} from "./Caracteristique.js";
import {Article} from "./Article.js";
import {Possede} from "./Possede.js";
import {Marque} from "./Marque.js";
import {CDE_Ligne} from "./CDE_Ligne.js";
import {MSG_Salon} from "./MSG_Salon.js";
import {Rayon} from "./Rayon.js";
import {TVA} from "./TVA.js";
import {Type_Caracteristique} from "./Type_Caracteristique.js";
import {BL_Ligne} from "./BL_Ligne.js";
import {BonLiv} from "./BonLiv.js";
import {Commande} from "./Commande.js";
import {Fournisseur} from "./Fournisseur.js";
import {MSG} from "./MSG.js";
import {Type_PieceJointe} from "./Type_PieceJointe.js";
import {Utilisateur} from "./Utilisateur.js";
import {Groupe} from "./Groupe.js";
import {Ville} from "./Ville.js";


export function initRel() {
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

}