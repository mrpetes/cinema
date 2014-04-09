<?php

class user_class {

    private $mail;
    private $id_activate;
    private $name;
    private $phone;
    private $mobile_phone;
    private $password;
    private $surname;

    function user_class() {
        $mail = "";
        $id_activate = "";
        $name = "";
        $surname = "";
        $phone = "";
        $mobile_phone = "";
        $password = "";
    }

    function user_class_1($mail, $id_activate, $name, $surname, $phone, $mobile, $password) {
        $this->mail = $mail;
        $this->id_activate = $id_activate;
        $this->name = $name;
        $this->surname = $surname;
        $this->phone = $phone;
        $this->mobile_phone = $mobile;
        $this->password = $password;
    }

    function setMail($mail) {
        $this->mail = $mail;
    }

    function setIdActivate($id_activate) {
        $this->id_activate = $id_activate;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setSurname($surname) {
        $this->surname = $surname;
    }

    function setPhone($phone) {
        $this->phone = $phone;
    }

    function setMobile($mobile) {
        $this->mobile_phone = $mobile;
    }

    function setPassword($password) {
        $this->password = $password;
    }

    function getMail() {
        return $this->mail;
    }

    function getIdActivate() {
        return $this->id_activate;
    }

    function getName() {
        return $this->name;
    }

    function getSurname() {
        return $this->surname;
    }

    function getphone() {
        return $this->phone;
    }

    function getMobile() {
        return $this->mobile_phone;
    }

    function getPassword() {
        return $this->password;
    }

}
?>

