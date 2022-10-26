import { IAdController } from "../../../../interfaces/controllers/IAdController";

export default (adController: IAdController) => [
  {
    method: 'GET',
    path: '/ads/:id/discord',
    handler: adController.getDiscordById
  },
  {
    method: 'POST',
    path: '/games/:id/ads',
    handler: adController.create
  },
]