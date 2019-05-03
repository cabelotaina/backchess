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
  npm install
```

And run the app:
```bash
  DEBUG=back-chess:* npm dev
```

## Usage

```
  GET /api/v1/knight/(position)
```

## Resources

This is a list of resources used in this project.

https://hackernoon.com/how-to-develop-a-boilerplate-for-api-with-node-js-express-and-mongodb-4c771ae1c2df

## License

[GNU](https://choosealicense.com/licenses/gpl-3.0/) General Public License v3.0