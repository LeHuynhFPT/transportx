import React, { useState,useEffect } from "react";
import { getProvince,getDistrict,getWard } from "../services/localtion.service";
import "../assets/css/pagecss.css";
import banner from "../assets/imgs/banner.png";
import giaohang from "../assets/imgs/Giao hàng.png";
import cam from "../assets/imgs/cam.png";
import getGood from "../services/goods.service";
import getWeight from "../services/weight.service";
import getInsurance from "../services/insurance.service";
import Sidebar from "../components/Sidebar";


function TaoDon(prop) {
    const [province,setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [wards, setWard] = useState([]);
    const [good,setGood] = useState([]);
    const [weight,setWeight] = useState([]);
    const [insurance,setInsurance] = useState([]);
    const findProvince = async ()=>{
      const provinces = await getProvince();
      setProvince(provinces);
    }
    useEffect(()=>{
        findProvince();
    },[]);
    const handleSelectProvince = async (event) => {
      const selectedValue = event.target.value;
      const foundProvince = province.find(e => e.provinceName === selectedValue);
      const districts = await getDistrict(foundProvince.provinceId);
      setDistrict(districts);
      console.log(districts);
    };
    const handleSelectDistrict = async (event) => {
      const selectedValue = event.target.value;
      const foundDistrict = district.find(e => e.districtName === selectedValue);
      const wards = await getWard(foundDistrict.districtId);
      setWard(wards);

    };
    const getGoods = async ()=>{
      const goods = await getGood();
      setGood(goods);
    }
    useEffect(()=>{
      getGoods();
    },[])
    const getWeights = async ()=>{
      const weight = await getWeight();
      setWeight(weight);
    }
    useEffect(()=>{
      getWeights();
    },[])
    const getInsurances = async ()=>{
      const insurance = await getInsurance();
      setInsurance(insurance);
    }
    useEffect(()=>{
      getInsurances();
    },[])

    return(
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
    <a style={{color:  'rgb(249, 191, 56)'}} className="navbar-brand" href="./Home.html">Transportation Booking</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div style={{paddingRight: '100px'}} className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li style={{paddingLeft: '60px'}} className="nav-item">
          <a className="nav-link" href="./Home.html">Trang chủ</a>
        </li>
        <li style={{paddingLeft: '60px'}} className="nav-item active">
          <a className="nav-link" href="#">Tạo đơn</a>
        </li>
        <li style={{paddingLeft: '60px'}} className="nav-item">
          <a className="nav-link" href="#">Tin tức</a>
        </li>
        <li style={{paddingLeft: '60px'}} className="nav-item">
          <a className="nav-link" href="#">Tra cứu đơn hàng</a>
        </li>
        <li style={{paddingLeft: '60px'}} className="nav-item">
          <a className="nav-link" href="#">Đăng kí</a>
        </li>
        <li style={{paddingLeft: '60px'}} className="nav-item">
          <a className="nav-link" href="#">Đăng nhập</a>
        </li>
        <li style={{paddingLeft: '60px'}} className="nav-item">
          <a className="nav-link" href="#">Admin</a>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
  </nav>

  <section className="container">
    <div className="row" style={{justifyContent: 'center'}}>
        <img src={banner} style={{height: '410px', paddingBottom: '20px', paddingTop: '30px'}} alt=""/>
    </div> 

    

    <div className="row" style={{marginTop: '20px', justifyContent: 'right'}}>
        <div className="col-md-6">
            <img style={{height: '1022px'}} src={giaohang} alt=""/>
        </div>
        <div className="col-md-6">
            <form id="taodon" style={{backgroundColor: 'rgb(249, 191, 56)', borderRadius: '5px', padding: '20px', marginBottom: '50px'}}>
                <h1 style={{textAlign: 'center'}}>Thông tin người gửi</h1>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Họ và tên"/>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input type="tel" className="form-control" id="tel" placeholder="Số điện thoại"/>
                  </div>
                </div>
                {/* <div className="form-row"> */}
                  <div className="form-group col-md-4">
                      <label for="inputState">Tỉnh/Thành phố</label>
                      <select id="inputState" onChange={handleSelectProvince} className="form-control">
                        <option>Thành phố...</option>
                        {
                          province?.map(item => <option>{item.provinceName}</option>)
                        }
                      </select>
                    </div>

                  <div className="form-group col-md-4">
                    <label for="inputState">Quận/Huyện</label>
                    <select id="inputState" onChange={handleSelectDistrict} className="form-control">
                    <option>Quận Huyện...</option>
                      {
                        district?.map(item  => <option>{item.districtName}</option>)
                      }
                    </select>
                  </div>
                  
                  <div className="form-group col-md-4">
                    <label for="inputState">Phường/Xã</label>
                    <select id="inputState" className="form-control">
                    <option>Phường Xã...</option>
                      {
                        wards?.map(item  => <option>{item.wardName}</option>)
                      }
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Địa chỉ (Số nhà, tên toà nhà, tên đường, khu dân cư,...)"/>
                    </div>
                    <div className="form-group col-md-6">
                        <select id="inputState" className="form-control">
                            {
                              good?.map(item  => <option>{item.goodsName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <select id="inputState" className="form-control">
                            <option selected>Trọng lượng</option>
                            {
                              weight?.map(item  => <option>{item.weightName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                      <select id="inputState" className="form-control">
                          <option selected>Giá trị đơn hàng</option>
                          {
                              insurance?.map(item  => <option>{item.insuranceName}</option>)
                            }
                      </select>
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="name" placeholder="Số tiền thu hộ VNĐ"/>
                </div>

                    <div className=" form-group col-md-12">
                      <textarea className="form-control" name="" id="" rows="3" placeholder="Ghi chú"></textarea>
                    </div>

                    <h1 style={{textAlign: 'center', width: '100%'}}>Thông tin người nhận</h1>
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" id="name" placeholder="Họ và tên"/>
                    </div>
                      <div className="form-group  col-md-12">
                        <input type="tel" className="form-control" id="tel" placeholder="Số điện thoại"/>
                      </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="inputState">Tỉnh/Thành phố</label>
                            <select id="inputState" onChange={handleSelectProvince} className="form-control">
                              <option>Thành phố...</option>
                              {
                                province?.map(item => <option>{item.provinceName}</option>)
                              }
                            </select>
                          </div>
                      <div className="form-group col-md-4">
                        <label for="inputState">Quận/Huyện</label>
                        <select id="inputState" onChange={handleSelectDistrict} className="form-control">
                          <option>Quận Huyện...</option>
                          {
                            district?.map(item  => <option>{item.districtName}</option>)
                          }
                        </select>
                      </div>
                      <div className="form-group col-md-4">
                        <label for="inputState">Phường</label>
                        <select id="inputState" className="form-control">
                          <option>Phường Xã...</option>
                          {
                            wards?.map(item  => <option>{item.wardName}</option>)
                          }
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Địa chỉ (Số nhà, tên toà nhà, tên đường, khu dân cư,...)"/>
                        </div>
                     
                    
                </div>
                <div className="form-row col-md-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" style={{width: '40%'}}>Tạo đơn</button>
                </div>
                
              </form>
        </div>
        
    </div>


    <div className="row col-12" style={{justifyContent: 'center', marginLeft: '0'}}>
        
        <table id="tuyen" className="modern-table" style={{width: '100%', marginBottom: '50px'}}>
            <thead>
              <tr>
                <th style={{fontWeight: 'bold'}}>Tuyến</th>
                <th style={{fontWeight: 'bold'}}>Gói dịch vụ</th>
                <th style={{fontWeight: 'bold'}}>Trọng lượng</th>
                <th style={{fontWeight: 'bold'}}>Giá thành</th>
                
                <th style={{fontWeight: 'bold'}}>Thời gian giao</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nội tỉnh (Trừ Hà Nội, Tp.Hồ Chí Minh)</td>
                <td>Đường bộ</td>
                <td>Loại 1</td>
                <td>20.000</td>
                <td>1 ngày</td>
              </tr>
              <tr>
                <td>Nội tỉnh (Hà Nội, Tp.Hồ Chí Minh)</td>
                <td>Đường bộ</td>
                <td>Loại 1</td>
                <td>15.000</td>
                <td>1 ngày</td>
              </tr>
              <tr>
                <td>Nội vùng</td>
                <td>Đường bộ</td>
                <td>Loại 1</td>
                <td>25.000</td>
                <td>1-2 ngày</td>
              </tr>
              <tr>
                <td>Nội vùng tỉnh</td>
                <td>Đường bộ</td>
                <td>Loại 1</td>
                <td>25.000</td>
                <td>1-2 ngày</td>
              </tr>
              <tr>
                <td>Liên vùng</td>
                <td>Đường bộ</td>
                <td>Loại 1</td>
                <td>30.000</td>
                <td>2-3 ngày</td>
              </tr>
              <tr>
                <td>Liên vùng tỉnh</td>
                <td>Đường bộ</td>
                <td>Loại 1</td>
                <td>30.000</td>
                <td>2-3 ngày</td>
              </tr>
            </tbody>
          </table>
          <div style={{width: '100%'}}>
            <h2 id="ct">Chú thích</h2>
            <table  style={{width: '100%', marginBottom: '50px'}}>
              <tr>
                <th className="col-md-3" style={{textAlign: 'center'}}>Phân loại trọng lượng</th>
                <th style={{paddingLeft: '10px'}}>
                    Loại 2: thêm 5.000 so với loại 1<br/>
                    Loại 3: thêm 10.000 so với loại 1<br/>
                    Loại 4: thêm 15.000 so với loại 1
                </th>
            </tr>
            </table>
            
            <table className="modern-table">
                <tr>
                    <th>Định nghĩa phân vùng</th>
                    <th>Vùng 1: Thanh Hoá trở ra các tỉnh miền Bắc<br/>
                        Vùng 2: Từ Quảng Ngãi ra tới Nghệ An<br/>
                        Vùng 3: Từ Bình Định ra tới các tỉnh miền Nam
                    </th>
                </tr>
                <tr>
                  <th style={{fontWeight: 'bold'}}>Tuyến</th>
                  <th style={{fontWeight: 'bold'}}>Lộ trình</th>
                </tr>
                <tr>
                  <td>Nội tỉnh</td>
                  <td>
                    Hà Nội -  Hà Nội<br/>
                    Đà Nẵng - Đà Nẵng<br/>
                    Tp. Hồ Chí Minh - Tp. Hồ Chí Minh<br/>
                    Tỉnh X vùng 1 - Tỉnh X vùng 1<br/>
                    Tỉnh X vùng 2 - Tỉnh X vùng 2<br/>
                    Tỉnh X vùng 3 - Tỉnh X vùng 3
                  </td>
                </tr>
                <tr>
                  <td>Nội vùng</td>
                  <td>
                    Hà Nội - Vùng 1<br/>
                    Đà Nẵng - Vùng 2<br/>
                    Tp. Hồ Chí Minh - Vùng 3
                  </td>
                </tr>
                <tr>
                  <td>Nội vùng tỉnh</td>
                  <td>
                    Vùng 1 - Vùng 1<br/>
                    Vùng 2 - Vùng 2<br/>
                    Vùng 3 - Vùng 3
                  </td>
                </tr>
                <tr>
                  <td>Liên vùng</td>
                  <td>
                    Hà Nội - Vùng 2 / vùng3<br/>
                    Đà Nẵng - Vùng 1 / vùng 3<br/>
                    Tp. Hồ Chí Minh - Vùng 1 / vùng 2
                  </td>
                </tr>
                <tr>
                  <td>Liên vùng tỉnh</td>
                  <td>
                    Vùng 1 - Vùng 2 / vùng 3<br/>
                    Vùng 2 - Vùng 1 / vùng 3<br/>
                    Vùng - Vùng 1 / vùng 2
                  </td>
                </tr>
            </table>

            <table className="modern-table" style={{marginTop: '50px'}}>
              <tr>
                <th className="col-3" style={{fontWeight: 'bold'}}>Loại dịch vụ</th>
                <th className="col-3" style={{fontWeight: 'bold'}}>Phí dịch vụ</th>
                <th className="col-6" style={{fontWeight: 'bold'}}>Lưu ý</th>
              </tr>
              <tr>
                <td>Lấy hàng ở huyện/xã</td>
                <td>10.000</td>
                <td>Khách hàng sẽ được nhân viên đến tận nhà lấy hàng.</td>
              </tr>
              <tr>
                <td>Lấy hàng nội thành</td>
                <td>5.000</td>
                <td>Khách hàng sẽ được nhân viên đến tận nhà lấy hàng.<br/>
                    Vui lòng liên hệ nhân viên khi có yêu cầu đặc biệt
                </td>
              </tr>
              <tr>
                <td>Giao hàng huyện/xã</td>
                <td>10.000</td>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate consequuntur temporibus quaerat magni.</td>
              </tr>
              <tr>
                <td>Giao hàng nội thành</td>
                <td>5.000</td>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate consequuntur temporibus quaerat magni.</td>
              </tr>
              <tr>
                <td>Giao lại</td>
                <td>Miễn phí 2 lần giao đầu tiên<br/>
                    10.000/lần giao lại
                </td>
                <td>Sau 2 lần giao không thành công, đơn hàng ở trạng thái chờ trả hàng trong vòng 72 tiếng<br/>
                    Nếu yêu cầu giao lại, người nhận chịu phí 10.000/lần giao lại
                </td>
              </tr>
              <tr>
                <td>Hoàn hàng/trả hàng</td>
                <td>10.000</td>
                <td>Thời gian nhận lại hàng 3-5 ngày</td>
              </tr>
              
            </table>
            
          </div>
          <div>
            <img id="cam" style={{width: '100%', paddingTop: '30px'}} src={cam} alt=""/>
          </div>
          
    </div>


  </section>

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
  <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
        </section>
    );
}

export default TaoDon;