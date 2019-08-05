import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { 
    
  }

  ngOnInit() {
  }

  buscar(termino:string){
    if(termino!=""){
      this.loading = true;
      this.spotify.getArtistas(termino).subscribe( (response:any) =>{
        this.artistas = response;
        this.loading = false;
      })
    }else{
      return [];
    }
    
    
  }
}
