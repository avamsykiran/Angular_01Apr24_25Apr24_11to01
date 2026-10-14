
NodeJS

    is a riuntime for modern javascript.
    NodeJS allows javascript basedmscripts to execute without any UI, and aswell
    can allows javascript based tools to run as stand-alone apps.

    NodeJS alsow works like a server runtime for javascript based server side apps like
    dynamic web apps, single page apps, or rest-api.
    
    Working with a NodeJS App

        md app-name
        cd app-name
        npm init -y

    Node Package Manager
        is the build tool packed along with nodejs

        'package.json' is the build descriptor file.
            will contain the project meta-data (name,version,author,keyword ..etc)
            and the list of dependencies and list of npm-scripts.

        npm i package-name@version
            is used to install a third party package into our nodejs app.
            'app-name/node_modules' will contain the downloaded files.
        
        npm i -g package-name@version
            is used to install a third party package globally on our machine.
            '<userFolder>/node_modules' will contain the downloaded files.

        npm uninstall package-name
        
        npm test                executes the 'test' script          Gewnerally this invokes test-scripts
        npm start               executes the 'start' script         Generally this executes the app
        npm run build           executes the 'build' script         Generally this builds production-copy of the app
        npm run custom-script   executes the 'custom-script' script

    Javascript Modules

        while in native-javascript, we had no modularizaton.

        RequireJS and CommonJs were two different standards introduced by third-party players
        for modularization.

        ES6 - ECMAScript Modules (esm)

        Each .js file is a module

        Each artifact of a Javascript module is private to that module.

        To activate 'ESM', ensure the  "type": "module" is set in 'package.json'.

        'export' keyword is used to allow access to the artifacts of a module outside the module.

            abc.js
                export function sum(a,b){
                    return a+b;
                }

        'import' keyword is used to bring the artifacts from one module to another.

            main.js
                import { sum } from './abc.js';

                console.log(sum(9,8));

        'export default' is used to provide a default artifact of a module. 
        And a module can have only one such artifact. Default artifacts can be imported with out {}.

           abc.js
                function sum(a,b){
                    return a+b;
                }

                export default sum;
            
            main.js
                import sum from './abc.js';

                console.log(sum(9,8));
