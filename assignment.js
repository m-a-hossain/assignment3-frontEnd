// 
// problem1 -----------------------------------------------------
 function kilometerToMeter(km){
        var meter =1000;
        if(km < 0 || km ==""){ // making stop for negative input
          return -1
        }else{
        return parseInt(km) * meter;
          }
       
} 

/*   var result =kilometerToMeter(-2)
     var result1 =kilometerToMeter('rt5215tr')
     var result2 =kilometerToMeter(2)
 */
 //console.log(result,result1,result2)


// problem 2 ----------------------------------------------------------------
  function budgetCalculator(a,b,c){
      var watch = 50;
      var mobile =100;
      var laptop =500;
      var  total = parseInt(watch *a +mobile *b +laptop*c);

      if((a,b,c < 0) || (a,b,c =="")){ // making stop for negative input
          return -1;
      }else{
           return total;
      }
     
  } 
/* console.log(budgetCalculator(3,3,3)) */
/* console.log(budgetCalculator("df21",3,3)) */

// problem 3 -------------------------------------------------------------------

 function hotelCost(stayDays){
    var discount =.20, fewDays
     
    if(stayDays < 0 || stayDays ==" "){// filtering unnessassary input
           return -1;
    }else{
        if(stayDays <= 10){
            fewDays = stayDays *100
             return fewDays;
        }else if(stayDays <=20){
            var count10Days= 10 * 100;
            var countMoreDays= stayDays-10;
            var totalDays =count10Days + countMoreDays *100;
            var getDiscount= totalDays*discount
            var costOfMoreDays= totalDays-getDiscount
            return costOfMoreDays;
        }else{
            var longTimeStay = stayDays *50;
            return longTimeStay;
       } 
    }
    
       
} 
/*  console.log(hotelCost(8)) 
console.log(hotelCost(11)) 
console.log(hotelCost(21)) 
console.log(hotelCost(-21))  
console.log(hotelCost('dfdre'))  
console.log(hotelCost(' '))   */

// problem 4 --------------------------------------------------------------------

  var names = ["Rahi", "Alikomol", "Muntaha", "Abu", "Hasan","Rumel"];


 function megaFriend(arr){
   var size = names.length;
   var longestName = names[0];

  for(var i = 0; i <names.length; i++){
      if(names[i].length> longestName.length){
         longestName = names[i];   
      }
     
  }

    return ('largest name of my friend is :'+ longestName);

 }

 /* var result =megaFriend(names)
 console.log(result)
 */
