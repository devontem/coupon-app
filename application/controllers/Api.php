<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Api extends REST_Controller {

	function __construct(){
      // Construct our parent class
      parent::__construct();
      
  }

  public function student_get(){
    $this->response("Why hello there happiness");
  }

}