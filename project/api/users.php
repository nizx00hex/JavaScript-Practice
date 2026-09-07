<?php

header("Content-Type: application/json");

echo json_encode([
    "success" => true,
    "message" => "API is working",
    "products" => [
        [
            "id" => 0,
            "name" => "Chicken",
            "price" => 2000
        ],
        [
            "id" => 1,
            "name" => "Meet",
            "price" => 5000
        ],
        [
            "id" => 2,
            "name" => "Elephant",
            "price" => 50030
        ],
        [
            "id" => 3,
            "name" => "Tiger",
            "price" => 5000
        ],
        [
            "id" => 4,
            "name" => "Fish",
            "price" => 5000
        ]
    ]
]);