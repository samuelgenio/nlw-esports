
export default (server: any) => {
  server.get("/ads/:id/discord", (req: any, res: any) => {
    // #swagger.tags = ['ads']
    // #swagger.description = 'Obtém discord do anúncio'
    // #swagger.responses[200] = {schema: {"discord": "Skill Yuan#007"}}
  })
};
