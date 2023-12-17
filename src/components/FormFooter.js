'use client'
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    content: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    content: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de campos requeridos
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone || !content) {
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
        email: !email,
        phone: !phone,
        content: !content,
      });
      return; // Detener el envío si faltan campos requeridos
    }

    console.log(formData);

    // Limpiar los valores después del envío
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        content: '',
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
        <label htmlFor="firstName" className="block mb-1 ">Nombre*</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={() => handleBlur('firstName')}
          required
          className={`w-full rounded border-white border-2 text-black font-normal ${errors.firstName? "border-red-500":"focus:ring-indigo-500"}`}
        />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">Nombre es requerido</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1">Apellido*</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={() => handleBlur('lastName')}
          required
          className={`w-full rounded border-white border-2 text-black font-normal ${errors.lastName? "border-red-500":"focus:ring-indigo-500"}`}
        />
        {errors.lastName && <p className="text-red-500 text-xs mt-1">Apellido es requerido</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Correo electrónico*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          className={`w-full rounded border-white border-2 text-black font-normal ${errors.email? "border-red-500":"focus:ring-indigo-500"}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">Mail es requerido</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">Teléfono/WhatsApp*</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur('phone')}
          className={`w-full rounded border-white border-2 text-black font-normal ${errors.phone? "border-red-500":"focus:ring-indigo-500"}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">WhatsApp es requerido</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-1">Contenido o Pregunta*</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          onBlur={() => handleBlur('content')}
          rows="4"
          required
          className={`w-full rounded border-white border-2 text-black font-normal ${errors.content? "border-red-500":"focus:ring-indigo-500"}`}
        ></textarea>
        {errors.content && <p className="text-red-500 text-xs mt-1">Mensaje es requerido</p>}
      </div>
      <button type="submit" className="bg-color-secondary/[0.8] text-color-primary font-bold py-2 px-4 rounded hover:bg-color-secondary transition duration-300">Enviar</button>
    </form>
  );
};

export default ContactForm;
