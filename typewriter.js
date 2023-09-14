const typewriter = function(str) {
  console.log(str.length);
  let delay = 0;

  for (let i = 0; i <= str.length; i++) {
    let char = str[i];
    setTimeout(() => {
      if (i < str.length) {
        process.stdout.write(char);
      } else {
        console.log("\n");
      }
    }, delay);
    delay += 50;
  }
};
const sentence = "hello there from lighthouse labs:";

typewriter(sentence);


