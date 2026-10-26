import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comic } from '../../../models/Comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  public arrayComics!: Array<Comic>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _cs: ComicsService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayComics = await this._cs.getComicsAsync();
    this._cdr.detectChanges();
  }
}
