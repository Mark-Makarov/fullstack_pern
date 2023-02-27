import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'GoblinsType'},
            {id: 2, name: 'JohnSenaTypes'},
            {id: 3, name: 'AnubisTypes'},
            {id: 4, name: 'MillenniumTypes'},
            {id: 5, name: 'AbstractTypes'},
            {id: 6, name: 'RedTypes'},
        ]
        this._brands = [
            {id: 1, name: 'LittleBrand'},
            {id: 2, name: 'AnotherBrand'},
            {id: 3, name: 'BoomBrand'},
            {id: 4, name: 'AngelBrand'},
        ]
        this._devices = [
            {
                id: 1,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 2,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 3,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 4,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 5,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 6,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 7,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
            {
                id: 8,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },{
                id: 9,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },{
                id: 10,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },{
                id: 11,
                name: 'Iphone 112',
                price: 9999,
                rating: 4,
                img: `https://wallbox.ru/resize/800x480/wallpapers/main2/201730/glaza.jpg`
            },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
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

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}