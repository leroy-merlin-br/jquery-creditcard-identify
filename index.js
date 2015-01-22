(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';
    $.fn.detectCreditCard = function (options) {
        var detect, cards;
        options = options || {
            cards: []
        };

        cards = options.cards;

        function Card(element) {
            this.cardInfo = null;
            this.cardNumber = null;
            this.cardsLength = cards.length;
            this.element = element;
        }

        Card.prototype.init = function () {
            this.element.on('keyup', $.proxy(this.onKeyUp, this));
            this.element.on('setCard', $.proxy(this.setCard, this));
            this.changeCardNumber(this.element.val());

            return this;
        };

        Card.prototype.setCard = function (ev, cardName) {
            this.cardInfo = {
                name: cardName
            };
            this.element.addClass(cardName);
        };

        Card.prototype.onKeyUp = function (event) {
            this.changeCardNumber(event.currentTarget.value);
        };

        Card.prototype.changeCardNumber = function (value) {
            this.cardNumber = value || null;
            if (this.cardNumber) {
                this.testCardType(this.cardNumber);
                this.element.trigger('change:card', this.cardInfo);
            } else if (this.cardInfo && this.cardInfo.name) {
                this.element.removeClass(this.cardInfo.name);
            }
        };

        Card.prototype.testCardType = function (cardNumber) {
            var i = 0, pattern;
            cardNumber = cardNumber.replace(/\D/g, '');
            for (i; i < this.cardsLength; i += 1) {
                pattern = cards[i].pattern;
                if (cardNumber.match(pattern)) {
                    if (this.cardInfo && this.cardInfo.name) {
                        this.element.removeClass(this.cardInfo.name);
                    }
                    this.cardInfo = cards[i];
                    this.element.addClass(this.cardInfo.name);
                }
            }
        };

        Card.prototype.addCardPattern = function (pattern) {
            cards.push(pattern);
            this.cardsLength = cards.length;
        };

        detect = new Card(this).init();

        return detect;
    };
}));
