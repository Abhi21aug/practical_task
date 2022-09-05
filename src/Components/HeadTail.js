import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [errormsg, setErrormsg] = useState("");
  const [prevVal, setPrevVal] = useState("");
  const [list, setList] = useState({});
  const [count, setCount] = useState(0);

  const dropdownData = [
    { value: "H", label: "H" },
    { value: "T", label: "T" },
  ];

  const inputHandler = (selected) => {
    setSelectedValue(selected);
    setErrormsg("");
  };

  const submitHandler = () => {
    const oldData = { ...list };
    let val = count;
    let found = false;
    if (selectedValue) {
      if (selectedValue.value === prevVal || prevVal === "") {
        oldData[count] = "";
        oldData[count] = oldData.count
          ? oldData.count
          : "" + selectedValue.value;
        val += 1;
      } else {
        Object.keys(oldData).map((el) => {
          if (oldData[el] !== selectedValue.value && found === false) {
            found = true;
            return (oldData[el] = oldData[el] + " " + selectedValue.value);
          }
        });
      }
    } else {
      setErrormsg("Please select a value");
    }
    setPrevVal(selectedValue ? selectedValue.value : "");
    setList(oldData);
    setSelectedValue(null);
    setCount(val);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Welcome to Head-Tail</h2>
        </div>

        <div className="btnstylecss text-center mt-3 ">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5">
              <div className="form-group">
                <Select
                  options={dropdownData}
                  onChange={inputHandler}
                  value={selectedValue}
                />
                {errormsg != "" && (
                  <p style={{ color: "red", textAlign: "left" }}>{errormsg}</p>
                )}
              </div>
            </div>
            <div className="col-5">
              <button className="btnCss" onClick={submitHandler}>
                SUBMIT
              </button>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {Object.keys(list).map((el) => {
                return <p>{list[el]}</p>;
              })}
              {/* {item.map((elem) => {
                return (
                  <h2 className={elem.cont == "0th" ? "d_none" : ""}>
                    {elem.cont} added {elem.val}
                  </h2>
                );
              })} */}
              {/* <h2 className={count.cont==0?'d_none':''}>{count.cont} added {count.val}</h2> */}
              {/* <h2 className={t==0?'d_none':''}>{t} added T</h2> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadTail;
