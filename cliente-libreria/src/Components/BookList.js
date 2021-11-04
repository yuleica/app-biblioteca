import React from 'react';

export const BookList = ({books}) => {
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <th>ID</th>
                    <th>TITULO</th>
                    <th>AUTOR</th>
                    <th>EDICION</th>
                </thead>
                <tbody>
                    {books.map( book => 
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.titulo}</td>
                            <td>{book.autor}</td>
                            <td>{book.edicion}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
    )
}
