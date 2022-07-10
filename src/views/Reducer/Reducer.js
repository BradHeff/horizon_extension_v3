import {
   Options } from './Constants';

const initialStateOption = {
   option: localStorage.getItem('option') === null?'Students':localStorage.getItem('option')
}

export const OptionSelect = (state=initialStateOption, action={}) => { 
   switch(action.type) {
       case Options:
           return Object.assign({}, state, {option: action.payload});
       default:
           return state;
   }
}