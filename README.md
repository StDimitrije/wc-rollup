To use the config file, we use the --config or -c flag:

rm bundle.js # so we can check the command works!
rollup -c

You can override any of the options in the config file with the equivalent command line options:

rollup -c -o bundle-2.js # `-o` is equivalent to `--file` (formerly "output")

You can, if you like, specify a different config file from the default rollup.config.js:

rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js

npx tailwind build -i src/main.scss -o src/main.css