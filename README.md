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
- Servicios 
  - Contenedores de lógica de implementación: principio responsabilidad única
  - Inyeccion a nivel de componente
    - El componente acederá a una única instancia del servicio.
  - Inyeccion a nivel de módulo
    - Todos los componentes del módulo accederán a la misma instancia del servicio.
-Observables y Subjects

*no debemos permitir que el componente emita eventos, solo debemos exponer observable, no subjects ni behavior subjects*

 - observable 
     desuscribirse en el ngOnDestroy para evitar fugas de memoria
 - subject 
-Behavior subject
  - siempre deben tener un valor
  - puedes obtener su valor actual en cualquier momento

 - Getters  
   - evitan lógica en el template 
   - te ayudan a visualizar cuantas veces se consulta el valor de tus variables
   - ayudan a verificar cuantas veces se realiza la detección de cambios
- Estrategias de deteccion de cambios 
 - onPush 
    - comprueba cambios solo cuando  la referencia en sus inputs de cambia o 
    cuando detecta un evento de algun elemento html. button, etc
    - O cuando explicitamente se le dice que dede cambiar *markForCheck ..*
    recomendable cuando se tiene una aplicación con muchos eventos, bindings, interacciones, usar onPush evita comprobaciones ineficientes y optimiza el funcionamiento de tu aplicación.
- default 

-Encapsulacion de estilos-
  -emulada: defecto
    los estilos del componente no afectan a otros componentes o a sus contenedores.
  - encapsulada: Nativa, funciona solo en crome, el navegador crea un DOM ´´unico para cada componente,
    los estilos definidos no afectan a otros componentes, ni a los componentes anidados dentro de sí.
  -no encapsulada: los estilos declarados dentro de un componente afectan a todos los elementos de la        aplicación

- Proyeccion de contenido
  - ng content puede usarse como una 'entrada' para proyectar contenido dentro de
  un componente y volverlo más rehusable
  - injection slots
    incluir un ng-content en cada parte del componente
    donde se quiera proyectar contenido.
    - usando selectores indicas que elemento se mostrará en cual slot, los selectores pueden ser etiquetas, clases, o atributos 
-  ayuda a desarrollar usando principio DRY not repeat yourself
- Inyeccion de componente padre como dependencia.
- asi podemos acceder a sus métodos

- Acceder a un solo componente hijo proyectado: 
  @ContentChil y AfterContentInit
  el contenido del hijo solo estara disponible edespues de su inicialización
- Acceder a varios componentes hijos proyecados: @ContentChildren y QueryList 
-Acceder a un componente hijo no proyectado: @ViewChild. ngAfterContentInit, changeDetector.detectChanges()
-Acceder a una lista de componentes hijos no proyectados: @ViewChildren ,  ngAfterContentInit, changeDetector.detectChanges()
-RENDERER 2 
  - usarlo siempre al manipular Element ref, nativeElement()
para que tu código funcione de forma movile o renderizada desde el servidor / webworker




- ng-container 
  agrupar contenido sin un elemento html(wraper)
- ng-template 
  - se usan para crear plantillas de contenido 
   que se pueden repetir y  recibir variables
  - no se renderizan por si mismos, 
  - se pueden renderizar a traves de un ng-container o algun elemento html



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
