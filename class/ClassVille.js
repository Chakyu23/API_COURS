import {Ville} from "../Sequelize/models/Ville.js";
import {Op} from 'sequelize';

export class City {
    constructor() {
    }

    async SelectCity(Nom, CodePostal) {

        Ville.findOne({
            where: {
                [Op.or]: [{ Nom: Nom }, { CodePostal: CodePostal }],
            }
        })

    }
}