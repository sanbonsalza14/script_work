// for loop 문법
// 자바와 동일
// #
// ##
// ###
// ####


// for(let i=0; i<=5; i++){}
for(let i=1; i<=5; i++){
  let star = ''
  for(let j=1; j<=i; j++){
    star = star + '#';
  }
  console.log(star)
}

//java : advanced For
// for(int x : data) {
//}

// Java Script
//for ~ in 구문 : 인덱스 기준
//for ~ of 구문 : Java의 advanced for 랑 같음.

const ahn = {
  name : '안유진',
  year : 2003,
  troup : 'ive'
}

// //for~in
// for(let x in ahn){
//   console.log(ahn[x]);
// }
// console.log('==========================');
// console.log('for ~ in : object 순회')
// console.log('==========================');
// console.log('for ~ of : 배열만 가능')
// let ive =['장원영','안유진','이서'];
// for(let x of ahn){
//   console.log(x)
// }
// console.log('for ~in')
// for(let x in ive){
//   console.log(ive[x]);
// }

// 그룹 데이터


const girlGroups = [
  {group: "ive", members: ["장원영", "안유진", "이서"]},
  {group: "에스파", members:["카리나","윈터","지젤","닝닝"]},
  {group: "케플러", members:["최유진","샤오팅","마시로"]}
];

for (let i = 0; i < girlGroups.length; i++) {
  console.log(girlGroups[i].group);
}
for (let i = 0; i < girlGroups.length; i++) {
  const groupName = girlGroups[i].group;
  const members = girlGroups[i].members;

  console.log(`그룹명: ${groupName}`);
  console.log(`${groupName} 멤버: ${members.join(", ")}`);
}
console.log('==========================');
for(let x in k_group){
  let group = k_group[x].group;
  let member = ''
  console.log(`${+x +1}. 그룹명 : ${k_group[x].group}`)
  for(let y of k_group[x].name){
    member = memer + y + ''
  }
  console.log(`${group}  멤버 : ${member}`)
  
}

//break :현지의 블럭을 탈출 
// continue: 현재 아래 실핼않고 블럭계속진행 
// return: 함수를 빠져나가는 것
// do ~ while or while
//1~10 까지 회전하면서, 5면 탈출
nuber = 11
do {
  if(number ==5)break;
console.log(number)
number++;
}while(number < 10)
