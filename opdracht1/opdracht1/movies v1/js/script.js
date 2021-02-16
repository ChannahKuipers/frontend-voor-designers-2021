var hartje = document.querySelector("article button.hartje");
console.log(':hartje'+ hartje);

hartje.addEventListener("click", addToFavorites);

/* HARTJES */
/* wanneer op hartje wordt geklikt, fav toevoegen of weghalen*/
function addToFavorites(event) {
    var clickedHartje = event.target;
    if (clickedHartje.innerHTML == "♡") {
      /* leeg hartje wordt vervangen door gevult hartje */
        clickedHartje.innerHTML = "♥"; updateWishlist("plus");
    }
    else {
        clickedHartje.innerHTML = "♡"; updateWishlist("min");
    }
}
/* alle hartjes selecteren */
/* voor elke button die geselecteerd is kan weg gedrukt worden*/
document.querySelectorAll('.hartje').forEach(btn=>{
  return btn.addEventListener("click", addToFavorites);
})


/* WISHLIST*/
/* fav film wordt toegevoegd aan wishlist */
function updateWishlist(action) {
    let wishlistAmount = document.querySelector("span");

    let currentAmount = wishlistAmount.innerHTML; currentAmount = parseInt(currentAmount);
    /* fav film wordt toegevoegd > +1 wordt weergegeven */
    let newAmount; if (action == "plus") { newAmount = currentAmount + 1; }

    /* wanneer fav film weg wordt gehaald > aantal -1 */
    else { newAmount = currentAmount - 1; }
    wishlistAmount.innerHTML = newAmount;
}
