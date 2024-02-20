export class Helper {
    static plural = (n : number, single : string, plural : string) => {
        return ( n != 1 ) ? plural : single; 
    }
}