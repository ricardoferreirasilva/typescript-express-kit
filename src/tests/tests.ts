import chai from "chai"
import chaiHttp from "chai-http"
import app from "../server"

chai.use(chaiHttp);
chai.should();

describe('Example', function() {
    describe("GET /example", () => {
        // Test to get all students record
        it("Should get a number", (done) => {
            chai.request(app).get('/example').end((err, res : ChaiHttp.Response ) => {

                    res.should.have.status(200);
                    res.body.should.be.a('number');
                    done();
                });
        });
    });
});
