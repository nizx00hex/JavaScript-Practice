<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax Project 2</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;

            background-color: #0d1117;
            color: #ffffff;

            font-family: Arial, sans-serif;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            width: 400px;
            padding: 30px;

            background-color: #161b22;
            border: 1px solid #30363d;
            border-radius: 12px;
        }

        input {
            width: 100%;
            padding: 12px;

            background-color: #0d1117;
            color: white;

            border: 1px solid #30363d;
            border-radius: 6px;

            outline: none;
        }

        input:focus {
            border-color: #58a6ff;
        }

        button {
            width: 100%;
            margin-top: 10px;
            padding: 12px;

            background-color: #238636;
            color: white;

            border: none;
            border-radius: 6px;

            cursor: pointer;
        }

        button:hover {
            background-color: #2ea043;
        }

        #result {
            margin-top: 20px;
            color: #58a6ff;
        }
    </style>
</head>

<body>

    <div class="container">

        <input
            type="text"
            id="task"
            placeholder="Enter Task"
        >
        <button id="addBtn">
            Add
        </button>

        <ul id='list'>
            
        </ul>
        <!-- <button id="btn">
            Show Name
        </button> -->

        <!-- <h2 id="result">
            Waiting...
        </h2> -->

    </div>

    <script src="assets/js/app.js"></script>

</body>
</html>