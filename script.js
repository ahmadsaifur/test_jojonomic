// Complete the variadricAverage function so that it can take any number 
// of arguments and calculate their average.
//
// Bonus Test: Edit the 'average' function to use the 'variadricAverage'.
function executeQ1()
{
    document.getElementById("my-name").innerHTML ="<p>Ahmad Saifur Rohman</p>"
}
function executeQ2()
{
    var docs = document.getElementById("q2-list");

    var data = ['semangka','jeruk','naga'];

    for (i=0;i<data.length;i++)
    {
        output = "<li>"+data[i]+"</li>";
        docs.innerHTML += output;
        
    }
}
function executeQ3()
{
    class Person {
        constructor(name) {
          this.name;
        }
      }
      var person1 = new Person();
      person1.name = "Scoot";
      var person2 = new Person();
      person2.name = "Matt";
      let items = [person1, person2];
      let names = document.getElementById("q3-list");
      items.map((item) => {
        return (names.innerHTML =
          names.innerHTML + "<li>" + item.name + "</li>");
      });    
}
function executeQ4()
{
    fetch(
        "https://gist.githubusercontent.com/awadhawan18/54592d9ec5e7be1b39013cdd7e78dae4/raw/54a90fe99b8e821e273e1997f356d04308bdb232/Random-images.json"
      )
        .then((res) => res.json())
        .then((data) => {
          const html = data.sample.map((desc) => {
            return desc.description;
          });

          const dataJson = JSON.stringify(html);
          document.getElementById("q4-answer").innerHTML = dataJson;
        })
        .catch((err) => {
          console.log(err);
        });
    }



function average(numbers) {
  return variadricAverage.apply(null, numbers);
};
console.log('The average is: ' + average([2, 5, 6, 2, 45, 3, 23, 14]));

function variadricAverage() {
  // YOUR CODE HERE
  for (var i = 0 , sum = 0 , n = arguments.length; i < n; i++) {
    sum += arguments[i];
  } 
  return sum / n;
};
console.log('The average is: ' + variadricAverage(2, 5, 6, 2, 45, 3, 23, 14));