import {HeroesApiService} from "../services/heroesApiService"
import { ICharacters } from '../interfaces/ICharacters';

export class VillainsController{
    private service: HeroesApiService
    private villains: ICharacters[]
    constructor(){
        this.service = new HeroesApiService()
        this.villains = []
    }

   async getVillians(){
        try{
            this.villains = await this.service.getVillains()
        } catch(err:any){
            const erro = new Error()
            erro.name = "get-villains-erro"
            erro.message = err
            throw erro
        }
        return this.villains
   }

}