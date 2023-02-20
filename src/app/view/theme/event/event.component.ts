// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { EventService } from './../../../core/services/api/event.service';

// Constant classes
import { HttpStatus } from './../../../core/constants/http-status';
import { Utils } from './../../../core/utils/utils';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {

  // Holds event data
  events: any = [];

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  /**
   * Get event data from default json.
   */
  getEvents(): void {
    this.eventService.getEvents().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.events = response.data;
        this.events.forEach((element: any) => {
          if (element.attendee && element.attendee.length > 3) {
            element.attendee = element.attendee.slice(0, 3); // Display 3 users
          }
          element.address = Utils.removeHtml(element.address);
        });
      }
    });
  }

}
