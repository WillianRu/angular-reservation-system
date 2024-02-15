import { Injectable } from '@angular/core';
import { FilmModel } from '../../../core/models/film.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmSource = new BehaviorSubject<FilmModel | null>(null);
  currentFilm = this.filmSource.asObservable();

  constructor() { }

  changeFilm(film: FilmModel) {
    this.filmSource.next(film);
  }
}
