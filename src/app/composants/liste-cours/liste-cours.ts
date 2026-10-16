import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { UpperCasePipe } from '@angular/common';
import{PlacesRestantesPipe} from '../../pipes/places-restantes-pipe';
import{TronquerPipe} from '../../pipes/tronquer-pipe';
export interface Cours {
  titre: string;
  categorie: string;
  duree: string;
  places: number;
}

@Component({
  selector: 'app-liste-cours',
  imports: [FormsModule, FiltreCoursPipe, TriCoursPipe , UpperCasePipe, PlacesRestantesPipe, TronquerPipe] ,
  templateUrl: './liste-cours.html',
  styleUrl: './liste-cours.css'
})
export class ListeCours {
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;
  cours: Cours[] = [
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 0 },
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 1 },
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 3 },
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 },
  ];
  

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}