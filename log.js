import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://iagqrjlmjgyoxsmuobqh.supabase.co',           // your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhZ3Fyamxtamd5b3hzbXVvYnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTY0MjQsImV4cCI6MjA1OTY3MjQyNH0.psvtA5wAt1IPKfK8Td744D24-oDCvR4n3QXk9iaXtcI'                             // your public anon key
);


await supabase.auth.signInWithOAuth({ provider: 'google' });

async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    alert('Sign up error: ' + error.message);
  } else {
    alert('Check your email to confirm sign up!');
  }
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    alert('Login error: ' + error.message);
  } else {
    alert('Logged in!');
    console.log(data);
  }
}

async function signOut() {
  await supabase.auth.signOut();
  alert('Logged out');
}

async function loginWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    alert('Google login failed: ' + error.message);
  }
}