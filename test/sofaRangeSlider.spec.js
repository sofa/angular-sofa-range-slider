'use strict';

describe('sofa.rangeSlider', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.rangeSlider'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should render correctly', function () {
        element = $compile('<sofa-range-slider model="model" display-value-exp=""></sofa-range-slider>')($rootScope);
        $rootScope.$digest();
        expect(element.find('span').length).toEqual(3);
        expect(element.hasClass('sofa-range-slider-wrapper')).toEqual(true);
        expect(element.find('div').eq(0).hasClass('sofa-range-slider')).toEqual(true);
    });
});
