import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
/*ngOnInit() {
  this.albumService.getAlbums().subscribe(data => {
    const deleted = this.albumService.getDeletedIds();
    this.albums = data.filter(a => !deleted.includes(a.id));
  });
}
  deleteAlbum(id: number) {
  this.albumService.deleteAlbum(id).subscribe(() => {

    this.albumService.markDeleted(id);

    this.albums = this.albums.filter(a => a.id !== id);

  });
}*/
/*getDeletedIds(): number[] {
    const raw = localStorage.getItem(this.deletedKey);
    return raw ? JSON.parse(raw) : [];
  }

  markDeleted(id: number): void {
    const ids = this.getDeletedIds();
    if (!ids.includes(id)) {
      ids.push(id);
      localStorage.setItem(this.deletedKey, JSON.stringify(ids));
    }
  }*/