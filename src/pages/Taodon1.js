import React, { useState,useEffect } from "react";
import { getProvince,getDistrict,getWard } from "../services/localtion.service";
import "../assets/css/pagecss.css";
import giaohang from "../assets/imgs/Giao hàng.png";
import getGood from "../services/goods.service";
import getWeight from "../services/weight.service";
import getInsurance from "../services/insurance.service";
import Sidebar from "../components/Sidebar";
import "../assets/css/Taodon1.css";
import sendDataToAPI from "../services/order.service";
import { useNavigate } from 'react-router-dom';

function Taodon1(prop) {
    const userData = JSON.parse(localStorage.getItem('state'));
    const [provinces,setProvince] = useState([]);
    const [districts, setDistrict] = useState([]);
    const [wards, setWard] = useState([]);
    const [good,setGood] = useState([]);
    const [weight,setWeight] = useState([]);
    const [insurance,setInsurance] = useState([]);
    const [selectedGood, setSelectedGood] = useState('');
    const history = useNavigate();
    const [shippingFee, setShippingFee] = useState(0);
    const [formData, setFormData] = useState({
        senderName: "", 
        senderPhone: "",
        senderAddress: "",
        receiverName: "",
        receiverPhone: "",
        receiverAddress: "",
        note: "",
        proceeds: 0,
        receiverProvinceId: 0,
        receiverWardId: 0,
        receiverDistrictId: 0,
        senderProvinceId: 0,
        senderDistrictId: 0,
        senderWardId: 0,
        goodsId: 0,
        weightId: 0,
        insuranceId: 0,
        userId: userData.userId
      });
    const findProvince = async ()=>{
      const provinces = await getProvince();
      setProvince(provinces);
    }
    useEffect(()=>{
        findProvince();
    },[]);
    const handleSelectProvince = async (event) => {
        const selectedValue = event.target.value; 
        const foundProvince = provinces.find(e => e.provinceId = selectedValue);
        const districts = await getDistrict(foundProvince.provinceId);
        setDistrict(districts);
    };
    const handleSelectDistrict = async (event) => {
      const selectedValue = event.target.value;
      const foundDistrict = districts.find(e => e.districtId = selectedValue);
      const wards = await getWard(foundDistrict.districtId);
      setWard(wards);
    };
    //Goods
    const getGoods = async ()=>{
      const goods = await getGood();
      setGood(goods);
    }
    useEffect(()=>{
      getGoods();
    },[])
    const getGoodsId = (name) => {
        const u = good.find(e => e.goodsName === name);
        return u.goodsId;
    }
    //Weight
    const getWeights = async ()=>{
      const weight = await getWeight();
      setWeight(weight);
    }
    useEffect(()=>{
      getWeights();
    },[])
    const getWeightId = (name) => {
        const u = weight.find(e => e.weightName === name);
        return u.weightId;
    }
    //insurance
    const getInsurances = async ()=>{
      const insurance = await getInsurance();
      setInsurance(insurance);
    }
    useEffect(()=>{
      getInsurances();
    },[])
    const getInsuranceId = (name) => {
        const u = insurance.find(e => e.insuranceName === name);
        return u.insuranceId;
    }

    const handleChange = (e,callback) => {
        formData[e.target.name] =  e.target.value;
        setFormData(formData);
        console.log(formData);
        if (typeof callback === 'function') {
            callback(e);
        }
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = {
            senderName: formData.senderName, 
            senderPhone: formData.senderPhone,
            senderAddress: formData.senderAddress,
            receiverName: formData.receiverName,
            receiverPhone: formData.receiverPhone,
            receiverAddress: formData.receiverAddress,
            note: formData.note,
            proceeds: parseInt(formData.proceeds, 10),
            receiverProvinceId: parseInt(formData.receiverProvinceId, 10),
            receiverWardId: parseInt(formData.receiverWardId, 10),
            receiverDistrictId: parseInt(formData.receiverDistrictId, 10),
            senderProvinceId: parseInt(formData.senderProvinceId, 10),
            senderDistrictId: parseInt(formData.senderDistrictId, 10),
            senderWardId: parseInt(formData.senderWardId, 10),
            goodsId: parseInt(formData.goodsId, 10),
            weightId: parseInt(formData.weightId, 10),
            insuranceId: parseInt(formData.insuranceId, 10),
            userId: userData.userId
        };    
        console.log(requestData);     
        sendDataToAPI(requestData);
        alert("Tạo đơn hàng thành công");
        history("/orderlist");
    }
    const calculateShippingFee = () => {
        const {
          weightId,
          regironsId,
          goodsId,
          proceeds,
          insuranceId
        } = formData;
        const handleSubmit = (e) => {
            e.preventDefault();
            setShippingFee(fee);
    
        const weightValue = weight.find((item) => item.id === formData.weightId).weightValue;
        const regironsId = parseInt(regironsId, 10);
        const goodsName = good.find((item) => item.id === formData.goodsId).goodsName;
        const insuranceValue = insurance.find(item => item.id === parseInt(insuranceId, 10)).insuranceValue;
        
    
        let fee = 0;
    
        
        const handleChange = (e, callback) => {
            formData[e.target.name] = e.target.value;
            setFormData(formData);
        
            if (weightValue <= 5) {
                fee = 10000;
              } else if (weightValue <= 30) {
                fee = 30000;
              } else if (weightValue <= 100) {
                fee = 50000;
              } else {
                fee = 70000;
              }
          
              if (regironsId === 1) { // Miền Bắc
                fee += 30000;
              } else if (regironsId === 2 || regironsId === 3) { // Miền Trung hoặc Miền Nam
                fee += 40000;
              } else { // Nội tỉnh
                fee += 25000;
              }
          
              if (goodsName === "dễ vỡ") {
                fee += 10000;
              } else if (goodsName === "thực phẩm") {
                fee += 5000;
              }
          
              const insuranceFee = (proceeds * insuranceValue) / 100;
              fee += insuranceFee;
            const fee = calculateShippingFee();
            setShippingFee(fee);
        
            if (typeof callback === 'function') {
              callback(e);
            }
        }
    
        
      };
    
    return(
        <div className="container">
            <Sidebar/>
            <div className="row" style={{marginTop: '100px',marginLeft: '120px'}}>
                <div className="col-md-6">
                <img style={{height: '1022px'}} src={giaohang} alt=""/>
            </div>
            <div className="col-md-6">
                <form id="taodon" onSubmit={handleSubmit} style={{backgroundColor: 'rgb(249, 191, 56)', borderRadius: '5px', padding: '20px'}}>
                    <h1 style={{textAlign: 'center'}}>Thông tin người gửi</h1>
                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control" name="senderName" placeholder="Họ và tên"/>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-12">
                        <input onChange={handleChange} type="tel" className="form-control" name="senderPhone" placeholder="Số điện thoại"/>
                    </div>
                    </div>
                    {/* <div className="form-row"> */}
                    <div className="form-group col-md-4">
                        <label for="inputState">Tỉnh/Thành phố</label>
                        <select id="inputState" onChange={(event) => handleChange(event, handleSelectProvince)} name="senderProvinceId" className="form-control">
                            <option>Thành phố...</option>
                            {
                            provinces?.map(item => <option value={parseInt(item.provinceId)}>{item.provinceName}</option>)
                            }
                        </select>
                        </div>

                    <div className="form-group col-md-4">
                        <label for="inputState">Quận/Huyện</label>
                        <select id="inputState" onChange={(event) => handleChange(event, handleSelectDistrict)} name="senderDistrictId" className="form-control">
                        <option>Quận Huyện...</option>
                        {
                            districts?.map(item  => <option value={item.districtId}>{item.districtName}</option>)
                        }
                        </select>
                    </div>
                    
                    <div className="form-group col-md-4">
                        <label for="inputState">Phường/Xã</label>
                        <select id="inputState" onChange={handleChange} className="form-control" name="senderWardId">
                        <option >Phường Xã...</option>
                        {
                            wards?.map(item  => <option value={item.wardCode}>{item.wardName}</option>)
                        }
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <input onChange={handleChange} type="text" className="form-control" name="senderAddress" id="inputAddress" placeholder="Địa chỉ (Số nhà, tên toà nhà, tên đường, khu dân cư,...)"/>
                        </div>
                        <div className="form-group col-md-6">
                            <select id="inputState" onChange={handleChange} name="goodsId" className="form-control">
                                {
                                good?.map(item  => <option value={item.id}>{item.goodsName}</option>)
                                }
                            </select>
                        </div>  
                        <div className="form-group col-md-6">
                            <select id="inputState" onChange={handleChange} className="form-control" name="weightId">
                                <option selected>Trọng lượng</option>
                                {
                                weight?.map(item  => <option value={item.id}>{item.weightName}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                        <select id="inputState" onChange={handleChange} className="form-control" name="insuranceId">
                            <option selected>Giá trị đơn hàng</option>
                            {
                                insurance?.map(item  => <option value={item.id}>{item.insuranceName}</option>)
                                }
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="number" onChange={handleChange} className="form-control" name="proceeds" placeholder="Số tiền thu hộ VNĐ"/>
                    </div>
                        <div className=" form-group col-md-12">
                        <textarea className="form-control" onChange={handleChange} name="note" rows="3" placeholder="Ghi chú"></textarea>
                        </div>
                        <h1 style={{textAlign: 'center', width: '100%'}}>Thông tin người nhận</h1>
                        <div className="form-group col-md-12">
                            <input onChange={handleChange} type="text" className="form-control" id="name" name="receiverName" placeholder="Họ và tên"/>
                        </div>
                        <div className="form-group  col-md-12">
                            <input onChange={handleChange} type="tel" className="form-control" id="tel" name="receiverPhone" placeholder="Số điện thoại"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputState">Tỉnh/Thành phố</label>
                                <select id="inputState" name="receiverProvinceId" onChange={(event) => handleChange(event, handleSelectProvince)} className="form-control">
                                <option>Thành phố...</option>
                                {
                                    provinces?.map(item => <option value={item.provinceId}>{item.provinceName}</option>)
                                }
                                </select>
                            </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Quận/Huyện</label>
                            <select id="inputState" name="receiverDistrictId" onChange={(event) => handleChange(event, handleSelectDistrict)} className="form-control">
                            <option>Quận Huyện...</option>
                            {
                                districts?.map(item  => <option value={item.districtId}>{item.districtName}</option>)
                            }
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">Phường</label>
                            <select id="inputState" name="receiverWardId" onChange={handleChange} className="form-control">
                            <option>Phường Xã...</option>
                            {
                                wards?.map(item  => <option value={item.wardCode}>{item.wardName}</option>)
                            }
                            </select>
                        </div>
                        <div className="form-group col-md-12">
                            <input onChange={handleChange} type="text" className="form-control" name="receiverAddress" id="inputAddress" placeholder="Địa chỉ (Số nhà, tên toà nhà, tên đường, khu dân cư,...)"/>
                        </div>  
                    </div>
                    <div className="form-row col-md-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary" style={{width: '40%'}}>Tạo đơn</button>
                    </div>                    
                </form>
        </div>        
    </div>
    </div>
    );
}
}

export default Taodon1;