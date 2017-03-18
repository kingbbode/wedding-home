export class Gallery {
    constructor(
        public idx : number = 0,
        public title : string = "",
        public subtitle : string = "",
        public content : string = "",
        public imagesJson : string = '["","",""]',
        public type : string = "IMAGE"
    ){}
}