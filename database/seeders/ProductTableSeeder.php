<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = factory(\App\Product::class, 12)->create();
        $faker = Faker::create();
        $imageUrl = $faker->imageUrl(640, 480, 'food');
        foreach ($products as $product) {
            $product->addMediaFromUrl($imageUrl)->toMediaCollection();
        }
        Artisan::call('storage:link');
    }
}
