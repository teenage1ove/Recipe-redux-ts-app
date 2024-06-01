export interface Irecipe {
    id: number,
    image: string,
    name: string
}

export interface IrecipeData extends Omit<Irecipe, 'id'>  {}