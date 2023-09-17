const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf8')
console.log(first);
second=readFileSync('./content/second.txt','utf8')
console.log(second);

writeFileSync('./content/res.txt',`Here is the result: ${first}, ${second}\n`,{flag:'a'})
