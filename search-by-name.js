// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node search-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']

function main(keyword) {
    /* console.log('keyword:', keyword) */
    for (const pet of catNames) {
        if(pet.includes(keyword)){
            console.log(pet)
        }
    }
    // Tip: string.prototype.includes()
}

main("Cir")

