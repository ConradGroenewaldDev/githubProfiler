import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

	@Injectable()
export class GithubService{
	private username:string;
	private client_is = '9f3c71dfd09c1648905d';
	private client_secret = 'd298f4dea28aa7115a9b43f17e9b2a907938a97a';
	
constructor(private _http: Http){
	console.log('Service ready....');
	this.username = 'conradgroenewalddev';
	}
	
getUser(){
	return this._http.get('http://api.github.com/users/' + this.username + '?client_id='
		+ this.client_id + '&client_secret=' + this.client_secret)
		.map(res => res.json());
}
}