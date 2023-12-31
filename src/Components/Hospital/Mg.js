import styled from "styled-components"
import "./css/mg.css";
import { Link,useNavigate } from "react-router-dom";
import mg1 from "./images/mg1.jpg"
import mg2 from "./images/mg2.jpg"
import mg3 from "./images/mg3.png"
import mg4 from "./images/mg4.jpg"

import { useState,useEffect } from "react";
import Login from "./Login";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`

export function Mg(){
  const navigate = useNavigate();

  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
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
              <section className="mg-section">
              <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
                  <div>
                    <ul className="buttons">        
                      <li><button className="button"onClick={() => handleOpenNewTab("https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000")}><h2>병원내역 조회</h2></button></li>
                      <li><button className="button"onClick= {() => handleOpenNewTab("https://www.kahp.or.kr/ho/medi/intro.do")}><h2>건강 검진</h2></button></li>
                      <li><Link to={"/BmiMeasurement"}><button className="button"><h2>BMI 측정</h2></button></Link></li>   
                      </ul>
                  </div>
            </section>
        </main>      
          <div className="mgimage">
            <img className="mgimage1"src={mg1} alt="sc"  />
            <img className="mgimage2"src={mg2}  alt="sc"  />
            <img className="mgimage3"src={mg3}  alt="sc"  />
            <img className="mgimage4"src={mg4}  alt="sc"  />
          </div>
    </Container>  
  </>
}