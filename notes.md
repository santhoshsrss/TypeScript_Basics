core types
  JavaScript and Typescript Support:  

    number type - 1, 2.3, -19
        all number, no different between integers or floats.
    string type - 'hi', "hi",`hi`.
        all text values.
    boolean type - true or false.
        just like true value or false value.

The key Different is: JavaScript and Typescript support uses 'dynamic type'(resolved at runtime), Typescript uses 'static type'(set during development).

In javascript and Typescript all the number are float there is no difference between 5.0 or 5.

Object types: {age:30}
    any javascript object more specific types (type of object) are possible. 

Array type: [3, 4, 3, 4, 3]
    Any javascript array, type can be flexible or strict(regarding the element type).

Tuples type: [1, 2] 
    Added by Typescript: it is a fixed-length array.
    example: role : [number, string]

Enum type: enum{NEW, OLD}
    Added by Typescript: automatically enumerated gobal constant identifiers.

Any type: * 
    Any kind of value, no specific type assignment. 

Union type: input1: number | string
     Used to combine two datatypes.

Type aliases/ custom type : type combinable = number | string;
    It can be used to Create your own type. 