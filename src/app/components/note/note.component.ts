import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() disbaled: boolean;
  @Input() data: number = 0;
  @Input() noteTotale: number;
  @Input() noteIncrementation: number;

  @Output() dataChange: EventEmitter<number> = new EventEmitter<number>();

  incrementDisabled = false;
  decrementDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    if (!this.disbaled) {
      this.disabledState();
      if (!this.incrementDisabled) {
        this.data += this.noteIncrementation;
        this.onDataChange();
        this.disabledState();
      }
    }
  }

  decrement() {
    if (!this.disbaled) {
      this.disabledState();
      if (!this.decrementDisabled) {
        this.data -= this.noteIncrementation;
        this.onDataChange();
        this.disabledState();
      }
    }
  }

  private onDataChange() {
    this.dataChange.emit(this.data);
  }

  private disabledState() {
    this.decrementDisabled = this.data <= 0;
    this.incrementDisabled = this.data >= this.noteTotale;
  }
}
