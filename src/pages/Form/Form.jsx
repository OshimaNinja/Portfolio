import React from "react";
import "./Form.scss";
import FormElement from "../../components/Form/FormElement";
import { ReactComponent as DashArrow } from "../../assets/DashArrow.svg";
import { ReactComponent as HexagonBenzene } from "../../assets/hexagon-benzene.svg";
const Form = () => {
  return (
    <>
      <div className="form__background">
        <div className="form__background-hexagonbenzene form__background-element hexabenzene">
          <HexagonBenzene />
        </div>
        <div className="form__background-color form__background-element"></div>
      </div>

      <div className="form">
        <div className="form__left">
          <div className="form__heading-3 heading-3">
            Let’s make something new, different and more meaningful or make
            thing more visual or Conceptual ? Just Say Hello !
          </div>
          <div className="form__dasharrow">
            <DashArrow />
          </div>
          <div className="form__details">
            <div className="detail">
              <span>—</span> +447903414320

            </div>
            <div className="detail">
              <span>—</span> ninja.oshima@gmail.com
            </div>
            <div className="detail">
              <span>—</span> 3305-1 Niimura, Matsumoto, Nagano 390-1241
            </div>
          </div>
        </div>

        <div className="form__formelement">
          <FormElement />
        </div>
      </div>
    </>
  );
};

export default Form;
