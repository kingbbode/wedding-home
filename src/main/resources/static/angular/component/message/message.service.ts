import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Message} from "./message";

@Injectable()
export class MessageService {
    private url : string = "/message";

    constructor(private http : Http){}

    getList(): Observable<Message[]> {
        return this.http.get(this.url)
            .map((response: Response) => <Message[]> response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    save(message : Message): Observable<{}> {
        return this.http.post(this.url, message)
            .map((response: Response) => response)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}