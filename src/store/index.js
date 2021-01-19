import {makeObservable, observable, action, runInAction, makeAutoObservable} from "mobx"

class main{
    id=1
    imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
    constructor() {
        makeAutoObservable(this);

    }

    async nextImage (){

        this.fetchId = ++this.id
        try {
            const  response = await fetch(`https://rickandmortyapi.com/api/character/avatar/${this.fetchId}.jpeg`)
            // const res = response.json()
            console.log(response)
            runInAction(() => {
                this.imageUrl = response.url

            })

        }catch (e){
            console.log(e)
        }

    }
}

const appStore=new main()

export default appStore