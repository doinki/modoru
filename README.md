# modoru

A lightweight React library that tracks browser history navigation depth by intercepting the History API.

## Features

- 🪶 **Lightweight** - Minimal overhead with inline script injection
- 🔍 **Track Navigation Depth** - Know how deep the user has navigated in your app
- 🎯 **Detect Root State** - Easily check if the user is at the initial page
- ⚛️ **React-First** - Designed for React applications
- 🔄 **Full History API Support** - Handles both `pushState` and `replaceState`

## Installation

```bash
npm install modoru
# or
pnpm add modoru
# or
yarn add modoru
```

## Usage

### Basic Setup

Add the `ModoruScript` component to your app's root layout.

```tsx
import { ModoruScript } from 'modoru';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <ModoruScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Check if User is at Root

Use the `isModoruRoot()` function to determine if the user is at the initial page of your application.

```tsx
'use client';

import { isModoruRoot } from 'modoru';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          if (isModoruRoot()) {
            router.push('/');
          } else {
            router.back();
          }
        }}
      >
        Go Back
      </button>
    </div>
  );
}
```

## API

### `<ModoruScript />`

A React component that injects a script to intercept the History API. This component should be placed as early as possible in your application tree.

**Props:**

- Accepts all standard `<script>` element props except `dangerouslySetInnerHTML`
- Supports `ref` forwarding

### `isModoruRoot(): boolean`

Returns `true` if the user is at the root (initial) navigation state, `false` otherwise.

**Returns:** `boolean`

## How It Works

Modoru works by intercepting the browser's History API methods (`pushState` and `replaceState`) and tracking a navigation counter in the history state object using the `__MODORU` key.

- **`pushState`**: Increments the navigation counter
- **`replaceState`**: Preserves the current navigation counter
- **Root Detection**: Checks if the counter is 0 or undefined

This approach allows you to track navigation depth without requiring route-level integration or framework-specific code.
