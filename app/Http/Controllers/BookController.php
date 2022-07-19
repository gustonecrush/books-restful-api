<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Resources\BookResource;
use Validator;

class BookController extends Controller
{
    protected $books;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->books = Book::all(); // SELECT * FROM books;
        $bookResources = BookResource::collection($this->books);

        return $this->sendResponse($bookResources, "Successfully get books");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $input = $request->all();
        $validator = Validator::make($input, [
            "name" => "required|min:4",
            "author" => "required|min:4|max:50",
            "description" => "required|min:4|max:255",
            "price" => "required",
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors());
        }

        $book = Book::create($input);

        return $this->sendResponse(new BookResource($book), "Book created successfully!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = Book::find($id);
        return $this->sendResponse(new BookResource($book), "Book get successfully!");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            "name" => "required|min:4",
            "author" => "required|min:4|max:50",
            "description" => "required|min:4|max:255",
            "price" => "required",
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors());
        }

        $book = Book::find($id);
        $book->name = $input["name"];
        $book->author = $input["author"];
        $book->description = $input["description"];
        $book->price = $input["price"];
        $book->save();

        return $this->sendResponse(new BookResource($book), "Book updated successfully!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book = Book::find($id);
        $book->delete();
        return $this->sendResponse([], "Book deleted Successfully!");
    }
}
