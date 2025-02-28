import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  showModal: boolean = true;

  ngOnInit() {
    // Optionally, you can remove the setTimeout and directly set showModal to true
    setTimeout(() => {
      this.showModal = true;
    }, 0); // You can adjust the delay if needed
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
close(){
  this.showModal = false;
  
}

}
