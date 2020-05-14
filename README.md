Create Snowpack Imba App
### Available Scripts
`npm start`
runs `snowpack dev` along with `imbac --watch -o public/ src/`
I'm using the imbac compiler as a work around.


### TODOS
- [ ] I need to figure out how to load the imba compiler into snowpack. I can't get it to work.
- [ ] Alternatively use [imba rollup plugin](https://github.com/imba/imba/tree/master/packages/rollup)

### Current Errors
If I try to import any imba module, and use it I get the following error.
Error: `require is not defined`

## References

Imba References

- [rollup config](https://github.com/imba/imba/blob/master/packages/rollup/rollup.config.js)
- [webpack config](https://github.com/imba/imba/blob/v2.0.0-alpha.45/webpack.config.js)

Snowpack References

- [Snowpack Discuss](https://www.pika.dev/npm/snowpack/discuss/179)

- Snowpack svelte config [packages/app-script-svelte/snowpack.config.js](https://github.com/pikapkg/create-snowpack-app/blob/master/packages/app-scripts-svelte/snowpack.config.js)
- Snowpack svelte plugin [create-snowpack-app/packages/plugin-svelte/](https://github.com/pikapkg/create-snowpack-app/tree/master/packages/plugin-svelte)

- babel plugin example [create-snowpack-app/packages/plugin-babel/](https://github.com/pikapkg/create-snowpack-app/blob/master/packages/plugin-babel/plugin.js)

