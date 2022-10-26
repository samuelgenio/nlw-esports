const dotenv = require("dotenv");
const swaggerAutogen = require("swagger-autogen")();
const baseFile = require("./swagger.json");
import RoutesDiscovery from './src/ports/http/routesDiscovery'

dotenv.config({path: ".env"});

const outputFile = "./swagger_output.json";

const baseDirName = './src/ports/http/routes/swagger/';

const listEndpointFiles = new RoutesDiscovery().loadRoute("swagger", false)
    .map((fileName:string) => baseDirName+fileName)

const contextPath = process.env.CONTEXT_PATH || "";

baseFile.basePath = `${contextPath}/api`;

swaggerAutogen(outputFile, listEndpointFiles, baseFile);
