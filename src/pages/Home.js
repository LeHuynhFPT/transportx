import React from "react";
import Navbar from "../components/Navbar";
import banner from "../assets/imgs/banner.png";
import iconapp1 from "../assets/imgs/icon-app1.webp";
import iconapp2 from "../assets/imgs/icon-app2.webp";
import iconapp3 from "../assets/imgs/icon-app3.webp";
import iconapp4 from "../assets/imgs/icon-app4.webp";
import shutterstock  from "../assets/imgs/shutterstock.jpg";
import icnaffordable from "../assets/imgs/icn_affordable.webp";
import icnfast from "../assets/imgs/icn_fast.webp";
import iconmultilocation from "../assets/imgs/icon-multi-location-2.svg";
import aboutus1 from "../assets/imgs/about-us1.png";
import aboutus2 from "../assets/imgs/about-us2.png";
import aboutus3 from "../assets/imgs/about-us3.png";
import aboutus4 from "../assets/imgs/about-us4.png";
import slide1 from "../assets/imgs/slide-1.webp";
import slide2 from "../assets/imgs/slide-2.jpg";
import slide3 from "../assets/imgs/slide-3.jpg";
import slide4 from "../assets/imgs/slide-4.jpg";
import slide5 from "../assets/imgs/slide-5.jpg";
import slide6 from "../assets/imgs/slide-6.jfif";
import slide7 from "../assets/imgs/slide-7.jpg";

