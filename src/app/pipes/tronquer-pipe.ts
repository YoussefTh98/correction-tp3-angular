import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer',
})
export class TronquerPipe implements PipeTransform {
  transform(titre: string, longueur: number): string {
    if (typeof titre !== 'string') {
      return '';
    }
    return titre.length > longueur ? titre.substring(0, longueur) + '...' : titre; 
  }
}
