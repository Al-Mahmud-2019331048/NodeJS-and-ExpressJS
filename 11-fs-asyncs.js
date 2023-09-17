const {readFile,writeFile}=require('fs')

readFile(
    './content/first.txt',
    'utf8',
    (err,result)=>{
    if(err){
        console.log("error");
    }else{
        const first=result;
        readFile(
            './content/second.txt',
        'utf8',
        (err,result)=>{
            if(err){
                console.log('error');
            }
            else{
                const second=result;
                writeFile(
                    './content/res.txt',
                    `Here is the result : ${first}, ${second}\n`,
                    (err,result)=>{
                    if(err){
                        console.log('error');
                    }else{
                        console.log(result);
                    }
                })
            }
        })
    }
})