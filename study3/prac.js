let arr = [1,2,3];
let [one, two, three] = arr;
//if 변수의 개수 > 배열의 크기 -> 오류 X, undefined 할당

console.log(one);
console.log(two);
console.log(three);

let person = {
    name:"이정환",
    age:25,
    location: "경기도"
};
let {name, age, location} = person;
//NOT 저장순서, BUT key 이름으로 할당 -> 변수명과 key값 동일해야함

console.log(name);
console.log(age);
console.log(location);

function func({name, age, location}) {
    console.log(name, age, location);    
}
func(person);
//함수의 매개변수가 객체일 때, 구조분해 할당 -> 필요한 프로퍼티만 전달 ㄱㄴ


function func({name: n, age: a, location: l}) {
    console.log(n, a, l);    
}
func(person);
//구조분해 할당과 동시에 변수명 변경, 콜론(:) 사용
