<?php

// echo json_encode([

//     "message" => "Users loaded",
//     "users" => [
//         [
//             'name' => 'nisath',
//             'age' => 20,
//             'country' => 'Saudi Arabia'
//         ],
//         [
//             'name' => 'ali',
//             'age' => 25,
//             'country' => 'Australia'
//         ],
//         [
//             'name' => 'Ahmed',
//             'age' => 30,
//             'country' => 'London'
//         ]
//     ]
// ]);


$input = file_get_contents("php://input");


$data = json_decode($input, true);

$name = $data['name'];

echo json_encode([
    "message" => "Hello " . $name . "!"
]);