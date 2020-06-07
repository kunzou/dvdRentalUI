export interface Film {
    id: number
    category: string
    description: string
    length: number
    rating: string
    rentalDuration: number
    replacementCost: number
    specialFeatures: string
    title: string    
    actors: {firstName: string, lastName: string}[]
}