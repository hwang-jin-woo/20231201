import styled from "styled-components"
import "./css/faq.css";
import { useNavigate } from "react-router-dom";

import { useState,useEffect } from "react";
import Login from "./Login";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`

export function FAQ(){
  const navigate = useNavigate();

  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };


  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('isLogin')) {
      setIsLogin(true);
    }
  },[]);
  return<>
      <Container>    
      <main className="main">
            <section >
            <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
            </section>
        </main>      
    </Container>  
  </>
}