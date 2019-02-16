# not-my-type
is it human? is it a bot? who knows

## What?

Captchas are annoying. This will hopefully be less so, but achieve something similar.

The idea is that a visitor to the website randomly mashes at the keyboard in a text box and we decide whether they're human or a bot.

## Development

> tl;dr: open command lines in the root directory and the `client` directory, and run `npm start` in both

The NodeJS+Express backend is in the root directory, and the React frontend is in the `client` directory. For development, the client's `package.json` proxies to `http://localhost:5000` to pass through `/api` requests to the Node server on port 5000.

To serve this in a production environment, run `npm run build` in the `client` directory and run the node server. The root `GET` endpoint serves the built `index.html` entry point.

The frontend will record keystroke events and send an object to the backend API in the following format:

```json
{
    "events": [
        {
            "key": "r",
            "time": 0,
            "type": "keydown"
        },
        {
            "key": "r",
            "time": 24,
            "type": "keyup"
        },
        {
            "key": "j",
            "time": 67,
            "type": "keydown"
        },
        {
            "key": "j",
            "time": 81,
            "type": "keyup"
        }
    ]
}
```

## Future Ideas

- Verify that text (e.g. YouTube comments or registration fields) were typed by a human, not a bot
