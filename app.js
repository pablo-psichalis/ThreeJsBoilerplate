import Detector from './src/utils/webgl-detector';
import './styles/style.css';

// Examples
const example01 = require('./src/examples-docs/cube');
const example02 = require('./src/examples-docs/line-drawing');

function init() {
    // Check for webGL capabilities
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }

    // Load example scripts
    // example01.render();
    example02.render();
}

init();