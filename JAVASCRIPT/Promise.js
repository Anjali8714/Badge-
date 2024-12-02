let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'First'));
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Second'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Third'));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); 
  })
  .catch(error => {
    console.log(error);
  });
