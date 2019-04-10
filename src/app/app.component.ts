import { Component, AfterViewInit , OnInit} from '@angular/core';
import { Select2TemplateFunction, Select2OptionData  } from 'ng2-select2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public exampleData: Array<Select2OptionData>;
  public exampletempateData: Array<Select2OptionData>;
  public options: Select2Options;
  public optionstempate: Select2Options;



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

    this.exampletempateData = [
      {
        id: '475869',
        text: 'Fund 01',
        additional : {
          image : 'assets/anz.png',
          winner : 'Provider'
        }
      },
      {
        id: '89564849',
        text: 'Fund 02',
        additional : {
          image : './assets/cba.png',
          winner : 'Bank'
        }
      },
      {
        id: '456586',
        text: 'Fund 03',
        additional : {
          image : '../assets/bgl.png',
          winner : 'Provider'
        }
      },
      {
        id: '8458603',
        text: 'Fund 04',
        additional : {
          image : '../assets/cup.png',
          winner : 'Provide'
        }
      }
    ];

    this.optionstempate = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection,
    }

  }

  ngAfterViewInit(){

  }

  // function for result template
  public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="pro-image"></span>';

    if (state.additional.image) {
      image = '<span class="pro-image-h"><img src="' + state.additional.image + '"></span>';
    }

    return jQuery('<span class="select-icon"><span class="label-prov"><b>' + state.additional.winner + '</b></span>' + image + '<span class="proname">' + state.text + '</span></span>');
  }

  // function for selection template
  public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
    if (!state.id) {
      return state.text;
    }
    let image = '<span class="pro-image"></span>';

    if (state.additional.image) {
      image = '<span class="pro-image-h"><img src="' + state.additional.image + '" ></span>';
    }

    return jQuery('<span class="label-prov"><b>' + state.additional.winner + '</b></span>' + image + '<span class="proname">' + state.text + '</span>');
  }

}
