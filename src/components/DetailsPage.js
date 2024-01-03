import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {
  Typography,
  Container,
  Grid,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Loading from "./Loading";
import products from "../productsData"; // Import local data

const DetailsPage = ({ addToCart, removeFromCart, cart }) => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddToCart = () => {
    addToCart(currentProduct.id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(currentProduct.id);
  };



  useEffect(() => {
    const fetchProduct = () => {
      const product = products.find((p) => p.id === parseInt(id, 10));
      setCurrentProduct(product || null);
    };

    fetchProduct();
  }, [id, cart]);

  return (
    <Container maxWidth="lg">
      <Grid container>
        {currentProduct ? (
          <Box
            display="flex"
            alignItems="center"
            mt={10}
            sx={{
              margin: "auto",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={6} mt={10} sx={{ marginRight: { md: '20px' } }}>
              <img src={currentProduct.image} alt={`product/${id}`} width={"350px"} />
            </Grid>
            <Grid item xs={12} md={6} my={7}>
              <Box
                component="div"
                mt={5}
                sx={{
                  border: "solid 1px #dfdfdf",
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: "#f4f4f4",
                }}
              >
                <Typography  color="text.secondary" fontWeight={700} mb={4} style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}>
                  {currentProduct.name}
                </Typography>

                <Box component="div" display="flex">
                  <Typography
                    component="p"
                    style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                    color="#6309bf"
                    fontWeight={700}
                    display="flex"
                    mr={1}
                  >
                    Info:
                  </Typography>
                  <Typography
                    style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {currentProduct.description}
                  </Typography>
                </Box>

                <Box component="div" display="flex" alignItems="center">
                  <Typography
                    style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                    color="#6309bf"
                    fontWeight={700}
                    sx={{ lineHeight: 3 }}
                    display="flex"
                    alignItems="center"
                    mr={1}
                  >
                    Category:
                  </Typography>
                  <Typography
                    style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {currentProduct.category}
                  </Typography>
                </Box>

                <Box component="div" display="flex" alignItems="center">
                  <Typography
                    style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                    color="#6309bf"
                    fontWeight={700}
                    sx={{ lineHeight: 3 }}
                    display="flex"
                    alignItems="center"
                    mr={1}
                  >
                    Price:
                  </Typography>
                  <Typography
                    style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
                    color="text.secondary"
                    fontWeight={400}
                  >
                    &#8358;{currentProduct.price}
                  </Typography>
                </Box>
                <Box style={{ textAlign: "center" }}>
                <IconButton onClick={handleRemoveFromCart}>
                  <RemoveCircleIcon fontSize="inherit" />
                </IconButton>
                <Chip
  style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}
  label={(cart.find(item => item.id === currentProduct?.id)?.quantity || 0)}
/>

                <IconButton onClick={handleAddToCart}>
                  <AddCircleIcon fontSize="inherit" />
                </IconButton></Box>
                
                <Link
                  to="/"
                  style={{
                    display: "flex",
                    width: "fit-content",
                    marginTop: "15px",
                    color: "#00000099",
                  }}
                >
                  <ArrowBackIosIcon />
                  <Typography style={{ fontFamily: 'Graphik, Calibre-Regular, Segoe UI, Helvetica Neue, sans-serif' }}>Back to store</Typography>
                </Link>
              </Box>
            </Grid>
          </Box>
        ) : (
          <Grid item xs={12}>
            <Loading />
          </Grid>
        )}
      </Grid>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>

      </Box>


    </Container>

  );
};

export default DetailsPage;
