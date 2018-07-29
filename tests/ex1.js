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
    it("Ex1", () => {
        const NodeTests = require("../src/ex1")
        return NodeTests.get().then(data => {
            assert(data.id == 1, data)
        })        
    }).timeout(2000)
    
    it("Pending implementation")
})