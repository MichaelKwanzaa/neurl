import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  baseImagesUrl = "/assets/images/";
  baseWhatWeDoImagesUrl: string = `${this.baseImagesUrl}/what-we-do/`
  baseHowItWorksUrl: string = `${this.baseImagesUrl}/how-it-works/`
  socialsUrl: string = `${this.baseImagesUrl}/socials/`


  logo: string = `${this.baseImagesUrl}logo.svg`;
  hero: string = `${this.baseImagesUrl}hero.svg`;
  rightArrow: string = `${this.baseImagesUrl}right-arrow.svg`;
  hamburger: string = `${this.baseImagesUrl}menu.svg`;
  cancel: string = `${this.baseImagesUrl}cancel.svg`;

  technical: string = this.baseWhatWeDoImagesUrl + "technical-blog-articles-icon.svg";
  edit: string = this.baseWhatWeDoImagesUrl + "edit-external-document-icon.svg";
  tutorial: string = this.baseWhatWeDoImagesUrl + "tutorials-icon.svg";
  custom: string = this.baseWhatWeDoImagesUrl + "customs-icon.svg";

  scheduleCall: string = this.baseHowItWorksUrl + "schedule-a-call.svg"
  contentPlan: string = this.baseHowItWorksUrl + "content-plan-creation.svg"
  publish: string = this.baseHowItWorksUrl + "ready-to-publish.svg"
  
  twitter: string = this.socialsUrl + "twitter.svg";
  linkedIn: string = this.socialsUrl + "linkedIn.svg";

  twitterLink: string = "";
  linkedInLink: string = ""

  isOpen: boolean = false;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(){
  }

  handleMenu(){
    this.isOpen = !this.isOpen;
  }
 
  closeMenu(){
    this.isOpen = false;
  }

}
