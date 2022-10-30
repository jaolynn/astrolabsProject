import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,contacts) {
    return { name, contacts };
  }
  
  const rows = [
    createData('DUBAI -- The Vet Hospital  Al Wasl Road', "04 338 7726"),
    createData('DUBAI -- City Vet Clinic   Al Wasl Road', "04 388 3990"),
    createData('DUBAI -- City Vet Clinic   Mirdif', "04 288 6653"),
    createData('DUBAI -- City Vet Clinic   JVT', "04 874 7254"),
    createData('DUBAI -- DKC Vet Clinic  Motor City','04 211 4800'),
    createData('DUBAI -- Vienna Vet Clinic  Umm Suqeim','04 388 3827'),
    createData('DUBAI -- 2Feet 4Paws The Villa','04 552 0213'),
    createData('DUBAI -- 2Feet 4Paws The Palm','04 442 8330'),
    createData('DUBAI -- Umm Suqeim Vet Centre Beach Road','04 321 0799'),
    createData('DUBAI -- Modern Vet Clinic JLT','04 276 7160'),
    createData('ABU DHABI -- City Vet Clinic   Khalifa City','02 448 1448'),
    createData('ABU DHABI -- American Vet Clinic','02 665 0044'),
    createData('ABU DHABI -- British Vet Al Khadiliya','02 665 0085'),
    createData('AL AIN -- Al Wathba Vet','03 766 4993'),
    createData('AL AIN -- Modern Vet','03 765 6383'),
    createData('FUJAIRAH -- Pets n Us','09 222 2991'),
    createData('FUJAIRAH -- Al Faris Vet','09 244 1808'),
    createData('BOARDING KENNELS -- Dubai Kennels & Cattery  Dubai','04 211 4800'),
    createData('BOARDING KENNELS -- My Second Home   Dubai','04 881 8002'),
    createData('BOARDING KENNELS -- Urban Tails   Dubai','04 884 8847'),
    createData('BOARDING KENNELS -- Homely Petz   RAK','050 871 7072'),
    createData('PET SITTERS -- Paw Pals   Dubai','050 180 4041'),
    createData('PET SITTERS -- Homely Petz   RAK','050 871 7072'),
  ];

  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Contacts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.contacts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }