export interface Character {
    id:number;
    name:string;
    location:Location;
    status:string;
    type:string;
    gender:string;
    species:string;
    origin: Origin;
    url:string;
    image:string;
    created:string;
}
interface Location{
    name:string;
    url:string;
}
interface Origin{
    name:string;
    url:string;
}
