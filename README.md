# Geomtoy examples
 
This repo is the examples of `Geomtoy`.

## Development setup 
1. run `npm ci` to install all the `devDependencies` of this repo.
2. run `git submodule update --init` to download `Geomtoy` as a submodule of this repo.
3. run `node create-link` to create symlinks from `Geomtoy` packages to `node_modules/@geomtoy` for this repo.
    **NOTE** We don't need to do any initialization for the submodule `Geomtoy`, such as `npm ci`, `lerna bootstrap`, etc.
4. run `npm run build-util`, `npm run build-core`, `npm run build-view` to compile a local version of `Geomtoy`.
5. run `npm run serve` to serve or run `npm run generate` to generate.


## Notice:
It is best NOT to commit the submodule `Geomtoy` in this repo. If you need to modify the code of `Geomtoy` during debugging, then please migrate the modified code to `Geomtoy` for commit if debugging is successful.

## Debugging and Maintaining:
1. Run the corresponding `npm run build-****` after modifying the `Geomtoy` packages.
2. If you change the static content (not `.ts`), you need to re-serve, add or delete `.ts` files, you also need to re-serve.
3. When `Geomtoy` is updated, run `git submodule update --remote` to update `Geomtoy`, more info on how to use [git-submodule](https://git-scm.com/docs/git-submodule).