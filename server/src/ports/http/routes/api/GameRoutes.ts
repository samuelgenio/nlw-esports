import { IGameController } from "../../../../interfaces/controllers/IGameController";

export default (gameController: IGameController) => [
  {
    method: 'GET',
    path: '/games',
    handler: gameController.getAll
  },
  {
    method: 'GET',
    path: '/games/:id/ads',
    handler: gameController.getById
  },
]