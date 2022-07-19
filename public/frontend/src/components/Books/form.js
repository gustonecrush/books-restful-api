import React, { useState } from 'react'
import FormController from '../Form/formController'
import Input from '../Form/input'
import Button from '../Form/button'
import axios from '@/lib/axios'
import * as Yup from 'yup'

import { useFormik } from 'formik'

const initialValues = {
    name: '',
    author: '',
    description: '',
    price: 0,
}

function Form({ formik }) {
    return (
        <div className="w-full mb-2">
            <form
                className=""
                autoComplete="off"
                onSubmit={formik.handleSubmit}>
                <FormController label="Name" id="name">
                    <Input
                        placeholder="Enter Name"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

                    {formik.errors && (
                        <label className="text-red-600">
                            {formik.errors['name']}
                        </label>
                    )}
                </FormController>

                <FormController label="Author" id="author">
                    <Input
                        placeholder="Enter Author"
                        id="author"
                        name="author"
                        onChange={formik.handleChange}
                        value={formik.values.author}
                    />
                    {formik.errors && (
                        <label className="text-red-600">
                            {formik.errors['author']}
                        </label>
                    )}
                </FormController>

                <FormController label="Description" id="description">
                    <Input
                        placeholder="Enter Descripton"
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    {formik.errors && (
                        <label className="text-red-600">
                            {formik.errors['description']}
                        </label>
                    )}
                </FormController>

                <FormController label="Price" id="price">
                    <Input
                        placeholder="Enter Price"
                        id="price"
                        type="text"
                        name="price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                </FormController>

                <Button
                    typevar="primary"
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}>
                    {formik.values.id ? 'Update' : 'Submit'}
                </Button>
            </form>

            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
        </div>
    )
}

export default Form
