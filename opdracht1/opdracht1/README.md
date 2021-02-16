# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

*Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser*
*Lees hier de  [opdrachtbeschrijving](./opdrachtbeschrijving.md).*


# Case: Film als favoriet opslaan
Bij de website van Movie Time kunnen gebruikers hun favorieten films op hun wishlist bewaren, door op het hartje te klikken. Wanneer dit is gedaan wordt het ingekleurd weergegeven en geeft het wishlist bolletje aan hoeveel films je hebt toegevoegd aan je lijst. Hierbij staan de design pricipes *Keep users in control* & *Stong visual hierachies works best* centraal.


## Versie 1
De eerste versie heeft een basic layout, waar de afbeeldingen van de films de focus krijgen. 
Tijdens het testen was er niet veel aan te merken op de werking van de site, hier en daar kon er wel netter uitgelijnd worden. Ook was er te zien dat er nog focus op de buttons stonden die ik bij het zelftesten in Firefox niet heb gezien, hier heb ik meer onderzoek naar gedaan.
![Screenshot v1](frontend-voor-designers-2021/img/v1.png)

Feedback:
* Tekst en objecten netjes uitlijnen, zoals titel in het midden zetten.
* Gebruik van flexbox, zodat er minder CSS regels in gebruik worden genomen en de site meer responsive wordt.
* Focus weg halen bij de hartje-buttons, zodat er geen omlijning te zien is etc.


## Versie 2
De tweede versie, in de definitieve site geworden. Ik heb bovenstaande feedback verwerkt.


## Interface
**Keep users in control**
*De gebruiker moet in controle zijn, mensen voelen zich het meest op hun gemak als ze het gevoel hebben dat ze zichzelf en hun omgeving onder controle hebben - laat daarom regelmatig vooruitgang zien*

In het ontwerp zijn voor de gebruiker herkenbare patronen te zien: het hartjes-button en het notificatie bolletje. De gebruiker weet wat hij/zij kan verwachten bij deze elementen en wat er gebeurt. Door de directe feedback van het hartje - notificatie bolletje, laat ik de gebruiker als gewenst vooruitgang zien.
Ook laat ik de gebruiker in controle over het hartje, door deze met één druk toe te voegen maar ook met dezelfde handeling te verwijderen uit de wishlist.

**Strong visual hierarchies works best**
*Sterke visuele hierarchie werkt het beste, is het pincipe van hoe je elementen rangschikt op volgorde van belangrijkheid en dit ook zo weergeeft*

Dit is te zien aan het contrast van de site, de witte navigatie balk en teksten komen door de donkere achtergrond echt naar voren en zijn voor de gebruiker ook belangrijk om te zien. 
Met de kleur van de elementen, wordt er ook onderscheid gemaakt.
De witte teksten geeft de titel "trending" en de titels van de films aan.
De oranje onderdelen geeft elementen met interactie aan.

Door de afbeeldingen van de films centraal te zetten zullen gebruiker deze sneller herkennen, daaronder staat de titel van de film en daaronder het wishlist-hartje om de film aan je wishlist toe te voegen. Dit is van boven naar bendede de volgorde hoe de gebruiker denkt/handeld. Welk soort film is het/ heb ik deze al gekeken? (Een afbeelding zegt al veel over een film). Daarna de bevestiging van de titel. Als laatst het watchlist-hartje, wil ik deze film toevoegen aan mijn watchlist?


## Code
Als eerst ben ik begonnen met de opzet van de HTML, alle content elementen heb ik geplaatst, daarna ben ik alle onderdelen met CSS gaan stylen. Vervolgens ben ik begonnen met de JavaScript. Hierbij heb ik een bestaande code, als hulpmiddel gebruikt. Ook heb ik een paar filmpjes op youtube bekeken om QuerySelectAll te begrijpen.

**Uitlegcode:** ik roep op regel 1 de variable op van de button *"hartje"*. De werking van deze variable controleer ik door *console.log* te gebruiken op regel 2, dit betekend dat er in de console wordt getoont wat er tussen de haakjes staat.
Vanaf regel 8 worden de functies van de variabel *"hartje"* beschreven. Doormiddel van deze code zal, wanneer er op het hartje wordt geklikt, deze aan de favorieten worden toegevoegd of juist weggehaald worden.
De code begint met een leeg hartje, wanneer hierop geklikt wordt, wordt het hartje ingevult. *'else'* geeft aan dat wanneer het hartje al is ingevult, het bij een click juist weer een leeg hartje moet weergeven.
Op regel 20 wordt querySelectorAll gebruikt, hiermee worden alle hartjes op de site aangeroepen ipv één. De code geeft aan dat voor elke button *(btn)* die geselecteerd is, ook weg gedrukt kan worden *(return)*.

Op regel 27 wordt de functie *'updateWishlist'* aangeroepen. Met de code wordt de film die de gebruiker met het hartje selecteerd ook met een cijfer +1 weergeven bij de wishlist *'favorites'* en zo aan de gebruiker laten weten dat deze film ook daadwerkelijk is toegevoegd *(newAmount = currentAmount + 1)*. Met *'else'* wordt aangegeven dat wanneer de gebruiker zijn/haar favoriete film weghaald (dus het hartje weg klikt) het aantal met -1 afneemt *(newAmount = currentAmount - 1)*.


### Bronnen
* Plaatsing microinteractie bolletje: https://www.w3schools.com/howto/howto_css_search_button.asp
* Flex-objecten in andere positie plaatsen: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* Microinteratie van hartje: https://codepen.io/shooft/pen/poyaJpa https://codepen.io/shooft/pen/abNPEga 
* Gebruik van grid en JS: Eigen code van de vakken: programmeren en frontend
* Focus op buttons https://css-tricks.com/almanac/selectors/f/focus-visible/

