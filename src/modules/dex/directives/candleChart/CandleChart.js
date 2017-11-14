(function () {
    'use strict';

    let counter = 0;

    const controller = function (Base) {

        class CandleChart extends Base {

            constructor() {
                super();
                this.elementId = 'tradingview' + counter++;
            }

            $postLink() {
                TradingView.onready(() => {
                    this.chart = new TradingView.widget({
                        symbol: 'A',
                        interval: 'D',
                        container_id: this.elementId,
                        datafeed: null, // TODO
                        autosize: true
                    });
                });
            }

        }

        return new CandleChart();
    };

    controller.$inject = ['Base'];

    angular.module('app.dex')
        .component('wDexCandleChart', {
            bindings: {},
            templateUrl: '/modules/dex/directives/candleChart/candleChart.html',
            transclude: false,
            controller
        });
})();
