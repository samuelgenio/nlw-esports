import { PrismaClient } from "@prisma/client";
import { RESOLVER } from "awilix";
import { IAd } from "../../interfaces/domain/ad";
import { IAdRepository } from "../../interfaces/repositories/IAdRepository";

export default class AdRepositorySqlite implements IAdRepository {
	static[RESOLVER] = {
		name: "adRepository"
	}

	db: PrismaClient

	constructor(db: PrismaClient) {
		this.db = db
	}

	create = async (ad: IAd): Promise<IAd | null> => {
		return this.db.ad.create({data: ad})
	}

	findDiscordById = async (id: string): Promise<{discord: string} | null> => {

		const ad = await this.db.ad.findUniqueOrThrow({
		  select: {
			discord: true,
		  },
		  where: {
			id
		  }
		})
	  
		return {
		  discord: ad.discord,
		}
	}
}