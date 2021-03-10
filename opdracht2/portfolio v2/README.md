# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

*Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).*
*Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).*


# Case: Portfolio site
Voor deze case heb ik een portfolio site opgezet waarbij ik 4 van mijn beste projecten laat zien. 
Hierbij staan de design principes *Keep users in control*, *Provide a natural next step* en *Appearance follows behavior* centraal.


## Versie 1
De eerste versie heeft een simpele layout met linkjes die sticky op je scherm blijven. De portfolio projecten zie je vanzelfsprekend als je naar beneden scrolled.

* Link v1: https://channahkuipers.github.io/frontend-voor-designers-2021/opdracht2/portfolio%20v1/


## Versie 2

* Link v2: https://channahkuipers.github.io/frontend-voor-designers-2021/opdracht2/portfolio%20v2/


## Interface
**Keep users in control**
*De gebruiker moet in controle zijn, mensen voelen zich het meest op hun gemak als ze het gevoel hebben dat ze zichzelf en hun omgeving onder controle hebben - laat daarom regelmatig vooruitgang zien*

In het ontwerp zijn voor de gebruiker herkenbare patronen van een portfolio site te zien: 
zoals content dat op het scherm blijft hangen als je scrolled, linkjes die een onderlijning hebben en portfolio projecten die met een animatie inspringen.
Linkjes krijgen een andere kleur, de gebruiker krijgt directe feedback en weet dat hij/zij hier op kan klikken.

**Provide a natural next step**
*Anticipeer op wat de volgende interactie zou moeten zijn en ontwerp deze om je site te ondersteunen. Geef de gebruiker een natuurlijke volgende stap, die ze helpt hun doelen verder te bereiken*
Dit heb ik gedaan door...

**Appearance follows behavior**
*Mensen voelen zich het prettigst bij dingen die zich gedragen zoals ze het verwachten. Daarbij zullen (interactie)-elementen eruitzien zoals ze zich gedragen. Vorm volgt functie. Als het element eruit ziet als een knop, zou het als een knop moeten werken.*
Linkjes zien er klikbaar uit door de onderlijning en hover-effect.

**UI events**
*Mouse Event*
Hoe heb ik dit toegepast?



## code
Als eerst ben ik begonnen met de opzet van de HTML, alle content elementen heb ik geplaatst, daarna ben ik alle onderdelen met CSS gaan stylen. Vervolgens ben ik begonnen met de JavaScript...

**Uitlegcode:**

## Bronnen:
* Positie van elementen: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* Positie achtergrond img: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
* Intersection Observer-functies: https://pawelgrzybek.com/the-intersection-observer-api-explained/
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
* UI events https://developer.mozilla.org/en-US/docs/Web/API/UIEvent
