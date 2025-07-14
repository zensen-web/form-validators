# @zensen/form-validators

Validators for form-service

## Features

- Adds some other general-purpose, and condition-based validators
- Uses the popular `validators` package
- Provides a wrapper interface around these functions for compatibility with `form-service`

## Install

Using `npm`:

```
$ npm install @zensen/form-validators
```

Using `yarn`:

```
$ yarn add @zensen/form-validators
```

## CDN Usage

You can also use this library via CDN:

### jsDelivr (Recommended)

```html
<!-- UMD build -->
<script src="https://cdn.jsdelivr.net/npm/@zensen/form-validators@1.0.8/build/index.umd.js"></script>

<!-- ESM build -->
<script type="module">
  import FormValidators from 'https://cdn.jsdelivr.net/npm/@zensen/form-validators@1.0.8/build/index.esm.js'
</script>
```

### unpkg

```html
<!-- UMD build -->
<script src="https://unpkg.com/@zensen/form-validators@1.0.8/build/index.umd.js"></script>
```

## Usage

### ES6 Modules

```javascript
import { isRequired, isEmailAddress } from '@zensen/form-validators'

// Or import the default export
import FormValidators from '@zensen/form-validators'
```

### CommonJS

```javascript
const { isRequired, isEmailAddress } = require('@zensen/form-validators')

// Or require the default export
const FormValidators = require('@zensen/form-validators')
```

### Browser (UMD)

```javascript
// Available as global FormValidators
const { isRequired, isEmailAddress } = FormValidators
```

## Validators

This is a WIP package.

### isRequired

### isRequiredIf

### isPropRequired

### isSsn

### isDate

### isDateBefore

### isDateAfter

### isEmailAddress

### isPhoneNumber

### isPostalCode

### hasLength

### hasDuplicate

### atMin

### atMax

### inRange

### matchesPattern
