import { Request, Response } from "express-serve-static-core"; 
import { ICharacters } from '../../interfaces/ICharacters';
import { ErrosHttp } from "../../controller/errorHttp/errorsHttp";
import { VillainsController } from "../../controller/villainsController";
export class VillainsBusiness{
    static validateHeroName(name: string){
        if(name === '' || name === null || name === undefined || typeof name !== 'string'){
            throw new Error ("invalid-name")
        }
    }
    public async getVillains(req: Request,res:Response){
        const controller = new VillainsController();
        const villains = await controller.getVillians()
        res.status(200).json(villains)
        try{
        } catch(err:any){
            new ErrosHttp(err,res)
        }
    }
}