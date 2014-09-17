define([
    'jquery',
    '../data/credit-cards',
    'jquery.creditcard.identify'
], function ($, creditCards) {
    'use strict';
    describe('Detect credit card flag', function () {
        var detect;
        beforeEach(function () {
            $('.canvas').html('<input id="credit_card">');
        });
        afterEach(function () {
            detect = null;
            $('#credit_card').remove();
        });

        it('should an previous typed credit card number', function () {
            detect = $('#credit_card').detectCreditCard();
            $('#credit_card').val(4);
            $('#credit_card').trigger('keyup');
            expect(detect.cardNumber).to.equal('4');
        });

        it('should get the typed credit card number', function () {
            detect = $('#credit_card').detectCreditCard();
            $('#credit_card').val(4);
            $('#credit_card').trigger('keyup');
            expect(detect.cardNumber).to.equal('4');
        });
        it('should test the typed credit card number', function () {
            detect = $('#credit_card').detectCreditCard();
            sinon.spy(detect, 'testCardType');
            $('#credit_card').val(4);
            $('#credit_card').trigger('keyup');
            expect(detect.testCardType.called).to.be(true);
        });
        it('should not test the typed credit card number if the input is empty', function () {
            detect = $('#credit_card').detectCreditCard();
            sinon.spy(detect, 'testCardType');
            $('#credit_card').trigger('keyup');
            expect(detect.testCardType.called).to.be(false);
        });
        it('should get the card type name when identify a card', function () {
            detect = $('#credit_card').detectCreditCard({
                cards: creditCards
            });
            $('#credit_card').val(377194938481591);
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('amex');
        });


        it('should identify an custom card added after plugin instance', function () {
            detect = $('#credit_card').detectCreditCard({
                cards: creditCards
            });
            detect.addCardPattern({
                name: 'custom',
                pattern: /^4(00438)/
            });
            $('#credit_card').val(40);
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('visa');
            $('#credit_card').val(400438);
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
            $('#credit_card').val(4004382);
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
            $('#credit_card').val(400438);
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
            $('#credit_card').val(400438677878);
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
        });

        it('should work on card numbers with masks', function () {
            detect = $('#credit_card').detectCreditCard({
                cards: creditCards
            });
            detect.addCardPattern({
                name: 'custom',
                pattern: /^4(00438)/
            });
            $('#credit_card').val('40 04 38');
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
            $('#credit_card').val('40-04-38');
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
            $('#credit_card').val('40_04_38');
            $('#credit_card').trigger('keyup');
            expect(detect.cardInfo.name).to.equal('custom');
        });
    });
});
