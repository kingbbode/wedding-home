export class Gallery {
    idx : number;
    title : string = '';
    subtitle : string = '';
    content : string = '';
    imagesJson : string = '';
    type : string = 'IMAGE';

    constructor(values : Object = {}){
        Object.assign(this, values);
    }
}