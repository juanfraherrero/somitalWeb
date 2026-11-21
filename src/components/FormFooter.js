"use client";
import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    content: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos requeridos
    const { firstName, lastName, content } = formData;
    if (!firstName || !lastName || !content) {
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
        content: !content,
      });
      return; // Detener el envío si faltan campos requeridos
    }

    // Construir el mensaje a enviar por WhatsApp
    const wtpMessage = `Hola buenas soy ${firstName} ${lastName}:\n ${content}`;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", label: "formulario_footer" });

    // Redireccionar al usuario a WhatsApp con el mensaje predefinido
    window.open(whatsappLink(wtpMessage), "_blank");

    // Limpiar los valores después del envío
    setFormData({
      firstName: "",
      lastName: "",
      content: "",
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full text-sm font-bold text-white">
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1 ">
          Nombre*
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={() => handleBlur("firstName")}
          required
          className={`w-full rounded border-0 bg-white/95 px-3 py-2 text-foreground font-normal focus:outline-none focus:ring-2 ${errors.firstName ? "ring-2 ring-red-400" : "focus:ring-primary"
            }`}
        />
        {errors.firstName && (
          <p className="text-red-300 text-xs mt-1">Nombre es requerido</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1">
          Apellido*
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={() => handleBlur("lastName")}
          required
          className={`w-full rounded border-0 bg-white/95 px-3 py-2 text-foreground font-normal focus:outline-none focus:ring-2 ${errors.lastName ? "ring-2 ring-red-400" : "focus:ring-primary"
            }`}
        />
        {errors.lastName && (
          <p className="text-red-300 text-xs mt-1">Apellido es requerido</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-1">
          Tu consulta*
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          onBlur={() => handleBlur("content")}
          rows="4"
          required
          className={`w-full rounded border-0 bg-white/95 px-3 py-2 text-foreground font-normal focus:outline-none focus:ring-2 ${errors.content ? "ring-2 ring-red-400" : "focus:ring-primary"
            }`}
        ></textarea>
        {errors.content && (
          <p className="text-red-300 text-xs mt-1">Mensaje es requerido</p>
        )}
      </div>
      <button
        type="submit"
        className="btn-whatsapp w-full"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
};

export default ContactForm;
