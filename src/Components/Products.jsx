import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Table = styled.table`
    margin:auto;
    border:1px solid black;
    padding:40px;
    font-size:30px;
`


const Products = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/products')
        .then((response) => response.json())
        .then((res) => setProduct(res))
        .catch((err)=>console.log(err))
    },[])

  return (
    <Table>
        <thead>
            <tr>
                <th>Product </th>
                <th>Price</th>
                <th>More</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map((item)=>(
                    <tr key={item.id}>
                        <td >{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={`/products/${item.id}`}>More Details...</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
  )
}

export default Products