export class User{
    id?:string;
    name:string;
    email:string;
    password:string;
    tokens:number;
    publishedTotal?:number;
    constructor(){
        this.tokens = 1000;
    }
}