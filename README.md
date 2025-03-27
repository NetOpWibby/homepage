# homepage

> source for the coolest homepage with the coolest domain name, **webb.page**.



## Prerequisites

- [Bun](https://bun.sh)



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

- ensure Bun is installed on your server
- make note of `which bun` to find the path of your install
- `nano /etc/systemd/system/homepage.service`
  ```service
  [Unit]
  After=network.target
  Description=My cool homepage
  Documentation=https://webb.page

  [Service]
  # your Bun path
  ExecStart=/root/.bun/bin/bun start
  Restart=on-failure
  Type=simple
  User=root
  # the path of your homepage
  WorkingDirectory=/var/www/html

  [Install]
  WantedBy=multi-user.target
  ```
- `systemctl start homepage`
- `systemctl enable homepage`
- when making changes to your `homepage.service` file, you'll need to run `systemctl daemon-reload`
