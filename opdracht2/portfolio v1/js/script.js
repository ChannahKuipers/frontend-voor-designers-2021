/* const options = {
    threshold: [0.1]
};
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('section, article');

function onEntry(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {
            change.target.classList.add('visible');
        }
    });
}

for (let elm of elements) {
    observer.observe(elm);
}
*/


// Eerst checken van change op de .isIntersecting parameter
function onEntry(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {

        change.target.classList.add('visible');
        }
    });
}

//opties
let options = {
    threshold: [0.5]
};

//Een nieuwe Intersection Observer
let observer = new IntersectionObserver(onEntry,options);

//De sections met content
let elements = document.querySelectorAll('section, article');

//loop door alle elementen
for (let elm of elements) {
    observer.observe(elm);
}