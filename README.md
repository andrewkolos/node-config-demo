# node-config-demo

* Do not run `npm install`. A fake dependency has been included within `node_modules` and would be deleted by the command. Dependencies are already installed * 

Instructions: `npm run start`

Output:
```
=== Now inside fake_dependency ===
Expected value of MyParam to be FakeDependencyValue
However, the value retrieved is DemoValue1
=== Leaving fake_dependency ===
=== Now in config-overwrite-issue-demo ===
Expected value of MyParam to be DemoValue1
The value retrieved is DemoValue1. Good!
```
