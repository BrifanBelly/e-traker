import { ActivityService } from './../_services/activity.service';
import { Component, OnInit } from '@angular/core';
import { IActivity } from '../_models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.totalActivities = this.activityService.getTotalActivities(this.activities);
    this.totalDistance = this.activityService.getTotalDistance(this.activities);
    this.firstDate = this.activityService.getFirstDate(this.activities);
  }

}
