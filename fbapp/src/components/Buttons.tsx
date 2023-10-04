import Button from "@mui/material/Button";

type btnpropstype = {
  onClick?: any;
  label: string;
};

function Buttons(props: btnpropstype) {
  const { onClick, label } = props;
  return (
    <div>
      <Button onClick={onClick} variant="contained">
        {label}
      </Button>
    </div>
  );
}

export default Buttons;
