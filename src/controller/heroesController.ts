import {HeroesApiService} from "../services/heroesApiService"
import { ICharacters } from '../interfaces/ICharacters';

export class HeroesController{
    private service: HeroesApiService
    private heroes:ICharacters[]
    private hero:ICharacters    
    constructor(){
        this.service = new HeroesApiService()
        this.heroes=[]
        this.hero = {
            appearance: {
              eyeColor: "",
              gender: "",
              hairColor: "",
              height: [],
              race: "",
              weight: []
            },
            biography: {
              aliases: [],
              alignment: "",
              alterEgos: "",
              firstAppearance: "",
              fullName: "",
              placeOfBirth: "",
              publisher:""
            },
            connections: {
              groupAffiliation: "",
              relatives: ""
            },
            id: 0,
            images: {
              lg: "",
              md: "",
              sm: "",
              xs: ""
            },
            name: "",
            powerstats: {
              combat: 0,
              durability: 0,
              intelligence: 0,
              power: 0,
              speed: 0,
              strength: 0
            },
            slug: "",
            work: {
              base:"",
              occupation:""
            }
          
        }
    }

   async getHero():Promise<ICharacters[]>{
        try{
            this.heroes = await this.service.getHeroes()
        }catch(err:any){
            const erro = new Error();
            erro.name = "get-hero-error"
            erro.message = err
            throw err
        }
        return this.heroes
   }

   async searchHero(heroName:string){
        try{
            
            this.hero= await this.service.searchHero(heroName)
        } catch(err:any){
            const erro = new Error();
            erro.name = "search-hero-error"
            erro.message = err
            throw err
        }
        return this.hero
   }
}