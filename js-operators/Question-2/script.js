// Clean and format the product name
let productName = "  wireless headphones PRO  ";

let words = productName.trim().toLowerCase().split(" ");
let title = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

title = title.replace("Pro", "Pro Edition");

console.log("Cleaned title:", title);
console.log("Title length:", title.length);
