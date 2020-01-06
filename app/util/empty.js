/* eslint no-restricted-syntax: 0 */
/* eslint no-prototype-builtins: 0 */
/* eslint no-extend-native: 0 */
/* eslint func-names: 0 */
/* eslint space-before-function-paren: 0 */

/**
 * All of our utils that check if a string or object is empty
 */

/**
 *  Checks is a given object is empty
 */
export function isEmptyObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

/**
 *  Checks if a string is empty
 */
export function checkString(string) {
  if (!isEmpty(string) || !isBlank(string)) {
    if (!string.isEmptyOrWhiteSpace()) {
      return true
    }
    return false
  }
  return false
}

/**
 * HelpersisEmptyObject
 */
String.prototype.isEmptyOrWhiteSpace = function() {
  return this.length === 0 || !this.trim()
}

function isEmpty(str) {
  return !str || str.length === 0
}

function isBlank(str) {
  return !str || /^\s*$/.test(str)
}
