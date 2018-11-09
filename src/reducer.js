import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random()*100) + 1
};

export default (state=initialState, action) =>{
  if(action.type === RESTART_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    })
  } else if (action.type === MAKE_GUESS) {

  } else if (action.type === GENERATE_AURAL_UPDATE) {

  }

  return state;

};