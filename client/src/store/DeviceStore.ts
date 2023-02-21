import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'GoblinsType'},
            {id: 2, name: 'JohnSenaTypes'}
        ]
        this._brands = [
            {id: 1, name: 'LittleBrand'},
            {id: 2, name: 'AnotherBrand'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 112', price: 9999, rating: 4, img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`},
            {id: 2, name: 'Iphone 112', price: 9999, rating: 4, img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`},
            {id: 3, name: 'Iphone 112', price: 9999, rating: 4, img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`},
            {id: 4, name: 'Iphone 112', price: 9999, rating: 4, img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`},
            {id: 5, name: 'Iphone 112', price: 9999, rating: 4, img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._diveces = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}