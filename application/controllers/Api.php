<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';
require_once APPPATH.'/libraries/Unirest/Unirest.php';

class Api extends REST_Controller {

	function __construct(){
      // Construct our parent class
      parent::__construct();
      
  }

  public function coupons_get(){
  	// Loading the model
    $this->load->model('Coupon_model', 'coupon');
    $result = array();
    $id = $this->get('id');

    // Checks if specific 'id' is being queried, else returns all coupons
    if ($id){
    	$result = $this->coupon->get_by_id($id);

    	// if result is empty, send error
    	if (empty($result)){
    		$this->response(array('error' => 'This ID is undefined.'), 404);
    	}

    } else {
    	$result = $this->coupon->get_all();
    }

    $this->response($result);
  }

  public function coupons_post(){
  	// Loading the model
    $this->load->model('Coupon_model', 'coupon');
    $data = $this->post();

    $this->coupon->create($data);
    $this->response('Coupon added!');
  }

  public function coupons_put(){
  	// Loading the model
  	$this->load->model('Coupon_model', 'coupon');
  	$data = $this->put();
  	$id = $this->get('id');

  	$this->coupon->update($id, $data);
  	$this->response('Coupon is updated!');

  }

  public function coupons_delete(){
  	// Loading the model
  	$this->load->model('Coupon_model', 'coupon');
  	$id = $this->get('id');

  	$this->coupon->delete($id);
  	$this->response('Coupon has been deleted!');
  }

  public function couponapi_get(){

  	$response = Unirest\Request::get("https://udayogra-deal-and-coupons-v1.p.mashape.com/dl?action=getmerchants&submittype=deals",
  array(
    "X-Mashape-Key" => "0px1qep5qfmsh9Mo6vAQxg6R5afBp1citx5jsnZsAt9nis6tI4",
    "Accept" => "application/json"
  )
);

		$this->response($response);

  }


}