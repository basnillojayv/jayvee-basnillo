import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
    },
  },
  {
    ignores: [
      '.next/',
      'src/payload-types.ts',
      'src/app/(payload)/admin/importMap.js',
      /**
       * Vendored ProSomnus brand-guide sources — third-party build output,
       * copied in verbatim so it stays diffable against the delivered bundle.
       * Linting it reports on code we deliberately do not own (its compiled
       * components call hooks in ways the rules-of-hooks heuristic cannot
       * follow). Guide.tsx, the part actually written here, is NOT ignored.
       */
      'src/app/(frontend)/design-systems/prosomnus/_guide/*.jsx',
      'src/app/(frontend)/design-systems/prosomnus/_guide/ds-bundle.js',
      // Same for the OC Fellows bundle and the four card demos lifted from it.
      'src/app/(frontend)/design-systems/oc-fellows/_guide/ds-bundle.js',
      'src/app/(frontend)/design-systems/oc-fellows/_guide/demos/*.jsx',
    ],
  },
]

export default eslintConfig
