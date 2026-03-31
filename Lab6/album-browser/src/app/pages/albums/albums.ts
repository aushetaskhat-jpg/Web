import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}
  ngOnInit() {
  this.albumService.getAlbums().subscribe(data => {
    this.albums = data;
  });
}

  deleteAlbum(id: number) {
  this.albumService.deleteAlbum(id).subscribe(() => {
    this.albums = this.albums.filter(a => a.id !== id);
  });
}

}