# jQuery Credit Card Identify

A plugin to identify typed credit cards easy and light


# How to use

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
