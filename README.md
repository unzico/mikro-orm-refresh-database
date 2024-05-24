# Reproduction

This is a reproduction of a bug that occurs in version `6.2.8` of the **MikroORM** stack.

## How To

1. clone this repo and install the dependencies. run `yarn install`
2. start the database with docker. run `yarn db` in a separate tab.
3. run `yarn dev` -> no error
4. upgrade to `v6.2.8`. run `yarn dep:up`
5. run `yarn dev` -> **error** (see line 28 in `src/index.ts`)
6. downgrade to `v6.2.7`. run `yarn dep:down`
7. run `yarn dev` -> no error
