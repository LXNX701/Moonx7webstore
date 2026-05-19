// EDITAR AQUÍ CON TUS CREDENCIALES DE SUPABASE
const SUPABASE_URL = 'https://qjkitiblzilzlbhcdwis.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqa2l0aWJsemlsemxiaGNkd2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDQzNjksImV4cCI6MjA5NDc4MDM2OX0.0HsFl5v9IpqBqB5yv0R25JiCsydcCv1JL58RRHL5ros';

// Inicializar cliente de Supabase
const { createClient } = supabase;
window.m7Supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ MoonX7: Cliente de Supabase inicializado');
