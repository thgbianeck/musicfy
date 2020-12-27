import React from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setSelectedForm } = props;
  //   const [formData, setFormData] = useState(defaultValueForm());
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [formError, setFormError] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    console.log("Formulario enviado");
  };

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis.</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            // onChange={}
            // error={}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="eye"
            // onChange={}
            // error={}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="Como deríamos llamarte?"
            icon="user circle outline"
            // onChange={}
            // error={}
          />
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>
      <div className="register-form__options">
        <p onClick={() => setSelectedForm(null)}>Volver</p>
        <p>
          Ya tiénes Musicfy?{" "}
          <span onClick={() => setSelectedForm("login")}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
}
