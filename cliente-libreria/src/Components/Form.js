import React from 'react';

export const Form = ({book, setBook, setListUpdated}) => {
    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value
        });

    };

    let {titulo, autor, edicion} = book;

    const handleSubmit = (e) => {

        e.preventDefault();
        edicion = parseInt(edicion, 10);
        //validacion
        if (titulo === " " || autor === " " || edicion <= 0) {
            alert("los campos son obligatorios")
            return
        };

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book) 
        }

        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.json() )
        //.then(res => setBook() )

        //reinicio el state del libro
        setBook = ({
            titulo: '',
            autor: '',
            edicion: 0
          });

        setListUpdated(true)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Titulo</label>
                <input onChange={handleChange} name="titulo" type="text" id="title" value={titulo} className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Autor</label>
                <input onChange={handleChange} name="autor" type="text" id="author" value={autor} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="edition" className="form-label">Edicion</label>
                <input onChange={handleChange} name="edicion" type="number" id="edition" value={edicion} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
};
