import { ProxyState } from "../AppState.js";
import { snackServices } from "../Services/SnacksServices.js";

function _drawSnacks() {
    let snacks = ProxyState.snacks
    let template = ''
    snacks.forEach(s => template += s.Template)
    document.getElementById('items').innerHTML = template
}

function _drawMoney(){
    // snackServices.makeMoney()
    document.getElementById('money').innerText = ProxyState.money
}

function _drawCart(){

}



export class SnacksController{
    constructor(){
        _drawSnacks()
        _drawMoney()
    }
    insertMoney(){
        snackServices.makeMoney()
        _drawMoney()
    }
}