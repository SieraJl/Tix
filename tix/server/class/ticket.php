<?php
class Ticket {
    private $pdo;

    public $id_ticket;
    public $home_id;
    public $away_id;
    public $home_name;
    public $away_name;
    public $date;
    public $time;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // public function create() {
    //     $stmt = $this->pdo->prepare('INSERT INTO ticket (id_match) VALUES (:id_match)');
    //     $stmt->execute(['id_match' => $this->id_match]);
    //     $this->id_ticket = $this->pdo->lastInsertId();
    //     return $this;
    // }

    public function readAll() {
        $stmt = $this->pdo->prepare('SELECT * FROM ticket ');
        $stmt->execute();
        return $stmt;
    }

    // public function update() {
    //     $stmt = $this->pdo->prepare('UPDATE ticket SET id_match = :id_match WHERE id_ticket = :id_ticket');
    //     $stmt->execute(['id_match' => $this->id_match, 'id_ticket' => $this->id_ticket]);
    //     return $stmt->rowCount();
    // }

    // public function delete() {
    //     $stmt = $this->pdo->prepare('DELETE FROM ticket WHERE id_ticket = :id_ticket');
    //     $stmt->execute(['id_ticket' => $this->id_ticket]);
    //     return $stmt->rowCount();
    // }
}
