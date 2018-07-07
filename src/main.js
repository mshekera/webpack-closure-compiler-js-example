import SomeClass from './SomeClass';
import {b} from './fewFuncs';

function getOtherModule() {
  import(/* webpackChunkName: "otherModule" */ './otherModule').then(module => {
    const result = module.default();
    console.log(`Result of fetched module is: ${result}`);
  });
}

function main() {
  const sc = new SomeClass();

  console.log('sc.bar()', sc.bar());
  console.log('b', b());

  console.log('Done! Fetching other module...');

  setTimeout(getOtherModule, 200);
}

main();