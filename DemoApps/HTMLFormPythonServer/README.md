# HTML Form with Python Backend

An HTML form (localhost) that collects data and submits it to a Python server which logs it into a CSV file.

## Running

Run the flask server

```bash
flask --app server run
```

Then open the [index.html](./index.html) page in browser. Submit the form and see the `data.csv` file populate with data.

## References

- Flask requests: https://flask.palletsprojects.com/en/3.0.x/quickstart/#the-request-object
