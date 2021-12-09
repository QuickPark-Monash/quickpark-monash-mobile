import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  notImplementedAlert(){
    Swal.fire({
      icon: 'info',
      title: "Feature under construction!",
      text: "This will be implemented soon. Stay tuned :)"
    })
  }
}
