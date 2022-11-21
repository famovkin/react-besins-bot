import React, { useState } from "react";
import Title from "../../components/Title/Title.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

import useFormValidation from "../../hooks/useFormValidation";

import { hypertensData, getIndexHypertens } from "../../utils/constants";

import "./Hypertens.css";

function Hypertens() {
  const { handleChange, values, isFormValid, setValues, setIsFormValid } =
    useFormValidation();
  const isZeroInInputs = Object.values(values).includes("0");
  const [sad, setSad] = useState(null);
  const [dad, setDad] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <>
      {!sad && !dad && (
        <form
          className="hypertens"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            setSad(Number(values["sad"]));
            setDad(Number(values["dad"]));
          }}
        >
          <div className="hypertens__header">
            <Title>Определение степени и стадии артериальной гипертензии</Title>
            <Input
              label="САД, мм.рт.ст"
              name="sad"
              onChange={handleChange}
              values={values}
              setValues={setValues}
            />
            <Input
              label="ДАД, мм.рт.ст"
              name="dad"
              onChange={handleChange}
              values={values}
              setValues={setValues}
            />
            <p>САД - Систолическое артериальное давление</p>
            <p>ДАД - Диастолическое артериальное давление</p>
          </div>
          <div className="hypertens__footer">
            <Button valid={isFormValid && !isZeroInInputs}>Рассчитать</Button>
            <Button
              valid={Object.values(values).length !== 0}
              handler={() => {
                setValues({});
                setIsFormValid(false);
              }}
              type="button"
            >
              Oчистить
            </Button>
          </div>
        </form>
      )}{" "}
      {sad && dad && !showMoreInfo && (
        <div className="hypertens">
          <div className="hypertens__header">
            <Title mod="title_center">Результат</Title>
            <h2
              style={{
                color: `${hypertensData.color[getIndexHypertens(sad, dad)]}`,
              }}
              className="hypertens__number-result"
            >
              {`САД ${sad} / ДАД ${dad}`}
            </h2>
            <p
              style={{
                color: `${hypertensData.color[getIndexHypertens(sad, dad)]}`,
              }}
              className="hypertens__text-result"
            >
              {hypertensData.textVerdict[getIndexHypertens(sad, dad)]}
            </p>
          </div>
          <div className="hypertens__footer">
            <Button
              mod="button_transparent"
              handler={() => {
                setShowMoreInfo(true);
              }}
            >
              Подробнее
            </Button>
          </div>
        </div>
      )}
      {showMoreInfo && (
        <div className="hypertens">
          <div className="hypertens__header">
            <Title mod="title_center">Интерпретация</Title>
            <p className="hypertens__info">
              САД
              <span className="colored"> [{values["sad"]}]</span> / ДАД
              <span className="colored"> [{values["dad"]}]</span>
            </p>
            <div className="table table_hypertens">
              <div className="table__column table__column_left">
                {hypertensData.sad.map((elem, index) => {
                  return (
                    <p
                      key={index}
                      className={`table__row table__row_hypertens ${
                        index === getIndexHypertens(sad, dad) && "colored"
                      }`}
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>
              <div className="table__column table__column_middle table__column_hyper">
                {hypertensData.dad.map((elem, index) => {
                  return (
                    <p
                      key={index}
                      className={`table__row table__row_hypertens ${
                        index === getIndexHypertens(sad, dad) && "colored"
                      }`}
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>
              <div className="table__column table__column_right">
                {hypertensData.textVerdict.map((elem, index) => {
                  return (
                    <p
                      key={index}
                      className={`table__row table__row_hypertens ${
                        index === getIndexHypertens(sad, dad) && "colored"
                      }`}
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hypertens;
