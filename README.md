## About project

This application is a example to make a ecommerce with Vue.Js and Laravel

## Steps to deploy

1. Clone the project in your server.
2. Copy the **.env.example** with the name **.env** in the root directory.
3. In the **.env** put your database access put the accesses in the corresponding variables `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`.
4. Install the project with `composer install`.
5. Run the command `php artisan key:generate` in the root directory to generate a new key.
6. Run the migrations and seeders with the command `php artisan migrate --seed` in the root directory
7. See the aplication un your IP or your custom domain

## Steps to unit testing
1. Run the command `php artisan test` in the root directory to test the user module.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
