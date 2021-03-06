var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-range-test", function(testPage) {

    describe("test/input-range/input-range-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputRange", function() {
            it("can be created", function() {
                expect(testPage.test.inputRange).toBeDefined();
            });
        });
    });
});
