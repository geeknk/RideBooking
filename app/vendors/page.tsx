"use client";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import vendorsRow from "../../mock-data/venders.json";
import Link from "next/link";
const useStyles = makeStyles({
  row: {
    "&:nth-of-type(even)": {
      backgroundColor: "#F4F4F4",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFFFFF",
    },
  },
  root: {
    "& .super-app.approved": {
      color: "#4BAC1E", // Green for Approved
    },
    "& .super-app.rejected": {
      color: "#EC3535", // Red for Rejected
    },
    "& .super-app.pending": {
      color: "#F9A825", // Yellow for Pending
    },
  },
});

export default function Vendors(props: any) {
  const classes = useStyles();

  //All CellRendering............
  const nameCellRender = (params: any) => (
    <Link href={`/vendordetails`} style={{ textDecoration: "none" }}>
      <span>{params.value}</span>
    </Link>
  );
  const vendorsColumn = [
    {
      field: "fullName",
      headerName: "Name",
      headerAlign: "left",
      align: "left",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      renderCell: nameCellRender,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerAlign: "left",
      align: "left",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      flex: 1,
    },
    {
      field: "employerAddress",
      headerName: "Address",
      headerAlign: "left",
      align: "left",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "left",
      align: "left",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "left",
      align: "left",
      headerClassName: "super-app-theme--header",
      cellClassName: (params: any) => {
        const status = params.value?.toLowerCase();
        return `super-app ${status}`;
      },
      flex: 1,
    },
  ];
 
  return (
  <DataGrid
    autoHeight
    {...props}
    rows={vendorsRow}
    columns={vendorsColumn}
    classes={{ row: classes.row, root: classes.root }}
    rowsPerPageOptions={[10]}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize: 10,
        },
      },
    }}
    
  />

  );
}