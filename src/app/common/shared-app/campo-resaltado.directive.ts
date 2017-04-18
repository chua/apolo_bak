import { Directive, ElementRef, Input , Renderer} from '@angular/core';


@Directive({ 
    selector: '[d-resalte]' 
})

//Todo: Coger de configuración el color de la directiva y aceptar parametros

export class CampoResaltadoDirective {

    constructor(elem: ElementRef,
                render: Renderer) {
       render.setElementStyle (elem.nativeElement, 'border-bottom','1px solid black');        
    }


/*http://angular2academy.com/2017/01/24/creating-and-using-directives/*/

}
