var rules = {};
export function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
}
//# sourceMappingURL=kebabRules.js.map