function Home() {
    return (
      <section className="container">
        <Navbar/>
        <div className="row" style={{justifyContent: 'center'}}>
          <img src={banner} style={{height: '410px', paddingBottom: '20px', paddingTop: '30px'}} alt=""/>
        </div>
        <section className="section section-policy" style={{width: '100%', marginTop: '50px', marginBottom: '80px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                <div className="box-policy" style={{textAlign: 'center'}}>
                  <div className="ic-policy">
                    <img style={{height: '100px'}} src={iconapp1} alt="Top công ty giao nhận hàng đầu VN"/>
                  </div>
                  <div className="desc-policy">
                    <p>Top công ty giao <br/>nhận hàng đầu VN</p>
                  </div>
                </div>
              </div>             
              <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                <div className="box-policy" style={{textAlign: 'center'}}>
                  <div className="ic-policy">
                    <img style={{height: '100px'}} src={iconapp2} alt="Mạng lưới phủ sóng 100% 63 tỉnh thành"/>
                  </div>
                  <div className="desc-policy">
                    <p>Mạng lưới phủ sóng <br/> 100% 63 tỉnh thành</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                <div className="box-policy" style={{textAlign: 'center'}}>
                  <div className="ic-policy">
                    <img style={{height: '100px'}} src={iconapp3} alt="Giao hàng nhanh Tỷ lệ hoàn hàng thấp"/>
                  </div>
                  <div className="desc-policy">
                    <p>Giao hàng nhanh <br/> Tỷ lệ hoàn hàng thấp</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                <div className="box-policy" style={{textAlign: 'center'}}>
                  <div className="ic-policy">
                    <img style={{height: '100px'}} src={iconapp4} alt="Hệ thống quản lý trực tuyến 24/7"/>
                  </div>
                  <div className="desc-policy">
                    <p>Hệ thống quản lý <br/> trực tuyến 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!-- Slide --> */}
        <div id="carouselExampleControls" class="carousel slide w-50 align-center" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slide1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={slide2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={slide3} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        



        <div className="container" style={{backgroundColor: 'white', display: 'flex'}}>
              <div style={{width: '50%', float: 'left'}}>
                <img style={{width: '95%'}} data-src={shutterstock} alt="shutterstock_713439202_retouch" className=" lazyloaded" src="https://www.lalamove.com/hubfs/shutterstock_713439202_retouch.jpg"/>
              </div>

            <div style={{width: '50%', float: 'left'}}>
            
              <div className="section__sub-title" style={{fontSize: 'larger'}}>
                  Đối tác giao hàng 24/7
              </div>
              <div className="section__title">
                <h2>
                  <p style={{fontSize: '30px'}}>Nhanh chóng. Đơn giản. Giá phải chăng</p>
                </h2>
              </div>
              
              
              <div className="feature-list">
                      
                  <div className="feature-list__item" style={{display: 'flex'}}>
                    <div className="feature-list__icon" style={{float: 'left'}}>
                      <img style={{width: '50px', marginRight: '20px'}} alt="icn_affordable" className=" lazyloaded" src={icnaffordable}/>
                    </div>
                    <div className="feature-list__desc">
                      <div className="feature-list__desc-title">
                        <b>Cước phí thấp và rõ ràng</b>
                      </div>
                      <p>
                        Giá cả rõ ràng và không có chi phí ẩn. Thanh toán trực tiếp qua ứng dụng hoặc thanh toán bằng tiền mặt cho tài xế của bạn.
                      </p>
                    </div>
                  </div>
                      
                  <div className="feature-list__item" style={{display: 'flex'}}>
                    <div className="feature-list__icon" style={{float: 'left'}}>
                      <img style={{width: '50px', marginRight: '20px'}} alt="icn_fast" className=" lazyloaded" src={icnfast}/>
                    </div>
                    <div className="feature-list__desc">
                      <div className="feature-list__desc-title">
                        <b>Xe nào cũng có, đủ loại trọng tải</b>
                      </div>
                      <p>
                        Đa dạng phương tiện vận chuyển giúp đáp ứng mọi yêu cầu giao hàng của bạn bất cứ lúc nào. 
                      </p>
                    </div>
                  </div>
                      
                  <div className="feature-list__item" style={{display: 'flex'}}>
                    <div className="feature-list__icon" style={{float: 'left'}}>
                      <img style={{width: '50px', marginRight: '20px'}} alt="icon-multi-location-2" className=" lazyloaded" src={iconmultilocation}/>
                    </div>
                    <div className="feature-list__desc">
                      <div className="feature-list__desc-title">
                        <b>Giao hàng đường dài</b>
                      </div>
                      <p>
                        Đối tác tài xế chuyên nghiệp đảm bảo giao hàng an toàn và nhanh chóng đến hơn 41 tỉnh, thành.
                      </p>
                    </div>
                  </div>
                
          
              </div>
            </div>
        </div>


        {/* <!-- About Us --> */}
        <div className="row" style={{width: '100%', marginTop: '50px', justifyContent: 'center'}}>
          <div className="container_about">
            <div className="left-column" style={{justifyContent: 'left'}}>
              <h2>Về chúng tôi</h2>
              <p style={{width: '70%'}}>Transport X là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và Internet. Chúng tôi sở hữu mạng lưới rộng khắp nhằm hỗ trợ các hoạt động giao nhận hàng hóa nhanh chóng không chỉ ở nội thành mà còn ở ngoại thành và các vùng xa của các tỉnh thành trong cả nước Việt Nam.</p>
            
              <hr style={{border: 'none',
              height: '2px',
              backgroundColor: 'rgb(249, 191, 56)',
              width: '300px',
              marginTop: '50px'}}/>
            </div>
            <div className="right-column">
              <div className="square">
                <div style={{textAlign: 'center'}}>
                  <img src={aboutus1} alt=""/>
                </div>
                <p style={{textAlign: 'center', fontWeight: '700'}}>Phủ khắp 63 tỉnh thành</p>
              </div>
              <div className="square">
                <div style={{textAlign: 'center'}}>
                  <img src={aboutus2} alt=""/>
                </div>
                <p style={{textAlign: 'center', fontWeight: '700'}}>Vận chuyển nhanh chóng</p>
              </div>
              <div className="square">
                <div style={{textAlign: 'center'}}>
                  <img src={aboutus3} alt=""/>
                </div>
                <p style={{textAlign: 'center', fontWeight: '700'}}>Nhân sự chuyên nghiệp</p>
              </div>
              <div className="square">
                <div style={{textAlign: 'center'}}>
                  <img src={aboutus4} alt=""/>
                </div>
                <p style={{textAlign: 'center', fontWeight: '700'}}>Mạng lưới bưu cục rộng khắp</p>
              </div>
              
            </div>
            
          </div>
          
        </div>  


        {/* <!-- Footer --> */}
        <div className="footer-top" style={{marginTop: '50px', marginBottom: '-20px', paddingBottom: '10px', backgroundColor: 'rgba(255, 236, 212, 0.514)'}}>
          <hr/>
          <div className="container">
            <div className="row" style={{justifyContent: 'center'}}>
              
              <div className="col-md-4 col-sm-6 col-xs-12 col-lg">
                <div className="footer-col">
                  <h4 className="footer-title" style={{textAlign: 'center'}}>
                    TỔNG QUAN
                  </h4>
                  <div className="footer-content toggle-footer">
                    <div className="hr"></div>
                    <ul className="list-group">
                      <li className="list-group-item">Công ty Transport X giao nhận đầu tiên tại Việt Nam được thành lập với sứ mệnh phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác Thương mại điện tử trên toàn quốc.</li>
                      <li className="list-group-item">Trụ sở chính: Hà Nội, Việt Nam</li>
                      <li className="list-group-item">Email: chamsockhachhangprovip@tpx.vn</li>
                      <li className="list-group-item">Hotline: 1900 6969</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              
              <div className="col-md-2 col-sm-6 col-xs-12 col-lg">
                <div className="footer-col footer-link">
                  <h4 className="footer-title"  style={{textAlign: 'center'}}>
                    VỀ TransportX
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul className="list-group">
                      <li className="list-group-item">Giới thiệu</li>
                      <li className="list-group-item">Tuyển dụng</li>
                      <li className="list-group-item">Liên hệ</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              
              <div className="col-md-3 col-sm-6 col-xs-12 col-lg">
                <div className="footer-col footer-link">
                  <h4 className="footer-title"  style={{textAlign: 'center'}}>
                    THÔNG TIN DỊCH VỤ
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul className="list-group">
                      <li className="list-group-item"><a href="#taodon">Tạo đơn</a></li>
                      <li className="list-group-item"><a href="#tuyen">Tuyến vận chuyển</a></li>
                      <li className="list-group-item"><a href="#ct">Chú thích</a></li>
                      <li className="list-group-item"><a href="#cam">Hàng hoá không vận chuyển</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              
              <div className="col-md-3 col-sm-6 col-xs-12 col-lg">
                <div className="footer-col footer-link">
                  <h4 className="footer-title"  style={{textAlign: 'center'}}>
                    CHÍNH SÁCH
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul className="list-group">
                      <li className="list-group-item">Chính sách bồi thường</li>
                      <li className="list-group-item">Chính sách khiếu nại</li>
                      <li className="list-group-item">Điều khoản sử dụng</li>
                      <li className="list-group-item">Chính sách bảo mật</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>


        <footer className="bg-dark text-white mt-4 p-3 text-center">
          &copy; 2023 TransportX. All rights reserved.
        </footer>
      </section>
    );
}

export default Home;