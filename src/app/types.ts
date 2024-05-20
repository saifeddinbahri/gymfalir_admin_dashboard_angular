export interface Items{
    nom: String,
    id: String,
    prix: Number,
    reservation: String,
    desc: String,
    image: String
}

export interface CoachItems{
    firstname: String,
    _id: String,
    lastname: Number,
    photo: String,
    speciality: String,
    phone: String,
    email: String
}

export interface CourItems {
    _id: String,
    nom: String,
    capacite: Number, 
    date: String, 
    start: Number, 
    end: Number, 
    count: Number
    coach: any,
    booked: boolean
}

export interface EventItems {
    _id: String, 
    nom: String,
    desc: String, 
    date: String, 
    start: String, 
    photo: String,
    count: String
}

export const url = 'http://localhost:3002/image/'