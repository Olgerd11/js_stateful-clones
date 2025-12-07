'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  const modifiedArr = [];
  const finalSolution = [];
  const modifiedState = { ...state };

  modifiedArr.push(modifiedState);

  let lastElement = modifiedArr[modifiedArr.length - 1];

  for (const prop of actions) {
    switch (prop.type) {
      case 'clear': {
        lastElement = {};
        break;
      }

      case 'addProperties': {
        for (const key in prop.extraData) {
          lastElement[key] = prop.extraData[key];
        }
        break;
      }

      default: {
        for (const key of prop.keysToRemove) {
          delete lastElement[key];
        }
      }
    }

    const roundLog = { ...lastElement };

    finalSolution.push(roundLog);
  }

  return finalSolution;
}

module.exports = transformStateWithClones;
