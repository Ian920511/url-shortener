function sample(collection) {
  const index = Math.floor(Math.random() * collection.length);
  return index;
}

function shorterURL(times) {
  const collection =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  let answer = "";
  for (let i = 1; i <= times; i++) {
    answer += collection[sample(collection)];
  }

  return answer;
}

module.exports = shorterURL;
