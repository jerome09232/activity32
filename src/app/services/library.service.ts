import { Injectable } from '@angular/core';
import { Book } from '../models/library.mode';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private bookList: Book[] = [
    {
      title: 'The Road',
      author: 'Cormac McCarthy',
      genre: 'post-apocalyptic novel',
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMyXfytfecHc5C4zkpa7KG-GPppmcochwcD_elPZNSffw5MvtgyFXC4Y6uyqFMKeprStO-JTPLMkpuf8RnWD1gj3Kbkqj5vFWzt13ncDS3',
    },
    {
      title: 'Scythe',
      author: 'Neal Shusterman',
      genre: 'science fiction novel',
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGzXKxRFGNMWrBwb9AdpPBYa_Z1J8dvayDUXtz_YvD-z7ZoGvzvwSW_P1bihgrxdBxs3CzS7-ndqECva0vq56w7sZD2iC7yZR63TP6a2JQxsqHBEav94CPJw',
    },
    {
      title: 'The Butcher',
      author: 'Jennifer Hillier',
      genre: 'psychological thriller',
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRM3mhzVZiB0qztDWffLu8BFGzDhcpluDl0baLE0XuP_Hk9J7aq8cT_kLtwP2krkADIztGnLV5UxKFaxoshUwoqfwts_POIt9OB2kr4zag',
    },
    {
      title: 'The God of the Woods',
      author: 'Liz Moore',
      genre: 'mystery',
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRy8iWKfsm-J4jJl3HEwOBBpi7Wyp3AkF6yp_OZ5bkqdiVjY6wz-QdbVUfX8iOSGOiNlJ7WoY4JtU8XsZIfRvG-jfZNi9i0jikJhIolF3semaojgD5lnBaC',
    },
    {
      title: 'Journey Under the Midnight Sun',
      author: 'Robert Martin',
      genre: 'Keigo Higashino',
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQm2Z-7S1HwRF4z3C9i9Z6bRNH4GMrjLFtdM8aPBhN3HUs1HJTGKPhDZ9S5GMoprXVuw46YAyADrc-xkkSHqwCg5_BDBnkI',
    },
    {
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
      genre: 'autobiography',
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4poSktOkazAo5iyN6thN9AJyL1Du3lrAaPevYQFNcKPhEEXe1kFKG3xs1v_ddiTOWndXqwRpOBQx3AZ3_3U3cuorsRFK0U0c7JIX8BTb7ygTafdpiHCRyNQ ',
    },
  ];

  getBookList() {
    return this.bookList;
  }
}
