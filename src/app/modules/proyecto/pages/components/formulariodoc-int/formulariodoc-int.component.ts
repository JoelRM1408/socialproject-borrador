import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariodoc-int',
  templateUrl: './formulariodoc-int.component.html',
  styleUrls: ['./formulariodoc-int.component.css']
})
export class FormulariodocIntComponent {
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      // Aquí puedes manejar el archivo seleccionado, por ejemplo, enviarlo a un servidor.
      console.log(selectedFile);
    }
  }
}





