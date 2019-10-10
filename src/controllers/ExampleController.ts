
// This is a class that provides a service. Business logic should be implemented here and not on the controllers.
export default class ExampleService {
    static async exampleMethod(){
        return Math.floor(Math.random() * 11);
    }
}
