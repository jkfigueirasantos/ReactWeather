function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Deu merda!');
    }
  });
}

addPromise(20, 5).then(function(result){
  console.log('Success promise, J! ', result);
}, function(err){
  console.log(err);
});
