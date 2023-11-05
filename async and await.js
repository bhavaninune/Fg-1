async function dadmakespromise()
{
    try{
        const a=1;
        const dadspromise=await new Promise((resolve,reject)=>
        {
            
      var salarycredited=true;
      var salary=34000;
      var costofps5=40000;
      var costofps4=30000;
      setTimeout(()=>{

      
      if(salarycredited===true &&salary>costofps5)
      {
        resolve('buy him a ps5')
      }
      else if(salarycredited===true &&salary>costofps4)
      {
        reject({success:false,message:'should i buy a ps4 instead'})
      }
      else{
        reject({'sorry i wish i try a next month'});
      }
            },1000)
        })
    console.log(dadspromise);
}

catch(err)
{
    console.log(err);
}}
dadmakespromise();