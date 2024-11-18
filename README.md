# homepage

> source for the coolest homepage with the coolest domain name, **webb.page**.



## Installation

```sh
bun i
```

```sh
bunx husky init
```

`.husky/pre-commit` is created now. Open that file and input: `bun run pre-commit`.

Every time a commit is made to this repo now, the pre-commit script will run. It builds the site so it's a nice sanity check to ensure you don't upload a broken site to your server.



## Development

```sh
bun run watch
````



## Production

```sh
bun start
```

If you're using `pm2` (super unreliable because it randomly breaks, but it's faster than creating a systemd service file and troubleshooting issues there):

```sh
# cd into this folder on your server and run the following command
pm2 start bun --name "homepage" -- start

# because running this without `force` never sets it for me
pm2 save --force
```

_At some point I'll switch over to Caddy and a service file._
