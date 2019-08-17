# Coomponents pro

## INDEX
### Básico
- Host styles 
:host => referencia a la etiqueta que representa el componente, por ejemplo  <app-progres-bar>
-property Binding 

[style.widh.%]
[attr.data-any] 

- Event binding

(onDecrease)="handleOnDecrease()"

-template reference variables

#countdown 
variable que representa un componente y permite usar sus métodos y propiedades
- lyfecycles hooks
  - ngOnChanges
      Útil para detectar cuando las propiedades input de un componente, han cambiado 
  - ngOnDestroy 
      Útil para evitar fugas de memoria, en el se pueden eliminar contadores, suscripciones y otros procesos

### Intermedio
- Componentes stateful
   - contenedores, componentes de alto nivel
   - guardan el estado y  pueden cambiarlo
   - pueden acceder a servicios para obtener datos y comunicarse con otras partes de la applicación

- Componentes stateless/presentacionales 
  - No tienen estado
  - Presentar el contenido
  - Reporta interacciones del usuario a su componente padre
  - puede tener un estado interno, no puede modificarlo por sí mismo
  - la misma entrada debería generar siempre la misma salida

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
