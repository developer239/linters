import eslintNestJs from "@darraghor/eslint-plugin-nestjs-typed";

const nestjsRules = {
  "@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters":
    "error",
  "@darraghor/nestjs-typed/use-injectable-provided-token": "error",
  "@darraghor/nestjs-typed/api-property-matches-property-optionality": "error",
  "@darraghor/nestjs-typed/controllers-should-supply-api-tags": "error",
  "@darraghor/nestjs-typed/api-method-should-specify-api-response": "error",
  "@darraghor/nestjs-typed/api-method-should-specify-api-operation": "error",
  "@darraghor/nestjs-typed/api-enum-property-best-practices": "error",
  "@darraghor/nestjs-typed/api-property-returning-array-should-set-array":
    "error",
  "@darraghor/nestjs-typed/api-property-should-have-api-extra-models": "error",
  "@darraghor/nestjs-typed/api-operation-summary-description-capitalized":
    "error",
  "@darraghor/nestjs-typed/param-decorator-name-matches-route-param": "error",
  "@darraghor/nestjs-typed/validate-nested-of-array-should-set-each": "error",
  "@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator":
    "error",
  "@darraghor/nestjs-typed/all-properties-are-whitelisted": "error",
  "@darraghor/nestjs-typed/all-properties-have-explicit-defined": "error",
  "@darraghor/nestjs-typed/no-duplicate-decorators": "error",
  "@darraghor/nestjs-typed/validation-pipe-should-use-forbid-unknown": "error",
};

const nestjsConfig = [
  {
    files: ["**/*.ts"],
    plugins: {
      "@darraghor/nestjs-typed":
        eslintNestJs.default || eslintNestJs.plugin || eslintNestJs,
    },
    rules: nestjsRules,
  },
];

export default nestjsConfig;
export { nestjsRules };
