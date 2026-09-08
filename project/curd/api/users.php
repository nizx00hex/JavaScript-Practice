<?php

header("Content-Type: application/json");

$pdo = new PDO(
    "mysql:host=localhost;dbname=curd;charset=utf8mb4",
    "root",
    "adcO3Cxdj19w0sx"
);


$pdo->setAttribute(
    PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION
);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM users ORDER BY id DESC");

        echo json_encode([
            "success" => true,
            "data" => $stmt->fetchAll(PDO::FETCH_ASSOC)
        ]);
        break;

    case 'POST':
        $data = json_decode(
            file_get_contents("php://input"),
            true
        );

        $username = $data['username'] ?? '';
        $age = $data['age'] ?? '';
        $city = $data['city'] ?? '';

        $stmt = $pdo->prepare(
            "INSERT INTO users (username, age, city) VALUES (?, ?, ?)"
        );


        $stmt->execute([
            $username,
            $age,
            $city
        ]);

        echo json_encode([
            "success" => true,
            "message" => "User created"
        ]);

        break;

    case 'PUT':
        $id = $_GET['id'] ?? null;

        $data = json_decode(
            file_get_contents('php://input'),
            true
        );

        $username = $data['username'] ?? '';
        $age = $data['age'] ?? '';
        $city = $data['city'] ?? '';

        $stmt = $pdo->prepare(
            "UPDATE users SET username = ?, age = ?, city = ? WHERE id = ?"
        );

        $stmt->execute([
            $username,
            $age,
            $city,
            $id
        ]);

        echo json_encode([
            "success" => true,
            "message" => "User updated"
        ]);
        break;


    case 'DELETE':
        $id = $_GET['id'] ?? null;

        $stmt = $pdo->prepare(
            "DELETE FROM users WHERE id = ?"
        );

        $stmt->execute([
            $id
        ]);

        echo json_encode([
            "success" => true,
            "message" => "User deleted"
        ]);

        break;

    default:
        http_response_code(405);

        echo json_encode([
            "success" => false,
            "message" => "Method not allowed"
        ]);
}