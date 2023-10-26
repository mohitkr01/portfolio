import ngrx from "../../assets/ngrx.png";
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import js from '../../assets/js.png';
import redux from '../../assets/redux.jpg';
import angular from '../../assets/angular.png';
import vue from '../../assets/vue.jpeg';
import wordpress from '../../assets/wordpress.png';
import mongodb from '../../assets/mongodb.png'
import php from '../../assets/php.jpg'
import python from '../../assets/python.png'

export const THEMES = {
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'angular': {
        backgroundImage: angular,
        linearGradient:  createLinearGradient('#0043A9', '#B42B2C'),
        primaryColor: '#B52C2D',
        color: '#0043A9'
    },
    'vue': {
        backgroundImage: vue,
        linearGradient: createLinearGradient('#49D191', '#33475F'),
        primaryColor: '#33475F',
        color: '#49D191'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#333333',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'rxjs': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'redux': {
        backgroundImage: redux,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
    'ngrx': {
        backgroundImage: ngrx,
        linearGradient: createLinearGradient('#F80090', '#242A31'),
        primaryColor: '#F80090',
        color: '#242A31'
    },
    'wordpress': {
        backgroundImage: wordpress,
        linearGradient: createLinearGradient('#2973aa', '#2c4251'),
        primaryColor: '#2973aa',
        color: '#2c4251'
    },
    'mongodb': {
        backgroundImage: mongodb,
        linearGradient: createLinearGradient('#57ab52', '#4a6b47'),
        primaryColor: '#57ab52',
        color: '#4a6b47'
    },
    'php': {
        backgroundImage: php,
        linearGradient: createLinearGradient('#617cbe', '#354059'),
        primaryColor: '#617cbe',
        color: '#354059'
    },
    'python': {
        backgroundImage: python,
        linearGradient: createLinearGradient('#3777ac', '#f2ca3d'),
        primaryColor: '#3777ac',
        color: '#f2ca3d'
    }
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
