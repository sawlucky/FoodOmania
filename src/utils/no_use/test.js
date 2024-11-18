// Extracting the collection and tags values using regular expressions
const urls =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6375676&lng=88.43190729999999&collection=141002&tags=layout_worldcup2&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
const val =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6375676&lng=88.43190729999999&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
const url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6375676&lng=88.43190729999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
const collectionMatch = url.match(/[?&]collection=(\d+)/);
const tagsMatch = url.match(/[?&]tags=([^&]+)/);

// Getting the values
const collectionId = collectionMatch ? collectionMatch[1] : null; // "83639"
const tagsValue = tagsMatch ? tagsMatch[1] : null; // "layout_CCS_Biryani"

console.log("Collection ID:", collectionId);
console.log("Tags:", tagsValue);
const id = "999";
const xxx =
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6375676&lng=88.43190729999999&restaurantId=` +
  id;
console.log(xxx);
// let x = 10;
// let y = x === 10 ? 20 : 30;
// console.log(y);
