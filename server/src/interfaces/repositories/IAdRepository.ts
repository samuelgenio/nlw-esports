import { IAd } from "../domain/ad";

export interface IAdRepository {
	findDiscordById(id: string): Promise<{discord: string} | null>;
	create(ad: IAd): Promise<IAd | null>;
}
