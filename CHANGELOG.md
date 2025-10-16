# modoru

## 0.2.1

### Patch Changes

- 5c5acd5: chore(script): add strict mode directive to modoru.js

  Enable strict mode to enforce stricter parsing and error handling

## 0.2.0

### Minor Changes

- de17e55: feat: add support for history.replaceState

  Extend history API interception to include replaceState method,
  ensuring the \_\_MODORU key is preserved when replacing history state.

## 0.1.0

### Minor Changes

- 6ea2f54: fix(script): improve pushState override safety and method binding
  - Add null check before modifying data object
  - Use call() instead of bind() for proper context handling
  - Rename internal key from 'MODORU_INDEX' to '\_\_MODORU'

## 0.0.3

### Patch Changes

- cb66186: 🐛

## 0.0.2

### Patch Changes

- 582288f: 🐛

## 0.0.1

### Patch Changes

- f84e652: 🎉
