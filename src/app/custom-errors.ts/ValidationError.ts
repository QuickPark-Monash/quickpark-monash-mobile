
// The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//     constructor(message) {
//       this.message = message;
//       this.name = "Error"; // (different names for different built-in error classes)
//       this.stack = <call stack>; // non-standard, but most environments support it
//     }
//   }

export class ValidationError extends Error{
    constructor(message: string) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}