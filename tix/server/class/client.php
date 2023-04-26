<?php
class Client {
    private $pdo;

    public $id_client;
    public $nom;
    public $email;
    public $password;
    public $cin;
    public $img;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function create() {
        $stmt = $this->pdo->prepare('INSERT INTO CLIENT (nom, email, password, cin, img) VALUES (:nom, :email, :password, :cin, :img)');
        $stmt->execute(['nom' => $this->nom, 'email' => $this->email, 'password' => $this->password, 'cin' => $this->cin, 'img' => $this->img]);
        $this->id_client = $this->pdo->lastInsertId();
        return $this;
    }

    public function read() {
        $stmt = $this->pdo->prepare('SELECT * FROM CLIENT WHERE id_client = :id_client');
        $stmt->execute(['id_client' => $this->id_client]);
        return $stmt;
    }
    public function login() {
        $stmt = $this->pdo->prepare('SELECT * FROM CLIENT WHERE email = :email AND password = :password');
        $stmt->execute(['email' => $this->email, 'password' => $this->password]);
        return $stmt;
    }

    public function update() {
        $stmt = $this->pdo->prepare('UPDATE CLIENT SET nom = :nom, email = :email, password = :password, cin = :cin, img = :img WHERE id_client = :id_client');
        $stmt->execute(['nom' => $this->nom, 'email' => $this->email, 'password' => $this->password, 'cin' => $this->cin, 'img' => $this->img, 'id_client' => $this->id_client]);
        return $stmt->rowCount();
    }

    public function delete() {
        $stmt = $this->pdo->prepare('DELETE FROM CLIENT WHERE id_client = :id_client');
        $stmt->execute(['id_client' => $this->id_client]);
        return $stmt->rowCount();
    }
}
?>