
/*

function checkForFactor (base, factor) {
        base>=0;
        factor>=1;
      if (factor%base===0){
        
        return true
      } else {
        
        return false
      }
    }

    const x = checkForFactor (2,5);
    console.log(x);

    */
/*
    function past(h, m, s){
        return (h*60*60*1000)+(m*60*1000)+(s*1000)
      }

      const x = past(1,1,1)
      console.log(x);

      */
/*
      function litres(time) {
        return Math.floor(time*0.5);
      }

      const x = litres(4)
      console.log(x);

      */

/*
      function between(a, b) {
        var arr = [];
        for(var i = a; i <= b; i++)
        arr.push(i);
        return arr;
        }

        */

        /*
        function find_average(array) {
        let sum = 0;
        let kiekis = 0;
     
        for (let i = 0; i < array.length; i++) {
                sum += array[i];
                kiekis++
        }

        if (array.length===0) {

            return 0
        } else {
            return sum / array.length
    }
}

          const x = find_average([4,8])
          console.log(x);
          */

          function evensAndOdds(num){
            if (num%2===0){
              
              return num.toString(2)
            } else {
              
              return num.toString(16)
            }
            }

            const x = evensAndOdds(31)
            console.log(x);