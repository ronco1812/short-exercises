/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise
    .catch((e) => reject(e))
    .then((a) => transformer(a))
    .then((value) => resolve(value))
    .catch((value) => reject(value));

    
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
  .then((ans) => {
    return new Promise((res, rej) => {
      if (ans * ans >= 0) {
        res(ans * ans);
      } else {
        rej(`Cannot convert '${ans}' to a number!`);
      }
    });
  })
  .catch((err) => {
    return new Promise((res, rej) => {
      rej(err);
    });
  });
}


/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => {
      return new Promise((resolve) =>{
        resolve(0)
      })
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
 function switcheroo(promise){
  return promise.then(
    (ans) => {
      return new Promise((res, rej) => {
        rej(ans);
      });
    },
    (err) => {
      return new Promise((res) => {
        res(err);
      });
    }
  );
}


/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};