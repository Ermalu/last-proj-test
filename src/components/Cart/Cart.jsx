import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import Loader from "../Loader/Loader";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Cart.module.css";
import Video from "./video/vid.cart.mp4";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    <div style={{ height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}>
        <source src={Video} />
      </video>
      <Container>
        <TableContainer style={{ opacity: "60%" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Subprice</TableCell>
                <TableCell align="right">Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map(row => (
                <TableRow
                  key={row.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.item.title}
                  </TableCell>
                  <TableCell align="right">{row.item.price}</TableCell>

                  <TableCell align="right">
                    <IconButton>
                      <RemoveIcon
                        onClick={() => changeCount(row.count - 1, row.item.id)}
                      />
                    </IconButton>
                    {row.count}
                    <IconButton>
                      <AddIcon
                        onClick={() => changeCount(row.count + 1, row.item.id)}
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{row.subPrice}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => deleteFromCart(row.item.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => navigate(`/details/${row.item.id}`)}>
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box>
          <Typography variant="h4">Total price: {cart.totalPrice} $</Typography>
        </Box>
        <Box>
          <Button
            onClick={() => navigate("/purchase")}
            variant="contained"
            color="success"
            style={{
              backgroundColor: "#f06292",
            }}>
            Get to buy
          </Button>
        </Box>
      </Container>
    </div>
  ) : (
    <Loader />
  );
}
