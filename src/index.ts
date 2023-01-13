import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as cors from "cors";
import { Register } from "./routes/index";
export default class App {
    public app: express.Application;
    public register!: Register;
    public port: string| number;

    constructor(){
        this.app = express()
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.port = 3001;
        this.middlewares();
        this.routes()
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
        this.register = new Register(this.app);
        this.register.setRoutes();
    }
    public run(): express.Application {
        return this.app;
      }
}