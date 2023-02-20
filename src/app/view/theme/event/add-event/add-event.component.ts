// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html'
})
export class AddEventComponent implements OnInit {

  // Holds form
  form!: FormGroup;

  // Flag for free event
  free: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  /**
   * Build event form
   */
  buildForm(): void {
    this.form = this.formBuilder.group({
      image: new FormControl({}, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      phone: new FormControl(''),
      seats: new FormControl(''),
      description: new FormControl(''),
      free: new FormControl(this.free),
      price: new FormControl('')
    });
  }

  /**
   * Event cover image change
   * @param event 
   */
  eventCover(event: any): void {
    // patch value for event image
    this.form.patchValue({
      image: event.addedFiles[0]
    });
  }

  /**
   * Create event
   */
  createEvent(): void {
    // patch value for free flag
    this.form.patchValue({
      free: this.free
    });
  }

}
