function newPrice(currentPrice , discount ) {
     if( typeof currentPrice!=="number" || typeof discount!=="number"){
            return "Invalid";
     }
     if(discount<0 && discount>100){
        return "Invalid";
     }
          const disAmount=(currentPrice*discount/100);
          const finalPrice=currentPrice-disAmount;
          return finalPrice.toFixed(3);

}
const price= newPrice(2000,17.17);
console.log(price);