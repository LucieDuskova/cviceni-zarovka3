// Žárovka
// Ovládejte žárovku.
// Vytvořte si repozitář ze šablony cviceni-zarovka se stránkou, která zobrazuje obyčejnou žárovku.

// Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce přidala k elementu žárovky CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
// Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. Opakovaným mačkáním kláves ji tak můžeme rozsvěcovat a zhasínat.



console.log('funguju!');

const bulbElement = document.querySelector('.bulb');
const turnBulb = () => {
  if (bulbElement.classList.contains('bulb--on')) {
    bulbElement.classList.remove('bulb--on');
  } else {
    bulbElement.classList.add('bulb--on');
  }
};
document.addEventListener('keydown', turnBulb);
