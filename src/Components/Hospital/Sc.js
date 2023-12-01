import styled from "styled-components"
import "./css/sc.css";
import {useNavigate } from "react-router-dom";
import sc1 from "./images/sc1.jpg"
import sc2 from "./images/sc2.jpg"
import sc3 from "./images/sc3.jpg"
import { useState,useRef,useEffect } from "react";
import Login from "./Login";

const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`


export function Sc(){
  const navigate = useNavigate();
  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };

  const [modalOpen5, setModalOpen5] = useState(false);
  const [modalOpen6, setModalOpen6] = useState(false);
  const [modalOpen7, setModalOpen7] = useState(false);
  const modalBackground = useRef();

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
              <section className="sc-section">
              <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
                    <div>
                      <ul className="buttons">        
                      <li>
                              <button className="button" onClick={() => setModalOpen5(true)}>
                                <h2>내가  가본병원</h2>
                              </button>  
                            {
                              modalOpen5 &&
                              <div className="modal-container5" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen5(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen5(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>         
                      <li>
                              <button className="button" onClick={() => setModalOpen6(true)}>
                                <h2>가까운 병원</h2>
                              </button>  
                            {
                              modalOpen6 &&
                              <div className="modal-container6" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen5(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen6(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>         
                      <li>
                              <button className="button" onClick={() => setModalOpen7(true)}>
                                <h2>인기 병원</h2>
                              </button>  
                            {
                              modalOpen7 &&
                              <div className="modal-container7" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen5(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen7(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                        </ul>
                    </div>
              </section>
          </main>
          <div className="scimage">
            <img className="scimage1"src={sc1} alt="sc"  />
            <img className="scimage2"src={sc2}  alt="sc"  />
            <img className="scimage3"src={sc3}  alt="sc"  />
          </div>
    </Container>  
  </>
}