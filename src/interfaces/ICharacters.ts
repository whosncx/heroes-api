export interface ICharacters{
        appearance: {
          eyeColor: string,
          gender: string,
          hairColor: string,
          height: string[]
          race: string| null,
          weight: string[]
        },
        biography: {
          aliases: string[],
          alignment: string,
          alterEgos: string,
          firstAppearance: string,
          fullName: string,
          placeOfBirth: string,
          publisher:string
        },
        connections: {
          groupAffiliation: string,
          relatives: string
        },
        id: number,
        images: {
          lg: string,
          md: string,
          sm: string,
          xs: string
        },
        name: string,
        powerstats: {
          combat: number,
          durability: number,
          intelligence: number,
          power: number,
          speed: number,
          strength: number
        },
        slug: string,
        work: {
          base:string,
          occupation:string
        }
      
}
