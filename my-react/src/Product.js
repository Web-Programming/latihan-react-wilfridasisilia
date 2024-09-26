import React from "react";

function Product() {
    // const products = ["Asus","Acer","Lenovo"];
    const products = [
        {id: "P001", nama: "Asus", harga: 8000000},
        {id: "P002", nama: "Acer", harga: 7000000},
        {id: "P003", nama: "Lenovo", harga: 9000000}
    ];
    
    // const displayProduct = products.map((product) => (
    //     <div key = {product.id}>
    //         {product.nama}
    //         {product.harga}</div>
    // ));
    // return <div>{displayProduct}</div>;
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && 
                products.map((product) => {
                    return (
                    <tr key = {product.id}>
                        <td>{product.id}</td>
                        <td>{product.nama}</td>
                        <td>{product.harga}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
}
export default Product;