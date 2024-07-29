<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title'=> $this->title,
            'author'=> $this->author,
            'genre'=> $this->genre,
            'publisher_year'=> $this->publisher_year,
            'borrow_records'=> $this->borrow_records()->get(),
            
        ];
    }
}
