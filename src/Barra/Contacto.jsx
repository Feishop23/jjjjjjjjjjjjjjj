import React from "react";
import { Formulario } from "./Formulario";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
      
export const Contacto = ({activador}) => {
  
  return (
    <>
      <div className="Contacto">
        <div className="contactoChild">
          <div className="FormularioP">{<Formulario activador={activador}/> }</div>

          <div className="RD">
            <li>
              <a target='_blank' href="https://www.facebook.com/feiberth.portillo.9/">
                <FaFacebook className="Facebook" />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://github.com/Feishop23">
                <FaGithub className="Github" />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.instagram.com/feiberth.portilla/">
                <FaInstagram className="Instagram" />
              </a>
            </li>
            <li>
              <a target='_blank' href="https://twitter.com/FeiberthPorti">
                <FaTwitter className="Twitter" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
