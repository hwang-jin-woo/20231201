import styled from "styled-components"
import "./css/home.css";
import {  useNavigate} from "react-router-dom"
import { useState,useRef,useEffect } from "react";
import Login from "./Login";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`


export function Home(){
  const navigate = useNavigate();
  

  const pageClick = () => {
    navigate('/Mypage');
  };
  const mbClick = () => {
    navigate('/Mb');
};

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const modalBackground = useRef();
  
  const [test, setTest] = useState('');
  
  function testLoading() {
    // 서버의 API를 호출하여 데이터 가져오기
    fetch('http://localhost:3301/api/test') // 백엔드 서버 주소를 사용
    .then((response) => response.json())
    .then((data) => {
      setTest(data);
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    testLoading();
  }, [test]);
  
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
              <section className="section">
                    <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
                    <div>
                      <ul className="buttons">        
                          <li>
                              <button className="button" onClick={() => setModalOpen(true)}>
                                <h2>예약 하기</h2>
                              </button>  
                            {
                              modalOpen &&
                              <div className="modal-container" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen(false);
                                }
                              }}>
                                <div className="modal-content">
                                <div className="tap-panels">
                                  <div className="tab-panel">
                                    <div className="date">날짜:<input type="date" /></div>
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <select name="nation">
                                              <option value="">병원을 선택하세요.</option>
                                              <optgroup label="병원">
                                                <option value="medc" >내과</option>
                                                <option value="surg">외과</option>
                                                <option value="dent">치과</option>
                                              </optgroup>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div><input type="text" /></div>
                                    <div>예약하기<input type="submit" value="Submit" /></div>
                                  </div>
                                </div>
                                  <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen1(true)}>
                                <h2>예약 확인</h2>
                              </button>  
                            {
                              modalOpen1 &&
                              <div className="modal-container1" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen1(false);
                                }
                              }}>
                                {test && test.length > 0 &&
                                  <ul  style={{ zIndex: 10000 }} >
                                    <li>no:{test[0].no}</li>
                                    <li>title:{test[0].title}</li>
                                    <li>content:{test[0].content}</li>
                                    <li>type:{test[0].type}</li>
                                  </ul>
                                  }
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen1(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen2(true)}>
                                <h2>예약자 현황</h2>
                              </button>  
                            {
                              modalOpen2 &&
                              <div className="modal-container2" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen2(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen2(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen3(true)}>
                                <h2>병원 정보</h2>
                              </button>  
                            {
                              modalOpen3 &&
                              <div className="modal-container3" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen3(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen3(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>        
                        </ul>
                    </div>
              </section>
          </main>
    </Container>  
  </>
}