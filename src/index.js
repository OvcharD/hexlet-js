import _ from 'lodash';

export default

function sayHello() {
  const a = 'Hello, Hexlet!';
  const b = _.last(['one', 'two']);
  console.log(a);
  console.log(b);
}
