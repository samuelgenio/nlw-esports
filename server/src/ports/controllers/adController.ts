import { convertHourStringToMinutes } from "../../application/commom/dateUtil"
import { IAdController } from "../../interfaces/controllers/IAdController"
import { IAd } from "../../interfaces/domain/ad"
import { IAdRepository } from "../../interfaces/repositories/IAdRepository"

export default class AdController implements IAdController {

    adRepository: IAdRepository

    constructor(adRepository: IAdRepository) {
        this.adRepository = adRepository
    }

    create = async (req: any, res: Response) => {
        
        const ad: IAd = {
            ...req.body,
            gameId: req.params.id,
            weekDays: req.body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(req.body.hourStart),
            hourEnd: convertHourStringToMinutes(req.body.hourEnd),
        }

        return this.adRepository.create(ad)

    }

    getDiscordById = async (req: any, res: Response) => {
        return this.adRepository.findDiscordById(req.params.id)
    }

}