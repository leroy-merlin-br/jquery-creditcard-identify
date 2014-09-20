# jQuery Credit Card Identify

A plugin to identify typed credit cards easy and light

# Getting Started

## Downloading the prebuilt files

Get the latest release here: https://github.com/leroy-merlin-br/jquery-creditcard-identify/releases

or install with bower:

```terminal
bower install jquery-creditcard-identify
```

# How to use

```html
<form>
    <input id="credit_card">
</form>
<script src="jquery.js"></script>
<script src="jquery-creditcard-identify.js"></script>
<script>
var detect = $('#credit_card').detectCreditCard();
</script>
```

Alternatively include jQuery and the plugin via requirejs in your module.

```javascript
define(["jquery", "jquery-creditcard-identify"], function( $ ) {
    var detect = $('#credit_card').detectCreditCard();
});
```

## You need to pass all card patterns to the plugin:

### You can do this on initialize:

```javascript
var creditCards = [{
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
var detect = $('#credit_card').detectCreditCard({
    cards: creditCards
});
```

### You can add credit card patterns after the plugin instance:

```javascript
var detect = $('#credit_card').detectCreditCard();
detect.addCardPattern({
    name: 'custom',
    pattern: /^4(00438)/
});
```


The plugin will add the name of the card as a class when identify.
