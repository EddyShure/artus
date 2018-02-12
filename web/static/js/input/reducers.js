import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import {
  REQUEST_CACHES, RECEIVE_CACHES,
  REQUEST_OPTIONS, RECEIVE_OPTIONS,
  REQUEST_FIELDS, RECEIVE_FIELDS,
  REQUEST_ABBREVIATION, RECEIVE_ABBREVIATIONS,
  REQUEST_FORM_SUBMIT, RECEIVE_FORM_SUBMIT,
  REQUEST_AUTOCOMPLETE, RECEIVE_AUTOCOMPLETE
} from './actions';

function autoComplete(state = {
  isFetching: false,
  completion: {}
}, action) {
  switch(action.type) {
    case REQUEST_AUTOCOMPLETE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_AUTOCOMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        completion: action.completion
      })
    default:
      return state
  }
}

function formDefinitions(state = {
  isFetching: false,
  isSending: false,
  caches: [],
  cacheCount: null,
  options: [],
  fields: [],
  abbreviations: [],
  reviewID: null
}, action) {
  switch(action.type) {
    case REQUEST_CACHES || REQUEST_OPTIONS || REQUEST_FIELDS || REQUEST_ABBREVIATIONS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case REQUEST_FORM_SUBMIT:
      return Object.assign({}, state, {
        isSending: true
      })
    case RECEIVE_CACHES:
      return Object.assign({}, state, {
        isFetching: false,
        cacheCount: action.caches.length,
        caches: action.caches
      });
    case RECEIVE_OPTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        options: action.options
      });
    case RECEIVE_FIELDS:
      return Object.assign({}, state, {
        isFetching: false,
        fields: action.fields
      });
    case RECEIVE_ABBREVIATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        abbreviations: action.abbreviations
      });
    case RECEIVE_FORM_SUBMIT:
      return Object.assign({}, state, {
        isSending: false,
        reviewID: action.id
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  formDefinitions,
  autoComplete,
  form: formReducer
});

export default rootReducer;