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
  public optionscetempate: Select2Options;



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
        text: 'ANZ Bank',
        additional : {
          image : 'assets/anz.svg',
          winner : 'Business bank'
        }
      },
      {
        id: '89564849',
        text: 'Commonwealth bank',
        additional : {
          image : './assets/cba.svg',
          winner : 'Business bank'
        }
      },
      {
        id: '456586',
        text: 'BGL Corporate Solutions',
        additional : {
          image : '../assets/bgl.svg',
          winner : 'Software company'
        }
      },
      {
        id: '8458603',
        text: 'ING Australia',
        additional : {
          image : '../assets/ing.svg',
          winner : 'Banking company'
        }
      }
    ];

    this.optionstempate = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection,
      theme: ' select-withImage '
    }

    this.optionscetempate = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection,
      theme: ' select-withImage ce-box-drop'
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
