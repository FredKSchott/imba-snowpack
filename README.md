# Create Snowpack Imba App
### Available Scripts
```
npm start or yarn start
```
The above command runs `snowpack dev` along with `imbac --watch -o public/ src/` I'm using the imbac command as a work around until I can get snowpack to do the bundling.


### Todos
- [ ] I need to figure out how to load the imba compiler into snowpack.
- [ ] Alternatively use [imba rollup plugin](https://github.com/imba/imba/tree/master/packages/rollup). I also couldn't get that to work on first try.

Maybe there needs to be some changes made to the compiler.

### Current Errors
If I try to import any imba module, and use it I get the following error.

```
error// require is not defined
```

### References
Imba snowpack references
- [snowpack.config.js](https://github.com/ericvida/imba-snowpack/blob/master/app-template-imba/packages/app-scripts-imba/snowpack.config.js)
- [plugin-imba/plugin.js](https://github.com/ericvida/imba-snowpack/blob/master/app-template-imba/plugin-imba/plugin.js)
- [src/index.js](https://github.com/ericvida/imba-snowpack/blob/master/app-template-imba/src/index.js)

Imba original References
- [imba/rollup.js](https://github.com/imba/imba/blob/v2.0.0-alpha.45/rollup.js)

- [rollup config](https://github.com/imba/imba/blob/master/packages/rollup/rollup.config.js)
- [webpack config](https://github.com/imba/imba/blob/v2.0.0-alpha.45/webpack.config.js)

Snowpack References

- [Snowpack Discuss](https://www.pika.dev/npm/snowpack/discuss/179)

- Snowpack svelte config [packages/app-script-svelte/snowpack.config.js](https://github.com/pikapkg/create-snowpack-app/blob/master/packages/app-scripts-svelte/snowpack.config.js)
- Snowpack svelte plugin [create-snowpack-app/packages/plugin-svelte/](https://github.com/pikapkg/create-snowpack-app/tree/master/packages/plugin-svelte)

- babel plugin example [create-snowpack-app/packages/plugin-babel/](https://github.com/pikapkg/create-snowpack-app/blob/master/packages/plugin-babel/plugin.js)

