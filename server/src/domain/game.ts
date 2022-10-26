import { Ad } from "./ad";

export class Game {
    public id?: string;
    public title: string;
    public bannerUrl: string;
    public ads: Ad[];
  
    constructor(game: { id?: string; bannerUrl: string; ads: Ad[]; title: string }) {
        this.id = game.id;
        this.bannerUrl = game.bannerUrl;
        this.ads = game.ads;
        this.title = game.title;
    }
}
