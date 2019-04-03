import { Component, AfterViewInit , OnInit} from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;



  ngOnInit() {
    this.exampleData = [
      {
        id: '475869',
        text: 'Fund 01'
      },
      {
        id: '89564849',
        disabled: true,
        text: 'Fund 02'
      },
      {
        id: '456586',
        text: 'Fund 03'
      },
      {
        id: '8458603',
        text: 'Fund 04'
      }
    ];

    this.options = {
      theme: 'form-control form-control-select2 form-control-select'
    }

  }

  ngAfterViewInit(){


  }

}
