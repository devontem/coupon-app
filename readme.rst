###################
Coupon-App
###################

RESTful CRUD application allowing users to search for coupons, querying both the local database and 8Coupons web API.

*******************
Technologies Used
*******************

- PHP 5
- CodeIgniter
- CodeIgniter rest-server library
- 8Coupons Web API
- Angular.JS
- MySQL
- Apache (local dev using MAMP)

*******************
Required for fork
*******************

- Register for a 8Coupons API key, and create a file in application/config called 'API_keys.php', with a PHP class called 'API_keys', and a public static variable called '$coupon_api_key' containing the 8Coupons API key
- Create a MySQL database called "inventory" (or configure it)
- Create a 'coupons' MySQL table according to the schema in /application/schema.sql
