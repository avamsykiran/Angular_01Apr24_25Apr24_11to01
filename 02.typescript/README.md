
Typescript

    Typescript = JavaScript + Types

    Creating a ts-project:

        npm init -y
        npm i typescript 

        npx tsc --init

    Transpelling ( Compiling ) 

        npx tsc filename.ts 

    Datatypes

        number
        string
        boolean
        bigint

        symbol          //is used to handle UUID's 
                        const photoId:symbol = Symbol("someKey")

        void

    Special Datatypes

        any
                        const swap = (x:any,y:any) => {
                            //developer is sure that no issues will occur 
                            //whatever may be the type of value of x.

                            var temp : any = x;
                            x = y;
                            y = temp;
                        }
        
        unknown                                
                        const len = (x:unknown)  => {
                            //developer is NOT SURE that an issue will NOT occur 
                            //based on the type of value of x.
                            //and for this reason, the type of 'x' has to be CHECKED before it is consumed
                            //and compiler 'tsc' will raise an error if the type checking is not done

                            if( typeof(x) === 'number'){
                                return `${x}`.length();
                            }else if( typeof(x) === 'string'){
                                return x.length();
                            }else {
                                throw "length may not be relevant for this value";
                            }
                        }

        undefined           the "salary" proeprty on a Consumer object is undefiend.
        null                the "referalBenifit" property on a Consumer object can be null.

    User Defined Data Types

        interface
            is a user defiend data type with methods that are not implemented.

            interface ComplexNumber{
                real:number;
                imaginary:number;
            }

            var z1 = {real:90,imaginary:-7}
            var z2 = {real:4,imaginary:-7}
            var z3 = {real:4,imaginary:-7,alpha:99}

            function addComplexNumbers(a:ComplexNumber,b:ComplexNumber){
                //code will go
                //z1 and z2 are acceptable valeus into this function but z3 is not.
            } 
            
            interface Shape2D {
                sides:number[];
                area : () => number; //methods with no impl;
            }

        class
            is a user defiend data type that has fields and methods.
            classes support access modifiers private,public and protected.

            class Employee {
                private empId:number;
                private fullName:string;
                
                constructor(empId:number,fullName:string,private sal:number){
                    this.empId=empId;                    
                    this.fullName=fullName;
                }

                travelAllowence(){
                    return this.sal*0.12;
                }

                houseRentAllowence(){
                    return this.sal*0.32;
                }

                totalSal(){
                    return this.sal + this.houseRentAllowence() + this.travelAllowence();
                }

            }

            var emp1 = new Employee(101,"Vamsy",89000)

        unions

            var temp : number | string ;

            temp = 90;
            temp = "high";
            temp = "low";
            temp = 47;

        aliases
            is another name given to a datatype.

            type num = number;

            var x : num;

            type alphaOrNumeric = number | string;

            var itemId:alphaOrNumeric;
            var temp:alphaOrNumeric;

        enums      
            is a set of possible values of a field.

            gender  can be eitehr Male or Female
            
            enum Gender {
                MALE, FEMALE
            }

            var gender : Gender;
            gender = Gender.MALE;

            enum Direction {
                UP, DOWN, LEFT, RIGHT
            }

            var d1 : Direction;
            d1 = Direction.UP;

        types

            type Point2D = {x:number,y:number};
            type Point3D = {x:number,y:number,z:number};

            interface User {
                userId:number;
                userName:string;
                password:string;
                roles:string[];
            }

            function registeration(userData:{userName:string,password:string,confirmPassword:string}){

            }

            function login(userCredits:{userName:string,password:string}){

            }


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

    '!' and '?' operator
        
        function f(c:Consumer){
            var doorNum = c.address.doorNumber; //chance of null-error if address is null or undefined.
        }

        function f(c:Consumer){
            var doorNum = c.address!.doorNumber; //doorNum is assigned null if address is null or undefined           
        }

        function f(c:Consumer){
            var doorNum = c.address?.doorNumber; //doorNum is assigned undefined if address is null or undefined
        }

    '?' for optional fields

        interface Employee{
            empId:number;       //this field can not be undefiend or null
            fullName:String;    //this field can not be undefiend or null
            salary:String;      //this field can not be undefiend or null
            bonus?:number; //here bonus is an optional field or a field that can be undefined but not null
            laptopId:Symbol | null;  //this field can not be undefiend but can be null
        }
