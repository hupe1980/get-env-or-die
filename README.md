# get-env-or-die
![Build](https://github.com/hupe1980/get-env-or-die/workflows/build/badge.svg)
![Release](https://github.com/hupe1980/get-env-or-die/workflows/release/badge.svg)

> Utility to get and typecast environment variables.

## Installation

```bash
npm install --save get-env-or-die
```

## How to use
### String environment variable
```typescript
import { getEnv } from 'get-env-or-die';
process.env.HOST = 'hostname';
const host = getEnv('HOST') // => 'hostname'
```

### Optional Fallback
```typescript
import { getEnv } from 'get-env-or-die';
const host = getEnv('HOST', 'localhost') // => 'localhost'
```

### Int environment variable
```typescript
import { getIntEnv } from 'get-env-or-die';
process.env.PORT = '80';
const port = getIntEnv('PORT', 8080) // => 80
```

### Boolean environment variable
```typescript
import { getBoolEnv } from 'get-env-or-die';
process.env.DEBUG = '1';
const isDebug = getBoolEnv('DEBUG', false) // => true
```

### String array environment variable
```typescript
import { getArrayEnv } from 'get-env-or-die';
process.env.KEYWORDS = 'a,b,c';
const keywords = getArrayEnv('KEYWORDS') // => ['a','b','c']
```

### Url environment variable
```typescript
import { getUrlEnv } from 'get-env-or-die';
process.env.URL = 'http://example.com';
const url = getUrlEnv('URL') // => new URL('http://example.com')
```

### Date environment variable
```typescript
import { getDateEnv } from 'get-env-or-die';
process.env.DATE = '2020-11-11';
const date = getDateEnv('DATE') // => new Date('2020-11-11')
```

### Errors
All functions throw an error if the environment variable is not convertible or the env is missing and no fallback is provided.

## License

[MIT](LICENSE)
