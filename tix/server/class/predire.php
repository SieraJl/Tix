<?php
class Predire {
    private $pdo;

    public $id_predir;
    public $id_client;
    public $date_predir;
    public $date_fin;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function create() {
        $stmt = $this->pdo->prepare('INSERT INTO predire (id_client, date_predir, date_fin) VALUES (:id_client, :date_predir, :date_fin)');
        $stmt->execute(['id_client' => $this->id_client, 'date_predir' => $this->date_predir, 'date_fin' => $this->date_fin]);
        $this->id_predir = $this->pdo->lastInsertId();
        return $this;
    }

    public function read() {
        $stmt = $this->pdo->prepare('SELECT * FROM predire WHERE id_predir = :id_predir');
        $stmt->execute(['id_predir' => $this->id_predir]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function update() {
        $stmt = $this->pdo->prepare('UPDATE predire SET id_client = :id_client, date_predir = :date_predir, date_fin = :date_fin WHERE id_predir = :id_predir');
        $stmt->execute(['id_client' => $this->id_client, 'date_predir' => $this->date_predir, 'date_fin' => $this->date_fin, 'id_predir' => $this->id_predir]);
        return $stmt->rowCount();
    }

    public function delete() {
        $stmt = $this->pdo->prepare('DELETE FROM predire WHERE id_predir = :id_predir');
        $stmt->execute(['id_predir' => $this->id_predir]);
        return $stmt->rowCount();
    }
}
?>