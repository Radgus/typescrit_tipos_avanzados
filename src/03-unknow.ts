let anyVar: any;
anyVar = true;
anyVar = 'hola';

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

// Ahora con unknow
let uknowVar: unknown;
uknowVar = true;
uknowVar = 'hola';

// uknowVar.doSomething();
if (typeof uknowVar === 'string') {
  uknowVar.toUpperCase();
}

if (typeof uknowVar === 'boolean') {
  let isNew2: boolean = uknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
