import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { Filter, FilterOptions } from './styles';
import { Footer } from '../../../components/Footer';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/orders');
      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order, index) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products.map((product, prodIndex) => ({
        ...product,
        uniqueKey: `${order._id}-${product.id || product._id}-${prodIndex}`
      })),
      uniqueKey: `${order._id}-${index}`
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order, index) => createData(order, index));
    setRows(newRows);
  }, [filteredOrders]);

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusOption = orderStatusOptions.find(option => option.id === activeStatus);
      const newOrders = orders.filter(order => order.status === statusOption.value);
      setFilteredOrders(newOrders);
    }
  }, [orders, activeStatus]);

  function handleStatus(status) {
    setActiveStatus(status.id);
  }

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOptions 
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOptions>
        ))}
      </Filter>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row 
                key={row.uniqueKey || `order-${index}`}
                row={row} 
                orders={orders}
                setOrders={setOrders}
                setActiveStatus={setActiveStatus}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
         </>
         
  );
}