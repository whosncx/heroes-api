import { Request, Response } from "express-serve-static-core"; 
import { ErrosHttp } from "../../controller/errorHttp/errorsHttp";
import { HeroesController } from "../../controller/heroesController";
import { ICharacters } from '../../interfaces/ICharacters';

export class HeroesBusiness{
    static validateHeroName(name: string){
        if(name === '' || name === null || name === undefined || typeof name !== 'string'){
            throw new Error ("invalid-name")
        }
    }
    public async getHeroes(req: Request,res:Response){ 
        try{
            const controller = new HeroesController();
            const heroes:ICharacters[] = await controller.getHero()
            res.status(200).json(heroes)
        } catch(err:any){
            new ErrosHttp(err,res).checkError()
        }
    }
    public async searchHeroes(req: Request,res:Response):Promise<void>{
        const {heroName}= req.params
        try{
        HeroesBusiness.validateHeroName(heroName)
        const controller = new HeroesController();
        const hero:ICharacters = await controller.searchHero(heroName)
        res.status(200).json(hero)
        } catch(err:any){
            new ErrosHttp(err,res).checkError()
        }
    }
}