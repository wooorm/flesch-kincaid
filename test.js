'use strict';

/**
 * Dependencies.
 */

var fleschKincaid,
    assert;

fleschKincaid = require('./');
assert = require('assert');

/**
 * Utilities.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Tests.
 */

describe('fleschKincaid()', function () {
    it('should be of type `function`', function () {
        assert(typeof fleschKincaid === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = fleschKincaid();

        assert(result !== result);

        /**
         * The Australian platypus is seemingly a hybrid of a mammal and
         * reptilian creature.
         *
         * Sentences: 1
         * Words: 13
         * Syllables: 26
         */

        roundAssert(fleschKincaid({
            'sentence': 1,
            'word': 13,
            'syllable': 26
        }), 13.08);
    });
});
