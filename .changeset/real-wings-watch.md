---
'modoru': minor
---

fix(script): improve pushState override safety and method binding

- Add null check before modifying data object
- Use call() instead of bind() for proper context handling
- Rename internal key from 'MODORU_INDEX' to '\_\_MODORU'
