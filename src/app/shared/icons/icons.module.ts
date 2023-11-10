import { NgModule } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from "@angular/platform-browser"

@NgModule({})
export class IconModule{
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ){
      this._matIconRegistry.addSvgIcon('docint',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/docint.svg')
      );
      this._matIconRegistry.addSvgIcon('proyecto',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/proyecto.svg')
      );
      this._matIconRegistry.addSvgIcon('informe',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/informe.svg')
      );
      this._matIconRegistry.addSvgIcon('actividad',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/actividad.svg')
      );
      this._matIconRegistry.addSvgIcon('buscador',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/buscador.svg')
      );
      this._matIconRegistry.addSvgIcon('agregar',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/agregar.svg')
      );
      this._matIconRegistry.addSvgIcon('regresar',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('assets/img/regresar.svg')
      );
  }
}
