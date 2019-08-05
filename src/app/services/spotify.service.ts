import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCytFuvVC6KC5kEFkylCJyoGdE3w1wbm8cbuyCSiUE-Ac7-f7PtmklbWNPIbyB5GdQE8njoup2L2Gijhj8'
    })
    return this.http.get(url,{headers});
  }

  getNewRelease(){
    return this.getQuery("browse/new-releases").pipe(map(response=>response['albums'].items))
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(response=> response['artists'].items))
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=CO`).pipe(map(response => response['tracks']))
  }
}
