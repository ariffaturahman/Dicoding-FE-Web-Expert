import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './data.js';

const menu = document.querySelector('#menu');
const header = document.querySelector('header');
const jumbotron = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const title = document.querySelector('.jumbo-title');

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

jumbotron.addEventListener('click', function() {
    drawer.classList.remove('open');
});

header.addEventListener('click', function() {
    drawer.classList.remove('open');
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
});

title.addEventListener('click', function() {
    drawer.classList.remove('open');
});