<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Artisan;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::factory()->count(12)->create();
        $faker = Faker::create();
        $imageUrl = $faker->imageUrl(640, 480, 'food');
        foreach ($products as $product) {
            $product->addMediaFromUrl($imageUrl)->toMediaCollection();
        }
        Artisan::call('storage:link');
    }
}
