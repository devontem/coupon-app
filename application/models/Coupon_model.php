<?php // omit closing php tag

defined('BASEPATH') OR exit('No direct script access allowed');

class Coupon_model extends CI_Model(){
	
	// constructing parent class
	function __construct(){
		parent::__construct();
	}

	public function get_all(){
		$query = $this->db->get('coupons');
		return $query->result();

	}

	public function get_by_id($id){
		$this->db->where('id', $id);
		$query = $this->db->get('coupons');

		return $query->result();
	}

	public function update($id, $data){
		$this->db->where('id', $id);
		$this->db->update('coupons', $data);
	}

	public function delete($id){
		// Permanently deleted record
		// $this->db->delete('coupons', array('id' => $id));

		// Flags record as inactive
		$this->db->where('id', $id);
		$this->db->update('coupons', array('status' => 0));
	}
}