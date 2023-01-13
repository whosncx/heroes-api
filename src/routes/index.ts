/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { Request, Response, Application } from "express";
import { HeroesBusiness } from "../business/Heroes/index";
import { VillainsBusiness } from "../business/Villains/index";
export class Register {
  public app: Application;
  public villains: VillainsBusiness;
  public heroes: HeroesBusiness

  constructor(app: Application) {
    this.app = app;
    this.villains = new VillainsBusiness();
    this.heroes =  new HeroesBusiness();
  }

  public setRoutes() {
    this.app.use("/*", (req: Request, res, next) => {
        const { originalUrl, method } = req;
        console.info(
          `Access: Authorized | Method: ${method} | Accessed: ${originalUrl}`
        );
        next();
    });
    this.app.get("/", (_req: Request, res: Response) =>
      res.send("heroes Api!")
    );
    this.app.get("/health-check", (_req: Request, res: Response) =>
      res.status(200).json({ result: true, data: null })
    );
    this.app.get("/villains", this.villains.getVillains);
    this.app.get("/heroes", this.heroes.getHeroes);
    this.app.get("/heroes/:heroName", this.heroes.searchHeroes);
  }
}
