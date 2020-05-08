module.exports = {
  plugins: ['functional'],
  rules: {
    //
    // No Mutations Rules
    //

    'functional/immutable-data': 'error',
    'functional/no-let': 'error',
    'functional/no-method-signature': 'error',
    'functional/prefer-readonly-type': 0,

    //
    // No Object-Orientation Rules
    //

    'functional/no-class': 'error',
    'functional/no-mixed-type': 'error',
    'functional/no-this-expression': 'error',
    'functional/prefer-type-literal': 0,

    //
    // No Statements Rules
    //

    'functional/no-conditional-statement': 0,
    'functional/no-expression-statement': 'error',
    'functional/no-loop-statement': 'error',
    'functional/no-return-void': 0,

    //
    // No Exceptions Rules
    //

    'functional/no-promise-reject': 0,
    'functional/no-throw-statement': 0,
    'functional/no-try-statement': 0,

    //
    // Currying Rules
    //

    'functional/functional-parameters': 'error',
  },
}
