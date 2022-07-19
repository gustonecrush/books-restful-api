import React, { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import BookForm from '@/components/Books/form'
import BookList from '@/components/Books/list'
import * as Yup from 'yup'

import { useFormik } from 'formik'

const books = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const bookSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Minimal 2 characters')
            .max(255, 'Maximum 255 characters')
            .required('Name is required'),
        author: Yup.string()
            .min(2, 'Minimal 2 characters')
            .max(255, 'Maximum 255 characters')
            .required('Author is required'),
        description: Yup.string()
            .min(10, 'Minimal 10 characters')
            .max(300, 'Maximum 300 characters')
            .required('Description is required'),
        price: Yup.number(),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            author: '',
            description: '',
            price: 0,
        },
        validationSchema: bookSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                if (values.id) {
                    const { data } = await axios.put(
                        `http://localhost:8000/api/books/${values.id}`,
                        values,
                    )

                    handleUpdateBooks({ book: data.data })
                } else {
                    const { data } = await axios.post(
                        'http://localhost:8000/api/books',
                        values,
                    )

                    handleAddBook({
                        book: data.data,
                    })
                }
                resetForm()
            } catch (error) {
                console.log(error)
            }
        },
    })

    const fetchBooks = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:8000/api/books')
            setBooks(data.data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const getBook = async id => {
        try {
            const { data } = await axios.get(
                `http://localhost:8000/api/books/${id}`,
            )

            const book = data.data

            formik.setFieldValue('name', book.name)
            formik.setFieldValue('author', book.author)
            formik.setFieldValue('description', book.description)
            formik.setFieldValue('price', book.price)
            formik.setFieldValue('id', book.id)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleAddBook = ({ book }) => {
        setBooks(prev => [...prev, book])
    }

    const handleUpdateBooks = ({ book }) => {
        const updatedBooks = books.map(item =>
            item.id === book.id ? book : item,
        )
        setBooks(updatedBooks)
    }

    const handleDeleteBook = async id => {
        const isDelete = confirm('Are you sure want delete this data?')

        if (isDelete) {
            try {
                await axios.delete(`http://localhost:8000/api/books/${id}`)
                const filteredBooks = books.filter(item => item.id !== id)
                setBooks(filteredBooks)
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    if (error) return error

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Books
                </h2>
            }>
            <Head>
                <title>Books</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <BookForm
                                handleAddBook={handleAddBook}
                                formik={formik}
                            />
                            <BookList
                                books={books}
                                getBook={getBook}
                                handleDeleteBook={handleDeleteBook}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default books
