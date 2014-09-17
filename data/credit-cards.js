define(function () {
    'use strict';
    return [{
        name: 'amex',
        pattern: /^3[47]/
    },
    {
        name: 'visa',
        pattern: /^4/
    },
    {
        name: 'mastercard',
        pattern: /^5[0-5]/
    },
    {
        name: 'celebre',
        pattern: /^400437/
    }];
});
