import { readdirSync } from "fs";
import path from "path";

export default class RoutesDiscovery {

  loadRoute(dirName = "api", camelize = true) {

    const routes: any = []
    readdirSync(path.join(__dirname, `./routes/${dirName}`)).forEach((fileName: String) => {
      const name = camelize ? this.camelize(fileName.replace(".ts", "").replace(".js", "")) : fileName
      routes.push(name)
    });

    return routes;
  }

  camelize(str: String) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

}