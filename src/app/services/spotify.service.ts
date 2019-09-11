import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDgMhHjssQ8yMUT_1lzD_6XXhamKXJk6Pp65mlIzVVBUzIbCu7Og7NWqGsLE5CgkK1Rna0cOD1lk6shJq0'
     });

     return this.http.get(url,{ headers });
  }

  getNewReleases(){

    //const headers = new HttpHeaders({
     //'Authorization' : 'Bearer BQCV5Nhf7qAs10QKavge1HeMQ79adPe11qXqKzvhqVyaF7JB7paRTDKQBdvFUVQ-w2sxT0WzFlekhoF7t30'
    //});

    return this.getQuery('browse/new-releases?Limit=20')
                         .pipe(map( data => data['albums'].items));
               
  }

    getArtistas(termino: string ) {
          
       return this.getQuery(`search?query=${ termino }&type=artist&market=AR&offset=0&limit=15`)
                       .pipe( map(data => data['artists'].items));
                       
  }

  getArtista( id: string ) {
          
    return this.getQuery(`artists/${ id }`);
                    //.pipe( map(data => data['artists'].items));
                    
}
  getTopTracks( id: string ) {
          
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                  .pipe( map(data => data['tracks']));
                  
}
}
