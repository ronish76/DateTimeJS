//const now = new Date();
// console.log(now);
// console.log(typeof now);

// console.log('getFullYear',now.getFullYear());
// console.log('getMonth',now.getMonth());
//console.log('getDate',now.getDate());
//console.log('getTime',now.getTime());
//console.log('getDay',now.getDay());
// console.log('getHours',now.getHours());
// console.log('getMinutes',now.getMinutes());
// console.log('getSeconds',now.getSeconds());


// console.log('timestamp:',now.getTime());
// number of milliseconds since 12 am 1st of january 1970 //





// *** date strings ***//
// const now = new Date();
// console.log('timestamp:',now.getTime());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());




// *** timestamps***//
//***example created 20 days ago***///
// const now = new Date();
// const before= new Date('February 3 2022 10:30:25');
// const diff = now.getTime()- before.getTime();
// console.log(diff);
// console.log(now.getTime(),before);

// const mins = Math.round(diff/1000/60);
// const hours= Math.round(mins/60);
// const days= Math.round(hours/24);

//  console.log(mins);
//  console.log(hours);
//  console.log(days);
//  console.log(`The blog was written ${days} days ago`);






//***converting timestamps into date objects***//

// const timestamp= 1706761768008;
// console.log(new Date(timestamp));





//**Display clock in console */
// const time= document.getElementsByClassName('time');
// const tick= () => {
//     const now = new Date();

//      const h= now.getHours();
//      const m = now.getMinutes();
//      const s = now.getSeconds();

// console.log(h,m,s);
// };
// setInterval(tick,1000);



    
    
    
    
    // get clock

    const time= document.getElementsByClassName('time');
    const tick= () => {
     
    const now= new Date();

     const h= now.getHours();
     const m = now.getMinutes();
     const s = now.getSeconds();
     const html =`
     <span>${h}</span> :
     <span>${m}</span> :
     <span>${s}</span>
     `;

     for (let i = 0; i < time.length; i++) {
         time[i].innerHTML = html;
        }

 };
  setInterval(tick,1000);