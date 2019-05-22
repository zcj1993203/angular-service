import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]//let angular know how to provide the service
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();


  //inform angular we want the service
  constructor(private loggingService: LoggingService){

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
