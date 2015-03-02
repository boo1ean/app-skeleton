## Introduction

This skeleton is a synthesis of accomulated experience of several `php -> node`, .`net -> node` developers.

## Top level overview

Here are list of top level directories:

```
.
|-- config
|-- core
|-- database
|-- etc
|-- framework
|-- front
|-- log
|-- static
`-- web
```

### core

Core directory contains all core independed (shared) codebase.

Code is segregated by entities / features / components. Let's call it `components`.

In the below tree, there are 3 `components`: `apps`, `apps/commands` (nested) and `requests`:

```
core
|-- apps
|   |-- commands
|   |   |-- dal.js
|   |   `-- index.js
|   |-- dal.js
|   |-- index.js
|   `-- validation.js
|-- requests
|   |-- dal.js
|   `-- index.js
`-- services
    |-- crypt.js
    `-- db.js
```

`service` directory is responsible for different kind of stuff like db adapters, mailers, cyphers and stuff.
