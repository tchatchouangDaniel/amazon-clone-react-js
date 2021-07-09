import React from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleRating from "../rating/SimpleRating";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/YmYzNDNkZGYt/YmYzNDNkZGYt-NDhhOGFmYzMt-w1500._CB665550943_.jpg"
          alt="banner"
        />
        <Grid className="home__product-container" container spacing={3}>
          <Grid class="home__product" item xs={3}>
            <Paper className="paper">
              <Typography>test driven development</Typography>
              <img
                className="product-image"
                src="https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL._SX396_BO1,204,203,200_.jpg"
                alt="product"
              />
              <SimpleRating />
              <Typography>299£</Typography>
              <Button className="btn-add-cart" variant="contained">
                Add to cart
              </Button>
            </Paper>
          </Grid>
          <Grid class="home__product" item xs={4}>
            <Paper className="paper">
              <Typography>test driven development</Typography>
              <img
                className="product-image"
                src="https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL._SX396_BO1,204,203,200_.jpg"
                alt="product"
              />
              <SimpleRating />
              <Typography>299£</Typography>
              <Button className="btn-add-cart" variant="contained">
                Add to cart
              </Button>
            </Paper>
          </Grid>
          <Grid class="home__product" item xs={4}>
            <Paper className="paper">
              <Typography>test driven development</Typography>
              <img
                className="product-image"
                src="https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL._SX396_BO1,204,203,200_.jpg"
                alt="product"
              />
              <SimpleRating />
              <Typography>299£</Typography>
              <Button className="btn-add-cart" variant="contained">
                Add to cart
              </Button>
            </Paper>
          </Grid>
          <Grid class="home__product" item xs={4}>
            <Paper className="paper">
              <Typography>test driven development</Typography>
              <img
                className="product-image"
                src="https://images-na.ssl-images-amazon.com/images/I/41pO5GqNtzL._SX396_BO1,204,203,200_.jpg"
                alt="product"
              />
              <SimpleRating />
              <Typography>299£</Typography>
              <Button className="btn-add-cart" variant="contained">
                Add to cart
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
