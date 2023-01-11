import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { ICharacters } from '../interfaces/ICharacters';

export class HeroesApiService{
    private apiHost:string = process.env.API_HOST || ""
    private apiKey: string = process.env.API_KEY || ""
    private headers:any
    private hero:ICharacters
    private heroesList:ICharacters[]
    private villainsList:ICharacters[]
    constructor(){
        this.headers ={
            'X-RapidAPI-Key':this.apiKey,
            'X-RapidAPI-Host':this.apiHost
        }
        this.heroesList=[]
        this.villainsList=[]
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

    public async getHeroes():Promise<ICharacters[]>{
        try{
           this.heroesList =  await axios.get(`https://${this.apiHost}/api/heroes`, { headers:this.headers })
        }catch(err:any){
            throw err
        }

        return this.heroesList
    }
    public async getVillains(){
        try{
           this.villainsList =  await axios.get(`https://${this.apiHost}/api/villains`, this.headers)
        }catch(err:any){
            throw err
        }
        return this.villainsList
    }
    public async searchHero(heroName:string){
        try{
           this.hero =  await axios.post(`https://${this.apiHost}/api`, this.headers,{ params: {heroName}})
        }catch(err:any){
            throw err
        }
        return this.hero
    }
}