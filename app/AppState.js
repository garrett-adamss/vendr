import { Snack } from "./Models/snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0;
  
  /** @type {import('./Models/snacks').Snack[]} */
snacks = [
  new Snack('Bread', 5, 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slice_of_bread_with_mould_%281%29.jpg', 360),
  new Snack('Rebull', 2.50, 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Red_Bull_ice.jpg', 245),
  new Snack('Franks Red Hot', 6, 'https://m.media-amazon.com/images/I/81BXd6vADBL._SX522_.jpg'),
  new Snack('Chicken Feet', 7, 'https://gofflepoultry.com/wp-content/uploads/2017/02/chicken-feet-cleaned.jpg'),
  new Snack('Banana', 1.75, 'https://i.redd.it/2b248i0mw0081.jpg', 65)
]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
