import { convertMinutesToHourString } from "../../application/commom/dateUtil"
import { IGameController } from "../../interfaces/controllers/IGameController"
import { IGameRepository } from "../../interfaces/repositories/IGameRepository"

export default class GameController implements IGameController {

    gameRepository: IGameRepository

    constructor(gameRepository: IGameRepository) {
        this.gameRepository = gameRepository
    }

    getById = async (req: any, _res: Response) => {
        return this.gameRepository.findById(req.params.id).then(resp => resp.map(ad => {
			return {
				...ad,
				weekDays: ad.weekDays.split(','),
				hourStart: convertMinutesToHourString(ad.hourStart),
				hourEnd: convertMinutesToHourString(ad.hourEnd)
			}
		}))
    }

    getAll = async (_req: Request, _res: Response) => {
        return this.gameRepository.find()
    }
}