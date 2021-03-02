import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'shake-poc';

  ngOnInit(): void {
    let hasDeviceMotion = 'ondevicemotion' in window;
    if(hasDeviceMotion) {
      this.title = "Motion event available!";
      document.addEventListener('ondevicemotion', x => alert("Shake!"));  
      } else {
        this.title = "Motion event unavailable!";
      }
  }
}
