function ProductImage(props) {
    console.log(props);
    return (
        <img src={props.image} alt="Product image"></img>
    )
}

export default ProductImage;