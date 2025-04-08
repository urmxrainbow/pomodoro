import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://iagqrjlmjgyoxsmuobqh.supabase.co',           // your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhZ3Fyamxtamd5b3hzbXVvYnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTY0MjQsImV4cCI6MjA1OTY3MjQyNH0.psvtA5wAt1IPKfK8Td744D24-oDCvR4n3QXk9iaXtcI'                             // your public anon key
);

window.signUp = async function () {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
  
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Check your email to confirm your signup.');
    }
  };
  
  window.signIn = async function () {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
  
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Logged in!');
      window.location.href = 'index.html';
    }
  };
  
  window.signOut = async function () {
    await supabase.auth.signOut();
    alert('Signed out');
  };
  
  window.loginWithGoogle = async function () {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      alert(error.message);
    }
  };