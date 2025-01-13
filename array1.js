const marvel_Heros=["thar", "Ironman", "spiderman"];
const dc_Heros=["superman", "flash","batman"];

marvel_Heros.push(dc_Heros);
console.log(marvel_Heros);

marvel_Heros.concat(dc_Heros);
console.log(marvel_Heros);


const another_array=[1,2,3,[4,5,6,],7, [6,7,[4,5]]];
console.log(another_array);

let real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));