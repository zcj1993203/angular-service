import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]//let angular know how to provide the service
})
export class NewAccountComponent {
  


  //inform angular we want the service
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName, accountStatus);
    
    //this.loggingService.logStatusChange(accountStatus);
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
