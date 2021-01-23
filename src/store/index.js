import { runInAction, makeAutoObservable} from "mobx"

class main{
    id=1
    likes=3
    imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
    prevButtonDisable=true
    comments=['wow','samurai']

    constructor() {
        makeAutoObservable(this);

    }
    get commentsCount(){
        return this.comments.length
    }
    likeThis(x){
        if(x){
            this.likes++
        }else {
            if(this.likes>0)this.likes--
        }
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
export default appStore