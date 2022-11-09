import React, { useState } from "react";
import Title from "../../components/Title/Title.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import RadioInput from "../../components/RadioInput/RadioInput.jsx";

import useFormValidation from "../../hooks/useFormValidation";

import { isaVariants, getIndexIsa, isaData } from "../../utils/constants";

import "./Isa.css";

function Isa() {
  const { handleChange, values, isFormValid, setValues } = useFormValidation();
  const isZeroInInputs = Object.values(values).includes("0");
  const [result, setResult] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <>
      {!result && (
        <form
          className="page"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const gspg = Number(values["gspg"]);
            const testosterone = Number(values["testosterone"]);
            const floatRes = (testosterone / gspg) * 100;
            setResult(floatRes.toFixed(2));
          }}
        >
          <div className="page__header">
            <Title mod="title_isa">
              Калькулятор рассчета индекса свободных андрогенов (ИСА)
            </Title>
            <p className="page__green-hint">
              Индекс свободных андрогенов (ИСА) - это показатель соотношения
              общего тестостерона к белку, связывающему половые стероиды (ГСПГ).
            </p>
            <Input
              label="ГСПГ (SHBG), (нмоль/л)"
              name="gspg"
              onChange={handleChange}
              values={values}
              setValues={setValues}
            />
            <Input
              label="Общий Тестостерон, (нмоль/л)"
              name="testosterone"
              onChange={handleChange}
              values={values}
              setValues={setValues}
            />
            <RadioInput
              question="Пол"
              variants={isaVariants}
              onChange={handleChange}
              id="gender"
            />
          </div>
          <div className="page__footer">
            <Button valid={isFormValid && !isZeroInInputs}>Расчитать</Button>
          </div>
        </form>
      )}
      {result != null && !showMoreInfo && (
        <div className="page">
          <div className="page__header">
            <Title mod="title_center">Результат</Title>
            <h2
              style={{
                color: `${
                  isaData[values["gender"]].color[
                    getIndexIsa(values["gender"], result)
                  ]
                }`,
              }}
              className="page__number-result"
            >
              {`${result}%`}
            </h2>
            <p
              style={{
                color: `${
                  isaData[values["gender"]].color[
                    getIndexIsa(values["gender"], result)
                  ]
                }`,
              }}
              className="page__text-result"
            >
              {
                isaData[values["gender"]].textVerdict[
                  getIndexIsa(values["gender"], result)
                ]
              }
            </p>
            <p className="page__note">
              Если результаты теста на общий тестостерон не согласуются с
              клиническими наблюдениями, например, с пониженной сексуальной
              активностью у мужчин и гирсутизмом у женщин, то у женщин тест на
              ИСА является достоверным методом диагностики гиперандрогении.
            </p>
          </div>
          <div className="page__footer">
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
        <div className="page">
          <div className="page__header">
            <Title mod="title_center">Интерпретация</Title>
            <p className="page__info">
              ИСА = Общий тестостерон (нмоль/л){" "}
              <span className="colored">[{values["testosterone"]}]</span> / ГСПГ
              (нмоль/л) <span className="colored">[{values["gspg"]}]</span> x
              100.
            </p>
            <div className="table">
              <div className="table__column table__column_left">
                {isaData[values["gender"]].numberVerdict.map((elem, index) => {
                  return (
                    <p
                      key={index}
                      className={`table__row ${
                        index === getIndexIsa(values["gender"], result) &&
                        values["gender"] !== "Женщина" &&
                        "colored"
                      }`}
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>

              <div className="table__column table__column_right">
                {isaData[values["gender"]].textVerdict.map((elem, index) => {
                  return (
                    <p
                      key={index}
                      className={`table__row ${
                        index === getIndexIsa(values["gender"], result) &&
                        values["gender"] !== "Женщина" &&
                        "colored"
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

export default Isa;
