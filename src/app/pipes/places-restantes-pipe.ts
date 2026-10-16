import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'placesRestantes' })
export class PlacesRestantesPipe implements PipeTransform {
  transform(places: number, seuil: number = 5): string {
    if (places <= 0) return 'Complet';
    if (places === 1) return 'Dernière place !';
    if (places <= seuil) return `Plus que ${places} places`;
    return `${places} places disponibles`;
  }
}