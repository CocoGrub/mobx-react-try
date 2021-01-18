import { makeObservable, observable, action } from "mobx"

class main{
    @observable imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
}

const appStore=new main()

export default appStore