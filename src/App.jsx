import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// *todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) =>{
    const value = e.target.value
    setEmail(value)
  }

  const handlePasswordd = (e) =>{
    const value = e.target.value
    setPassword(value)
  }

   // Validação do e-mail 
   const isEmailValid = email.includes('@') && email.length > 0; 
   // Validação da senha - deve ter 6 ou mais caracteres e conter um dos caracteres especiais 
   const specialChars = ['@', '*', '#', '&', '%']; 
   const hasSpecialChar = specialChars.some(char => password.includes(char)); // Verifica se a senha contém algum caractere especial 
   const isPasswordValid = password.length >= 6 && hasSpecialChar; // Verifica se a senha tem pelo menos 6 caracteres e contém um caractere especial 
   const isFormValid = isEmailValid && isPasswordValid

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className='errorMessage'></div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={handleEmail}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePasswordd}/>
        </div>

        <div className='button'>
          <button disabled={!isFormValid}>Login</button>
        </div>
      </div>
    </div>
  );
}
