import { Comic } from '../../models/Comic';
import { Injectable } from '@angular/core';

@Injectable() 
export class ComicsService {
  getComics(): Promise<Array<Comic>> {
    let path = 'assets/comics.json';
    return fetch(path)
      .then((response) => response.json())
      .then((data: any[]) => {
        let arrayComics: Comic[] = [];
        for (let comic of data) {
          arrayComics.push(new Comic(comic.nombre, comic.imagen, comic.descripcion));
        }
        return arrayComics;
      });
  }

  async getComicsAsync(): Promise<Array<Comic>> {
    let path = 'assets/comics.json';
    let response = await fetch(path);
    let data = await response.json();
    let arrayComics: Comic[] = [];
    for (let comic of data) {
      arrayComics.push(new Comic(comic.nombre, comic.imagen, comic.descripcion));
    }
    return arrayComics;
  }
}
