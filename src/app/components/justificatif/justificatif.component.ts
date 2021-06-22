import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { NotificationService } from '../../services/notification.service';

interface Justificatif {
  id: string;
  remoteFileName: string;
  localFileName: string;
  documentName: string;
}

interface uploadResp {
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

  @Output() dataChange: EventEmitter<Array<Justificatif>> = new EventEmitter<
    Array<Justificatif>
  >();

  formData: FormData;
  fileName: string;
  documentName: string;
  isUploading = false;
  panelOpenState = false;

  constructor(
    private uploadService: UploadService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  addElement() {
    this.isUploading = true;
    if (!!this.documentName && !!this.fileName) {
      this.uploadService
        .upload(this.formData)
        .subscribe(
          (resp: uploadResp) => {
            this.data.push({
              id: !!this.data.length
                ? (this.data[this.data.length - 1].id + 1).toString()
                : '1',
              remoteFileName: resp.fileName,
              localFileName: this.fileName,
              documentName: this.documentName,
            });
            this.fileName = '';
            this.documentName = '';
            this.onDataChange();
          },
          (error) => {
            console.log(error);
            this.notificationService.notification$.next(
              'Le chargement du fichier a echoué'
            );
          }
        )
        .add(() => (this.isUploading = false));
    }
  }

  prepareFileUpload(imgFile: any) {
    const files = imgFile.target.files;
    if (files && files[0]) {
      const file = files[0];
      this.fileName = file.name;
      this.formData = new FormData();
      this.formData.append('justificative', file, this.fileName);
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileName = '';
    }
  }

  delete(id: string) {
    this.data = this.data.filter((element: Justificatif) => element.id !== id);
    this.onDataChange();
  }

  private onDataChange() {
    this.dataChange.emit(this.data);
  }
}
