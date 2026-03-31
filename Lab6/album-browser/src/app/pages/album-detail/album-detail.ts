import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: any = null;
  albumId = 0;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('AlbumDetail id =', this.albumId);

    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        console.log('album data =', data);
        this.album = data;
      },
      error: (err) => console.error('getAlbum error', err),
    });
  }
}