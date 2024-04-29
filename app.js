if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('./service-worker.js')
	      .then(registration => console.log('SW registered'))
		  .catch(err => console.log(`SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}

function changeBackground() {
    const select = document.getElementById('backgroundSelect');
    const selectedValue = select.value;
    document.body.style.backgroundImage = `url(${selectedValue}.jpg)`;
}