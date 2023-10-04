import TextField from "@mui/material/TextField";

type propstype = {
  label: string; 
  onChange?: any;
  type?: string;
  value?: any;
};

function Input(props: propstype) {
  const { label,onChange,type,value } = props; 
  return (
    <>
      <div>
        <TextField
          className="w-100 py-4 text-dark" id="standard-basic"
          placeholder={label}  variant="standard"
          value={value}
          onChange={onChange}
          type={type ?? "text"}
        />
      </div>
    </>
  );
}

export default Input;
