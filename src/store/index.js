import {makeObservable,get, observable, action, runInAction, makeAutoObservable} from "mobx"

class main{
    id=1
    imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
    prevButtonDisable=true
    comments=['wow','samurai']
    get commentsCount(){
        return this.comments.length
    }
    constructor() {
        makeAutoObservable(this);

    }
    pushComment(x){
        this.comments.push(x)

    }
    async nextImage (x){
        if(x==='prev'){
            this.fetchId = --this.id
        }else {
            this.fetchId = ++this.id
        }
        try {
            const  response = await fetch(`https://rickandmortyapi.com/api/character/avatar/${this.fetchId}.jpeg`)
            runInAction(() => {
                this.imageUrl = response.url
                this.prevButtonDisable = this.id <= 1;
            })
        }catch (e){
            console.log(e)
        }

    }
}

const appStore=new main()
console.log(appStore)
export default appStore