# Geomtoy examples
 
This repo is the examples of Geomtoy.

## Development setup 
1. Run `npm ci` to install all the `devDependencies` of this repo.
2. Run `git submodule update --init` to download Geomtoy as a submodule of this repo.
3. Run `node create-link` to create symlinks from Geomtoy packages to `node_modules/@geomtoy` for this repo. **NOTE**: We don't need to do any initialization for the submodule Geomtoy, such as `npm ci`, `lerna bootstrap`, etc.
1. Run `npm run build-util`, `npm run build-core`, `npm run build-view` to compile a local version of Geomtoy.
2. Run `npm run serve` to serve or run `npm run generate` to generate.


## Notice
It is best NOT to commit code to Geomtoy from this repo.
If you really want to do it, remember to pull first and check out a branch before coding.

If code has already been accidentally committed to a `detached HEAD`, you could try to execute:
```
git submodule foreach 'git switch -c tmp'
git submodule foreach 'git switch master'
git submodule foreach 'git merge tmp'
git submodule foreach 'git branch -d tmp' 
```

## Debugging & Maintaining
- Run the corresponding `npm run build-****` after modifying Geomtoy packages.
- If you change the static content (not `.ts`), you need to re-serve, add or delete `.ts` files, you also need to re-serve.
- Run `npm run commit` to commit **IMPORTANT**!.
- Sometimes symlinks may disappear, we can re-run `node create-link`.