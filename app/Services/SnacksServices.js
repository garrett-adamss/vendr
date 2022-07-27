import { ProxyState } from "../AppState.js";

class SnacksServices{

makeMoney(){ 
    // business stuff like
    // what type of coin was it
    // real coin
    //  
    ProxyState.money += 0.25
}

}

export const snackServices = new SnacksServices