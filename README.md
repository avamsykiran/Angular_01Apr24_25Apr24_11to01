Angular
---------------------------------------------------------------------------------------

    Pre-Requisite Skills
        HTML 5
        CSS 3
        JavaScript (ES6)
    
    Lab Setup
        Chrome
        VSCode          https://code.visualstudio.com/download
        NodeJS          https://nodejs.org                          node --version
        Angular CLI     npm i -g @angular/cli                       ng version

    NodeJS

        is a javascript runtime.

          .js
          ----
         nodejs
        -------
           OS


        NodeJS offers npm (node package manager) as a build tool.

        npm init -y         creates a new node project
                            npm uses 'package.json' as a build config file.

        npm i thrid-party-packge-name
        npm uninstall thrid-party-packge-name

                            node_modules    folder holds all the downloaded dependencies.

        Javascript Modules

            CommonJS Modules
            RequireJS Modules
            ES6 - ECMAScript Modules (esm)

            Each .js file is a module

            Each artifact of a Javascript module is private to that module.

            'export' keyword is used to allow access to the artifacts of a module outside the module.

            'import' keyword is used to bring the artifacts from one module to another.

            'export default' is used to provide a default artifact of a module. And a module can have
            only one such artifact. Default artifacts can be imported with out {} .

    Typescript

        Typescript = JavaScript + Types

        Creating a project:

            npm init -y
            npm i Typescript 

            npx tsc --init

        Compiling

            npx tsc filename.ts 

        Datatypes

            number
            string
            boolean
            bigint
            symbol
            void

        Special Datatypes

            any
            unknown
            never
            undefined
            null

        Standard tsconfig

            {
                "compilerOptions": {
                    "module": "commonjs",
                    "esModuleInterop": true,
                    "target": "es6",
                    "moduleResolution": "node",
                    "sourceMap": false,
                    "outDir": "dist"
                },
                "lib": ["es2015"]
            }

        functions

            function funName(param1:type,param2:type) : returntype {

            }

            const funName = function(param1:type,param2:type) : returntype {

            }

            returnType can be any supported data type inc;uding void and never.

            mostly we use void, and void facilitates null value.
            never doesnt even allow nulls.

            
        OOP

            interface
            class
            aliases
            enums

    Angular Intro

        is a typescript based framework to develp SPA - Single Page Applications.

        Dynamic Web Application

            Server                                              Client

                Server-side-Programs
                .jsp,.asp,.aspx,.php,.....

                                <----------------Req1-------

                    html is generated dynamically
                    on the server

                            ----RESP (generated html)----------->

                                <----------------Req2-------

                    html is generated dynamically
                    on the server

                            ----RESP (generated html)----------->

        Single Page Applications

            Server                                          Client

                index.html + .js
                (spa-bundle)
                                <-----------Req1-------

                            ----RESP (spa-bundle)------>    index.html is loaded along with the .js

                                                            any event or link or form submittion,
                                                            are all handled on the client itself
                                                            by the JavaScript.

                                                            In response to all these eevents,
                                                            the html is dynamically generated
                                                            by the JS on the cleint itself.

                                                            The generated html will be tailored to the
                                                            index.html replacing its content if needed.

                rest-api    <------.xml/.json--------->     data exchange by JS 

        AngularJS,Angular,ReactJS ...et., are a few framework popularly used to develop the SPA(s).

        AngularJS

        Angular2
        Angular4
        Angular5........Angular17.

    Angular CLI

        Angular CLI is a command line interface tool which encapsulate  a list
        of regularly doen project operations into simple commands.

        For Example:

            ng new app-name             is used to create an angular application.

                                        1. a folder called app-name is created
                                        2. npm init -y
                                        3. all required inital project strucutre is created
                                        4. using 'npm install' all the need libraries are installed
                                        5. and configs are also made.

        To install                  npm i -g @angular/cli@18.1.3
        To uninstall                npm uninstall @angular/cli
        To Check                    ng version

        To Create anangular app     ng new app-name

        inside the project
            ng build                 To compile *.ts into *.js and build the bundle into 'dist' folder
            ng test                  To compile *.ts into *.js and build the bundle and invoke the test cases   
            ng serve                 To compile *.ts into *.js, build the bundle, hsot on a development server @ 4200
            ng serve --port 9999     To compile *.ts into *.js, build the bundle, hsot on a development server @ 9999
            ng serve --port 9999 -o  To compile *.ts into *.js, build the bundle, hsot on a development server @ 9999 and
                                     launch the app in a browser

            ng generate 
            ng g                     To generate angular artifacts liek models, services, components, modules ...etc.,

    Angular Archetecture

        Every angular application is made up of a few angular artifacts:

            1. Each angular artifact is a typescript class
            2. Decorators are marked on each of these classes to identify their role.
            3. Each decorator is passed a JSON object encapsulating the config., of the artifact and is called META-DATA.

            Angular Artifacts

                Modules
                    @NgModule({
                        declarations:[],
                        imports:[],
                        exports:[],
                        providers:[],
                        bootstrap:[]
                    })
                    class SalesModule {}
                
                Directives
                    @Directive({
                        selector:'[appFastMovingStock]'
                    })
                    class FastMovingStockDirective {}
                
                Components
                    @Component({
                        selector:'app-sales-dashboard',
                        templateUrl:'app-sales-dashboard.component.html',
                        styleUrls:['app-sales-dashboard.component.css']
                    })
                    class SaelsDashboard {}
               
                Pipes
                    @Pipe({
                        name:'intoWords'
                    })
                    class InToWordsPipe {}

                Services
                    @Injectable({
                        providedIn:'root'
                    })
                    class SalesService{}

    Angular Modules

        An angular modules lives alongside a typescript module.

        A typescript moduel is a .ts file, and an angular module is a typescript class decorated with @NgeModule.

        An angular module is used to create a logicla group of angular artifacts.

        Each angular application is housed inside a top-level modules called 'ROOT MODULE' and is named as 'AppModule'.

        All other sub modules are called 'FEATURE MODULES'.

         Modules
                    @NgModule({
                        declarations:[], //list all components,directive, pipes that belong to this module
                        imports:[],      //list all sub-moduel we have to import into this module
                        exports:[],      //list of components,directive, pipes that belong to this module ad permitted to be used outside
                        providers:[],    //list of all services of this module
                        bootstrap:[]     //list of componenets that have to instatiated along with this module
                    })
                    class SalesModule {}

        a Root-Module cannot have 'exports' section
        a Feature Module cannot have 'bootstrap' section.

    Angular Directives and Components

        angular support html extendability which means that using angular we can create our own
        elements and attributes.

        Attributes created in Angular are called Directives.
        And Elements created in Angular are called Components.

    Angular Components

        An angular Component is an html element made in angular.

        Each angular component has three parts

        For an html element <app-dashboard></app-dashboard>, the componbent will look like the followwing

            1. The component class - dashboard.component.ts

                    @Component({
                        selector:'app-dashboard',
                        templateUrl:'app-sales-dashboard.component.html',
                        styleUrls:['app-sales-dashboard.component.css']
                    })
                    class Dashboard {
                        userName:string;

                        constructor(){
                            this.userName = "Rahul Avastey";
                        }
                    }

            2. The component template - dashboard.component.html

                <header>
                    <h4>Welcome {{userName}}</h4>
                </header>

            3. The component style - dashboard.component.css

                .header {
                    background-color:'orange';
                }

        ng g c ComponentName --skip-tests

    Angular Data Binding

        allows us to access the fields and method of the component class in the component template.

        Interpoaltion

            is about embeding the value of an epression inside the html-content.

            <tag-name> {{ expression }} </tag-name>

            <h4> {{title}} </h4>

        Two-Way Data Binding

            This is used to load data or receive data into or from a form input control.
            An attribute directive called 'ngModel' from 'FormsModule' from '@angular/forms' is used
            to bind a field with an input control.

            <input [(ngModel)]="field" />

        One-Way Data Binding
            Attribute Binding

                is used to bind the value of an expression to a html attribute.

                <tag-name width="100"></tag-name>
                <tag-name [width]="x"></tag-name>

            Event Binding

                it is used to bind a method with an event so that the method bound is invoekd when the respective event occurs.

                html-event-attributes           evnet-directives
                ----------------------------------------------------------------------------
                 onsubmit                       ngSubmit
                 onfocus                        focus
                 onblur                         blur
                 onchange                       change
                 onclick                        click
                 ondblclick                     dblclick
                 onmoueover                     mouseover
                 onmoueleave                    mouseleave
                                                             .....etc.,

                <tag-name (event-directive)="method()"></tag-name>

            Style Binding

                to bind an expression to a style property.

                <tag-name [style.cssProperty]="expression"></tag-name>
                    the expression should evalaute to a number or a string as 
                    per the cssProperty (width needs a number, color needs a string)

                <tag-name [ngStyle]="expression"></tag-name>
                    the expression should evalaute to a json-object
                    having cssProperty as field and its valeu as value.

                    dashboard.component.ts

                        class DashboardComponent {
                            dashboardStyle:any;

                            construcotr(){
                                this.dashboardStyle = {width:'100px',color:'#ff00ff',backgroundColor:'#000000'};
                            }
                        }

                    dashboard.component.html

                        <div [ngStyle]="dashboardStyle">
                        </div>

            Css Class Binding
            
                to bind an expression to the 'class' attribute , so that
                we can apply or remove a css-class on to an element programatically.

                <tag-name [class.className]="boolean-expres1sion"></tag-name>
                    the boolean-exopression has to evaluate to true for the class to be applied.

                <tag-name [ngClass]="expres1sion"></tag-name>

                    the expression must evaluate to a json-object  ({className1:booleanValue,className2:booleanValue})
                    or
                    the expression must evaluate to a array (['class-name1','class-name2'])

    Directives

        Attribute Directives
            ngModel, ngStyle, ngClass ...et.,

        Event Attribute Directives
            click,dblClick,blur,focus,change ..etc.,

        Structural Directives

            *ngIf

                <ng-template [ngIf]="boolean-expression">
                    <p> This para appears only if the boolean-expression evals to true</p>
                </ng-template>

                <p *ngIf="boolean-expression"> This para appears only if the boolean-expression evals to true</p>

            *ngFor

                <ng-template [ngFor]="let x of array; let i = index">
                    <p> This para appears once for each x in the array.</p>
                </ng-template>

                <p *ngFor="let x of array; let i = index"> This para appears once for each x in the array.</p>

            ngSwitch *ngSwitchCase *ngSwitchDefault

                <div [ngSwitch]="expression">
                    <p *ngSwtichCase="value1"> this para appears if the expression evals to value1 </p>
                    <p *ngSwtichCase="value2"> this para appears if the expression evals to value2 </p>
                    <p *ngSwtichCase="value3"> this para appears if the expression evals to value3 </p>
                    <p *ngSwtichCase="value4"> this para appears if the expression evals to value4 </p>
                    <p *ngSwtichDefault> this para appears if the expression evals to none of the values </p>
                </div>

    Content Projection

        Content refers to html-content.

        ng-container
        ng-template
        ng-content

        are built in component that help us in contrlling the content.

    Angular Pipes

        a pipe is used to tranform a value into another value while rendering.

        {{expression|pipe-name1:param1:parma2|pipe-name2:param}}

        built-in
            lowercase
            uppercase
            titlecase
            number
            currency
            date
            json
            async

        custom

            ng g pipe pipe-name --skip-tests

            @Pipe({
                name:'pipeName'
            })
            class PipeNamePipe implements PipeTranform {
                transform(value:any): any{
                    //tranformation logic........
                }
            }

    Angular Component and Directives LifeCycle Hooks

        constructor()           //field initialization and dependency injection
            |
            | //initial rendering in the case of components
            |
            ↓
        ngOnInit()              //is used to initializing after the first render
            |
            ↓
        ngOnChanges()           //is invoked everytime the in-bound fields of teh component change.
            |
            ↓
        ngDoCheck()            //is invoked afer the ngOnChanges everytime
            |
            ↓
        ngDoDestroy()          //is invoked just before the compomnent or directive is unloaded.

    in-bound fields / @Input() fields

        field of an component or a directive can be marked @Input(), and that
        fiels will act as a attribute to collect data from its host element.

        @Component({
            selector:'app-msg-box',
            templateUrl:'app-msg-box.component.html'
        })
        class MsgBoxComponent {

            @Input()
            msgBoxType!:string;

            constructor(){}
        }
        
        <app-msg-box msgBoxType="info"></app-msg-box>
        <app-msg-box msgBoxType="error"></app-msg-box>

    Custom Attribute Directive

        ng g directive DirectiveName --skip-tests

        @Directive({
            selector:'[appDirectiveName]'
        })
        class DirectiveNameDirective {

            @Input()
            appDirectiveName!:string;
            
            constructor(private ele : ElementRef){

            }

            @HostListener("mouseover")
            doSomething(){

            }

        }

        <tag-name appDirectiveName> </tag-name>
        <tag-name appDirectiveName="someValue"> </tag-name>
        <tag-name [appDirectiveName]="expression"> </tag-name>

        1. the tag on which the directive is applied is calle the HOST.
        2. we can access the HOST element by injecting an object of 'ElementRef' into
            the directive constructor
        3. We use @HostListener() decorator to handle events on the host element.

    Integrate Bootstrap with Angular

        ng add bootstrap

        include the bootstrap css file and js file into the
        scripts and styles section of the angular.json file.

        angular.json
            styles      node_modules/bootstrap/dist/css/bootstrap.min.css
            scripts      node_modules/bootstrap/dist/js/bootstrap.min.js

    Angular Routing

        is used to render a component whenever its mapped path
        appers on the url.

        RouterModule from @angular/router is used to config routing.

        Routes              type Route[]

        Route               model           {
                                                path:'abcd',
                                                component:MyComponent1,
                                                redirect:'',
                                                pathMatch:'startsWith | full'
                                            }
        
        Router              service         navigate(["sales",itemId,year]),
                                            navigateByUrl("/sales/101/2024")

        ActivatedRouter     service         to extract request prams or 
                                            path parameters or path or any other info from 
                                            the current url

        router-outlet       component       that is replaced by the component that matches the path

        routerLink          directive       used on 'a' element instead of its 'href' attribute.

        routerLinkActive    directive       take a css-class-name and that css-class is applied on
                                            the link whenever that link is active.

    Angular Services

        Service is a class that holds bussiness logic. Computations, Custom Validations, Rest api
        calls ..et., can go into these classes.

        ng g service ServiceName --skip-tests

        an object of a service is injectable into any component or other services as well.

    