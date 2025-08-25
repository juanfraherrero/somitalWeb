"use client";
import { useState } from "react";

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

    // Redireccionar al usuario a WhatsApp con el mensaje predefinido
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WTP_NUMBER}?text=${wtpMessage}`,
      "_blank"
    );

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
    <form onSubmit={handleSubmit} className="w-full mx-auto rounded font-bold">
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
          className={`w-full rounded border-foreground border-2 text-black font-normal ${errors.firstName ? "border-red-500" : "focus:ring-indigo-500"
            }`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs mt-1">Nombre es requerido</p>
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
          className={`w-full rounded border-foreground border-2 text-black font-normal ${errors.lastName ? "border-red-500" : "focus:ring-indigo-500"
            }`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs mt-1">Apellido es requerido</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-1">
          Contenido o Pregunta*
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          onBlur={() => handleBlur("content")}
          rows="4"
          required
          className={`w-full rounded border-foreground border-2 text-black font-normal ${errors.content ? "border-red-500" : "focus:ring-indigo-500"
            }`}
        ></textarea>
        {errors.content && (
          <p className="text-red-500 text-xs mt-1">Mensaje es requerido</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-primary text-background font-bold py-2 px-4 rounded hover:bg-primary/80 transition duration-300"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
