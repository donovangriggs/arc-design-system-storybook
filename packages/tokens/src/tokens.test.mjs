/**
 * TDD: Token validation tests
 * RED phase — validates token structure and completeness before build
 */
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(readFileSync(resolve(__dirname, 'tokens.json'), 'utf8'));

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  PASS: ${message}`);
  } else {
    failed++;
    console.error(`  FAIL: ${message}`);
  }
}

function assertTokenHasValue(tokenPath, obj) {
  const parts = tokenPath.split('.');
  let current = obj;
  for (const part of parts) {
    current = current?.[part];
  }
  assert(current?.value !== undefined, `Token ${tokenPath} has a value`);
  return current?.value;
}

console.log('\n--- Token Structure Tests ---\n');

// Test: Required color scales exist
console.log('Color scales:');
const requiredColorScales = ['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info'];
for (const scale of requiredColorScales) {
  assert(tokens.color?.[scale] !== undefined, `color.${scale} scale exists`);
}

// Test: Primary/secondary have full 50-900 range
console.log('\nColor scale completeness:');
const fullScaleSteps = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
for (const step of fullScaleSteps) {
  assertTokenHasValue(`color.primary.${step}`, tokens);
  assertTokenHasValue(`color.secondary.${step}`, tokens);
}

// Test: Status colors have at minimum 50, 500, 700
console.log('\nStatus color minimums:');
for (const status of ['success', 'warning', 'error', 'info']) {
  for (const step of ['50', '500', '700']) {
    assertTokenHasValue(`color.${status}.${step}`, tokens);
  }
}

// Test: Color values are valid hex
console.log('\nColor format validation:');
const hexRegex = /^#[0-9a-fA-F]{6}$/;
function validateColors(obj, path = '') {
  for (const [key, val] of Object.entries(obj)) {
    if (val.value && val.type === 'color') {
      assert(hexRegex.test(val.value), `${path}${key} is valid hex (${val.value})`);
    } else if (typeof val === 'object' && !val.value) {
      validateColors(val, `${path}${key}.`);
    }
  }
}
validateColors(tokens.color, 'color.');

// Test: Spacing scale exists and has expected values
console.log('\nSpacing scale:');
const requiredSpacingKeys = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'];
for (const key of requiredSpacingKeys) {
  assertTokenHasValue(`spacing.${key}`, tokens);
}

// Test: Spacing values are valid CSS
console.log('\nSpacing format:');
for (const [key, val] of Object.entries(tokens.spacing)) {
  assert(/^\d+px$/.test(val.value), `spacing.${key} is valid px value (${val.value})`);
}

// Test: Border radius scale
console.log('\nBorder radius:');
const requiredRadii = ['none', 'sm', 'md', 'lg', 'xl', 'full'];
for (const r of requiredRadii) {
  assertTokenHasValue(`borderRadius.${r}`, tokens);
}

// Test: Font size scale
console.log('\nFont sizes:');
const requiredFontSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];
for (const fs of requiredFontSizes) {
  assertTokenHasValue(`fontSize.${fs}`, tokens);
}

// Test: Font weight scale
console.log('\nFont weights:');
const requiredWeights = ['normal', 'medium', 'semibold', 'bold'];
for (const fw of requiredWeights) {
  assertTokenHasValue(`fontWeight.${fw}`, tokens);
}

// Test: Font families
console.log('\nFont families:');
assertTokenHasValue('fontFamily.sans', tokens);
assertTokenHasValue('fontFamily.mono', tokens);

// Test: Shadow scale
console.log('\nShadows:');
const requiredShadows = ['sm', 'md', 'lg', 'xl'];
for (const s of requiredShadows) {
  assertTokenHasValue(`shadow.${s}`, tokens);
}

// Test: Transition tokens
console.log('\nTransitions:');
const requiredTransitions = ['fast', 'normal', 'slow'];
for (const t of requiredTransitions) {
  assertTokenHasValue(`transition.${t}`, tokens);
}

// Summary
console.log(`\n--- Results: ${passed} passed, ${failed} failed ---\n`);
process.exit(failed > 0 ? 1 : 0);
