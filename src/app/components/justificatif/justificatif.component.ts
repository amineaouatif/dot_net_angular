import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

interface Justificatif {
  documentName: string;
  fileName: string;
}

@Component({
  selector: 'app-justificatif',
  templateUrl: './justificatif.component.html',
  styleUrls: ['./justificatif.component.css'],
})
export class JustificatifComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  @Input() data: Array<Justificatif> = [];
  @Input() title: string;

  @Output() onDataChange: EventEmitter<Array<Justificatif>> = new EventEmitter<
    Array<Justificatif>
  >();

  fileName: string;
  documentName: string;
  isUploading = false;
  panelOpenState = false;

  constructor() {}

  dataChange() {
    this.onDataChange.emit(this.data);
  }

  addElement() {
    this.isUploading = true;
    if (!!this.documentName && !!this.fileName) {
      setTimeout(() => {
        this.data.push({
          fileName: this.fileName,
          documentName: this.documentName,
        });
        this.fileName = '';
        this.documentName = '';
        this.isUploading = false;
      }, 1000); // fake upload
    }
  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileName = imgFile.target.files[0].name;

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileName = '';
    }
  }
  ngOnInit(): void {}
}
