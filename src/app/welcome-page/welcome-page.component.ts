import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  message= "Welcome"
  name = "";
  welcomeMessageFromService: string;

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
      // console.log(this.message)
      this.name = this.route.snapshot.params['name']

  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldServiceWithPathVariable(this.name));
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message)

  }

  handleErrorResponse(error){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
