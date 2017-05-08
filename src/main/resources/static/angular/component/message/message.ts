export class Message {
    constructor(
        public name : string = "",
        public content : string = ""
    ){}

    init(){
        this.name = "";
        this.content = "";
    }
}