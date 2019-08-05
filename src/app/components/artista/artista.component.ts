import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any[];
  topTracks:any[];
  loading:boolean;

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params =>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
   }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe((response:any) => {
      this.artista = response;
      this.loading = false;
    })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe((response:any) => {
      this.topTracks = response;
      console.log(response)
    })
  }

}
