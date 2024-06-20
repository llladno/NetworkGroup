import {Modification} from "../types/types.ts";

class Api {

    modifications: Modification[] = []

    constructor() {
        this.fetchData()
    }

    async fetchData() {
        this.modifications = await fetch('/data/data.json').then(res => res.json()).then(result => result).catch(err => console.log(err))
    }

    getAllModifications(): Promise<Modification[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.modifications)
            }, 500)
        })
    }

    getModificationById(id: number): Promise<Modification | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.modifications.find(modification => modification.id === id))
            }, 500)
        })
    }

    getModificationRecommend(id: number): Promise<Modification[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.modifications.filter(modification => modification.id !== id))
            }, 500)
        })
    }

    getModificationsImg(): Promise<{ id: number, img: string }[]> {
        return new Promise((resolve) => {
            if (this.modifications.length === 0) {
                this.fetchData().then(() => {
                    resolve(this.modifications.map((modification) => ({
                        id: modification.id,
                        img: modification.img.preview
                    })))
                })
            } else resolve(this.modifications.map((modification) => ({
                id: modification.id,
                img: modification.img.preview
            })))
        })
    }
}


export default new Api()