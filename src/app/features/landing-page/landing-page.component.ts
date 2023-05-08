import { Component, Output, EventEmitter, OnInit, ElementRef} from '@angular/core';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
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
  linkedInLink: string = "https://www.linkedin.com/company/writewithneurl/";

  isOpen: boolean = false;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private elementRef: ElementRef, private meta: Meta){
   // Meta tags for home page
this.meta.updateTag({ name: 'title', content: 'We Create Technical Content for Your Audience | Neurl' });
this.meta.updateTag({ name: 'description', content: 'Neurl is on a mission to demystify complex data science and engineering topics for your preferred audience. Schedule a call today!' });

// Meta tags for "What we do" section
this.meta.updateTag({ name: 'title', content: 'Outsource Technical Content Development to Neurl' });
this.meta.updateTag({ name: 'description', content: 'By outsourcing technical content development to us, you can free up your engineers and data scientists to concentrate on critical aspects of your business. We create in-depth technical blog articles, edit existing documentation, provide tutorials, and offer custom services. Schedule a call today!' });

// Meta tags for "How it works" section
this.meta.updateTag({ name: 'title', content: 'How It Works | Neurl' });
this.meta.updateTag({ name: 'description', content: 'Learn how our process works in three simple steps: Schedule a call, Content Plan Creation, and Ready to Publish. Schedule a call today to get started!' });

// Meta tags for footer
this.meta.updateTag({ name: 'title', content: 'Neurl - Technical Content Development' });
this.meta.updateTag({ name: 'description', content: 'Neurl specializes in technical content development. Connect with us on Twitter and LinkedIn. All Rights Reserved Neurl 2023.' });
  }

  ngOnInit(){
    const script = this.elementRef.nativeElement.ownerDocument.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Neurl",
        "url": "https://writewithneurl.com",
        "logo": "https://writewithneurl.com/logo.svg"
      }
    `;
    this.elementRef.nativeElement.ownerDocument.head.appendChild(script);
  }

  handleMenu(){
    this.isOpen = !this.isOpen;
  }
 
  closeMenu(){
    this.isOpen = false;
  }

}
