const assert = require("assert")
describe("NodeTests", () => {
    it("Ex1", done => {
        const NodeTests = require("../src/ex1")
        NodeTests.get().then(data => {
            assert(data.id == 1, data)
        }).catch(error => {
            assert(false, error)
        }).then(() => {
            done()
        })        
    }).timeout(2000)
})