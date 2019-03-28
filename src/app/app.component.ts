import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngAfterViewInit(){
    /*$('#service_selector').selectize({

      onInitialize: function() {
        //this.trigger('change', this.getValue(), true);
      },
      onChange: function(value, isOnInitialize) {
        console.log("Selectize event: ", value);
      },
      maxItems: 1,
      valueField: 'url',
      searchField: 'title',
      options: [
        {id: 1, title: 'Portabilidad', excerpt: 'es cambiarte de operadora conservando tu número', url: 'https://diy.org'},
        {id: 2, title: 'Linea Nueva', excerpt: 'es adquirir un número equipo y número', url: 'https://web.whatsapp.com/'},
        {id: 3, title: 'Chip', excerpt: 'si ya tienes un equipo y solo te falta una linea', url: 'https://www.google.com'}
      ],
      render: {
        option: function(data, escape) {
          return '<div class="selectize-custom-option">' +
            '<span class="selectize-custom-option-title">' + escape(data.title) + '</span>' +
            '<span class="selectize-custom-option-excerpt">' + escape(data.excerpt) + '</span>' +
            '</div>';
        },
        item: function(data, escape) {
          return '<div class="selectize-custom-link"><div class="content-outer"><div class="content-inner"><span class="selectize-custom-link-title">' + escape(data.title) + '</span><span class="selectize-custom-link-excerpt">' + escape(data.excerpt) + '</span></div></div></div>';
        }
      },
      persist: false,
      createOnBlur: false,
      create: false
    });*/
  }

}
