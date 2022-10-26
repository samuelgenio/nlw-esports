import { PrismaClient } from "@prisma/client";
import { RESOLVER } from "awilix";
import { convertMinutesToHourString } from "../../application/commom/dateUtil";
import { IGameRepository } from "../../interfaces/repositories/IGameRepository";

export default class GameRepositorySqlite implements IGameRepository {
	static[RESOLVER] = {
		name: "gameRepository"
	}

	db: PrismaClient

	constructor(db: PrismaClient) {
		this.db = db
	}

	findById = async (id: string) => {

		const ads = await this.db.ad.findMany({
		select: {
			id: true,
			name: true,
			weekDays: true,
			useVoiceChannel: true,
			yearsPlaying: true,
			hourStart: true,
			hourEnd: true,
		},
		where: {
			gameId: id,
		},
		orderBy: {
			createdAt: 'desc'
		}
		})

		return ads
	}

	find = async () => {
		return this.db.game.findMany({
			include: {
				_count: {
				select: {
					ads: true,
				}
				}
			}
		})
	}
}