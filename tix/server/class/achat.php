<?php
class Achat {
    private $pdo;

    public $id_achat;
    public $id_ticket;
    public $id_client;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function create() {
        $stmt = $this->pdo->prepare('INSERT INTO achat (id_ticket, id_client) VALUES (:id_ticket, :id_client)');
        $stmt->execute(['id_ticket' => $this->id_ticket, 'id_client' => $this->id_client]);
        $this->id_achat = $this->pdo->lastInsertId();
        return $this;
    }

    public function read() {
        $stmt = $this->pdo->prepare('SELECT * FROM achat WHERE id_achat = :id_achat');
        $stmt->execute(['id_achat' => $this->id_achat]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update() {
        $stmt = $this->pdo->prepare('UPDATE achat SET id_ticket = :id_ticket, id_client = :id_client WHERE id_achat = :id_achat');
        $stmt->execute(['id_ticket' => $this->id_ticket, 'id_client' => $this->id_client, 'id_achat' => $this->id_achat]);
        return $stmt->rowCount();
    }

    public function delete() {
        $stmt = $this->pdo->prepare('DELETE FROM achat WHERE id_achat = :id_achat');
        $stmt->execute(['id_achat' => $this->id_achat]);
        return $stmt->rowCount();
    }
}
?>