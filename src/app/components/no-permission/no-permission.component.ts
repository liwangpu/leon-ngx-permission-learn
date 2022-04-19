import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-permission',
  templateUrl: './no-permission.component.html',
  styleUrls: ['./no-permission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoPermissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
