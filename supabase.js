// ============================================
// MOONX7 STORE - CONFIGURACIÓN DE SUPABASE
// ============================================

// EDITAR AQUÍ CON TUS CREDENCIALES DE SUPABASE
const SUPABASE_URL = 'https://xyadklogvxmzhoyxgmfu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5YWRrbG9ndnhtemhveXhnbWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNTM3NTAsImV4cCI6MjA5NDcyOTc1MH0.rvllhbY6ktIDKGJNCTJqjkXhaYJV8q7mHEsflxrvOv0';

// Inicializar cliente de Supabase
const { createClient } = supabase;
window.m7Supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ MoonX7: Cliente de Supabase inicializado');