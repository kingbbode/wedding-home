import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Gallery} from "./gallery";

@Injectable()
export class GalleryService {
    private url : string = "/cms/gallery";

    constructor(private http : Http){}

    getList(): Observable<Gallery[]> {
        return this.http.get(this.url)
            .map((response: Response) => <Gallery[]> response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    save(gallery : Gallery): Observable<{}> {
        return this.http.post(this.url, gallery)
            .map((response: Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}