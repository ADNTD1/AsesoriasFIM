import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // ¡Usar la clave de servicio en el backend!
const supabase = createClient(supabaseUrl, supabaseKey);

async function verificarCredenciales(numeroCuentaIngresado, nipIngresado) {
  try {
    const { data: cuenta, error: errorCuenta } = await supabase
      .from('Usuario')
      .select('nip') // Ahora seleccionamos la columna 'nip' (que contiene el hash)
      .eq('nocuenta', numeroCuentaIngresado) // Buscamos por 'nocuenta'
      .single(); // Esperamos un solo resultado

    if (errorCuenta) {
      console.error('Error al buscar la cuenta:', errorCuenta);
      return { error: 'Error al verificar las credenciales.' };
    }

    if (!cuenta) {
      return { error: 'Número de cuenta no encontrado.' };
    }

    const nipHashAlmacenado = cuenta.nip; // El hash está en la columna 'nip'

    // Comparar el NIP ingresado (sin hashear) con el hash almacenado
    const esValido = await bcrypt.compare(nipIngresado, nipHashAlmacenado);

    if (esValido) {
      return { success: true };
    } else {
      return { error: 'NIP incorrecto.' };
    }

  } catch (error) {
    console.error('Error inesperado al verificar las credenciales:', error);
    return { error: 'Error inesperado al verificar las credenciales.' };
  }
}

// Ejemplo de cómo usar la función (esto sería en tu ruta de API)
// const resultado = await verificarCredenciales(req.body.nocuenta, req.body.nip);