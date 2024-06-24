// const Product = () => {
//   const price = 999;
//   const imgUrl = "<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>";

//   return (
//     <>
//       <h2>Tacos</h2>
//       <img src={imgUrl} />
// 			<p>Price: {price} credits</p>
//     </>
//   );
// };

// export default Product;
import PropTypes from 'prop-types';

const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => 
  (
    <div>
      <h2>{name}</h2>
			<img src={imgUrl} alt={name} width="480" />
			<p>Price: {price} credits</p>
    </div>
);
  
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export { Product };