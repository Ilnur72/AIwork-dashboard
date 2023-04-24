import React from "react";
import { Checkbox, InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const ModalItem = ({ info, title, selected }) => {
  const { mode } = useSelector((state) => state.timeMode);

  return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {info ? (
            <Checkbox
              color={mode ? "primary" : "success"}
              sx={{ color: mode ? "auto" : "white" }}
              checked={selected}
            />
          ) : (
            <Checkbox
              label={"Buyurtma oluvchi"}
              onChange={handleCheck}
              color={mode ? "primary" : "success"}
              sx={{ color: mode ? "auto" : "white" }}
            />
          )}
          <p
            className={`font-bold text-base ${
              mode ? "text-gray-900" : "text-white"
            }`}
          >
            {title}
          </p>
        </div>
        <TextField
          className="text-white"
          id="standard-start-adornment"
          disabled={info}
        //   {...register("daraja")}
          InputProps={{
            endAdornment: mode ? (
              <InputAdornment position="end" sx={{ color: "white" }}>
                %
              </InputAdornment>
            ) : (
              ""
            ),
          }}
          sx={{
            width: "96px",
            border: "solid white",
            borderRadius: "5px",
            input: { color: mode ? "auto" : "white" },
          }}
          size="small"
        />
      </div>
  );
};

export default ModalItem;
