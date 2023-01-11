import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as cors from "cors";

export default class App {
    public app: express.Application;
    public port: string| number;

    constructor(){
        this.app = express()
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.port = process.env.PORT || 3001;
        this.middlewares();
    }

    public listen():any{
        this.app.listen(this.port,()=>{
            console.info("Application running! Port: " + this.port);
        })
    }
    private middlewares(){
        this.app.use(cors())
    }
    private routes(){
        this.app.use(cors())
    }
    public run(): express.Application {
        return this.app;
      }
}