import {
  Box,
  Button,
  Grid,
  Skeleton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getBodegasProvider } from "../../providers/bodega/providerBodega";
import { IndexLayout } from "../../layouts";
import { Buscador, CustomTable } from "../../ui";
import { AddCircleOutline } from "@mui/icons-material";
import { TableResponsiveCustom } from "../../ui/components/TableResponsiveCustom";


import { getAllInstitutions,getAllTransactions,getAllAccounts } from "../../providers/bodega/providerBodega";




export const IndexBodega = () => {
  const [bodegas, setBodegas] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buscador, setBuscador] = useState("");
  const [bodegaBuscador, setBodegaBuscador] = useState([]);
  const [bodega, setBodega] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const xssize = useMediaQuery(theme.breakpoints.only("xs"));
  const [modalView, setModalView] = useState(false);
  const handleView = (row) => {
    setBodega(row);
    setModalView(!modalView);
  };

  const handleSearch = (event) => {
    setBuscador(event.target.value);
    searching(bodegas, event.target.value);
  };

  const searching = (bodegas, buscador) => {
    const newBodega = bodegas.filter((bodega) => {
      if (bodega.nombre_bodega.toUpperCase().includes(buscador.toUpperCase()))
        return bodega;
    });

    setBodegaBuscador(newBodega);
  };

  const handleDelete = (row) => {
    setBodega(row);
    setModalDelete(!modalDelete);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID:",
      flex: 1,
      sortable: true,
    },
    {
      field: "display_name",
      headerName: "Nombre",
      flex: 1,
      sortable: true,
    },
  ];

  // const getBodegas = async () => {
  //   const { data } = await getBodegasProvider();
  //   setBodegas(data?.bodegas);
  //   setBodegaBuscador(data?.bodegas);
  //   setIsLoading(false);
  // };

    const getBodegas = async () => {
    const { data } = await getAllInstitutions();
    
    setBodegas(data?.results);
    setBodegaBuscador(data?.results);
    setIsLoading(false);

  };


  const getAccounts = async () => {
    const { data } = await getAllAccounts();
   
    setAccounts(data?.results);
  };


  const getTransactions = async () => {
    const { data } = await getAllTransactions();
   
  };

  // const getAllInstitutions = async () => {
  //   const { data } = await getAllInstitutions();
  // };
  // const getAllTransactions = async () => {
  //   const { data } = await getAllTransactions();
  // };

   
// Llamada a la función para obtener las instituciones


  useEffect(() => {
   
    getBodegas();
  }, []);
  useEffect(() => {
   
    getAccounts();
  }, []);
  useEffect(() => {
   
    getTransactions();
  }, []);

 

  return (
    <>
      <Box>
        <IndexLayout title={"Bancos"}>
          <Grid
            alignItems={"center"}
            justifyContent={{ xs: "center", md: "space-between" }}
            flexDirection={{ xs: "column", md: "row" }}
            display={"flex"}
          >
            
            <Grid item xs={12} md={8}>
              <Buscador buscador={buscador} handleSearch={handleSearch} />
            </Grid>
          </Grid>
          {isLoading ? (
            <Skeleton variant="rectangular" width={"100%"} height={"80%"} />
          ) : (
            <>
              {xssize ? (
                <TableResponsiveCustom
                  isLoading={isLoading}
                  data={bodegaBuscador}
                  columns={columns}
                  idData={"id"}
                />
              ) : (
                <CustomTable
                  isLoading={isLoading}
                  data={bodegaBuscador}
                  columns={columns}
                  idData={"id"}
                />
              )}
            </>
          )}
        </IndexLayout>
       
      </Box>
    </>
  );
};
