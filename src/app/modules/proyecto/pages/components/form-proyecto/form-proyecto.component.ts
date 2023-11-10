import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Persona } from 'src/app/core/models/persona';
import { TipodocintService } from '../../../service/tipodocint/tipodocint.service';
import { DocintService } from '../../../service/docint/docint.service';




@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort)sort: MatSort = new MatSort;


  docintForm : FormGroup =new FormGroup({});

  tiposdocint:any;
  docsint: any;
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'nombredocint', 'tipo', 'fechaini', 'fechafin', 'estado', 'doc','acciones']

  constructor(
    public fb:FormBuilder,
    public tipodocintService:TipodocintService,
    public docintService: DocintService,
  ){

  }
  ngOnInit() {
    this.docintForm = this.fb.group ({
      id: [''],
      nombre:['', Validators.required],
      distrito:['', Validators.required],
      representante:['', Validators.required],
      institucion:['', Validators.required],
      categoria:['', Validators.required],
      fechaini:['', Validators.required],
      fechafin:['', Validators.required],
      estado:['', Validators.required],
      urldoc:['', Validators.required],
      tipodocint:['', Validators.required],
    });;

    this.docintService.getalldocsint().subscribe(resp => {
      this.docsint = resp;
      this.setDataAndPagination();

      //console.log(resp);
    },
      error => { console.error(error) }
    )
    this.tipodocintService.getalltiposdocint().subscribe(resp => {
      this.tiposdocint = resp;

      //console.log(resp);
    },
      error => { console.error(error) }
    )
  }



  guardar():void{
    console.log(this.docintForm .value)
    this.docintService.savedocint(this.docintForm.value).subscribe(resp=>{
      this.docintForm.reset();
      this.docsint= this.docsint.filter((docint: { id: any; })=> resp.id!=docint.id);
      this.docsint.push(resp);
      this.setDataAndPagination();
    },
      error=> {console.error(error)}
    )
  }

  eliminar(docint: { id: any }) {
    // Realiza la eliminación de forma optimista en la vista
    const docintIndex = this.docsint.findIndex((d: { id: any; }) => d.id === docint.id);
    if (docintIndex !== -1) {
      this.docsint.splice(docintIndex, 1);
    }

    // Luego, intenta eliminar el libro en el servidor
    this.docintService.deletedocint(docint.id).subscribe(resp => {
      //console.log();
      // if (resp !== true) {
      //   // Si la eliminación en el servidor falla, revierte la actualización en la vista
      //   this.libros.splice(libroIndex, 0, libro);
      // }
    });
    this.setDataAndPagination();
  }

  editar(docint: {tipodocint: any; urldoc: any; estado: any; fechafin: any;fechaini: any; institucion: any; categoria: any; representante: any; distrito: any;nombre: any; id:any
    }){
    this.docintForm.setValue({
      id: docint.id,
      nombre: docint.nombre,
      distrito: docint.distrito,
      representante: docint.representante,
      institucion: docint.institucion,
      categoria: docint.categoria,
      fechaini: docint.fechaini,
      fechafin: docint.fechafin,
      estado: docint.estado,
      urldoc: docint.urldoc,
      tipodocint: docint.tipodocint,
    })
  }
  setDataAndPagination(){
    this.dataSource = new MatTableDataSource(this.docsint);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

  export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
