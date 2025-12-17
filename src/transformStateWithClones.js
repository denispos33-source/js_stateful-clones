'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];

  let current = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      current = {};
    }

    if (action.type === 'addProperties') {
      current = { ...current, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      const newState = { ...current };

      for (const key of action.keysToRemove) {
        delete newState[key];
      }

      current = newState;
    }

    history.push({ ...current });
  }

  return history;
}

module.exports = transformStateWithClones;
