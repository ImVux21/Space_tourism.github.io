const $ = document.querySelector.bind(document); // $ will use to exchange document.querySelector('') (faster)
const $$ = document.querySelectorAll.bind(document); // $$ will use to exchange document.querySelectorAll('') (faster)

const desNavItems = $$('.destination_nav-item');
const containerDestinations = $$('.container_destination');

desNavItems.forEach((item, index) => {
    item.onclick = function () {
        const containerDestination = containerDestinations[index];

        $('.container_destination.active').classList.remove('active');
        $('.destination_nav-item.active').classList.remove('active');

        containerDestination.classList.add('active');
        this.classList.add('active');
    }
});