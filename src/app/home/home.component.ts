import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  openIndexes: boolean[] = [];

  faqs = [
    {
      question: 'What services does StudioDeka provide?',
      answer:
        'StudioDeka offers a range of services including design, engineering, and project management...',
    },
    {
      question: 'How can StudioDeka help my business?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    {
      question: 'What industries does StudioDeka work with?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    {
      question: 'How long does it take to complete a project with StudioDeka?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    {
      question: 'Do you offer ongoing support and maintenance after the project is completed?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    {
      question: 'Can you work with existing design or development frameworks?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    {
      question: 'How involved will I be in the brand storytelling process?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    {
      question: 'Can you help with website or app maintenance and updates?',
      answer:
        'We provide tailored solutions that improve brand visibility...',
    },
    // Add more FAQs here
  ];


  toggle(index: number): void {
  this.openIndexes = this.openIndexes.map((_, i) => i === index ? !this.openIndexes[i] : false);
  console.log('this.openIndexes', this.openIndexes);
  
}

imageObject: Array<object> = [{
        image: 'assets/svgs/mobile.svg',
        thumbImage: 'assets/svgs/mobile.svg',
        alt: 'alt of image',
        title: 'title of image'
    }, {
        image: 'assets/svgs/idea.svg', // Support base64 image
        thumbImage: 'assets/svgs/idea.svg', // Support base64 image
        title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    }
];



  constructor() { }

  ngOnInit() {
        // ✅ Only called AFTER faqs[] is populated
    this.openIndexes = this.faqs.map(() => false);
    console.log('this.openIndexes', this.openIndexes);
    
  }


}
