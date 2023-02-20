// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { EventService } from './../../../../core/services/api/event.service';

// Constant classes
import { HttpStatus } from './../../../../core/constants/http-status';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit, OnDestroy {

  // Holds event data
  event: any;

  // Holds router subscription
  routerSubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.params.subscribe(param => {
      this.getEvent(param['id']);
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  /**
   * Get event data from default json.
   * @param id
   */
  getEvent(id: string): void {
    this.eventService.getEvents().subscribe(response => {
      if (response && response.code === HttpStatus.SUCCESSFUL) {
        this.event = response.data.find((item: any) => item.id === parseInt(id));  // find artist by id
        if (this.event.attendee && this.event.attendee.length > 3) {
          this.event.attendee = this.event.attendee.slice(0, 3); // Display 3 users
        }
      }
    });
  }

}
