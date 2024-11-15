const input = prompt(
  "Please enter your favorite froyo flavors followed by comma for example: vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringToArray = (str) => {
  return str.split(",");
};
// remove extra space and return non-empty array
const removeExtraSpace = (arr) => {
  const newArray = [];
  for (const i in arr) {
    if (arr[i].trim() !== "") {
      newArray.push(arr[i].trim());
    }
  }
  return newArray;
};
const froyoFlavors = (arr) => {
  const flavors = {};
  for (const flavor in arr) {
    if (arr[flavor] in flavors) {
      flavors[arr[flavor]] += 1;
    } else {
      flavors[arr[flavor]] = 1;
    }
  }
  return flavors;
};

const arr = stringToArray(input);
const properArr = removeExtraSpace(arr);

const objOfFroyoFlavors = froyoFlavors(properArr);
console.table(objOfFroyoFlavors);
/*//The user is prompted for froyo flavors upon entering the website.
const input = prompt(
  "Please enter your favorite froyo flavors followed by comma for example: vanilla,vanilla,vanilla,strawberry,coffee,coffee "
);
//The user's input string is split into an array of strings.
const arr = input.split(",");
for (let i in arr) {
  arr[i] = arr[i].trim().toLowerCase();
}
//An object is used to keep count of how many orders there are of each flavor.

const froyoFlavors = {};
//The logic for counting the frequencies of elements in an array is organized into a function that returns an object.

function listOfOrders(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      if (arr[i] in froyoFlavors) {
        froyoFlavors[arr[i]] = froyoFlavors[arr[i]] + 1;
      } else {
        froyoFlavors[arr[i]] = 1;
      }
    }
  }
  return froyoFlavors;
}

console.table(listOfOrders(arr));
*/
