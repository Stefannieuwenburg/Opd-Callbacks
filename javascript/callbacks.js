function huisWerkMaken(huisWerk,callback) {

console.log(`Ok ik ga nu mijn ${huisWerk} huisWerk`);
callback();
}

  
function KlaarMetHuisWerkMaken(){
    console.log('kijk paps/Mams,ik ben klaar met mijn huiswerk');
  }
  
  huisWerkMaken('math', klaarMetHuisWerkMaken);



 