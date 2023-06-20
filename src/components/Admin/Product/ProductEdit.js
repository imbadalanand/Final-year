import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {

    const { productid } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/products/" + productid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            languagechange(resp.language);
            categorychange(resp.category);
            pricechange(resp.price);
            quantitychange(resp.quantity);
            authorchange(resp.author);
            ratingchange(resp.rating);
            descriptionchange(resp.description);
            publisherchange(resp.publisher);
            // activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [language, languagechange] = useState("");
    const [category, categorychange] = useState("");
    const [price, pricechange] = useState("");
    const [quantity, quantitychange] = useState("");
    const [author, authorchange] = useState("");
    const [rating, ratingchange] = useState("");
    const [description, descriptionchange] = useState("");
    const [publisher, publisherchange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const productdata = { id, name, language, category, price, quantity, author, rating, description, publisher };


        fetch("http://localhost:5000/products/" + productid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title" style={{ textAlign: "center" }}>
                                <h2>Books Product Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Language</label>
                                            <input value={language} onChange={e => languagechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <input value={category} onChange={e => categorychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input value={price} onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>
                                               Quantity  
                                            </label>
                                            <input value={quantity} onChange={e => quantitychange(e.target.value)} className="form-control">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Author</label>
                                            <input value={author} onChange={e => authorchange(e.target.value)} className="form-control">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Rating</label>
                                            <input value={rating} onChange={e => ratingchange(e.target.value)} className="form-control">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input value={description} onChange={e => descriptionchange(e.target.value)} className="form-control">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Publisher</label>
                                            <input value={publisher} onChange={e => publisherchange(e.target.value)} className="form-control">
                                            </input>
                                        </div>
                                    </div>

                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/Product" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default ProductEdit
