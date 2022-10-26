import { IAd } from "../interfaces/domain/ad";

export class Ad implements IAd {
    public id?: string;
    public gameId: string;
    public name: string;
    public yearsPlaying: number;
    public discord: string;
    public weekDays: string;
    public hourStart: number;
    public hourEnd: number;
    public useVoiceChannel: boolean;
    public createdAt: Date;
  
    constructor(ad: IAd) {
        this.id = ad.id;
        this.createdAt = ad.createdAt;
        this.gameId = ad.gameId;
        this.name = ad.name;
        this.yearsPlaying = ad.yearsPlaying;
        this.discord = ad.discord;
        this.weekDays = ad.weekDays;
        this.hourStart = ad.hourStart;
        this.hourEnd = ad.hourEnd;
        this.useVoiceChannel = ad.useVoiceChannel;
    }
}