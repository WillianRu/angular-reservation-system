import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { FilmModel } from '../../../../core/models/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  films = [
    {
      name: 'Wonka',
      img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/5/9/8/5/45895-7-esl-CO/7c81efc87689-warner_wonka_cinecol_480x670.jpg',
      genre: 'Aventura, Comedia, familiar',
      movieLength: 117
    },
    {
      name: 'Soul',
      img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/6/3/6/2/52636-1-esl-CO/ddad02939728-poster_480x670.png',
      genre: 'Animacion, aventura, comedia',
      movieLength: 100
    },
    {
      name: 'Aquaman',
      img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/4/4/9/49441-1-esl-CO/4a01e94b2e5f-480x670.jpg',
      genre: 'Acción, aventura, fantasia',
      movieLength: 115
    },
    {
      name: 'Wish',
      img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/7/6/8/4/44867-5-esl-CO/5a5734caa819-poster_480x670.png',
      genre: 'Animacion, aventura, comedia',
      movieLength: 92
    },
    {
      name: 'Radical',
      img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/9/6/1/1/51169-5-esl-CO/d5a66f72f9b0-2_poster_480x670.png',
      genre: 'Drama',
      movieLength: 125
    }
  ]
  waiting = [
      {
        name: 'El niño y la garza',
        img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/7/6/2/52671-1-esl-CO/c4a1bd997931-480x670.jpg',
        genre: 'Aventura, Comedia, familiar',
        movieLength: 124
      },
      {
        name: 'Pobres criaturas',
        img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/8/0/9/1/51908-1-esl-CO/87a81d2e0170-poster_480x670.png',
        genre: 'Ciencia ficción, romance',
        movieLength: 141
      },
      {
        name: 'Ritos ocultos',
        img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/6/7/7/2/52776-2-esl-CO/ab62c7576e35-lom_cineco_pstr-dskp_480x670.png',
        genre: 'Terror',
        movieLength: 115
      },
      {
        name: 'Anatomia de una caida',
        img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/1/8/9/1/51981-1-esl-CO/0011f6a122c2-afll_cineco_pstr-dskp_480x670.png',
        genre: 'Crimen, drama, suspenso',
        movieLength: 151
      },
      {
        name: 'Zona de interes',
        img: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/6/4/9/1/51946-1-esl-CO/e7f541ce3904-zoi_cineco_pstr-dskp_480x670.png',
        genre: 'Drama, historia',
        movieLength: 105
      }
    ]

}
