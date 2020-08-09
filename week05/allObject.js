//js global objects
var objects = [
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect
];
var set = new Set();
let current;

while (objects.length) {
    current = objects.shift()
    if(set.has(current)) {
        continue;
    }
    set.add(current)
    for (let p of Object.getOwnPropertyNames(current)) {
        var property = Object.getOwnPropertyDescriptor(current, p);
        if(property.hasOwnProperty("value") && property.value instanceof Object){
            objects.push(property.value)
        }
        if (property.hasOwnProperty("getter")) {
            objects.push(property.getter)
        }
        if (property.hasOwnProperty("setter")) {
            objects.push(property.setter)

        }
    }
            

}
