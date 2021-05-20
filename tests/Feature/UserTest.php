<?php

namespace Tests\Feature;

use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Str;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     * @test
     */
    public function get_user_test()
    {
        $response = $this->post('/api/login', ['email' => 'admin@admin.com', 'password' => 'password']);

        $token = json_decode($response->getContent())->data->token;

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)->get('/api/user');
        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @test
     */
    public function delete_user_test()
    {
        $response = $this->post('/api/login', ['email' => 'admin@admin.com', 'password' => 'password']);

        $token = json_decode($response->getContent())->data->token;

        $faker = Factory::create();
        $password = $faker->password(8);
        $response = $this->withHeader('Authorization', 'Bearer ' . $token)->post('/api/register', ['name' => $faker->name(), 'email' => $faker->safeEmail(), 'password' => $password, 'password_confirmation' => $password]);
        $user_id = json_decode($response->getContent())->data->user->id;
        $response = $this->withHeader('Authorization', 'Bearer ' . $token)->delete('/api/user/' . $user_id);
        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     * @test
     */
    public function update_user_test()
    {
        $response = $this->post('/api/login', ['email' => 'admin@admin.com', 'password' => 'password']);

        $token = json_decode($response->getContent())->data->token;

        $faker = Factory::create();
        $password = $faker->password(8);
        $response = $this->withHeader('Authorization', 'Bearer ' . $token)->post('/api/register', ['name' => $faker->name(), 'email' => $faker->safeEmail(), 'password' => $password, 'password_confirmation' => $password]);
        $user_id = json_decode($response->getContent())->data->user->id;
        $response = $this->withHeader('Authorization', 'Bearer ' . $token)->put('/api/user/' . $user_id, ['name' => $faker->name(), 'email' => $faker->safeEmail()]);
        $response->assertStatus(200);
    }
}
