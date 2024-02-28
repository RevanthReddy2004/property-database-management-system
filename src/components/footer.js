import React from 'react'
import style from "./Footer.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,

  TableContainer,
 
} from '@chakra-ui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate=useNavigate()
  const handleaboutus=()=>{
    navigate("/aboutus")
  }
  return (
    <div className={style.footer_cotainer}>
      <div className={style.footer_main}>
        <h1>Property Group</h1>
        <div className={style.gridcolumn}>
          <TableContainer size='sm'>
            <Table variant='none'>

              <Thead>
                <Tr>
                  <Th>Company</Th>
                  <Th>EXPLORE</Th>
                  <Th>Policies</Th>
                  <Th>Help</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  
                  <Td onClick={handleaboutus} cursor={"pointer"}>About us</Td>
                  
                  <Td>Property guide</Td>
                  <Td >Privacy statements</Td>
                  <Td >Support</Td>
                </Tr>
                <Tr>
                  <Td >Property in india</Td>
                  <Td >Terms of use</Td>
                  <Td >Change or cancel your property </Td>
                </Tr>
                <Tr>
                  <Td>List your property</Td>
                  <Td>Property rentals in india</Td>
                  <Td >Refund process and timeline</Td>
                </Tr>
                <Tr>
                  <Td>Partnership</Td>
                  <Td >Book a plot</Td>
                  <Td >International property</Td>
                </Tr>
                <Tr>
                  <Td >Domestic property</Td>
                  <Td >All accomodation types</Td>
                </Tr>
              </Tbody>

            </Table>
          </TableContainer>

        </div >
      </div>
      <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
      <h3>© 2023 property, Inc., an property Group company. All rights reserved. property Logo are trademarks or registered trademarks of property, Inc.</h3>
    </div>
  )
}
