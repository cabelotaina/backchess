# Back chess

Back Chess is a nodejs server using express for dealing with Knight moves on chess board.

## Installation

You need [nodejs]() and [npm](), we use [nvm](https://github.com/nvm-sh/nvm) to install nodejs and choice a specific version.

Inside the root directory:

```bash
  cd back-chess
```

Install dependencies:

```bash
  npm i
```

And run the app:
```bash
  DEBUG=back-chess:* npm run dev
```

## Production

You can use [forever](https://github.com/foreverjs/forever#readme) to run your server on production. On another server: nginx, apache and etc.

## Usage

Do a simple GET for this endpoint with your square position and get all square positions where the Knight can move in exactly 2 turns:

```
  GET /api/v1/knight/:square
```

## CONTRIBUTE

See the ```CONTRIBUTING.md``` file.

## License

[GNU](https://choosealicense.com/licenses/gpl-3.0/) General Public License v3.0