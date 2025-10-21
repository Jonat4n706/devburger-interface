import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { ProductImage, SelectStatus } from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export function Row(props) {
  const { row, orders, setOrders, setActiveStatus } = props;
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(
    orderStatusOptions.find(option => option.value === row.status) || orderStatusOptions[0]
  );

  const handleStatusChange = async (selectedOption) => {
    try {
      setStatus(selectedOption);

      await api.put(`/orders/${row.orderId}`, {
        status: selectedOption.value
      });

      const updatedOrders = orders.map(order => {
        if (order._id === row.orderId) {
          return { ...order, status: selectedOption.value };
        }
        return order;
      });

      setOrders(updatedOrders);
      setActiveStatus(selectedOption.id);
      
      toast.success('Status atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      setStatus(orderStatusOptions.find(option => option.value === row.status));
      toast.error('Erro ao atualizar status. Tente novamente.');
    }
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus 
            options={orderStatusOptions} 
            placeholder="Status"
            value={status}
            onChange={handleStatusChange}
            menuPortalTarget={document.body}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.uniqueKey}>
                      <TableCell component="th" scope="row">
                        {product.quantity}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell align="center">
                        <ProductImage src={product.url} alt={product.name}/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        uniqueKey: PropTypes.string,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  setActiveStatus: PropTypes.func.isRequired,
};