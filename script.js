/* ==========================================================
   SESIÓN 3: JAVASCRIPT - MANIPULACIÓN DEL DOM Y VALIDACIONES
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Selección de Elementos del DOM
  const form = document.getElementById('formularioRegistro');
  const alertaGlobal = document.getElementById('alertaGlobal');
  const btnSubmit = document.getElementById('btnSubmit');

  // Captura de todos los campos del formulario
  const inputs = {
    nombre: document.getElementById('nombre'),
    correo: document.getElementById('correo'),
    telefono: document.getElementById('telefono'),
    edad: document.getElementById('edad'),
    ciudad: document.getElementById('ciudad'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    terminos: document.getElementById('terminos')
  };

  // 2. Expresiones Regulares (RegEx) para Validaciones
  const regexTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexTelefono = /^[0-9]{10}$/;
  const regexPassword = /^(?=.[A-Za-z])(?=.\d).{8,}$/; // Mínimo 8 caracteres, al menos 1 letra y 1 número

  // 3. Funciones de Feedback Visual (Mostrar/Limpiar Estados)
  
  /**
   * Muestra el estado de error en un campo
   * @param {HTMLElement} input - Elemento input o select
   * @param {string} mensaje - Mensaje explicativo para el usuario
   */
  function mostrarError(input, mensaje) {
    const grupo = input.closest('.form-group');
    const mensajeError = grupo.querySelector('.mensaje-error');
    
    grupo.classList.remove('success');
    grupo.classList.add('error');
    if (mensajeError) {
      mensajeError.textContent = mensaje;
    }
  }

  /**
   * Muestra el estado de éxito en un campo
   * @param {HTMLElement} input - Elemento input o select
   */
  function mostrarExito(input) {
    const grupo = input.closest('.form-group');
    const mensajeError = grupo.querySelector('.mensaje-error');
    
    grupo.classList.remove('error');
    grupo.classList.add('success');
    if (mensajeError) {
      mensajeError.textContent = '';
    }
  }

  /**
   * Limpia las clases de validación de un campo
   * @param {HTMLElement} input - Elemento input o select
   */
  function limpiarEstado(input) {
    const grupo = input.closest('.form-group');
    const mensajeError = grupo.querySelector('.mensaje-error');
    
    grupo.classList.remove('error', 'success');
    if (mensajeError) {
      mensajeError.textContent = '';
    }
  }

  // 4. Lógica de Validación Individual de Cada Campo
  
  function validarNombre() {
    const valor = inputs.nombre.value.trim();
    if (valor === '') {
      mostrarError(inputs.nombre, 'El nombre completo es obligatorio.');
      return false;
    }
    if (valor.length < 3) {
      mostrarError(inputs.nombre, 'El nombre debe tener mínimo 3 caracteres.');
      return false;
    }
    if (!regexTexto.test(valor)) {
      mostrarError(inputs.nombre, 'El nombre solo puede contener letras y espacios.');
      return false;
    }
    mostrarExito(inputs.nombre);
    return true;
  }

  function validarCorreo() {
    const valor = inputs.correo.value.trim();
    if (valor === '') {
      mostrarError(inputs.correo, 'El correo electrónico es obligatorio.');
      return false;
    }
    if (!regexEmail.test(valor)) {
      mostrarError(inputs.correo, 'Ingresa un correo electrónico válido (ej: nombre@correo.com).');
      return false;
    }
    mostrarExito(inputs.correo);
    return true;
  }

  function validarTelefono() {
    const valor = inputs.telefono.value.trim();
    if (valor === '') {
      mostrarError(inputs.telefono, 'El número de teléfono es obligatorio.');
      return false;
    }
    if (!regexTelefono.test(valor)) {
      mostrarError(inputs.telefono, 'Debe contener exactamente 10 dígitos numéricos.');
      return false;
    }
    mostrarExito(inputs.telefono);
    return true;
  }

  function validarEdad() {
    const valor = inputs.edad.value.trim();
    const numero = parseInt(valor, 10);

    if (valor === '') {
      mostrarError(inputs.edad, 'La edad es obligatoria.');
      return false;
    }
    if (isNaN(numero) || numero < 18 || numero > 120) {
      mostrarError(inputs.edad, 'Debes ser mayor de edad (entre 18 y 120 años).');
      return false;
    }
    mostrarExito(inputs.edad);
    return true;
  }

  function validarCiudad() {
    const valor = inputs.ciudad.value;
    if (!valor || valor === '') {
      mostrarError(inputs.ciudad, 'Por favor, selecciona una ciudad.');
      return false;
    }
    mostrarExito(inputs.ciudad);
    return true;
  }

  function validarPassword() {
    const valor = inputs.password.value;
    if (valor === '') {
      mostrarError(inputs.password, 'La contraseña es obligatoria.');
      return false;
    }
    if (valor.length < 8) {
      mostrarError(inputs.password, 'La contraseña debe tener mínimo 8 caracteres.');
      return false;
    }
    if (!regexPassword.test(valor)) {
      mostrarError(inputs.password, 'Debe contener al menos una letra y un número.');
      return false;
    }
    mostrarExito(inputs.password);

    // Si ya hay texto en confirmPassword, sincronizar validación
    if (inputs.confirmPassword.value.length > 0) {
      validarConfirmPassword();
    }
    return true;
  }

  function validarConfirmPassword() {
    const pass = inputs.password.value;
    const confirmPass = inputs.confirmPassword.value;

    if (confirmPass === '') {
      mostrarError(inputs.confirmPassword, 'Debes confirmar la contraseña.');
      return false;
    }
    if (confirmPass !== pass) {
      mostrarError(inputs.confirmPassword, 'Las contraseñas no coinciden.');
      return false;
    }
    mostrarExito(inputs.confirmPassword);
    return true;
  }

  function validarTerminos() {
    if (!inputs.terminos.checked) {
      mostrarError(inputs.terminos, 'Debes aceptar los términos y condiciones.');
      return false;
    }
    mostrarExito(inputs.terminos);
    return true;
  }

  // 5. Asignación de Eventos (input, blur y change)
  
  // Nombre
  inputs.nombre.addEventListener('input', validarNombre);
  inputs.nombre.addEventListener('blur', validarNombre);

  // Correo
  inputs.correo.addEventListener('input', validarCorreo);
  inputs.correo.addEventListener('blur', validarCorreo);

  // Teléfono
  inputs.telefono.addEventListener('input', validarTelefono);
  inputs.telefono.addEventListener('blur', validarTelefono);

  // Edad
  inputs.edad.addEventListener('input', validarEdad);
  inputs.edad.addEventListener('blur', validarEdad);

  // Ciudad (Select)
  inputs.ciudad.addEventListener('change', validarCiudad);
  inputs.ciudad.addEventListener('blur', validarCiudad);

  // Contraseña
  inputs.password.addEventListener('input', validarPassword);
  inputs.password.addEventListener('blur', validarPassword);

  // Confirmar Contraseña
  inputs.confirmPassword.addEventListener('input', validarConfirmPassword);
  inputs.confirmPassword.addEventListener('blur', validarConfirmPassword);

  // Términos (Checkbox)
  inputs.terminos.addEventListener('change', validarTerminos);

  // 6. Validación al Enviar el Formulario (Evento submit)
  form.addEventListener('submit', (evento) => {
    // Evitar el refresco automático de la página
    evento.preventDefault();

    // Ejecución de todas las validaciones
    const esNombreValido = validarNombre();
    const esCorreoValido = validarCorreo();
    const esTelefonoValido = validarTelefono();
    const esEdadValida = validarEdad();
    const esCiudadValida = validarCiudad();
    const esPasswordValido = validarPassword();
    const esConfirmValido = validarConfirmPassword();
    const sonTerminosValidos = validarTerminos();

    const formularioValido = esNombreValido &&
                             esCorreoValido &&
                             esTelefonoValido &&
                             esEdadValida &&
                             esCiudadValida &&
                             esPasswordValido &&
                             esConfirmValido &&
                             sonTerminosValidos;

    if (!formularioValido) {
      // Mostrar alerta de advertencia global
      alertaGlobal.className = 'alerta error';
      alertaGlobal.textContent = '⚠️ Por favor, corrige los campos marcados en rojo antes de continuar.';
      alertaGlobal.classList.remove('oculto');

      // Enfocar automáticamente el primer campo erróneo
      const primerError = form.querySelector('.form-group.error input, .form-group.error select');
      if (primerError) {
        primerError.focus();
      }
      return;
    }

    // Feedback de éxito y simulación de envío
    btnSubmit.disabled = true;
    btnSubmit.querySelector('.btn-texto').textContent = 'Procesando registro...';

    alertaGlobal.className = 'alerta exito';
    alertaGlobal.textContent = 🎉 ¡Registro exitoso, ${inputs.nombre.value.trim()}! Tus datos han sido validados correctamente.;
    alertaGlobal.classList.remove('oculto');

    // Desplazar vista a la alerta
    alertaGlobal.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Restablecer formulario tras 2.5 segundos simulando respuesta de servidor
    setTimeout(() => {
      form.reset();
      Object.values(inputs).forEach(input => limpiarEstado(input));
      btnSubmit.disabled = false;
      btnSubmit.querySelector('.btn-texto').textContent = 'Registrarse';
    }, 2500);
  });

});// Sesión 3: JavaScript y Validaciones
