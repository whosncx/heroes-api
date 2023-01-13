import * as express from "express";
export class ErrosHttp  extends Error {
    private error:Error;
    private res:express.Response
    private next: any;
    private statusCode:number
    private messageError:any

    constructor(
        error: Error,
        res: express.Response,
        next?: express.NextFunction,
      ) {
        super();
        this.error = error;
        this.statusCode = 0;
        this.res = res;
        this.next = next || null;
        this.messageError = { message: '' };
        this.checkError();
      }

    public checkError(){
        switch (this.error.message){
            case "get-villains-erro":
                this.messageError.message = "Sorry, we couldn't return villains list";
                this.badRequest()
            case "search-heroes-erro":
                this.messageError.message = "Sorry, we couldn't return hero info";
                this.notFound()
            case "get-heroes-erro":
                this.messageError.message = "Sorry, we couldn't return heroes list";
                this.badRequest()
            case "invalid-name":
                this.messageError.message = "Hero name is not valid";
                this.unprocesseableEntity()
        }
 
    }
    public notFound(): express.Response {
        this.statusCode = 404;
        return this.res.status(this.statusCode).json(this.messageError);
      }

    public badRequest(): express.Response {
        this.statusCode = 400;
        return this.res.status(this.statusCode).json(this.messageError);
    }
    public unprocesseableEntity(): express.Response {
        this.statusCode = 422;
        return this.res.status(this.statusCode).json(this.messageError);
    }
}