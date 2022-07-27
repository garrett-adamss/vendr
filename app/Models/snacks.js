
export class Snack{
    constructor(name, price, img, cal){
        this.name = name,
        this.price = price, 
        this.img = img,
        this.cal = cal || `not specified`
    }

    get Template() {
        return `
            <div class="col-5 snack-item p-0 m-2" onclick="order('${this.name}')">
            <img class="img-fluid" src="${this.img}"alt="test">
            <p class="text-light p-2 snack-name mb-0">${this.name}</p>
            <p class="text-dark p-2 price">${this.price}</p>
          </div>        `
    }
    get cartTemplate(){
        return `
        <div class="col-5 text-end mt-1 mb-1"><b>${order.name}</b></div>
        <div class="col-1 mt-1 mb-1"><b>:</b></div>
        <div class="col-3 mt-1 mb-1"><b>${order.price}</b></div>
        <button class="col-2 btn btn-outline-danger btn-sm mt-1 mb-1" onclick="deleteItem()">DELETE</button>               

        `
    }
}
