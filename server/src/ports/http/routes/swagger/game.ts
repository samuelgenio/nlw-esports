
export default (server: any) => {
  server.get("/games", (req: any, res: any) => {
    // #swagger.tags = ['games']
    // #swagger.description = 'Obtém todos os games'
    // #swagger.responses[200] = {schema: [{"id": "bdf729ac-9336-4da8-9811-2e6ac6955942","title": "League of Legends","bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg","_count": {"ads": 6}}]}
  })

  server.get("/games/:id/ads", (req: any, res: any) => {
    // #swagger.tags = ['games']
    // #swagger.description = 'obtém os anúncios de um game'
    // #swagger.responses[200] = {schema: [{"id": "4ff006f5-17b0-4668-b57b-8bf50c0bbb9f","name": "samuel","weekDays": ["0","5","6"],"useVoiceChannel": true,"yearsPlaying": 2,"hourStart": "12:00","hourEnd": "15:00"}]}  
  })
  
  server.post("/games/:id/ads", (req: any, res: any) => {
    // #swagger.tags = ['ads']
    // #swagger.description = 'Adiciona um anúncio em um game'
    // #swagger.parameters['obj'] = {in: 'body',description: 'Exemplo de corpo',schema: {"name": "samuel","yearsPlaying": 2,"discord": "Samuel #1234","weekDays":[0,5,6],"hourStart":"12:00","hourEnd":"15:00","useVoiceChannel": true}}
    // #swagger.responses[200] = {schema: {"id": "1e6a634f-531f-490d-b0b1-aa1d27645af4","gameId": "bdf729ac-9336-4da8-9811-2e6ac6955942","name": "samuel","yearsPlaying": 2,"discord": "Samuel #1234","weekDays": "0,5,6","hourStart": 720,"hourEnd": 900,"useVoiceChannel": true,"createdAt": "2022-10-26T13:31:31.001Z"}}
  })
};
