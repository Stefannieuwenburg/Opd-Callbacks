const huiswerkMaken = (vak, callback) => {
setTimeout(klaarMetHuiswerk, 2000);
console.log(`Ok ik ga nu mijn ${vak} huisWerk`);
callback();
};

  
const klaarMetHuiswerk = () => {
console.log('kijk paps/Mams,ik ben klaar met mijn huiswerk');
};

  huiswerkMaken("vak", klaarMetHuiswerk);
 

