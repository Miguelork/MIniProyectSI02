export interface Character {
    id:number;
    name:string;
    location:Location;
    status:string;
    gender:string;
    species:string;
    origin: Origin;
    image:string;
    created:string;
}
interface Location{
    name:string;
}
interface Origin{
    name:string;
}
