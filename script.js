///Javab Soal-1//
let input = prompt(
    "لطفا بعد از ثبت مولفه آرایه از (,)استفاده کنید.... مثل :test,1,2,3"
  );
  let array = input.split(",");
  console.log(array);
  console.log("آرایه است:", Array.isArray(array));
  
  function test(array) {
    for (x = 0; x <= array.length; x++) console.log(typeof array[x]);
  }
  test(array);
  
  //Javab Soal-2//
  let a = 4 + "4";
  let b = 2222n;
  let c = "reza";
  let d = 12 && 124;
  let e = 12 || 124;
  let f = "Null";
  let g = 2 * 2;
  let h = 2 * "2";
  console.log(
    typeof a,
    typeof b,
    typeof c,
    typeof d,
    typeof e,
    typeof f,
    typeof g,
    typeof h
  );
  
  //javab Soal-3//
  let age = prompt("چندسالته؟");
  
  if (isNaN(age)) {
    alert("na motabar");
  } else {
    alert("motabar");
  }
  
  //javab Soal-4//
  let str = prompt("نام خود را وارد کنید");
  function reverseString(str) {
    let splitString = str.split("");
    console.log(splitString);
  
    let reverseArray = splitString.reverse();
    console.log(reverseArray);
  
    let joinArray = reverseArray.join("");
    console.log(joinArray);
  }
  reverseString(str);
  
  //javab soal-5//
  
  function countPrimes(num){
      let count=0
      let primeCount=0;
      let i,j
      for(j=2;j<=num;j++)
      {
      for( i=2;i<=j;i++)
      {
        if(j%i==0)
        count++
      }
    
      if(count==2){
        primeCount++;
      }
      count=0
    
    
    
      }
      return primeCount;
    }
    
    console.log(countPrimes(100));
  
  
  
  
  // function primelogger(start, end) {
  //   let primeNumbers = [];
  //   var x1=prompt("عدد اول را وارد کنید");
  //   var x2=prompt("عدد دوم را وارد کنید");
  //   if (typeof Number(start) === "number" && typeof Number(end) === "number") {
  //     for (let i = start; i <= end; i++) {
  //       if (i % i === 0 && i % 1 === 0) {
  //         primeNumbers.push(i);
  //       }
  //     }
  
  //     console.log(primeNumbers);
  //   } else {
  //     console.error("Please Enter Number!!!");
  //   }
  // }
  // primelogger(x1,x2);
  