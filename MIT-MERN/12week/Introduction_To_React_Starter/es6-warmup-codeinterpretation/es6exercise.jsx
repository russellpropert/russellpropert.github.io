let A = [1, 2, 3];
let B = A.unshift(3);
// using Spread opererator
B = [0, ...A, 4]; // [0,3,1,2,3,4]
const f1 = () => 1;
const f2 = () => 2;
const f3 = () => 3;
B = [f1, f2, f3];
let [a, b] = B;
console.log(a() + 1 === b());
//Destructuring Object
let color = "red";
let width = 200;
let height = 300;
// or  onClick = width =>console.log(width);
let props = { color, width, height };
// shorthand for props = {color:color, width: width, height:height}
const onClick = ({ width }) => {
  console.log(width);
};
onClick(props);

width = props.width //old style
let {width} = props; // same as above. width = 200
let {color, height} = props; // color = 'red'; height = 300
let {color: myColor} = props; // myColor = 'red';
console.log(myColor);

A = [1, 2, 3];
let clone = [...A];
clone = [...clone, 4, 5]; // [1, 2, 3, 4, 5]
B = [0, ...A, 'Hello']; // [0, 1, 2, 3, 'Hello']