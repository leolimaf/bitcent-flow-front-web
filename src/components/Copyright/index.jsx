import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {" - "}
      <Link color="inherit" component={RouterLink} to="/">
        My Finances
      </Link>
    </Typography>
  );
};

export default Copyright;
