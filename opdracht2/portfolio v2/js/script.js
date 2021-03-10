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


 // GOED CODE >>


// Eerst checken van change op de .isIntersecting parameter
function onEntry(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {

        change.target.classList.toggle('visible');
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

/*
var options = {
    root: document.querySelector('section, article'),
    rootMargin: '0px',
    threshold: 1.0 // trigger only when element comes into view completely
};
var ob = new IntersectionObserver((entries, observer) => {
  entries[0].target.classList.toggle('visible');
}, options);

// observe all paragraphs, when coming into view, change color
document.querySelectorAll('section, article').forEach((item) => {
  ob.observe(item);
});

*/