// Task: Create a program that calls a cat based on a language.

// If the language: Hungarian, it should print 'cicc-cicc'
// If the language: Chinese, it should print 'miao-miao'
// If the language: Tunisian, it should print 'besh-besh'
// If the language: Japanese, it should print 'neko chan oide'
// Call it in any other language 'kitty-kitty'.

// Execute: node.js calling-a-cat.js Hungarian

function main(language) {
  console.log('language:', language)
  // The language variable will be the language from the command line. 
  switch (language) {
    case "Hungarian":
      console.log('cicc-cicc')
      break;
    case "Chinese":
      console.log('miao-miao')
      break;
    case "Tunisian":
      console.log('besh-besh')
      break;
    case "Japanese":
      console.log('neko chan oide')
      break;
    default:
      console.log('kitty-kitty')
      break;
  }
}

main("")

