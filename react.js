//Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.

function number(x) {
    if (x <= 0) {
      return true;
    } else {
      return false;
    }
  }



// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

function integer(x) {
    return x++;
  }




// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers. 

function emad(arr) {
    let newArr = [];
    const regexa = /[0-9]/;
    for (let i = 0; i < arr.length; i++) {
      if (regexa.test(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  }
  emad(["d", "n", "4f", "3e"]);
















// Ex4: Develop a JS Code to check if a number is even or odd using recursion 
    //   function odd_evenNum(num) {
    //     if(num === 0){
    //         return(`${num} is even`)
    //     }
    //    if(num === 1){
    //         return(`${num} is odd`)
    //     }
    //     else{
    //         num = num - 2;
    //         return odd_evenNum(num);
    //     }
    //   }
    //   console.log(odd_evenNum(2));
    //   console.log(odd_evenNum(7));
    //   console.log(odd_evenNum(6));

         


        // Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "   ddaaeee")
           
              

        // Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]


        // Ex7: Use forEach to  Return all the names in the previous array


//         Ex8: Project an array of series into an array of {id, title} pairs using forEach()
// A projection is a process of applying a function to an existing value to produce a new value.



        // Ex 9: Use map() now to implement the same previous functionality

        const mapedSeries = newSeries.map((value) => {
            return {
                "id": value.id,
                "title": value.title,
            }
        });

        // console.log(mapedSeries);

        // Ex 10: Use filter() to return the series with a rating under 5 


        const filteredSeries = newSeries.filter((value) => {
            return value.rating < 5;
        });
        // console.log(filteredSeries);
        
    


    series();



        // Ex 11: Use reduce()  function to return the longest string in an array of strings.
        let courses = ["Java", "JavaScript", "Python", "C++", "PHP"];

        courses.reduce((acc, value) => {
            if(acc > value.length)
            {
                console.log(acc);
            }else{
                acc = value.length;
            }
        },0);

        
        // Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.




        // Ex13: Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.


        // Ex14: What is the output of the following JS code segments? and Why?
