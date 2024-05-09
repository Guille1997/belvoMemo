import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

export const CustomTable = ({
  data = [],
  columns,
  idData,
  loading = false,
  colorRow = () => {},
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ height: 400, width: "100%", overflowX: "auto" }}>
      <DataGrid
        loading={loading}
        getRowId={(row) => row[idData]}
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowClassName={colorRow}
        sx={{
          border: "0px",
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "left",
          },
          "& .MuiDataGrid-cell--textLeft": {
            justifyContent: "left",
            align: "left",
          },
          "& .MuiDataGrid-cell": {
            outline: "none !important",
          },
          "& .MuiDataGrid-columnHeader": {
            outline: "none !important",
          },
        }}
      />
    </Box>
  );
};
